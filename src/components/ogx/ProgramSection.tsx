import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";

export interface ProgramSectionProps {
  id: string;
  /** Accent colour (heading, top border, badge). */
  accent: string;
  /** Section background tint. */
  tint: string;
  title: string;
  badgeBottom: string;
  paragraphs: string[];
  detail: { lead: string; rest: string };
  href: string;
  imageId: string;
  imageAlt: string;
}

/** AIESEC-style swirl mark used inside the programme badge. */
function SwirlMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="size-6">
      <path
        d="M27 16c0 6.1-4.9 11-11 11S5 22.1 5 16 9.9 5 16 5c4.1 0 7.5 2.9 7.5 6.6 0 3.1-2.5 5.6-5.6 5.6-2.1 0-3.9-1.7-3.9-3.8"
        stroke={color}
        strokeWidth={3.4}
        strokeLinecap="round"
      />
    </svg>
  );
}

/** A single OGX programme band: text on the left, photo with a white
 *  programme badge on the right, a coloured top border and tinted bg. */
export default function ProgramSection({
  id,
  accent,
  tint,
  title,
  badgeBottom,
  paragraphs,
  detail,
  href,
  imageId,
  imageAlt,
}: ProgramSectionProps) {
  return (
    <section
      id={id}
      className="relative left-1/2 w-screen -translate-x-1/2"
      style={{ backgroundColor: tint, borderTop: `3px solid ${accent}` }}
    >
      <div className="mx-auto grid max-w-[1300px] items-start gap-8 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-20">
        <div>
          <h2
            className="text-3xl font-bold tracking-[-1%] lg:text-[2.5rem]"
            style={{ color: accent }}
          >
            {title}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-5 text-[15px] leading-[170%] text-gray-600 lg:text-base"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-6 text-[15px] leading-[170%] text-gray-600 lg:text-base">
            <span className="font-bold text-gray-900">{detail.lead}</span>{" "}
            {detail.rest}
          </p>

          <ArrowLink href={href} className="mt-6 text-gray-900">
            Apply Now
          </ArrowLink>
        </div>

        <div className="relative">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            className="aspect-square w-full rounded-2xl object-cover"
          />
          <div className="absolute right-4 top-0 pt-8 flex items-center gap-2 rounded-b-lg bg-white px-3 py-2 shadow-sm">
            <SwirlMark color={accent} />
            <div>
              <p
                className="text-base font-medium leading-none"
                style={{ color: accent }}
              >
                Global
              </p>
              <p
                className="text-lg font-extrabold leading-tight"
                style={{ color: accent }}
              >
                {badgeBottom}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
