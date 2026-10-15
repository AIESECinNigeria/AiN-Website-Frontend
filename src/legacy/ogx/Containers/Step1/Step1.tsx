"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import FormField from "../FormField/FormField";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { step1Fields, consentField, type FormData } from "../../data/formFields";
import { validateFields } from "../../Utilities/validateStep";

interface Step1Props {
  data: FormData;
  updateData: (name: string, value: any) => void;
  onNext: () => void;
  onFundingUnavailable: () => void;
  isSubmitting: boolean;
  submitError: string | null;
}

function Step1({ data, updateData, onNext, onFundingUnavailable, isSubmitting, submitError }: Step1Props) {
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validateFields([...step1Fields, consentField], data);
    if (fieldErrors.length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors([]);
    if (data[consentField.name] === "no") {
      onFundingUnavailable();
    } else {
      onNext();
    }
  };

  return (
    <>
      <h1 className="font-body text-[34px] font-bold tracking-[-0.01em] text-[var(--color-text)] m-0 mb-0.5 leading-[1.1]">
        OUTGOING GLOBAL EXCHANGES
      </h1>
      <p className="font-body text-[22px] font-bold text-[var(--color-text)] m-0 mb-3">
        Your global experience starts here.
      </p>
      <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-[1.6] m-0 mb-6 max-w-[640px] max-[640px]:text-sm max-[640px]:leading-[1.5] max-[640px]:mb-[18px]">
        Welcome to AIESEC in Nigeria's Global Exchanges Program. Tell us a little about yourself and we'll help you find the right international experience.
      </p>
      <ProgressBar currentStep={1} totalSteps={3} />

      <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] p-10 max-[640px]:py-4 max-[640px]:px-3">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-x-5 max-[560px]:grid-cols-1">
            {step1Fields.map((field) => (
              <FormField key={field.name} field={field} value={data[field.name]} onChange={updateData} />
            ))}
            <div className="col-span-full">
              <FormField field={consentField} value={data[consentField.name]} onChange={updateData} />
            </div>
          </div>

          {errors.length > 0 && (
            <ul className="mt-3 pl-[18px] text-[var(--color-error)] text-[13px]">
              {errors.map((err) => <li key={err} className="mb-1">{err}</li>)}
            </ul>
          )}

          {submitError && <p className="mt-3 text-[var(--color-error)] text-[13px]">{submitError}</p>}

          <button
            type="submit"
            className="font-body bg-[var(--color-primary)] text-white border-none py-[14px] px-[22px] rounded-xl text-[15px] font-semibold cursor-pointer hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none w-full flex items-center justify-center mt-2"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Continue →"}
          </button>
        </form>
      </div>
    </>
  );
}

export default Step1;
