const buttonBase =
  "py-4 px-0 rounded-[4px] font-['Lato'] text-[16px] not-italic font-semibold leading-6 border-none cursor-pointer w-full min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] min-[767px]:max-[1023px]:py-2 min-[767px]:max-[1023px]:px-0 max-[767px]:text-[14px] max-[767px]:leading-[23px] max-[767px]:py-2 max-[767px]:px-0";
const primaryCls = "bg-aiesec-blue text-white";
const secondaryCls = "text-aiesec-blue bg-white";
const nvCls =
  "rounded-[32px] flex py-4 px-16 items-center justify-center gap-[13px] font-['Raleway'] text-[20px] font-normal leading-8 w-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out bg-aiesec-green border-none text-white disabled:bg-[#b9b9b9] disabled:pointer-events-none disabled:cursor-not-allowed min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] min-[767px]:max-[1023px]:py-2 min-[767px]:max-[1023px]:px-0 max-[767px]:text-[14px] max-[767px]:leading-[23px] max-[767px]:py-2 max-[767px]:px-0";

interface ButtonProps {
  children?: React.ReactNode;
  type?: string;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
  noRadius?: boolean;
  subClass?: string;
}

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  noRadius,
  subClass,
}: ButtonProps) => {
  return (
    <button
      className={`${!subClass ? buttonBase : ""} ${
        type === "secondary"
          ? secondaryCls
          : type === "tertiary"
          ? ""
          : type === "nv"
          ? nvCls
          : primaryCls
      } ${subClass === "nv" ? nvCls : ""}`}
      onClick={onClick}
      disabled={loading || disabled}
      style={noRadius ? { borderRadius: "0px" } : undefined}
    >
      {loading ? <svg className="animate-spin" style={{width:20,height:20}} viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" /><path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" /></svg> : children}
    </button>
  );
};

export default Button;
