import CloudImage from "@/components/CloudImage";
import Image from "next/image";

/** Light-blue full-bleed band with a world-map image, a centred
 *  black-and-white speaker photo and a fee-notice callout on the left. */
export default function OgxBanner() {
  return (
    <section className="relative isolate h-[335.44px] w-full overflow-x-clip before:absolute before:inset-x-0 before:top-0 before:h-full before:bg-aiesec-blue/20 lg:mt-10.5 lg:h-157 lg:before:h-150">
      <CloudImage
        id="world-map"
        alt=""
        className="pointer-events-none absolute left-1/2 top-[32.54px] h-[270.36px] w-[676.89px] max-w-none -translate-x-1/2 object-cover object-[center_40%] lg:top-5.75 lg:h-135 lg:w-338"
      />

      <div className="relative mx-auto h-full max-w-[1512px]">
        <CloudImage
          id="hero-speaker"
          alt="AIESEC in Nigeria member holding a microphone"
          grayscale
          className="pointer-events-none absolute bottom-0 left-[calc(50%+23px)] h-88.25 w-172 max-w-none -translate-x-1/2 object-cover object-[center_18.5%] grayscale lg:left-1/2 lg:h-167.5 lg:w-327 lg:object-[center_18%]"
        />

        {/* fee callout + arrow */}
        <div className="absolute bottom-[37.42px] left-4 z-10 w-46.5 lg:bottom-auto lg:left-20 lg:top-40 lg:w-85.5">
          <Image
            src="/svgs/ogxarrow.svg"
            alt=""
            aria-hidden="true"
            width={55}
            height={72}
            className="absolute -top-[24.04px] left-14.75 h-[36.04px] w-5.5 lg:-top-13 lg:left-[143px] lg:h-18 lg:w-[55px]"
          />
          <div className="flex min-h-[73.02px] items-center justify-center rounded-lg bg-white p-2 text-center text-[11px] leading-[1.2727273] tracking-[-0.03em] text-aiesec-gray lg:min-h-36 lg:rounded-2xl lg:p-4 lg:text-adaptive-20 lg:leading-[1.4]">
            Please note that participation in the Global Exchanges program
            involves program fees, which will be detailed during the application
            process.
          </div>
        </div>
      </div>
    </section>
  );
}
