import Link from "next/link";

const releases = [
  {
    version: "0.6.1",
    date: "2026-03-14",
    changes: [
      {
        type: "Added",
        items: [
          "Google Analytics 4 integrated via @next/third-parties for Next.js 14 App Router",
          "GoogleAnalytics added to root app layout with measurement ID G-LYJT5990J1",
          "GA4 implemented without raw gtag script tags, using the official optimized integration path",
        ],
      },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-03-14",
    changes: [
      {
        type: "Changed",
        items: [
          "Conversion optimization pass across Hero, Contact, and mobile navigation",
          "Added hero CTA cluster for New Clips, Sponsor/Media, and Mission Brief entry",
          "Added mission-brief signup module and purpose-based contact channels (Media, Sponsors, Events)",
          "Added mobile sticky conversion bar for Contact Flash and Watch Clips actions",
          "Improved CTA hierarchy to convert visitors into followers, inquiries, and warm leads",
        ],
      },
    ],
  },
  {
    version: "0.5.0",
    date: "2026-03-14",
    changes: [
      {
        type: "Changed",
        items: [
          "Hero redesigned with cinematic ESPN-style opening, updated stats, and WPB/Fargo disclaimer",
          "Navigation updated: Results renamed to The Journey, coaching links removed, Book Now now scrolls to contact",
          "About section fully aligned to the authentic comeback story and updated equipment/training narrative",
          "Tournament Results replaced with The Journey timeline road map (2024 return to 2027+ pro tour target)",
          "Contact section rewritten from form-style to cinematic invitation style with updated location and social channels",
          "Footer rebuilt with social icons, updated links, 2026 copyright, and brand tagline",
          "Gold accent system updated to brand color #C9A84C and global background polish improved",
        ],
      },
      {
        type: "Removed",
        items: [
          "Coaching section removed from homepage flow",
          "Coaching references removed from navigation and primary CTAs",
        ],
      },
    ],
  },
  {
    version: "0.2.0",
    date: "2026-03-14",
    changes: [
      {
        type: "Changed",
        items: [
          "About section — complete copy rewrite with authentic origin story: Fitchburg roots at age 10, family choice, 25-year gap, return to the game",
          "About headline updated to \"The Man Behind The Legend\"",
          "About subheadline: \"They call him Flash — not because he's fast, but because when he steps to the table, the room lights up.\"",
          "About stats updated: 15+ Years Experience | 620+ WPB Rated | Back & Better",
          "About signature tagline updated to \"aka Flash Gordon Pool\"",
          "Facebook URL corrected in Contact and Footer",
        ],
      },
    ],
  },
  {
    version: "0.1.0",
    date: "2026-03-13",
    changes: [
      {
        type: "Added",
        items: [
          "Initial site launch",
          "Hero section with animated tagline and CTA",
          "About section with origin story and stats",
          "Results section",
          "Gallery section",
          "Contact section with form and social links (YouTube, Instagram, TikTok, Facebook)",
          "Footer with navigation and connect links",
          "Responsive mobile-first layout",
          "Sci-fi dark theme with electric blue and gold accent palette",
          "Framer Motion scroll animations throughout",
          "Next.js 14 App Router + Tailwind CSS + TypeScript",
        ],
      },
    ],
  },
];

const typeColor: Record<string, string> = {
  Added: "text-[#00BFFF]",
  Changed: "text-[#C9A84C]",
  Fixed: "text-emerald-400",
  Removed: "text-red-400",
};

export const metadata = {
  title: "Changelog — Flash Gordon Pool",
  description: "Version history and release notes for FlashGordonPool.com",
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen bg-[#0d1b2a] pt-28 pb-24 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="font-exo text-sm text-[#00BFFF] hover:text-white transition-colors mb-6 inline-block"
          >
            ← Back to site
          </Link>
          <p className="font-orbitron text-xs text-[#00BFFF] tracking-widest uppercase mb-2">Release Notes</p>
          <h1 className="font-orbitron font-black text-4xl sm:text-5xl text-white mb-4">
            Change<span className="text-[#C9A84C]">log</span>
          </h1>
          <p className="font-exo text-[#9ab0c8]">
            Version history for FlashGordonPool.com. Follows{" "}
            <a
              href="https://semver.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00BFFF] hover:underline"
            >
              Semantic Versioning
            </a>
            .
          </p>
        </div>

        {/* Releases */}
        <div className="space-y-10">
          {releases.map((release) => (
            <div
              key={release.version}
              className="border border-[#00BFFF]/15 rounded-lg bg-[#080f18]/60 overflow-hidden"
            >
              {/* Version header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-[#00BFFF]/10 bg-[#080f18]/80">
                <div className="flex items-center gap-3">
                  <span className="font-orbitron font-bold text-xl text-white">
                    v{release.version}
                  </span>
                </div>
                <span className="font-exo text-sm text-[#9ab0c8]">{release.date}</span>
              </div>

              {/* Change groups */}
              <div className="px-6 py-5 space-y-5">
                {release.changes.map((group) => (
                  <div key={group.type}>
                    <p className={`font-orbitron text-xs font-bold tracking-widest uppercase mb-3 ${typeColor[group.type] ?? "text-white"}`}>
                      {group.type}
                    </p>
                    <ul className="space-y-2">
                      {group.items.map((item, i) => (
                        <li key={i} className="font-exo text-sm text-[#9ab0c8] flex gap-2">
                          <span className="text-[#00BFFF]/50 mt-0.5 flex-shrink-0">—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
