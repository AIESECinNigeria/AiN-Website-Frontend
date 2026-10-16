// components/Hero.tsx
import Link from "next/link";
import { TypewriterText } from "./Typewriter";

export type HeroSegment =
  | { type: "text"; value: string }
  | { type: "typewriter"; words: string[]; highlight?: boolean }
  | { type: "break" };

export interface HeroCta {
  label: string;
  href: string;
}

export interface HeroProps {
  segments: HeroSegment[];
  description?: string;
  cta?: HeroCta;
  align?: "left" | "center";
  className?: string;
}

export default function Hero({
  segments,
  description,
  cta,
  align = "left",
  className = "",
}: HeroProps) {
  const centered = align === "center";
  return (
    <section
      className={`px-6 py-16 lg:px-20 lg:py-24 ${
        centered ? "mx-auto max-w-4xl text-center" : "text-left"
      } ${className}`}
    >
      <h1 className="text-3xl font-bold leading-[120%] tracking-[-1%] text-black sm:text-4xl lg:text-[3.25rem]">
        {segments.map((segment, index) => {
          if (segment.type === "break") return <br key={index} />;
          if (segment.type === "text") return <span key={index}>{segment.value}</span>;
          return (
            <TypewriterText
              key={index}
              words={segment.words}
              highlight={segment.highlight}
              className="text-aiesec-blue"
            />
          );
        })}
      </h1>

      {description && (
        <p
          className={`mt-5 max-w-2xl text-lg text-gray-500 lg:text-xl ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}

      {cta && (
        <Link
          href={cta.href}
          className="mt-8 inline-flex items-center justify-center rounded-full bg-aiesec-blue px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
        >
          {cta.label}
        </Link>
      )}
    </section>
  );
}