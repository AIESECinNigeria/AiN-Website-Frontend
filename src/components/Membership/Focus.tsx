"use client";
import { motion } from "framer-motion";

interface FocusArea {
  title: string;
  description: string;
  skills: string[];
}

const focusAreas: FocusArea[] = [
  {
    title: "Programme Management",
    description:
      "Support youth from your city to connect with experiences abroad. You'll work with AIESEC offices overseas and help guide young people who choose to take up an AIESEC exchange experience.",
    skills: ["Sales", "Planning", "Coordination", "Communication", "Project Management"],
  },
  {
    title: "Marketing",
    description:
      "Use your creativity and analytical skills to create promotional campaigns to attract customers to our programmes, events, and initiatives. You'll brainstorm ideas and collaborate to make them happen.",
    skills: ["Brand Management", "Data Analysis", "Social Media", "Campaign Planning"],
  },
  {
    title: "Partnerships & Business Development",
    description:
      "Work with organisations and individuals to create meaningful opportunities and support AIESEC in Nigeria's growth. Gain real-world experience through engaging with external stakeholders.",
    skills: ["Communication", "Negotiation", "Sales", "Relationship Building"],
  },
  {
    title: "Finance",
    description:
      "Develop practical skills in budgeting, financial planning, compliance, and decision-making while contributing to growth. You’ll manage finances and support AIESEC in Nigeria’s financial sustainability.",
    skills: ["Financial Management", "Compliance", "Risk Management", "Attention to Detail"],
  },
  {
    title: "Human Resources",
    description:
      "Design training and development plans, track performance, and create systems that celebrate achievement as well as recruit new people into your local team.",
    skills: ["People Management", "Communication", "Recruitment"],
  },
  {
    title: "Sales Operation",
    description:
      "Work on corporate or non-corporates sales by engaging local companies and organisations to create internships, projects, or events for youth. You'll manage client relationships and help interns settle in your city.",
    skills: ["Sales", "Customer Service", "Project Management", "Relationship Management"],
  },
];

export default function Focus() {
  return (
    <section className="bg-white px-4 py-10 lg:px-20">
      <div className="mx-auto max-w-[1352px]">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-subheading text-aiesec-blue lg:text-rd-heading-02"
        >
          Our Focus
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-3.5 lg:mt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
          {focusAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.2,
              }}
              className="flex cursor-pointer flex-col gap-4 rounded-2xl bg-aiesec-section p-4 [&:last-child>p]:text-[15px] lg:min-h-[205px] lg:[&:nth-child(3)]:w-[calc(100%+4px)] lg:[&:nth-child(5)]:mr-2 lg:[&:nth-child(6)]:ml-2 lg:[&:last-child>p]:text-xl"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold leading-[120%] text-aiesec-heading lg:text-2xl lg:font-bold lg:tracking-[-0.03em]">
                  {area.title}
                </h3>
                <p className="text-body text-aiesec-gray lg:text-xl lg:leading-normal">
                  {area.description}
                </p>
              </div>
              <p className="text-body font-normal italic text-aiesec-heading lg:text-xl lg:leading-normal">
                {area.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
