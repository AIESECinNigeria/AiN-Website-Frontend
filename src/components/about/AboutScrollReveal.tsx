"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function AboutScrollReveal({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.6 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.p>
  );
}
