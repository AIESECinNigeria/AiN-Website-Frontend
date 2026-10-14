"use client";
import { useEffect } from "react";

import useYSFForm from "../YouthSpeakForum/useYSFForm";

import YSFStepOne from "../YouthSpeakForum/YSFStepOne";
import YSFStepTwo from "../YouthSpeakForum/YSFStepTwo";
import YSFRegistrationHeader from "../YouthSpeakForum/YSFRegistrationHeader";
import YSFRegistrationSuccessModal from "../YouthSpeakForum/YSFRegistrationSuccessModal";

const YSFRegistrationModal = ({
  open,
  onClose,
}) => {

  const form =
    useYSFForm();

  useEffect(() => {

    if (open) {
      document.body.style.overflow =
        "hidden";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };

  }, [open]);

  if (!open) return null;

  return (

    <div
      className="
      fixed
      inset-0

      z-[9999]

      bg-black/50

      flex
      justify-center
      items-center

      py-5
      px-1
      md:px-3
      "
    >

{!form.successOpen && (
      <div
        className="
        bg-white

        rounded-[16px]

        w-full
        max-w-[540px]

        max-h-[90vh]

        overflow-hidden

        shadow-2xl

        flex
        flex-col
        "
      >

        {/* ALWAYS VISIBLE */}

        <div
          className="
          sticky
          top-0

          z-30

          bg-white

          px-8
          pt-6
          pb-3

          flex
          items-center
          justify-between

          shrink-0
          "
        >

          <div>

            {form.step === 2 && (

              <div
                onClick={
                  form.previous
                }

                className="
                flex
                items-center

                gap-1

                cursor-pointer

                text-[#555555]

                text-xl
                md:text-base
                "
              >

                <button>
                  {"<"}
                </button>

                <button
                  className="
                  hidden
                  md:block
                  "
                >
                  Back
                </button>

              </div>

            )}

          </div>

          <button
            onClick={
              onClose
            }

            className="
            text-black

            text-2xl
            "
          >
            ×
          </button>

        </div>

        {/* SCROLL AREA */}

        <div
          className="
          flex-1

          overflow-y-auto

          px-8
          pb-6

          scrollbar-hide
          "
        >

          <YSFRegistrationHeader
            step={
              form.step
            }
            showBack={false}
            onClose={() => {}}
          />

      {!form.successOpen && (

<>

{form.step === 1 ? (

<YSFStepOne
form={form}
/>

) : (

<YSFStepTwo
form={form}
/>

)}

</>

)}

        </div>

      </div>
)}

<YSFRegistrationSuccessModal
open={form.successOpen}

onClose={() => {

form.setSuccessOpen(false);

onClose();

}}
/>
    </div>
  );

};

export default
YSFRegistrationModal;