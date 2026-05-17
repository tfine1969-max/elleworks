import React, { useState } from "react";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    interest: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleInterestChange = (value) => {
    setForm({ ...form, interest: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.interest) {
      toast({ title: "Please select what you're interested in" });
      return;
    }
    setSubmitting(true);
    await base44.entities.ContactInquiry.create(form);
    setSubmitting(false);
    setSubmitted(true);
    toast({ title: "Message sent", description: "We'll be in touch soon!" });
  };

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
              Let's talk
            </h1>
            <p className="text-lg text-muted-foreground">
              Whether you have a question, want to book a consultation, or just want to find out more — we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="text-center py-16">
                <h2 className="text-2xl font-semibold text-accent mb-3">
                  Thank you!
                </h2>
                <p className="text-muted-foreground mb-6">
                  We've received your message and will be in touch within 2 business days.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary font-medium hover:text-primary/80"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={form.name}
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

                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Phone number <span className="text-muted-foreground">(optional)</span>
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    className="mt-2 h-11"
                  />
                </div>

                <div>
                  <Label htmlFor="interest" className="text-sm font-medium text-foreground">
                    I am interested in:
                  </Label>
                  <Select value={form.interest} onValueChange={handleInterestChange}>
                    <SelectTrigger className="mt-2 h-11">
                      <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial-planning">Financial Planning</SelectItem>
                      <SelectItem value="financial-training">Financial Training</SelectItem>
                      <SelectItem value="workshops">Workshops</SelectItem>
                      <SelectItem value="general">General enquiry</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us more about your situation..."
                    rows={5}
                    className="mt-2"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full h-11 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-60"
                >
                  {submitting ? "Sending..." : "Send my message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Footer text */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12 text-sm text-muted-foreground space-y-2"
          >
            <p>Prefer to connect on LinkedIn? Find us at elleworks.</p>
            <p>elleworks is a service of wealthworks.co.za</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}