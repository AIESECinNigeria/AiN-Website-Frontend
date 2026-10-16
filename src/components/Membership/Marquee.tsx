"use client";
import { usePathname } from "next/navigation";

const marqueeRoutes: string[] = ["/membership"];

function MarqueeContent() {
  return (
    <>
      {Array.from({ length: 8 }).map((_, index) => (
        <span
          key={index}
          className="flex shrink-0 items-center gap-3 whitespace-nowrap text-lg font-bold text-white md:text-xl leading-[150%] tracking-[-1%]"
        >
          Recruitment does not start till<span className="text-[#FFC800] italic">December.</span>Join the waitlist
          and you will be contacted when recruitment starts.
          <span className="size-1.5 shrink-0 rounded-full bg-white" aria-hidden="true" />
        </span>
      ))}
    </>
  );
}

export default function RecruitmentMarquee() {
  const pathname = usePathname();

  if (!marqueeRoutes.includes(pathname)) {
    return null;
  }

  return (
    <div className="relative z-60 w-full overflow-hidden bg-aiesec-blue py-4 border-b-2 border-[#FFC800]">
      <div className="flex w-max animate-[recruitment-marquee_50s_linear_infinite] gap-3">
        <div className="flex shrink-0 items-center gap-3">
          <MarqueeContent />
        </div>
        <div className="flex shrink-0 items-center gap-3" aria-hidden="true">
          <MarqueeContent />
        </div>
      </div>

      <style>{`
        @keyframes recruitment-marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[recruitment-marquee_28s_linear_infinite\\] {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}