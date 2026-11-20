export interface TextSpan {
  _type: "span";
  _key?: string;
  text: string;
  marks?: string[];
}

export interface TextBlock {
  _type: "block";
  _key?: string;
  style?: string;
  listItem?: "bullet" | "number";
  level?: number;
  children?: TextSpan[];
  markDefs?: { _key: string; _type: string; href?: string; blank?: boolean }[];
}

export interface BlogImageData {
  url: string;
  alt?: string;
  width?: number;
  height?: number;
}

export interface BlogContentSection {
  _key?: string;
  _type: string;
  text?: TextBlock[];
  subtitle?: string;
  image?: BlogImageData | null;
  caption?: string;
  videoId?: string;
  title?: string;
}

export interface SanityBlogArticle {
  _id: string;
  title: string;
  slug: string;
  coverImage?: BlogImageData | null;
  caption?: TextBlock[] | null;
  author?: { name?: string } | null;
  postedDate?: string | null;
  category?: string | null;
  categories?: string[] | null;
  content?: BlogContentSection[] | null;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  coverImage: BlogImageData | null;
  caption: TextBlock[];
  author: string;
  date: string;
  publishedDate: string;
  postedDate: string | null;
  excerpt: string;
  readingMinutes: number;
  categories: string[];
  content: BlogContentSection[];
}
