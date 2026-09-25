"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, type BlogCategory, type BlogPost } from "./blog-data";

const PAGE_SIZE = 6;
const categories: Array<BlogCategory | "All Articles"> = ["All Articles", "Leadership", "Interview"];

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group flex flex-col gap-4">
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-[20px] bg-gray-100">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 32vw, (min-width: 640px) 46vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
        <span className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-white text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <ArrowUpRightIcon className="size-4" />
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-base italic text-[#5C5C5C]">Written by {post.authors.join(" and ")}</p>
          <p className="text-base italic text-[#5C5C5C]">{post.publishedAt}</p>
        </div>
        <h3 className="text-xl font-bold leading-8 tracking-[-1%] text-[#00000E]">{post.title}</h3>
        <p className="line-clamp-3 text-base font-medium leading-[150%] tracking-[-1%] text-[#5C5C5C]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

export default function BlogGrid() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All Articles");
  const [search, setSearch] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = activeCategory === "All Articles" || post.category === activeCategory;
      const matchesSearch = post.title.toLowerCase().includes(search.trim().toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const visiblePosts = filteredPosts.slice(0, visibleCount);

  const hasMore = filteredPosts.length >= PAGE_SIZE;

  return (
    <section className="px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-extrabold leading-18 tracking-[-2%] text-aiesec-blue sm:text-4xl lg:text-5xl">
          Our Blog
        </h2>
        <p className="text-base text-[#5C5C5C] md:text-xl w-full lg:w-[75%]">
          AIESEC has shaped countless young lives, and your story could be next. Explore stories
          and experiences from our community as young people find their voice, build confidence,
          and grow into leaders.
        </p>
      </div>

      <div className="mx-auto mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(PAGE_SIZE);
                }}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-lg font-medium transition-colors hover:scale-105 ${
                  isActive ? "border-aiesec-blue bg-aiesec-blue text-white" : "bg-[#F4F4F4] text-[#5C5C5C]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="relative w-full md:w-[30%]">
          <SearchIcon className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-[#5C5C5C]" />
          <input
            type="search"
            value={search}
            onChange={(event) => {
              setSearch(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            placeholder="Search"
            className="w-full rounded-full border-[#D9D9D9] bg-[#F0F0F0] py-3 pl-9 pr-6 text-base text-[#5C5C5C] outline-none focus:border-aiesec-blue"
          />
        </div>
      </div>

      <div className="mx-auto mt-10 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>

      {visiblePosts.length === 0 && (
        <p className="mt-10 text-center text-sm text-[#5C5C5C]">No articles match that search.</p>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
            className="cursor-pointer rounded-full bg-aiesec-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth={2} />
      <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M7 17L17 7M17 7H9M17 7v8" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}