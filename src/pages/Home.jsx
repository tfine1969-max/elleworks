import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, DollarSign, Heart, Users } from "lucide-react";
import QuizWidget from "@/components/home/QuizWidget";

const PILLARS = [
  {
    icon: Clock,
    title: "Time",
    desc: "Make your time work for you. We help you plan for every life stage, from your first salary to retirement.",
  },
  {
    icon: DollarSign,
    title: "Money",
    desc: "Build wealth with intention. Learn to budget, invest and grow your money with confidence.",
  },
  {
    icon: Heart,
    title: "Health",
    desc: "Your financial wellbeing affects everything. We help you reduce money stress and plan for a healthy future.",
  },
  {
    icon: Users,
    title: "Relationships",
    desc: "Navigate money in relationships. Whether you're partnering up, separating, or going it alone — we've got you.",
  },
];

export default function Home() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-semibold text-accent leading-tight mb-6">
              Your money. Your life. Your terms.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              elleworks is a holistic financial planning and training service built exclusively for women. We help you build confidence, knowledge and community — so you can take control of every aspect of your financial life.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start your journey
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-muted p-8 rounded-lg"
                >
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-semibold text-accent mb-3">{pillar.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quiz Widget */}
      <QuizWidget />

      {/* Quote */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold text-accent leading-tight"
          >
            One day or day one. You decide.
          </motion.blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-semibold text-accent mb-4">
              Ready to take the first step?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hundreds of women who are building financial confidence and independence.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Book a free consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}