import CloudImage from "@/components/CloudImage";

const starPatternUrl = `data:image/svg+xml,${encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24'><path d='M12 3 C13 9 15 11 21 12 C15 13 13 15 12 21 C11 15 9 13 3 12 C9 11 11 9 12 3 Z' fill='rgba(15,30,18,0.25)'/></svg>"
)}`;

interface IYDCtaProps {
  onRegisterClick: () => void;
}

const IYDCta = ({ onRegisterClick }: IYDCtaProps) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#B9FB02] min-h-[70vh] md:max-h-screen">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("${starPatternUrl}")`,
          backgroundSize: '24px 24px',
        }}
      />

      <CloudImage
        id="IYDAboutImg"
        alt=""
        className="absolute -left-8 -top-8 w-72 rotate-90 sm:-left-16 sm:-top-16 md:w-96 lg:w-[550px]"
      />
      <CloudImage
        id="IYDAboutImg"
        alt=""
        className="absolute -right-8 -bottom-8 w-72 -rotate-90 sm:-right-16 sm:-bottom-16 md:w-96 lg:w-[550px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-between px-6 py-32 md:py-48 text-center lg:justify-center lg:py-12">
        <div className="mt-14 md:mt-5">
          <h2 className="text-2xl md:text-5xl leading-[100%] lg:leading-[120%] tracking-[-7%]">
            Empowering Youth, <br />{' '}
            <span className="italic font-bold">Building Tomorrow.</span>
          </h2>
          <p className="mt-6 text-xl md:text-2xl lg:text-3xl font-medium text-[#314C31]">
            Registration closes 27th August.
          </p>
        </div>

        <button
          type="button"
          // onClick={onRegisterClick}
          className="mb-[50px] bg-[#314C31] text-white px-8 py-4 text-base md:text-xl transition hover:cursor-pointer hover:scale-105 md:mt-16 md:mb-0"
        >
          Registration Has Ended
        </button>
      </div>
    </section>
  );
};

export default IYDCta;
