"use client";
interface YSFRegistrationHeaderProps {
  step: number;
  totalSteps?: number;
  showBack?: boolean;
  onBack?: () => void;
  onClose?: () => void;
}

const YSFRegistrationHeader = ({
  step,
  totalSteps = 2,
  showBack = false,
  onBack,
  onClose,
}: YSFRegistrationHeaderProps) => {

  return (

    <div
      className="
      relative
      mb-8
      "
    >

      {/* TOP ROW */}

      <div
        className="
        flex
        items-center
        justify-between

        w-full
        "
      >

        {/* LEFT */}

        <div>

          {showBack && (

            <div
              onClick={onBack}

              className="
              flex
              items-center

              cursor-pointer

              gap-1

              text-[#555555]

              text-2xl

              leading-[150%]

              font-body
              "
            >

              <button>
                {"<"}
              </button>

              <button className="hidden md:block">
                Back
              </button>

            </div>

          )}

        </div>

        {/* RIGHT */}

        {/* <button
          onClick={onClose}

          className="
          text-black

          text-xl
          md:text-sm
          "
        >
          ×
        </button> */}

      </div>

      {/* TITLE */}

      <div className="text-center mt-4">

        <h2
          className="text-2xl md:text-5xl italic font-playfair font-semibold bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E] bg-clip-text text-transparent leading-none"
        >
          Registration Form
        </h2>

        <p
          className="
          text-xl

          text-[#666666]

          mt-2
          "
        >
          {step}/{totalSteps}
        </p>

      </div>

    </div>

  );

};

export default YSFRegistrationHeader;
