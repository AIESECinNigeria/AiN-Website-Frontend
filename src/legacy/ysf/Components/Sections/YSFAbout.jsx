import { cld } from '@/lib/cloudinary';

const YSFAboutImg = cld('ain/ysf/YSFAbout');

const YSFAbout = () => {
  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Illustration */}
          <div className="flex justify-center order-2 md:order-1">
            <img
              src={YSFAboutImg}
              alt="YouthSpeak Community"
              className="
                w-full
                max-w-[500px]
                object-contain
              "
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">

            <h2
              className="
            text-[40px]  md:text-[64px]
              font-semibold
              leading-[110%]
              text-black
              font-body
              mb-6
            "
            >
              About <span className="font-playfair bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E] text-transparent bg-clip-text italic">YSF</span>
            </h2>

            <div className="space-y-8">

              <p
                className="
               text-lg md:text-2xl
                leading-[150%]
                tracking-[-2%]
                text-black
                font-body
              "
              >
                Young people have been left out of
                conversations that revolve around
                their future for too long. With
                YouthSpeak Forum, AIESEC is changing
                that.
              </p>

              <p
                className="
               text-lg md:text-2xl
                leading-[150%]
                tracking-[-2%]
                text-black
                font-body
              "
              >
                YouthSpeak is an initiative that
                brings together young changemakers,
                thought leaders, and industry giants
                from across Nigeria to one stage to
                talk about what really matters.
              </p>

              <p
                className="
               text-lg md:text-2xl
                leading-[150%]
                tracking-[-2%]
                text-black
                font-body
              "
              >
                 This year, we are bringing a set of diverse speakers from various backgrounds to come speak on Zero Hunger (SDG 2), No Poverty (SDG 1), Decent Work & Economic Growth (SDG 8).
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default YSFAbout;