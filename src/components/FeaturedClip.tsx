"use client";

import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

export default function FeaturedClip() {
  return (
    <section id="featured-clip" className="relative py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,19,31,0.98),rgba(8,15,24,0.95))]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.55 }}
          className="brand-panel p-6 sm:p-8 lg:p-10"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 items-center">
            <div>
              <span className="section-label">Featured Match Clip</span>
              <h2 className="brand-title text-3xl sm:text-4xl text-white mt-2 mb-4">
                Real Table Action, <span className="text-[#C9A84C]">No Concept Art</span>
              </h2>
              <p className="font-exo text-[#c5d2df] leading-relaxed mb-4">
                For authentic performance footage, watch the latest matches on YouTube. This is the primary source for documented shot-making, pressure decisions, and competitive progress.
              </p>
              <p className="font-exo text-xs sm:text-sm text-[#9fb4ca] mb-6">
                Verification note: match clips are real gameplay recordings. AI visuals on this site are clearly labeled as concept media.
              </p>

              <a
                href="https://www.youtube.com/@FlashGordonPool/videos"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("cta_click", { location: "featured_clip", cta: "watch_latest_match_clips" })}
                className="inline-flex items-center font-orbitron text-xs sm:text-sm font-bold tracking-[0.15em] uppercase px-6 py-3 rounded-full bg-[#00BFFF] text-black hover:bg-white transition-colors"
              >
                Watch Latest Match Clips
              </a>
            </div>

            <div className="relative">
              <div className="rounded-2xl border border-[#00BFFF]/30 bg-[radial-gradient(circle_at_20%_15%,rgba(0,191,255,0.18),transparent_50%),linear-gradient(160deg,#0b1626,#0d2236)] p-6 sm:p-8">
                <p className="font-orbitron text-[11px] tracking-[0.2em] uppercase text-[#00BFFF] mb-3">What Fans Get</p>
                <ul className="space-y-3 font-exo text-[#d3ddea] text-sm sm:text-base">
                  <li>Full-pressure league and event moments</li>
                  <li>Consistent progress evidence over time</li>
                  <li>Direct community updates from the player</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
