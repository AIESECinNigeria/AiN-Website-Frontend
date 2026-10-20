"use client";
import { useState } from 'react';
import type { CSSProperties, ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  label?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  value?: string;
  isRequired?: boolean;
  errorMessage?: string;
  inValidCondition?: boolean;
  placeholder?: string;
  tip?: string;
  style?: CSSProperties;
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
  const [invalid, setInvalid] = useState(false);

  return (
    <div className="mb-6" style={style}>
      {label && (
        <>
          <label
            htmlFor=""
            className="text-black font-['Raleway',sans-serif] text-[20px] max-[1023px]:text-[14px] not-italic font-medium leading-[normal] max-[1023px]:leading-[25px] mb-7 max-[1023px]:mb-[14px] block"
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
          className={`block w-full py-[18px] px-8 max-[1023px]:p-3 text-[#caccd1] font-['Raleway',sans-serif] text-[20px] max-[1023px]:text-[14px] not-italic font-normal leading-[normal] max-[1023px]:leading-[23px] my-[5px] max-[1023px]:rounded-[5px] animate-[appear_0.3s_ease-in-out] transition-all duration-300 ease-in-out border border-solid focus:outline-none placeholder:text-[#caccd1] placeholder:italic placeholder:text-[20px] max-[1023px]:placeholder:text-[14px] ${
            invalid ? 'border-[red]' : 'border-black'
          }`}
        />
      </span>
      {(invalid || inValidCondition) && (
        <span className="text-[red] font-['Raleway',sans-serif] text-[13px] max-[1023px]:text-[10px] not-italic font-normal leading-[20px] max-[1023px]:leading-[18px] animate-[appear_0.2s_ease-in-out] transition-all duration-300 ease-in-out">
          {errorMessage || '*invalid'}{' '}
        </span>
      )}
    </div>
  );
};

export default Input;
