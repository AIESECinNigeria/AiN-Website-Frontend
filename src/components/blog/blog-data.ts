export type BlogCategory = "Leadership" | "Interview";

export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "image"; src: string; alt?: string; caption?: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: BlogContentBlock[];
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
    content: [
      {
        type: "paragraph",
        text: "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently. There are real stories and this is one of them.",
      },
      {
        type: "paragraph",
        text: "We were recently opportuned to interview Henry Tabansi, a fellow AIESECer, about his time in AIESEC and his experience being one of the youngest Vice Presidents of the Human resource team in AIESEC, where he oversaw the activities of over 150 human resource managers across 130 countries. Mind blowing, right?",
      },
      {
        type: "paragraph",
        text: "Prior to this, Henry had held several positions on different teams in AIESEC, his most memorable being the time he was on the planning team for a conference in Kano. The team was at the extreme end of planning, and had no money to pull things out. All options from reaching out to potential sponsors, partners had been exhausted. So they did something crazy.",
      },

      {
        type: "image",
        src: "/blog/henry-tabansi-inline-1.jpg",
        alt: "",
        caption: "Henry and the team out on the streets of Kano.",
      },
      {
        type: "paragraph",
        text: "Henry and his team mates decided to go around the streets of Kano to sell AIESEC and tell people about their conference, also asking them to support in any way they could. Before you wonder what makes this interesting, I'll tell you.",
      },
      {
        type: "paragraph",
        text: "You see to say, there is something about AIESEC that just makes you find your way around every obstacle. AIESEC gives the platform to not just develop skills like the 'Solution-Orientation', but also make an impact.",
      },
      {
        type: "paragraph",
        text: "For Henry, AIESEC impacted his life, gave him an opportunity to network and meet people who have influence, who he is today. In his words, AIESEC also gave him an opportunity to develop transferable skills, and that's one thing he gets to see everywhere — when you go through an AIESEC experience, always be very conscious of the transferable skills that you take out of the opportunity, because you're not in AIESEC for AIESEC, you're in AIESEC for what you're going to be or do outside of it. It's the impact in the world that truly matters.",
      },
    ],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Interview",
  },
  {
    slug: "interview-with-henry-tabansi-2",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    content: [],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Leadership",
  },
  {
    slug: "interview-with-henry-tabansi-3",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    content: [],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Interview",
  },
  {
    slug: "interview-with-henry-tabansi-4",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    content: [],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Leadership",
  },
  {
    slug: "interview-with-henry-tabansi-5",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    content: [],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Interview",
  },
  {
    slug: "interview-with-henry-tabansi-6",
    title: "Interview with Henry Tabansi",
    excerpt:
      "AIESEC has impacted lives, and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently.",
    content: [],
    coverImage: "/blog/henry-tabansi-cover.jpg",
    authors: ["Mary", "Eniola"],
    publishedAt: "13 July, 2026",
    readTime: "5 min read",
    category: "Leadership",
  },
];