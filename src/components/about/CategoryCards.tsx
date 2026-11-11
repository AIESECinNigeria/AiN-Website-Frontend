import CloudImage from "@/components/CloudImage";

interface Category {
  label: string;
  imageId: string;
}

const categories: Category[] = [
  { label: "Since 1961", imageId: "category-since-1961" },
  { label: "Impacting Youths", imageId: "category-impacting-youths" },
  { label: "Across Nigeria", imageId: "category-across-nigeria" },
  { label: "Beyond Borders", imageId: "category-beyond-borders" },
];

/** Four tall photo cards with a white label at the base. Horizontal scroll on
 *  mobile, a four-up row on desktop. */
export default function CategoryCards() {
  return (
    <section className="pt-8 pb-0 lg:pt-0 lg:pb-5">
      <div className="flex snap-x gap-5 overflow-x-auto px-4 pb-2 [scroll-padding-left:1rem] lg:grid lg:grid-cols-4 lg:gap-5 lg:overflow-visible lg:px-20 lg:[scroll-padding-left:0] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <article
            key={category.label}
            className="relative h-[340px] w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl lg:@container lg:h-[400px] lg:w-auto"
          >
            <CloudImage
              id={category.imageId}
              alt={category.label}
              crop="fill"
              ar="4:5"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-[120px] items-end bg-gradient-to-t from-black/75 to-transparent p-5">
              <p
                className="whitespace-nowrap text-2xl font-extrabold leading-[135%] text-white lg:text-fluid-32 lg:leading-[1.2] lg:tracking-[-0.01em] @min-[346px]:text-4xl"
              >
                {category.label}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
