import { cld } from '@/lib/cloudinary';

const IYDAboutImg = cld('ain/iyd/IYDAboutImg');
const starPatternUrl = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 3 C13 9 15 11 21 12 C15 13 13 15 12 21 C11 15 9 13 3 12 C9 11 11 9 12 3 Z' fill='rgba(15,30,18,0.25)'/></svg>"
)}`;

const IYDAbout = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("${starPatternUrl}")`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="relative left-1/2 z-10 grid w-screen -translate-x-1/2 grid-cols-1 items-end gap-0 md:gap-10 md:grid-cols-[40%_60%]">
        <div className="order-2 flex justify-end md:order-none">
          <div className="relative aspect-square w-full overflow-hidden md:hidden -mt-32">
            <img
              src={IYDAboutImg}
              alt=""
              className="absolute inset-0 h-full w-full -rotate-90 object-cover object-center"
            />
          </div>

          {/* Desktop: no rotation, no mismatch to worry about */}
          <img
            src={IYDAboutImg}
            alt=""
            className="hidden h-full w-full object-cover object-center md:block"
          />
        </div>

        <div className="pt-8 md:pt-16 pb-16 px-6 md:px-0 order-1 md:order-none">
          <h2 className="text-4xl md:text-[42px] lg:text-5xl text-[#2A412A] leading-[72px] tracking[-4%]">
            About the <span className="font-bold italic">Event</span>
          </h2>
          <div className="mt-1 md:mt-6 space-y-4 text-[#2A412A] w-[90%] md:w-[65%] text-xl md:text-[22px] lg:text-2xl leading-[150%] tracking-[-2%]">
            <p>
              Future Forward is AIESEC in Nigeria's event marking International
              Youth Day 2026.
            </p>
            <p>
              It's a half-day of practical, experience-driven sessions designed
              for the Nigerian youth — bringing together skill-building,
              financial empowerment, and an honest mental health conversation in
              one space.
            </p>
            <p>
              You leave with sharper tools, stronger networks, and a clearer
              sense of how to position yourself in the Nigerian and global
              market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IYDAbout;
