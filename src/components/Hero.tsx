"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sponsorProof = [
  { label: "Years at the table", value: "15+" },
  { label: "Current WPB rating", value: "620+" },
  { label: "Fan updates", value: "Weekly" },
];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_74%_22%,rgba(201,168,76,0.17),transparent_72%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_56%_at_10%_18%,rgba(0,191,255,0.2),transparent_68%)]" />
      <div className="absolute inset-0 grid-bg opacity-25" />
      <div className="noise-overlay" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="section-label"
            >
              Cue Sports Journey | Fitchburg, MA
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="brand-title text-5xl sm:text-6xl lg:text-7xl leading-[0.95]"
            >
              <span className="text-white block">FLASH GORDON</span>
              <span className="text-[#C9A84C] block">POOL</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-6 max-w-xl text-base sm:text-lg text-[#c6d3e0] leading-relaxed"
            >
              Follow Scott Gordon&apos;s return to high-level competition through real match clips, training milestones, and weekly progress updates built for the cue sports community.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#contact"
                className="font-orbitron text-xs sm:text-sm font-bold tracking-[0.15em] uppercase px-6 py-3 rounded-full bg-[#00BFFF] text-black hover:bg-white transition-colors"
              >
                Join The Journey
              </a>
              <a
                href="https://www.youtube.com/@FlashGordonPool"
                target="_blank"
                rel="noopener noreferrer"
                className="font-orbitron text-xs sm:text-sm font-bold tracking-[0.15em] uppercase px-6 py-3 rounded-full border border-[#C9A84C]/80 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
              >
                Watch Match Clips
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38 }}
              className="mt-10 grid sm:grid-cols-3 gap-3"
            >
              {sponsorProof.map((item) => (
                <div key={item.label} className="brand-panel p-4">
                  <p className="font-orbitron text-2xl text-[#00BFFF] font-extrabold">{item.value}</p>
                  <p className="font-exo text-xs text-[#c0cddd] uppercase tracking-[0.12em] mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-tr from-[#00BFFF]/25 via-transparent to-[#C9A84C]/25 blur-2xl" />
            <div className="relative brand-panel p-3 sm:p-4">
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden border border-[#00BFFF]/30">
                <Image
                  src="/images/hero-pro-portrait.jpg"
                  alt="Flash Gordon Pool"
                  fill
                  sizes="(max-width: 1024px) 92vw, 42vw"
                  className="object-cover object-[50%_18%] scale-[1.08]"
                  priority
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_80%_at_50%_42%,transparent_52%,rgba(7,17,29,0.45)_100%)]" />

                <div className="absolute left-4 right-4 bottom-4 rounded-xl border border-[#00BFFF]/30 bg-[#07111d]/88 backdrop-blur-md p-4">
                  <p className="font-orbitron text-[10px] tracking-[0.22em] uppercase text-[#00BFFF]">Fan First Access</p>
                  <p className="font-exo text-sm text-[#d7e4ef] mt-2">
                    Every practice block, pressure match, and rating jump documented so fans can track the full comeback in real time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
