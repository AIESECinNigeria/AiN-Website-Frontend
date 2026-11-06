"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import CloudImage from "@/components/CloudImage";
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
  id: string;
  alt: string;
  top: string;
  left: string;
  width: string;
  aspectRatio: string;
  delay?: number;
  mobile?: { top: string; left: string; width: string; aspectRatio?: string; src?: string };
}

export interface ScrollRevealHeroProps {
  photos: ScatteredPhoto[];
  segments: HeroSegment[];
  cta?: HeroCta;
}

// How long the section stays pinned before it releases and scrolls away
// normally — this is scroll distance, not time.
const PINNED_HEIGHT_VH = 250;

// Perspective depths from the scroll reference, normalized to viewport height.
const EXIT_DEPTH_VH = 150;
const MOBILE_EXIT_DEPTH_VH = 87.5;
// Nearer photos pass faster; the order follows the eleven Figma photo slots.
const PHOTO_DEPTHS = [1, 0.5, 0.75, 1.5, 1, 1.5, 0.75, 0.5, 0.5, 1, 1];

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 639px)");
    const update = () => setIsMobile(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const lines = groupIntoLines(segments);

  return (
    <div ref={containerRef} style={{ height: `${PINNED_HEIGHT_VH}vh` }} className="relative">
      <div className="sticky top-0 h-screen w-full lg:pt-22.5">
        <div className="relative mx-auto aspect-[390/651] w-full overflow-hidden perspective-[100vh] sm:aspect-[1512/982] sm:max-w-[1512px]">
          {photos.map((photo, index) => (
            <ScatteredPhotoItem key={`${photo.id}-${index}`} photo={photo} index={index} scrollYProgress={scrollYProgress} mobile={isMobile} />
          ))}

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-7.5 px-4 pb-9 text-center lg:gap-10 lg:px-20 lg:pb-34.5">
            <h1 className="w-full max-w-[291px] text-subheading text-aiesec-heading lg:max-w-[872px] lg:text-rd-heading-01 lg:[font-size:min(3.968254vw,var(--text-rd-heading-01))] [&_.bg-aiesec-highlight]:h-8 [&_.bg-aiesec-highlight]:bg-aiesec-blue/10 [&_.bg-aiesec-highlight]:py-0 [&_.bg-aiesec-highlight]:pl-1 [&_.bg-aiesec-highlight]:pr-0 lg:[&_.bg-aiesec-highlight]:h-[1.2em] lg:[&_.bg-aiesec-highlight]:pl-3 [&_span[aria-hidden]]:ml-0 [&_span[aria-hidden]]:h-8! [&_span[aria-hidden]]:w-1 [&_span[aria-hidden]]:align-top lg:[&_span[aria-hidden]]:h-[1.2em]! lg:[&_span[aria-hidden]]:w-1.5">
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
                className="pointer-events-auto inline-flex h-[43px] min-w-[135px] items-center justify-center gap-2 rounded-pill bg-aiesec-blue px-6 py-3 text-base font-medium leading-[19px] text-white transition-colors hover:bg-aiesec-blue/90 lg:h-17 lg:min-w-[191px] lg:px-8 lg:py-4 lg:text-rd-body-02 lg:leading-normal"
              >
                {cta.label}
              </Link>
            )}
          </div>
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
    <motion.span style={{ opacity }} className="inline [&+span]:ml-1 lg:block lg:[&+span]:ml-0">
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
  mobile,
}: {
  photo: ScatteredPhoto;
  index: number;
  scrollYProgress: MotionValue<number>;
  mobile: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const position = mobile && photo.mobile ? photo.mobile : photo;
  const depth = PHOTO_DEPTHS[index] ?? 1;
  const exitDepth = (mobile ? MOBILE_EXIT_DEPTH_VH : EXIT_DEPTH_VH) * depth;
  const z = useTransform(scrollYProgress, [0, 1], ["0vh", `${exitDepth}vh`], {
    ease: (progress) =>
      progress < 0.5 ? 2 * progress ** 2 : 1 - (-2 * progress + 2) ** 2 / 2,
  });

  // Magnetic hover: nudges toward the cursor, springs back, clamped to a
  // small range so it never drifts far from its resting position.
  const hoverX = useMotionValue(0);
  const hoverY = useMotionValue(0);
  const springX = useSpring(hoverX, { stiffness: 200, damping: 18 });
  const springY = useSpring(hoverY, { stiffness: 200, damping: 18 });

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
        top: position.top,
        left: position.left,
        width: position.width,
        aspectRatio: position.aspectRatio ?? photo.aspectRatio,
        x: springX,
        y: springY,
        z,
      }}
      className="cursor-pointer overflow-hidden"
    >
      <picture>
        <source media="(max-width: 639px)" srcSet={photo.mobile?.src} />
        <CloudImage id={photo.id} alt={photo.alt} crop="fill" gravity="auto" className="absolute inset-0 h-full w-full object-fill" />
      </picture>
    </motion.div>
  );
}
