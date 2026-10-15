import CloudImage from "@/components/CloudImage";

interface IYDHeroProps {
  onRegisterClick: () => void;
}

const IYDHero = ({ onRegisterClick }: IYDHeroProps) => {
  const starPatternUrl = `data:image/svg+xml,${encodeURIComponent(
    "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 3 C13 9 15 11 21 12 C15 13 13 15 12 21 C11 15 9 13 3 12 C9 11 11 9 12 3 Z' fill='rgba(255,255,255,0.15)'/></svg>"
  )}`;
  return (
    <section className="font-body relative w-full overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${starPatternUrl}")`,
          backgroundSize: '24px 24px',
        }}
      />

      {/* Full-bleed image wrapper, height controlled by aspect ratio instead of the raw image size */}
      <div className="relative left-1/2 min-h-screen w-screen -translate-x-1/2">
        <CloudImage
          id="ain/iyd/IYDHeroImg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Text overlays the same box as the image */}
        <div className="absolute inset-0 z-10 mx-auto flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-[110px] font-normal leading-[95.6%] tracking-[-7%] text-white">
            Future
            <br />
            <span className="font-bold italic text-[#B9FB02] leading-[95.6%] tracking-[-7%]">
              Forward
            </span>
          </h1>

          <p className="mt-4 w-[75%] md:w-[55%] text-2xl md:text-[26px] lg:text-[30px] leading-[24px] md:leading-[48px] text-white">
            Skills, money, mindset, and the people you need to know — all in one
            afternoon.
          </p>

          <div className="mt-6 flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 text-white drop-shadow">
            <div className="text-center text-white">
              <p className="text-sm md:text-lg lg:text-xl tracking-[-2%]">Date</p>
              <p className="text-base md:text-xl lg:text-2xl font-bold italic">
                Saturday, 29 August 2026
              </p>
            </div>
            <div className="h-16 w-px bg-white hidden md:block" />
            <div className="h-px w-[120px] bg-white block md:hidden" />
            <div className="text-center text-white">
              <p className="text-sm md:text-lg lg:text-xl tracking-[-2%]">Time</p>
              <p className="text-base md:text-xl lg:text-2xl font-bold italic">
                11:00 AM - 4:00 PM
              </p>
            </div>
            <div className="h-16 w-px bg-white hidden md:block" />
            <div className="h-px w-[120px] bg-white block md:hidden" />
            <div className="text-center text-white">
              <p className="text-sm md:text-lg lg:text-xl tracking-[-2%]">Location</p>
              <p className="text-base md:text-xl lg:text-2xl font-bold italic">
                Lagos, Nigeria
              </p>
            </div>
          </div>

          <button
            type="button"
            // onClick={onRegisterClick}
            className="mt-12 bg-white px-8 py-4 text-base md:text-lg lg:text-xl font-medium uppercase tracking-[-2%] text-[#314C31] transition hover:scale-105 hover:cursor-pointer"
          >
            Registration Has Ended
          </button>
        </div>
      </div>
    </section>
  );
};

export default IYDHero;
