import CloudImage from "@/components/CloudImage";

interface Review {
  name: string;
  role: string;
  imageId: string;
}

const reviews: Review[] = [
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-1" },
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-2" },
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-3" },
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-4" },
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-5" },
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "review-6" },
];

export default function ReviewsCarousel() {
  return (
    <section className="py-14 lg:py-20">
      <div className="px-6 lg:px-20">
        <h2 className="text-2xl md:text-5xl font-bold text-aiesec-blue">Reviews</h2>
      </div>

      <div className="mt-8 flex snap-x snap-mandatory gap-[25px] overflow-x-auto pb-4 pl-6 lg:pl-20 [scroll-padding-left:1.5rem] lg:[scroll-padding-left:5rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((review, index) => (
          <article
            key={`${review.imageId}-${index}`}
            className="relative h-[460px] w-[82vw] max-w-[416px] shrink-0 snap-start overflow-hidden rounded-[20px] sm:h-[500px] sm:w-[360px] lg:h-[528px] lg:w-[416px]"
          >
            <CloudImage
              id={review.imageId}
              alt={review.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-6 pt-16">
              <p className="text-xl font-bold text-white">{review.name}</p>
              <p className="mt-0.5 text-sm text-white/85">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
