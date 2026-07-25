"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  label: string;
  category: "all" | "character" | "action" | "events";
  large?: boolean;
  focusClass?: string;
};

const items: GalleryItem[] = [
  { src: "/images/gallery-character-poster.jpg", alt: "Flash Gordon Pool — Player Portrait", label: "Player Portrait", category: "character", focusClass: "object-[50%_14%]" },
  { src: "/images/gallery-action-shot.jpg", alt: "Flash Gordon Pool — Match Action", label: "Match Action", category: "action", focusClass: "object-center" },
  { src: "/images/gallery-press-kit.jpg", alt: "Flash Gordon Pool — Media Portrait", label: "Media Portrait", category: "character", large: true, focusClass: "object-[50%_20%]" },
  { src: "/images/gallery-tournament-atmosphere.jpg", alt: "Flash Gordon Pool — Tournament Atmosphere", label: "Tournament Atmosphere", category: "events", focusClass: "object-center" },
  { src: "/images/gallery-fan-community.jpg", alt: "Flash Gordon Pool — Community Event", label: "Community Event", category: "events", focusClass: "object-center" },
  { src: "/images/gallery-closeup-precision.jpg", alt: "Flash Gordon Pool — Shot Precision", label: "Shot Precision", category: "action", focusClass: "object-center" },
];

const filters = [
  { label: "All", value: "all" },
  { label: "Player", value: "character" },
  { label: "Competition", value: "action" },
  { label: "Events", value: "events" },
] as const;

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeFilter, setActiveFilter] = useState<"all" | "character" | "action" | "events">("all");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeFilter === "all" ? items : items.filter((i) => i.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,27,42,0.86),rgba(8,15,24,0.94))]" />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <span className="section-label">Fan Gallery</span>
          <h2 className="brand-title text-4xl sm:text-5xl mt-2 mb-4 text-white">
            Match And Community <span className="text-[#C9A84C]">Moments</span>
          </h2>
          <p className="font-exo text-[#c4d2de] max-w-xl mx-auto">
            A curated mix of competition images, behind-the-scenes highlights, and shareable fan content.
          </p>
          <p className="font-exo text-xs sm:text-sm text-[#9cb2c8] max-w-2xl mx-auto mt-4">
            Image disclosure: Gallery visuals are AI-generated concept renders for brand storytelling and promotional design. They are not presented as documentary match photography.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`font-orbitron text-xs tracking-wider uppercase px-4 py-2 rounded-full border transition-all duration-300 ${
                activeFilter === f.value
                  ? "bg-[#00BFFF] text-black border-[#00BFFF]"
                  : "border-[#00BFFF]/25 text-[#b8c6d4] hover:border-[#00BFFF]/55 hover:text-white"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[170px] sm:auto-rows-[200px]">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.div
                key={item.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className={`relative overflow-hidden rounded-xl border border-[#00BFFF]/18 bg-[#0b1522] cursor-pointer group ${
                  item.large ? "row-span-2" : ""
                }`}
                onClick={() => setLightbox(item)}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 48vw, (max-width: 1024px) 32vw, 24vw"
                  className={`${item.focusClass ?? "object-center"} object-cover transition-transform duration-500 group-hover:scale-110`}
                  onError={(e) => { (e.target as HTMLElement).style.display = "none"; }}
                />

                <div className="absolute inset-0 bg-gradient-to-b from-[#080f18]/0 via-[#080f18]/0 to-[#080f18]/35" />

                {/* Placeholder */}
                <div className="absolute inset-0 bg-[#0d1b2a] flex flex-col items-center justify-center font-orbitron -z-10">
                  <div className="text-4xl text-[#00BFFF]/20 mb-2">FG</div>
                  <p className="text-[#00BFFF]/40 text-[10px] tracking-widest text-center px-2">{item.label}</p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f18]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="font-orbitron text-xs text-[#00BFFF] tracking-wider uppercase">{item.label}</span>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 border border-[#00BFFF]/0 group-hover:border-[#00BFFF]/55 rounded-xl transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a
            href="#contact"
            className="inline-block font-orbitron text-sm font-bold tracking-[0.15em] uppercase px-8 py-4 rounded-full border border-[#00BFFF]/50 text-[#00BFFF] hover:bg-[#00BFFF]/10 hover:border-[#00BFFF] transition-all duration-300"
          >
            Join For More Updates
          </a>
        </motion.div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[85vh] w-full aspect-video rounded-lg overflow-hidden border border-[#00BFFF]/30 glow-electric"
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox.src} alt={lightbox.alt} fill sizes="90vw" className="object-contain" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                <p className="font-orbitron text-sm text-[#00BFFF]">{lightbox.label}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 font-orbitron text-[#C0C0C0] hover:text-white text-xl w-8 h-8 flex items-center justify-center border border-[#C0C0C0]/30 rounded hover:border-white transition-colors"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
