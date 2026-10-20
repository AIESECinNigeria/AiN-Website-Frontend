import RegisterForm from '../LeadershipRegistrationForm/LeadershipRegistrationForm'
import CloudImage from "@/components/CloudImage";

const LeadershipRegisterBanner = () => {
  return (
    <div className="min-h-screen bg-[#161515]">

      <div className="overflow-x-hidden relative">
        <div>
          <section className="mt-18 text-white overflow-hidden relative">
            <div className="container mx-auto max-w-7xl px-6 xl:px-0 overflow-x-hidden mt-10 lg:mt-24 relative">
              <div className="relative font-['Clash_Display',sans-serif]">
                <h1 className="lg:text-center font-semibold my-10 text-4xl lg:text-5xl">
                  HARNESSING <span className="text-[#ffcc33]">YOUTHS</span> FOR GLOBAL CHANGE
                </h1>

                <div className="lg:px-40 my-5">
                  <div className="border px-5 py-12 my-10 rounded-lg border-white">
                    <p className="text-base lg:text-xl font-['Clash_Display',sans-serif] font-normal">Hi there! {' '}
                      We're glad you're here to lead the change with <span className="text-[#3d8dfc] font-medium">AIESEC</span>.{' '}
                    </p>
                    <p className="text-base lg:text-xl font-['Clash_Display',sans-serif] font-normal">
                      <span className="text-[#ffcc33] font-medium">Leadership Summit</span> is one of our initiatives to achieve our vision of helping young people like you develop your leadership potential.{' '} We are looking forward to holding your hand on this journey.
                    </p>
                    <p className="text-base lg:text-xl font-['Clash_Display',sans-serif] font-normal">
                      Sign up and let's go together!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <RegisterForm />

        <CloudImage
          id="ain/ls/OrangeStar"
          className="fixed top-10 -right-8 lg:top-10 lg:-right-10 h-auto w-20 lg:w-40 z-[2]"
          alt="Orange Star"
        />
        <CloudImage
          id="ain/ls/pStar"
          className="fixed -bottom-10 lg:-bottom-20 -left-10 lg:left-[75px] h-auto w-28 lg:w-60 z-[2]"
          alt="Purple Star"
        />
        <CloudImage
          id="ain/ls/Track"
          className="fixed top-12 -left-12 lg:top-12 lg:left-[105px] h-auto w-20 lg:w-24 rotate-90 z-[2]"
          alt="Track"
        />
        <CloudImage
          id="ain/ls/Track"
          className="fixed bottom-2 -right-12 lg:bottom-2 lg:-right-10 h-auto w-20 rotate-90 lg:w-24 z-[2]"
          alt="Track"
        />
      </div>
    </div>
  );
};

export default LeadershipRegisterBanner;
