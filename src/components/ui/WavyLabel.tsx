import { useId } from "react";

const SOFT = {
  width: 44,
  height: 18,
  path: "M0 18 C7.33 18 14.67 3 22 3 C29.33 3 36.67 18 44 18 Z",
  svgClass: "-mb-[11px] block lg:-mb-[12px]",
};

const DEEP = {
  width: 40,
  height: 26,
  path: "M0 26 C4 26 7 3 20 3 C33 3 36 26 40 26 Z",
  svgClass: "-mb-px block",
};

const FILLS = {
  red: "#f94141",
  blue: "#037ef3",
  orange: "#F15A29",
} as const;

export default function WavyLabel({
  name,
  role,
  variant,
  quote,
  className = "",
}: {
  name: string;
  role: string;
  variant: keyof typeof FILLS;
  quote?: string;
  className?: string;
}) {
  const fill = FILLS[variant];
  // Both responsive card layouts render in the DOM, so each SVG needs its own
  // pattern ID. Shared IDs can make desktop waves resolve to the hidden mobile
  // SVG's pattern and render as a flat edge.
  const patternId = `wavy-${variant}-${useId().replace(/:/g, "")}`;

  const wave = quote ? DEEP : SOFT;

  const bodyClass = quote
    ? "flex flex-col items-start gap-3 rounded-b-2xl px-5 pb-5 pt-4 text-left text-white lg:gap-4 lg:px-6 lg:pb-6"
    : "flex h-[92px] flex-col items-center justify-center rounded-b-2xl px-4 text-center text-white";

  return (
    <div className={className} style={{ color: fill }}>
      <svg
        width="100%"
        height={wave.height}
        aria-hidden="true"
        className={wave.svgClass}
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width={wave.width}
            height={wave.height}
            patternUnits="userSpaceOnUse"
          >
            <path d={wave.path} fill={fill} />
          </pattern>
        </defs>
        <rect width="100%" height={wave.height} fill={`url(#${patternId})`} />
      </svg>

      <div className={bodyClass} style={{ backgroundColor: fill }}>
        {quote && (
          <p className="text-lg font-medium leading-snug tracking-[-0.01em] lg:text-xl lg:leading-normal">
            {quote}
          </p>
        )}
        <div>
          <p className="text-xl font-semibold leading-7">{name}</p>
          <p className="mt-0.5 text-base leading-6 text-white/90">{role}</p>
        </div>
      </div>
    </div>
  );
}