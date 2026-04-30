import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, Users, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: BarChart3,
    title: "Financial Planning",
    desc: "Comprehensive planning tailored to your goals, covering investments, retirement, tax strategy, and wealth building.",
    features: ["Goal setting", "Investment strategy", "Risk management", "Retirement planning"],
  },
  {
    icon: BookOpen,
    title: "Financial Training",
    desc: "Build your financial literacy with expert-led training designed for women at every wealth stage.",
    features: ["Basics to advanced", "Self-paced & group", "Practical tools", "Ongoing support"],
  },
  {
    icon: Users,
    title: "Workshops",
    desc: "Interactive group sessions exploring wealth, relationships, health, and time management.",
    features: ["Monthly workshops", "Networking", "Peer learning", "Expert facilitation"],
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
            <h1 className="text-4xl md:text-5xl font-semibold text-accent mb-6">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Tailored solutions for your financial wellness journey
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
                  className="bg-muted p-8 rounded-lg border border-border hover:border-primary/30 transition-colors"
                >
                  <Icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-xl font-semibold text-accent mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-accent mb-6">
              Which service is right for you?
            </h2>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Get personalized recommendations
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}