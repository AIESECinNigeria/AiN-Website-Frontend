"use client";

import { useEffect, useState } from 'react';

import useIYDForm from './useIYDForm';
import IYDStepOne from './IYDStepOne';
import IYDStepTwo from './IYDStepTwo';
import IYDRegistrationHeader from './IYDRegistrationHeader';
import IYDRegistrationSuccessModal from './IYDRegistrationSucessModal';

const IYDRegistrationModal = ({ open, onClose }) => {
  const form = useIYDForm();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [open]);

  // Reset the scrolled state whenever a fresh step/scroll area mounts
  useEffect(() => {
    setIsScrolled(false);
  }, [form.step]);

  if (!open) return null;

  const handleScroll = (e) => {
    setIsScrolled(e.target.scrollTop > 4);
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-1 py-5 md:px-3">
      {!form.successOpen && (
        <div className="relative flex max-h-[90vh] w-full max-w-[540px] flex-col overflow-hidden rounded-2xl bg-[#314C31] shadow-2xl">
          {/* Buttons float over the content; gains a background once the content beneath has scrolled */}
          <div
            className={`pointer-events-none absolute top-0 left-0 right-0 z-30 flex h-14 items-center justify-between px-6 transition-colors duration-200 ${
              isScrolled ? 'bg-[#314C31]/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
            }`}
          >
            <div className="pointer-events-auto">
              {form.step === 2 && (
                <button
                  onClick={form.previous}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white hover:cursor-pointer"
                >
                  <span>‹</span>
                </button>
              )}
            </div>

            <button
              onClick={onClose}
              className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full border border-white text-xl text-white hover:cursor-pointer"
            >
              ×
            </button>
          </div>

          {/* Scroll area — header renders normally here, no negative margin */}
          <div
            onScroll={handleScroll}
            className="flex-1 overflow-y-auto px-6 pt-6 pb-6 scrollbar-hide"
          >
            <IYDRegistrationHeader step={form.step} />

            {form.step === 1 ? <IYDStepOne form={form} /> : <IYDStepTwo form={form} />}
          </div>
        </div>
      )}

      <IYDRegistrationSuccessModal
        open={form.successOpen}
        onClose={() => {
          form.setSuccessOpen(false);
          onClose();
        }}
      />
    </div>
  );
};

export default IYDRegistrationModal;