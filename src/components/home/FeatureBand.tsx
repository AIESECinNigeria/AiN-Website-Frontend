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
  imageFormat = "auto",
}: FeatureBandProps) {
  return (
    <section
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden ${bgByVariant[variant]}`}
    >
      <div className="mx-auto grid grid-cols-1 px-4 pt-10 lg:h-167.25 lg:grid-cols-[438fr_437fr_429fr] lg:items-center lg:gap-x-6 lg:px-20 lg:pt-0">
        <div className="contents lg:order-1 lg:flex lg:flex-col lg:items-start">
          <h2 className="order-1 text-subheading text-aiesec-cream lg:text-fluid-48 lg:leading-[1.2] lg:tracking-[-0.01em]">
            {title}
          </h2>
          <ArrowLink href={href} className="order-3 mt-3 w-fit gap-1.5! text-body font-bold! text-white lg:mt-4 lg:gap-3! lg:text-fluid-24 lg:leading-[1] lg:tracking-[-0.01em] lg:text-aiesec-cream [&>svg]:size-5 [&>svg]:overflow-visible [&>svg>path]:origin-center [&>svg>path]:scale-[1.15] lg:[&>svg]:size-4 lg:[&>svg>path]:scale-[1.8]">
            Learn More
          </ArrowLink>
        </div>

        <div className="order-4 mt-6 flex justify-center lg:order-2 lg:mt-0 lg:justify-start lg:self-end">
          <CloudImage
            id={imageId}
            alt={imageAlt}
            format={imageFormat}
            className="h-101.25 w-[84.4%] object-cover object-top grayscale lg:ml-2 lg:h-144.25 lg:w-[76%] [.bg-aiesec-green-dark_&]:h-[307.32px] [.bg-aiesec-green-dark_&]:w-[88.8%] lg:[.bg-aiesec-green-dark_&]:ml-0 lg:[.bg-aiesec-green-dark_&]:h-106.25 lg:[.bg-aiesec-green-dark_&]:w-full"
          />
        </div>

        <p className="order-2 mt-2 min-h-30 text-body text-aiesec-cream lg:order-3 lg:mt-0 lg:min-h-0 lg:text-fluid-24 lg:leading-[1.5] lg:tracking-[-0.01em]">
          {description}
        </p>
      </div>
    </section>
  );
}
