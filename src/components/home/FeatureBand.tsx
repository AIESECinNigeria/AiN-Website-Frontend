import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";

export interface FeatureBandProps {
  variant: "coral" | "green";
  title: string;
  description: string;
  href: string;
  imageId: string;
  imageAlt: string;
  imageFormat?: "auto" | "webp";
}

const bgByVariant: Record<FeatureBandProps["variant"], string> = {
  coral: "bg-aiesec-coral",
  green: "bg-aiesec-green-dark",
};

/** Per-variant size of the cut-out portrait. These are the only values that
 *  differ between the two bands, so every size and offset lives in one place. */
const imageClassByVariant: Record<FeatureBandProps["variant"], string> = {
  coral: "h-101.25 w-[84.4%] lg:ml-2 lg:h-144.25 lg:w-[76%]",
  green: "h-[307.32px] w-[88.8%] lg:ml-0 lg:h-106.25 lg:w-full",
};

/** Full-bleed colour band: heading + "Learn More" on the left, a cut-out
 *  portrait standing on the base in the centre, description on the right.
 *  On mobile it stacks heading, description, link, then the photo. */
export default function FeatureBand({
  variant,
  title,
  description,
  href,
  imageId,
  imageAlt,
  imageFormat = "auto",
}: FeatureBandProps) {
  return (
    <section className={`relative w-full overflow-hidden ${bgByVariant[variant]}`}>
      <div className="mx-auto grid grid-cols-1 px-4 pt-10 lg:h-167.25 lg:grid-cols-[438fr_437fr_429fr] lg:items-center lg:gap-x-6 lg:px-20 lg:pt-0">
        <div className="contents lg:order-1 lg:flex lg:flex-col lg:items-start">
          <h2 className="order-1 text-subheading text-aiesec-cream lg:text-rd-heading-02">
            {title}
          </h2>
          <ArrowLink href={href} className="order-3 mt-3 w-fit gap-1.5! text-body font-bold! lg:mt-4 lg:gap-3! lg:text-rd-body-02 lg:leading-6 text-aiesec-cream [&>svg]:size-5 [&>svg]:overflow-visible [&>svg>path]:origin-center [&>svg>path]:scale-[1.15] lg:[&>svg]:size-4 lg:[&>svg>path]:scale-[1.8]">
            Learn More
          </ArrowLink>
        </div>

        <div className="order-4 mt-6 flex justify-center lg:order-2 lg:mt-0 lg:justify-start lg:self-end">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            format={imageFormat}
            className={`object-cover object-top grayscale ${imageClassByVariant[variant]}`}
          />
        </div>

        <p className="order-2 mt-2 min-h-30 text-body text-aiesec-cream lg:order-3 lg:mt-0 lg:min-h-0 lg:text-rd-body-02">
          {description}
        </p>
      </div>
    </section>
  );
}