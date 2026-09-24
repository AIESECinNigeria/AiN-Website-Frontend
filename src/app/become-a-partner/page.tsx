import PartnerHeroVisual from "@/components/become-a-partner/Hero";
import PartnerLogos from "@/components/become-a-partner/PartnerLogos";
import Hero from "@/components/Hero";

export default function PartnerPage() {
  return (
    <main>
      <PartnerHeroVisual />
      <Hero
        align="center"
        segments={[{ type: "text", value: "Come Partner With Us" }]}
        description="Together, we can create opportunities that empower young people and drive meaningful change. Partner with AIESEC in Nigeria to support youth development, strengthen your organisation's impact, and build initiatives that leave a lasting legacy across Nigeria and beyond."
        cta={{ label: "Become a Partner", href: "/partner/apply" }}
      />
      <PartnerLogos />
    </main>
  );
}