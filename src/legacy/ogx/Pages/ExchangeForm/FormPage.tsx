"use client";
import { useState, useEffect } from "react";
import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import Step1 from "../../Containers/Step1/Step1";
import Step2 from "../../Containers/Step2/Step2";
import Step3 from "../../Containers/Step3/Step3";
import Confirmation from "../../Containers/Confirmation/Confirmation";
import Success from "../../Containers/Success/Success";
import FundingUnavailable from "../../Containers/FundingUnavailable/FundingUnavailable";
import { submitExchangeForm } from "../../services/exchangeFormApi";
import type { FormData } from "../../data/formFields";

const STORAGE_KEY = "ogxFormState";
const TOTAL_STEPS = 3;

// Design tokens the form's styles reference (the original CSS used these custom
// properties but never defined them; values are reconstructed from the design —
// see ProgressBar's hard-coded colours). Scoped to the form, so nothing global
// is touched.
const FORM_TOKENS = {
  "--color-primary": "#037EF3",
  "--color-primary-hover": "#0268CC",
  "--color-primary-light": "#E8F3FE",
  "--color-bg": "#FFFFFF",
  "--color-bg-page": "#F7F9FC",
  "--color-text": "#1A1A1A",
  "--color-text-muted": "#6B7280",
  "--color-border": "#E2E5EA",
  "--color-error": "#E53E3E",
  "--color-success": "#22C55E",
  "--radius-sm": "8px",
  "--radius-md": "16px",
  "--shadow-card": "0 4px 24px rgba(15, 23, 42, 0.06)",
} as CSSProperties;

function FormPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        setFormData(parsed.formData || {});
        setStep(parsed.step || 1);
      }
    } catch {
      // ignore malformed saved state
    }
  }, []);

  useEffect(() => {
    const { cv, ...serializable } = formData;
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, formData: serializable }));
  }, [step, formData]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [step]);

  const updateData = (name: string, value: any) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const goToStep = (targetStep: number) => setStep(targetStep);
  const nextStep = () => setStep((s) => Math.min(s + 1, TOTAL_STEPS + 1));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  const handleFundingUnavailable = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitExchangeForm(formData);
      localStorage.removeItem(STORAGE_KEY);
      setStep(TOTAL_STEPS + 3);
    } catch (err) {
      setSubmitError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await submitExchangeForm(formData);
      localStorage.removeItem(STORAGE_KEY);
      setStep(TOTAL_STEPS + 2);
    } catch (err) {
      setSubmitError((err as Error).message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDone = () => {
    setFormData({});
    setStep(1);
    localStorage.removeItem(STORAGE_KEY);
    router.push("/ogx");
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step1
            data={formData}
            updateData={updateData}
            onNext={nextStep}
            onFundingUnavailable={handleFundingUnavailable}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        );
      case 2:
        return <Step2 data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 3:
        return <Step3 data={formData} updateData={updateData} onNext={nextStep} onBack={prevStep} />;
      case 4:
        return (
          <Confirmation
            data={formData}
            onEdit={goToStep}
            onSubmit={handleSubmit}
            onBack={prevStep}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        );
      case 5:
        return <Success onDone={handleDone} />;
      case 6:
        return <FundingUnavailable onDone={handleDone} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen bg-[var(--color-bg-page)] px-5 py-8 font-body max-[640px]:px-2.5 max-[640px]:pt-4 max-[640px]:pb-[28px]"
      style={FORM_TOKENS}
    >
      <div className="max-w-[700px] mx-auto max-[640px]:w-full">
        {renderStep()}
      </div>
    </div>
  );
}

export default FormPage;
