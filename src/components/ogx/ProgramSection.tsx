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
      className="relative left-1/2 w-screen -translate-x-1/2"
      style={{ backgroundColor: tint, borderTop: `3px solid ${accent}` }}
    >
      <div className="mx-auto grid max-w-[1300px] items-start gap-8 px-6 py-14 lg:grid-cols-2 lg:gap-16 lg:px-20 lg:py-20">
        <div>
          <h2
            className="text-2xl md:text-5xl font-bold tracking-[-1%]"
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
            crop="fill"
            ar="1:1"
            className="aspect-square w-full rounded-2xl object-cover"
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