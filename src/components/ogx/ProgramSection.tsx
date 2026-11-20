import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";

export interface ProgramSectionProps {
  id: string;
  /** Accent colour (heading and top border). */
  accent: string;
  /** Section background tint. */
  tint: string;
  title: string;
  /** Cloudinary public id of the programme logo shown in the badge: "gte", "gta" or "gv". */
  badgeId: string;
  paragraphs: string[];
  detail: { lead: string; rest: string };
  href: string;
  imageId: string;
  imageAlt: string;
}

/** A single OGX programme band: text on the left, photo with a white
 *  programme logo badge on the right, a coloured top border and tinted bg. */
export default function ProgramSection({
  id,
  accent,
  tint,
  title,
  badgeId,
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

        <div className="relative h-87.5 overflow-hidden rounded-2xl lg:h-[690px] [#global-talent_&]:lg:h-[634px] [#global-teacher_&]:lg:h-[670px] [&>div]:right-[23.5px] [&>div]:flex [&>div]:h-[44.4px] [&>div]:w-[76.8px] [&>div]:items-center [&>div]:justify-center [&>div]:gap-1.5 [&>div]:px-[7.2px] [&>div]:py-3 [&>div]:shadow-none lg:[&>div]:right-8.25 lg:[&>div]:h-[74.51px] lg:[&>div]:w-31.75 lg:[&>div]:gap-2.5 lg:[&>div]:px-3 lg:[&>div]:pt-9 lg:[&>div]:pb-3 [&>div>img]:h-auto [&>div>img]:max-h-11 [&>div>img]:w-full">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            crop="fill"
            ar="1:1"
            className="h-full w-full object-cover"
          />
          <div className="absolute right-4 top-0 bg-white px-3 py-3 shadow-sm">
            <CloudImage
              id={badgeId}
              alt={title}
              className="h-10 w-28 object-contain object-center lg:h-12 lg:w-32"
            />
          </div>
        </div>
      </div>
    </section>
  );
}