import React from "react";
import { motion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Understand", desc: "Gain clarity on your current financial position." },
  { num: "02", title: "Learn", desc: "Build the knowledge to make informed decisions." },
  { num: "03", title: "Plan", desc: "Create a structured strategy aligned to your goals." },
  { num: "04", title: "Implement", desc: "Put your plan into action with professional support." },
  { num: "05", title: "Review", desc: "Track progress and adapt as circumstances evolve." },
];

export default function ProcessSection() {
  return (
    <section className="bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-medium text-secondary">
            The Process
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className="text-center"
            >
              <span className="inline-block font-poppins text-xs font-semibold text-primary mb-3 tracking-widest">
                {step.num}
              </span>
              <h3 className="font-poppins text-base font-medium text-secondary mb-2">
                {step.title}
              </h3>
              <p className="font-inter text-xs text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}