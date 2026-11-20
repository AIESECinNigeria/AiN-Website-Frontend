import CloudImage from "@/components/CloudImage";

export interface Stat {
  value: string;
  label: string;
  mobileLabel?: string;
}

export interface StatsArcProps {
  /** Three stats shown near the base of the dome. Defaults to the home figures. */
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { value: "100,000+", label: "youths impacted", mobileLabel: "youths" },
  { value: "1000+", label: "active volunteers", mobileLabel: "volunteers" },
  { value: "15+", label: "cities" },
];

// Avatar centres as a percentage of the dome box (1352 × 560), measured
// directly from the design so the scatter matches exactly.
const avatars = [
  // Centres aligned to the nearest of the two SVG arcs at each fixed x point.
  { id: "stat-avatar-1", left: 49.7, top: 5.7 },
  { id: "stat-avatar-2", left: 35.4, top: 23.6 },
  { id: "stat-avatar-3", left: 82.8, top: 37.2 },
  { id: "stat-avatar-4", left: 9.2, top: 60.9 },
  { id: "stat-avatar-5", left: 90.1, top: 84.1 },
];

function StatList({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`flex justify-around gap-2 text-center sm:gap-12 lg:justify-center lg:gap-16 [.landing-impact_&]:mx-auto [.landing-impact_&]:w-full [.landing-impact_&]:max-w-83.75 [.landing-impact_&]:justify-between [.landing-impact_&]:gap-0 [.landing-impact_&>div]:min-w-20.75 [.landing-impact_&>div:first-child]:min-w-26.5 lg:[.landing-impact_&]:max-w-[733.27px] lg:[.landing-impact_&>div]:min-w-23.5 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-[30px] font-bold leading-none text-aiesec-blue lg:text-fluid-36 [.landing-impact_&]:text-fluid-24 [.landing-impact_&]:leading-[1.4] [.landing-impact_&]:tracking-[-0.01em] lg:[.landing-impact_&]:text-fluid-48 lg:[.landing-impact_&]:leading-[1.5]">{stat.value}</p>
          <p className="mt-1 text-sm italic text-gray-500 lg:text-fluid-16 [.landing-impact_&]:mt-0 [.landing-impact_&]:font-medium [.landing-impact_&]:leading-[1.2] [.landing-impact_&]:tracking-[-0.01em] [.landing-impact_&]:text-aiesec-heading lg:[.landing-impact_&]:text-fluid-20">
            <span className="lg:hidden">{stat.mobileLabel ?? stat.label}</span>
            <span className="hidden lg:inline">{stat.label}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default function StatsArc({ stats = defaultStats }: StatsArcProps) {
  return (
    <section className="px-6 pb-16 pt-8 lg:px-20 lg:pt-10 [.landing-impact_&]:p-0">
      {/* Desktop: avatars scattered over a concentric-arc dome, stats at the base */}
      <div className="relative mx-auto hidden aspect-[1352/560] w-full max-w-[1352px] lg:block
        [.landing-impact_&]:block [.landing-impact_&]:aspect-auto [.landing-impact_&]:h-66.5 [.landing-impact_&]:max-w-none [.landing-impact_&]:overflow-hidden [.landing-impact_&>svg]:hidden lg:[.landing-impact_&]:h-117.25 lg:[.landing-impact_&]:overflow-visible
        [.landing-impact_&]:before:absolute [.landing-impact_&]:before:top-20.75 [.landing-impact_&]:before:left-1/2 [.landing-impact_&]:before:aspect-[2/1] [.landing-impact_&]:before:w-172.5 [.landing-impact_&]:before:-translate-x-1/2 [.landing-impact_&]:before:rounded-t-full [.landing-impact_&]:before:border-2 [.landing-impact_&]:before:border-b-0 [.landing-impact_&]:before:border-[#E0E0E0] [.landing-impact_&]:before:[mask-image:linear-gradient(to_bottom,black_60%,transparent_98%)] lg:[.landing-impact_&]:before:top-12.75 lg:[.landing-impact_&]:before:w-[94.17%]
        [.landing-impact_&]:after:absolute [.landing-impact_&]:after:top-40.75 [.landing-impact_&]:after:left-1/2 [.landing-impact_&]:after:aspect-[2/1] [.landing-impact_&]:after:w-147 [.landing-impact_&]:after:-translate-x-1/2 [.landing-impact_&]:after:rounded-t-full [.landing-impact_&]:after:border-2 [.landing-impact_&]:after:border-b-0 [.landing-impact_&]:after:border-[#E0E0E0] [.landing-impact_&]:after:[mask-image:linear-gradient(to_bottom,black_55%,transparent_98%)] lg:[.landing-impact_&]:after:top-[155.2px] lg:[.landing-impact_&]:after:w-[80.24%]">
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
            className="absolute w-[6.3%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-aiesec-blue p-1 shadow-md
              [.landing-impact_&]:z-10 [.landing-impact_&]:w-10 [.landing-impact_&]:p-0.5 [.landing-impact_&]:shadow-none lg:[.landing-impact_&]:w-[81.36px]
              [.landing-impact_&:nth-of-type(1)]:-left-18.75! [.landing-impact_&:nth-of-type(1)]:top-61.25! lg:[.landing-impact_&:nth-of-type(1)]:left-[13.07%]! lg:[.landing-impact_&:nth-of-type(1)]:top-87.5!
              [.landing-impact_&:nth-of-type(2)]:left-[20%]! [.landing-impact_&:nth-of-type(2)]:top-45.25! lg:[.landing-impact_&:nth-of-type(2)]:left-[36.43%]! lg:[.landing-impact_&:nth-of-type(2)]:top-41!
              [.landing-impact_&:nth-of-type(3)]:left-[42.5%]! [.landing-impact_&:nth-of-type(3)]:top-20.25! lg:[.landing-impact_&:nth-of-type(3)]:left-[49.31%]! lg:[.landing-impact_&:nth-of-type(3)]:top-[40.68px]!
              [.landing-impact_&:nth-of-type(4)]:left-[93.3%]! [.landing-impact_&:nth-of-type(4)]:top-32.75! lg:[.landing-impact_&:nth-of-type(4)]:left-[78.57%]! lg:[.landing-impact_&:nth-of-type(4)]:top-50!
              [.landing-impact_&:nth-of-type(5)]:left-[78.2%]! [.landing-impact_&:nth-of-type(5)]:top-45.25! lg:[.landing-impact_&:nth-of-type(5)]:left-[85.05%]! lg:[.landing-impact_&:nth-of-type(5)]:top-108.25!"
            style={{ left: `${avatar.left}%`, top: `${avatar.top}%` }}
          >
            <div className="aspect-square overflow-hidden rounded-full bg-white p-0.5 [.landing-impact_&]:p-0">
              <CloudImage
                id={avatar.id}
                alt="AIESEC in Nigeria participant"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        ))}

        <StatList stats={stats} className="absolute inset-x-0 top-[79%] [.landing-impact_&]:top-78 [.landing-impact_&]:hidden lg:[.landing-impact_&]:flex" />
      </div>

      {/* Mobile: cropped concentric arcs and four participant portraits */}
      <div className="relative -mx-6 h-[250px] overflow-hidden lg:hidden [.landing-impact_&]:hidden">
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
