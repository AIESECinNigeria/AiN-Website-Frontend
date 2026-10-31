"use client";

interface SuccessProps {
  onDone: () => void;
}

function Success({ onDone }: SuccessProps) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-[var(--radius-md)] shadow-[var(--shadow-card)] py-12 px-10 max-w-[480px] w-full text-center font-body">
        <div className="w-[104px] h-[104px] rounded-full bg-[var(--color-success)] text-white flex items-center justify-center mx-auto mb-6">
          <svg
            width="52"
            height="52"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h2 className="text-2xl md:text-5xl font-extrabold tracking-[0.04em] m-0 mb-2.5">SUCCESSFUL</h2>
        <p className="text-sm text-[var(--color-text-muted)] max-w-[380px] mx-auto mb-7 leading-[1.5]">
          Your application has been submitted. We'll review it and contact you via e-mail with the next steps.
        </p>
        <button
          type="button"
          className="font-body bg-[var(--color-primary)] text-white border-none py-[14px] px-[22px] rounded-xl text-[15px] font-semibold cursor-pointer hover:bg-[var(--color-primary-hover)] disabled:opacity-60 disabled:cursor-not-allowed disabled:pointer-events-none w-full flex items-center justify-center mt-2"
          onClick={onDone}
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default Success;
