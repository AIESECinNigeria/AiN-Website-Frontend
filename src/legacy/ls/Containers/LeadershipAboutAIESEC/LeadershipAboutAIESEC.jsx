import { cld } from '@/lib/cloudinary';
import classes from './LeadershipAboutAIESEC.module.css'
const earthOrange = cld('ain/ls/earthOrange');
const Track = cld('ain/ls/Track');

const LeadershipAboutAIESEC = () => {
  return (
    <section className="text-white overflow-hidden relative h-[1000px] md:h-auto" id={classes.aboutAiesec}>
      <div className="container mx-auto max-w-7xl px-6 xl:px-0 mb-20 py-20 lg:my-24 z-[20] relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-24">
          <div className="relative z-[10]">
            <div className="my-10">
              <div className="p-2 lg:p-3 my-3 rounded-lg bg-[rgba(255,255,255,0.15)] w-fit">
                <h5 className={`font-semibold ${classes.fcd} text-[18px] lg:text-base`}>What is AIESEC?</h5>
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
                <h5 className={`font-semibold ${classes.fcd} text-[18px] tracking-normal lg:text-base`}>Curious about how we work?</h5>
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

      <img
        src={earthOrange}
        className="absolute -top-6 -left-28 lg:top-2 lg:-left-32 h-auto w-30 lg:w-60 z-[2]"
        alt="Earth Orange"
      />
      <img
        src={Track}
        className="absolute -bottom-20 -right-28 lg:bottom-2 lg:-right-10 h-auto w-30 lg:w-60 z-[2]"
        alt="Track"
      />
      <div className={classes.bgGradient}></div>
      <div className={classes.darkGradient}></div>
      <div className={classes.backGradient}></div>
    </section>
  );
};

export default LeadershipAboutAIESEC;
