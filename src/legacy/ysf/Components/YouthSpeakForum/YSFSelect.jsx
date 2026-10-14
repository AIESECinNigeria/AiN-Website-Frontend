"use client";
import { useState } from "react";

const YSFSelect = ({
  label,
  value,
  options,
  onChange,
  placeholder,
  searchable = false
}) => {

  const [open, setOpen] =
    useState(false);
    const [
search,
setSearch
] = useState("");

  const handleSelect = (
    optionValue
  ) => {

    onChange({
      target: {
        value:
          optionValue,
      },
    });

    setOpen(false);

  };

  const getLabel = () => {

    const selected =
      options.find(
        (item) => {

          const currentValue =
            typeof item ===
            "object"
              ? item.value
              : item;

          return (
            currentValue ===
            value
          );

        }
      );

    if (!selected)
      return placeholder;

    return typeof selected ===
      "object"
      ? selected.label
      : selected;

  };

  const filteredOptions =
options.filter(
(option) => {

const optionLabel =
typeof option === "object"
? option.label
: option;

return optionLabel
.toLowerCase()
.includes(
search.toLowerCase()
);

}
);

  return (

    <div className="space-y-2 relative">

      {/* label */}

      <label
        className="
      text-lg md:text-xl

        text-[#666666]

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

        onClick={() =>
          setOpen(
            !open
          )
        }

        className="
        w-full

        p-4

        bg-[#F7F7F7]

        rounded-xl

        flex

        items-center

        justify-between

        text-left

        border

        border-transparent

        hover:border-[#6144B0]/40

        focus:border-[#6144B0]

        transition-all
        "
      >

        <span
          className={`
          text-xl

          ${
            value
              ? "text-black"
              : "text-[#999999]"
          }
          `}
        >

          {getLabel()}

        </span>

        {/* arrow */}

        <svg
          width="18"
          height="18"

          viewBox="
          0 0 24 24
          "

          className={`
          transition-all

          ${
            open
              ? "rotate-180"
              : ""
          }
          `}
        >

          <path
            d="
            M7 10
            L12 15
            L17 10
            "

            stroke="#6144B0"

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

          bg-white

          rounded-2xl

          overflow-hidden

          border

          border-[#6144B0]/20

          shadow-xl

          max-h-[220px]

          overflow-y-auto
          "
        >
{/* SEARCH */}

{searchable && (

<div className="
p-3
border-b
border-[#6144B0]/10
">

<input

value={search}

onChange={(e)=>
setSearch(
e.target.value
)
}

placeholder="
Search
"

className="
w-full

p-3

rounded-xl

bg-[#F7F7F7]

outline-none

text-lg md:text-xl

text-[#666666]

border

border-[#6144B0]/20

focus:border-[#0CB9C1]
"
/>

</div>

)}
          {filteredOptions.map(
            (
              option
            ) => {

              const optionValue =
                typeof option ===
                "object"
                  ? option.value
                  : option;

              const optionLabel =
                typeof option ===
                "object"
                  ? option.label
                  : option;

              return (

                <button
                  key={
                    optionValue
                  }

                  type="button"

                  onClick={() =>
                    handleSelect(
                      optionValue
                    )
                  }

                  className="
                  w-full

                  px-5

                  py-4

                  text-left

                  text-lg md:text-xl

                  text-[#666666]

                  hover:bg-gradient-to-r

                  hover:from-[#6144B0]

                  hover:via-[#0CB9C1]

                  hover:to-[#00C16E]

                  hover:text-white

                  transition-all
                  "
                >

                  {
                    optionLabel
                  }

                </button>

              );

            }
          )}

        </div>

      )}

    </div>

  );

};

export default YSFSelect;