import Link from "next/link";

const releases = [
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
          "Facebook URL corrected to real profile in Contact and Footer (profile.php?id=61574799655550)",
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
          "Tournaments section",
          "Coaching section with packages and booking CTA",
          "Gallery section",
          "Contact section with form and social links (YouTube, Instagram, TikTok, Facebook)",
          "Footer with navigation, services, and connect links",
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
  Changed: "text-[#F5C400]",
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
            Change<span className="text-[#F5C400]">log</span>
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
