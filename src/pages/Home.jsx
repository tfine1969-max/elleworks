import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CircleDollarSign, HeartPulse, Sparkles, UsersRound } from "lucide-react";
import logo from "../../assets/elleworks.png";

const PILLARS = [
  {
    key: "purpose",
    icon: Sparkles,
    kicker: "Be your best self",
    title: "Purpose & Potential",
    quote:
      "I strive for a life of meaning, developing and growing to achieve my potential and ambitions.",
    items: ["Self awareness", "Self development", "Career development"],
  },
  {
    key: "health",
    icon: HeartPulse,
    kicker: "Nurture body, mind and soul",
    title: "Positive Health",
    quote:
      "I create a healthy lifestyle that supports my mental and physical wellbeing.",
    items: ["Medical health and cover", "Physical wellbeing", "Mental and spiritual wellbeing"],
  },
  {
    key: "people",
    icon: UsersRound,
    kicker: "Advance through community together",
    title: "People",
    quote: "I can be my best when I connect and learn with and through others.",
    items: ["Circles", "Webinars", "Workshops", "Events"],
  },
  {
    key: "wealth",
    icon: CircleDollarSign,
    kicker: "Pursue financial freedom",
    title: "Personal Wealth",
    quote:
      "I seek independence, flexibility and opportunities to live a full, rich life and build a proud legacy.",
    items: ["Savings and investment", "Retirement", "At-risk benefits", "Wills and estates"],
  },
];

const OFFERINGS = ["Circles", "Webinars", "Workshops", "Events"];
const ADVISORY = [
  "Savings and investment",
  "Retirement",
  "At-risk benefits",
  "Wills and estates",
  "Medical health and cover",
  "Physical, mental and spiritual wellbeing",
];

export default function Home() {
  const [activeKey, setActiveKey] = useState("purpose");
  const activePillar = PILLARS.find((pillar) => pillar.key === activeKey) || PILLARS[0];

  return (
    <div className="pt-[72px] bg-white">
      <section className="relative min-h-[calc(100vh-72px)] overflow-hidden bg-gradient-to-br from-white via-[#f7fbfa] to-[#ddfaf4]">
        <div className="absolute right-[-10vw] top-20 hidden h-[560px] w-[560px] rounded-full border border-primary/20 lg:block" />
        <div className="absolute right-[8vw] top-[18vh] hidden h-[360px] w-[360px] rounded-full border border-[#5f4b66]/15 lg:block" />

        <div className="max-w-7xl mx-auto px-6 min-h-[calc(100vh-72px)] grid lg:grid-cols-[1.05fr_0.95fr] items-center gap-12 pb-28 pt-16">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <img src={logo} alt="Elleworks" className="w-[220px] md:w-[292px] h-auto mb-10" />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-5">
              Connect | grow | thrive
            </p>
            <h1 className="font-poppins text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.02] text-secondary mb-7">
              Portfolio to Prosperity
            </h1>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed mb-9">
              A holistic platform for women who want to build purposeful, healthy, connected and financially secure lives on their own terms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
              >
                Start the journey
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#framework"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-white px-8 text-sm font-semibold text-secondary transition-colors hover:bg-muted"
              >
                Explore the pillars
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative min-h-[430px] lg:min-h-[620px]"
          >
            <div className="absolute inset-4 rounded-full border border-primary/20 bg-white/50 shadow-2xl shadow-slate-900/10 backdrop-blur-sm" />
            <div className="absolute left-[30%] top-[2%] h-[42%] w-[25%] rounded-[100%_0_100%_0] bg-primary shadow-xl rotate-[-28deg]" />
            <div className="absolute right-[13%] top-[23%] h-[38%] w-[23%] rounded-[100%_0_100%_0] bg-secondary/90 shadow-xl rotate-[22deg]" />
            <div className="absolute bottom-[4%] right-[33%] h-[38%] w-[23%] rounded-[100%_0_100%_0] bg-[#5f4b66]/85 shadow-xl rotate-[116deg]" />
            <div className="absolute bottom-[20%] left-[11%] h-[36%] w-[22%] rounded-[100%_0_100%_0] bg-[#f07f6b]/90 shadow-xl rotate-[206deg]" />
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-6 right-6 mx-auto grid max-w-6xl grid-cols-2 overflow-hidden rounded-lg border border-border bg-white/90 shadow-xl shadow-slate-900/10 backdrop-blur md:grid-cols-4">
          {["Purpose", "Health", "People", "Wealth"].map((item) => (
            <span key={item} className="grid min-h-16 place-items-center border-border text-sm font-bold text-secondary md:border-r last:border-r-0">
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-muted">
        <div className="section-container grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Why elleworks</p>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight text-secondary mb-6">
              For the woman building what comes next.
            </h2>
          </div>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Elleworks blends coaching, education, advisory support and community so personal growth and financial confidence develop together. The name is rooted in "elle", meaning her or she, and the idea that work becomes more powerful when it is connected to achievement and growth.
          </p>
        </div>
      </section>

      <section id="framework" className="bg-white">
        <div className="section-container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">The framework</p>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight text-secondary mb-5">
              Four pillars. One connected life.
            </h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Portfolio to Prosperity helps women prioritise where they are, strengthen what matters and move with more confidence.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_0.78fr] lg:items-center">
            <div className="grid gap-4 sm:grid-cols-2">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <button
                    key={pillar.key}
                    onClick={() => setActiveKey(pillar.key)}
                    className={`group min-h-[180px] rounded-lg border p-7 text-left transition-all ${
                      activeKey === pillar.key
                        ? "border-secondary bg-secondary text-white shadow-xl shadow-slate-900/10"
                        : "border-border bg-muted hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                    }`}
                  >
                    <Icon className="mb-6 h-8 w-8 text-primary" />
                    <h3 className={`mb-3 font-poppins text-xl font-semibold ${activeKey === pillar.key ? "text-white" : "text-secondary"}`}>
                      {pillar.title}
                    </h3>
                    <p className={activeKey === pillar.key ? "text-sm leading-relaxed text-white/75" : "text-sm leading-relaxed text-muted-foreground"}>
                      {pillar.kicker}
                    </p>
                  </button>
                );
              })}
            </div>

            <motion.article
              key={activePillar.key}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-lg bg-secondary p-8 text-white shadow-2xl shadow-slate-900/15 md:p-10"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">{activePillar.kicker}</p>
              <h3 className="font-poppins text-3xl md:text-4xl font-semibold leading-tight mb-5">{activePillar.title}</h3>
              <p className="text-lg leading-relaxed text-white/80 mb-8">"{activePillar.quote}"</p>
              <div className="grid gap-3">
                {activePillar.items.map((item) => (
                  <span key={item} className="flex items-center gap-3 text-sm font-medium text-white/90">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="section-container grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">EW Collective</p>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              Community, learning and practical progress.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {OFFERINGS.map((offering, index) => (
              <article key={offering} className="min-h-[190px] rounded-lg border border-border bg-white p-7">
                <span className="mb-8 block text-sm font-bold text-[#f07f6b]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mb-3 font-poppins text-xl font-semibold text-secondary">{offering}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Focused experiences that create reflection, accountability, insight and shared momentum.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="section-container">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">Education and advisory</p>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold leading-tight text-secondary">
              A practical ecosystem for a full life.
            </h2>
          </div>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-3">
            {ADVISORY.map((item) => (
              <span key={item} className="rounded-full border border-primary/20 bg-[#ddfaf4] px-5 py-3 text-sm font-semibold text-secondary">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted">
        <div className="section-container grid gap-10 lg:grid-cols-[0.35fr_0.75fr] lg:items-center">
          <div className="grid aspect-square max-w-[320px] place-items-center rounded-full border border-border bg-white bg-gradient-to-br from-primary/20 to-[#f07f6b]/15">
            <span className="font-poppins text-7xl font-semibold text-secondary">LF</span>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4">
              Founder and Chief Advancement Officer
            </p>
            <h2 className="font-poppins text-4xl md:text-5xl font-semibold text-secondary mb-6">Linda Fine</h2>
            <div className="space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                With 30 years in corporate leadership across Marketing and Human Resources, Linda Fine has shaped people, culture, leadership, career development and wellbeing strategies that help individuals and organisations thrive.
              </p>
              <p>
                Elleworks brings together her lived experience, strategic HR expertise and long-standing commitment to mentoring women into one practical platform for lasting prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="section-container text-center">
          <p className="mx-auto mb-3 max-w-3xl font-poppins text-3xl font-semibold leading-tight text-white md:text-5xl">
            The most important investment you can make is in yourself.
          </p>
          <p className="mb-10 text-sm font-semibold text-white/60">Warren Buffett</p>
          <h2 className="mx-auto mb-8 max-w-4xl font-poppins text-3xl font-semibold leading-tight text-white md:text-5xl">
            Join the EW Collective and start your holistic journey today.
          </h2>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20"
          >
            Connect with Elleworks
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
