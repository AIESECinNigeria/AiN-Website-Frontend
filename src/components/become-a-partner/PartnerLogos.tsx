import Image from "next/image";

interface PartnerLogo {
  name: string;
  src: string;
}

const currentPartners: PartnerLogo[] = [
  { name: "TrailBlaze Africa", src: "/partners/trailblaze-africa.svg" },
  { name: "Sycamore", src: "/partners/sycamore.svg" },
  { name: "Co-creation Hub", src: "/partners/co-creation-hub.svg" },
  { name: "Timon", src: "/partners/timon.svg" },
  { name: "drenchy", src: "/partners/drenchy.svg" },
  { name: "Nestle", src: "/partners/nestle.svg" },
];

const previousPartners: PartnerLogo[] = [
  { name: "ABC Transport", src: "/partners/abc-transport.svg" },
  { name: "Oraimo", src: "/partners/oraimo.svg" },
  { name: "Rise", src: "/partners/rise.svg" },
  { name: "UNICAF", src: "/partners/unicaf.svg" },
  { name: "PiggyVest", src: "/partners/piggyvest.svg" },
  { name: "Paradigm Initiative", src: "/partners/paradigm-initiative.svg" },
  { name: "UAC", src: "/partners/uac.svg" },
  { name: "Rite", src: "/partners/rite.svg" },
  { name: "Hemelife", src: "/partners/hemelife.svg" },
  { name: "NutriSnax", src: "/partners/nutrisnax.svg" },
];

function LogoGrid({ logos }: { logos: PartnerLogo[] }) {
  return (
    <div className="grid grid-cols-3 gap-x-8 gap-y-8 sm:grid-cols-4 lg:grid-cols-6">
      {logos.map((logo) => (
        <div key={logo.name} className="relative aspect-5/2 w-full">
          <Image
            src={logo.src}
            alt={logo.name}
            fill
            sizes="16vw"
            className="object-contain object-left"
          />
        </div>
      ))}
    </div>
  );
}

export default function PartnerLogos() {
  return (
    <section className="px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-extrabold text-black leading-[120%] tracking-[-1%] sm:text-3xl">Current Partners</h3>
          <LogoGrid logos={currentPartners} />
        </div>

        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-extrabold text-black leading-[120%] tracking-[-1%] sm:text-3xl">Previous Partners</h3>
          <LogoGrid logos={previousPartners} />
        </div>
      </div>
    </section>
  );
}