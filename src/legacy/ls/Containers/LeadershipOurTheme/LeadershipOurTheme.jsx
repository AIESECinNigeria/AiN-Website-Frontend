import { cld } from '@/lib/cloudinary';
import classes from './LeadershipOurTheme.module.css'
const bannerStar = cld('ain/ls/banner-star');
const orangeStripe = cld('ain/ls/orangeStripe');
const SDG3 = cld('ain/ls/sdg3');
const SDG11 = cld('ain/ls/sdg11');
const SDG8 = cld('ain/ls/sdg8');
const SDG17 = cld('ain/ls/sdg17');
const earthOrange = cld('ain/ls/earthOrange');
const goldenGlobe = cld('ain/ls/goldenGlobe');

const LeadershipOurTheme = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-[#171616] text-white overflow-hidden relative" id="our-theme">
        <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
          <div className="relative z-[10] mb-36">
            <div className={`${classes.title} w-fit font-medium text-xl lg:text-[34px] my-4 rounded-lg`}>
              Leadership Summit 2024:{" "}
              <span className="font-light">Transforming Youths for a Sustainable Africa</span>
            </div>
            <div className={`border border-white rounded-lg my-1 ${classes.ourWhatImg} w-100 md:h-96 h-40 relative`}>
              <img
                src={bannerStar}
                className="absolute -bottom-6 -left-8 w-14 h-14 z-[12]"
                alt="Banner Star"
              />
            </div>
            <div className="my-3">
              <p className="font-light text-base lg:text-xl">
              Youths are driving forces for transformative change, with the needed energy, creativity, and passion. We believe in empowering young leaders like <span className={classes.text}>YOU</span> with the skills, perspectives, and practices to drive sustainable change in Africa. AIESEC in Nigeria invites <span className={classes.text}>YOU</span> to be a part of this transformation.
              </p>
            </div>
            <div className="flex justify-start my-4">
              <a href="LeadershipSummit/register" className="flex white-btn text-white lg:text-base items-center border-white border">
                Register for Leadership Summit
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 19 19"
                  fill="none"
                  className="ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.77459 12.1441L12.9773 5.94141"
                    stroke="#ffffff"
                    strokeWidth="0.974661"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843"
                    stroke="#ffffff"
                    strokeWidth="0.974661"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
          <img
            src={orangeStripe}
            className="absolute top-32 lg:top-16 rotate-45 -right-14 lg:-right-36 h-auto w-40 lg:w-80 z-[20]"
            alt="Orange Stripe"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="bg-[#1B1A1A] text-white overflow-hidden relative">
        <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
          <div className="grid lg:grid-cols-3 grid-cols-1">
            <div className="relative z-[10] col-span-2 mb-36">
              <div className={`${classes.title} w-fit font-medium text-xl lg:text-[34px] my-4 rounded-lg`}>
                The Summit and Sustainable Development Goals
              </div>
              <div className="my-3">
                <p className="font-light text-base lg:text-xl max-w-2xl">
                This year's Leadership Summit is anchored on four SDGs that are concerned with equipping youths like <span className={classes.text}>YOU</span> with all that is required to create healthy, thriving communities, develop sustainable cities, boost economic growth through decent work, and strengthen collaboration for Africa's development.
                </p>
              </div>
              <div className="flex justify-start my-4">
                <a href="LeadershipSummit/register" className="flex white-btn text-white items-center border-white border">
                  Register for Leadership Summit
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 19 19"
                    fill="none"
                    className="ml-1"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.77459 12.1441L12.9773 5.94141"
                      stroke="#ffffff"
                      strokeWidth="0.974661"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.83371 5.88163L13.0364 5.88163L13.0364 12.0843"
                      stroke="#ffffff"
                      strokeWidth="0.974661"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className={`overflow-y-scroll ${classes.sdgCards} h-96`}>
              <div className="flex flex-col gap-y-24">
                <div className={`w-full h-80 border-2 ${classes.sdgCard} border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden`}>
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 3 - <span className="font-normal">Good Health and Well-being</span>
                    </p>
                  </div>
                  <img
                    src={SDG3}
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 3"
                  />
                </div>
                <div className={`w-full h-80 border-2 ${classes.sdgCard} border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden`}>
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 8 - <span className="font-normal">Decent Work and Economic Growth</span>
                    </p>
                  </div>
                  <img
                    src={SDG8}
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 8"
                  />
                </div>
                <div className={`w-full h-80 border-2 ${classes.sdgCard} border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden`}>
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 11- <span className="font-normal">Sustainable Cities and Communities</span>
                    </p>
                  </div>
                  <img
                    src={SDG11}
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 11"
                  />
                </div>
                <div className={`w-full h-80 border-2 ${classes.sdgCard} border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden`}>
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 17 - <span className="font-normal"> Partnerships for the Goals</span>
                    </p>
                  </div>
                  <img
                    src={SDG17}
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 17"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          src={earthOrange}
          className="absolute top-8 -left-16 lg:-left-34 h-auto w-20 lg:w-36 z-[2]"
          alt="Earth Orange"
        />
      </section>

      <img
        src={goldenGlobe}
        className="absolute top-[43%] lg:top-[51%] -right-5 lg:-right-10 h-auto w-20 lg:w-40"
        alt="Golden Globe"
      />
    </div>
  );
};

export default LeadershipOurTheme;
