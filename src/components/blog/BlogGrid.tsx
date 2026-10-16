"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import CloudImage from "@/components/CloudImage";

interface Article {
  title: string;
  author: string;
  date: string;
  excerpt: string;
  imageId: string;
  category: "Leadership" | "Interview";
  slug: string;
}

const articles: Article[] = [
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-2",
    category: "Interview",
    slug: "interview-with-henry-tabansi",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-2",
    category: "Interview",
    slug: "interview-with-henry-tabansi",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-2",
    category: "Leadership",
    slug: "interview-with-henry-tabansi",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-3",
    category: "Leadership",
    slug: "interview-with-henry-tabansi",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-3",
    category: "Interview",
    slug: "interview-with-henry-tabansi",
  },
  {
    title: "Interview with Henry Tabansi",
    author: "Written by Mary and Eniola",
    date: "13 July, 2026",
    excerpt:
      "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…",
    imageId: "stat-avatar-3",
    category: "Leadership",
    slug: "interview-with-henry-tabansi",
  },
];

const filters = ["All Articles", "Leadership", "Interview"] as const;
type Filter = (typeof filters)[number];

/**
 * The blog listing: heading, filters, search, and the article grid.
 *
 * Pass `embedded` to use it inside another section (e.g. the home page):
 * it then renders only the first `limit` articles, with no heading, intro,
 * filters, section padding or Load More button.
 */
export default function BlogGrid({
  embedded = false,
  limit = 3,
}: {
  /** Home-page mode: grid only. */
  embedded?: boolean;
  /** How many articles to show when embedded. */
  limit?: number;
}) {
  const [filter, setFilter] = useState<Filter>("All Articles");
  const [query, setQuery] = useState("");
  const [visible, setVisible] = useState(6);
  const [filterOpen, setFilterOpen] = useState(false);

  const selectFilter = (name: Filter) => {
    setFilter(name);
    setVisible(6);
    setFilterOpen(false);
  };

  const handleQuery = (value: string) => {
    setQuery(value);
    setVisible(6);
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return articles.filter((article) => {
      const matchesFilter =
        filter === "All Articles" || article.category === filter;
      const matchesQuery =
        !q ||
        article.title.toLowerCase().includes(q) ||
        article.excerpt.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  const shown = embedded
    ? filtered.slice(0, limit)
    : filtered.slice(0, visible);

  return (
    <section
      id={embedded ? undefined : "episodes"}
      className={embedded ? "" : "px-6 py-14 lg:px-20 lg:py-20"}
    >
      {!embedded && (
        <>
          <h2 className="text-center text-4xl font-bold text-aiesec-blue lg:text-5xl">
            Our Blog
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-[165%] text-gray-600 lg:text-lg">
            AIESEC has shaped countless young lives, and your story could be next.
            Explore stories and experiences from our community as young people find
            their voice, build confidence, and grow into leaders.
          </p>

          {/* Filters + search */}
          <div className="mx-auto mt-10 max-w-[1300px]">
            {/* Desktop: pill filters on the left, search on the right */}
            <div className="hidden lg:flex lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3">
                {filters.map((name) => (
                  <button
                    key={name}
                    type="button"
                    onClick={() => selectFilter(name)}
                    className={`cursor-pointer rounded-full px-5 py-2.5 text-base font-medium transition-colors ${
                      filter === name
                        ? "bg-aiesec-blue text-white"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {name}
                  </button>
                ))}
              </div>

              <SearchBox
                value={query}
                onChange={handleQuery}
                className="w-[320px]"
              />
            </div>

            {/* Mobile: search on the left, filter dropdown on the right */}
            <div className="flex items-center gap-3 lg:hidden">
              <SearchBox
                value={query}
                onChange={handleQuery}
                className="flex-1"
              />

              <div className="relative shrink-0">
                <button
                  type="button"
                  onClick={() => setFilterOpen((open) => !open)}
                  aria-haspopup="listbox"
                  aria-expanded={filterOpen}
                  className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-3 text-sm font-medium text-gray-700"
                >
                  {filter === "All Articles" ? "All" : filter}
                  <ChevronDownIcon
                    className={`size-4 text-gray-500 transition-transform duration-200 ${
                      filterOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {filterOpen && (
                  <>
                    <button
                      type="button"
                      aria-hidden="true"
                      tabIndex={-1}
                      onClick={() => setFilterOpen(false)}
                      className="fixed inset-0 z-10 cursor-default"
                    />
                    <ul
                      role="listbox"
                      className="absolute right-0 z-20 mt-2 w-44 overflow-hidden rounded-2xl border border-gray-100 bg-white py-1 shadow-lg"
                    >
                      {filters.map((name) => (
                        <li
                          key={name}
                          role="option"
                          aria-selected={filter === name}
                        >
                          <button
                            type="button"
                            onClick={() => selectFilter(name)}
                            className={`block w-full px-5 py-2.5 text-left text-sm transition-colors ${
                              filter === name
                                ? "font-semibold text-aiesec-blue"
                                : "text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      )}

      {/* Grid */}
      <div
        className={`mx-auto grid max-w-[1300px] gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 ${
          embedded ? "" : "mt-10"
        }`}
      >
        {shown.map((article, index) => (
          <article key={`${article.imageId}-${index}`}>
            <Link href={`/blog/${article.slug}`} className="group block">
              <div className="relative overflow-hidden rounded-2xl">
                <CloudImage
                  id={article.imageId}
                  alt={article.title}
                  className="aspect-[434/278] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
                <span className="absolute bottom-3 right-3 flex size-9 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 shadow-md transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRightIcon className="size-4" />
                </span>
              </div>
              <div className="mt-3 flex items-center justify-between text-sm italic text-gray-500">
                <span>{article.author}</span>
                <span>{article.date}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900 lg:text-2xl">
                {article.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500 lg:text-base">
                {article.excerpt}
              </p>
            </Link>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-base text-gray-500">
          No articles match your search.
        </p>
      )}

      {!embedded && visible < filtered.length && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisible((count) => count + 6)}
            className="cursor-pointer rounded-full bg-aiesec-blue px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90 lg:text-lg"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

function SearchBox({
  value,
  onChange,
  className = "",
}: {
  value: string;
  onChange: (value: string) => void;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <SearchIcon className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-gray-400" />
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search"
        aria-label="Search articles"
        className="w-full rounded-full bg-gray-100 py-3 pl-11 pr-5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-aiesec-blue/40 lg:text-base"
      />
    </div>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
      <path
        d="m20 20-3.5-3.5"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}