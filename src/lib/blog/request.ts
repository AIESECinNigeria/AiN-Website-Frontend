const transientCodes = new Set([
  "EAI_AGAIN", "ENOTFOUND", "ECONNRESET", "ECONNREFUSED", "ETIMEDOUT",
  "UND_ERR_CONNECT_TIMEOUT", "UND_ERR_SOCKET",
]);

class SanityHttpError extends Error {
  constructor(readonly status: number) {
    super(`Sanity blog request failed (${status}).`);
  }
}

function isTransientFailure(error: unknown): boolean {
  if (error instanceof SanityHttpError) return [502, 503, 504].includes(error.status);
  if (!(error instanceof Error)) return false;
  if (error.name === "TimeoutError") return true;
  const cause = error.cause ?? error;
  return typeof cause === "object" && cause !== null && "code" in cause &&
    typeof cause.code === "string" && transientCodes.has(cause.code);
}

/** Retry published reads through Sanity's official CDN when the API is temporarily unreachable. */
export async function requestSanityJson<T>(url: URL, token?: string): Promise<T> {
  if (!/^[a-z0-9]+\.api\.sanity\.io$/.test(url.hostname)) {
    throw new Error("Invalid Sanity API hostname.");
  }
  const cdnUrl = new URL(url);
  cdnUrl.hostname = url.hostname.replace(".api.sanity.io", ".apicdn.sanity.io");
  const endpoints = [url, cdnUrl, url];

  for (let attempt = 0; attempt < endpoints.length; attempt++) {
    try {
      const response = await fetch(endpoints[attempt], {
        cache: "no-store",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        // A separate signal makes every retry a real request rather than a memoized failure.
        signal: AbortSignal.timeout(5000),
      });
      if (!response.ok) {
        await response.body?.cancel();
        throw new SanityHttpError(response.status);
      }
      return await response.json() as T;
    } catch (error) {
      if (!isTransientFailure(error)) throw error;
      if (attempt === endpoints.length - 1) {
        throw new Error("Sanity blog content is temporarily unreachable after 3 attempts.", { cause: error });
      }
      await new Promise((resolve) => setTimeout(resolve, 200 * (attempt + 1)));
    }
  }
  throw new Error("Sanity blog request did not complete.");
}
