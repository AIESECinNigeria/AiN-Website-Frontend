"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

type SubmitStatus = "idle" | "submitting" | "subscribed";

export default function NewsletterForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const resetTimer = useRef<number | null>(null);

  useEffect(
    () => () => {
      if (resetTimer.current !== null) window.clearTimeout(resetTimer.current);
    },
    [],
  );

  const submitMail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const email = String(formData.get("email") ?? "").trim();
    if (!email) return;

    setStatus("submitting");

    try {
      const response = await fetch("https://ain-backend.fly.dev/api/submit_email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await response.json();
      if (!response.ok || result?.detail !== "registration success") {
        setStatus("idle");
        return;
      }

      form.reset();
      setStatus("subscribed");
      resetTimer.current = window.setTimeout(() => {
        setStatus("idle");
        resetTimer.current = null;
      }, 3000);
    } catch {
      setStatus("idle");
    }
  };

  const buttonLabel =
    status === "submitting"
      ? "Submitting..."
      : status === "subscribed"
        ? "Subscribed"
        : "Subscribe";

  return (
    <form className="w-full lg:max-w-[clamp(520px,43.19vw,653px)]" onSubmit={submitMail}>
      <label
        htmlFor="newsletter-email"
        className="mb-2 block text-body text-white lg:mb-4 lg:text-[clamp(20px,1.59vw,24px)] lg:leading-[150%]"
      >
        Enter email address
      </label>
      <div className="flex items-center gap-2 lg:gap-[clamp(10px,0.79vw,12px)]">
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="e.g johnemmanuel@gmail.com"
          className="h-12.5 w-full min-w-0 flex-1 rounded-pill bg-aiesec-neutral-700 px-5 py-3.5 text-body text-white placeholder:text-aiesec-neutral-300 outline-none lg:h-[clamp(60px,5.03vw,76px)] lg:px-[clamp(20px,1.59vw,24px)] lg:py-5 lg:text-[clamp(20px,1.59vw,24px)] lg:leading-[150%]"
        />
        <button
          type="submit"
          disabled={status !== "idle"}
          aria-live="polite"
          className="flex h-11.75 w-27.25 shrink-0 self-center items-center justify-center rounded-pill bg-aiesec-neutral-300 px-5 py-3.5 text-body leading-[19px] tracking-normal text-aiesec-heading transition-colors disabled:cursor-not-allowed disabled:opacity-70 lg:h-[clamp(56px,4.5vw,68px)] lg:w-[clamp(136px,10.91vw,165px)] lg:px-[clamp(24px,2.12vw,32px)] lg:py-4 lg:text-[clamp(20px,1.59vw,24px)] lg:leading-9 lg:tracking-[-0.01em] lg:text-aiesec-neutral-900"
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
}
