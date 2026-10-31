"use client";
import { useState } from "react";
import CloudImage from "@/components/CloudImage";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question: "What is YSF about?",
    answer:
      "It is a youth-led forum where young people and leaders discuss key global issues and SDGs, and explore solutions for impact.",
  },

  {
    id: 2,
    question: "Who can attend YSF?",
    answer:
      "YSF is open to young people, students, graduates, and young professionals. AIESEC membership is not a requirement.",
  },

  {
    id: 3,
    question: "Where will YSF hold?",
    answer:
      "YSF 2026 will hold in Lagos Nigeria.",
  },

  {
    id: 4,
    question: "Is registration free?",
    answer:
      "Yes, registration is free for all participants. To register, click the Register Now button above.",
  },
];

const YSFFAQ = () => {
  const [activeItem, setActiveItem] =
    useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeItem === index) {
      setActiveItem(null);
      return;
    }

    setActiveItem(index);
  };

  return (
    <section className="bg-black py-16 md:py-20">

      <div className="max-w-6xl mx-auto px-8">

        {/* Heading */}

        <h2
          className="text-2xl md:text-5xl text-white font-semibold font-body leading-[120%] mb-4"
        >
          Frequently asked questions
         <span className="font-playfair bg-gradient-to-r from-[#7552CC] via-[#0CB9C1] to-[#00C16E] text-transparent bg-clip-text italic"> (FAQs)</span>
        </h2>

        {/* <p
          className="
          text-white
         text-lg md:text-2xl
          leading-[150%] tracking-[-2%]
         mb-5 md:mb-20
          font-body
        "
        >
        This year, we are bringing a set of diverse speakers from various backgrounds to come speak on Zero Hunger (SDG 2), No Poverty (SDG 1), Decent Work & Economic Growth (SDG 8).
        </p> */}

{/* FAQ LIST */}

<div className="flex flex-col items-center mt-10">

  {faqData.map((item, index) => {

    const isOpen =
      activeItem === index;

    return (

      <div
        key={item.id}
        className="
        w-full
        flex
        flex-col
        items-center
        mb-6
      "
      >

        {/* QUESTION */}

        <div
          className="
          w-full
          flex
         justify-end md:justify-center
          "
        >

          <div
            onClick={() =>
              toggleFAQ(index)
            }
            className="
            relative
            bg-[#6144B0]
            px-4
            py-4
            rounded-lg
            cursor-pointer w-[80%]
            "
          >

            <p
              className="
              text-white
             text-base md:text-xl
              font-body font-medium
              leading-[120%] tracking-[-2%]
              whitespace-wrap text-right
              "
            >

              {item.id}.{" "}
              {item.question}

            </p>

            <CloudImage
              id="YSFQuestionCurve"
              alt=""
              className="
              absolute
              right-[-30px]
              bottom-[10px]
              w-[32px]
              "
            />

          </div>

        </div>

        {/* ANSWER */}

        {isOpen && (

          <div
            className="
            w-full
            flex
           justify-start md:justify-center
            mt-6
            "
          >

            <div
              className="
              relative
              bg-white
              px-4
              py-4
              rounded-lg w-[80%] mr-28
              "
            >

              <p
                className="
                text-[#6144B0]
                text-base md:text-xl
                leading-[120%] tracking-[-2%] font-medium
                font-body
                "
              >

                {item.answer}

              </p>

              <CloudImage
                id="YSFAnswerCurve"
                alt=""
                className="
                absolute
                 left-[-30px]
              bottom-[10px]
                w-[32px]
                "
              />

            </div>

          </div>

        )}

      </div>

    );

  })}

</div>

        {/* CTA */}

        {/* <div className="
        flex
        justify-center
        mt-8
        ">

          <button
            className="
            bg-white
            text-[#6144B0]
            px-12
            py-4
            rounded-full
            font-body
            text-xl font-medium leading-[120%] tracking-[-2%]
          "
          >
            Got more questions?
          </button>

        </div> */}

      </div>

    </section>
  );
};

export default YSFFAQ;
