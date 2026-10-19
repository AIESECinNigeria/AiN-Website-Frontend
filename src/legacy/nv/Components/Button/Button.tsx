"use client";
import type { CSSProperties, MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type?: string;
  disabled?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean;
  noRadius?: boolean;
  subClass?: string;
  className?: string;
}

const BUTTON =
  "py-4 px-0 rounded-[4px] font-['Lato'] text-[16px] not-italic font-semibold leading-[24px] border-none cursor-pointer w-full max-[1023px]:text-[14px] max-[1023px]:leading-[23px] max-[1023px]:py-2 max-[1023px]:px-0";
const PRIMARY = 'bg-[#037ef3] text-white';
const SECONDARY = 'text-[#037ef3] bg-white';
const NV =
  "rounded-[32px] flex py-4 px-16 items-center justify-center gap-[13px] font-['Raleway'] text-[20px] font-normal leading-[32px] w-full cursor-pointer whitespace-nowrap transition-all duration-200 ease-in-out bg-[#00c16e] border-none text-white disabled:bg-[#b9b9b9] disabled:pointer-events-none disabled:cursor-not-allowed max-[1023px]:text-[14px] max-[1023px]:leading-[23px] max-[1023px]:py-2 max-[1023px]:px-0";

const Button = ({
  children,
  type,
  disabled,
  onClick,
  loading,
  noRadius,
  subClass,
  className: customClassName,
}: ButtonProps) => {
  const isNv = type === 'nv' || subClass === 'nv';
  const className = isNv
    ? `${NV} ${customClassName || ''}`.trim()
    : `${subClass ? '' : BUTTON} ${
        type === 'secondary' ? SECONDARY : type === 'tertiary' ? '' : PRIMARY
      } ${customClassName || ''}`.trim();
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={loading || disabled}
      style={noRadius ? { borderRadius: '0px' } : undefined}
    >
      {loading ? (
        <svg
          className="animate-spin"
          style={{ width: 20, height: 20 }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.25" strokeWidth="4" />
          <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
