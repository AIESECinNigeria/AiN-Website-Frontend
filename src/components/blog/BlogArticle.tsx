import Link from "next/link";
import CloudImage from "@/components/CloudImage";

const body: { type: "p" | "h"; text: string }[] = [
  {
    type: "p",
    text: "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too.",
  },
  {
    type: "p",
    text: "AIESEC has taken shy young people who once struggled to introduce themselves and turned them into leaders confidently addressing thousands of people.",
  },
  { type: "p", text: "There are real stories and this is one of them." },
  {
    type: "p",
    text: "We were recently opportuned to interview Henry Tabansi, a fellow AIESECer, about his time in AIESEC and his experiences blew my mind. Henry is a one time Vice President for the Human resource team in AIESEC, where he oversaw the activities of over 150 Human resources managers across 120 countries. Mind blowing!",
  },
  {
    type: "p",
    text: "Prior to this, Henry had held several positions on different teams in AIESEC, his most memorable being the time he was on the planning team for a conference in Kano. The team was at the extreme end of planning, and had no money to pull things out. All options from reaching out to potential sponsors, partners had been exhausted. So they did something crazy:",
  },
  {
    type: "p",
    text: "Henry and his team mates decided to go around the streets of Kano to sell AIESEC and tell people about this conference, also asking them to support in any way they could. Before you wonder what makes this interesting, I'll tell you.",
  },
  {
    type: "p",
    text: "I have to say, there is something about AIESEC that just makes you find your way around every obstacle. AIESEC gives youths the platform to not just lead, but to lead with impact.",
  },
  {
    type: "p",
    text: "We are never looking at the past, we are looking at the future. When you join AIESEC, you don't just join an organisation, you join a global network of young people who are ready to change the world, one project at a time.",
  },
  {
    type: "p",
    text: "And so, we say to every young Nigerian out there: AIESEC is the place for you to discover your potential, develop as a leader, and create the kind of impact that outlives you.",
  },
];

const related = [
  { imageId: "blogHero", title: "Interview with Henry Tabansi" },
  { imageId: "blogHero", title: "Interview with Henry Tabansi" },
  { imageId: "blogHero", title: "Interview with Henry Tabansi" },
];

const excerpt =
  "AIESEC has impacted lives; and if you give AIESEC a chance, it can impact yours too. AIESEC has taken shy young people who once struggled to introduce themselves and turned them into…";

export default function BlogArticle() {
  return (
    <article className="px-6 py-10 lg:px-20 lg:py-16">
      <div className="mx-auto max-w-[760px]">
        {/* Back */}
        <Link
          href="/blog"
          aria-label="Back to blog"
          className="flex w-max py-2 px-3 gap-2 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-gray-200"
        >
          <ChevronLeftIcon className="size-5" />

          <span> Back </span>
        </Link>

        {/* Meta */}
        <p className="mt-8 text-base text-gray-500">
          Published 4th July 2026&nbsp;&nbsp;<span className="text-gray-400">~</span>&nbsp;&nbsp;5 mins read
        </p>

        <h1 className="mt-4 text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 lg:text-[2.75rem]">
          Interview with Henry Tabansi
        </h1>

        <p className="mt-5 text-base leading-[170%] text-gray-700 lg:text-lg">
          AIESEC has impacted lives; and if you give AIESEC a chance, it can
          impact yours too. AIESEC has taken shy young people who once struggled
          to introduce themselves and turned them into leaders confidently.
        </p>

        <p className="mt-4 text-base italic text-gray-500 lg:text-lg">
          Written by Mary and Eniola
        </p>

        <ShareRow />

        {/* Hero image */}
        <div className="mt-8 overflow-hidden rounded-2xl">
          <CloudImage
            id="blogHero"
            alt="AIESEC in Nigeria members at a gathering"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>

        {/* Body */}
        <div className="mt-8 flex flex-col gap-6 text-base leading-[180%] text-gray-700 lg:text-lg">
          {body.map((block, index) => (
            <p key={index}>{block.text}</p>
          ))}
        </div>

        <ShareRow />

        {/* Related */}
        <h2 className="mt-14 text-3xl font-bold text-aiesec-blue lg:text-4xl">
          Related Articles
        </h2>
        <div className="mt-8 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((post, index) => (
            <Link key={index} href="/blog/interview-with-henry-tabansi" className="group block">
              <div className="overflow-hidden rounded-2xl">
                <CloudImage
                  id={post.imageId}
                  alt={post.title}
                  className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-sm italic text-gray-500">
                <span>Written by Mary and Eniola</span>
                <span>13 July, 2026</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-gray-900">{post.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-500">{excerpt}</p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}

function ShareRow() {
  return (
    <div className="mt-8">
      <p className="text-lg font-semibold text-gray-900">Share this blog</p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <button
          type="button"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-medium text-aiesec-blue transition-colors hover:bg-gray-50"
        >
          Copy Link
          <CopyIcon className="size-4" />
        </button>
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
      className={`flex size-11 items-center justify-center rounded-xl text-white transition-opacity hover:opacity-90 ${className}`}
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

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
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
