"use client";

import { useRef, useState } from "react";
import { useMotionValueEvent, useReducedMotion, useScroll } from "framer-motion";

interface ScrollTypedTextProps {
  text: string;
  className?: string;
}

// Types the paragraph out as it scrolls through the viewport. The untyped part
// stays in the layout as transparent text, so line breaks never shift while it
// types and the paragraph keeps its final height from the start.
export default function ScrollTypedText({ text, className }: ScrollTypedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  // Progress starts when the top of the paragraph reaches 85% down the screen
  // and finishes when its bottom reaches the middle, so it is fully typed
  // while you are still reading it.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.2"],
  });

  // Runs inside Framer's scroll callback, including the first measurement on
  // mount, so a page that loads already scrolled past the start point still
  // picks up the right character count.
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const next = Math.round(Math.min(1, Math.max(0, progress)) * text.length);
    setCount((current) => (current === next ? current : next));
  });

  const shown = prefersReducedMotion ? text.length : count;
  const isTyping = shown > 0 && shown < text.length;

  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true">{text.slice(0, shown)}</span>
      {isTyping && (
        <span aria-hidden="true" className="relative">
          <span className="absolute top-[0.15em] left-0 h-[1em] w-[3px] animate-pulse bg-aiesec-blue" />
        </span>
      )}
      <span aria-hidden="true" className="text-transparent">
        {text.slice(shown)}
      </span>
    </p>
  );
}