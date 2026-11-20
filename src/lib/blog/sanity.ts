import "server-only";
import { toBlogPost } from "./content";
import { requestSanityJson } from "./request";
import type { SanityBlogArticle } from "./types";

const projectId = process.env.SANITY_PROJECT_ID || "vs95itr3";
const dataset = process.env.SANITY_DATASET || "production";
const apiVersion = "2025-02-19";
const publishedArticles = '_type == "blogArticle" && defined(slug.current) && !(_id in path("drafts.**"))';
const imageFields = '"url": asset->url, alt, "width": asset->metadata.dimensions.width, "height": asset->metadata.dimensions.height';
const fields = `
  _id, title, "slug": slug.current,
  "coverImage": coverImage { ${imageFields} },
  caption, "author": author->{name}, postedDate,
  "category": select(defined(category->title) => category->title, category),
  "categories": categories[]->title,
  content[] {
    _key, _type, text, subtitle, caption, videoId, title,
    "image": image { ${imageFields} }
  }
`;

async function query<T>(groq: string, params: Record<string, string | number> = {}): Promise<T> {
  if (!/^[a-z0-9]+$/.test(projectId) || !/^[a-z0-9_-]+$/.test(dataset)) {
    throw new Error("Invalid Sanity project or dataset configuration.");
  }
  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set("query", groq);
  url.searchParams.set("perspective", "published");
  for (const [name, value] of Object.entries(params)) {
    url.searchParams.set(`$${name}`, JSON.stringify(value));
  }
  const token = process.env.SANITY_API_TOKEN || process.env.AIESEC_SANITY_TOKEN;
  const data = await requestSanityJson<{ result: T; error?: unknown }>(url, token);
  if (data.error || !("result" in data)) throw new Error("Sanity returned an invalid blog response.");
  return data.result;
}

export async function getBlogArticles(limit?: number) {
  const slice = limit === undefined ? "" : "[0...$limit]";
  const articles = await query<SanityBlogArticle[]>(
    `*[${publishedArticles}] | order(postedDate desc, _id asc)${slice}{${fields}}`,
    limit === undefined ? {} : { limit },
  );
  return articles.map(toBlogPost);
}

export async function getBlogArticleBySlug(slug: string) {
  const article = await query<SanityBlogArticle | null>(
    `*[${publishedArticles} && slug.current == $slug][0]{${fields}}`,
    { slug },
  );
  return article ? toBlogPost(article) : null;
}

export async function getRelatedBlogArticles(slug: string, limit = 3) {
  const articles = await query<SanityBlogArticle[]>(
    `*[${publishedArticles} && slug.current != $slug] | order(postedDate desc, _id asc)[0...$limit]{${fields}}`,
    { slug, limit },
  );
  return articles.map(toBlogPost);
}
