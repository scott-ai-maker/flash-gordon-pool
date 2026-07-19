import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Gordon Pool | The Comeback Nobody Saw Coming",
  description:
    "Follow Flash Gordon Pool as Scott Gordon documents his cue sports comeback with match clips, training progress, and community updates from Fitchburg, MA.",
  keywords: ["cue sports comeback", "pool player", "billiards", "Flash Gordon Pool", "Scott Gordon", "WPB rating", "Fitchburg MA", "pool match clips"],
  openGraph: {
    title: "Flash Gordon Pool",
    description: "A fan-forward cue sports platform featuring match clips, training milestones, and the ongoing comeback journey.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#080f18] text-[#e8e8e8]">
        {children}
        <GoogleAnalytics gaId="G-LYJT5990J1" />
      </body>
    </html>
  );
}
