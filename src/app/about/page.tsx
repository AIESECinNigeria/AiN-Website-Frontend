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
        className="!py-12 lg:!py-16"
      />

      <CategoryCards />

      {/* Intro */}
      <section className="mt-6 bg-[#fafafa] px-6 py-16 lg:py-24">
        <p className="mx-auto max-w-4xl text-center text-2xl font-bold leading-[140%] tracking-[-1%] text-gray-900 lg:text-[2rem]">
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
