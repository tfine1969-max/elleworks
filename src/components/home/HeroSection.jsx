import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HERO_IMAGE = "https://media.base44.com/images/public/69f3412ade1e350134cfae3e/d9defd4c3_generated_e78974e3.png";

export default function HeroSection() {
  const scrollToProgrammes = () => {
    const el = document.getElementById("programme-preview");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-[72px]">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <p className="text-xs font-inter font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
              Elleworks by Wealth Works
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.1] text-secondary mb-6">
              Financial clarity for women, built with intention.
            </h1>
            <p className="font-inter text-lg text-muted-foreground leading-relaxed max-w-lg mb-10">
              Elleworks is a dedicated financial planning and education platform designed to help women make confident, informed and structured financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wealth-works-flow.base44.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-8 bg-primary text-primary-foreground font-inter text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                Start Your Journey
              </a>
              <button
                onClick={scrollToProgrammes}
                className="inline-flex items-center justify-center h-12 px-8 border border-border text-foreground font-inter text-sm font-medium rounded-lg hover:bg-muted transition-all duration-500"
                style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
              >
                Explore Programmes
              </button>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] max-h-[600px] lg:max-h-[700px] rounded-2xl overflow-hidden">
              <img
                src={HERO_IMAGE}
                alt="Professional woman reviewing documents in a bright, modern workspace with natural light"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}