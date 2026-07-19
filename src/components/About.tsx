"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const highlights = [
  {
    title: "Verified Comeback",
    copy: "A documented 25-year return to competition with measurable progress and authentic story value.",
  },
  {
    title: "Practice Discipline",
    copy: "Structured drills, routine review, and repeatable standards that support long-term results.",
  },
  {
    title: "Fan Connection",
    copy: "Consistent updates, honest storytelling, and match content that keeps the community involved.",
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,42,0.8),rgba(8,15,24,0.92))]" />
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded-[24px] bg-gradient-to-br from-[#00BFFF]/20 to-transparent blur-xl" />
            <div className="relative brand-panel p-3">
              <div className="relative aspect-[3/4] rounded-[18px] overflow-hidden border border-[#00BFFF]/25">
                <Image
                  src="/images/about-pro-portrait.jpg"
                  alt="Scott Gordon - Flash Gordon Pool"
                  fill
                  sizes="(max-width: 1024px) 92vw, 36vw"
                  className="object-cover object-[50%_20%] scale-[1.04]"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />

                <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_72%_at_50%_38%,transparent_46%,rgba(8,15,24,0.4)_100%)]" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 26 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="section-label">Player Profile</span>
            <h2 className="brand-title text-4xl sm:text-5xl leading-tight text-white mt-2 mb-5">
              The Professional Behind
              <span className="text-[#C9A84C]"> Flash Gordon Pool</span>
            </h2>

            <p className="font-exo text-[#c5d2df] leading-relaxed mb-4">
              Scott Gordon began playing cue sports in Fitchburg, Massachusetts at age 10 and competed through his teens before stepping away to focus on family and career. After 25 years, he returned with a professional objective: rebuild to a tour-ready level through disciplined practice and competitive reps.
            </p>
            <p className="font-exo text-[#c5d2df] leading-relaxed mb-7">
              Today, Flash Gordon Pool gives fans a front-row view of the work: transparent progress, real performance data, and a comeback built one session at a time.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {highlights.map((item) => (
                <div key={item.title} className="brand-panel p-4">
                  <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.18em] uppercase mb-2">{item.title}</p>
                  <p className="font-exo text-sm text-[#cfdae6] leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
