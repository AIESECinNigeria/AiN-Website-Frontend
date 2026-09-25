import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";

export interface FeatureBandProps {
  variant: "coral" | "green";
  title: string;
  description: string;
  href: string;
  imageId: string;
  imageAlt: string;
}

const bgByVariant: Record<FeatureBandProps["variant"], string> = {
  coral: "bg-aiesec-coral",
  green: "bg-aiesec-green-dark",
};

/** Full-bleed colour band: heading + "Learn More" on the left, a cut-out
 *  portrait standing on the base in the centre, description on the right.
 *  On mobile it stacks heading → description → photo. */
export default function FeatureBand({
  variant,
  title,
  description,
  href,
  imageId,
  imageAlt,
}: FeatureBandProps) {
  return (
    <section
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden ${bgByVariant[variant]}`}
    >
      <div className="mx-auto grid max-w-[1300px] grid-cols-1 gap-8 px-6 py-12 lg:min-h-[440px] lg:grid-cols-3 lg:items-center lg:gap-6 lg:px-20 lg:py-0">
        <div className="order-1 lg:py-16">
          <h2 className="text-3xl font-bold leading-[115%] tracking-[-1%] text-white lg:text-4xl">
            {title}
          </h2>
          <ArrowLink href={href} className="mt-4 text-white">
            Learn More
          </ArrowLink>
        </div>

        <div className="order-3 flex justify-center lg:order-2 lg:self-end">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            className="h-[260px] w-[240px] object-contain object-bottom sm:h-[300px] sm:w-[280px] lg:h-[440px] lg:w-[360px]"
          />
        </div>

        <p className="order-2 text-lg leading-[150%] text-white lg:order-3 lg:py-16">
          {description}
        </p>
      </div>
    </section>
  );
}
