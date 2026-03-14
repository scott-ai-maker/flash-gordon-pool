"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Add tournament results here as Flash competes in major events.
// Each entry: { name, location, date, format, result, tier }
// tier options: "gold" (1st), "silver" (2nd/finalist), "blue" (top 8 / notable finish)
const recentResults: { name: string; location: string; date: string; format: string; result: string; tier: string }[] = [];

const highlights = [
  {
    icon: "★",
    title: "Early Years — Fitchburg, MA",
    desc: "Picked up a cue at ten. Competing by seventeen. Had the game, had the plan. Life had other ideas — and Flash made the right call. The cue went in the case.",
  },
  {
    icon: "▲",
    title: "The Return — 2025",
    desc: "Jumped back in with no practice — joined a league and got humbled fast. Rated 450. Crushed repeatedly. Kept showing up. WPB rating now 620 and climbing.",
  },
  {
    icon: "◆",
    title: "Target: Pro Tour",
    desc: "Daily training on a Brunswick Gold Crown 9ft with Simonis 870 felt. Running a McDermott H1752 with a Defy carbon fiber shaft. The pro tour is the target — not a fantasy.",
  },
];

const tierStyles: Record<string, string> = {
  gold: "bg-[#F5C400]/15 text-[#F5C400] border border-[#F5C400]/40",
  silver: "bg-[#C0C0C0]/15 text-[#C0C0C0] border border-[#C0C0C0]/40",
  blue: "bg-[#00BFFF]/15 text-[#00BFFF] border border-[#00BFFF]/40",
};

export default function Tournaments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"recent" | "highlights">("recent");

  return (
    <section id="tournaments" className="relative py-24 lg:py-32 bg-[#080f18] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label">The Record</span>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl mt-2 mb-4">
            Tournament <span className="text-[#F5C400] text-shadow-gold">Results</span>
          </h2>
          <p className="font-exo text-[#9ab0c8] max-w-xl mx-auto">
            Every tournament is a data point. Every result is progress. The comeback is being built in public.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-2 mb-10"
        >
          {(["recent", "highlights"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-orbitron text-xs tracking-widest uppercase px-6 py-3 rounded border transition-all duration-300 ${
                activeTab === tab
                  ? "bg-[#00BFFF] text-black border-[#00BFFF] glow-electric"
                  : "border-[#00BFFF]/30 text-[#C0C0C0] hover:border-[#00BFFF]/60 hover:text-[#00BFFF]"
              }`}
            >
              {tab === "recent" ? "Recent Results" : "Career Highlights"}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "recent" ? (
            <motion.div
              key="recent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {recentResults.length === 0 ? (
                <div className="rounded-lg border border-[#00BFFF]/20 bg-[#080f18]/60 py-20 flex flex-col items-center justify-center text-center gap-4 px-6">
                  <div className="text-5xl text-[#00BFFF]/30">◎</div>
                  <h3 className="font-orbitron font-bold text-white text-xl">No Major Events Yet</h3>
                  <p className="font-exo text-[#9ab0c8] max-w-md leading-relaxed">
                    Flash is currently training and competing in local league play. Major tournament results will appear here as the campaign gets underway. Check back — this board is about to get busy.
                  </p>
                  <span className="font-orbitron text-xs text-[#00BFFF]/50 tracking-widest uppercase border border-[#00BFFF]/20 rounded px-4 py-2 mt-2">
                    Season in Progress
                  </span>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto rounded-lg border border-[#00BFFF]/20">
                    <table className="w-full min-w-[600px]">
                      <thead>
                        <tr className="bg-[#0d1b2a] border-b border-[#00BFFF]/20">
                          {["Tournament", "Location", "Date", "Format", "Result"].map((h) => (
                            <th
                              key={h}
                              className="font-orbitron text-xs text-[#00BFFF] tracking-widest uppercase px-4 py-4 text-left"
                            >
                              {h}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {recentResults.map((r, i) => (
                          <motion.tr
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={inView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                            className={`border-b border-[#00BFFF]/10 transition-colors hover:bg-[#00BFFF]/5 ${
                              r.tier === "gold" ? "bg-[#F5C400]/3" : ""
                            }`}
                          >
                            <td className="font-exo font-semibold text-white px-4 py-4">{r.name}</td>
                            <td className="font-exo text-[#9ab0c8] px-4 py-4">{r.location}</td>
                            <td className="font-exo text-[#9ab0c8] px-4 py-4">{r.date}</td>
                            <td className="font-exo text-[#9ab0c8] px-4 py-4">{r.format}</td>
                            <td className="px-4 py-4">
                              <span className={`font-orbitron text-xs font-bold tracking-wider uppercase px-3 py-1.5 rounded ${tierStyles[r.tier]}`}>
                                {r.result}
                              </span>
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="highlights"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-3 gap-6"
            >
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative bg-[#0d1b2a] border border-[#00BFFF]/20 rounded-lg p-6 hover:border-[#00BFFF]/50 transition-colors group"
                >
                  <div className="text-3xl text-[#F5C400] mb-4">{h.icon}</div>
                  <h3 className="font-orbitron font-bold text-white text-lg mb-3">{h.title}</h3>
                  <p className="font-exo text-[#9ab0c8] text-sm leading-relaxed">{h.desc}</p>
                  {/* Corner accent */}
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[#F5C400]/40 group-hover:border-[#F5C400] transition-colors" />
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
