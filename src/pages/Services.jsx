import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Personal financial planning",
    desc: "A comprehensive, one-on-one financial plan built around your life goals. We look at where you are now, where you want to be, and map out exactly how to get there — covering investments, insurance, retirement, and estate planning.",
    cta: "Book a consultation",
  },
  {
    icon: BookOpen,
    title: "Financial training & education",
    desc: "Practical, jargon-free financial training for women at any stage. Whether you're starting from zero or levelling up, our training gives you the knowledge and tools to make smart financial decisions every day.",
    cta: "View training options",
  },
  {
    icon: Users,
    title: "Workshops & group sessions",
    desc: "Join a community of women learning together. Our workshops cover everything from budgeting basics to investing, divorce and finances, salary negotiation, and planning for retirement. Online and in-person available.",
    cta: "See upcoming workshops",
  },
];

export default function Services() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-semibold text-accent mb-4">
              What we offer
            </h1>
            <p className="text-lg text-muted-foreground">
              Tailored financial services designed around the way women live, work and grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted p-8 rounded-lg border border-border hover:border-primary/30 transition-colors flex flex-col"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-6 flex-1 leading-relaxed">{service.desc}</p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    {service.cta} <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}