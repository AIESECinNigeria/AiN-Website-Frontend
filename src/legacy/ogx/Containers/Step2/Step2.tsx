"use client";
import { useState } from "react";
import type { FormEvent } from "react";
import FormField from "../FormField/FormField";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import {
  undergradFields,
  graduateOpportunityTypeField,
  graduateWorkFieldField,
  getGraduateNationField,
  graduateTravelTimeField,
  type FieldDef,
  type FormData,
} from "../../data/formFields";
import { validateFields } from "../../Utilities/validateStep";

interface Step2Props {
  data: FormData;
  updateData: (name: string, value: any) => void;
  onNext: () => void;
  onBack: () => void;
}

function Step2({ data, updateData, onNext, onBack }: Step2Props) {
  const isUndergrad = data.educationLevel === "undergraduate";
  const [errors, setErrors] = useState<string[]>([]);

  const graduateFields: FieldDef[] = [
    graduateOpportunityTypeField,
    graduateWorkFieldField,
    ...(Array.isArray(data.opportunityType) ? data.opportunityType : [])
      .map(getGraduateNationField)
      .filter((f): f is FieldDef => Boolean(f)),
    graduateTravelTimeField,
  ];
  const activeFields = isUndergrad ? undergradFields : graduateFields;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fieldErrors = validateFields(activeFields, data);
    if (fieldErrors.length > 0) {
      setErrors(fieldErrors);
      return;
    }
    setErrors([]);
    onNext();
  };

  const renderField = (field: FieldDef) => (
    <div key={field.name} className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] pt-4 px-4 pb-2 max-[640px]:pt-3 max-[640px]:px-2.5 max-[640px]:pb-1.5">
      <FormField
        field={field}
        value={data[field.name]}
        otherValue={data[`${field.name}Other`]}
        onChange={updateData}
      />
    </div>
  );

  return (
    <>
      {isUndergrad ? (
        <>
          <h1 className="font-body text-[34px] font-bold tracking-[-0.01em] text-[var(--color-text)] m-0 mb-2 leading-[1.1] max-[640px]:text-[26px]">
            GLOBAL VOLUNTEER
          </h1>
          <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-[1.6] m-0 mb-6 max-w-[640px] max-[640px]:text-sm max-[640px]:leading-[1.5] max-[640px]:mb-[18px]">
            AIESEC's Global Volunteer program connects undergraduate students with sustainable development
            projects worldwide, turning classroom knowledge into real-world impact. Join thousands of young
            changemakers across 125+ countries and territories, build leadership skills, and discover your
            purpose through meaningful international service.
          </p>
        </>
      ) : (
        <>
          <h1 className="font-body text-[34px] font-bold tracking-[-0.01em] text-[var(--color-text)] m-0 mb-2 leading-[1.1] max-[640px]:text-[26px]" style={{ fontWeight: 700 }}>
            GLOBAL OPPORTUNITIES
          </h1>
          <p className="font-body text-[15px] text-[var(--color-text-muted)] leading-[1.6] m-0 mb-6 max-w-[640px] max-[640px]:text-sm max-[640px]:leading-[1.5] max-[640px]:mb-[18px]">
            AIESEC's Global Opportunity programs for graduates offer three pathways to global impact: volunteer
            on development projects, intern with international organizations, or teach and mentor students
            abroad, all while building leadership skills and meaningful networks across 125+ countries and
            territories.
          </p>
        </>
      )}
      <ProgressBar currentStep={2} totalSteps={3} />

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">{activeFields.map(renderField)}</div>

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
            Continue →
          </button>
        </div>
      </form>
    </>
  );
}

export default Step2;
