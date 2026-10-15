"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import FormField from "../FormField/FormField";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { validateFields } from "../../Utilities/validateStep";
import { step3Fields, type FormData } from "../../data/formFields";

const PROGRAM_HEADING: Record<string, string> = {
  volunteer: "GLOBAL VOLUNTEER",
  intern: "GLOBAL TALENT",
  teach: "GLOBAL TEACHER",
};

interface Step3Props {
  data: FormData;
  updateData: (name: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

function Step3({ data, updateData, onNext, onBack }: Step3Props) {
  const [errors, setErrors] = useState<string[]>([]);

  const heading =
    data.educationLevel === "undergraduate"
      ? "GLOBAL VOLUNTEER"
      : PROGRAM_HEADING[data.opportunityType] || "GLOBAL EXCHANGES";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    try {
      const fieldErrors = validateFields(step3Fields, data);
      if (fieldErrors.length > 0) {
        setErrors(fieldErrors);
        return;
      }
      setErrors([]);
      onNext();
    } catch (err) {
      console.error(err);
      setErrors(["Something went wrong — please check the console and try again."]);
    }
  };

  return (
    <>
      <h1 className="font-body text-[34px] font-bold tracking-[-0.01em] text-[var(--color-text)] m-0 mb-2 leading-[1.1] max-[640px]:text-[26px]">
        {heading}
      </h1>
      <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-[1.6] m-0 mb-6 max-w-[640px] max-[640px]:text-sm max-[640px]:leading-[1.5] max-[640px]:mb-[18px]">
        Almost there. Help us understand your background and what drives you.
      </p>
      <ProgressBar currentStep={3} totalSteps={3} />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          {step3Fields.map((field) => (
            <div key={field.name} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] pt-4 px-4 pb-2 max-[640px]:pt-3 max-[640px]:px-2.5 max-[640px]:pb-1.5">
              <FormField field={field} value={data[field.name]} onChange={updateData} />
            </div>
          ))}
        </div>

        {errors.length > 0 && (
          <ul className="mt-3 pl-[18px] text-[var(--color-error)] text-[13px]">
            {errors.map((err) => <li key={err} className="mb-1">{err}</li>)}
          </ul>
        )}

        <div className="flex justify-between items-center mt-7 gap-3">
          <button type="button" className="font-body bg-transparent text-[var(--color-text-muted)] border border-[var(--color-border)] py-[14px] px-5 rounded-xl text-[15px] font-semibold cursor-pointer hover:border-[var(--color-text-muted)] hover:text-[var(--color-text)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none" onClick={onBack}>
            ← Back
          </button>
          <button type="submit" className="font-body bg-[var(--color-primary)] text-white border-none py-[14px] px-[22px] rounded-xl text-[15px] font-semibold cursor-pointer hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none">
            Review Application →
          </button>
        </div>
      </form>
    </>
  );
}

export default Step3;
