import classes from './GmwHomePageHero.module.css';
import { cld } from '@/lib/cloudinary';

const gmwlogo = cld('ain/gmw/gmwlogowhite');
const frame = cld('ain/gmw/blockcolor');

const GmwHomePageHero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <img src={gmwlogo} alt="the gmw logo in white color" />
      </div>
      <div className={classes.heroText}>
        <h3>
          SMART <span>MONEY</span> TALKS
        </h3>
        <div className="bg-[#008F4F] w-full mt-[15px] px-5 py-12 md:p-12">
          <p className="w-[90%] lg:w-[80%] m-auto">
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
