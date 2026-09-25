/** Team-member name plate with a scalloped ("wavy") top edge that bites into
 *  the photo above it, matching the AIESEC review-card shape. Colour alternates
 *  red / blue across the team grid. */
export default function WavyLabel({
  name,
  role,
  variant,
  className = "",
}: {
  name: string;
  role: string;
  variant: "red" | "blue";
  className?: string;
}) {
  const fill = variant === "red" ? "#f94141" : "#037ef3";
  const patternId = `wavy-${variant}`;

  return (
    <div className={className} style={{ color: fill }}>
      {/* Broad scallops sized to match the larger waves in the design. */}
      <svg
        width="100%"
        height="18"
        aria-hidden="true"
        className="-mb-px block"
        preserveAspectRatio="none"
      >
        <defs>
          <pattern
            id={patternId}
            width="44"
            height="18"
            patternUnits="userSpaceOnUse"
          >
            <path d="M0 18 C7.33 18 14.67 3 22 3 C29.33 3 36.67 18 44 18 Z" fill={fill} />
          </pattern>
        </defs>
        <rect width="100%" height="18" fill={`url(#${patternId})`} />
      </svg>

      <div
        className="flex h-[92px] flex-col items-center justify-center rounded-b-2xl px-4 text-center text-white"
        style={{ backgroundColor: fill }}
      >
        <p className="text-xl font-semibold leading-7">{name}</p>
        <p className="mt-0.5 text-base leading-6 text-white/90">{role}</p>
      </div>
    </div>
  );
}
