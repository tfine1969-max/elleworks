import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PROGRAMMES_DATA = [
  {
    title: "Foundations Series",
    who: "Women who are ready to take the first step towards financial clarity — whether you're starting from scratch or simply want to get organised.",
    covered: [
      "Understanding your current financial position",
      "Budgeting and cash flow structuring",
      "Goal identification and prioritisation",
      "Introduction to savings and investment principles",
      "Risk awareness and protection basics",
    ],
    outcome: "You'll leave with a clear understanding of where you stand financially and a structured foundation to build upon.",
  },
  {
    title: "Growth Series",
    who: "Women who have a financial foundation in place and want to build, protect and grow their wealth with informed strategies.",
    covered: [
      "Investment strategy and asset allocation",
      "Tax-efficient planning structures",
      "Retirement planning and pension review",
      "Estate planning fundamentals",
      "Building a diversified portfolio",
    ],
    outcome: "You'll have a defined growth strategy with clear steps to build long-term wealth aligned to your goals and responsibilities.",
  },
  {
    title: "Independence Series",
    who: "Women committed to achieving full financial independence — with comprehensive planning, implementation and ongoing professional review.",
    covered: [
      "Advanced financial planning and modelling",
      "Full portfolio construction and implementation",
      "Ongoing review and rebalancing",
      "Legacy and intergenerational planning",
      "Access to regulated financial advice",
    ],
    outcome: "You'll have a fully implemented, professionally reviewed financial plan designed to deliver long-term financial independence.",
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Programmes() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-muted">
        <div className="section-container py-20 md:py-28">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-inter font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Programmes
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl font-semibold text-secondary leading-tight">
              Structured pathways to financial confidence.
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Programme sections */}
      {PROGRAMMES_DATA.map((prog, i) => (
        <section
          key={prog.title}
          className={i % 2 === 1 ? "bg-muted" : "bg-background"}
        >
          <div className="section-container">
            <motion.div
              {...fadeIn}
              transition={{ ...fadeIn.transition, delay: 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                {/* Title side */}
                <div className="lg:col-span-4">
                  <span className="text-xs font-inter font-medium uppercase tracking-[0.2em] text-primary mb-2 block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="font-poppins text-2xl sm:text-3xl font-medium text-secondary mb-4">
                    {prog.title}
                  </h2>
                  <div className="hidden lg:block w-px h-16 bg-border" />
                </div>

                {/* Content side */}
                <div className="lg:col-span-8 lg:border-l lg:border-border lg:pl-16">
                  <div className="mb-8">
                    <h3 className="text-xs font-inter font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      Who it's for
                    </h3>
                    <p className="font-inter text-base text-foreground leading-relaxed">
                      {prog.who}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs font-inter font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      What's covered
                    </h3>
                    <ul className="space-y-2">
                      {prog.covered.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-primary mt-2.5 shrink-0" />
                          <span className="font-inter text-sm text-foreground/80 leading-relaxed">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xs font-inter font-medium uppercase tracking-[0.15em] text-muted-foreground mb-3">
                      Outcome
                    </h3>
                    <p className="font-inter text-base text-foreground leading-relaxed">
                      {prog.outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-secondary">
        <div className="section-container">
          <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto">
            <h2 className="font-poppins text-3xl sm:text-4xl font-medium text-secondary-foreground mb-4">
              Ready to begin?
            </h2>
            <p className="font-inter text-base text-secondary-foreground/60 mb-8">
              Take the first step towards structured financial clarity.
            </p>
            <a
              href="https://wealth-works-flow.base44.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 h-12 px-10 bg-primary text-primary-foreground font-inter text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-500"
              style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
            >
              Book a Session <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}