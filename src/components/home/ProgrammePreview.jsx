import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROGRAMMES = [
  {
    title: "Foundations Series",
    desc: "Build clarity around your current financial position and develop the essential knowledge to take control of your financial decisions.",
  },
  {
    title: "Growth Series",
    desc: "Deepen your financial understanding and build structured strategies for wealth accumulation, protection and long-term growth.",
  },
  {
    title: "Independence Series",
    desc: "A comprehensive pathway to full financial independence, bringing together advanced planning, implementation and ongoing review.",
  },
];

export default function ProgrammePreview() {
  return (
    <section id="programme-preview">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <h2 className="font-poppins text-3xl sm:text-4xl font-medium text-secondary">
            Our Programmes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROGRAMMES.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="bg-muted border border-border/50 rounded-lg p-8 flex flex-col"
            >
              <h3 className="font-poppins text-lg font-medium text-secondary mb-3">
                {prog.title}
              </h3>
              <p className="font-inter text-sm text-muted-foreground leading-relaxed mb-8 flex-1">
                {prog.desc}
              </p>
              <Link
                to="/programmes"
                className="inline-flex items-center gap-2 text-sm font-inter font-medium text-primary hover:gap-3 transition-all duration-300"
              >
                Learn more <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}