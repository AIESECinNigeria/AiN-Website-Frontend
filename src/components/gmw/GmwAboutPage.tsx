import CloudImage from "@/components/CloudImage";
import { cld } from "@/lib/cloudinary";

const bgTexture = cld("background-texture.png");

const GmwAboutPage = () => {
  return (
    <div
      className="bg-[#FFF0B7] bg-center bg-no-repeat bg-cover pt-32 pb-12 px-0"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className=" relative overflow-hidden w-full transform -skew-y-6">
        <div className="bg-[#CD7A34]  min-w-[100vw] py-2">
          <div className="animate-[marquee-legacy_15s_linear_infinite] marque-container whitespace-nowrap p-3 flex items-center gap-2 text-white">
            <p>
              Side gist : Joining the Smart Money Talk can help you become a
              Smart Money Master
            </p>
            <CloudImage id="ellipse-7" alt="a yellow ellipse" />
            <p>
              Side gist : Joining the Smart Money Talk can help you become a
              Smart Money Master
            </p>
          </div>
        </div>
      </div>

      <div className="py-[100px] px-0 flex items-center min-[768px]:max-[920px]:gap-5 max-[767px]:pt-[100px] max-[767px]:px-[20px] max-[767px]:pb-0 max-[767px]:block max-[767px]:gap-0">
        <div className="w-1/2 m-auto text-center mb-[50px] max-[767px]:w-full max-[767px]:mb-8">
          <h4 className="text-black font-['skope'] font-bold text-[48px] uppercase mb-[10px] max-[767px]:font-semibold max-[767px]:text-[24px] max-[767px]:text-center">
            About Gmw
          </h4>
          <p className="text-black text-[20px] italic font-light max-[767px]:text-[16px] max-[767px]:w-full">
            <span className="font-bold text-[#CD7A34]">Global Money Week </span>is an annual awareness campaign
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
      <div className="py-[12px] px-[48px] grid grid-cols-3 gap-5 max-[767px]:p-[20px] max-[767px]:grid-cols-2 max-[767px]:gap-5">
        <div>
          <CloudImage id="gmwImage3.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
        <div>
          <CloudImage id="gmwImage19.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
        <div>
          <CloudImage id="gmwImage6.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
        <div>
          <CloudImage id="gmwImage7.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
        <div>
          <CloudImage id="gmwImage18.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
        <div>
          <CloudImage id="gmwImage4.png" alt="a young lady speaking" className="w-full h-[300px] object-cover min-[768px]:max-[920px]:h-[200px] min-[768px]:max-[920px]:border-2 min-[768px]:max-[920px]:border-black" />
        </div>
      </div>
      <div className="bg-[#CD7A34] p-1"></div>

      <div className="pt-[120px] px-0 pb-0 max-[767px]:py-[50px]">
        <div className="block text-center mb-[50px]">
          <h4 className="text-[48px] font-['skope'] font-bold uppercase text-black mb-[10px] max-[767px]:text-[24px]">
            The focus of gmw
          </h4>
          <p className="text-[20px] italic font-light w-1/2 mx-auto mb-8 leading-[24.5px] max-[767px]:text-[16px] max-[767px]:w-[90%]">
            The focus is to equip <span className="text-[#008f4f] font-medium">young people</span> with the knowledge,
            skills attitudes, and behaviours needed to make informed financial
            decisions, and build sustainable, long-term financial well-being.
          </p>
        </div>
        <div className="bg-[#08841B] p-1"></div>
        <div className="grid grid-cols-4 gap-5 py-[12px] px-0 max-[767px]:grid-cols-2 max-[767px]:gap-5">
          <div>
            <CloudImage id="gmwImage9.png" alt="a young lady speaking" />
          </div>
          <div>
            <CloudImage id="gmwImageX.png" alt="a young lady speaking" />
          </div>
          <div>
            <CloudImage id="gmwImageXI.png" alt="a young lady speaking" />
          </div>
          <div>
            <CloudImage id="gmwImageXII.png" alt="a young lady speaking" />
          </div>
        </div>
        <div className="bg-[#08841B] p-1"></div>
      </div>

      <div className="h-18 md:h-20 bg-transparent"></div>

      <div className="py-[10px] px-[50px] mt-12 mb-8 max-[767px]:py-[50px] max-[767px]:px-[10px] max-[767px]:rounded-[20px]">
        <div className="block text-center">
          <h4 className="text-[36px] font-bold uppercase mb-4 font-['skope'] max-[767px]:text-[24px]">
            AND THAT’S A WRAP!
          </h4>
          <p className="text-[20px] font-light italic mb-8 mx-auto w-[55%] p-8 max-[767px]:w-full max-[767px]:text-[16px]">
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
