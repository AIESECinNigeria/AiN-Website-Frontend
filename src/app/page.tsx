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
  "partner-nestle",
  "partner-trailblaze",
  "partner-sycamore",
  "partner-timon",
  "partner-cocreation",
  "partner-drench",
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
        className="flex w-full max-w-none! flex-col items-center bg-aiesec-section px-4! py-6! lg:px-20! lg:pt-12.25! lg:pb-12.5!
          [&>h1]:w-full [&>h1]:max-w-195.5 [&>h1]:text-subheading [&>h1]:font-extrabold [&>h1]:leading-[135%] [&>h1]:tracking-[-0.01em] [&>h1]:text-black
          lg:[&>h1]:text-fluid-60 lg:[&>h1]:font-bold lg:[&>h1]:leading-[1.2] lg:[&>h1]:tracking-[-0.02em]
          [&>p]:mt-2 [&>p]:w-full [&>p]:max-w-195.5 [&>p]:text-body [&>p]:tracking-[-0.01em] [&>p]:text-aiesec-gray
          lg:[&>p]:mt-4 lg:[&>p]:text-fluid-32 lg:[&>p]:leading-[1.3] lg:[&>p]:tracking-[-0.01em]
          [&>a]:mt-5 [&>a]:h-10.25 [&>a]:w-43.75 [&>a]:gap-2 [&>a]:rounded-pill [&>a]:px-6 [&>a]:py-3 [&>a]:text-base [&>a]:leading-4.75 [&>a]:tracking-normal [&>a]:whitespace-nowrap
          lg:[&>a]:mt-10 lg:[&>a]:h-17 lg:[&>a]:w-62.5 lg:[&>a]:px-8 lg:[&>a]:py-4 lg:[&>a]:text-rd-body-02 lg:[&>a]:leading-9 lg:[&>a]:tracking-[-0.01em]
          [&_.bg-aiesec-highlight]:relative [&_.bg-aiesec-highlight]:isolate [&_.bg-aiesec-highlight]:-mr-2 [&_.bg-aiesec-highlight]:h-7.5 [&_.bg-aiesec-highlight]:bg-transparent [&_.bg-aiesec-highlight]:py-0 [&_.bg-aiesec-highlight]:pl-0 [&_.bg-aiesec-highlight]:pr-1
          [&_.bg-aiesec-highlight]:before:absolute [&_.bg-aiesec-highlight]:before:top-0.75 [&_.bg-aiesec-highlight]:before:right-0 [&_.bg-aiesec-highlight]:before:-left-1 [&_.bg-aiesec-highlight]:before:-z-10 [&_.bg-aiesec-highlight]:before:h-full [&_.bg-aiesec-highlight]:before:bg-[#E3EFFB]
          lg:[&_.bg-aiesec-highlight]:-mr-6 lg:[&_.bg-aiesec-highlight]:h-18 lg:[&_.bg-aiesec-highlight]:pl-4 lg:[&_.bg-aiesec-highlight]:pr-4.5 lg:[&_.bg-aiesec-highlight]:before:top-0 lg:[&_.bg-aiesec-highlight]:before:left-0 lg:[&_.bg-aiesec-highlight]:before:bg-aiesec-blue/10
          [&_.animate-pulse]:absolute [&_.animate-pulse]:top-0.75 [&_.animate-pulse]:right-0 [&_.animate-pulse]:ml-0 [&_.animate-pulse]:h-full! [&_.animate-pulse]:w-1 lg:[&_.animate-pulse]:top-0 lg:[&_.animate-pulse]:w-1.5"
      />

      <HeroBanner />

      {/* Intro */}
      <section className="px-4 py-10 lg:p-20">
        <p className="mx-auto max-w-256.5 text-center text-xl font-extrabold leading-[150%] tracking-[-0.01em] text-aiesec-neutral-900 lg:text-[40px]">
          AIESEC is a global platform for young people to develop their leadership
          potential through international internships and volunteer opportunities.
          In Nigeria, we connect young Nigerians to local and global experiences that
          promote cultural understanding, develop socially responsible leaders, and
          create opportunities to make a positive impact through our International
          Exchange and Membership Program.
        </p>
        <div className="mt-6 flex justify-center lg:mt-10">
          <ArrowLink href="/about" className="gap-1.5! text-body font-bold! text-aiesec-blue lg:gap-3! lg:text-rd-body-02 lg:leading-6 [&>svg]:size-5 [&>svg]:overflow-visible [&>svg>path]:origin-center [&>svg>path]:scale-[1.15] lg:[&>svg]:size-4 lg:[&>svg>path]:scale-[1.8]">
            Find Out More
          </ArrowLink>
        </div>
      </section>

      <div className="landing-impact relative isolate overflow-hidden bg-white">
        <StatsArc />

      {/* Partner With Us */}
      <section className="relative px-4 pt-10 pb-25 lg:px-20 lg:pt-0 lg:pb-19">
        <div className="mx-auto max-w-202.25 text-center">
          <h2 className="text-subheading text-aiesec-heading lg:text-rd-heading-02">
            Partner With Us
          </h2>
          <p className="mt-2 text-body text-aiesec-gray lg:mt-3 lg:text-rd-body-02">
            Together, we can create opportunities that empower young people and drive
            meaningful change. Partner with AIESEC in Nigeria to support youth
            development, strengthen your organisation&rsquo;s impact, and build
            initiatives that leave a lasting legacy across Nigeria and beyond.
          </p>
          <Link
            href="/become-a-partner"
            className="mt-4 inline-flex h-11.75 w-41.5 items-center justify-center rounded-pill bg-aiesec-blue px-5 py-3.5 text-base font-medium leading-4.75 whitespace-nowrap text-white transition-colors hover:bg-aiesec-blue/90 lg:mt-6 lg:h-15.5 lg:w-54.5 lg:px-8 lg:py-5 lg:text-xl lg:font-normal lg:leading-5.5 lg:tracking-[-0.01em]"
          >
            Become a Partner
          </Link>
        </div>

        {/* Partner logos */}
        <div className="mx-auto mt-10 hidden h-20 max-w-331.75 items-center justify-between gap-6 lg:flex [&>img:nth-child(5)]:w-[178.8px]">
          {partners.map((id) => (
            <CloudImage
              key={id}
              id={id}
              alt="Partner logo"
              className="h-auto w-[119.2px] object-contain grayscale"
            />
          ))}
        </div>
      </section>
      </div>

      <FeatureBand
        variant="coral"
        title="Go global from Nigeria with AIESEC"
        href="/ogx"
        imageId="go-global"
        imageAlt="AIESEC in Nigeria member speaking into a microphone"
        description="Explore the world, gain real experience, and connect across cultures. Our global exchange opportunities help young Nigerians grow their skills, broaden their perspectives, and make an impact beyond borders."
      />

      <FeatureBand
        variant="green"
        title="Volunteer in Nigeria with AIESEC"
        href="/nv"
        imageId="volunteer-nigeria"
        imageFormat="webp"
        imageAlt="AIESEC in Nigeria volunteer speaking at a community event"
        description="Step beyond your city and make an impact where it matters. Volunteer in communities across Nigeria, gain meaningful experience, meet people from different backgrounds, and contribute to causes that matter."
      />

      <ReviewsCarousel />

      <BlogSection />

      <Faq />
    </>
  );
}
