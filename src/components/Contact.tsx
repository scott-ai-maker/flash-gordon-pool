"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const socialLinks = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@FlashGordonPool",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/flashgordonpool",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.2 3.3-1.7 4.8-5 5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.2-4.8-1.7-5-5C2 16.6 2 16.2 2 13s0-3.6.1-4.9c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 7 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-7 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.3-2.6-6.7-7-6.9C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@flashgordonpool",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.4v16.4a2.6 2.6 0 0 1-2.6 2.2 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.3 0 .5 0 .8.1V10a6 6 0 0 0-.8-.1 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6V8.2a7.9 7.9 0 0 0 4.4 1.3V6.1a4.5 4.5 0 0 1-2.6-.8l.6-2z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/FlashGordonPool",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z"/>
      </svg>
    ),
  },
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
    <section id="contact" className="relative py-24 lg:py-32 bg-[#0d1b2a] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <hr className="hr-electric absolute top-0 left-0 right-0 m-0" />

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom-right,rgba(201,168,76,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span className="section-label">Make Contact</span>
          <h2 className="font-orbitron font-black text-4xl sm:text-5xl mt-2 mb-4">
            Join The <span className="text-[#C9A84C] text-shadow-gold">Mission</span>
          </h2>
          <p className="font-exo text-[#9ab0c8] max-w-xl mx-auto">
            This is not a formality. It is an invitation. Follow the comeback, talk media, discuss sponsorships, or reach out directly from Fitchburg to wherever you are.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {[
              {
                icon: "✉",
                label: "Email",
                value: "flash@flashgordonpool.com",
                href: "mailto:flash@flashgordonpool.com",
              },
              {
                icon: "◉",
                label: "Based In",
                value: "Fitchburg, MA",
                href: null,
              },
              {
                icon: "⚡",
                label: "Website",
                value: "flashgordonpool.com",
                href: "https://flashgordonpool.com",
              },
            ].map((info) => (
              <div
                key={info.label}
                className="flex items-start gap-4 p-4 bg-[#080f18]/60 border border-[#00BFFF]/15 rounded-lg hover:border-[#00BFFF]/40 transition-colors"
              >
                <span className="text-[#00BFFF] text-xl mt-0.5 w-8 flex-shrink-0">{info.icon}</span>
                <div>
                  <p className="font-orbitron text-xs text-[#C0C0C0] tracking-wider uppercase mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-exo text-white hover:text-[#00BFFF] transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className="font-exo text-white">{info.value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="pt-4">
              <p className="font-orbitron text-xs text-[#C0C0C0] tracking-wider uppercase mb-4">Follow Flash</p>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-[#080f18]/60 border border-[#00BFFF]/15 rounded-lg hover:border-[#00BFFF]/50 hover:bg-[#00BFFF]/5 text-[#9ab0c8] hover:text-[#00BFFF] transition-all duration-300 font-exo text-sm"
                  >
                    {s.icon}
                    <span>{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <a
              href="mailto:flash@flashgordonpool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-orbitron text-xs font-bold tracking-widest uppercase px-6 py-3 rounded border border-[#C9A84C]/70 text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C] transition-all duration-300"
            >
              Direct Message Flash
              <span>↗</span>
            </a>
          </motion.div>

          {/* Invitation panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative rounded-xl border border-[#00BFFF]/20 bg-[#080f18]/70 p-6 sm:p-8 lg:p-10 backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(201,168,76,0.14)_0%,transparent_65%)] pointer-events-none" />
            <div className="relative z-10">
              <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.25em] uppercase mb-3">Open Channels</p>
              <h3 className="font-orbitron text-2xl sm:text-3xl font-bold text-white leading-tight mb-4">
                For media, sponsors, collabs, and fans tracking every rack.
              </h3>
              <p className="font-exo text-[#9ab0c8] leading-relaxed mb-8">
                If you believe in disciplined comebacks, high-performance training, and big goals pursued in public, this is your lane.
                Connect and be part of what comes next.
              </p>

              <div className="grid sm:grid-cols-3 gap-3 mb-8">
                {[
                  {
                    label: "Media",
                    copy: "Interview requests and feature stories.",
                    href: "mailto:flash@flashgordonpool.com?subject=Media%20Request",
                  },
                  {
                    label: "Sponsors",
                    copy: "Partnership opportunities and brand fit.",
                    href: "mailto:flash@flashgordonpool.com?subject=Sponsor%20Inquiry",
                  },
                  {
                    label: "Events",
                    copy: "Appearances, collabs, and community events.",
                    href: "mailto:flash@flashgordonpool.com?subject=Event%20Inquiry",
                  },
                ].map((channel) => (
                  <a
                    key={channel.label}
                    href={channel.href}
                    className="rounded-lg border border-[#00BFFF]/20 bg-[#0a1628]/70 p-4 hover:border-[#00BFFF]/50 transition-colors"
                  >
                    <p className="font-orbitron text-xs tracking-widest uppercase text-[#00BFFF] mb-2">{channel.label}</p>
                    <p className="font-exo text-xs text-[#9ab0c8] leading-relaxed">{channel.copy}</p>
                  </a>
                ))}
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <a
                  href="https://www.youtube.com/@FlashGordonPool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-orbitron text-xs text-center font-bold tracking-widest uppercase px-4 py-3 rounded bg-[#00BFFF] text-black hover:bg-white transition-all duration-300"
                >
                  Watch on YouTube
                </a>
                <a
                  href="https://www.instagram.com/flashgordonpool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-orbitron text-xs text-center font-bold tracking-widest uppercase px-4 py-3 rounded border border-[#00BFFF]/50 text-[#00BFFF] hover:bg-[#00BFFF]/10 transition-all duration-300"
                >
                  Follow on Instagram
                </a>
              </div>

              <div id="mission-brief" className="mt-8 pt-6 border-t border-[#00BFFF]/15">
                <p className="font-orbitron text-xs text-[#C9A84C] tracking-[0.25em] uppercase mb-2">Mission Brief</p>
                <p className="font-exo text-sm text-[#9ab0c8] mb-4">
                  Get major rating jumps, tournament milestones, and comeback updates first.
                </p>

                {joinedBrief ? (
                  <div className="rounded-lg border border-[#00BFFF]/30 bg-[#00BFFF]/10 px-4 py-3 font-exo text-sm text-[#cfefff]">
                    Mission brief request queued. Check your email draft and send to confirm.
                  </div>
                ) : (
                  <form onSubmit={handleMissionBriefSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      required
                      value={briefEmail}
                      onChange={(e) => setBriefEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="flex-1 bg-[#080f18]/80 border border-[#00BFFF]/20 rounded px-4 py-3 font-exo text-white placeholder-[#9ab0c8]/50 focus:outline-none focus:border-[#00BFFF]/60 transition-colors"
                    />
                    <button
                      type="submit"
                      className="font-orbitron text-xs font-bold tracking-widest uppercase px-5 py-3 rounded bg-[#00BFFF] text-black hover:bg-white transition-colors"
                    >
                      Join Updates
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
