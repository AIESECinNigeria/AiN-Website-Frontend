"use client";

import { useEffect, useRef, useState } from "react";
import CloudImage from "@/components/CloudImage";
import WavyLabel from "@/components/ui/WavyLabel";

interface Member {
  name: string;
  role: string;
  variant: "red" | "blue";
  imageId: string;
  /** Cloudinary target ratio for the crop. */
  ar: string;
  /** Matching Tailwind aspect class for the slot. */
  aspect: string;
}

/* DESKTOP bento — four columns laid out exactly as the design's staggered
 * masonry. Plates reveal on hover.
 *  col1  tall portrait + wide landscape   (Eniola Olakunle, Adeola Adedara)
 *  col2  square        + square           (Ajayi Israel, Demilade Adekunle)
 *  col3  wide landscape+ tall portrait    (Sabatha Joshua, Toluwalase Agbetuyi)
 *  col4  square        + square           (Atiradeoluwa Olaoye, Favour Bassey)
 * Every column sums to the same height, so the row stays flush. */
const columns: Member[][] = [
  [
    { name: "Eniola Olakunle", role: "Country Director", variant: "red", imageId: "team-1", ar: "5:8", aspect: "aspect-[3/4]" },
    { name: "Adeola Adedara", role: "Finance Manager", variant: "blue", imageId: "team-2", ar: "10:9", aspect: "aspect-[3/2]" },
  ],
  [
    { name: "Demilade Adekunle", role: "Marketing Manager", variant: "blue", imageId: "team-5", ar: "4:5", aspect: "aspect-square" },
    { name: "Favour Bassey", role: "Human Resource Manager", variant: "red", imageId: "team-8", ar: "1:1", aspect: "aspect-square" },
  ],
  [
    { name: "Toluwalase Agbetuyi", role: "Product Operations Manager", variant: "red", imageId: "team-3", ar: "3:2", aspect: "aspect-[3/2]" },
    { name: "Sabatha Joshua", role: "Expansions and PR Manager", variant: "blue", imageId: "team-6", ar: "6:9", aspect: "aspect-[3/4]" },
  ],
  [
    { name: "Atiradeoluwa Olaoye", role: "Partnerships Manager", variant: "blue", imageId: "team-7", ar: "1:1", aspect: "aspect-square" },
    { name: "Ajayi Israel", role: "Programs Manager", variant: "red", imageId: "team-4", ar: "4:6", aspect: "aspect-square" },
  ],
];

/* MOBILE — a single column of uniform, near-square cards in the exact order the
 * mobile design stacks them, with plate colours alternating red/blue down the
 * column. Plates stay visible (touch has no hover). Job titles are kept
 * consistent with the desktop design. */
const mobileOrder: Member[] = [
  { name: "Eniola Olakunle", role: "Country Director", variant: "red", imageId: "team-1", ar: "7:11", aspect: "aspect-[9/10]" },
  { name: "Adeola Adedara", role: "Finance Manager", variant: "blue", imageId: "team-2", ar: "11:10", aspect: "aspect-[9/10]" },
  { name: "Toluwalase Agbetuyi", role: "Product Operations Manager", variant: "red", imageId: "team-3", ar: "11:10", aspect: "aspect-[9/10]" },
  { name: "Ajayi Israel", role: "Programs Manager", variant: "blue", imageId: "team-4", ar: "3:5", aspect: "aspect-[9/10]" },
  { name: "Demilade Adekunle", role: "Marketing Manager", variant: "red", imageId: "team-5", ar: "6:10", aspect: "aspect-[9/10]" },
  { name: "Sabatha Joshua", role: "Expansions and PR Manager", variant: "blue", imageId: "team-6", ar: "7:10", aspect: "aspect-[9/10]" },
  { name: "Atiradeoluwa Olaoye", role: "Partnerships Manager", variant: "red", imageId: "team-7", ar: "11:10", aspect: "aspect-[9/10]" },
  { name: "Favour Bassey", role: "Human Resource Manager", variant: "blue", imageId: "team-8", ar: "8:10", aspect: "aspect-[9/10]" },
];

/** One team photo with its scalloped name plate. Mobile cards reveal the plate
 *  while fully visible; the desktop bento reveals it on hover. */
function Photo({
  member,
  hover = false,
  desktop = false,
  desktopCompanion = false,
  revealOnScroll = false,
  hovered = false,
  onPointerEnter,
  onPointerLeave,
}: {
  member: Member;
  hover?: boolean;
  desktop?: boolean;
  desktopCompanion?: boolean;
  revealOnScroll?: boolean;
  hovered?: boolean;
  onPointerEnter?: (pointerType: string) => void;
  onPointerLeave?: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [centeredInViewport, setCenteredInViewport] = useState(false);
  useEffect(() => {
    const card = cardRef.current;
    if (!revealOnScroll || !card) return;

    const updateVisibility = () => {
      const bounds = card.getBoundingClientRect();
      const fullyVisible = bounds.top >= 0 && bounds.bottom <= window.innerHeight;
      const cardCenter = bounds.top + bounds.height / 2;
      const screenCenter = window.innerHeight / 2;
      setCenteredInViewport(fullyVisible && Math.abs(cardCenter - screenCenter) <= 48);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [revealOnScroll]);

  const active = revealOnScroll && centeredInViewport;
  const plateVisible = active || hovered;

  return (
    <div
      ref={cardRef}
      onPointerEnter={(event) => onPointerEnter?.(event.pointerType)}
      onPointerLeave={onPointerLeave}
      className={`group relative block w-full overflow-hidden rounded-2xl text-left transition-[aspect-ratio] duration-500 ease-out ${
        desktop
          ? `${desktopCompanion ? "aspect-[3/2]" : "aspect-square"} hover:z-20 hover:aspect-[3/4]`
          : "aspect-[310/330]"
      }`}
    >
      <CloudImage
        id={member.imageId}
        alt={member.name}
        crop="fill"
        ar={member.ar}
        gravity="face"
        className={`w-full object-cover ${
          desktop
            ? "absolute inset-0 h-full aspect-[3/2] transition-transform duration-500 ease-out group-hover:scale-[1.02] group-focus-visible:scale-[1.02]"
            : member.aspect
        }`}
      />
      <div
        className={
          hover
            ? `absolute inset-x-0 bottom-0 transition-all duration-300 ease-out ${plateVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100"}`
            : `absolute inset-x-0 bottom-0 transition-transform duration-300 ease-out ${active ? "translate-y-0" : "translate-y-full"}`
        }
      >
        <WavyLabel name={member.name} role={member.role} variant={member.variant} className="[&>svg]:h-[24.64px] [&>div]:h-[79.86px] [&_p:first-child]:text-xl [&_p:first-child]:font-bold [&_p:first-child]:leading-8 [&_p:last-child]:font-medium lg:[&>svg]:h-[29px] lg:[&>div]:h-[94px] lg:[&_p:first-child]:text-2xl" />
      </div>
    </div>
  );
}

/** "We are led by the right people" — the staggered team photo grid. */
export default function TeamGrid() {
  const [hoveredDesktopMember, setHoveredDesktopMember] = useState<string | null>(null);
  const mobileGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let settleTimer: ReturnType<typeof setTimeout> | null = null;
    let settling = false;
    let previousScrollY = window.scrollY;

    const settleNearestCard = (scrollDirection: "up" | "down") => {
      if (settling || !mobileGridRef.current || window.innerWidth >= 1024) return;

      const cards = Array.from(mobileGridRef.current.children);
      const viewportCenter = window.innerHeight / 2;
      const firstCard = cards[0] as HTMLElement | undefined;
      const lastCard = cards.at(-1) as HTMLElement | undefined;
      const nearestCard = cards.reduce<HTMLElement | null>((nearest, child) => {
        const card = child as HTMLElement;
        const distance = Math.abs(
          card.getBoundingClientRect().top +
            card.getBoundingClientRect().height / 2 -
            viewportCenter,
        );
        if (!nearest) return card;
        const nearestDistance = Math.abs(
          nearest.getBoundingClientRect().top +
            nearest.getBoundingClientRect().height / 2 -
            viewportCenter,
        );
        return distance < nearestDistance ? card : nearest;
      }, null);

      if (!nearestCard) return;
      const nearestBounds = nearestCard.getBoundingClientRect();
      if (
        scrollDirection === "down" &&
        nearestCard === lastCard &&
        nearestBounds.top + nearestBounds.height / 2 < viewportCenter
      ) {
        return;
      }
      if (
        scrollDirection === "up" &&
        nearestCard === firstCard &&
        nearestBounds.top + nearestBounds.height / 2 > viewportCenter
      ) {
        return;
      }

      const bounds = mobileGridRef.current.getBoundingClientRect();
      if (bounds.bottom <= 0 || bounds.top >= window.innerHeight) return;

      settling = true;
      nearestCard.scrollIntoView({ behavior: "smooth", block: "center" });
      setTimeout(() => {
        settling = false;
      }, 500);
    };

    const handleScroll = () => {
      if (settleTimer) clearTimeout(settleTimer);
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY >= previousScrollY ? "down" : "up";
      previousScrollY = currentScrollY;
      settleTimer = setTimeout(() => settleNearestCard(scrollDirection), 140);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (settleTimer) clearTimeout(settleTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-white px-4 py-10 lg:px-20 lg:pt-5 lg:pb-20">
      <h2 className="text-center text-2xl font-extrabold leading-[135%] tracking-[-1%] text-[#00000e] md:text-5xl md:leading-[120%]">
        We are led by the right people with the right skills
      </h2>

      {/* Mobile: reveal each plate only while the full portrait is in view. */}
      <div ref={mobileGridRef} className="mx-auto mt-6 flex w-full max-w-[310px] flex-col gap-[25px] lg:hidden">
        {mobileOrder.map((member) => (
          <Photo
            key={member.imageId}
            member={member}
            revealOnScroll
          />
        ))}
      </div>

      {/* Desktop: staggered bento, plates reveal on hover */}
      <div className="mx-auto mt-12 hidden max-w-[1352px] grid-cols-4 gap-5 lg:grid lg:items-start">
        {columns.map((col, i) => (
          <div key={i} className="flex flex-col gap-5">
            {col.map((member) => (
              <Photo
                key={member.imageId}
                member={member}
                hover
                desktop
                desktopCompanion={
                  hoveredDesktopMember !== null &&
                  col.some((columnMember) => columnMember.imageId === hoveredDesktopMember) &&
                  member.imageId !== hoveredDesktopMember
                }
                hovered={hoveredDesktopMember === member.imageId}
                onPointerEnter={(pointerType) => {
                  if (pointerType !== "touch") setHoveredDesktopMember(member.imageId);
                }}
                onPointerLeave={() => {
                  setHoveredDesktopMember((current) => current === member.imageId ? null : current);
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
