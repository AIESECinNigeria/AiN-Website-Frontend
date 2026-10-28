import Focus from "@/components/Membership/Focus";
import Reviews from "@/components/Membership/Reviews";
import RecruitmentTicker from "@/components/Membership/RecruitmentTicker";
import ScrollRevealHero from "@/components/Membership/ScrollRevealHero";
import type { ScatteredPhoto } from "@/components/Membership/ScrollRevealHero";

const photos: ScatteredPhoto[] = [
  { id: "membership-8", alt: "AIESEC members", top: "0%", left: "0%", width: "16%", aspectRatio: "10/9", delay: 0, mobile: { top: "2%", left: "4%", width: "19%" } },
  { id: "membership-11", alt: "AIESEC members", top: "2%", left: "23%", width: "12%", aspectRatio: "5/4", delay: 1, mobile: { top: "5%", left: "42%", width: "16%" } },
  { id: "membership-6", alt: "AIESEC members", top: "10%", left: "40%", width: "10%", aspectRatio: "4/5", delay: 2, mobile: { top: "3%", left: "76%", width: "18%" } },
  { id: "membership-7", alt: "AIESEC members", top: "0%", left: "64%", width: "19%", aspectRatio: "5/4", delay: 3, mobile: { top: "20%", left: "18%", width: "17%" } },
  { id: "membership-10", alt: "AIESEC members", top: "30%", left: "0%", width: "16%", aspectRatio: "5/4", delay: 4, mobile: { top: "21%", left: "63%", width: "17%" } },
  { id: "membership-3", alt: "AIESEC members", top: "28%", left: "83%", width: "17%", aspectRatio: "4/5", delay: 5, mobile: { top: "72%", left: "5%", width: "18%" } },
  { id: "membership-2", alt: "AIESEC members", top: "62%", left: "0%", width: "19%", aspectRatio: "4/5", delay: 7, mobile: { top: "72%", left: "76%", width: "18%" } },
  { id: "membership-9", alt: "AIESEC members", top: "56%", left: "27%", width: "8%", aspectRatio: "1/1", delay: 8, mobile: { top: "88%", left: "19%", width: "15%" } },
  { id: "membership-7", alt: "AIESEC members", top: "68%", left: "40%", width: "9%", aspectRatio: "3/4", delay: 6, mobile: { top: "72%", left: "42%", width: "15%" } },
  { id: "membership-4", alt: "AIESEC members", top: "58%", left: "52%", width: "17%", aspectRatio: "4/5", delay: 9, mobile: { top: "88%", left: "60%", width: "16%" } },
  { id: "membership-5", alt: "AIESEC members", top: "60%", left: "74%", width: "21%", aspectRatio: "5/4", delay: 10, mobile: { top: "96%", left: "83%", width: "14%" } },
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
