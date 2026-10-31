import React from "react";
import CloudImage from "@/components/CloudImage";

interface ReviewItem {
  id: number;
  image: string;
  name: string;
  review: string;
}

const reviewData: ReviewItem[] = [
  {
    id: 1,
    image: 'Review1',
    name: "Ebunoluwa",
    // role: "AIESEC Alumni",

    review:
      "YSF creates a unique space where young people come together to discuss issues that affect our daily lives and the world around us while exploring solutions that drives change. I am glad to have interacted with inspiring young people, connected with changemakers, and engaged in meaningful conversations that challenge perspectives and inspire action.",
  },

  {
    id: 2,
    image: 'Review2',
    name: "Shitta-Bey",
    // role: "AIESEC in Akure",

    review:
      "I have attended at least 3 out of the 5 YSFs and each year AIESEC in Nigeria delivers significant experiences. Last year’s ‘Mic On’ stood out to me. There’s just something powerful about watching young people find their voice and lead disruptively with it. I appreciated the deliberate focus on expression, influence and creating spaces where young people could speak with confidence.",
  },

  {
    id: 3,
    image: 'Review3',
    name: "Tofa",
    // role: "AIESEC in Akure",

    review:
      "Climate action is something I’ve cared about for a while, and YSF was the rare space where that interest met the global sustainability push with depth. The biggest takeaway honestly was the network. Change on the scale that’s needed needs every hand on deck and YSF actively pulls those hands into one room.",
  },
];

const YSFReviews = () => {
  return (
    <section className="bg-white py-20">

      <div className="mx-auto px-8">

        <div className="
        grid
        lg:grid-cols-[1fr_1.8fr]
       gap-10 md:gap-20
        items-center
        ">

          {/* Left */}

          <div className="">

            <h2
              className="text-2xl md:text-5xl font-semibold leading-[120%] font-body text-black"
            >
              Reviews from
              <br />
           <span className="font-playfair bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E] text-transparent bg-clip-text italic">previous editions</span>
            </h2>

          </div>

          {/* Right */}

          <div className="flex flex-col gap-6">

            {reviewData.map(
              (item) => (

              <div
                key={item.id}
                className="
                relative
                border
                border-[#6144B0]
                rounded-md
                p-4
                flex
                items-start
                gap-5
                "
              >

                {/* Avatar */}
                <div className="">
                <CloudImage
                  id={item.image}
                  alt={item.name}
                  className="
                  object-cover
                  shrink-0 w-16 h-16 md:w-full md:h-full
                  "
                />
                </div>
                {/* Content */}

                <div className="flex-1">

                  <div
                    className="
                    mb-2
                   text-xl md:text-2xl
                    font-body
                  "
                  >

                    <span className="
                    text-[#6144B0]
                    font-semibold
                    ">
                      {item.name}
                    </span>

                    {/* <span className="
                    text-[#1A1A1A] opacity-50 font-semibold
                    ">
                      {" "}
                      | {item.role}
                    </span> */}

                  </div>

                  <p
                    className="
                   text-lg
                    leading-[120%] tracking-[-2%]
                    text-[#363636]
                    font-body
                  "
                  >
                    {item.review}
                  </p>

                </div>

                {/* Quote */}

                <div
                  className="
                  absolute
                  top-4
                  right-5
                  text-[#898989] opacity-20
                  text-[96px]
                  font-bold font-body
                  leading-none
                "
                >
                  ”
                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default YSFReviews;
