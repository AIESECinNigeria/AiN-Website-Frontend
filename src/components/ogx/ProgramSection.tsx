import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";
import Image, { type StaticImageData } from "next/image";
import gvLogo from "../../../public/images/ogx/gv.png";
import gtaLogo from "../../../public/images/ogx/gta.png";
import gteLogo from "../../../public/images/ogx/gte.png";

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

const programLogos: Record<string, StaticImageData> = {
  "global-volunteer": gvLogo,
  "global-talent": gtaLogo,
  "global-teacher": gteLogo,
};

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
      className="relative w-full border-t-4!"
      style={{ backgroundColor: tint, borderTop: `3px solid ${accent}` }}
    >
      <div className="mx-auto grid max-w-[1512px] items-start gap-6 px-4 py-10 lg:grid-cols-2 lg:gap-8 lg:px-20 lg:py-15">
        <div>
          <h2
            className="text-subheading leading-[1.35] tracking-[-0.01em] lg:text-adaptive-48 lg:leading-[1.2]"
            style={{ color: accent }}
          >
            {title}
          </h2>

          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="mt-2.5 text-body leading-[1.5] text-aiesec-gray lg:mt-6 lg:text-adaptive-24 lg:leading-[1.5] [#global-volunteer_&]:lg:leading-[1.3333333]"
            >
              {paragraph}
            </p>
          ))}

          <p className="mt-4 text-body leading-[1.5] text-aiesec-gray lg:mt-12 lg:max-w-116.25 lg:text-adaptive-24 lg:leading-[1.5] lg:text-aiesec-heading">
            <span className="font-medium text-aiesec-heading">{detail.lead}</span>{" "}
            {detail.rest}
          </p>

          <ArrowLink href={href} className="mt-4 gap-1.5! text-base font-bold! leading-[1.5] text-aiesec-heading [&>svg]:size-5 lg:mt-12 lg:gap-2! lg:text-adaptive-24 lg:leading-[1] lg:[&>svg]:size-6">
            Apply Now
          </ArrowLink>
        </div>

        <div className="relative h-87.5 overflow-hidden rounded-2xl lg:h-[690px] [#global-talent_&]:lg:h-[634px] [#global-teacher_&]:lg:h-[670px]">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            crop="fill"
            ar="1:1"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-[23.5px] top-0 flex h-[44.4px] w-[76.8px] items-center justify-center gap-1.5 bg-white px-[7.2px] py-3 [&>svg]:hidden [&>div]:hidden lg:right-8.25 lg:h-[74.51px] lg:w-31.75 lg:gap-2.5 lg:px-3 lg:pt-9 lg:pb-3">
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
            <Image
              src={programLogos[id]}
              alt={`Global ${badgeBottom}`}
              width={100}
              height={42}
              className="h-auto max-h-11 w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
