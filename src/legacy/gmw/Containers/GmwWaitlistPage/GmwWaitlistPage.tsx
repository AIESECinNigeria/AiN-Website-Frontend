"use client";
import { useEffect, useState } from "react";
import { cld } from "@/lib/cloudinary";
import CloudImage from "@/components/CloudImage";
import Button from "../../Components/Button/Button";
import GmwWaitlistForm from "./GmwWaitlistForm";

const bgTexture = cld("ain/gmw/background-texture");
const brownTexture = cld("ain/gmw/Texture-on-Brown");

const GmwWaitlistPage = () => {
  const [email, setEmail] = useState<string>("");
  const [selectedLC, setSelectedLC] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ email: string; select: string }>({
    email: "",
    select: "",
  });

  const ourLCs = [
    {
      name: "Abeokuta",
    },
    {
      name: "Abuja",
    },
    {
      name: "Akure",
    },
    {
      name: "Benin",
    },
    {
      name: "Benue",
    },
    {
      name: "Calabar",
    },
    {
      name: "Enugu",
    },
    {
      name: "Ibadan",
    },
    {
      name: "Ife",
    },
    {
      name: "Ilorin",
    },
    {
      name: "Jos",
    },
    {
      name: "Lagos",
    },
    {
      name: "Portharcourt",
    },
  ];

  useEffect(() => {
}, []);

  const validateLCSelection = () => {
    let newErrors = { email: "", select: "" };
    if (!email.trim()) newErrors.email = "Email is required";
    if (!selectedLC) newErrors.select = "Please select your LC";
    setErrors(newErrors);
    return !newErrors.email && !newErrors.select;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateLCSelection()) {
      setSubmitted(true);
    }
  };

  return (
    <div
      className="min-h-[90vh] bg-[#fff0b7] bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <div className="pt-[20px] pr-0 pb-[40px] pl-[50px] max-[767px]:pb-[50px] max-[767px]:pl-[20px]">
        <CloudImage
          id="ain/gmw/black"
          alt="the gmw logo in black color"
          className="max-[767px]:w-[100px]"
        />
      </div>
      <div className="flex items-end md:h-[500px] max-[767px]:items-center max-[767px]:flex-col">
        <div className="pl-[100px] border-b-2 border-[#008f4f] pb-[60px] w-[85%] min-[920px]:max-[1120px]:w-[80%] min-[767px]:max-[920px]:w-[70%] min-[767px]:max-[920px]:pl-[50px] max-[767px]:pl-0 max-[767px]:w-[90%] max-[767px]:mb-12 max-[767px]:border-b-0">
          <h4 className="font-['skope'] text-[56px] font-bold mb-[10px] text-left min-[920px]:max-[1120px]:w-[80%] min-[767px]:max-[920px]:w-full min-[767px]:max-[920px]:text-[35px] max-[767px]:text-[24px] max-[767px]:text-center">
            LET’S TALK MONEY, THE SMART WAY!
          </h4>
          <p className="italic text-[28px] w-[70%] font-light mb-8 min-[920px]:max-[1120px]:text-[20px] min-[920px]:max-[1120px]:w-[75%] min-[767px]:max-[920px]:text-[20px] min-[767px]:max-[920px]:w-full max-[767px]:text-[18px] max-[767px]:w-[95%] max-[767px]:mt-0 max-[767px]:mx-auto max-[767px]:text-center">
            Your financial future starts with the right conversation. This year,
            join us for a series of events designed to help you navigate your
            financial journey with confidence and community.
          </p>
          <div className="max-[767px]:block max-[767px]:text-center [&>button]:w-[200px] [&>button]:bg-transparent [&>button]:border-2 [&>button]:border-black [&>button]:text-black [&>button]:rounded-[12px] [&>button]:shadow-[4px_4px_0px_0px_#008f4f] [&>button]:py-2 [&>button]:px-4">
            <Button>
              <a href="#waitlist-form">Join the Talk!</a>
            </Button>
          </div>
        </div>
        <div className="-mt-[190px] ml-auto max-[767px]:mt-0">
          <div className="hidden max-[767px]:block">
            <CloudImage
              id="ain/gmw/colorblock2"
              alt="a block of colors"
              className="max-[767px]:w-full"
            />
          </div>
          <div className="max-[767px]:hidden">
            <CloudImage id="ain/gmw/colortower2" alt="a block of colors" />
          </div>
        </div>
      </div>
      <div className="text-center py-[100px] px-0 w-[70%] m-auto max-[767px]:block max-[767px]:w-full">
        <h4 className="font-semibold text-[48px] mb-12 font-['skope'] min-[920px]:max-[1120px]:text-[35px] min-[767px]:max-[920px]:text-[30px] max-[767px]:text-[20px]">
          WHY DOES GLOBAL MONEY WEEK EXIST?
        </h4>
        {/* <div className={classes.aboutImageSection}>
          <div className={classes.aboutImage}>
            <img src={seki} alt="a young lady " />
          </div>
        </div> */}
        <p className="italic font-light text-[20px] m-auto min-[767px]:max-[920px]:text-[20px] min-[767px]:max-[920px]:w-[85%] max-[767px]:w-[90%] max-[767px]:text-[18px] max-[767px]:mt-[30px] max-[767px]:mx-auto max-[767px]:mb-0">
          There’s no sustenance without money, and young people like you need
          all the resources you can get to be sure you make the best financial
          decisions possible in your lifetime.
          <br />
          <br />
          That is why{" "}
          <span className="text-[#008f4f] font-medium">Global Money Week,</span> a
          week-long awareness campaign, exists to ensure you are financially
          aware and get all the skills and behaviors you need to achieve
          ultimate financial well-being at the right standards.
        </p>
      </div>
      <div
        className="bg-[#cd7a14] flex flex-col text-center justify-center items-center pt-[70px] pr-0 pb-[70px] pl-[70px] max-[767px]:w-full max-[767px]:py-[100px] max-[767px]:px-[20px] "
        style={{ backgroundImage: `url(${brownTexture})` }}
      >
        <h4 className="text-white text-[48px] mb-12 font-['skope'] font-semibold w-[60%] min-[920px]:max-[1120px]:text-[35px] min-[767px]:max-[920px]:text-[30px] max-[767px]:text-center max-[767px]:w-full max-[767px]:text-[20px]">
          WHY SHOULD YOU BE A PART?
        </h4>
        <div className="flex justify-center items-center [grid-row:1/3] [grid-column:2/3] max-[767px]:mb-[70px]">
          <div className="flex items-center">
            <div className="bg-[#fcefef] pt-[2px] px-[2px] pb-[40px] w-[215px] min-[920px]:max-[1120px]:w-[155px] min-[767px]:max-[920px]:w-[130px] max-[767px]:w-[150px] max-[450px]:w-[120px] [transform:rotate(-20deg)_translateY(80px)] z-[1] relative shadow-[-4px_4px_0px_0px_#000] after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[19%] after:bg-[#008f4f]">
              <CloudImage id="ain/gmw/gambit" alt="a young man " />
            </div>
            <div className="bg-[#fcefef] pt-[2px] px-[2px] pb-[40px] w-[215px] min-[920px]:max-[1120px]:w-[155px] min-[767px]:max-[920px]:w-[130px] max-[767px]:w-[150px] max-[450px]:w-[120px] z-[1] relative shadow-[4px_4px_0px_0px_#000] after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[19%] after:bg-aiesec-blue">
              <CloudImage id="ain/gmw/jamal" alt="a young man " />
            </div>
            <div className="bg-[#fcefef] pt-[2px] px-[2px] pb-[40px] w-[215px] min-[920px]:max-[1120px]:w-[155px] min-[767px]:max-[920px]:w-[130px] max-[767px]:w-[150px] max-[450px]:w-[120px] [transform:rotate(10deg)_translateY(70px)] z-[10] shadow-[4px_4px_0px_0px_#000] after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:w-full after:h-[19%] after:bg-[#ffde00]">
              <CloudImage id="ain/gmw/selfiecam" alt="a young lady " />
            </div>
          </div>
        </div>
        <p className="italic font-light text-white w-[70%] mt-40 mx-0 mb-20 text-[20px] min-[767px]:max-[920px]:w-full max-[767px]:mt-[70px] max-[767px]:mx-auto max-[767px]:mb-0 max-[767px]:w-full max-[767px]:text-[18px]">
          Earning a lot of money isn’t the perfect shot at financial freedom.
          Making the best money decisions regarding saving, investing, and
          spending is your shot. This year, Global Money Week highlights{" "}
          <b>Smart Money Talks</b> . Be a part of the conversation.
        </p>
      </div>

      <section
        id="waitlist-form"
        className="py-[100px] px-[20px] flex items-center justify-center flex-col"
      >
        <h4 className="uppercase font-bold text-black font-['skope'] text-[48px] mb-4 text-center max-[767px]:text-[20px]">
          RESERVE YOUR SPOT!
        </h4>
        <p className="italic font-light text-[20px] mb-8 w-[85%] text-center max-[767px]:text-[18px] max-[767px]:w-full">
          In all 13 local chapters of AIESEC in Nigeria, there are different
          activities and events planned out for young people like you. So, to be
          a part of global money week in AIESEC in Nigeria and get your money
          game up, look out for the activity closest to you and show up!{" "}
        </p>

        {/* {!submitted ? (
          // <form onSubmit={handleSubmit} className="flex flex-col  items-center">
          //   <div className="flex items-center justify-center gap-4">
          //     <div className={classes.LCSection}>
          //       <label className="italic">Your Local Committee</label>
          //       <select
          //         value={selectedLC}
          //         onChange={(e) => setSelectedLC(e.target.value)}
          //         className={`bg-white mt-3  px-6 py-2 border text-base text-[#CACCD1] italic shadow-[4px_4px_0px_0px_#000] border-[#20252F]`}
          //         name="LC"
          //         id="LC"
          //         defaultValue={''}
          //       >
          //         <option value="" disabled>
          //           Select your LC
          //         </option>
          //         {ourLCs.map((LC, index) => {
          //           return (
          //             <option
          //               value={LC.name}
          //               key={index}
          //               className="text-[#20252F] "
          //             >
          //               {LC.name}
          //             </option>
          //           );
          //         })}
          //       </select>
          //       {errors.select && (
          //         <p className="mt-2 text-red-500 text-sm">{errors.select}</p>
          //       )}
          //     </div>
          //     <div>
          //       <label className="italic">Your Email Address</label>
          //       <input
          //         type="email"
          //         value={email}
          //         onChange={(e) => setEmail(e.target.value)}
          //         className={`bg-white mt-3 px-6 py-2 border text-base text-[#CACCD1] italic shadow-[4px_4px_0px_0px_#000] border-[#20252F]`}
          //         placeholder="example@gmail.com"
          //       />
          //       {errors.email && (
          //         <p className="mt-2 text-red-500 text-sm">{errors.email}</p>
          //       )}
          //     </div>
          //   </div>
          //   <button className="mt-10 bg-[#008F4F] text-white px-10 py-3 rounded-lg cursor-pointer hover:opacity-55">
          //     Join Waitlist
          //   </button>
          // </form>
          <GmwWaitlistForm />
        ) : (
          <></>
        )} */}

        {/* <div className={classes.ourLCSection}>
          {ourLCs.map((data, i) => {
            return (
              <div key={i} className={classes.LC} data-aos="fade-down">
                <span>{data.name}</span>
              </div>
            );
          })}
        </div> */}
      </section>
    </div>
  );
};

export default GmwWaitlistPage;
