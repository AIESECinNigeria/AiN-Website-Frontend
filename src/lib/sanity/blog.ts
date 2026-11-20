import { sanityClient } from "./client";
import type { BlogArticleData, BlogListItem, BodyBlock, TextPart } from "@/lib/blog-types";

interface SanitySpan {
  text?: string;
  marks?: string[];
}

interface SanityTextBlock {
  style?: string;
  children?: SanitySpan[];
}

// A post's content is a list of sections. "paragraph" sections hold a list of
// text blocks, "imageSection" sections hold one image with a caption.
interface SanityContentItem {
  _type: string;
  text?: SanityTextBlock[];
  src?: string;
  caption?: string;
}

interface SanityListDoc {
  title: string;
  slug: string;
  coverImage: string | null;
  author: string | null;
  postedDate: string | null;
  category: string | null;
  excerpt: string | null;
  previewA: string | null;
  previewB: string | null;
}

interface SanityArticleDoc extends SanityListDoc {
  content: SanityContentItem[] | null;
}

// Fields that do not exist in the schema (category, excerpt) simply come back
// as null, so they never break the query.
const LIST_FIELDS = `
  title,
  "slug": slug.current,
  "coverImage": coverImage.asset->url,
  "author": author->name,
  postedDate,
  category,
  excerpt,
  "previewA": pt::text(content[_type == "paragraph"][0].text),
  "previewB": pt::text(content[_type == "paragraph"][1].text)
`;

const ARTICLE_FIELDS = `
  ${LIST_FIELDS},
  content[]{
    _type,
    _type == "paragraph" => { text },
    _type == "imageSection" => { "src": image.asset->url, caption }
  }
`;

const REVALIDATE = { next: { revalidate: 60 } };

function dateParts(iso: string | null) {
  if (!iso) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  return {
    day: date.getUTCDate(),
    month: new Intl.DateTimeFormat("en-GB", { month: "long", timeZone: "UTC" }).format(date),
    year: date.getUTCFullYear(),
  };
}

function ordinal(day: number): string {
  if (day >= 11 && day <= 13) return `${day}th`;
  switch (day % 10) {
    case 1:
      return `${day}st`;
    case 2:
      return `${day}nd`;
    case 3:
      return `${day}rd`;
    default:
      return `${day}th`;
  }
}

function listDate(iso: string | null): string {
  const parts = dateParts(iso);
  return parts ? `${parts.day} ${parts.month}, ${parts.year}` : "";
}

function longDate(iso: string | null): string {
  const parts = dateParts(iso);
  return parts ? `${ordinal(parts.day)} ${parts.month} ${parts.year}` : "";
}

function truncate(text: string, max = 180): string {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return clean.slice(0, max).replace(/\s+\S*$/, "") + "…";
}

/** First chunk of text long enough to read as an intro, so one-word openers
 *  like "*peeps*" are skipped. */
function pickIntro(chunks: string[]): string {
  const cleaned = chunks.map((chunk) => chunk.replace(/\s+/g, " ").trim()).filter(Boolean);
  const best = cleaned.find((chunk) => chunk.length >= 50) ?? cleaned.join(" ");
  return truncate(best);
}

function toListItem(doc: SanityListDoc): BlogListItem {
  const previewText = [doc.previewA, doc.previewB].filter(Boolean).join("\n\n");

  return {
    slug: doc.slug,
    title: doc.title,
    author: doc.author ? `Written by ${doc.author}` : "",
    date: listDate(doc.postedDate),
    excerpt: doc.excerpt?.trim() || pickIntro(previewText.split(/\n{2,}/)),
    coverImage: doc.coverImage,
    category: doc.category ?? "",
  };
}

function plain(parts: TextPart[]): string {
  return parts.map((part) => part.text).join("");
}

// Text blocks become paragraphs (bold phrases kept), heading styles become
// headings, and empty spacer blocks are dropped.
function toBody(content: SanityContentItem[] | null): BodyBlock[] {
  const body: BodyBlock[] = [];

  for (const item of content ?? []) {
    if (item._type === "paragraph") {
      for (const block of item.text ?? []) {
        const parts: TextPart[] = (block.children ?? [])
          .map((span) => ({
            text: span.text ?? "",
            bold: (span.marks ?? []).includes("strong"),
          }))
          .filter((part) => part.text !== "");

        const text = plain(parts).trim();
        if (!text) continue;

        if (/^h[1-6]$/.test(block.style ?? "")) {
          body.push({ type: "h", text });
        } else {
          body.push({ type: "p", parts });
        }
      }
    } else if (item._type === "imageSection" && item.src) {
      body.push({ type: "img", src: item.src, alt: item.caption ?? "" });
    }
  }

  return body;
}

function toArticle(doc: SanityArticleDoc): BlogArticleData {
  const body = toBody(doc.content);
  const item = toListItem(doc);

  const paragraphs = body.flatMap((block) => (block.type === "p" ? [plain(block.parts)] : []));
  const words = paragraphs.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));

  return {
    ...item,
    // The article page shows the excerpt as its intro, so prefer a real paragraph.
    excerpt: doc.excerpt?.trim() || pickIntro(paragraphs),
    publishedLabel: longDate(doc.postedDate),
    readTime: `${minutes} ${minutes === 1 ? "min" : "mins"} read`,
    body,
  };
}

export async function getAllArticles(): Promise<BlogListItem[]> {
  const docs = await sanityClient.fetch<SanityListDoc[]>(
    `*[_type == "blogArticle" && defined(slug.current)] | order(postedDate desc){ ${LIST_FIELDS} }`,
    {},
    REVALIDATE,
  );
  return docs.map(toListItem);
}

export async function getArticle(slug: string): Promise<BlogArticleData | null> {
  const doc = await sanityClient.fetch<SanityArticleDoc | null>(
    `*[_type == "blogArticle" && slug.current == $slug][0]{ ${ARTICLE_FIELDS} }`,
    { slug },
    REVALIDATE,
  );
  return doc ? toArticle(doc) : null;
}

/** Up to `limit` other posts, same category first. */
export function pickRelated(all: BlogListItem[], current: BlogListItem, limit = 3): BlogListItem[] {
  const others = all.filter((post) => post.slug !== current.slug);
  const sameCategory = others.filter((post) => post.category && post.category === current.category);
  const rest = others.filter((post) => !sameCategory.includes(post));
  return [...sameCategory, ...rest].slice(0, limit);
}