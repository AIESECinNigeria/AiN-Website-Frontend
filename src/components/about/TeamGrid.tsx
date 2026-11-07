"use client";

import { useState } from "react";
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

/** One team photo with its scalloped name plate. Mobile cards toggle on tap;
 *  the desktop bento continues to reveal its plate on hover. */
function Photo({
  member,
  hover = false,
  desktop = false,
  desktopCompanion = false,
  active = false,
  hovered = false,
  onToggle,
  onPointerEnter,
  onPointerLeave,
}: {
  member: Member;
  hover?: boolean;
  desktop?: boolean;
  desktopCompanion?: boolean;
  active?: boolean;
  hovered?: boolean;
  onToggle?: () => void;
  onPointerEnter?: (pointerType: string) => void;
  onPointerLeave?: () => void;
}) {
  const plateVisible = active || hovered;

  return (
    <button
      type="button"
      aria-label={`${plateVisible ? "Hide" : "Show"} ${member.name}'s details`}
      aria-expanded={plateVisible}
      onClick={onToggle}
      onPointerEnter={(event) => onPointerEnter?.(event.pointerType)}
      onPointerLeave={onPointerLeave}
      className={`group relative block w-full cursor-pointer overflow-hidden rounded-2xl text-left transition-[aspect-ratio] duration-500 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-aiesec-blue ${
        desktop
          ? `${desktopCompanion ? "aspect-[323/219]" : member.imageId === "team-1" || member.imageId === "team-6" ? "aspect-[323/427]" : member.imageId === "team-2" || member.imageId === "team-3" ? "aspect-[323/219]" : "aspect-square"} hover:z-20 hover:aspect-[323/427] focus-visible:z-20 focus-visible:aspect-[323/427]`
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
        <WavyLabel name={member.name} role={member.role} variant={member.variant} className="[&>svg]:-mb-[6px] [&>svg]:h-[24.64px] [&>div]:h-[79.86px] [&>div]:justify-start [&>div]:pt-[2px] [&_p:first-child]:text-xl [&_p:first-child]:font-bold [&_p:first-child]:leading-8 [&_p:first-child]:tracking-[-0.01em] [&_p:last-child]:mt-0 [&_p:last-child]:font-medium [&_p:last-child]:tracking-[-0.01em] [&_p:last-child]:text-[#eeeeee] lg:[&>svg]:-mb-[7px] lg:[&>svg]:h-[29px] lg:[&>div]:h-[94px] lg:[&>div]:pt-3 lg:[&_p:first-child]:text-2xl" />
      </div>
    </button>
  );
}

/** "We are led by the right people" — the staggered team photo grid. */
export default function TeamGrid() {
  const [activeMobileMember, setActiveMobileMember] = useState<string | null>(null);
  const [activeDesktopMember, setActiveDesktopMember] = useState<string | null>(null);
  const [hoveredDesktopMember, setHoveredDesktopMember] = useState<string | null>(null);

  return (
    <section className="bg-white px-4 py-10 lg:px-20 lg:pt-5 lg:pb-20">
      <h2 className="text-center text-2xl font-extrabold leading-[135%] tracking-[-0.01em] text-[#00000e] md:text-5xl md:leading-[120%]">
        We are led by the right people with the right skills
      </h2>

      {/* Mobile: tap a portrait to raise its plate; tap it again to lower it. */}
      <div className="mx-auto mt-6 flex w-full max-w-[310px] flex-col gap-[25px] lg:hidden">
        {mobileOrder.map((member) => (
          <Photo
            key={member.imageId}
            member={member}
            active={activeMobileMember === member.imageId}
            onToggle={() => setActiveMobileMember((current) => current === member.imageId ? null : member.imageId)}
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
                active={activeDesktopMember === member.imageId}
                hovered={hoveredDesktopMember === member.imageId}
                onPointerEnter={(pointerType) => {
                  if (pointerType !== "touch") setHoveredDesktopMember(member.imageId);
                }}
                onPointerLeave={() => {
                  setHoveredDesktopMember((current) => current === member.imageId ? null : current);
                }}
                onToggle={() => setActiveDesktopMember((current) => current === member.imageId ? null : member.imageId)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
