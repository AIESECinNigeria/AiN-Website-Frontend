import Link from "next/link";
import BlogImage from "@/components/blog/BlogImage";
import BlogRichText from "@/components/blog/BlogRichText";
import { youtubeEmbedUrl } from "@/lib/blog/content";
import type { BlogContentSection, BlogPost } from "@/lib/blog/types";
import CopyLinkButton from "@/components/blog/CopyLinkButton";

export default function BlogArticle({ article, related }: { article: BlogPost; related: BlogPost[] }) {
  return (
    <article className="bg-white px-4 pt-[50px] pb-10 lg:bg-aiesec-section lg:px-20 lg:pt-[60px] lg:pb-0">
      <div className="mx-auto w-full max-w-[1352px]">
        <Link
          href="/blog"
          aria-label="Back to blog"
          className="mb-5 flex h-11 w-11 items-center justify-center gap-[5px] rounded-[40px] bg-[#F0F0F0] text-aiesec-gray transition-colors hover:bg-gray-200 lg:mb-[30px] lg:w-[93px] lg:border lg:border-[#CCCCCC] lg:px-[15px] lg:text-aiesec-heading"
        >
          <ChevronLeftIcon className="size-6 shrink-0" />
          <span className="hidden lg:inline">Back</span>
        </Link>

        <div className="flex flex-col items-start gap-5 lg:flex-row lg:items-end lg:gap-16">
          <div className="flex w-full flex-col items-start gap-[10px] lg:flex-1 lg:gap-[15px]">
            <p className="flex flex-wrap items-center gap-[5px] text-[14px] font-medium leading-[150%] tracking-[-0.01em] text-aiesec-gray lg:text-base">
              {article.publishedDate && <><span>Published {article.publishedDate}</span><span className="hidden lg:inline">~</span></>}<span>{article.readingMinutes} mins read</span>
            </p>

            <div className="flex w-full flex-col items-start gap-[5px] lg:gap-[15px]">
              <h1 className="text-[24px] font-extrabold leading-[135%] tracking-[-0.01em] text-aiesec-heading lg:text-[60px] lg:font-bold lg:leading-[72px] lg:tracking-[-0.02em]">
                {article.title}
              </h1>

              <div className="text-[14px] font-medium leading-[150%] tracking-[-0.01em] text-aiesec-gray lg:text-[20px]">
                {article.caption.length > 0 ? <BlogRichText value={article.caption} /> : <p>{article.excerpt}</p>}
              </div>

              <p className="text-[14px] font-semibold italic leading-5 tracking-[-0.01em] text-aiesec-gray lg:text-lg lg:leading-6">
                {article.author}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-[326px] lg:shrink-0">
            <ShareRow />
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-[20px] lg:mt-10">
          <BlogImage
            image={article.coverImage}
            alt={article.title}
            sizes="(max-width: 1023px) calc(100vw - 32px), calc(100vw - 160px)"
            loading="eager"
            className="aspect-[358/220] w-full object-cover lg:aspect-[1352/500]"
          />
        </div>

        <div className="mt-[14px] flex flex-col gap-6 text-base font-medium leading-[150%] tracking-[-0.01em] text-aiesec-neutral-800 lg:mt-10 lg:gap-8 lg:text-[20px] lg:leading-[170%]">
          {article.content.map((section, index) => (
            <ContentSection key={section._key ?? index} section={section} />
          ))}
        </div>

        <div className="mt-10 lg:hidden">
          <ShareRow />
        </div>
      </div>

      {related.length > 0 && <section className="-mx-4 mt-[30px] flex flex-col gap-6 bg-white px-4 py-0 lg:mx-0 lg:mt-[72px] lg:gap-12 lg:px-0 lg:py-[84px]">
        <h2 className="text-[24px] font-extrabold leading-[135%] tracking-[-0.01em] text-aiesec-blue lg:text-[48px] lg:leading-[120%]">
          Related Articles
        </h2>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-6">
          {related.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block pb-[5px] lg:pb-0">
              <div className="overflow-hidden rounded-[20px]">
                <BlogImage
                  image={post.coverImage}
                  alt={post.title}
                  className="aspect-[358/200] w-full object-cover lg:aspect-[434.67/281]"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-[6px] text-[14px] italic leading-5 tracking-[-0.01em] text-aiesec-gray lg:mt-4 lg:text-base lg:leading-6">
                <span className="flex-1 font-normal">{post.author}</span>
                <span className="shrink-0 font-medium not-italic">{post.date}</span>
              </div>
              <h3 className="mt-2 text-[20px] font-semibold leading-[120%] text-aiesec-heading lg:text-2xl lg:font-bold lg:leading-8">{post.title}</h3>
              <p className="mt-2 line-clamp-3 text-base font-medium leading-[150%] tracking-[-0.01em] text-aiesec-gray">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>}
    </article>
  );
}

function ContentSection({ section }: { section: BlogContentSection }) {
  switch (section._type) {
    case "paragraph":
      return <div className="flex flex-col gap-6 lg:gap-8"><BlogRichText value={section.text ?? []} /></div>;
    case "subtitle":
      return <h3 className="text-xl font-bold leading-[1.333] lg:text-2xl">{section.subtitle}</h3>;
    case "imageSection":
      return (
        <figure>
          <BlogImage image={section.image} alt={section.caption ?? ""} sizes="(max-width: 1023px) calc(100vw - 32px), calc(100vw - 160px)" className="h-auto w-full rounded-[20px]" />
          {section.caption && <figcaption className="mt-2 text-sm italic text-aiesec-gray">{section.caption}</figcaption>}
        </figure>
      );
    case "youtubeVideo": {
      const src = youtubeEmbedUrl(section.videoId);
      return src ? (
        <iframe
          src={src}
          title={section.title || section.caption || "YouTube video"}
          className="aspect-video w-full rounded-[20px] border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : null;
    }
    default:
      return null;
  }
}

function ShareRow() {
  return (
    <div className="flex flex-col items-start gap-[10px] lg:items-end lg:gap-4">
      <p className="w-full text-base font-medium leading-6 tracking-[-0.01em] text-aiesec-heading lg:text-right lg:text-xl lg:font-semibold lg:leading-[120%]">Share this blog</p>
      <div className="flex flex-wrap items-center gap-6">
        <CopyLinkButton
          className="inline-flex h-[38px] cursor-pointer items-center justify-center gap-[10px] rounded-[25px] border border-[#D9D9D9] bg-[#F9F9F9] px-3 text-[14px] font-bold leading-[128%] tracking-[-0.01em] text-aiesec-blue transition-colors hover:bg-gray-50 lg:h-[50px] lg:w-[146px] lg:border-[#CCCCCC] lg:px-5 lg:text-base"
        />
        <div className="flex items-center gap-3">
        <ShareIcon href="#" label="Share on Instagram" className="bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]">
          <InstagramIcon />
        </ShareIcon>
        <ShareIcon href="#" label="Share on WhatsApp" className="bg-[#25d366]">
          <WhatsAppIcon />
        </ShareIcon>
        <ShareIcon href="#" label="Share on X" className="bg-black">
          <XIcon />
        </ShareIcon>
        <ShareIcon href="#" label="Share on LinkedIn" className="bg-[#0a66c2]">
          <LinkedInIcon />
        </ShareIcon>
        </div>
      </div>
    </div>
  );
}

function ShareIcon({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className={`flex size-[30px] items-center justify-center rounded-lg text-white transition-opacity hover:opacity-90 ${className}`}
    >
      {children}
    </a>
  );
}

function ChevronLeftIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="none" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="17" cy="7" r="1.2" fill="currentColor" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.4A10 10 0 1 0 12 2Zm0 2a8 8 0 0 1 6.7 12.4l-.3.5.8 2.9-2.9-.8-.5.3A8 8 0 1 1 12 4Zm-3 4.2c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 5 4.3 2.5 1 3 .8 3.5.7.6 0 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4 0-.2-.3-.3-.6-.4l-2-1c-.3-.1-.5-.2-.7.1l-1 1.2c-.2.2-.4.2-.7.1a6.5 6.5 0 0 1-1.9-1.2 7 7 0 0 1-1.3-1.7c-.1-.3 0-.4.1-.6l.5-.5.3-.5v-.6l-1-2.2c-.2-.5-.4-.5-.6-.5H9Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
      <path d="M17.5 3h3l-6.6 7.6L21.7 21h-6l-4.3-5.6L6.5 21h-3l7-8L2.5 3h6.2l3.9 5.2L17.5 3Zm-1 16h1.6L8 4.6H6.3L16.5 19Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5" fill="currentColor" aria-hidden="true">
      <path d="M4.5 3.5A2 2 0 1 0 4.5 7.5a2 2 0 0 0 0-4ZM3 9h3v12H3zM9 9h2.9v1.6h.05c.4-.75 1.4-1.6 2.95-1.6 3.15 0 3.7 2.05 3.7 4.7V21h-3v-5.3c0-1.25 0-2.85-1.75-2.85S12 14.35 12 15.6V21H9z" />
    </svg>
  );
}
