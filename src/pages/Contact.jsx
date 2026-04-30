import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const fadeIn = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
};

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await base44.entities.ContactInquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Request received", description: "We'll be in touch shortly." });
  };

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <section className="bg-muted">
        <div className="section-container py-20 md:py-28">
          <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-inter font-medium uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </p>
            <h1 className="font-poppins text-4xl sm:text-5xl font-semibold text-secondary leading-tight">
              Get in Touch
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section>
        <div className="section-container">
          <motion.div {...fadeIn} className="max-w-lg mx-auto">
            {submitted ? (
              <div className="text-center py-12">
                <h2 className="font-poppins text-2xl font-medium text-secondary mb-3">
                  Thank you
                </h2>
                <p className="font-inter text-base text-muted-foreground">
                  Your request has been received. We'll be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-inter text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                    className="h-12 font-inter"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-inter text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="h-12 font-inter"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="font-inter text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="How can we help?"
                    rows={5}
                    className="font-inter resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 bg-primary text-primary-foreground font-inter text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all duration-500 disabled:opacity-60"
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  {submitting ? "Sending..." : "Request Information"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}