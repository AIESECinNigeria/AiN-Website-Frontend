import Link from "next/link";
import Hero from "@/components/Hero";
import CloudImage from "@/components/CloudImage";
import ArrowLink from "@/components/ui/ArrowLink";
import HeroBanner from "@/components/home/HeroBanner";
import StatsArc from "@/components/home/StatsArc";
import FeatureBand from "@/components/home/FeatureBand";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import BlogSection from "@/components/home/BlogSection";
import Faq from "@/components/home/Faq";

const partners = [
  "ain/home/partner-1",
  "ain/home/partner-2",
  "ain/home/partner-3",
  "ain/home/partner-4",
  "ain/home/partner-5",
  "ain/home/partner-6",
];

export default function HomePage() {
  return (
    <>
      <Hero
        align="center"
        segments={[
          { type: "text", value: "Connecting " },
          { type: "typewriter", words: ["Nigerian Youths"], highlight: true },
          { type: "break" },
          { type: "text", value: "to Life Changing Experiences." },
        ]}
        description="Your journey to global leadership starts here."
        cta={{ label: "Volunteer with Us", href: "/ogx" }}
        className="!py-10 lg:!py-14"
      />

      <HeroBanner />

      {/* Intro */}
      <section className="px-6 pt-16 lg:px-20 lg:pt-24">
        <p className="mx-auto max-w-4xl text-center text-2xl font-bold leading-[135%] tracking-[-1%] text-gray-900 lg:text-[2rem]">
          AIESEC is a global platform for young people to develop their leadership
          potential through international internships and volunteer opportunities.
          In Nigeria, we connect young Nigerians to local and global experiences that
          promote cultural understanding, develop socially responsible leaders, and
          create opportunities to make a positive impact through our International
          Exchange and Membership Program.
        </p>
        <div className="mt-8 text-center">
          <ArrowLink href="/about" className="text-aiesec-blue">
            Find Out More
          </ArrowLink>
        </div>
      </section>

      <StatsArc />

      {/* Partner With Us */}
      <section className="px-6 pb-12 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-[-1%] text-gray-900 lg:text-4xl">
            Partner With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-[150%] text-gray-500">
            Together, we can create opportunities that empower young people and drive
            meaningful change. Partner with AIESEC in Nigeria to support youth
            development, strengthen your organisation&rsquo;s impact, and build
            initiatives that leave a lasting legacy across Nigeria and beyond.
          </p>
          <Link
            href="/become-a-partner"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-aiesec-blue px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
          >
            Become a Partner
          </Link>
        </div>

        {/* Partner logos */}
        <div className="mx-auto mt-14 flex max-w-5xl flex-wrap items-center justify-center gap-x-12 gap-y-8 lg:justify-between">
          {partners.map((id) => (
            <CloudImage
              key={id}
              id={id}
              alt="Partner logo"
              className="h-9 w-28 object-contain opacity-70 grayscale"
            />
          ))}
        </div>
      </section>

      <FeatureBand
        variant="coral"
        title="Go global from Nigeria with AIESEC"
        href="/ogx"
        imageId="ain/home/go-global"
        imageAlt="AIESEC in Nigeria member speaking into a microphone"
        description="Explore the world, gain real experience, and connect across cultures. Our global exchange opportunities help young Nigerians grow their skills, broaden their perspectives, and make an impact beyond borders."
      />

      <FeatureBand
        variant="green"
        title="Volunteer in Nigeria with AIESEC"
        href="/programs/national-volunteer"
        imageId="ain/home/volunteer-nigeria"
        imageAlt="AIESEC in Nigeria volunteer speaking at a community event"
        description="Step beyond your city and make an impact where it matters. Volunteer in communities across Nigeria, gain meaningful experience, meet people from different backgrounds, and contribute to causes that matter."
      />

      <ReviewsCarousel />

      <BlogSection />

      <Faq />
    </>
  );
}
