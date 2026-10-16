
import CloudImage from "@/components/CloudImage";

/** Full-bleed hero photo with tilted #VOLUNTEER / #TRAVEL speech-bubble tags. */
export default function HeroBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
      <div className="relative h-[300px] sm:h-[420px] lg:h-[520px]">
        <CloudImage
          id="hero-group"
          priority
          alt="AIESEC in Nigeria members gathered together at an event"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* #VOLUNTEER — upper-left bubble, tail points down */}
        <div className="absolute left-3 top-14 -rotate-[8deg] sm:left-10 sm:top-20">
          <div className="relative rounded-2xl bg-aiesec-blue px-5 py-2 text-xl font-extrabold tracking-wide text-white shadow-xl sm:text-2xl lg:text-3xl">
            #VOLUNTEER
            <span className="absolute -bottom-2.5 left-6 h-0 w-0 border-l-[10px] border-l-transparent border-t-[14px] border-t-aiesec-blue border-r-[10px] border-r-transparent" />
          </div>
        </div>

        {/* #TRAVEL — lower-right bubble, tail points down */}
        <div className="absolute bottom-12 right-3 -rotate-[8deg] sm:right-10">
          <div className="relative rounded-2xl bg-aiesec-blue px-5 py-2 text-xl font-extrabold tracking-wide text-white shadow-xl sm:text-2xl lg:text-3xl">
            #TRAVEL
            <span className="absolute -bottom-2.5 left-6 h-0 w-0 border-l-[10px] border-l-transparent border-t-[14px] border-t-aiesec-blue border-r-[10px] border-r-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

