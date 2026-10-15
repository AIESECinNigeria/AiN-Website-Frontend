import { cld } from '@/lib/cloudinary';
import CloudImage from "@/components/CloudImage";

const LeadershipAboutAIESEC = () => {
  return (
    <section
      className="text-white overflow-hidden relative h-[1000px] md:h-auto [background-color:lightgray] bg-no-repeat bg-cover [background-position:center_right] max-[500px]:[background-position:bottom_center] max-[500px]:bg-[length:500px_auto]"
      style={{ backgroundImage: `url(${cld('ain/ls/aboutA')})` }}
    >
      <div className="container mx-auto max-w-7xl px-6 xl:px-0 mb-20 py-20 lg:my-24 z-[20] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24">
          <div className="relative z-[10]">
            <div className="my-10">
              <div className="p-2 lg:p-3 my-3 rounded-lg bg-[rgba(255,255,255,0.15)] w-fit">
                <h5 className="font-semibold font-['Clash_Display',sans-serif] text-[18px] lg:text-base">What is AIESEC?</h5>
              </div>
              <p className="font-light text-base lg:text-xl">
                AIESEC is a youth-led organisation created by and for young people. With a major goal of achieving peace
                and fulfilment of humankind's potential, AIESEC aims to achieve this by equipping young people with
                leadership skills. AIESEC helps young people like you become better leaders and create a greater future
                for yourselves and the world you live in.
              </p>
            </div>

            <div className="my-10">
              <div className="p-2 lg:p-3 my-3 rounded-lg bg-[rgba(255,255,255,0.15)] w-fit">
                <h5 className="font-semibold font-['Clash_Display',sans-serif] text-[18px] tracking-normal lg:text-base">Curious about how we work?</h5>
              </div>
              <p className="font-light text-base lg:text-xl">
                As a youth-led organisation, we are a community of young people looking to grow personally and
                professionally. If you’re a youth who’s looking to join a community of great minds ready to change the
                world in their own way, AIESEC might just be the place for you.
              </p>
            </div>
          </div>
        </div>
      </div>

      <CloudImage
        id="ain/ls/earthOrange"
        className="absolute -top-6 -left-28 lg:top-2 lg:-left-32 h-auto w-30 lg:w-60 z-[2]"
        alt="Earth Orange"
      />
      <CloudImage
        id="ain/ls/Track"
        className="absolute -bottom-20 -right-28 lg:bottom-2 lg:-right-10 h-auto w-30 lg:w-60 z-[2]"
        alt="Track"
      />
      <div
        className="absolute top-0 left-0 w-full h-full opacity-[0.56]"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(90deg, #7949E8 -8.05%, #3D8DFC 110.58%)",
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.8] [background:linear-gradient(90deg,#000_35.57%,rgba(0,0,0,0)_110.58%)] max-[500px]:[background:linear-gradient(to_bottom,#000_35.57%,rgba(0,0,0,0)_110.58%)]"></div>
      <div className="absolute top-[-20px] left-0 w-full h-full opacity-[0.2] mix-blend-overlay bg-[length:1000px_auto] [background-position:center_right]"></div>
    </section>
  );
};

export default LeadershipAboutAIESEC;
