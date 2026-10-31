interface IYDRegistrationHeaderProps {
  step: number;
  totalSteps?: number;
}

const IYDRegistrationHeader = ({ step, totalSteps = 2 }: IYDRegistrationHeaderProps) => {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl md:text-5xl leading-[150%] tracking-[-2%] text-white">
        Registration <span className="italic font-medium text-[#B9FB02]">Form</span>
      </h2>
      <p className="mt-1 text-base md:text-lg lg:text-xl text-white">
        {step}/{totalSteps}
      </p>
    </div>
  );
};

export default IYDRegistrationHeader;
