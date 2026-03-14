"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const journeyMilestones = [
  {
    year: "2024",
    title: "Returned to Competitive Pool",
    description: "Stepped back into league competition after 25 years away and entered at WPB rated 450.",
  },
  {
    year: "2024",
    title: "Structured Training Began",
    description: "Built a disciplined practice framework and started tracking every session with intent.",
  },
  {
    year: "2025",
    title: "Rating Climbs to 500+",
    description: "Steady improvement translated into measurable results as confidence and consistency rose.",
  },
  {
    year: "2025",
    title: "Daily Training Locked In",
    description: "A non-negotiable daily training rhythm became the foundation of long-term progress.",
  },
  {
    year: "2026",
    title: "WPB App Rated 620 and Rising",
    description: "Momentum accelerated with a major ratings jump and clear signs the ceiling is still moving.",
  },
  {
    year: "2026",
    title: "flashgordonpool.com Launched",
    description: "The comeback story went public with a digital home built to track the road to pro.",
  },
  {
    year: "2027+",
    title: "Pro Tour: The Target",
    description: "The mission stays clear: earn a seat on tour through relentless reps and elite execution.",
  },
];

export default function Tournaments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="journey" className="relative py-24 lg:py-32 bg-[#080f18] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_30%_at_50%_10%,rgba(201,168,76,0.09)_0%,transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Road Map</span>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl mt-2 mb-4">
            The <span className="text-[#C9A84C] text-shadow-gold">Journey</span>
          </h2>
          <p className="font-exo text-[#9ab0c8] max-w-2xl mx-auto">
            Not a tournament table. A cinematic progression from first return to pro target, built shot by shot in public.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00BFFF]/20 via-[#00BFFF] to-[#C9A84C]/30" />

          <div className="space-y-8">
            {journeyMilestones.map((milestone, index) => {
              const isRight = index % 2 === 1;

              return (
                <motion.article
                  key={`${milestone.year}-${milestone.title}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-8 ${isRight ? "" : ""}`}
                >
                  <div className={`hidden sm:block ${isRight ? "order-1" : "order-2"}`} />

                  <div
                    className={`relative rounded-lg border border-[#00BFFF]/20 bg-[#0a1628]/80 p-5 sm:p-6 backdrop-blur-sm ${
                      isRight ? "sm:order-2" : "sm:order-1"
                    }`}
                  >
                    <p className="font-orbitron text-xs tracking-[0.25em] text-[#00BFFF] uppercase mb-2">{milestone.year}</p>
                    <h3 className="font-orbitron text-xl text-white font-bold mb-3">{milestone.title}</h3>
                    <p className="font-exo text-[#9ab0c8] leading-relaxed">{milestone.description}</p>
                  </div>

                  <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-6 w-3.5 h-3.5 rounded-full bg-[#00BFFF] shadow-[0_0_0_4px_rgba(10,22,40,1),0_0_0_8px_rgba(0,191,255,0.28)]" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
