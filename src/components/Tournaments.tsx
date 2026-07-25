"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journeyMilestones = [
  {
    year: "2024",
    title: "Competitive Return",
    description: "Stepped back into league competition after 25 years away and began sharing the process publicly.",
  },
  {
    year: "2024",
    title: "Training System Built",
    description: "Built a repeatable practice system with drills, match review, and weekly progress check-ins.",
  },
  {
    year: "2025",
    title: "500+ Performance Level",
    description: "Shot-making consistency and table management improved enough to move into a stronger tier.",
  },
  {
    year: "2026",
    title: "620+ WPB Momentum",
    description: "Rating gains accelerated, giving fans visible proof of competitive progress.",
  },
  {
    year: "2026",
    title: "Public Platform Launch",
    description: "Website and social channels aligned into one home for clips, updates, and community engagement.",
  },
  {
    year: "2027+",
    title: "Pro Tour Pursuit",
    description: "The next chapter focuses on higher-level tournament results and sustained tour preparation.",
  },
];

const recentResults = [
  { date: "2026-07-06", event: "NE 9-Ball Weekly", opponent: "Race vs A-Level", result: "W 7-5" },
  { date: "2026-07-11", event: "Regional Open Qualifier", opponent: "First Round", result: "W 9-6" },
  { date: "2026-07-18", event: "Regional Open Qualifier", opponent: "Quarterfinal", result: "L 6-9" },
];

const resultsUpdatedAt = "2026-07-24";

export default function Tournaments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,24,0.95),rgba(13,27,42,0.8))]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <span className="section-label">Journey Timeline</span>
          <h2 className="brand-title text-4xl sm:text-5xl text-white mt-2 mb-4">
            Milestones Fans Can <span className="text-[#C9A84C]">Track</span>
          </h2>
          <p className="font-exo text-[#c5d2df] max-w-2xl mx-auto">
            A transparent timeline of training, competition, and rating growth so the community can follow every step.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-1 bottom-1 w-px bg-gradient-to-b from-[#00BFFF]/20 via-[#00BFFF]/80 to-[#C9A84C]/50" />

          <div className="space-y-6">
            {journeyMilestones.map((milestone, index) => {
              const right = index % 2 === 1;

              return (
                <motion.article
                  key={milestone.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.07 }}
                  className="relative sm:grid sm:grid-cols-2 sm:gap-8 pl-10 sm:pl-0"
                >
                  <div className={`${right ? "sm:order-1" : "sm:order-2"}`} />
                  <div className={`brand-panel p-5 sm:p-6 ${right ? "sm:order-2" : "sm:order-1"}`}>
                    <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.22em] uppercase mb-2">{milestone.year}</p>
                    <h3 className="brand-title text-xl text-white mb-2">{milestone.title}</h3>
                    <p className="font-exo text-[#c8d6e3] leading-relaxed">{milestone.description}</p>
                  </div>
                  <div className="absolute left-3 sm:left-1/2 sm:-translate-x-1/2 top-7 w-3 h-3 rounded-full bg-[#00BFFF] shadow-[0_0_0_5px_rgba(8,15,24,1),0_0_0_8px_rgba(0,191,255,0.25)]" />
                </motion.article>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45, delay: 0.22 }}
          className="mt-14"
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
            <h3 className="brand-title text-2xl text-white">Recent Results</h3>
            <p className="font-exo text-xs text-[#9db3c9]">Last updated: {resultsUpdatedAt}</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#00BFFF]/20 bg-[#081221]/70">
            <div className="grid grid-cols-[0.95fr_1.2fr_1fr_0.65fr] gap-3 px-4 sm:px-5 py-3 border-b border-[#00BFFF]/15 font-orbitron text-[10px] sm:text-xs uppercase tracking-[0.16em] text-[#9fb6cd]">
              <span>Date</span>
              <span>Event</span>
              <span>Match</span>
              <span>Result</span>
            </div>

            {recentResults.map((entry) => (
              <div
                key={`${entry.date}-${entry.event}-${entry.opponent}`}
                className="grid grid-cols-[0.95fr_1.2fr_1fr_0.65fr] gap-3 px-4 sm:px-5 py-3 border-b border-[#00BFFF]/10 last:border-b-0"
              >
                <p className="font-exo text-sm text-[#c9d7e4]">{entry.date}</p>
                <p className="font-exo text-sm text-white">{entry.event}</p>
                <p className="font-exo text-sm text-[#c9d7e4]">{entry.opponent}</p>
                <p className="font-orbitron text-xs sm:text-sm text-[#00BFFF]">{entry.result}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
