import Link from "next/link";
import CloudImage from "@/components/CloudImage";

/** Full-bleed photographic hero for the blog / podcast landing. */
export default function BlogHero() {
  return (
    <section className="relative isolate h-[620px] overflow-hidden lg:h-[680px]">
      <CloudImage
        id="blogHero"
        alt="AIESEC in Nigeria members at a leadership event"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* darken the photo so the white text stays legible */}
      <div className="absolute inset-0 bg-[#DB9620]/5" />

      <div className="relative mx-auto flex h-full max-w-378 flex-col items-center justify-center px-6 pt-[72px] text-center lg:pt-[88px]">
        {/* Podcast pill */}
        <span className="mt-0 inline-flex items-center gap-2 rounded-full border border-[#E2E2E2] bg-[#F6F6F6] px-[10px] py-[10px] text-sm font-semibold text-gray-900 lg:px-5 lg:text-fluid-18 lg:leading-[1.333]">
          <span className="size-2.5 rounded-full bg-aiesec-yellow" />
          AIESEC in Nigeria Podcast
        </span>

        {/* Ribbon lockup */}
        <div className="relative mt-6 flex flex-col items-center lg:mt-8">
          <CloudImage
            id="LeadingOutLoud"
            alt="AIESEC in Nigeria members at a leadership event"
            className="inset-0 h-38 w-60 object-contain lg:h-[190px] lg:w-[300px]"
          />
        </div>

        <p className="mt-8 max-w-[519px] text-base leading-6 text-white lg:text-fluid-24 lg:leading-[1.5]">
          Real stories. Bold perspectives. Conversations with people shaping the
          future.
        </p>

        <Link
          href="#episodes"
          className="mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#00000E] px-7 text-base font-medium text-[#F4BE60] transition-colors hover:bg-black/80 lg:h-[72px] lg:min-w-[218px] lg:justify-center lg:px-5 lg:text-fluid-22 lg:leading-[1.5]"
        >
          <PlayIcon className="size-4 fill-current lg:size-6" />
          Listen Now
        </Link>
      </div>
    </section>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}
