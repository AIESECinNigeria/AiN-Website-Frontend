// components/Membership/Reviews.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

interface Review {
  name: string;
  role: string;
  quote: string;
  photo: string;
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
    photo: "/reviews/fadlu.jpg",
    color: "orange",
  },
  {
    name: "Chinazam Ikechukwu",
    role: "AIESEC in Akure",
    quote:
      "AIESEC gave me my first experience of how a well-structured organisation works. It taught me how to collaborate with people from different backgrounds and work towards shared goals.",
    photo: "/reviews/eniola.jpg",
    color: "blue",
  },
  {
    name: "Edith Nkemakonam Enebeli",
    role: "AIESEC in Benin",
    quote:
      "I joined AIESEC because I wanted to meet more people and do something outside of Statistics. Now, to me, AIESEC is not just an organisation, it’s community and growth.",
    photo: "/reviews/fadlu.jpg",
    color: "orange",
  },
  {
    name: "Eniola Olakunle",
    role: "AIESEC in Ibadan",
    quote:
      "AIESEC gave me my first experience of how a well-structured organisation works.",
    photo: "/reviews/eniola.jpg",
    color: "blue",
  },
  {
    name: "Fadlu",
    role: "AIESEC in Ilorin",
    quote:
      "AIESEC is easily one of the best decisions I have made and I regret not joining earlier. I found a family that I wasn't looking for and I didn't know I needed.",
    photo: "/reviews/fadlu.jpg",
    color: "orange",
  },
];

function ReviewCard({ review }: { review: Review }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-[50vh] md:h-[60vh] w-[60%] md:w-[68%] cursor-pointer shrink-0 snap-start overflow-hidden rounded-2xl bg-black sm:w-[46%] sm:rounded-3xl lg:w-[calc((100%-4.5rem)/3.5)]"
    >
      <Image
        src={review.photo}
        alt={review.name}
        fill
        sizes="(min-width: 1024px) 25vw, (min-width: 640px) 46vw, 68vw"
        className="object-cover"
      />
{/* default state */}
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 via-black/20 to-transparent px-3 pb-3 pt-8 sm:px-5 sm:pb-5 sm:pt-12">
        <h3 className="text-lg font-bold text-white md:text-xl leading-7">{review.name}</h3>
            <p className="text-base text-[#EEEEEE] md:text-xl">{review.role}</p>
      </div>

{/* hover state */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 transition-transform duration-500 ease-out ${
          hovered ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <Image
          src={ReviewBg[review.color]}
          alt=""
          className="block w-full h-auto"
        />
        <div className="absolute inset-0 flex flex-col justify-end gap-1.5 px-3 pb-3 pt-2 sm:gap-3 sm:px-5 sm:pb-5">
          <p className="text-base text-white md:text-xl leading-[150%] tracking-[-1%] line-clamp-4">
            {review.quote}
          </p>
          <div>
            <h3 className="text-lg font-bold text-white md:text-xl leading-7">{review.name}</h3>
            <p className="text-base text-[#EEEEEE] md:text-xl">{review.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Reviews() {
  return (
    <section className="py-10 sm:py-16 lg:py-24">
      <h2 className="mb-6 px-4 text-[28px] font-extrabold leading-[130%] tracking-[-1%] text-aiesec-blue sm:mb-10 sm:px-6 sm:text-4xl lg:px-20 lg:text-5xl">
        Reviews from Members
      </h2>

      <div
        className="flex touch-pan-x snap-x snap-mandatory gap-3 overflow-x-auto pb-4 sm:gap-6 sm:px-6 lg:px-20 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        style={{ overscrollBehaviorX: "contain" }}
      >
        {reviews.map((review, index) => (
          <ReviewCard key={`${review.name}-${index}`} review={review} />
        ))}
      </div>
    </section>
  );
}