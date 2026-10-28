import Link from "next/link";
import CloudImage from "@/components/CloudImage";

/** Full-bleed photographic hero for the blog / podcast landing. */
export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <CloudImage
        id="blogHero"
        alt="AIESEC in Nigeria members at a leadership event"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* darken the photo so the white text stays legible */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto flex min-h-screen md:min-h-130 max-w-378 flex-col items-center justify-center px-6 py-20 text-center lg:min-h-[640px]">
        {/* Podcast pill */}
        <span className="inline-flex items-center mt-35 md:mt-38 gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 lg:text-base">
          <span className="size-2.5 rounded-full bg-aiesec-yellow" />
          AIESEC in Nigeria Podcast
        </span>

        {/* Ribbon lockup */}
        <div className="relative mt-8 flex flex-col items-center">
          <CloudImage
            id="LeadingOutLoud"
            alt="AIESEC in Nigeria members at a leadership event"
            className="inset-0 w-60 h-38 md:h-full md:w-full object-cover"
          />
        </div>

        <p className="mt-8 max-w-xl text-base leading-[160%] text-white sm:text-lg lg:text-xl">
          Real stories. Bold perspectives. Conversations with people shaping the
          future.
        </p>

        <Link
          href="#episodes"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-medium text-[#F4BE60] transition-colors hover:bg-black/80 lg:text-lg"
        >
          <PlayIcon className="size-4 fill-current" />
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
