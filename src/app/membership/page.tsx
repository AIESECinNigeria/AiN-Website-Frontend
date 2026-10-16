import Focus from "@/components/Membership/Focus";
import Reviews from "@/components/Membership/Reviews";
import RecruitmentTicker from "@/components/Membership/RecruitmentTicker";
import ScrollRevealHero from "@/components/Membership/ScrollRevealHero";
import type { ScatteredPhoto } from "@/components/Membership/ScrollRevealHero";

const photos: ScatteredPhoto[] = [
  { imageId: "membership-1", alt: "", top: "0%", left: "0%", width: "16%", aspectRatio: "10/9", delay: 0 },
  { imageId: "membership-2", alt: "", top: "2%", left: "23%", width: "12%", aspectRatio: "5/4", delay: 1 },
  { imageId: "membership-3", alt: "", top: "10%", left: "40%", width: "10%", aspectRatio: "4/5", delay: 2 },
  { imageId: "membership-4", alt: "", top: "0%", left: "64%", width: "19%", aspectRatio: "5/4", delay: 3 },
  { imageId: "membership-5", alt: "", top: "30%", left: "0%", width: "16%", aspectRatio: "5/4", delay: 4 },
  { imageId: "membership-6", alt: "", top: "28%", left: "83%", width: "17%", aspectRatio: "4/5", delay: 5 },
  { imageId: "membership-7", alt: "", top: "52%", left: "27%", width: "9%", aspectRatio: "3/4", delay: 6 },
  { imageId: "membership-8", alt: "", top: "62%", left: "0%", width: "19%", aspectRatio: "4/5", delay: 7 },
  { imageId: "membership-9", alt: "", top: "68%", left: "40%", width: "8%", aspectRatio: "1/1", delay: 8 },
  { imageId: "membership-10", alt: "", top: "58%", left: "52%", width: "17%", aspectRatio: "4/5", delay: 9 },
  { imageId: "membership-11", alt: "", top: "60%", left: "74%", width: "21%", aspectRatio: "5/4", delay: 10 },
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