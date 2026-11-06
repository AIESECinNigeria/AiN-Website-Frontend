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
    <section className="bg-aiesec-section py-10 lg:pt-25.75 lg:pb-28.25">
      <div className="px-4 lg:px-20">
        <h2 className="text-subheading text-aiesec-blue lg:text-rd-heading-02">Reviews</h2>
      </div>

      <div className="mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 lg:mt-12 lg:px-20 [scroll-padding-left:1rem] lg:[scroll-padding-left:5rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((review, index) => (
          <article
            key={`${review.imageId}-${index}`}
            className="relative h-100 w-77.5 shrink-0 snap-start overflow-hidden rounded-20 lg:h-134.75 lg:w-104.25"
          >
            <CloudImage
              id={review.imageId}
              alt={review.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 flex h-40.5 flex-col justify-end bg-linear-to-t from-black to-transparent p-5 lg:h-[179.67px] lg:from-black/75 lg:pb-5.25">
              <p className="text-xl font-extrabold leading-7 tracking-[-0.01em] text-white">{review.name}</p>
              <p className="text-body text-aiesec-neutral-100">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
