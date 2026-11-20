import Hero from "@/components/Hero";
import OgxBanner from "@/components/ogx/OgxBanner";
import ProgramSection from "@/components/ogx/ProgramSection";

export default function OgxPage() {
  return (
    <>
      <Hero
        align="center"
        segments={[
          { type: "text", value: "Your degree gets you started." },
          { type: "break" },
          { type: "typewriter", words: ["Global experience"], highlight: true },
          { type: "text", value: " sets you apart." },
        ]}
        description="Find verified internships, teaching placements, and social impact projects abroad with AIESEC in Nigeria"
        cta={{ label: "Get Started", href: "/ogx/apply" }}
        className="flex w-full max-w-none! flex-col items-center bg-aiesec-section px-4! pt-6! pb-10! lg:px-20! lg:pt-15! lg:pb-8.75!
          [&>h1]:mx-auto [&>h1]:w-full [&>h1]:max-w-89.5 [&>h1]:text-subheading! [&>h1]:leading-[1.35] [&>h1]:tracking-[-0.01em] [&>h1]:text-aiesec-heading
          lg:[&>h1]:max-w-257.5 lg:[&>h1]:text-adaptive-60! lg:[&>h1]:font-bold lg:[&>h1]:leading-[1.2] lg:[&>h1]:tracking-[-0.02em]
          [&_.bg-aiesec-highlight]:bg-aiesec-blue/10 [&_.bg-aiesec-highlight]:px-0 [&_.bg-aiesec-highlight]:py-0
          [&>p]:mt-2 [&>p]:min-h-18 [&>p]:w-full [&>p]:max-w-89.5 [&>p]:text-body! [&>p]:leading-[1.5] [&>p]:tracking-[-0.01em] [&>p]:text-aiesec-gray
          lg:[&>p]:mt-4 lg:[&>p]:min-h-21 lg:[&>p]:max-w-225 lg:[&>p]:text-hero-subtitle lg:[&>p]:text-adaptive-32! lg:[&>p]:leading-[1.3] lg:[&>p]:tracking-[-0.03em]
          [&>a]:mt-5 [&>a]:h-10.75 [&>a]:w-32.5 [&>a]:gap-2 [&>a]:rounded-pill [&>a]:px-6 [&>a]:py-3 [&>a]:text-base [&>a]:leading-[1.1875]
          lg:[&>a]:mt-10 lg:[&>a]:h-17 lg:[&>a]:w-46 lg:[&>a]:px-8 lg:[&>a]:py-4 lg:[&>a]:text-adaptive-24 lg:[&>a]:leading-[1.5] lg:[&>a]:tracking-[-0.01em]"
      />

      <OgxBanner />

      {/* What is Outgoing Global Exchange? */}
      <section className="bg-aiesec-section px-4 py-12.5 lg:px-20 lg:py-21">
        <div className="mx-auto grid max-w-338 items-start gap-5 lg:grid-cols-[551px_minmax(0,1fr)] lg:gap-6">
          <h2 className="text-subheading leading-[1.35] tracking-[-0.01em] text-aiesec-heading lg:text-adaptive-48 lg:leading-[1.2]">
            What is Outgoing Global Exchange?
          </h2>
          <div className="text-body leading-[1.5] text-aiesec-gray lg:text-adaptive-24 lg:leading-[1.5]">
            <p>
              Outgoing Global Exchange (OGX) is an AIESEC experience that gives
              young people the opportunity to travel abroad, gain practical
              experience, develop new skills, and experience different cultures.
            </p>
            <p className="mt-1.25 lg:mt-9">
              Through opportunities such as{" "}
              <span className="font-bold text-aiesec-heading">
                Global Volunteer, Global Talent, and Global Teacher,
              </span>{" "}
              you can step outside your comfort zone, connect with people from
              around the world, and grow personally and professionally while
              creating meaningful impact.
            </p>
          </div>
        </div>
      </section>

      <div id="programs">
        <ProgramSection
          id="global-volunteer"
          accent="#f85a40"
          tint="#ffefec"
          title="Global Volunteer"
          badgeId="gv"
          paragraphs={[
            "Global Volunteer gives you the opportunity to step out of Nigeria and lead change on a global scale by connecting you to vetted social impact projects abroad.",
            "You get to join a social impact project, work alongside people from different backgrounds, and address real community needs, from education and sustainability to inclusion and youth development.",
            "Along the way, you'll develop leadership, teamwork, communication, and problem-solving skills while experiencing a new culture, build a global network, and create an impact you can bring back to Nigeria.",
          ]}
          detail={{
            lead: "6-8 Weeks.",
            rest: "Short-term volunteering on a social project. Open to students.",
          }}
          href="/ogx/apply"
          imageId="global-volunteer"
          imageAlt="AIESEC in Nigeria volunteers together abroad"
        />

        <ProgramSection
          id="global-talent"
          accent="#0cb9c1"
          tint="#e7f8f9"
          title="Global Talent"
          badgeId="gta"
          paragraphs={[
            "Global Talent is an international work experience designed for young Nigerians ready to take their career beyond borders.",
            "Through AIESEC in Nigeria, graduates, NYSC members, and early-career professionals access paid internships in leading global companies and startups.",
            "You'll work in high-growth fields like tech, business, and marketing, build practical cross-border competence, and return with a globally competitive profile that sets you apart at home.",
          ]}
          detail={{
            lead: "6+ Weeks.",
            rest: "Teaching placement in a classroom abroad. Graduates only.",
          }}
          href="/ogx/apply"
          imageId="global-talent"
          imageAlt="Young professional working on a laptop in an office abroad"
        />

        <ProgramSection
          id="global-teacher"
          accent="#f48924"
          tint="#fef4ea"
          title="Global Teacher"
          badgeId="gte"
          paragraphs={[
            "Global Teacher is an international teaching experience for young people who want to share their knowledge and get paid while doing that.",
            "Through AIESEC in Nigeria, Global Teacher offers young Nigerian educators and graduates paid placements in schools abroad.",
            "This experience gives you the opportunity to inspire others, grow professionally, and see the world from a completely different perspective.",
          ]}
          detail={{
            lead: "6+ Weeks.",
            rest: "Teaching placement in a classroom abroad. Graduates only.",
          }}
          href="/ogx/apply"
          imageId="global-teacher"
          imageAlt="Global Teacher participant teaching in a classroom abroad"
        />
      </div>
    </>
  );
}