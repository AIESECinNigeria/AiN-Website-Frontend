"use client";

interface IYDRegistrationSuccessModalProps {
  open: boolean;
  onClose: () => void;
}

const IYDRegistrationSuccessModal = ({ open, onClose }: IYDRegistrationSuccessModalProps) => {
  if (!open) return null;

  return (
    <div className="font-sec fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 px-5 py-8">
      <div className="w-full max-w-[350px] md:max-w-[450px] lg:max-w-[600px] bg-[#314C31] shadow-2xl">
        <div className="flex flex-col items-center gap-10 md:gap-6 px-8 py-12 md:px-12 text-center">
          <h2 className="text-2xl md:text-5xl font-medium text-white leading-[36px] md:leading-[50px] lg:leading-[64px] tracking-[-2%]">
            Registration <br/> <span className="italic text-[#B9FB02]">successful!</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white leading-[150%] tracking-[-2%] font-normal">
            A confirmation email for your registration will be sent to you shortly.
          </p>

          <button
            onClick={onClose}
            className="w-3/5 md:w-[45%] bg-white/10 py-3 text-lg md:text-2xl lg:text-3xl font-medium text-white transition hover:bg-[#B9FB02] hover:text-[#314C31]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default IYDRegistrationSuccessModal;
