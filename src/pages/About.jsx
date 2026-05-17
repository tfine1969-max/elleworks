import React from "react";
import { motion } from "framer-motion";

export default function About() {
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
              About Elleworks
            </h1>
            <p className="text-lg text-muted-foreground">
              Empowering women through holistic wealth management
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-accent mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              At Elleworks, we believe wealth is more than money. It's about having clarity and intention across four pillars: Time, Money, Health, and Relationships.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're dedicated to helping women build lasting financial confidence through personalized planning, quality education, and meaningful support. Our goal is to create a generation of women who understand their wealth and shape their futures with intention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-accent text-center mb-16"
          >
            Our Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Clarity",
                desc: "We demystify financial concepts and provide transparent, actionable guidance.",
              },
              {
                title: "Empowerment",
                desc: "We help you take control of your wealth and make confident decisions.",
              },
              {
                title: "Holistic",
                desc: "We see wealth through the lens of your whole life—not just numbers.",
              },
            ].map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-lg border border-border text-center"
              >
                <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-semibold text-accent text-center mb-16"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah",
                role: "Founder & Financial Advisor",
                bio: "15+ years of financial planning experience. Passionate about empowering women.",
              },
              {
                name: "Emma",
                role: "Financial Educator",
                bio: "Specialist in making complex financial concepts accessible and engaging.",
              },
              {
                name: "Rachel",
                role: "Wellness Coach",
                bio: "Helping clients align their wealth with their values and lifestyle.",
              },
            ].map((person, i) => (
              <motion.div
                key={person.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-muted p-8 rounded-lg text-center"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-accent mb-1">{person.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{person.role}</p>
                <p className="text-muted-foreground text-sm">{person.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}