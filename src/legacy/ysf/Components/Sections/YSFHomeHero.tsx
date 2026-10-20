"use client";
import { useState } from 'react';
import YSFCountdown from '../YouthSpeakForum/YSFCountdown';
import YSFRegistrationModal from './YSFRegistrationModal';
import CloudImage from "@/components/CloudImage";

const YSFHomeHero = () => {
  const [registerOpen, setRegisterOpen] = useState<boolean>(false);

  return (
    <section className="relative overflow-hidden min-h-[70vh] md:min-h-screen bg-gradient-to-b from-[#6144B0] via-[55%] to-[#000000]">
      <CloudImage
        id="YSFHomeTexture"
        alt=""
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          opacity-30
          pointer-events-none
          select-none
        "
      />

      <CloudImage
        id="YSFHomePattern"
        alt=""
        className="
hidden
lg:block

absolute

top-1/2
left-1/2

-translate-x-1/2
-translate-y-1/2

w-[1000px]

max-w-none

opacity-50

pointer-events-none
select-none
"
      />

      <CloudImage
        id="YSFHomePatternMobile"
        alt=""
        className="
block
lg:hidden

absolute

top-1/2
left-1/2

-translate-x-1/2
-translate-y-1/2
w-[150%] md:w-[100%]

opacity-50

pointer-events-none
select-none
"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 min-h-screen flex lg:items-end">
        <div className="grid lg:grid-cols-2 items-end w-full">
          <div className="relative z-10 lg:pb-10 justify-center lg:justify-start">
            <h1 className="mb-6 md:mb-4 text-center lg:text-left">
              <span className="block text-white font-semibold text-[50px] lg:text-[72px] xl:text-[90px] font-body leading-[100%]">
                Youth Speak
              </span>

              <span
                className="
                block
                italic
                font-semibold
                text-[50px] lg:text-[72px] xl:text-[90px]
                bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E]
                bg-clip-text
                text-transparent font-playfair leading-[100%]
              "
              >
                Forum 2026
              </span>
            </h1>

            <button
              onClick={() => setRegisterOpen(true)}
              className="
px-8
py-4
rounded-[129px]
bg-white
text-black
font-medium
font-body
text-2xl
leading-[120%]
tracking-[-2%]
hover:scale-105
transition-all hidden lg:block
"
            >
              Register Now
            </button>

            <div className="mt-5 lg:mt-20 z-10 flex flex-col items-center lg:items-start">
              <p className="text-white text-xl lg:text-2xl font-body leading-[150%] tracking-[-2%]">
                Registration ends in:
              </p>

              <YSFCountdown />
              <button
                onClick={() => setRegisterOpen(true)}
                className=" mt-5
px-6
py-4
rounded-[129px]
bg-white
text-black
font-medium
font-body text-lg
lg:text-2xl
leading-[120%]
tracking-[-2%]
hover:scale-105
transition-all lg:hidden
"
              >
                Register Now
              </button>
            </div>
          </div>

          <div className="relative z-0 flex justify-center items-end self-end h-full">
            <div className="hidden lg:block relative w-[828px]">
              <CloudImage
                id="Circle_Effect"
                alt=""
                className="absolute inset-0 w-full h-full scale-[1.15] translate-y-[40px] object-contain pointer-events-none select-none"
              />
              <CloudImage
                id="ysfmic"
                alt="hero"
                className="relative z-[1] w-full object-contain translate-y-[50px]"
              />
            </div>

            <div className="lg:hidden relative w-full flex justify-center items-end mt-2">
              <div className="relative flex justify-center">
                <CloudImage
                  id="Circle_Effect"
                  alt=""
                  className="relative z-0 w-[115%] -translate-y-[8px] object-contain pointer-events-none select-none"
                />
                <CloudImage
                  id="ysfmic"
                  alt="hero"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[8px] w-[88%] object-contain z-[1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <YSFRegistrationModal
        open={registerOpen}
        onClose={() => setRegisterOpen(false)}
      />

      <div
        className="
absolute

bottom-[-30px]
left-0

w-full

h-[100px]

bg-black

blur-[40px]

opacity-80

pointer-events-none

z-[2]
"
      />
    </section>
  );
};

export default YSFHomeHero;
