

export type BlogCategory = "Leadership" | "Interview";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  body: string[]; // one string per paragraph — stands in for Sanity's portable text
  coverImage: string;
  authors: string[];
  publishedAt: string;
  readTime: string;
  category: BlogCategory;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "interview-with-henry-tabansi",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    body: [
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently. There are real stories and this is one of them.",
      "We were recently opportuned to interview Henry Tabansi, a fellow AIESECer, about his time in AIESEC and his experience being one of the youngest Vice Presidents of the Human resource team in AIESEC, where he oversaw the activities of over 150 human resource managers across 130 countries. Mind blown, right?",
      "Prior to this, Henry had held several positions on different teams in AIESEC, his most memorable being the time he was on the planning team for a conference in Kano.",
    ],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Interview",
  },
  {
    slug: "interview-tabansi",
    title: "Leadership",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    body: [
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently. There are real stories and this is one of them.",
      "We were recently opportuned to interview Henry Tabansi, a fellow AIESECer, about his time in AIESEC and his experience being one of the youngest Vice Presidents of the Human resource team in AIESEC, where he oversaw the activities of over 150 human resource managers across 130 countries. Mind blown, right?",
      "Prior to this, Henry had held several positions on different teams in AIESEC, his most memorable being the time he was on the planning team for a conference in Kano.",
    ],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Leadership",
  },
];