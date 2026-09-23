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
  return (
    <section
      className={`px-6 py-16 lg:px-20 ${
        align === "center" ? "mx-auto max-w-3xl text-center" : "text-left"
      } ${className}`}
    >
      <h1 className="text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 sm:text-4xl lg:text-5xl">
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
        <p className="mt-4 max-w-2xl text-lg text-gray-600 lg:text-xl">
          {description}
        </p>
      )}

      {cta && (
        <Link
          href={cta.href}
          className="mt-6 inline-flex items-center justify-center rounded-full bg-aiesec-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
        >
          {cta.label}
        </Link>
      )}
    </section>
  );
}