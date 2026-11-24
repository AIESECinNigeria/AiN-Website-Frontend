import type { CSSProperties } from "react";
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
  { value: "900+", label: "active volunteers", mobileLabel: "volunteers" },
  { value: "15+", label: "cities" },
];

/* Each avatar rides one of the two arcs. Outer-arc avatars travel left to
 * right and inner-arc avatars travel right to left, so the dome always has
 * motion in both directions. `phase` is where along the arc the avatar starts
 * (0 = left end, 0.5 = top, 1 = right end). Spacing the phases evenly keeps
 * the avatars from bunching up as they loop. */
const avatars = [
  { id: "stat-avatar-1", arc: "outer", phase: 0.5 },
  { id: "stat-avatar-2", arc: "inner", phase: 0.25 },
  { id: "stat-avatar-3", arc: "outer", phase: 0.83 },
  { id: "stat-avatar-4", arc: "outer", phase: 0.17 },
  { id: "stat-avatar-5", arc: "inner", phase: 0.75 },
] as const;

/* Seconds for one avatar to travel the whole arc. Lower is faster. */
const ORBIT_SECONDS = { outer: 60, inner: 50 };

/* The invisible box each avatar orbits in. It matches the arc it follows:
 * the default values match the SVG arcs, the landing-impact values match the
 * two border arcs drawn by the ::before and ::after pieces. */
const ORBIT_FRAME = {
  outer:
    "top-[5.68%] w-[95.7%] [.landing-impact_&]:top-20.75 [.landing-impact_&]:w-172.5 lg:[.landing-impact_&]:top-12.75 lg:[.landing-impact_&]:w-[94.17%]",
  inner:
    "top-[17.39%] w-[85.8%] [.landing-impact_&]:top-40.75 [.landing-impact_&]:w-147 lg:[.landing-impact_&]:top-[155.2px] lg:[.landing-impact_&]:w-[80.24%]",
};

function orbitVars(arc: "outer" | "inner", phase: number): CSSProperties {
  const duration = ORBIT_SECONDS[arc];
  const reverse = arc === "inner";
  // A negative delay starts the animation part of the way through its loop.
  const delay = reverse ? -(1 - phase) * duration : -phase * duration;
  return {
    "--orbit-dur": `${duration}s`,
    "--orbit-delay": `${delay}s`,
    "--orbit-dir": reverse ? "reverse" : "normal",
  } as CSSProperties;
}

const orbitCss = `
@keyframes stats-spin {
  from { transform: rotate(-90deg); }
  to { transform: rotate(90deg); }
}
@keyframes stats-counter {
  from { transform: rotate(90deg); }
  to { transform: rotate(-90deg); }
}
@keyframes stats-fade {
  0%, 6% { opacity: 0; }
  17% { opacity: 1; }
  83% { opacity: 1; }
  94%, 100% { opacity: 0; }
}
@keyframes stats-fade-landing {
  0%, 2% { opacity: 0; }
  13% { opacity: 1; }
  87% { opacity: 1; }
  98%, 100% { opacity: 0; }
}
.stats-orbit {
  transform-origin: 50% 100%;
  will-change: transform;
  animation: stats-spin var(--orbit-dur) linear infinite;
  animation-delay: var(--orbit-delay);
  animation-direction: var(--orbit-dir);
}
.stats-orbit-avatar {
  animation:
    stats-counter var(--orbit-dur) linear infinite,
    stats-fade var(--orbit-dur) linear infinite;
  animation-delay: var(--orbit-delay);
  animation-direction: var(--orbit-dir);
}
.landing-impact .stats-orbit-avatar {
  animation-name: stats-counter, stats-fade-landing;
}
@media (prefers-reduced-motion: reduce) {
  .stats-orbit,
  .stats-orbit-avatar {
    animation-play-state: paused;
  }
}
`;

function StatList({ stats, className = "" }: { stats: Stat[]; className?: string }) {
  return (
    <div className={`flex justify-around gap-2 text-center sm:gap-12 lg:justify-center lg:gap-16 [.landing-impact_&]:mx-auto [.landing-impact_&]:w-full [.landing-impact_&]:max-w-83.75 [.landing-impact_&]:justify-between [.landing-impact_&]:gap-0 [.landing-impact_&>div]:min-w-20.75 [.landing-impact_&>div:first-child]:min-w-26.5 lg:[.landing-impact_&]:max-w-[733.27px] lg:[.landing-impact_&>div]:min-w-23.5 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-[30px] font-bold leading-none text-aiesec-blue lg:text-4xl [.landing-impact_&]:text-2xl [.landing-impact_&]:leading-[1.4] [.landing-impact_&]:tracking-[-0.01em] lg:[.landing-impact_&]:text-adaptive-48 lg:[.landing-impact_&]:leading-[1.5]">{stat.value}</p>
          <p className="mt-1 text-sm italic text-gray-500 lg:text-base [.landing-impact_&]:mt-0 [.landing-impact_&]:font-medium [.landing-impact_&]:tracking-[-0.01em] [.landing-impact_&]:text-aiesec-heading [.landing-impact_&]:leading-[120%] lg:[.landing-impact_&]:text-adaptive-20 lg:[.landing-impact_&]:leading-[1.2]">
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
      <style>{orbitCss}</style>

      {/* Desktop: avatars gliding along a concentric-arc dome, stats at the base */}
      <div className="@container relative mx-auto hidden aspect-[1352/560] w-full max-w-[1352px] lg:block
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

        {avatars.map((avatar) => {
          const vars = orbitVars(avatar.arc, avatar.phase);
          return (
            // The frame is the half-circle box of the arc this avatar follows.
            <div
              key={avatar.id}
              aria-hidden="true"
              className={`pointer-events-none absolute left-1/2 aspect-[2/1] -translate-x-1/2 [.landing-impact_&]:z-10 ${ORBIT_FRAME[avatar.arc]}`}
            >
              {/* A zero-width bar standing on the circle's centre and rotating
                  about it. The avatar sits at its top, so it rides the arc. */}
              <div className="stats-orbit absolute bottom-0 left-1/2 h-full w-0" style={vars}>
                <div className="absolute left-0 top-0 w-[6.3cqw] -translate-x-1/2 -translate-y-1/2 [.landing-impact_&]:w-10 lg:[.landing-impact_&]:w-[81.36px]">
                  {/* Turns the opposite way so the photo stays upright, and
                      fades in and out at the ends of the arc. */}
                  <div className="stats-orbit-avatar w-full rounded-full bg-aiesec-blue p-1 shadow-md [.landing-impact_&]:p-0.5 [.landing-impact_&]:shadow-none" style={vars}>
                    <div className="aspect-square overflow-hidden rounded-full bg-white p-0.5 [.landing-impact_&]:p-0">
                      <CloudImage
                        id={avatar.id}
                        alt="AIESEC in Nigeria participant"
                        className="h-full w-full rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

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