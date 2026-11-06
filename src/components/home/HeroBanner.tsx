import CloudImage from "@/components/CloudImage";

/** Full-bleed hero photo with the design's tilted volunteer and travel tags. */
export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-aiesec-section">
      <div className="relative h-90 lg:h-147.75">
        <CloudImage
          id="hero-group"
          alt="AIESEC in Nigeria members gathered together at an event"
          className="absolute inset-0 h-full w-full origin-[50%_40%] scale-[1.22] object-cover object-[65.8%_center] lg:origin-[50%_30%] lg:scale-[1.187] lg:object-center"
        />

        {/* The label stroke and existing tail form the flat blue tag. */}
        <div className="absolute left-6 top-9 -rotate-[14.93deg] lg:left-16 lg:top-26">
          <div className="relative text-base font-bold italic leading-[110%] tracking-[-0.01em] text-white [-webkit-text-stroke:16px_var(--color-aiesec-blue)] [paint-order:stroke_fill] lg:text-hero-subtitle">
            #VOLUNTEER
            <span className="absolute -bottom-4 left-3/5 h-0 w-0 border-x-2 border-x-transparent border-t-4 border-t-aiesec-blue before:absolute before:-top-12 before:-left-2 before:h-0 before:w-0 before:border-x-2 before:border-x-transparent before:border-b-4 before:border-b-aiesec-blue lg:hidden" />
          </div>
        </div>

        {/* The mobile frame has no visible travel tag. */}
        <div className="absolute right-16 bottom-12 hidden rotate-[2.81deg] lg:block">
          <div className="relative text-hero-subtitle font-bold italic leading-[110%] tracking-[-0.01em] text-white [-webkit-text-stroke:16px_var(--color-aiesec-blue)] [paint-order:stroke_fill]">
            #TRAVEL
            <span className="absolute -top-4 left-1/2 h-0 w-0 border-x-1.5 border-x-transparent border-b-5 border-b-aiesec-blue" />
          </div>
        </div>
      </div>
    </section>
  );
}
