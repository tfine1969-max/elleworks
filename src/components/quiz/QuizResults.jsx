import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export default function QuizResults({ score, onRestart }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    wants_newsletter: false,
  });

  const getCategory = (score) => {
    if (score >= 26) return "Financial go-getter";
    if (score >= 18) return "On the right track";
    if (score >= 10) return "Building your base";
    return "Let's start from scratch";
  };

  const getResults = (score) => {
    if (score >= 26) {
      return {
        title: "Financial go-getter",
        message:
          "You're in great shape financially. Let's help you optimise and grow even further. Book a session to take your finances to the next level.",
        cta: "Book an advanced consultation",
        link: "/contact",
      };
    }
    if (score >= 18) {
      return {
        title: "On the right track",
        message:
          "You've got good foundations but there are a few gaps worth addressing. A financial plan could make a big difference for you right now.",
        cta: "Book a free consultation",
        link: "/contact",
      };
    }
    if (score >= 10) {
      return {
        title: "Building your base",
        message:
          "There's real opportunity here. With the right guidance and some practical steps, you could transform your financial position. Let's start with the basics.",
        cta: "Join our Money Basics workshop",
        link: "/workshops",
      };
    }
    return {
      title: "Let's start from scratch — and that's okay",
      message:
        "Everyone starts somewhere. The fact that you're here means you're ready to change things. We'll meet you exactly where you are.",
      cta: "Book a free consultation",
      link: "/contact",
    };
  };

  const results = getResults(score);

  const handleChange = (e) => {
    if (e.target.type === "checkbox") {
      setForm({ ...form, wants_newsletter: e.target.checked });
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await base44.entities.QuizResult.create({
        email: form.email,
        full_name: form.full_name,
        answers: [], // Answers passed from parent
        score: score,
        category: getCategory(score),
        wants_newsletter: form.wants_newsletter,
        status: "new",
      });

      setSubmitted(true);
      toast({
        title: "Results sent!",
        description: "Check your email for your action plan.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: error.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-12"
    >
      {/* Score Display */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-primary/10 rounded-full mb-6">
          <div className="text-center">
            <p className="text-5xl font-bold text-primary">{score}</p>
            <p className="text-xs text-muted-foreground">out of 32</p>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-semibold text-accent mb-4">
          {results.title}
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          {results.message}
        </p>

        <Link
          to={results.link}
          className="inline-block px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors mb-12"
        >
          {results.cta}
        </Link>
      </div>

      {/* Lead Capture Form */}
      {!submitted ? (
        <div className="bg-muted p-8 rounded-lg max-w-md mx-auto w-full">
          <h3 className="text-lg font-semibold text-accent mb-6">
            Send my results and action plan to my email
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="full_name" className="text-sm font-medium text-foreground">
                Full name
              </Label>
              <Input
                id="full_name"
                name="full_name"
                value={form.full_name}
                onChange={handleChange}
                required
                placeholder="Your full name"
                className="mt-2 h-11"
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Email address
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="mt-2 h-11"
              />
            </div>

            <div className="flex items-start gap-3 pt-2">
              <Checkbox
                id="newsletter"
                checked={form.wants_newsletter}
                onCheckedChange={(checked) =>
                  setForm({ ...form, wants_newsletter: checked })
                }
              />
              <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                I'd like to receive financial tips and workshop invites from elleworks
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full h-11 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send my results"}
            </button>
          </form>
        </div>
      ) : (
        <div className="bg-muted p-8 rounded-lg max-w-md mx-auto w-full text-center">
          <p className="text-lg font-semibold text-accent mb-3">Check your email!</p>
          <p className="text-muted-foreground mb-6">
            Your personalized action plan is on its way. We'll also follow up with tailored recommendations.
          </p>
          <button
            onClick={onRestart}
            className="text-primary font-medium hover:text-primary/80"
          >
            Take the quiz again
          </button>
        </div>
      )}
    </motion.div>
  );
}