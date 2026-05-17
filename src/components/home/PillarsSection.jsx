import React from "react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    num: "01",
    title: "Financial Planning",
    desc: "Understand your full financial position and build a structured plan aligned to your goals and responsibilities.",
  },
  {
    num: "02",
    title: "Financial Education",
    desc: "Learn the key concepts required to make informed financial decisions with clarity and confidence.",
  },
  {
    num: "03",
    title: "Implementation",
    desc: "Where required, strategies are implemented through a regulated financial advice process.",
  },
];

export default function PillarsSection() {
  return (
    <section>
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative bg-muted border border-border/50 rounded-lg p-8 overflow-hidden group"
            >
              <span className="absolute top-4 right-4 font-poppins text-6xl font-bold text-secondary/[0.04] select-none">
                {pillar.num}
              </span>
              <h3 className="font-poppins text-xl font-medium text-secondary mb-3 relative z-10">
                {pillar.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed relative z-10">
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}