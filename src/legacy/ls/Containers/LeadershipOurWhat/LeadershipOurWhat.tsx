import { cld } from '@/lib/cloudinary';
import CloudImage from "@/components/CloudImage";

const OurWhatView = () => {
  return (
    <section className="bg-white text-black overflow-hidden relative">
      <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
        <div className="relative z-[10] mb-36">
          <div className="font-['Clash_Display',sans-serif] text-[#b07ef6] w-fit font-medium text-xl lg:text-[34px] my-4 rounded-lg">
            Empowering Young Leaders
          </div>
          <div
            className="bg-cover bg-no-repeat [background-position:top_-70px_center] max-[500px]:[background-position:top_center] border border-black rounded-lg my-1 our-what-img w-100 md:h-96 h-40 relative"
            style={{ backgroundImage: `url(${cld('ain/ls/ourWHat')})` }}
          >
            <CloudImage
              id="ain/ls/starPurple"
              className="absolute -bottom-6 -left-8 w-14 h-14 z-[12] hidden lg:block"
              alt="Purple Star"
            />
          </div>
          <div className="my-3">
            <p className="font-light text-base lg:text-xl">
              Leadership Summit is a national event by AIESEC in Nigeria, that fosters{" "}
              <span className="font-medium text-[#b07ef6]">leadership development and societal growth among youths
              </span>{" "}
              through solution-driven conversations, inspiring a positive mindset and empowering them to drive change in Nigeria, Africa, and the world.
            </p>
          </div>
          <div className="flex justify-start my-4">
            <a
              href="/leadership-summit/register"
              className="flex white-btn text-black items-center text-[12px] md:text-base border-black border shadow-[8px_8px_2px_-4px_#000]"
            >
              Register for Leadership Summit
              <CloudImage id="ain/ls/arrow" className="ml-1 h-6" alt="Arrow" />
            </a>
          </div>
        </div>
      </div>
      <CloudImage
        id="ain/ls/spiralImage"
        className="absolute bottom-20 rotate-45 -right-20 md:-right-28 h-auto w-40 md:w-80 z-[2]"
        alt="Spiral"
      />
    </section>
  );
};

export default OurWhatView;
