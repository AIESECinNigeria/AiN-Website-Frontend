"use client";

import type { ChangeEventHandler } from "react";

interface IYDInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const IYDInput = ({ label, placeholder, value, onChange }: IYDInputProps) => {
  return (
    <div className="space-y-2">
      <label
        className="
       text-base md:text-lg lg:text-xl
        text-white
        font-body
        leading-[150%] tracking-[-2%]
        "
      >
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
        w-full py-3
        px-4 text-white
        bg-white/10
        border-none
  outline-none rounded-none
  appearance-none
        text-base md:text-lg lg:text-xl
        placeholder:text-white/50
        "
      />
    </div>
  );
};

export default IYDInput;
