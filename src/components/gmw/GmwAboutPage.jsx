import classes from './GmwAboutPage.module.css';
import { cld } from '@/lib/cloudinary';

const smiley = cld('ain/gmw/gmwImage1');
const schoolkids = cld('ain/gmw/gmwImage2');
const blue = cld('ain/gmw/gmwImage3');
const board = cld('ain/gmw/gmwImage4');
const chris = cld('ain/gmw/gmwImage5');
const semiloore = cld('ain/gmw/gmwImage6');
const sporty = cld('ain/gmw/gmwImage7');
const walkman = cld('ain/gmw/gmwImage8');
const hijab = cld('ain/gmw/gmwImage9');
const ibadan = cld('ain/gmw/gmwImageX');
const akure = cld('ain/gmw/gmwImageXI');
const benue = cld('ain/gmw/gmwImageXII');
const ellipse = cld('ain/gmw/ellipse-7');
const gmwImage18 = cld('ain/gmw/gmwImage18');
const gmwImage19 = cld('ain/gmw/gmwImage19');

const GmwAboutPage = () => {
  return (
    <div className={classes.container}>
      <div className=" relative overflow-hidden w-full transform -skew-y-6">
        <div className="bg-[#CD7A34]  min-w-[100vw] py-2">
          <div className="animate-marquee marque-container whitespace-nowrap p-3 flex items-center gap-2 text-white">
            <p>
              Side gist : Joining the Smart Money Talk can help you become a
              Smart Money Master
            </p>
            <img src={ellipse} alt="a yellow ellipse" />
            <p>
              Side gist : Joining the Smart Money Talk can help you become a
              Smart Money Master
            </p>
          </div>
        </div>
      </div>

      <div className={classes.aboutContainer}>
        <div className={classes.aboutText}>
          <h4>About Gmw</h4>
          <p>
            <span>Global Money Week </span>is an annual awareness campaign
            created to make sure young people like you in different parts of the
            world have all the knowledge you need to make the best financial
            decisions and attain financial well-being at whatever phase you are
            in.
            <br />
            <br />
            So, whether you’re a tech bro, just a student or a working-class
            babe, GMW exists to help you learn how to manage your finances.
          </p>
        </div>
        {/* <div className={classes.aboutImage}>
          <img src={smiley} alt="two young ladies smiling at the camera" />
          <img
            src={schoolkids}
            alt="group of school children wearing white and blue"
            className="border-2 h-[50%] w-full ml-auto"
          />
        </div> */}
      </div>
      <div className="bg-[#CD7A34] p-1"></div>
      <div className={classes.displayContainer}>
        <div>
          <img src={blue} alt="a young lady speaking" />
        </div>
        <div>
          <img src={gmwImage19} alt="a young lady speaking" />
        </div>
        <div>
          <img src={semiloore} alt="a young lady speaking" />
        </div>
        <div>
          <img src={sporty} alt="a young lady speaking" />
        </div>
        <div>
          <img src={gmwImage18} alt="a young lady speaking" />
        </div>
        <div>
          <img src={board} alt="a young lady speaking" />
        </div>
      </div>
      <div className="bg-[#CD7A34] p-1"></div>

      <div className={classes.focusContainer}>
        <div className={classes.focusTextSection}>
          <h4>The focus of gmw</h4>
          <p>
            The focus is to equip <span>young people</span> with the knowledge,
            skills attitudes, and behaviours needed to make informed financial
            decisions, and build sustainable, long-term financial well-being.
          </p>
        </div>
        <div className="bg-[#08841B] p-1"></div>
        <div className={classes.focusImageSection}>
          <div>
            <img src={hijab} alt="a young lady speaking" />
          </div>
          <div>
            <img src={ibadan} alt="a young lady speaking" />
          </div>
          <div>
            <img src={akure} alt="a young lady speaking" />
          </div>
          <div>
            <img src={benue} alt="a young lady speaking" />
          </div>
        </div>
        <div className="bg-[#08841B] p-1"></div>
      </div>

      <div className="h-18 md:h-20 bg-transparent"></div>

      <div className={classes.NextSection}>
        <div className={classes.NextTextSection}>
          <h4>AND THAT’S A WRAP!</h4>
          <p>
          Global Money Week 2026 is officially over and what a ride it was.
          Missed it? Don’t worry, 2027 promises to be even better.
          Check out our social media to know what opportunities we currently have for you.
          </p>
        </div>
        {/* <div className={classes.ExploreButton}>
          <a href="/gmw/registration">Get Involved!</a>
        </div> */}
      </div>
    </div>
  );
};

export default GmwAboutPage;
