import Link from "next/link";
import CloudImage from "@/components/CloudImage";
import StatsArc from "@/components/home/StatsArc";

const currentPartners = [
  "partner-trailblaze.svg",
  "partner-sycamore.svg",
  "partner-cocreation.svg",
  "partner-timon.svg",
  "partner-drench.svg",
  "partner-nestle.svg",
];

const previousPartners = [
  "prev-abc-transport",
  "prev-oraimo",
  "prev-rise",
  "prev-unicaf",
  "prev-piggyvest",
  "prev-paradigm",
  "prev-uac",
  "prev-rite",
  "prev-hemolife",
  "prev-nutrisnax",
];

export default function BecomeAPartnerPage() {
  return (
    <>
      <StatsArc
        stats={[
          { value: "11,000+", label: "youths" },
          { value: "500+", label: "volunteers" },
          { value: "20+", label: "cities" },
        ]}
      />

      {/* Come Partner With Us */}
      <section className="px-6 pb-16 pt-4 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-[-1%] text-gray-900 lg:text-5xl">
            <span className="hidden lg:inline">Come </span>Partner With Us
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-[150%] text-gray-500">
            Together, we can create opportunities that empower young people and drive
            meaningful change. Partner with AIESEC in Nigeria to support youth
            development, strengthen your organisation&rsquo;s impact, and build
            initiatives that leave a lasting legacy across Nigeria and beyond.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-aiesec-blue px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-aiesec-blue/90"
          >
            Become a Partner
          </Link>
        </div>
      </section>

      {/* Current Partners */}
      <section className="px-6 pb-16 lg:px-20">
        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Current Partners</h2>
        <div className="mt-10 grid grid-cols-2 items-center justify-items-center gap-x-10 gap-y-12 lg:flex lg:flex-wrap lg:justify-between">
          {currentPartners.map((id) => (
            <CloudImage
              key={id}
              id={id}
              alt="Current partner logo"
              className="h-11 w-32 object-contain lg:h-14 lg:w-40"
            />
          ))}
        </div>
      </section>

      {/* Previous Partners */}
      <section className="px-6 pb-20 lg:px-20">
        <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">Previous Partners</h2>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 items-center justify-items-center gap-x-10 gap-y-14 sm:grid-cols-3 lg:grid-cols-5">
          {previousPartners.map((id) => (
            <CloudImage
              key={id}
              id={id}
              alt="Previous partner logo"
              className="h-11 w-28 object-contain lg:h-12 lg:w-32"
            />
          ))}
        </div>
      </section>
    </>
  );
}
