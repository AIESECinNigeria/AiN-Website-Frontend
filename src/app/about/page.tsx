import Hero from "@/components/Hero";
import CategoryCards from "@/components/about/CategoryCards";
import TeamGrid from "@/components/about/TeamGrid";
import LocationsMap from "@/components/about/LocationsMap";

export default function AboutPage() {
  return (
    <>
      <Hero
        align="center"
        segments={[
          { type: "text", value: "A youth organisation" },
          { type: "break" },
          { type: "typewriter", words: ["on a mission."], highlight: true },
        ]}
        description="Imagine a community where young Nigerians lead, grow, and create impact through meaningful experiences. That's AIESEC in Nigeria."
        className="w-full !max-w-none !px-4 !pt-6 !pb-0 [&>h1]:mx-auto [&>h1]:max-w-[222px] [&>h1]:text-2xl [&>h1]:leading-[135%] [&>h1]:tracking-[-0.01em] [&>h1]:text-[#00000e] [&>h1>span:first-child]:whitespace-nowrap [&>h1>span.inline-block]:py-0 [&>p]:mt-4 [&>p]:w-full [&>p]:max-w-[358px] [&>p]:text-base [&>p]:font-medium [&>p]:leading-6 [&>p]:tracking-[-0.01em] [&>p]:text-[#5c5c5c] lg:!px-20 lg:!pt-20 lg:!pb-[53px] lg:[&>h1]:max-w-[1030px] lg:[&>h1]:text-[60px] lg:[&>h1]:font-bold lg:[&>h1]:leading-[120%] lg:[&>h1]:tracking-[-0.02em] lg:[&>p]:mt-4 lg:[&>p]:max-w-[1008px] lg:[&>p]:text-[32px] lg:[&>p]:leading-[130%]"
      />

      <CategoryCards />

      {/* Intro */}
      <section className="mt-0 bg-[#fcfcfc] px-4 py-10 lg:px-20 lg:py-20">
        <p className="mx-auto max-w-[358px] text-center text-xl font-extrabold leading-[150%] tracking-[-0.01em] text-[#222222] lg:max-w-[1026px] lg:text-[40px] lg:leading-[150%] lg:text-[#1D2129]">
          AIESEC is a global platform for young people to develop their
          leadership potential through international internships and volunteer
          opportunities. In Nigeria, we connect young Nigerians to local and
          global experiences that promote cultural understanding, develop
          socially responsible leaders, and create opportunities to make a
          positive impact through our International Exchange and Membership
          Program.
        </p>
      </section>

      <TeamGrid />

      <LocationsMap />
    </>
  );
}
