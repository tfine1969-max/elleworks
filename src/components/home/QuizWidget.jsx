import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function QuizWidget() {
  return (
    <section className="py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <CheckCircle2 className="w-12 h-12 text-primary-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Find out your financial health score
          </h2>
          <p className="text-lg text-primary-foreground/90 mb-8">
            Answer 8 quick questions to discover where you stand and get a personalized action plan.
          </p>
          <Link
            to="/quiz"
            className="inline-block px-8 py-3 bg-white text-primary font-medium rounded-lg hover:bg-white/90 transition-colors"
          >
            Take the quiz (2 minutes)
          </Link>
        </motion.div>
      </div>
    </section>
  );
}