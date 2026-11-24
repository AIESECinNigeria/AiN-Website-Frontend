"use client";

import { useMemo, useRef, useState } from "react";
import {
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

interface ScrollTypedTextProps {
  text: string;
  className?: string;
}

/* TUNING
 * Typing starts when the top of the paragraph reaches START of the way down the
 * screen (0 = top edge, 1 = bottom edge) and is finished when its bottom edge
 * reaches END. The gap between them is the scroll distance the typing is spread
 * over: a lower END means more scrolling, so slower typing. */
const START = 0.95;
const END = 1;

/* How hard the scroll position is smoothed. Lower stiffness feels softer and
 * lets the typing run on for a moment after you stop scrolling. */
const SPRING = { stiffness: 70, damping: 24, mass: 0.5 };

/* Shape of the speed curve. 1 is a steady pace. Below 1 the first words come
 * out faster than the rest. */
const EASE = 0.95;

/* How long each character "takes" relative to a normal letter. Pauses after
 * punctuation are what make the rhythm feel typed instead of mechanical.
 * Smaller pauses leave more of the scroll distance for the letters themselves. */
function weightFor(char: string): number {
  if (char === "." || char === "!" || char === "?") return 6;
  if (char === "," || char === ";" || char === ":") return 3.5;
  if (char === " ") return 1.6;
  return 1;
}

// Types the paragraph out as it scrolls through the viewport. The untyped part
// stays in the layout as transparent text, so line breaks never shift while it
// types and the paragraph keeps its final height from the start.
export default function ScrollTypedText({ text, className }: ScrollTypedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  // cumulative[i] is the total "typing time" needed to reach character i.
  const cumulative = useMemo(() => {
    const totals: number[] = [];
    let running = 0;
    for (const char of text) {
      running += weightFor(char);
      totals.push(running);
    }
    return totals;
  }, [text]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${START}`, `end ${END}`],
  });

  const smoothProgress = useSpring(scrollYProgress, SPRING);

  // Runs inside Framer's callback, including the first measurement on mount,
  // so a page that loads already scrolled past the start still lands on the
  // right character count.
  useMotionValueEvent(smoothProgress, "change", (progress) => {
    const clamped = Math.min(1, Math.max(0, progress));
    const eased = Math.pow(clamped, EASE);
    const total = cumulative[cumulative.length - 1] ?? 0;
    const target = eased * total;

    // Binary search for how many characters fit in the time budget.
    let low = 0;
    let high = cumulative.length;
    while (low < high) {
      const mid = (low + high) >> 1;
      if (cumulative[mid] <= target) low = mid + 1;
      else high = mid;
    }

    // Snap to the full text once the scroll is effectively done.
    const next = scrollYProgress.get() >= 1 || clamped > 0.995 ? text.length : low;
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
