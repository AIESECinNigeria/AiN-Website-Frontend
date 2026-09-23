import ScrollRevealHero from "@/components/Membership/ScrollRevealHero";
import type { ScatteredPhoto } from "@/components/Membership/ScrollRevealHero";

const photos: ScatteredPhoto[] = [
  { src: "/gallery/m1.jpg", alt: "", top: "0%", left: "0%", width: "16%", aspectRatio: "10/9", delay: 0 },
  { src: "/gallery/m2.jpg", alt: "", top: "2%", left: "23%", width: "12%", aspectRatio: "5/4", delay: 1 },
  { src: "/gallery/m3.jpg", alt: "", top: "10%", left: "40%", width: "10%", aspectRatio: "4/5", delay: 2 },
  { src: "/gallery/m4.jpg", alt: "", top: "0%", left: "64%", width: "19%", aspectRatio: "5/4", delay: 3 },
  { src: "/gallery/m5.jpg", alt: "", top: "30%", left: "0%", width: "16%", aspectRatio: "5/4", delay: 4 },
  { src: "/gallery/m6.jpg", alt: "", top: "28%", left: "83%", width: "17%", aspectRatio: "4/5", delay: 5 },
  { src: "/gallery/m7.jpg", alt: "", top: "52%", left: "27%", width: "9%", aspectRatio: "3/4", delay: 6 },
  { src: "/gallery/m8.jpg", alt: "", top: "62%", left: "0%", width: "19%", aspectRatio: "4/5", delay: 7 },
  { src: "/gallery/m9.jpg", alt: "", top: "68%", left: "40%", width: "8%", aspectRatio: "1/1", delay: 8 },
  { src: "/gallery/m10.jpg", alt: "", top: "58%", left: "52%", width: "17%", aspectRatio: "4/5", delay: 9 },
  { src: "/gallery/m11.jpg", alt: "", top: "60%", left: "74%", width: "21%", aspectRatio: "5/4", delay: 10 },
];

export default function MembershipPage() {
  return (
    <main>
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
      </section>
    </main>
  );
}