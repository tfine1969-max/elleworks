import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, BookOpen, FileText } from "lucide-react";

const RESOURCES = [
  {
    id: 1,
    title: "5 financial must-dos for every woman",
    type: "Guide",
    desc: "Essential financial steps every woman should take",
    file: "5-must-dos.pdf",
  },
  {
    id: 2,
    title: "How to start investing in South Africa",
    type: "Article",
    desc: "A beginner's guide to investing locally",
    file: "investing-sa.pdf",
  },
  {
    id: 3,
    title: "Divorce and your finances — what you need to know",
    type: "Guide",
    desc: "Navigate financial decisions during separation",
    file: "divorce-finances.pdf",
  },
  {
    id: 4,
    title: "Salary negotiation scripts that actually work",
    type: "Guide",
    desc: "Practical scripts and tactics for negotiating your worth",
    file: "salary-scripts.pdf",
  },
  {
    id: 5,
    title: "Planning for retirement in your 30s, 40s and 50s",
    type: "Article",
    desc: "Stage-specific retirement planning strategies",
    file: "retirement-stages.pdf",
  },
];

export default function Resources() {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" 
    ? RESOURCES 
    : RESOURCES.filter(r => r.type === filter);

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
              Free resources
            </h1>
            <p className="text-lg text-muted-foreground">
              Guides, tools and articles to help you take control of your finances — at your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All", "Guide", "Article"].map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  filter === type
                    ? "bg-primary text-white"
                    : "bg-muted text-foreground hover:bg-primary/10"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((resource, i) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-muted p-8 rounded-lg border border-border hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <FileText className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <span className="inline-block text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                      {resource.type}
                    </span>
                    <h3 className="text-lg font-semibold text-accent">{resource.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">{resource.desc}</p>
                <button className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
                  <Download className="w-4 h-4" />
                  Download
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-semibold text-accent mb-4">
              Get new resources delivered
            </h2>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for fresh insights and downloadable resources.
            </p>
            <form className="flex gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-white focus:outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}