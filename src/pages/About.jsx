import React from "react";
import { motion } from "framer-motion";

const ABOUT_IMAGE = "https://media.base44.com/images/public/69f3412ade1e350134cfae3e/55d67ec68_generated_8e946893.png";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function About() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-muted">
        <div className="section-container py-20 md:py-28">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-inter font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              About
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl font-semibold text-secondary leading-tight">
              About Elleworks
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Body */}
      <section>
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div {...fadeIn}>
              <p className="font-inter text-lg text-foreground leading-relaxed mb-6">
                Elleworks is an initiative developed within the Wealth Works group to provide structured financial education and planning support for women.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-6">
                We believe that financial confidence is built through clarity, education and structured guidance — not through complexity or jargon. Elleworks provides a calm, professional environment where women can develop a clear understanding of their financial position and make decisions that are right for them.
              </p>
              <p className="font-inter text-base text-muted-foreground leading-relaxed mb-10">
                Our programmes are designed to meet women at every stage — whether you're taking the first step towards financial clarity or seeking comprehensive, independent financial planning.
              </p>

              <div className="border border-border rounded-lg p-5 bg-muted">
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">
                  Financial advice is provided through licensed entities within the Wealth Works group. Elleworks serves as the structured pathway to access professional financial guidance.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.15 }}
            >
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={ABOUT_IMAGE}
                  alt="Bright, modern architectural interior with natural light and clean lines"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted">
        <div className="section-container">
          <motion.div {...fadeIn} className="text-center mb-14">
            <h2 className="font-poppins text-3xl font-medium text-secondary">
              Our Principles
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Clarity", desc: "Making financial concepts accessible, understandable and actionable." },
              { title: "Structure", desc: "Providing frameworks and pathways that bring order to financial planning." },
              { title: "Integrity", desc: "Operating within a regulated, professional advisory environment." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                {...fadeIn}
                transition={{ ...fadeIn.transition, delay: i * 0.1 }}
                className="bg-background border border-border/50 rounded-lg p-8 text-center"
              >
                <h3 className="font-poppins text-base font-medium text-secondary mb-3">{v.title}</h3>
                <p className="font-inter text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="section-container">
          <motion.div {...fadeIn} className="text-center">
            <h2 className="font-poppins text-3xl font-medium text-secondary mb-8">
              Begin your journey with clarity.
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
    </div>
  );
}