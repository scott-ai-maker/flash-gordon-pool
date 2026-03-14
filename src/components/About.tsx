"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const stats = [
  { num: "15+", label: "YEARS EXPERIENCE" },
  { num: "620+", label: "WPB RATED" },
  { num: "BACK", label: "& BETTER" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-[#0d1b2a] overflow-hidden">
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      {/* Top border */}
      <hr className="hr-electric absolute top-0 left-0 right-0 m-0" />
      {/* Bottom border */}
      <hr className="hr-gold absolute bottom-0 left-0 right-0 m-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Portrait frame */}
            <div className="relative w-72 sm:w-80 lg:w-96">
              {/* Glow */}
              <div className="absolute inset-0 rounded-lg bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.2)_0%,transparent_70%)] blur-xl scale-110" />

              <div className="relative rounded-lg overflow-hidden border border-[#00BFFF]/30 aspect-[3/4] glow-electric">
                <Image
                  src="/images/about-portrait.png"
                  alt="Scott Gordon — Flash Gordon Pool"
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
                />
                {/* Scan line overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00BFFF]/5 to-transparent pointer-events-none" />
              </div>

              {/* Sci-fi corners */}
              <div className="absolute -top-1 -left-1 w-5 h-5 border-t-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute -top-1 -right-1 w-5 h-5 border-t-2 border-r-2 border-[#C9A84C]" />
              <div className="absolute -bottom-1 -left-1 w-5 h-5 border-b-2 border-l-2 border-[#C9A84C]" />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 border-b-2 border-r-2 border-[#C9A84C]" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-[#080f18]/80 border border-[#00BFFF]/20 rounded p-3 text-center"
                >
                  <p className="font-orbitron font-bold text-xl text-[#00BFFF]">{s.num}</p>
                  <p className="font-exo text-[10px] text-[#C0C0C0] uppercase tracking-wider mt-1">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Text column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="section-label">Origin Story</span>
            <h2 className="font-orbitron font-black text-4xl sm:text-5xl leading-tight mt-2 mb-6">
              The Man Behind{" "}
              <span className="text-[#C9A84C] text-shadow-gold">The Legend</span>
            </h2>

            <p className="font-exo text-lg font-semibold text-[#C0C0C0] mb-4 italic">
              They call him Flash — not because he&apos;s fast, but because when he steps to the table, the room lights up.
            </p>

            <div className="space-y-4 font-exo text-[#9ab0c8] leading-relaxed">
              <p>
                Scott Gordon picked up his first cue at ten years old in Fitchburg, MA. By seventeen he was competing. By twenty he had a plan — pro tour by twenty-two. Then life had other ideas. He met the woman who would become his wife, started a family, and made the choice to be present for his son as he grew up. The cue went in the case.
              </p>
              <p>
                Twenty-five years passed. Pool had a resurgence and something in Scott woke up. He came back a year ago — joined a league with no practice and got humbled fast. Rated 450. Crushed repeatedly. But he kept showing up. Today he trains daily on a Brunswick Gold Crown 9ft table with Simonis 870 felt in his Fitchburg basement, running a McDermott H1752 cue with a Defy carbon fiber shaft. WPB app rated 620 and climbing fast.
              </p>
              <p>
                This isn&apos;t just a comeback story. This is what happens when a lifelong dream refuses to die. The pro tour is not a fantasy — it&apos;s a target. And Flash Gordon Pool is the road to get there.
              </p>
            </div>

            {/* Signature block */}
            <div className="mt-8 pt-6 border-t border-[#00BFFF]/10 flex items-center gap-4">
              <div>
                <p className="font-orbitron text-xl font-bold text-white">Scott Gordon</p>
                <p className="font-exo text-sm text-[#C9A84C] tracking-wider">aka Flash Gordon Pool</p>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-[#00BFFF]/30 to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
