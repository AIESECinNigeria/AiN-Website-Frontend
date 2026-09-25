"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts, type BlogPost } from "./blog-data";

const RELATED_PAGE_SIZE = 3;

function ShareRow({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  }

  return (
    <div className="flex flex-col gap-2 mt-4 md:mt-0">
      <span className="text-base sm:text-lg lg:text-xl font-semibold text-[#00000E]">Share this blog</span>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={handleCopyLink}
          className="flex cursor-pointer items-center gap-2 rounded-full border border-aiesec-blue px-4 py-2 text-sm font-medium text-aiesec-blue transition-colors hover:bg-aiesec-blue hover:text-white"
        >
          <LinkIcon className="size-4" />
          Copy Link
        </button>

        <a
          href="https://www.instagram.com/aiesecinnigeria"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full bg-gradient-to-tr from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white transition-opacity hover:opacity-90"
          aria-label="Share on Instagram"
        >
          <InstagramIcon className="size-4" />
        </a>

        <a
          href={`https://wa.me/?text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full bg-[#25D366] text-white transition-opacity hover:opacity-90"
          aria-label="Share on WhatsApp"
        >
          <WhatsAppIcon className="size-4" />
        </a>

        <a
          href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full bg-black text-white transition-opacity hover:opacity-90"
          aria-label="Share on X"
        >
          <XIcon className="size-4" />
        </a>

        <a
          href="https://www.linkedin.com/sharing/share-offsite/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-9 items-center justify-center rounded-full bg-[#0A66C2] text-white transition-opacity hover:opacity-90"
          aria-label="Share on LinkedIn"
        >
          <LinkedInIcon className="size-4" />
        </a>

        {copied && (
          <span className="text-xs text-aiesec-blue">Link copied</span>
        )}
      </div>
    </div>
  );
}

function RelatedCard({ post }: { post: BlogPost }) {
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
          <p className="text-base italic text-[#5C5C5C] font-semibold">
            Written by {post.authors.join(" and ")}
          </p>
          <p className="text-base italic text-[#5C5C5C]">{post.publishedAt}</p>
        </div>
        <h3 className="text-xl font-bold leading-8 tracking-[-1%] text-[#00000E]">
          {post.title}
        </h3>
        <p className="line-clamp-3 text-base font-medium leading-[150%] tracking-[-1%] text-[#5C5C5C]">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}

function RelatedArticles({ post }: { post: BlogPost }) {
  const [visibleCount, setVisibleCount] = useState(RELATED_PAGE_SIZE);

  const relatedPosts = useMemo(() => {
    const others = blogPosts.filter((p) => p.slug !== post.slug);
    const sameCategory = others.filter((p) => p.category === post.category);
    const rest = others.filter((p) => p.category !== post.category);
    return [...sameCategory, ...rest];
  }, [post.slug, post.category]);

  const visiblePosts = relatedPosts.slice(0, visibleCount);
  const hasMore = visibleCount < relatedPosts.length;

  if (relatedPosts.length === 0) return null;

  return (
    <div className="mt-4 bg-white pt-10 lg:pt-16">
      <h2 className="text-2xl font-extrabold leading-10 tracking-[-2%] text-aiesec-blue sm:text-3xl">
        Related Articles
      </h2>

      <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePosts.map((relatedPost) => (
          <RelatedCard key={relatedPost.slug} post={relatedPost} />
        ))}
      </div>

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <button
            type="button"
            onClick={() =>
              setVisibleCount((count) => count + RELATED_PAGE_SIZE)
            }
            className="cursor-pointer rounded-full bg-aiesec-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <article>
      <div className="px-6 py-10 lg:px-20 lg:py-16 bg-[#FCFCFC]">
        <div className="mx-auto flex flex-col gap-6">
          <Link
            href="/blog"
            className="inline-flex w-fit items-center gap-1 text-base font-medium text-[#00000E] hover:text-aiesec-blue leading-[150%] tracking-[-1%]"
          >
            <ArrowLeftIcon className="size-4" />
            Back
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4 w-full md:w-[67%]">
              <p className="text-sm text-[#5C5C5C]">
                Published {post.publishedAt} &middot; {post.readTime}
              </p>

              <h1 className="text-3xl font-bold leading-[120%] tracking-[-1%] text-[#00000E] sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>

              <p className="text-base leading-[150%] tracking-[-1%] text-[#5C5C5C] sm:text-lg lg:text-xl font-medium">
                {post.excerpt}
              </p>

              <p className="text-sm sm:text-base lg:text-lg italic text-[#5C5C5C] leading-6 tracking-[-1%]">
                Written by {post.authors.join(" and ")}
              </p>
            </div>

            <ShareRow post={post} />
          </div>

          <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[340px] lg:h-[420px]">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col gap-6">
            {post.content.map((block, index) => {
              if (block.type === "paragraph") {
                return (
                  <p
                    key={index}
                    className="text-base leading-[170%] tracking-[-1%] text-[#363636] sm:text-lg lg:text-xl"
                  >
                    {block.text}
                  </p>
                );
              }

              return (
                <figure key={index} className="flex flex-col gap-3">
                  <div className="relative h-[240px] w-full overflow-hidden rounded-2xl bg-gray-100 sm:h-[340px] lg:h-[420px]">
                    <Image
                      src={block.src}
                      alt={block.alt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 1024px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {block.caption && (
                    <figcaption className="text-center text-sm text-[#5C5C5C]">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>

          <div className="mt-4 pt-6">
            <ShareRow post={post} />
          </div>
        </div>
        <RelatedArticles post={post} />
      </div>
    </article>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M19 12H5M11 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpRightIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M7 17L17 7M17 7H9M17 7v8"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M10 14a5 5 0 007.07 0l2-2a5 5 0 00-7.07-7.07l-1 1M14 10a5 5 0 00-7.07 0l-2 2a5 5 0 007.07 7.07l1-1"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke="currentColor"
        strokeWidth={2}
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={2} />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.3c-.2.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.8-2.1 1.1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.5.4.1.2.1.7-.1 1.4z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.1-6.7L4.9 22H1.8l8.1-9.3L1 2h7.5l4.6 6.1L18.9 2zm-1.3 18h1.7L7.5 4H5.6l12 16z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 5a2 2 0 11-4-.02 2 2 0 014 .02zM7 8.5H3V21h4V8.5zM13.5 8.5H9.7V21h3.8v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21H22v-7.2c0-3.5-.7-6.1-4.6-6.1-1.9 0-3.1 1-3.7 2h-.05V8.5z" />
    </svg>
  );
}