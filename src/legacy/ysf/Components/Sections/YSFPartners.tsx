import CloudImage from "@/components/CloudImage";

const YSFPartners = () => {
  const partners = [
    'ain/ysf/cchub',
    'ain/ysf/jci',
    'ain/ysf/My_farm_base',
    'ain/ysf/sahel',
    'ain/ysf/study_free',
    'ain/ysf/PartnerLogo',
  ];

  return (
    <section
      className="
      overflow-hidden
      pb-20 pt-4
      bg-gradient-to-b
      from-[#6144B0]
      via-[55%]
      to-[#000000]
    "
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className="
            text-white
            text-[24px]
            md:text-[28px]
            font-semibold
            font-body
            leading-[120%]
          "
          >
            Our Partners for 2026
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div className="flex animate-partner-scroll w-max">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="
  group
  flex
  items-center
  justify-center
  mx-12
  "
              >
                <div
                  className="
    relative w-[220px] h-[220px]
    md:w-[140px]
    md:h-[140px]
    flex
    items-center
    justify-center
    transition-all
    duration-500
    "
                >
                  {/* Hover background */}
                  <div
                    className="
      absolute
      inset-0
      rounded-full
      bg-white/5
      backdrop-blur-sm
      border
      border-white/20
      opacity-0
      scale-75
      transition-all
      duration-500
      group-hover:opacity-100
      group-hover:scale-100 group-hover:cursor-pointer
      "
                  />

                  <CloudImage
                    id={partner}
                    alt="Partner Logo"
                    className="
      max-w-[90px]
      object-contain
      relative
      z-10
      transition-all
      duration-500
      group-hover:scale-110
      "
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YSFPartners;
