import CloudImage from "@/components/CloudImage";
import { cld } from "@/lib/cloudinary";

const heroImage = cld("ain/gmw/gmwHeroImage");

const GmwHomePageHero = () => {
  return (
    <div
      className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat pt-[40px] max-[767px]:pt-[20px] max-[767px]:bg-[position:center_-30vh]"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 143, 79, 0.7), rgba(0, 143, 79, 0.7)), url(${heroImage})`,
      }}
    >
      <div className="pl-[40px] max-[767px]:pl-[20px]">
        <CloudImage
          id="ain/gmw/gmwlogowhite"
          alt="the gmw logo in white color"
          className="min-[768px]:max-[920px]:w-[100px]"
        />
      </div>
      <div className="mt-[60px] flex flex-col items-center justify-center text-center min-[768px]:max-[920px]:mt-[100px] max-[767px]:mt-[100px]">
        <h3 className="mb-8 font-['skope'] text-[56px] font-bold uppercase text-[#FDEEB6] min-[768px]:max-[920px]:mb-4 min-[768px]:max-[920px]:text-[32px] max-[767px]:mb-4 max-[767px]:text-[24px]">
          SMART <span className="bg-[#FDEEB6] px-[5px] py-0 text-black">MONEY</span> TALKS
        </h3>
        <div className="bg-[#008F4F] w-full mt-[15px] px-5 py-12 md:p-12">
          <p className="w-[90%] lg:w-[80%] m-auto text-[20px] italic font-light text-[#FDEEB6]">
            This year's theme aims to encourage young people to have open
            conversations about financial topics in order to build confidence,
            financial literacy, and resilience. AIESEC in Nigeria, during the
            Global Money Week, is set to help young people identify financial
            problems and provide financial education necessary to build
            healthier financial habits, achieve financial freedom, and become
            financially responsible global citizens.
          </p>
        </div>
      </div>
      {/* <div className={classes.colorContainer}>
          <img src={frame} alt="a block of different colors" />
        </div> */}
    </div>
  );
};

export default GmwHomePageHero;
