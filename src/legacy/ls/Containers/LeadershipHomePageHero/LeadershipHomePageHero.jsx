import { cld } from '@/lib/cloudinary';
import classes from './LeadershipHomePageHero.module.css'
const arrow = cld('ain/ls/arrow');
const yellowStar = cld('ain/ls/YellowSTAR');
const bannerStar = cld('ain/ls/banner-star');
const tripleGlobe = cld('ain/ls/tripleGlobe');
const logoCircle = cld('ain/ls/logo-circle');
const greenEye = cld('ain/ls/greenEye');

const LeadershipHomePageHero = () => {
    return (
        <section className="mt-18 text-white overflow-hidden relative" id={classes.banner}>
          <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
            <div className="flex lg:flex-row flex-col items-center py-14 lg:py-24 gap-y-24 lg:gap-24">
              <div className="relative align-center">
                <h1 className={classes.title}>
                  Join the movement with{' '}
                  <span>AIESEC</span> to equip youths for leadership.
                </h1>
                <p className="text-grey mt-2 mb-4 lg:mb-8 lg:text-[24px] w-100 lg:w-10/12">
                  Get empowered to lead and drive sustainable development in Africa with AIESEC in Nigeria.
                </p>
                <div className="flex justify-start">
                    <a href="/leadership-summit/register" className="flex primary-btn items-center lg:text-base text-black border-white border my-2">
                        Register for Leadership Summit
                        <img className="ml-1 lg:h-6" src={arrow} alt="" />
                    </a>
                </div>
                <img src={yellowStar} className="absolute -top-14 -left-4 lg:-left-12 w-12 md:w-24 h-24 z-[2]" alt="" />
              </div>
              <div className="relative">
                <div className={`${classes.boxImg} w-[260px] h-[260px] md:w-[435px] md:h-[435px] xl:w-[435px] xl:h-[435px] p-shade relative`}>
                    <img src={bannerStar} className="absolute lg:-top-24 lg:-left-24 -top-16 -left-16 w-30 md:w-[200px] h-auto z-[2]" alt="" />
                    <img src={tripleGlobe} className="absolute -top-8 -right-8 lg:-top-10 lg:-right-8 w-24 lg:w-40 h-auto z-[2]" alt="" />
                    <div className="absolute lg:-bottom-20 lg:-left-24 -bottom-10 -left-8 w-20 lg:w-40 h-auto z-[2] p-2 rounded-full bg-[#171616]">
                      <img src={logoCircle} className="" alt="" />
                    </div>
                    <img src={greenEye} className="absolute -bottom-10 -right-14 w-28 lg:-bottom-16 lg:-right-24 lg:w-44 h-auto z-[2]" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
    );
  };

  export default LeadershipHomePageHero;
