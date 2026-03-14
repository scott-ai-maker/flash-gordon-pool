"use client";

export default function Footer() {
  const socialLinks = [
    {
      name: "YouTube",
      href: "https://www.youtube.com/@FlashGordonPool",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.5 15.5v-7l6.5 3.5-6.5 3.5z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/flashgordonpool",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.2c3.2 0 3.6 0 4.9.1 3.3.2 4.8 1.7 5 5 .1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.2 3.3-1.7 4.8-5 5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-3.3-.2-4.8-1.7-5-5C2 16.6 2 16.2 2 13s0-3.6.1-4.9c.2-3.3 1.7-4.8 5-5C8.4 2.2 8.8 2.2 12 2.2zm0-2.2C8.7 0 8.3 0 7 .1 2.7.3.3 2.7.1 7 0 8.3 0 8.7 0 12s0 3.7.1 5c.2 4.3 2.6 6.7 7 6.9 1.3.1 1.7.1 5 .1s3.7 0 5-.1c4.3-.2 6.7-2.6 6.9-7 .1-1.3.1-1.7.1-5s0-3.7-.1-5c-.2-4.3-2.6-6.7-7-6.9C15.7 0 15.3 0 12 0zm0 5.8a6.2 6.2 0 1 0 0 12.4A6.2 6.2 0 0 0 12 5.8zm0 10.2a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.8a1.4 1.4 0 1 0 0 2.8 1.4 1.4 0 0 0 0-2.8z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@flashgordonpool",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19.6 3.3A4.5 4.5 0 0 1 15.2 0h-3.4v16.4a2.6 2.6 0 0 1-2.6 2.2 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 2.6-2.6c.3 0 .5 0 .8.1V10a6 6 0 0 0-.8-.1 6 6 0 0 0-6 6 6 6 0 0 0 6 6 6 6 0 0 0 6-6V8.2a7.9 7.9 0 0 0 4.4 1.3V6.1a4.5 4.5 0 0 1-2.6-.8l.6-2z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/FlashGordonPool",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M24 12.1C24 5.4 18.6 0 12 0S0 5.4 0 12.1C0 18.1 4.4 23.1 10.1 24v-8.4H7.1v-3.5h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9v2.2h3.4l-.5 3.5h-2.8V24C19.6 23.1 24 18.1 24 12.1z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="relative bg-[#080f18] border-t border-[#00BFFF]/15 pt-16 pb-8 overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-[#00BFFF]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(0,191,255,0.04)_0%,transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="font-orbitron font-black text-2xl mb-3">
              <span className="text-white">FLASH</span>
              <span className="text-[#C9A84C]">GORDON</span>
              <span className="text-[#00BFFF]">POOL</span>
            </div>
            <p className="font-exo text-sm text-[#9ab0c8] leading-relaxed max-w-xs">
              Cinematic athlete brand documenting one of pool&apos;s boldest return stories in real time.
            </p>
          </div>

          {/* Navigate */}
          <div>
            <h5 className="font-orbitron text-xs text-[#C0C0C0] tracking-widest uppercase mb-4">Navigate</h5>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "#about" },
                { label: "The Journey", href: "#journey" },
                { label: "Gallery", href: "#gallery" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-exo text-sm text-[#9ab0c8] hover:text-[#00BFFF] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand Pillars */}
          <div>
            <h5 className="font-orbitron text-xs text-[#C0C0C0] tracking-widest uppercase mb-4">Focus</h5>
            <ul className="space-y-2.5">
              {[
                { label: "Daily Training", href: "#journey" },
                { label: "Public Comeback", href: "#journey" },
                { label: "Pro Tour Target", href: "#journey" },
                { label: "Appearances", href: "#contact" },
                { label: "Media / Press", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="font-exo text-sm text-[#9ab0c8] hover:text-[#00BFFF] transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social / CTA */}
          <div>
            <h5 className="font-orbitron text-xs text-[#C0C0C0] tracking-widest uppercase mb-4">Connect</h5>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 flex items-center justify-center border border-[#00BFFF]/25 text-[#9ab0c8] hover:border-[#00BFFF] hover:text-[#00BFFF] rounded transition-all duration-300"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-block font-orbitron text-xs font-bold tracking-widest uppercase px-4 py-2.5 rounded border border-[#C9A84C]/60 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            >
              Reach Out
            </a>
          </div>

        </div>

        {/* Divider */}
        <hr className="hr-electric mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-exo text-xs text-[#9ab0c8]/60">
            &copy; 2026 Flash Gordon Pool. All rights reserved.
          </p>
          <p className="font-orbitron text-xs text-[#00BFFF]/40 tracking-wider">
            The comeback nobody saw coming. ⚡
          </p>
        </div>
      </div>
    </footer>
  );
}
