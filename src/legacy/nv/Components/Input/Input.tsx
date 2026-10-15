"use client";
import { useState } from 'react';

interface InputProps {
  type?: string;
  label?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  onBlur?: () => void;
  value?: string | number;
  isRequired?: boolean;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: React.ReactNode;
  style?: React.CSSProperties;
  name?: string;
  condition?: boolean;
  readOnly?: boolean;
}

const Input = ({
  type,
  label,
  onChange,
  onBlur,
  value,
  isRequired,
  errorMessage,
  inValidCondition,
  placeholder,
  tip,
  style,
  name,
  condition,
  readOnly,
}: InputProps) => {
  // States
  const [invalid, setInvalid] = useState<boolean>(false);

  return (
    <div className="mb-6" style={style}>
      {label && (
        <>
          <label
            htmlFor=""
            className="text-black font-['Raleway',sans-serif] text-[20px] not-italic font-medium leading-[normal] mb-7 block min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[25px] min-[767px]:max-[1023px]:mb-[14px] max-[767px]:text-[14px] max-[767px]:leading-[25px] max-[767px]:mb-[14px]"
          >
            {label}
          </label>
          {'  '}
          {isRequired && <span>*</span>}
        </>
      )}

      {tip && (
        <span className="text-black font-['Raleway',sans-serif] text-[16px] italic font-extralight leading-[normal] mb-6 block">
          {tip}
        </span>
      )}
      <span className="relative block">
        <input
          type={type || 'text'}
          name={name}
          placeholder={placeholder}
          id={label}
          onChange={onChange}
          readOnly={readOnly}
          onBlur={(e) => {
            if (isRequired && e.target.value === '') {
              setInvalid(true);
            } else {
              setInvalid(false);
            }

            if (condition !== undefined && condition === false) {
              setInvalid(true);
            }
            if (onBlur) onBlur();
          }}
          value={value}
          className="block w-full py-[18px] px-8 text-[#caccd1] font-['Raleway',sans-serif] text-[20px] not-italic font-normal leading-[normal] my-[5px] animate-[appear_0.3s_ease-in-out] transition-all duration-300 ease-in-out border border-black rounded-[12px] focus:outline-none placeholder:text-[#caccd1] placeholder:font-['Raleway',sans-serif] placeholder:text-[20px] placeholder:italic placeholder:font-normal placeholder:leading-[normal] min-[767px]:max-[1023px]:p-3 min-[767px]:max-[1023px]:text-[14px] min-[767px]:max-[1023px]:leading-[23px] min-[767px]:max-[1023px]:rounded-[5px] min-[767px]:max-[1023px]:placeholder:text-[14px] min-[767px]:max-[1023px]:placeholder:leading-[23px] max-[767px]:p-3 max-[767px]:text-[14px] max-[767px]:leading-[23px] max-[767px]:rounded-[5px] max-[767px]:placeholder:text-[14px] max-[767px]:placeholder:leading-[23px]"
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className="text-[red] font-['Raleway',sans-serif] text-[13px] not-italic font-normal leading-[20px] animate-[appear_0.2s_ease-in-out] transition-all duration-300 ease-in-out min-[767px]:max-[1023px]:text-[10px] min-[767px]:max-[1023px]:leading-[18px] max-[767px]:text-[10px] max-[767px]:leading-[18px]">
          {errorMessage || '*invalid'}{' '}
        </span>
      )}
    </div>
  );
};

export default Input;
