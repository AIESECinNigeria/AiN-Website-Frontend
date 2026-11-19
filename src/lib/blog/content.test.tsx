import assert from "node:assert/strict";
import { test } from "node:test";
import { renderToStaticMarkup } from "react-dom/server";
import BlogRichText from "../../components/blog/BlogRichText";
import { plainText, safeLink, toBlogPost, youtubeEmbedUrl } from "./content";
import type { SanityBlogArticle, TextBlock } from "./types";

const block = (text: string, extra: Partial<TextBlock> = {}): TextBlock => ({
  _type: "block",
  children: [{ _type: "span", text }],
  ...extra,
});

const article: SanityBlogArticle = {
  _id: "published-article",
  title: "A real CMS article",
  slug: "a-real-cms-article",
  author: { name: "CMS Author" },
  postedDate: "2026-07-13T23:30:00Z",
  caption: [block("The actual caption")],
  content: [{ _type: "paragraph", text: [block("The actual body.")] }],
};

test("CMS author, title, caption and date replace placeholders without timezone drift", () => {
  const post = toBlogPost(article);
  assert.equal(post.title, article.title);
  assert.equal(post.slug, article.slug);
  assert.equal(post.author, "Written by CMS Author");
  assert.equal(post.date, "13 Jul 2026");
  assert.equal(post.publishedDate, "13 July 2026");
  assert.equal(post.excerpt, "The actual caption");
  assert.deepEqual(post.categories, []);
});

test("missing optional CMS fields use body excerpts and never invent authors or dates", () => {
  const post = toBlogPost({ ...article, caption: null, author: null, postedDate: "invalid" });
  assert.equal(post.excerpt, "The actual body.");
  assert.equal(post.author, "");
  assert.equal(post.date, "");
  assert.equal(post.postedDate, null);
});

test("reading time counts all paragraphs while a leading image does not hide the excerpt", () => {
  const post = toBlogPost({ ...article, caption: null, content: [
    { _type: "imageSection", caption: "A picture" },
    { _type: "paragraph", text: [block(Array(401).fill("word").join(" "))] },
  ] });
  assert.equal(post.readingMinutes, 3);
  assert.ok(post.excerpt.startsWith("word word"));
  assert.ok(post.excerpt.length <= 240);
});

test("plain-text previews concatenate marked spans and preserve paragraph breaks", () => {
  assert.equal(plainText([block("one"), block("two")]), "one\n\ntwo");
  assert.equal(plainText(null), "");
});

test("article links accept supported URLs and reject active or ambiguous URLs", () => {
  for (const href of ["https://aiesec.ng", "mailto:hello@aiesec.ng", "/blog/story", "#heading"]) assert.equal(safeLink(href), href);
  for (const href of ["javascript:alert(1)", "data:text/html,hello", "//evil.test", "/\\evil.test", "/\nevil.test"]) assert.equal(safeLink(href), undefined);
});

test("old YouTube IDs and embed/watch/share URLs all produce valid YouTube embeds", () => {
  const expected = "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ";
  for (const value of ["dQw4w9WgXcQ", "https://www.youtube.com/embed/dQw4w9WgXcQ", "https://youtube.com/watch?v=dQw4w9WgXcQ", "https://youtu.be/dQw4w9WgXcQ"]) assert.equal(youtubeEmbedUrl(value), expected);
  assert.equal(youtubeEmbedUrl("https://evil.test/embed/dQw4w9WgXcQ"), undefined);
  assert.equal(youtubeEmbedUrl("not-an-id"), undefined);
});

test("Portable Text preserves decorators, safe links, headings, quotes and line breaks", () => {
  const html = renderToStaticMarkup(<BlogRichText value={[
    block("Heading", { style: "h3" }),
    block("Quote", { style: "blockquote" }),
    { _type: "block", children: [{ _type: "span", text: "Bold\nlinked", marks: ["strong", "em", "underline", "strike-through", "link"] }], markDefs: [{ _key: "link", _type: "link", href: "https://aiesec.ng", blank: true }] },
    { _type: "block", children: [{ _type: "span", text: "Unsafe", marks: ["bad"] }], markDefs: [{ _key: "bad", _type: "link", href: "javascript:alert(1)" }] },
  ]} />);
  for (const tag of ["h3", "blockquote", "strong", "em", "u", "s"]) assert.ok(html.includes(`<${tag}`));
  assert.ok(html.includes("<br"));
  assert.ok(html.includes('rel="noopener noreferrer"'));
  assert.ok(html.includes("Unsafe"));
  assert.ok(!html.includes("javascript:"));
});

test("Portable Text keeps nested bullets and ordered lists in reading order", () => {
  const html = renderToStaticMarkup(<BlogRichText value={[
    block("Parent", { listItem: "bullet", level: 1 }),
    block("Child", { listItem: "number", level: 2 }),
    block("Sibling", { listItem: "bullet", level: 1 }),
    block("Ordered", { listItem: "number", level: 1 }),
    block("After the list"),
  ]} />);
  assert.equal((html.match(/<ul/g) ?? []).length, 1);
  assert.equal((html.match(/<ol/g) ?? []).length, 2);
  assert.ok(html.indexOf("Parent") < html.indexOf("Child"));
  assert.ok(html.indexOf("Child") < html.indexOf("Sibling"));
  assert.ok(html.includes("After the list"));
});
