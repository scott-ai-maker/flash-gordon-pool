"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  { name: "YouTube", href: "https://www.youtube.com/@FlashGordonPool" },
  { name: "Instagram", href: "https://www.instagram.com/flashgordonpool" },
  { name: "TikTok", href: "https://www.tiktok.com/@flashgordonpool" },
  { name: "Facebook", href: "https://www.facebook.com/FlashGordonPool" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [briefEmail, setBriefEmail] = useState("");
  const [joinedBrief, setJoinedBrief] = useState(false);

  const handleMissionBriefSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!briefEmail) return;

    const subject = encodeURIComponent("Mission Brief Signup");
    const body = encodeURIComponent(
      `Please add me to the Flash Gordon Pool mission brief updates.\n\nEmail: ${briefEmail}`
    );

    window.location.href = `mailto:flash@flashgordonpool.com?subject=${subject}&body=${body}`;
    setJoinedBrief(true);
    setBriefEmail("");
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,24,0.95),rgba(13,27,42,0.88))]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="section-label">Get In Touch</span>
          <h2 className="brand-title text-4xl sm:text-5xl text-white mt-2 mb-4">
            Fans First, <span className="text-[#C9A84C]">Partners Welcome</span>
          </h2>
          <p className="font-exo text-[#c6d3df] max-w-2xl mx-auto">
            Follow the journey, subscribe for updates, or reach out for partnerships, interviews, and event opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="brand-panel p-6 sm:p-8"
          >
            <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.2em] uppercase mb-3">Sponsor and Media</p>
            <h3 className="brand-title text-2xl text-white mb-3">Partnership and Media Inquiries</h3>
            <p className="font-exo text-[#c4d1de] leading-relaxed mb-6">
              Reach out for sponsorship discussions, branded media opportunities, interviews, and event bookings.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="mailto:flash@flashgordonpool.com"
                className="block rounded-xl border border-[#00BFFF]/25 bg-[#0a1628]/70 px-4 py-3 font-exo text-white hover:border-[#00BFFF]/60 transition-colors"
              >
                flash@flashgordonpool.com
              </a>
              <div className="rounded-xl border border-[#00BFFF]/20 bg-[#0a1628]/60 px-4 py-3 font-exo text-[#d2dfeb]">
                Fitchburg, Massachusetts
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href="mailto:flash@flashgordonpool.com?subject=Sponsor%20Inquiry"
                className="font-orbitron text-xs font-bold tracking-[0.15em] uppercase text-center px-4 py-3 rounded-full bg-[#00BFFF] text-black hover:bg-white transition-colors"
              >
                Partnership Inquiry
              </a>
              <a
                href="mailto:flash@flashgordonpool.com?subject=Media%20Request"
                className="font-orbitron text-xs font-bold tracking-[0.15em] uppercase text-center px-4 py-3 rounded-full border border-[#C9A84C]/70 text-[#C9A84C] hover:bg-[#C9A84C]/10 transition-colors"
              >
                Media Booking
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.14 }}
            className="brand-panel p-6 sm:p-8"
          >
            <p className="font-orbitron text-xs text-[#C9A84C] tracking-[0.2em] uppercase mb-3">Fan Community</p>
            <h3 className="brand-title text-2xl text-white mb-3">Player Update List</h3>
            <p className="font-exo text-[#c4d1de] leading-relaxed mb-5">
              Get weekly progress updates, match clips, and upcoming event news directly.
            </p>

            {joinedBrief ? (
              <div className="rounded-xl border border-[#00BFFF]/30 bg-[#00BFFF]/10 px-4 py-3 font-exo text-sm text-[#cfefff] mb-5">
                Update request queued. Check your email draft and send to confirm.
              </div>
            ) : (
              <form onSubmit={handleMissionBriefSubmit} className="flex flex-col sm:flex-row gap-3 mb-5">
                <input
                  type="email"
                  required
                  value={briefEmail}
                  onChange={(e) => setBriefEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 bg-[#080f18]/80 border border-[#00BFFF]/20 rounded-full px-4 py-3 font-exo text-white placeholder-[#9ab0c8]/50 focus:outline-none focus:border-[#00BFFF]/60 transition-colors"
                />
                <button
                  type="submit"
                  className="font-orbitron text-xs font-bold tracking-[0.15em] uppercase px-5 py-3 rounded-full bg-[#00BFFF] text-black hover:bg-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="grid grid-cols-2 gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#00BFFF]/20 bg-[#0a1628]/65 px-4 py-3 font-exo text-sm text-[#d2dfeb] hover:border-[#00BFFF]/55 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
