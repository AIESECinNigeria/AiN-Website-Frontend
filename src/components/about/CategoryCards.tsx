import CloudImage from "@/components/CloudImage";

interface Category {
  label: string;
  imageId: string;
}

const categories: Category[] = [
  { label: "Since 1961", imageId: "ain/about/category-since-1961" },
  { label: "Impacting Youths", imageId: "ain/about/category-impacting-youths" },
  { label: "Across Nigeria", imageId: "ain/about/category-across-nigeria" },
  { label: "Beyond Borders", imageId: "ain/about/category-beyond-borders" },
];

/** Four tall photo cards with a white label at the base. Horizontal scroll on
 *  mobile, a four-up row on desktop. */
export default function CategoryCards() {
  return (
    <section className="py-6">
      <div className="flex snap-x gap-4 overflow-x-auto px-6 pb-2 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => (
          <article
            key={category.label}
            className="relative aspect-[3/4] w-[72vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl lg:w-auto lg:max-w-none"
          >
            <CloudImage
              id={category.imageId}
              alt={category.label}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent p-5 pt-16">
              <p className="text-2xl font-bold text-white">{category.label}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
