import CloudImage from "@/components/CloudImage";
import WavyLabel from "@/components/ui/WavyLabel";

interface Member {
  name: string;
  role: string;
  variant: "red" | "blue";
  imageId: string;
  aspect: string;
}

const team: Member[] = [
  { name: "Eniola Olakunle", role: "Country Director", variant: "red", imageId: "ain/about/team-1", aspect: "aspect-[3/4]" },
  { name: "Adeola Adedara", role: "Finance Manager", variant: "blue", imageId: "ain/about/team-2", aspect: "aspect-[4/5]" },
  { name: "Toluwalase Agbetuyi", role: "Programs Manager", variant: "red", imageId: "ain/about/team-3", aspect: "aspect-square" },
  { name: "Ajayi Israel", role: "Product Operations Manager", variant: "blue", imageId: "ain/about/team-4", aspect: "aspect-[3/4]" },
  { name: "Demilade Adekunle", role: "Marketing Manager", variant: "red", imageId: "ain/about/team-5", aspect: "aspect-[4/5]" },
  { name: "Sabatha Joshua", role: "Expansions and PR Manager", variant: "blue", imageId: "ain/about/team-6", aspect: "aspect-[3/4]" },
  { name: "Atiradeoluwa Olaoye", role: "Partnerships Manager", variant: "red", imageId: "ain/about/team-7", aspect: "aspect-square" },
  { name: "Favour Bassey", role: "Human Resource Manager", variant: "blue", imageId: "ain/about/team-8", aspect: "aspect-[3/4]" },
];

/** "We are led by the right people" — a masonry of team photos. The name plate
 *  is always visible on mobile and reveals on hover on desktop. */
export default function TeamGrid() {
  return (
    <section className="px-6 py-16 lg:px-20 lg:py-20">
      <h2 className="text-center text-3xl font-bold leading-[120%] tracking-[-1%] text-gray-900 lg:text-[2.5rem]">
        We are led by the right people with the right skills
      </h2>

      <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-4">
        {team.map((member) => (
          <article
            key={member.name}
            className="group relative mb-5 break-inside-avoid overflow-hidden rounded-2xl"
          >
            <CloudImage
              id={member.imageId}
              alt={member.name}
              className={`w-full object-cover ${member.aspect}`}
            />
            <div className="absolute inset-x-0 bottom-0 transition-all duration-300 ease-out lg:translate-y-full lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
              <WavyLabel name={member.name} role={member.role} variant={member.variant} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
