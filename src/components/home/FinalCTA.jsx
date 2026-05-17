import React from "react";
import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-medium text-secondary mb-8">
            Start with clarity. Build with confidence.
          </h2>
          <a
            href="https://wealth-works-flow.base44.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 px-10 bg-primary text-primary-foreground font-inter text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
            style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
          >
            Start Your Journey
          </a>
        </motion.div>
      </div>
    </section>
  );
}