# Changelog

All notable changes to Flash Gordon Pool will be documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).
Versioning follows [Semantic Versioning](https://semver.org/).

---

## [0.4.0] — 2026-03-14

### Changed

- **Coaching section** — full redesign to reflect Flash's current focus on going pro
  - Removed all active booking CTAs and pricing
  - Added honest status banner: coaching is not open; 100% focus is on the pro tour
  - Added waitlist/newsletter email capture with success confirmation state
  - Added three waitlist perks: First Access, Insider Training Updates, Locked-In Rates
  - Future coaching tiers kept as a locked preview ("Opens After Pro Tour" overlay) to sustain interest
  - TODO comment left in waitlist form to wire up to email service (Mailchimp, ConvertKit, Resend, etc.)
- Bumped version to 0.4.0

---

## [0.3.0] — 2026-03-14

### Changed

- **Tournaments section** — removed fake placeholder results from Recent Results tab
  - Empty state now shows honest "No Major Events Yet" message with "Season in Progress" badge
  - Results table will render automatically once events are added to `recentResults` array
- **Career Highlights** — updated to match accurate origin story (Fitchburg roots, WPB 620 rating, real training setup, pro tour target)
- Bumped version to 0.3.0

---

## [0.2.0] — 2026-03-14

### Changed

- **About section** — Complete copy rewrite
  - Headline updated to "The Man Behind The Legend"
  - Subheadline: "They call him Flash — not because he's fast, but because when he steps to the table, the room lights up."
  - All three paragraphs rewritten with authentic origin story: Fitchburg roots, family choice, 25-year gap, return to the game, current training setup (Brunswick Gold Crown 9ft, Simonis 870, McDermott H1752 / Defy carbon fiber shaft)
  - Signature tagline updated to "aka Flash Gordon Pool"
  - Stats updated: 15+ Years Experience | 620+ WPB Rated | Back & Better
- **Social media links** — Facebook URL corrected to real profile page in both Contact and Footer components
  - Contact: `https://www.facebook.com/profile.php?id=61574799655550`
  - Footer: `https://www.facebook.com/profile.php?id=61574799655550`

---

## [0.1.0] — 2026-03-13

### Added

- Initial site launch
- Hero section with animated tagline and CTA
- About section with origin story and stats
- Tournaments section
- Coaching section with packages and booking CTA
- Gallery section
- Contact section with form and social links (YouTube, Instagram, TikTok, Facebook)
- Footer with navigation, services, and connect links
- Responsive layout (mobile-first)
- Sci-fi / dark theme with electric blue and gold accent palette
- Framer Motion scroll animations throughout
- Next.js 14 App Router + Tailwind CSS + TypeScript
