import assert from "node:assert/strict";
import { test } from "node:test";
import { requestSanityJson } from "./request";

const apiUrl = new URL("https://vs95itr3.api.sanity.io/v2025-02-19/data/query/production?query=article&perspective=published&%24slug=%22story%22");
const payload = { result: [{ title: "An actual Sanity response" }] };
const response = () => Response.json(payload);
const dnsError = () => new TypeError("fetch failed", { cause: Object.assign(new Error("getaddrinfo EAI_AGAIN"), { code: "EAI_AGAIN" }) });

async function withFetch(implementation: typeof fetch, check: () => Promise<void>) {
  const original = globalThis.fetch;
  globalThis.fetch = implementation;
  try { await check(); } finally { globalThis.fetch = original; }
}

test("successful API reads remain uncached and use a bounded timeout", async () => {
  let calls = 0;
  await withFetch(async (input, options) => {
    calls++;
    assert.equal(String(input), String(apiUrl));
    assert.equal(options?.cache, "no-store");
    assert.ok(options?.signal instanceof AbortSignal);
    return response();
  }, async () => assert.deepEqual(await requestSanityJson(apiUrl), payload));
  assert.equal(calls, 1);
});

test("the logged EAI_AGAIN failure falls back to the official CDN without changing query or auth", async () => {
  const calls: URL[] = [];
  const signals: AbortSignal[] = [];
  await withFetch(async (input, options) => {
    calls.push(new URL(String(input)));
    signals.push(options!.signal!);
    assert.equal(new Headers(options?.headers).get("Authorization"), "Bearer test-read-token");
    if (calls.length === 1) throw dnsError();
    return response();
  }, async () => assert.deepEqual(await requestSanityJson(apiUrl, "test-read-token"), payload));
  assert.deepEqual(calls.map((url) => url.hostname), ["vs95itr3.api.sanity.io", "vs95itr3.apicdn.sanity.io"]);
  assert.equal(calls[1].pathname, apiUrl.pathname);
  assert.equal(calls[1].search, apiUrl.search);
  assert.notEqual(signals[0], signals[1]);
});

test("persistent DNS failures stop after three attempts and retain the original cause", async () => {
  const calls: string[] = [];
  await withFetch(async (input) => { calls.push(new URL(String(input)).hostname); throw dnsError(); }, async () => {
    await assert.rejects(requestSanityJson(apiUrl), (error: Error) => error.message.includes("after 3 attempts") && error.cause instanceof TypeError);
  });
  assert.deepEqual(calls, ["vs95itr3.api.sanity.io", "vs95itr3.apicdn.sanity.io", "vs95itr3.api.sanity.io"]);
});

test("temporary gateway failures retry through the CDN", async () => {
  let calls = 0;
  await withFetch(async () => ++calls === 1 ? new Response("Unavailable", { status: 503 }) : response(), async () => assert.deepEqual(await requestSanityJson(apiUrl), payload));
  assert.equal(calls, 2);
});

test("a request timeout can recover through a new attempt", async () => {
  let calls = 0;
  await withFetch(async () => { if (++calls === 1) throw new DOMException("Timed out", "TimeoutError"); return response(); }, async () => assert.deepEqual(await requestSanityJson(apiUrl), payload));
  assert.equal(calls, 2);
});

test("permanent query and authorization errors are not retried or hidden", async () => {
  for (const status of [400, 401, 403, 404]) {
    let calls = 0;
    await withFetch(async () => { calls++; return new Response("Permanent error", { status }); }, async () => assert.rejects(requestSanityJson(apiUrl), new RegExp(String(status))));
    assert.equal(calls, 1);
  }
});

test("invalid response JSON surfaces immediately", async () => {
  let calls = 0;
  await withFetch(async () => { calls++; return new Response("Not JSON"); }, async () => assert.rejects(requestSanityJson(apiUrl), SyntaxError));
  assert.equal(calls, 1);
});

test("tokens cannot be forwarded to an unrelated hostname", async () => {
  let calls = 0;
  await withFetch(async () => { calls++; return response(); }, async () => assert.rejects(requestSanityJson(new URL("https://example.com"), "test-read-token"), /Invalid Sanity API hostname/));
  assert.equal(calls, 0);
});
