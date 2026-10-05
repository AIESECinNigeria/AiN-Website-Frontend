import Link from "next/link";
import CloudImage from "@/components/CloudImage";

/** Full-bleed photographic hero for the blog / podcast landing. */
export default function BlogHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <CloudImage
        id="blog-hero"
        alt="AIESEC in Nigeria members at a leadership event"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* darken the photo so the white text stays legible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      <div className="relative mx-auto flex min-h-[520px] max-w-[1512px] flex-col items-center justify-center px-6 py-20 text-center lg:min-h-[640px]">
        {/* Podcast pill */}
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-sm font-semibold text-gray-900 lg:text-base">
          <span className="size-2.5 rounded-full bg-aiesec-yellow" />
          AIESEC in Nigeria Podcast
        </span>

        {/* Ribbon lockup */}
        <div className="relative mt-8 inline-flex items-center justify-center px-8 py-4 lg:px-14 lg:py-6">
          <span className="absolute inset-0 -skew-y-2 bg-[#1f1f1f]" aria-hidden="true" />
          <span className="relative flex flex-col items-center leading-[0.85]">
            <span className="flex items-end gap-1 text-aiesec-yellow">
              <span className="text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
                Leading
              </span>
              <span className="mb-2 text-lg font-bold text-white sm:text-2xl lg:text-3xl">
                OUT
              </span>
            </span>
            <span className="mt-1 text-6xl font-extrabold tracking-tight text-aiesec-yellow sm:text-7xl lg:text-8xl">
              Loud
            </span>
          </span>
        </div>

        <p className="mt-8 max-w-2xl text-base leading-[160%] text-white sm:text-lg lg:text-xl">
          Real stories. Bold perspectives. Conversations with people shaping the
          future.
        </p>

        <Link
          href="#episodes"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-black px-7 py-3.5 text-base font-medium text-white transition-colors hover:bg-black/80 lg:text-lg"
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
