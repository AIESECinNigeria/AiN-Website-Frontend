"use client";

import { useState } from "react";

const IYDSelect = ({
  label,
  value,
  options,
  onChange,
  placeholder,
  searchable = false,
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSelect = (optionValue) => {
    onChange({
      target: {
        value: optionValue,
      },
    });

    setOpen(false);
  };

  const getLabel = () => {
    const selected = options.find((item) => {
      const currentValue = typeof item === "object" ? item.value : item;

      return currentValue === value;
    });

    if (!selected) return placeholder;

    return typeof selected === "object" ? selected.label : selected;
  };

  const filteredOptions = options.filter((option) => {
    const optionLabel = typeof option === "object" ? option.label : option;

    return optionLabel.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="space-y-2 relative">
      {/* label */}
      <label
        className="
        text-base md:text-lg lg:text-xl
        text-white
        font-body
        leading-[150%]
        tracking-[-2%]
        "
      >
        {label}
      </label>

      {/* select button */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
        w-full
        p-3
        bg-white/10
        flex
        items-center
        justify-between
        text-left
        border
        border-transparent
        hover:border-[#B9FB02]/40
        focus:border-[#B9FB02]
        transition-all
        "
      >
        <span
          className={`
          text-base md:text-lg lg:text-xl
          ${value ? "text-white" : "text-white/50"}
          `}
        >
          {getLabel()}
        </span>

        {/* arrow */}
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          className={`
          transition-all
          ${open ? "rotate-180" : ""}
          `}
        >
          <path
            d="M7 10 L12 15 L17 10"
            stroke="#B9FB02"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* dropdown */}
      {open && (
        <div
          className="
          absolute
          top-full
          left-0
          right-0
          mt-2
          z-50
          bg-[#1E301F]
          rounded-xl
          overflow-hidden
          border
          border-[#B9FB02]/20
          shadow-xl
          max-h-[220px]
          overflow-y-auto scrollbar-hide
          "
        >
          {/* SEARCH */}
          {searchable && (
            <div
              className="
              p-3
              border-b
              border-[#B9FB02]/10
              "
            >
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search"
                className="
                w-full
                p-3
                rounded-lg
                bg-white/10
                outline-none
                text-base md:text-lg lg:text-xl
                text-white
                border
                border-[#B9FB02]/20
                focus:border-[#B9FB02]
                "
              />
            </div>
          )}

          {filteredOptions.map((option) => {
            const optionValue = typeof option === "object" ? option.value : option;
            const optionLabel = typeof option === "object" ? option.label : option;

            return (
              <button
                key={optionValue}
                type="button"
                onClick={() => handleSelect(optionValue)}
                className="
                w-full
                px-4
                py-3
                text-left
                text-base md:text-lg lg:text-xl
                text-white/70
                hover:bg-[#B9FB02]
                hover:text-[#314C31]
                transition-all
                "
              >
                {optionLabel}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default IYDSelect;