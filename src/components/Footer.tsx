"use client";

export default function Footer() {
  const socialLinks = [
    { name: "YouTube", href: "https://www.youtube.com/@FlashGordonPool" },
    { name: "Instagram", href: "https://www.instagram.com/flashgordonpool" },
    { name: "TikTok", href: "https://www.tiktok.com/@flashgordonpool" },
    { name: "Facebook", href: "https://www.facebook.com/FlashGordonPool" },
  ];

  return (
    <footer className="relative border-t border-[#00BFFF]/15 py-12 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,24,0.96),rgba(8,15,24,1))]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[780px] h-px bg-gradient-to-r from-transparent via-[#00BFFF]/45 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 mb-10">
          <div className="lg:col-span-2">
            <h4 className="brand-title text-2xl text-white leading-tight">
              Flash Gordon Pool
              <span className="block text-[#C9A84C] text-lg mt-1">A cue sports journey fans can follow</span>
            </h4>
            <p className="font-exo text-[#b8c7d4] mt-3 max-w-lg">
              Match progress, training insights, and community-first updates from Fitchburg, Massachusetts.
            </p>
          </div>

          <div>
            <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.2em] uppercase mb-3">Explore</p>
            <div className="space-y-2 text-sm font-exo text-[#c5d2df]">
              <a href="#about" className="block hover:text-white transition-colors">Story</a>
              <a href="#journey" className="block hover:text-white transition-colors">Journey</a>
              <a href="#gallery" className="block hover:text-white transition-colors">Gallery</a>
              <a href="#contact" className="block hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div>
            <p className="font-orbitron text-xs text-[#00BFFF] tracking-[0.2em] uppercase mb-3">Follow</p>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#00BFFF]/25 px-3 py-2 text-center font-exo text-sm text-[#c5d2df] hover:border-[#00BFFF]/60 hover:text-white transition-colors"
                >
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-[#00BFFF]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-exo text-xs text-[#9bb0c6]">© 2026 Flash Gordon Pool. All rights reserved.</p>
          <p className="font-orbitron text-[11px] text-[#00BFFF]/75 tracking-[0.14em] uppercase">Cue sports. Community. Comeback.</p>
        </div>
      </div>
    </footer>
  );
}
