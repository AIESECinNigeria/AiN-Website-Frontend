import type { ReactNode, CSSProperties } from 'react';

interface HalfHighlightProps {
  children: ReactNode;
  color?: string;
  className?: string;
}

const HalfHighlight = ({ children, color, className = '' }: HalfHighlightProps) => {
  return (
    <span
      className={`relative inline-block px-[0.08em] pt-0 pb-[0.04em] align-baseline isolate ${className}`.trim()}
      style={{ '--highlight-color': color } as CSSProperties}
    >
      <span
        className="absolute left-[0.02em] right-[0.02em] bottom-[0.28em] h-[0.58em] bg-[var(--highlight-color,#f15a29)] -z-10 pointer-events-none max-[767px]:bottom-[-0.02em]"
        aria-hidden="true"
      />
      <span className="relative z-[1] block leading-[0.92]">{children}</span>
    </span>
  );
};

export default HalfHighlight;
