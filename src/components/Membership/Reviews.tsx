// components/Membership/Reviews.tsx
"use client";
import { useState } from "react";
import CloudImage from "@/components/CloudImage";

interface Review {
  name: string;
  role: string;
  quote: string;
  photoId: string;
  color: "orange" | "blue";
}

const ReviewBg = {
  blue: "/svgs/ReviewBgBlue.svg",
  orange: "/svgs/ReviewBgOrange.svg",
};

const reviews: Review[] = [
  {
    name: "Fadlu",
    role: "AIESEC in Ilorin",
    quote:
      "AIESEC is easily one of the best decisions I have made and I regret not joining earlier. I found a family that I wasn't looking for and I didn't know I needed.",
    photoId: "team-1",
    color: "orange",
  },
  {
    name: "Chinazam Ikechukwu",
    role: "AIESEC in Akure",
    quote:
      "AIESEC gave me my first experience of how a well-structured organisation works. It taught me how to collaborate with people from different backgrounds and work towards shared goals.",
    photoId: "membership-2",
    color: "blue",
  },
  {
    name: "Edith Nkemakonam Enebeli",
    role: "AIESEC in Benin",
    quote:
      "I joined AIESEC because I wanted to meet more people and do something outside of Statistics. Now, to me, AIESEC is not just an organisation, it’s community and growth.",
    photoId: "team-1",
    color: "orange",
  },
  {
    name: "Eniola Olakunle",
    role: "AIESEC in Ibadan",
    quote:
      "AIESEC gave me my first experience of how a well-structured organisation works.",
    photoId: "membership-2",
    color: "blue",
  },
  {
    name: "Fadlu",
    role: "AIESEC in Ilorin",
    quote:
      "AIESEC is easily one of the best decisions I have made and I regret not joining earlier. I found a family that I wasn't looking for and I didn't know I needed.",
    photoId: "fadlu",
    color: "orange",
  },
];

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
        ar="3:4"
        gravity="face"
        className="absolute inset-0 h-full w-full object-cover [&[src$='/team-1']]:origin-[28%_89%] [&[src$='/team-1']]:scale-119 [&[src$='/membership-2']]:brightness-80"
      />

      {/* default state: name/role over a plain dark scrim, no color */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex min-h-[162px] flex-col justify-end bg-linear-to-t from-black to-transparent px-5 pb-5 pt-22.5 lg:min-h-45 lg:from-black/75 lg:pb-[21px] lg:pt-[107px]">
        <p className="text-xl font-extrabold leading-7 tracking-[-0.01em] text-white">{review.name}</p>
        <p className="text-body text-aiesec-neutral-100">{review.role}</p>
      </div>

      {/* hover state: colored asset slides up from below, hidden entirely otherwise */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 transition-transform duration-500 ease-out ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <img src={ReviewBg[review.color]} alt="" className="block h-auto w-full" />
        <div className="absolute inset-0 flex flex-col justify-end gap-1.5 px-5 pb-5 pt-5 lg:gap-4 lg:pb-[21px] lg:pt-8">
          <p className="text-xs font-medium leading-snug tracking-[-0.01em] text-white lg:text-xl lg:leading-normal">
            {review.quote}
          </p>
          <div>
            <p className="text-xl font-extrabold leading-7 tracking-[-0.01em] text-white">{review.name}</p>
            <p className="text-body text-aiesec-neutral-100">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="bg-aiesec-section py-10 lg:mt-5.5 lg:pt-[103px] lg:pb-[113px]">
      <h2 className="mb-6 px-4 text-subheading text-aiesec-blue lg:mb-12 lg:px-20 lg:text-rd-heading-02">
        Reviews<span className="hidden lg:inline"> from Members</span>
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
