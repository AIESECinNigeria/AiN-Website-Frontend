import { cld } from '@/lib/cloudinary';
import CloudImage from "@/components/CloudImage";

const LeadershipHomePageHero = () => {
    return (
        <section className="mt-18 text-white overflow-hidden relative bg-[#171616]">
          <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
            <div className="flex lg:flex-row flex-col items-center py-14 lg:py-24 gap-y-24 lg:gap-24">
              <div className="relative align-center">
                <h1 className="font-['Clash_Display',sans-serif] font-medium leading-none z-10 text-[40px] max-[750px]:text-[28px]">
                  Join the movement with{' '}
                  <span className="font-bold text-[#3d8dfc]">AIESEC</span> to equip youths for leadership.
                </h1>
                <p className="text-[#a7a2a2] mt-2 mb-4 lg:mb-8 lg:text-[24px] w-100 lg:w-10/12">
                  Get empowered to lead and drive sustainable development in Africa with AIESEC in Nigeria.
                </p>
                <div className="flex justify-start">
                    <a href="/leadership-summit/register" className="flex primary-btn items-center lg:text-base text-black border-white border my-2">
                        Register for Leadership Summit
                        <CloudImage id="arrow.svg" className="ml-1 lg:h-6" alt="" />
                    </a>
                </div>
                <CloudImage id="YellowSTAR.svg" className="absolute -top-14 -left-4 lg:-left-12 w-12 md:w-24 h-24 z-[2]" alt="" />
              </div>
              <div className="relative">
                <div
                  className="bg-center bg-no-repeat bg-[length:auto_530px] max-[750px]:bg-[length:auto_320px] w-[260px] h-[260px] md:w-[435px] md:h-[435px] xl:w-[435px] xl:h-[435px] shadow-[8px_8px_2px_-4px_#5b57f4] relative"
                  style={{ backgroundImage: `url(${cld('banner-img.jpg')})` }}
                >
                    <CloudImage id="banner-star.svg" className="absolute lg:-top-24 lg:-left-24 -top-16 -left-16 w-30 md:w-[200px] h-auto z-[2]" alt="" />
                    <CloudImage id="tripleGlobe.svg" className="absolute -top-8 -right-8 lg:-top-10 lg:-right-8 w-24 lg:w-40 h-auto z-[2]" alt="" />
                    <div className="absolute lg:-bottom-20 lg:-left-24 -bottom-10 -left-8 w-20 lg:w-40 h-auto z-[2] p-2 rounded-full bg-[#171616]">
                      <CloudImage id="logo-circle.svg" alt="" />
                    </div>
                    <CloudImage id="greenEye.svg" className="absolute -bottom-10 -right-14 w-28 lg:-bottom-16 lg:-right-24 lg:w-44 h-auto z-[2]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  };

  export default LeadershipHomePageHero;
