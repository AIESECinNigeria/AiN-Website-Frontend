"use client";
const YSFInput = ({
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (

    <div className="space-y-2">

      <label
        className="
       text-lg md:text-xl
        text-[#666666]
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
        w-full py-4
        px-4 text-black
        bg-[#F7F7F7]
        rounded-lg
        outline-none
        text-xl
        placeholder:text-[#666666]
        "
      />

    </div>

  );
};

export default YSFInput;