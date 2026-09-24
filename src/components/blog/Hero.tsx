// components/Blog/BlogHero.tsx
import Image from "next/image";

export default function BlogHero() {
  return (
    <section className="relative h-[85vh] min-h-[520px] w-full overflow-hidden bg-black sm:h-screen">
      <Image src="/blog/podcast-hero.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-black/35" aria-hidden="true" />

      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#F6F6F6] px-5 py-2.5 text-lg font-medium text-[#00000E]">
          <span className="size-2 rounded-full bg-aiesec-yellow" aria-hidden="true" />
          AIESEC in Nigeria Podcast
        </span>


        <div className="flex items-center justify-center rounded-lg ">
          {/* [ "Leading Out Loud" lettering SVG ] */}
        </div>

        <p className="w-full lg:w-[35%] text-lg leading-[150%] tracking-[-2%] text-white md:text-2xl">
          Real stories. Bold perspectives. Conversations with people shaping the future.
        </p>

        <a href="#" className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-6 text-[22px] font-medium text-[#F4BE60] transition-colors hover:scale-105 leading-[110%] tracking-[-1%]">
          <PlayIcon className="size-6 text-aiesec-yellow" />
          Listen Now
        </a>
      </div>
    </section>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}