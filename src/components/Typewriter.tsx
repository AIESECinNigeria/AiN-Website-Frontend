"use client";

import { useEffect, useState } from "react";

interface UseTypewriterOptions {
  typingSpeedMs?: number;
  deletingSpeedMs?: number;
  pauseMs?: number;
}

function useTypewriter(
  words: string[],
  { typingSpeedMs = 65, deletingSpeedMs = 35, pauseMs = 1600 }: UseTypewriterOptions = {}
) {
  // Always start empty — the type-out animation is the point now, not
  // something to avoid for a single word.
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    if (words.length === 0) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      // Respect reduced-motion regardless: show the full word immediately.
      const timeoutId = setTimeout(() => setDisplayText(words[0]), 0);
      return () => clearTimeout(timeoutId);
    }

    let cancelled = false;
    let wordIndex = 0;
    let isDeleting = false;
    let current = "";
    let timeoutId: ReturnType<typeof setTimeout>;
    const canCycle = words.length > 1;

    function tick() {
      if (cancelled) return;

      const targetWord = words[wordIndex % words.length];

      if (!isDeleting && current === targetWord) {
        if (!canCycle) return; // single word: stop, cursor keeps blinking
        timeoutId = setTimeout(() => {
          isDeleting = true;
          tick();
        }, pauseMs);
        return;
      }

      if (isDeleting && current === "") {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        timeoutId = setTimeout(tick, typingSpeedMs);
        return;
      }

      current = isDeleting
        ? targetWord.slice(0, current.length - 1)
        : targetWord.slice(0, current.length + 1);
      setDisplayText(current);

      timeoutId = setTimeout(tick, isDeleting ? deletingSpeedMs : typingSpeedMs);
    }

    timeoutId = setTimeout(tick, typingSpeedMs);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [words, typingSpeedMs, deletingSpeedMs, pauseMs]);

  return displayText;
}

export function TypewriterText({
  words,
  className = "",
  highlight = false,
}: {
  words: string[];
  className?: string;
  highlight?: boolean;
}) {
  const displayText = useTypewriter(words);

  const content = (
    <>
      {displayText}
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block w-[2px] animate-pulse bg-current align-middle"
        style={{ height: "0.85em" }}
      />
    </>
  );

  if (highlight) {
    return (
      <span className="inline-block rounded-md bg-aiesec-blue/10 px-2 py-0.5">
        <span className={className}>{content}</span>
      </span>
    );
  }

  return <span className={className}>{content}</span>;
}