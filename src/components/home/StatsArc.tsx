import CloudImage from "@/components/CloudImage";

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: "100,000+", label: "youths impacted" },
  { value: "1000+", label: "active volunteers" },
  { value: "15+", label: "cities" },
];

// Avatars placed along a semicircular dome. Angles are measured from the
// positive x-axis (90° = apex). x% = 50 + 50·cosθ, y% = 100 − 100·sinθ.
const avatars = [
  { id: "ain/home/stat-avatar-1", angle: 90 },
  { id: "ain/home/stat-avatar-2", angle: 122 },
  { id: "ain/home/stat-avatar-3", angle: 58 },
  { id: "ain/home/stat-avatar-4", angle: 158 },
  { id: "ain/home/stat-avatar-5", angle: 22 },
];

function StatList({ className = "" }: { className?: string }) {
  return (
    <div className={`flex justify-center gap-8 text-center sm:gap-12 lg:gap-16 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-bold text-aiesec-blue lg:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm italic text-gray-500 lg:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function StatsArc() {
  return (
    <section className="px-6 pb-16 lg:px-20">
      {/* Desktop: avatars along an arc with the stats resting near the base */}
      <div className="relative mx-auto hidden aspect-[2/1] max-w-4xl lg:block">
        <svg
          viewBox="0 0 800 400"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <path d="M4 400 A 396 396 0 0 1 796 400" stroke="#e6e8eb" strokeWidth="1.5" />
          <path d="M70 400 A 330 330 0 0 1 730 400" stroke="#eef0f2" strokeWidth="1.5" />
        </svg>

        {avatars.map((avatar) => {
          const rad = (avatar.angle * Math.PI) / 180;
          const left = 50 + 50 * Math.cos(rad);
          const top = 100 - 100 * Math.sin(rad);
          return (
            <div
              key={avatar.id}
              className="absolute size-16 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full bg-white p-0.5 shadow-md outline outline-2 outline-aiesec-blue/40"
              style={{ left: `${left}%`, top: `${top}%` }}
            >
              <CloudImage
                id={avatar.id}
                alt="AIESEC in Nigeria participant"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          );
        })}

        <StatList className="absolute inset-x-0 bottom-8" />
      </div>

      {/* Mobile: stats only */}
      <StatList className="lg:hidden" />
    </section>
  );
}
