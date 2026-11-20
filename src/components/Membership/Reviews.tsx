// components/Membership/Reviews.tsx
"use client";
import { useState } from "react";
import CloudImage from "@/components/CloudImage";
import WavyLabel from "@/components/ui/WavyLabel";
import { membershipReviews, type Review } from "./review-data";

function ReviewCard({ review }: { review: Review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-100 w-[310px] cursor-pointer flex-shrink-0 snap-start overflow-hidden rounded-20 bg-black lg:h-[539px] lg:w-[417px]"
    >
      <CloudImage
        id={review.photoId}
        alt={review.name}
        crop="fill"
        ar={review.ar}
        gravity="face"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* default state: name/role over a plain dark scrim, no color */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-[162px] flex-col justify-end bg-linear-to-t from-black to-transparent px-5 pb-5 pt-22.5 lg:min-h-45 lg:from-black/75 lg:pb-[21px] lg:pt-[107px]">
        <p className="text-xl font-extrabold leading-7 tracking-[-0.01em] text-white">{review.name}</p>
        <p className="text-body text-aiesec-neutral-100">{review.role}</p>
      </div>

      {/* hover state: wavy plate with the quote slides up from below, hidden entirely otherwise */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 transition-transform duration-500 ease-out ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <WavyLabel
          name={review.name}
          role={review.role}
          variant={review.color}
          quote={review.quote}
        />
      </div>
    </div>
  );
}

interface ReviewsProps {
  /** Which set of reviews to show. Defaults to the membership page set. */
  reviews?: Review[];
  title?: string;
  /** Extra heading text shown only on large screens. */
  titleSuffix?: string;
  /** Extra classes for the section, for page-specific spacing. */
  className?: string;
}

export default function Reviews({
  reviews = membershipReviews,
  title = "Reviews",
  titleSuffix = " from Members",
  className = "",
}: ReviewsProps) {
  return (
    <section className={`bg-aiesec-section py-10 lg:mt-5.5 lg:pt-20 lg:pb-28.25 ${className}`}>
      <h2 className="mb-6 px-4 text-subheading text-aiesec-blue lg:mb-12 lg:px-20 lg:text-rd-heading-02">
        {title}
        <span className="hidden lg:inline">{titleSuffix}</span>
      </h2>

      <div
        className="flex touch-pan-x snap-x snap-mandatory gap-6 overflow-x-auto px-4 lg:px-20 [scroll-padding-left:1rem] lg:[scroll-padding-left:5rem] [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overscrollBehaviorX: "contain" }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </section>
  );
}