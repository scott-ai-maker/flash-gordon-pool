"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navLinks = [
  { label: "Story", href: "#about" },
  { label: "Journey", href: "#journey" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      setShowMobileCta(window.scrollY > 340);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080f18]/90 backdrop-blur-xl border-b border-[#00BFFF]/15 shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
          : "bg-[#080f18]/25 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#hero" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Flash Gordon Pool"
              width={160}
              height={48}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-exo text-sm font-semibold tracking-wide text-[#C0C0C0] hover:text-white transition-colors duration-200 uppercase relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#00BFFF] to-[#C9A84C] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="#contact"
              className="font-orbitron text-xs font-bold tracking-[0.18em] uppercase px-5 py-2.5 rounded-full border border-[#C9A84C]/70 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300"
            >
              Join Updates
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 group"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-[#00BFFF] transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00BFFF] transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[#00BFFF] transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#080f18]/98 backdrop-blur-lg border-b border-[#00BFFF]/20 overflow-hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="font-exo text-base font-semibold tracking-wider text-[#C0C0C0] hover:text-white transition-colors duration-200 uppercase py-2 border-b border-[#00BFFF]/10"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={handleNavClick}
                className="font-orbitron text-sm font-bold tracking-[0.18em] uppercase px-5 py-3 rounded-full border border-[#C9A84C]/70 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 text-center mt-2"
              >
                Join Updates
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className={`md:hidden fixed bottom-4 left-4 right-4 z-30 pointer-events-none transition-all duration-300 ${
          mobileOpen || !showMobileCta ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
        aria-hidden={mobileOpen || !showMobileCta}
      >
        <div className="pointer-events-auto rounded-xl border border-[#00BFFF]/25 bg-[#080f18]/95 backdrop-blur-md p-2 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
          <div className="grid grid-cols-2 gap-2">
            <a
              href="#contact"
              className="font-orbitron text-[10px] font-bold tracking-[0.18em] uppercase text-center px-3 py-2.5 rounded-lg bg-[#00BFFF] text-black"
            >
              Join
            </a>
            <a
              href="https://www.youtube.com/@FlashGordonPool"
              target="_blank"
              rel="noopener noreferrer"
              className="font-orbitron text-[10px] font-bold tracking-[0.18em] uppercase text-center px-3 py-2.5 rounded-lg border border-[#C9A84C]/70 text-[#C9A84C]"
            >
              Watch
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
