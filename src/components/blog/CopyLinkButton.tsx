"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyLinkButton({ className }: { className: string }) {
  const [copied, setCopied] = useState(false);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
    };
  }, []);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (resetTimer.current) clearTimeout(resetTimer.current);
      resetTimer.current = setTimeout(() => setCopied(false), 2500);
    } catch (error) {
      console.error("Could not copy blog link", error);
    }
  };

  return (
    <button
      type="button"
      onClick={copyLink}
      disabled={copied}
      aria-live="polite"
      className={`${className} disabled:pointer-events-none disabled:cursor-default disabled:opacity-60`}
    >
      {copied ? "Copied" : "Copy Link"}
      <CopyIcon className="size-5 lg:size-6" />
    </button>
  );
}

function CopyIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="9" y="9" width="11" height="11" rx="2" stroke="currentColor" strokeWidth={1.8} />
      <path d="M5 15V6a2 2 0 0 1 2-2h9" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" />
    </svg>
  );
}
