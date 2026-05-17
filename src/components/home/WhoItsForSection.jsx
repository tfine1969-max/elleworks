import React from "react";
import { motion } from "framer-motion";

const AUDIENCES = [
  "Women building independent wealth",
  "Professionals managing growing income",
  "Entrepreneurs balancing business and personal finances",
  "Women navigating life transitions",
  "Mothers planning long-term security",
  "Women preparing for financial independence",
];

export default function WhoItsForSection() {
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
            Who it's for
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AUDIENCES.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.06 }}
              className="bg-background border border-border/50 rounded-lg p-6 text-center"
            >
              <p className="font-inter text-sm font-medium text-foreground leading-relaxed">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}