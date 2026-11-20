// lib/blog-types.ts

/** What the blog listing and the related-articles row need. */
export interface BlogListItem {
  slug: string;
  title: string;
  /** Already prefixed, for example "Written by Mary and Eniola". Empty if unknown. */
  author: string;
  /** For example "13 July, 2026". */
  date: string;
  excerpt: string;
  /** Sanity CDN URL, or null to fall back to the default hero image. */
  coverImage: string | null;
  /** Empty string when the post has no category (the current Sanity data has none). */
  category: string;
}

/** A run of text inside a paragraph, so bold phrases survive. */
export interface TextPart {
  text: string;
  bold: boolean;
}

export type BodyBlock =
  | { type: "p"; parts: TextPart[] }
  | { type: "h"; text: string }
  | { type: "img"; src: string; alt: string };

export interface BlogArticleData extends BlogListItem {
  /** For example "4th July 2026". */
  publishedLabel: string;
  /** For example "5 mins read". */
  readTime: string;
  body: BodyBlock[];
}