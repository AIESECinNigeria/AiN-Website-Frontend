"use client";

import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What is AIESEC?",
    answer:
      "AIESEC is a global youth-led organisation that develops leadership through volunteering, internships, and membership experiences. In Nigeria, we connect young people to opportunities to learn, lead, and make an impact locally and globally.",
  },
  {
    question: "What opportunities does AIESEC offer?",
    answer:
      "We offer international exchanges — Global Volunteer, Global Talent, and Global Teacher — as well as national volunteering and a membership programme where you build leadership through real, hands-on work.",
  },
  {
    question: "Who can participate in an AIESEC exchange?",
    answer:
      "Young people, typically between 18 and 30, including students, graduates, and NYSC members. Specific eligibility depends on the programme you choose.",
  },
  {
    question: "How do I apply for an international exchange?",
    answer:
      "Create a profile on aiesec.org, choose an opportunity that fits your goals, and our team in Nigeria will guide you through selection, preparation, and departure.",
  },
  {
    question: "Is AIESEC in my city?",
    answer:
      "AIESEC is present in 15+ cities across Nigeria. Check the locations section on our About page to find the entity closest to you.",
  },
  {
    question: "Who can become a member of AIESEC in Nigeria?",
    answer:
      "Any young person who wants to develop their leadership can join. We welcome members from all backgrounds and fields of study.",
  },
  {
    question: "Do I need previous experience to become a member?",
    answer:
      "No. You don't need prior experience — just the drive to learn and lead. We provide the training, mentorship, and hands-on projects to help you grow.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <section className="bg-aiesec-section px-4 py-10 lg:px-20 lg:py-21">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,431px)_minmax(0,664px)] lg:justify-between lg:gap-13">
        <h2 className="max-w-84.5 text-subheading text-aiesec-blue lg:max-w-none lg:text-fluid-48 lg:leading-[1.2] lg:tracking-[-0.01em]">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="flex flex-col gap-6 bg-white lg:gap-4 lg:bg-transparent">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={
                  isOpen
                    ? "rounded-2xl bg-aiesec-blue p-4 text-white lg:p-5"
                    : "text-aiesec-neutral-950 lg:text-aiesec-heading"
                }
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className={`flex w-full cursor-pointer items-center justify-between gap-4 text-left text-xl font-semibold leading-6 lg:text-fluid-24 lg:leading-[1.3333] lg:tracking-[-0.01em] ${
                    isOpen ? "text-white" : "lg:min-h-16 lg:px-5 lg:py-4"
                  }`}
                >
                  <span>{faq.question}</span>
                  <span className="shrink-0 lg:[&>svg]:size-8">
                    {isOpen ? (
                      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
                        <path d="M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth={2} strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-4 text-body text-white">{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
