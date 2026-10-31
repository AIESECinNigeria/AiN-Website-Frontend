"use client";

interface FundingUnavailableProps {
  onDone: () => void;
}

function FundingUnavailable({ onDone }: FundingUnavailableProps) {
  return (
    <div className="min-h-[90vh] flex items-center justify-center">
      <div className="bg-white border border-[#d9dfe5] rounded-[22px] shadow-[0_5px_0_#d9dfe5] pt-[70px] px-9 pb-[58px] max-w-[700px] w-full text-center font-body max-[640px]:pt-[66px] max-[640px]:px-7 max-[640px]:pb-[58px]">
        <div className="relative w-28 h-[76px] mx-auto mb-[25px]" aria-hidden="true">
          <span className="absolute top-3 w-[39px] h-[42px] left-0 bg-[#087ee8] [clip-path:polygon(0_0,100%_48%,64%_100%,0_75%)]" />
          <span className="absolute top-3 w-[39px] h-[42px] right-0 bg-[#26333a] [clip-path:polygon(0_48%,100%_0,100%_75%,36%_100%)]" />
          <span className="absolute left-[34px] top-[29px] w-[47px] h-[27px] border border-[#9da7ad] rounded-[45%_42%_48%_42%] rotate-[8deg] bg-white" />
        </div>
        <h2 className="text-2xl md:text-5xl font-bold m-0 mb-7">Thank You!</h2>
        <p className="text-[13px] leading-[2.35] text-[#111827] mx-auto max-w-[520px] max-[640px]:leading-[1.9]">
          Thank you for your interest in Global Exchanges with AIESEC in Nigeria!
        </p>
        <p className="text-[13px] leading-[2.35] text-[#111827] mx-auto max-w-[520px] max-[640px]:leading-[1.9]">
          Unfortunately, you are unable to proceed with the application at this time as funding for the programme is required.
        </p>
        <button
          type="button"
          className="mt-6 w-[185px] h-[52px] border border-[#087ee8] rounded-xl bg-white text-[#087ee8] text-[15px] font-semibold cursor-pointer hover:bg-[#f1f8ff]"
          onClick={onDone}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

export default FundingUnavailable;
