"use client";
import YSFInput from "./YSFInput";
import YSFSelect from "./YSFSelect";
import type { UseYSFFormReturn } from "./useYSFForm";

interface YSFStepTwoProps {
  form: UseYSFFormReturn;
}

const YSFStepTwo = ({ form }: YSFStepTwoProps) => {
  const {
    formData,
    updateField,
    submit,
    loading,
    validateStepTwo,
  } = form;

  return (
    <div className="space-y-4">

      <YSFSelect
        label="Age Range"
        value={
          formData.ageRange
        }
        placeholder = {"Select an age range"}
        onChange={(e) =>
          updateField(
            "ageRange",
            e.target.value
          )
        }
        options={[
            "<18",
          "18-24",
          "25-28",
          "28+",
        ]}
      />

      <YSFSelect
        label="
        Did you know about SDGs before YSF?
        "
        value={
          formData.sdgKnowledge
        }
        placeholder={"Select an option"}
        onChange={(e) =>
          updateField(
            "sdgKnowledge",
            e.target.value
          )
        }
        options={[
          "Yes",
          "No",
        ]}
      />

      <YSFSelect
        label="
        Attendance
        "
        value={
          formData.attendance
        }
        placeholder= {"Select how you will be attending"}
        onChange={(e) =>
          updateField(
            "attendance",
            e.target.value
          )
        }
        options={[
          "Physical",
          "Virtual",
        ]}
      />

      <YSFSelect
        label="
        How did you hear about YSF?
        "
        value={
          formData.discoverySource
        }
        placeholder={"Select a medium"}
        onChange={(e) =>
          updateField(
            "discoverySource",
            e.target.value
          )
        }
        options={[
            "Email",
            "Event",
            "Facebook",
            "Friend",
          "Instagram",
          "Other social media channels",
          "AIESEC",
        ]}
      />

      <YSFInput
        label="
        What are your expectations?
        "
        placeholder="
        Enter your expectations about YSF
        "
        value={
          formData.expectations
        }
        onChange={(e) =>
          updateField(
            "expectations",
            e.target.value
          )
        }
      />

      <button
        disabled={
          !validateStepTwo() ||
          loading
        }
        onClick={submit}
        className="
        w-full
        py-4
        rounded-full
        text-white
        mt-8
        disabled:opacity-40
        bg-gradient-to-r
        from-[#7552CC]
        via-[#037EF3]
        to-[#00C16E]
        "
      >
        {loading
          ? "Submitting..."
          : "Submit"}
      </button>

    </div>
  );
};

export default YSFStepTwo;
