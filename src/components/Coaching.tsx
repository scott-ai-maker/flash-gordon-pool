"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// These are the coaching tiers Flash will offer once he reaches pro status.
// Update featured/locked flags and CTAs when coaching officially opens.
const futurePlans = [
  {
    icon: "▲",
    title: "Private 1-on-1 Sessions",
    features: [
      "Full mechanical breakdown & stroke analysis",
      "Position play and pattern development",
      "Mental game and shot selection coaching",
      "Customized drills and training plan",
      "Video review available",
    ],
    featured: false,
  },
  {
    icon: "◆",
    title: "Intensive Training Camp",
    features: [
      "Multi-day deep-dive training",
      "Full game audit from scratch",
      "Advanced shot-making & safety play",
      "Tournament preparation strategy",
      "Ongoing support and follow-up",
      "Small group or private options",
    ],
    featured: true,
  },
  {
    icon: "●",
    title: "Online Video Coaching",
    features: [
      "Asynchronous video submission review",
      "Detailed written & video feedback",
      "Drill assignments and homework",
      "Flexible scheduling — any timezone",
      "Monthly package options",
    ],
    featured: false,
  },
];

const waitlistPerks = [
  {
    icon: "◎",
    title: "First Access",
    desc: "Waitlist members get priority booking before coaching opens to the public.",
  },
  {
    icon: "▸",
    title: "Insider Training Updates",
    desc: "Follow the journey in real time — drills, ratings, breakthroughs, and lessons learned on the road to pro.",
  },
  {
    icon: "✦",
    title: "Locked-In Rates",
    desc: "Founding client pricing will be offered to waitlist members only. It won't be available after launch.",
  },
];

export default function Coaching() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: wire up to email service (e.g. Mailchimp, ConvertKit, Resend)
    setJoined(true);
  };

  return (
    <section id="coaching" className="relative py-24 lg:py-32 bg-[#0d1b2a] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <hr className="hr-electric absolute top-0 left-0 right-0 m-0" />
      <hr className="hr-gold absolute bottom-0 left-0 right-0 m-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(0,191,255,0.07)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <span className="section-label">Coaching</span>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl mt-2 mb-4">
            Train With <span className="text-[#F5C400] text-shadow-gold">Flash</span>
          </h2>
        </motion.div>

        {/* Honest status banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="max-w-3xl mx-auto mb-14"
        >
          <div className="rounded-lg border border-[#F5C400]/30 bg-[#F5C400]/5 px-6 py-6 text-center">
            <p className="font-orbitron text-xs text-[#F5C400] tracking-widest uppercase mb-3">Current Status</p>
            <p className="font-exo text-white text-lg leading-relaxed mb-2">
              Flash is not taking coaching clients right now.
            </p>
            <p className="font-exo text-[#9ab0c8] leading-relaxed max-w-xl mx-auto">
              100% of his focus is on the pro tour. When he gets there — and he will — coaching opens.
              The experience he&apos;s building right now, every drill, every loss, every breakthrough,
              is what he&apos;ll bring to his students. Join the waitlist and be first in line.
            </p>
          </div>
        </motion.div>

        {/* Waitlist signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="max-w-xl mx-auto mb-20"
        >
          {joined ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-lg border border-[#00BFFF]/40 bg-[#080f18]/80 py-10 flex flex-col items-center gap-3 text-center"
            >
              <div className="text-4xl text-[#00BFFF]">✓</div>
              <p className="font-orbitron font-bold text-white text-lg">You&apos;re on the list.</p>
              <p className="font-exo text-[#9ab0c8] text-sm max-w-xs">
                Flash will reach out when coaching opens. Follow the journey in the meantime.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-[#080f18]/80 border border-[#00BFFF]/20 rounded px-4 py-3.5 font-exo text-white placeholder-[#9ab0c8]/50 focus:outline-none focus:border-[#00BFFF]/60 transition-colors"
              />
              <button
                type="submit"
                className="font-orbitron text-xs font-bold tracking-widest uppercase px-6 py-3.5 rounded bg-[#00BFFF] text-black hover:bg-white transition-all duration-300 glow-electric whitespace-nowrap"
              >
                Join the Waitlist
              </button>
            </form>
          )}
          {!joined && (
            <p className="font-exo text-xs text-[#9ab0c8]/50 text-center mt-3">
              No spam. No pressure. Just updates on the journey and first notice when spots open.
            </p>
          )}
        </motion.div>

        {/* Waitlist perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid sm:grid-cols-3 gap-6 mb-20"
        >
          {waitlistPerks.map((perk, i) => (
            <motion.div
              key={perk.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 + i * 0.1 }}
              className="bg-[#080f18]/60 border border-[#00BFFF]/15 rounded-lg p-5 text-center"
            >
              <div className="text-2xl text-[#00BFFF] mb-3">{perk.icon}</div>
              <h4 className="font-orbitron font-bold text-white text-sm mb-2">{perk.title}</h4>
              <p className="font-exo text-[#9ab0c8] text-sm leading-relaxed">{perk.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Future services preview */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-8 text-center"
        >
          <p className="font-orbitron text-xs text-[#C0C0C0] tracking-widest uppercase">
            What&apos;s Coming
          </p>
          <p className="font-exo text-[#9ab0c8] text-sm mt-1">
            A preview of the coaching programs Flash will offer post-pro.
          </p>
        </motion.div>

        {/* Locked service cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {futurePlans.map((plan, i) => (
            <motion.div
              key={plan.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 + 0.1 * i }}
              className={`relative flex flex-col rounded-lg overflow-hidden border ${
                plan.featured
                  ? "border-[#F5C400]/40 bg-[#080f18]"
                  : "border-[#00BFFF]/15 bg-[#080f18]/60"
              }`}
            >
              {/* Coming soon overlay */}
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-[#080f18]/60 backdrop-blur-[1px] rounded-lg">
                <span className="font-orbitron text-xs font-bold tracking-widest uppercase px-4 py-2 rounded border border-[#00BFFF]/30 text-[#00BFFF]/70 bg-[#080f18]/80">
                  Opens After Pro Tour
                </span>
              </div>

              {plan.featured && (
                <div className="absolute top-0 left-0 right-0 text-center py-1.5 bg-[#F5C400]/20 font-orbitron text-[#F5C400] text-xs font-bold tracking-widest uppercase z-0">
                  Featured
                </div>
              )}

              <div className={`p-6 lg:p-8 flex flex-col flex-1 ${plan.featured ? "pt-10" : ""}`}>
                <div className={`text-3xl mb-4 ${plan.featured ? "text-[#F5C400]/50" : "text-[#00BFFF]/50"}`}>
                  {plan.icon}
                </div>
                <h3 className="font-orbitron font-bold text-lg text-white/50 mb-2">{plan.title}</h3>
                <ul className="flex-1 space-y-3 mt-4">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 font-exo text-sm text-[#9ab0c8]/40">
                      <span className="mt-0.5 text-xs text-[#00BFFF]/30">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
