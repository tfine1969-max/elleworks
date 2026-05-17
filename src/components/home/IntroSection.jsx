import React from "react";
import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-medium text-secondary leading-tight mb-6">
            A structured approach to financial confidence.
          </h2>
          <p className="font-inter text-lg text-muted-foreground leading-relaxed">
            Elleworks combines financial planning, education and implementation within a professional advisory framework. It is designed for women who want clarity, structure and control over their financial future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}