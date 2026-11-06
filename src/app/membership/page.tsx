import Focus from "@/components/Membership/Focus";
import Reviews from "@/components/Membership/Reviews";
import RecruitmentTicker from "@/components/Membership/RecruitmentTicker";
import ScrollRevealHero from "@/components/Membership/ScrollRevealHero";
import type { ScatteredPhoto } from "@/components/Membership/ScrollRevealHero";

// Positions are normalized to the desktop and mobile collage dimensions.
const photos: ScatteredPhoto[] = [
  { id: "membership-8", alt: "AIESEC members", top: "0%", left: "0%", width: "19.5106%", aspectRatio: "295/258", delay: 0, mobile: { top: "24.1167%", left: "-7.9487%", width: "24.1026%" } },
  { id: "membership-11", alt: "AIESEC members", top: "0%", left: "28.9021%", width: "9.5899%", aspectRatio: "145/156", delay: 1, mobile: { top: "6.6052%", left: "7.6923%", width: "22.0513%" } },
  { id: "membership-6", alt: "AIESEC members", top: "7.943%", left: "50%", width: "9.5238%", aspectRatio: "144/156", delay: 2, mobile: { top: "10.9063%", left: "45.3846%", width: "20.2564%" } },
  { id: "membership-7", alt: "AIESEC members", top: "0%", left: "68.5847%", width: "19.5106%", aspectRatio: "295/248", delay: 3, mobile: { top: "13.3641%", left: "77.6923%", width: "23.7179%", aspectRatio: "295/311", src: "/images/membership-group-mobile.webp" } },
  { id: "membership-10", alt: "AIESEC members", top: "35.8452%", left: "2.0503%", width: "16.8651%", aspectRatio: "255/242", delay: 4, mobile: { top: "52.5346%", left: "-5.3846%", width: "21.4282%" } },
  { id: "membership-3", alt: "AIESEC members", top: "32.9939%", left: "81.6799%", width: "18.3201%", aspectRatio: "277/270", delay: 5, mobile: { top: "41.0138%", left: "94.6154%", width: "22.2692%" } },
  { id: "membership-2", alt: "AIESEC members", top: "70.9776%", left: "4.7619%", width: "19.5106%", aspectRatio: "295/285", delay: 7, mobile: { top: "71.4393%", left: "-10.4%", width: "24.7897%", aspectRatio: "96.68/94.5" } },
  { id: "membership-9", alt: "AIESEC members", top: "58.4521%", left: "28.9021%", width: "6.6138%", aspectRatio: "100/119", delay: 8, mobile: { top: "0%", left: "72.0513%", width: "9.2308%" } },
  { id: "membership-1", alt: "AIESEC members", top: "79.8371%", left: "36.9709%", width: "9.9206%", aspectRatio: "150/170", delay: 6, mobile: { top: "79.6329%", left: "32.4077%", width: "13.9949%" } },
  { id: "membership-4", alt: "AIESEC members", top: "63.9511%", left: "50.9921%", width: "17.5926%", aspectRatio: "266/300", delay: 9, mobile: { top: "70.914%", left: "56.2872%", width: "24.8154%" } },
  { id: "membership-5", alt: "AIESEC members", top: "70.9776%", left: "74.1402%", width: "21.2302%", aspectRatio: "321/285", delay: 10, mobile: { top: "64.2089%", left: "92.8205%", width: "29.9462%", aspectRatio: "321/336" } },
];

export default function MembershipPage() {
  return (
    <main className = "bg-white">
      <RecruitmentTicker />
      <section aria-labelledby="membership-heading">
        <ScrollRevealHero
          photos={photos}
          segments={[
            { type: "text", value: "Join over " },
            { type: "typewriter", words: ["1,000 Nigerian youths"], highlight: true },
            { type: "break" },
            { type: "text", value: "to volunteer and lead." },
          ]}
          cta={{ label: "Join Waitlist", href: "/waitlist" }}
        />
        <Focus />
        <Reviews />
      </section>
    </main>
  );
}
