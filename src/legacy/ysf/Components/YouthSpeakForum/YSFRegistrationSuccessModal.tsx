"use client";
// import YSFPattern from "../../Assets/svgs/YSFHomePattern.svg";
// import YSFTexture from "../../Assets/svgs/YSFHomeTexture.svg";

// import YSFSuccessLogos from "../../Assets/svgs/YSFSuccessLogos.svg";

interface YSFRegistrationSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const YSFRegistrationSuccessModal = ({ open, onClose }: YSFRegistrationSuccessModalProps) => {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0

      z-[10000]

      bg-black/80

      flex
      justify-center
      items-center

      px-5
      py-8
      "
    >
      <div
        className="
        bg-white

        rounded-[18px]

        w-full

        max-w-[340px]
        md:max-w-[600px]

        overflow-hidden

        shadow-2xl
        "
      >
        {/* HERO */}

        <div>
          {/* texture */}

          {/* <img
            src={YSFTexture}
            alt=""

            className="
            absolute
            inset-0

            w-full
            h-full

            object-cover

            opacity-30
            "
          />

          {/* rings

          <img
            src={YSFPattern}
            alt=""

            className="
            absolute

            top-1/2
            left-1/2

            -translate-x-1/2
            -translate-y-1/2

            w-[700px]

            opacity-70
            "
          />

          {/* center logo */}

          {/* <div
            className="
            absolute

            inset-0

            flex
            items-center
            justify-center
            "
          >

            <img
              src={YSFSuccessLogos}
              alt="Success"

              className="
              w-1/2

              object-contain

              relative
              z-10
              "
            />

          </div> */}
        </div>

        {/* BODY */}

        <div
          className="
          px-8 md:px-10
          py-14 md:py-16
          text-center flex flex-col items-center gap-10
          "
        >
          <h2 className="text-2xl md:text-5xl font-body text-black leading-[120%] tracking-[-2%]">
            Registration
            <br />
            <span
              className="
            italic

            text-[42px]
            md:text-7xl

            leading-[120%] tracking-[-2%] font-medium

            font-playfair

            bg-gradient-to-r

            from-[#7552CC]

            via-[#0CB9C1]

            to-[#00C16E]

            bg-clip-text

            text-transparent
            "
            >
              successful!
            </span>
          </h2>

          <p
            className="
            text-[#010102]
            text-base
            md:text-xl
            font-body w-full md:w-[75%]
            "
          >
            We’re glad to have you join the conversation. A confirmation email
            for your registration will be sent to you shortly.
          </p>

          <button
            onClick={onClose}
            className="
            w-[60%] md:w-[45%]
            py-3 md:py-4 text-xl md:text-[26px]
            rounded-full
            text-white
            bg-gradient-to-r
            from-[#7552CC]
            via-[#0CB9C1]
            to-[#00C16E]
            transition-all
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default YSFRegistrationSuccessModal;
