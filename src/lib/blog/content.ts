import type { BlogPost, SanityBlogArticle, TextBlock } from "./types";

export function plainText(blocks: TextBlock[] | null | undefined): string {
  return (blocks ?? [])
    .map((block) => (block.children ?? []).map((span) => span.text).join(""))
    .join("\n\n")
    .trim();
}

export function toBlogPost(article: SanityBlogArticle): BlogPost {
  const content = article.content ?? [];
  const body = content.map((section) => plainText(section.text)).filter(Boolean).join("\n\n");
  const description = (plainText(article.caption) || body).replace(/\s+/g, " ").trim();
  const date = article.postedDate ? new Date(article.postedDate) : null;
  const validDate = date && !Number.isNaN(date.getTime());
  const dateOptions = { timeZone: "UTC", year: "numeric", day: "numeric" } as const;

  return {
    id: article._id,
    title: article.title,
    slug: article.slug,
    coverImage: article.coverImage ?? null,
    caption: article.caption ?? [],
    author: article.author?.name ? `Written by ${article.author.name}` : "",
    date: validDate ? new Intl.DateTimeFormat("en-GB", { ...dateOptions, month: "short" }).format(date) : "",
    publishedDate: validDate ? new Intl.DateTimeFormat("en-GB", { ...dateOptions, month: "long" }).format(date) : "",
    postedDate: validDate ? date.toISOString() : null,
    excerpt: description.length > 240 ? `${description.slice(0, 237).trimEnd()}…` : description,
    readingMinutes: Math.max(1, Math.ceil(body.split(/\s+/).filter(Boolean).length / 200)),
    categories: [...new Set([article.category, ...(article.categories ?? [])].filter((value): value is string => typeof value === "string" && value.trim().length > 0))],
    content,
  };
}

export function safeLink(href: string | undefined): string | undefined {
  if (!href) return;
  const value = href.trim();
  if (/^(?:\/(?![\/\\])|#)/.test(value) && !/[\u0000-\u001f\\]/.test(value)) return value;
  try {
    const url = new URL(value);
    if (["https:", "http:", "mailto:", "tel:"].includes(url.protocol)) return value;
  } catch {
    return;
  }
}

export function youtubeEmbedUrl(value: string | undefined): string | undefined {
  if (!value) return;
  let id = value.trim();
  if (!/^[\w-]{11}$/.test(id)) {
    try {
      const url = new URL(id);
      if (!["https:", "http:"].includes(url.protocol)) return;
      const host = url.hostname.toLowerCase();
      if (host === "youtu.be") id = url.pathname.slice(1).split("/")[0];
      else if (["youtube.com", "www.youtube.com", "m.youtube.com", "youtube-nocookie.com", "www.youtube-nocookie.com"].includes(host)) {
        id = url.searchParams.get("v") ?? url.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1] ?? "";
      } else return;
    } catch {
      return;
    }
  }
  return /^[\w-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : undefined;
}
