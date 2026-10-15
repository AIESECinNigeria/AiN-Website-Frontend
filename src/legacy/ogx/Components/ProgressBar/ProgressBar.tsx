"use client";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const percent = (currentStep / totalSteps) * 100;
  return (
    <div style={{ marginBottom: 24 }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: "#1A1A1A", marginBottom: 8, fontFamily: "Lato, sans-serif" }}>
        Step {currentStep} of {totalSteps}
      </p>
      <div style={{ width: "100%", height: 6, background: "#E2E5EA", borderRadius: 999, overflow: "hidden" }}>
        <div style={{ height: "100%", width: `${percent}%`, background: "#037EF3", borderRadius: 999, transition: "width .3s ease" }} />
      </div>
    </div>
  );
}

export default ProgressBar;
