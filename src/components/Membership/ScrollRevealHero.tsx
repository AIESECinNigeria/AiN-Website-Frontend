"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  MotionValue,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { TypewriterText } from "../Typewriter";
import type { HeroSegment, HeroCta } from "../Hero";

export interface ScatteredPhoto {
  src: string;
  alt: string;
  top: string;
  left: string;
  width: string;
  aspectRatio: string;
  delay?: number;
}

export interface ScrollRevealHeroProps {
  photos: ScatteredPhoto[];
  segments: HeroSegment[];
  cta?: HeroCta;
}

// How long the section stays pinned before it releases and scrolls away
// normally — this is scroll distance, not time.
const PINNED_HEIGHT_VH = 180;

// How far (in px) a photo travels along its own exit direction by the time
// the sequence completes. Generous on purpose so it clears the viewport
// regardless of screen size.
const EXIT_DISTANCE = 700;

function groupIntoLines(segments: HeroSegment[]): HeroSegment[][] {
  const lines: HeroSegment[][] = [[]];
  for (const segment of segments) {
    if (segment.type === "break") {
      lines.push([]);
    } else {
      lines[lines.length - 1].push(segment);
    }
  }
  return lines.filter((line) => line.length > 0);
}

export default function ScrollRevealHero({ photos, segments, cta }: ScrollRevealHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lines = groupIntoLines(segments);

  return (
    <div ref={containerRef} style={{ height: `${PINNED_HEIGHT_VH}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#f2f1ee]">
        {photos.map((photo, index) => (
          <ScatteredPhotoItem key={photo.src} photo={photo} index={index} scrollYProgress={scrollYProgress} />
        ))}

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-6 px-6 text-center">
          <h1 className="text-3xl font-bold leading-[130%] tracking-[-1%] text-gray-900 sm:text-4xl lg:text-5xl">
            {lines.map((line, lineIndex) => (
              <HeadlineLine
                key={lineIndex}
                segments={line}
                lineIndex={lineIndex}
                totalLines={lines.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </h1>

          {/* The button is intentionally NOT tied to scroll — it stays fully
              visible while the photos move away, and only leaves the screen
              when the pinned section itself releases and scrolls off. */}
          {cta && (
            <Link
              href={cta.href}
              className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-aiesec-blue px-6 py-3 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
            >
              {cta.label}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function HeadlineLine({
  segments,
  lineIndex,
  totalLines,
  scrollYProgress,
}: {
  segments: HeroSegment[];
  lineIndex: number;
  totalLines: number;
  scrollYProgress: MotionValue<number>;
}) {
  // Each line fades out in its own scroll window, staggered so earlier
  // lines finish fading before later ones start — pure opacity, no
  // movement, per spec ("fade away on their position").
  const windowSize = 0.55 / totalLines;
  const start = 0.08 + lineIndex * (0.35 / totalLines);
  const end = start + windowSize;
  const opacity = useTransform(scrollYProgress, [start, end], [1, 0]);

  return (
    <motion.span style={{ opacity }} className="block">
      {segments.map((segment, index) => {
        if (segment.type === "text") return <span key={index}>{segment.value}</span>;
        if (segment.type === "typewriter") {
          return (
            <TypewriterText
              key={index}
              words={segment.words}
              highlight={segment.highlight}
              className="text-aiesec-blue"
            />
          );
        }
        return null;
      })}
    </motion.span>
  );
}

function ScatteredPhotoItem({
  photo,
  index,
  scrollYProgress,
}: {
  photo: ScatteredPhoto;
  index: number;
  scrollYProgress: MotionValue<number>;
}) {
  const ref = useRef<HTMLDivElement>(null);

  // Direction this photo exits in, derived from where it actually sits
  // relative to center — a top-left photo drifts further up-left, a
  // bottom-right photo further down-right, etc. Computed once from its
  // static position, not reactive.
  const leftPct = parseFloat(photo.left) || 50;
  const topPct = parseFloat(photo.top) || 50;
  let dirX = leftPct - 50;
  let dirY = topPct - 50;
  const magnitude = Math.sqrt(dirX * dirX + dirY * dirY) || 1;
  dirX /= magnitude;
  dirY /= magnitude;

  const exitX = useTransform(scrollYProgress, [0.05, 0.85], [0, dirX * EXIT_DISTANCE]);
  const exitY = useTransform(scrollYProgress, [0.05, 0.85], [0, dirY * EXIT_DISTANCE]);

  // Magnetic hover: nudges toward the cursor, springs back, clamped to a
  // small range so it never drifts far from its resting position.
  const hoverX = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const springX = useSpring(hoverX, { stiffness: 200, damping: 18 });
  const springY = useSpring(hoverY, { stiffness: 200, damping: 18 });

  // Combine the scroll-driven exit with the hover nudge into one final
  // position, so both can apply to the same element at once.
  const x = useTransform(() => exitX.get() + springX.get());
  const y = useTransform(() => exitY.get() + springY.get());

  const MAX_OFFSET = 14; // px — hover nudge range, "just a little bit"

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = event.clientX - (rect.left + rect.width / 2);
    const relY = event.clientY - (rect.top + rect.height / 2);
    hoverX.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relX * 0.25)));
    hoverY.set(Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, relY * 0.25)));
  }

  function handleMouseLeave() {
    hoverX.set(0);
    hoverY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: (photo.delay ?? index) * 0.08, ease: "easeOut" }}
      style={{
        position: "absolute",
        top: photo.top,
        left: photo.left,
        width: photo.width,
        aspectRatio: photo.aspectRatio,
        x,
        y,
      }}
      className="cursor-pointer overflow-hidden"
    >
      <Image src={photo.src} alt={photo.alt} fill sizes="20vw" className="object-cover" />
    </motion.div>
  );
}