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
    skills: ["Planning", "Coordination", "Communication", "Project Management"],
  },
  {
    title: "Marketing",
    description:
      "Use your creativity and analytical skills to create promotional campaigns to attract customers to our programmes, events, and initiatives. You'll brainstorm ideas and collaborate to make them happen.",
    skills: ["Brand Management", " Data Analysis", "Social Media", "Campaign Planning"],
  },
  {
    title: "Partnerships & Business Development",
    description:
      "Build relationships with organisations and businesses to create opportunities for young people to lead and grow.",
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
          className="text-2xl font-extrabold text-aiesec-blue sm:text-3xl lg:text-5xl leading-[120%] tracking-[-1%]"
        >
          Our Focus
        </motion.h2>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 bg-[#FCFCFC]">
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
              className="rounded-3xl cursor-pointer bg-white p-4 shadow-sm lg:p-8 flex flex-col gap-4"
            >
              <h3 className="text-lg font-bold text-[#00000E] lg:text-2xl">
                {area.title}
              </h3>
              <p className="text-xl leading-[150%] text-[#5C5C5C]">
                {area.description}
              </p>
              <p className="text-xl italic font-medium text-[#00000E]">
                {area.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}