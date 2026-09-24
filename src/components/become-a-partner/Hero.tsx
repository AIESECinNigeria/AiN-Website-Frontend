// components/Partner/PartnerHeroVisual.tsx
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useAnimationFrame,
  animate,
} from "framer-motion";

const ASPECT = 0.34; // box height = width * ASPECT

interface Point {
  x: number;
  y: number;
}

interface Circle {
  cx: number;
  cy: number;
  r: number;
  angleLeft: number;
  angleRight: number;
}

// Given 3 points that lie on an arc, returns the one true circle that passes through
// all 3 (its center and radius) — this is what guarantees the bubbles and the drawn
// line are always the exact same circle, never an approximation of one.
function circleFromPoints(p1: Point, p2: Point, p3: Point): Circle {
  const { x: x1, y: y1 } = p1;
  const { x: x2, y: y2 } = p2;
  const { x: x3, y: y3 } = p3;
  const d = 2 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  const ux =
    ((x1 * x1 + y1 * y1) * (y2 - y3) +
      (x2 * x2 + y2 * y2) * (y3 - y1) +
      (x3 * x3 + y3 * y3) * (y1 - y2)) /
    d;
  const uy =
    ((x1 * x1 + y1 * y1) * (x3 - x2) +
      (x2 * x2 + y2 * y2) * (x1 - x3) +
      (x3 * x3 + y3 * y3) * (x2 - x1)) /
    d;
  const r = Math.hypot(x1 - ux, y1 - uy);
  return {
    cx: ux,
    cy: uy,
    r,
    angleLeft: Math.atan2(y1 - uy, x1 - ux),
    angleRight: Math.atan2(y3 - uy, x3 - ux),
  };
}

function useContainerWidth() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });
    observer.observe(el);
    setWidth(el.getBoundingClientRect().width);
    return () => observer.disconnect();
  }, []);

  return { ref, width };
}

interface OrbitBubbleProps {
  circle: Circle;
  t: number; // resting position between the arc's two ends, 0 - 1
  swingDeg: number; // how many degrees it swings away from its resting angle
  speed: number; // radians/sec-ish pace of the swing
  phase: number;
  size: number;
  src: string;
  alt: string;
}

function OrbitBubble({ circle, t, swingDeg, speed, phase, size, src, alt }: OrbitBubbleProps) {
  const restAngle = circle.angleLeft + (circle.angleRight - circle.angleLeft) * t;
  const swingRad = (swingDeg * Math.PI) / 180;
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useAnimationFrame((elapsed) => {
    const angle = restAngle + Math.sin(elapsed * 0.001 * speed + phase) * swingRad;
    x.set(circle.cx + circle.r * Math.cos(angle) - size / 2);
    y.set(circle.cy + circle.r * Math.sin(angle) - size / 2);
  });

  return (
    <motion.div
      className="absolute left-0 top-0 rounded-full border-2 border-aiesec-blue bg-white p-[3px] shadow-sm"
      style={{ width: size, height: size, x, y }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-full bg-gray-200">
        <Image src={src} alt={alt} fill sizes="80px" className="object-cover" />
      </div>
    </motion.div>
  );
}

interface Stat {
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { value: 11000, suffix: "+", label: "youths" },
  { value: 500, suffix: "+", label: "volunteers" },
  { value: 20, suffix: "+", label: "cities" },
];

function StatCounter({ value, suffix, label }: Stat) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <div className="flex flex-col items-center">
      <span ref={ref} className="text-3xl font-bold text-aiesec-blue sm:text-4xl lg:text-5xl">
        {display.toLocaleString()}
        {suffix}
      </span>
      <span className="mt-1 text-base font-medium italic leading-[120%] text-[#00000D] sm:text-lg lg:text-xl">
        {label}
      </span>
    </div>
  );
}

// Bubble sizes are tuned for a ~1200px-wide stage. On a narrow phone the stage
// might only be ~340px wide, so this scales every bubble down proportionally
// instead of rendering the same fixed px size at every screen width, clamped
// so they never shrink into unreadable dots on very small screens.
const REFERENCE_WIDTH = 1200;
const MIN_SCALE = 0.5;
const MAX_SCALE = 1;

export default function PartnerHeroVisual() {
  const { ref: stageRef, width } = useContainerWidth();
  const height = width * ASPECT;
  const scale =
    width > 0 ? Math.min(MAX_SCALE, Math.max(MIN_SCALE, width / REFERENCE_WIDTH)) : 1;

  const outer =
    width > 0
      ? circleFromPoints(
          { x: width * 0.03, y: height * 0.95 },
          { x: width * 0.5, y: height * 0.05 },
          { x: width * 0.97, y: height * 0.95 }
        )
      : null;

  const inner =
    width > 0
      ? circleFromPoints(
          { x: width * 0.18, y: height * 0.82 },
          { x: width * 0.5, y: height * 0.34 },
          { x: width * 0.82, y: height * 0.82 }
        )
      : null;

  return (
    <div className="relative mx-auto w-full max-w-5xl px-6 pt-12 lg:pt-16">
      <div ref={stageRef} className="relative aspect-[1200/408] w-full">
        {width > 0 && outer && inner && (
          <>
            <svg width={width} height={height} className="absolute inset-0" aria-hidden="true">
              <path d={arcPath(outer)} fill="none" stroke="#E2E2E2" strokeWidth={1.5} />
              <path d={arcPath(inner)} fill="none" stroke="#E2E2E2" strokeWidth={1.5} />
            </svg>

            {/* outer line: leftmost, top-center, rightmost */}
            <OrbitBubble circle={outer} t={0.04} swingDeg={7} speed={0.55} phase={0} size={56 * scale} src="/partner/bubble-1.jpg" alt="" />
            <OrbitBubble circle={outer} t={0.5} swingDeg={8} speed={0.5} phase={2} size={72 * scale} src="/partner/bubble-3.jpg" alt="" />
            <OrbitBubble circle={outer} t={0.96} swingDeg={7} speed={0.6} phase={4} size={56 * scale} src="/partner/bubble-5.jpg" alt="" />

            {/* inner line: upper-left, upper-right */}
            <OrbitBubble circle={inner} t={0.15} swingDeg={9} speed={0.65} phase={1} size={64 * scale} src="/partner/bubble-2.jpg" alt="" />
            <OrbitBubble circle={inner} t={0.85} swingDeg={9} speed={0.7} phase={3} size={64 * scale} src="/partner/bubble-4.jpg" alt="" />
          </>
        )}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto -mt-6 flex max-w-md items-start justify-center gap-8 sm:-mt-10 sm:gap-16 lg:gap-24"
      >
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </motion.div>
    </div>
  );
}


function arcPath(circle: Circle) {
  const STEPS = 48;
  const points: string[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const angle = circle.angleLeft + (circle.angleRight - circle.angleLeft) * t;
    const x = circle.cx + circle.r * Math.cos(angle);
    const y = circle.cy + circle.r * Math.sin(angle);
    points.push(`${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return `M ${points.join(" L ")}`;
}