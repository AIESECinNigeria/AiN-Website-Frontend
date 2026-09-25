import CloudImage from "@/components/CloudImage";
import Image from "next/image";

/** Light-blue full-bleed band with a world-map image, a centred
 *  black-and-white speaker photo and a fee-notice callout on the left. */
export default function OgxBanner() {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#cde5fd]">
      <CloudImage
        id="ain/ogx/world-map"
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      <div className="relative mx-auto flex h-[440px] max-w-[1512px] items-end justify-center sm:h-[520px] lg:h-[600px]">
        <CloudImage
          id="ain/ogx/hero-speaker"
          alt="AIESEC in Nigeria member holding a microphone"
          className="h-[94%] w-[280px] object-cover object-top grayscale sm:w-[360px] lg:w-[460px]"
        />

        {/* fee callout + arrow */}
        <div className="absolute bottom-8 left-4 w-[60%] max-w-[240px] sm:left-8 lg:bottom-auto lg:left-20 lg:top-[20%] lg:w-[260px]">
          <Image
            src="/svgs/ogxarrow.svg"
            alt=""
            aria-hidden="true"
            width={55}
            height={72}
            className="mx-auto -mb-3 h-11 w-10"
          />
          <div className="rounded-2xl bg-white px-4 py-3.5 text-center text-[13px] leading-snug text-gray-600 shadow-md">
            Please note that participation in the Global Exchanges program
            involves program fees, which will be detailed during the application
            process.
          </div>
        </div>
      </div>
    </section>
  );
}
