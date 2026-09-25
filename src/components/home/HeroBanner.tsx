import CloudImage from "@/components/CloudImage";

/** Full-bleed hero photo with tilted #VOLUNTEER / #TRAVEL ribbon tags. */
export default function HeroBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="relative h-[300px] sm:h-[420px] lg:h-[520px]">
        <CloudImage
          id="ain/home/hero-group"
          alt="AIESEC in Nigeria members gathered together at an event"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <span className="absolute left-2 top-16 -rotate-[8deg] rounded-sm bg-aiesec-blue px-4 py-1.5 text-xl font-extrabold tracking-wide text-white shadow-lg sm:left-8 sm:top-24 sm:text-2xl lg:text-3xl">
          #VOLUNTEER
        </span>

        <span className="absolute bottom-10 right-2 -rotate-[8deg] rounded-sm bg-aiesec-blue px-4 py-1.5 text-xl font-extrabold tracking-wide text-white shadow-lg sm:right-8 sm:text-2xl lg:text-3xl">
          #TRAVEL
        </span>
      </div>
    </section>
  );
}
