import CloudImage from "@/components/CloudImage";

interface Review {
  name: string;
  role: string;
  imageId: string;
}

const reviews: Review[] = [
  { name: "Eniola Olakunle", role: "Global Volunteer, Benin Republic", imageId: "ain/home/review-1" },
  { name: "Chidi Nwankwo", role: "Global Talent, Ghana", imageId: "ain/home/review-2" },
  { name: "Aisha Bello", role: "Global Volunteer, Kenya", imageId: "ain/home/review-3" },
  { name: "Tunde Bakare", role: "Global Teacher, Egypt", imageId: "ain/home/review-4" },
  { name: "Ngozi Eze", role: "Global Volunteer, Rwanda", imageId: "ain/home/review-5" },
  { name: "Samuel Adeyemi", role: "Global Talent, Morocco", imageId: "ain/home/review-6" },
];

export default function ReviewsCarousel() {
  return (
    <section className="py-14 lg:py-20">
      <div className="px-6 lg:px-20">
        <h2 className="text-3xl font-bold text-aiesec-blue lg:text-4xl">Reviews</h2>
      </div>

      <div className="mt-8 flex snap-x gap-5 overflow-x-auto px-6 pb-4 lg:px-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {reviews.map((review) => (
          <article
            key={review.imageId}
            className="relative w-[78vw] max-w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[300px]"
          >
            <CloudImage
              id={review.imageId}
              alt={review.name}
              className="h-[380px] w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent p-5 pt-14">
              <p className="text-lg font-bold text-white">{review.name}</p>
              <p className="text-sm text-white/85">{review.role}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
