import { cld } from '@/lib/cloudinary';
import CloudImage from "@/components/CloudImage";

const LeadershipOurTheme = () => {
  return (
    <div className="relative overflow-hidden">
      <section className="bg-[#171616] text-white overflow-hidden relative" id="our-theme">
        <div className="container mx-auto max-w-7xl px-6 xl:px-0 my-10 lg:my-24 relative">
          <div className="relative z-[10] mb-36">
            <div className="font-['Clash_Display',sans-serif] text-[#5b57f4] w-fit font-medium text-xl lg:text-[34px] my-4 rounded-lg">
              Leadership Summit 2024:{" "}
              <span className="font-light">Transforming Youths for a Sustainable Africa</span>
            </div>
            <div
              className="border border-white rounded-lg my-1 bg-cover bg-center bg-no-repeat w-100 md:h-96 h-40 relative"
              style={{ backgroundImage: `url(${cld('ain/ls/ourTheme')})` }}
            >
              <CloudImage
                id="ain/ls/banner-star"
                className="absolute -bottom-6 -left-8 w-14 h-14 z-[12]"
                alt="Banner Star"
              />
            </div>
            <div className="my-3">
              <p className="font-light text-base lg:text-xl">
              Youths are driving forces for transformative change, with the needed energy, creativity, and passion. We believe in empowering young leaders like <span className="text-[#ffcc33] font-bold">YOU</span> with the skills, perspectives, and practices to drive sustainable change in Africa. AIESEC in Nigeria invites <span className="text-[#ffcc33] font-bold">YOU</span> to be a part of this transformation.
              </p>
            </div>
            <div className="flex justify-start my-4">
              <a href="/leadership-summit/register" className="flex white-btn text-white lg:text-base items-center border-white border">
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
          <CloudImage
            id="ain/ls/orangeStripe"
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
              <div className="font-['Clash_Display',sans-serif] text-[#5b57f4] w-fit font-medium text-xl lg:text-[34px] my-4 rounded-lg">
                The Summit and Sustainable Development Goals
              </div>
              <div className="my-3">
                <p className="font-light text-base lg:text-xl max-w-2xl">
                This year's Leadership Summit is anchored on four SDGs that are concerned with equipping youths like <span className="text-[#ffcc33] font-bold">YOU</span> with all that is required to create healthy, thriving communities, develop sustainable cities, boost economic growth through decent work, and strengthen collaboration for Africa's development.
                </p>
              </div>
              <div className="flex justify-start my-4">
                <a href="/leadership-summit/register" className="flex white-btn text-white items-center border-white border">
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
            <div className="overflow-y-scroll [&::-webkit-scrollbar]:w-0 [&::-webkit-scrollbar-thumb]:bg-transparent h-96">
              <div className="flex flex-col gap-y-24">
                <div
                  className="w-full h-80 border-2 bg-cover bg-center bg-no-repeat border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden"
                  style={{ backgroundImage: `url(${cld('ain/ls/sdg3-bg')})` }}
                >
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 3 - <span className="font-normal">Good Health and Well-being</span>
                    </p>
                  </div>
                  <CloudImage
                    id="ain/ls/sdg3"
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 3"
                  />
                </div>
                <div
                  className="w-full h-80 border-2 bg-cover bg-center bg-no-repeat border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden"
                  style={{ backgroundImage: `url(${cld('ain/ls/sdg8-bg')})` }}
                >
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 8 - <span className="font-normal">Decent Work and Economic Growth</span>
                    </p>
                  </div>
                  <CloudImage
                    id="ain/ls/sdg8"
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 8"
                  />
                </div>
                <div
                  className="w-full h-80 border-2 bg-cover bg-center bg-no-repeat border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden"
                  style={{ backgroundImage: `url(${cld('ain/ls/sdg11-bg')})` }}
                >
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 11- <span className="font-normal">Sustainable Cities and Communities</span>
                    </p>
                  </div>
                  <CloudImage
                    id="ain/ls/sdg11"
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 11"
                  />
                </div>
                <div
                  className="w-full h-80 border-2 bg-cover bg-center bg-no-repeat border-apurple p-4 lg:p-6 rounded-[24px] relative overflow-hidden"
                  style={{ backgroundImage: `url(${cld('ain/ls/sdg17-bg')})` }}
                >
                  <div className="sdg-title px-3 py-2 rounded-lg z-10 bg-white text-black lg:w-fit">
                    <p className="font-bold text-center text-[14px]">
                      SDG 17 - <span className="font-normal"> Partnerships for the Goals</span>
                    </p>
                  </div>
                  <CloudImage
                    id="ain/ls/sdg17"
                    className="absolute bottom-6 right-6 lg:-left-34 h-auto w-6 z-[2]"
                    alt="SDG 17"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <CloudImage
          id="ain/ls/earthOrange"
          className="absolute top-8 -left-16 lg:-left-34 h-auto w-20 lg:w-36 z-[2]"
          alt="Earth Orange"
        />
      </section>

      <CloudImage
        id="ain/ls/goldenGlobe"
        className="absolute top-[43%] lg:top-[51%] -right-5 lg:-right-10 h-auto w-20 lg:w-40"
        alt="Golden Globe"
      />
    </div>
  );
};

export default LeadershipOurTheme;
