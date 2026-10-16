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
    <section className="px-6 py-16 lg:px-20 lg:py-24">
      <div className="mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-[28px] font-extrabold text-aiesec-blue sm:text-4xl lg:text-5xl leading-[130%] tracking-[-1%]"
        >
          Our Focus
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
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
              className="flex cursor-pointer flex-col gap-3 rounded-2xl bg-[#FAFAFA] p-6 lg:p-8"
            >
              <h3 className="text-lg font-bold text-[#00000E] lg:text-xl">
                {area.title}
              </h3>
              <p className="text-base leading-[150%] text-[#5C5C5C] lg:text-[17px]">
                {area.description}
              </p>
              <p className="text-sm font-medium italic text-[#00000E] lg:text-[15px]">
                {area.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}