// components/Blog/BlogDetail.tsx
"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BlogPost } from "./blog-data";

function ShareRow({ post }: { post: BlogPost }) {
  const [copied, setCopied] = useState(false);

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-medium text-gray-700">Share this blog</span>
      <button
        type="button"
        onClick={handleCopyLink}
        className="flex size-8 cursor-pointer items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-aiesec-blue hover:text-aiesec-blue"
        aria-label="Copy link"
      >
        <LinkIcon className="size-4" />
      </button>
      <a
        href={`https://wa.me/?text=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-aiesec-blue hover:text-aiesec-blue"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon className="size-4" />
      </a>
      <a
        href={`https://x.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-aiesec-blue hover:text-aiesec-blue"
        aria-label="Share on X"
      >
        <XIcon className="size-4" />
      </a>
      <a
        href="https://www.linkedin.com/sharing/share-offsite/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex size-8 items-center justify-center rounded-full border border-gray-200 text-gray-600 transition-colors hover:border-aiesec-blue hover:text-aiesec-blue"
        aria-label="Share on LinkedIn"
      >
        <LinkedInIcon className="size-4" />
      </a>
      {copied && <span className="text-xs text-aiesec-blue">Link copied</span>}
    </div>
  );
}

export default function BlogDetail({ post }: { post: BlogPost }) {
  return (
    <article className="px-6 py-10 lg:px-20 lg:py-16">
      <div className="mx-auto flex flex-col gap-6">
        <Link
          href="/blog"
          className="inline-flex w-fit items-center gap-1 text-sm font-medium text-gray-600 hover:text-aiesec-blue"
        >
          <ArrowLeftIcon className="size-4" />
          Back
        </Link>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-gray-500">
            Published {post.publishedAt} &middot; {post.readTime}
          </p>
          <div className="hidden sm:block">
            <ShareRow post={post} />
          </div>
        </div>

        <h1 className="text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 sm:text-4xl">
          {post.title}
        </h1>

        <p className="text-sm text-gray-500">Written by {post.authors.join(" and ")}</p>

        <div className="sm:hidden">
          <ShareRow post={post} />
        </div>

        <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-100">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1024px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5">
          {post.body.map((paragraph, index) => (
            <p key={index} className="text-base leading-relaxed text-[#5C5C5C] sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-4 border-t border-gray-100 pt-6">
          <ShareRow post={post} />
        </div>
      </div>
    </article>
  );
}

function ArrowLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
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

function LinkIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
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

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 00-8.6 15L2 22l5.2-1.4A10 10 0 1012 2zm5.8 14.3c-.2.7-1.4 1.4-2 1.5-.5.1-1.1.1-1.8-.1-.4-.1-1-.3-1.7-.6-3-1.3-5-4.3-5.1-4.5-.2-.2-1.2-1.6-1.2-3s.8-2.1 1.1-2.4c.2-.3.5-.4.7-.4h.5c.2 0 .4 0 .6.4.2.5.7 1.7.8 1.9.1.2.1.4 0 .6-.1.2-.2.4-.4.6-.2.2-.4.4-.2.8.2.4.9 1.5 1.9 2.4 1.3 1.2 2.4 1.5 2.8 1.7.4.2.6.1.8-.1.2-.2.9-1 1.1-1.4.2-.4.4-.3.7-.2.3.1 1.7.8 2 1 .3.1.5.2.5.4.1.2.1.7-.1 1.4z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.9 2H22l-7.6 8.7L23.3 22H16l-5.1-6.7L4.9 22H1.8l8.1-9.3L1 2h7.5l4.6 6.1L18.9 2zm-1.3 18h1.7L7.5 4H5.6l12 16z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6.94 5a2 2 0 11-4-.02 2 2 0 014 .02zM7 8.5H3V21h4V8.5zM13.5 8.5H9.7V21h3.8v-6.4c0-1.7.3-3.3 2.4-3.3 2 0 2 1.9 2 3.4V21H22v-7.2c0-3.5-.7-6.1-4.6-6.1-1.9 0-3.1 1-3.7 2h-.05V8.5z" />
    </svg>
  );
}