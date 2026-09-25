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
        cta={{ label: "Get Started", href: "#programs" }}
        className="!py-12 lg:!py-16"
      />

      <OgxBanner />

      {/* What is Outgoing Global Exchange? */}
      <section className="px-6 py-16 lg:px-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 lg:text-[2.5rem]">
            What is Outgoing Global Exchange?
          </h2>
          <div className="text-[15px] leading-[175%] text-gray-600 lg:text-base">
            <p>
              Outgoing Global Exchange (OGX) is an AIESEC experience that gives
              young people the opportunity to travel abroad, gain practical
              experience, develop new skills, and experience different cultures.
            </p>
            <p className="mt-6">
              Through opportunities such as{" "}
              <span className="font-bold text-gray-900">
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
          badgeBottom="Volunteer"
          paragraphs={[
            "Global Volunteer gives you the opportunity to step out of Nigeria and lead change on a global scale by connecting you to vetted social impact projects abroad.",
            "You get to join a social impact project, work alongside people from different backgrounds, and address real community needs, from education and sustainability to inclusion and youth development.",
            "Along the way, you'll develop leadership, teamwork, communication, and problem-solving skills while experiencing a new culture, build a global network, and create an impact you can bring back to Nigeria.",
          ]}
          detail={{
            lead: "6-8 Weeks.",
            rest: "Short-term volunteering on a social project. Open to students.",
          }}
          href="/apply/global-volunteer"
          imageId="ain/ogx/global-volunteer"
          imageAlt="AIESEC in Nigeria volunteers together abroad"
        />

        <ProgramSection
          id="global-talent"
          accent="#0cb9c1"
          tint="#e7f8f9"
          title="Global Talent"
          badgeBottom="Talent"
          paragraphs={[
            "Global Talent is an international work experience designed for young Nigerians ready to take their career beyond borders.",
            "Through AIESEC in Nigeria, graduates, NYSC members, and early-career professionals access paid internships in leading global companies and startups.",
            "You'll work in high-growth fields like tech, business, and marketing, build practical cross-border competence, and return with a globally competitive profile that sets you apart at home.",
          ]}
          detail={{
            lead: "6-78 Weeks.",
            rest: "Teaching placement in a classroom abroad. Graduates only.",
          }}
          href="/apply/global-talent"
          imageId="ain/ogx/global-talent"
          imageAlt="Young professional working on a laptop in an office abroad"
        />

        <ProgramSection
          id="global-teacher"
          accent="#f48924"
          tint="#fef4ea"
          title="Global Teacher"
          badgeBottom="Teacher"
          paragraphs={[
            "Global Teacher is an international teaching experience for young people who want to share their knowledge and get paid while doing that.",
            "Through AIESEC in Nigeria, Global Teacher offers young Nigerian educators and graduates paid placements in schools abroad.",
            "This experience gives you the opportunity to inspire others, grow professionally, and see the world from a completely different perspective.",
          ]}
          detail={{
            lead: "6-78 Weeks.",
            rest: "Teaching placement in a classroom abroad. Graduates only.",
          }}
          href="/apply/global-teacher"
          imageId="ain/ogx/global-teacher"
          imageAlt="Global Teacher participant teaching in a classroom abroad"
        />
      </div>
    </>
  );
}
