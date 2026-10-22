import CloudImage from "@/components/CloudImage";

export interface Stat {
  value: string;
  label: string;
}

export interface StatsArcProps {
  /** Three stats shown near the base of the dome. Defaults to the home figures. */
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "100,000+", label: "youths" },
  { value: "1000+", label: "volunteers" },
  { value: "15+", label: "cities" },
];

// Avatar centres as a percentage of the dome box (1352 × 560), measured
// directly from the design so the scatter matches exactly.
const avatars = [
  { id: "stat-avatar-1", left: 49.7, top: 7.3 },
  { id: "stat-avatar-2", left: 35.4, top: 33.0 },
  { id: "stat-avatar-3", left: 82.8, top: 32.3 },
  { id: "stat-avatar-4", left: 9.2, top: 58.8 },
  { id: "stat-avatar-5", left: 90.1, top: 81.6 },
];

function StatList({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`flex justify-around gap-2 text-center sm:gap-12 lg:gap-16 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-[30px] font-bold leading-none text-aiesec-blue lg:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm italic text-gray-500 lg:text-base">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}

export default function StatsArc({ stats = defaultStats }: StatsArcProps) {
  return (
    <section className="px-6 pb-16 pt-8 lg:px-20 lg:pt-10">
      {/* Desktop: avatars scattered over a concentric-arc dome, stats at the base */}
      <div className="relative mx-auto hidden aspect-[1352/560] w-full max-w-[1352px] lg:block">
        <svg
          viewBox="0 0 1352 560"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
          fill="none"
          aria-hidden="true"
        >
          <path d="M40 560 A 647 647 0 0 1 1312 560" stroke="#e6e8eb" strokeWidth="1.5" />
          <path d="M108 560 A 580 580 0 0 1 1244 560" stroke="#eef0f2" strokeWidth="1.5" />
        </svg>

        {avatars.map((avatar) => (
          <div
            key={avatar.id}
            className="absolute w-[6.3%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aiesec-blue p-1 shadow-md"
            style={{ left: `${avatar.left}%`, top: `${avatar.top}%` }}
          >
            <div className="aspect-square overflow-hidden rounded-full bg-white p-0.5">
              <CloudImage
                id={avatar.id}
                alt="AIESEC in Nigeria participant"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        ))}

        <StatList stats={stats} className="absolute inset-x-0 top-[79%]" />
      </div>

      {/* Mobile: cropped concentric arcs and four participant portraits */}
      <div className="relative -mx-6 h-[250px] overflow-hidden lg:hidden">
        <svg viewBox="0 0 390 250" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none" aria-hidden="true">
          <path d="M-55 145 Q195 -25 445 145" stroke="#e3e3e3" strokeWidth="2" />
          <path d="M-55 235 Q195 55 445 235" stroke="#e3e3e3" strokeWidth="2" />
        </svg>
        {[
          { id: "stat-avatar-1", left: 42.5, top: 24.5 },
          { id: "stat-avatar-2", left: 20, top: 66 },
          { id: "stat-avatar-3", left: 78, top: 65 },
          { id: "stat-avatar-4", left: 93, top: 39.5 },
        ].map((avatar) => (
          <div key={avatar.id} className="absolute size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-aiesec-blue p-[2px]" style={{ left: `${avatar.left}%`, top: `${avatar.top}%` }}>
            <div className="aspect-square overflow-hidden rounded-full bg-white p-px">
              <CloudImage id={avatar.id} alt="AIESEC in Nigeria participant" className="h-full w-full rounded-full object-cover" />
            </div>
          </div>
        ))}
      </div>
      <StatList stats={stats} className="mt-0 lg:hidden" />
    </section>
  );
}
