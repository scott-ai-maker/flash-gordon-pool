import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flash Gordon Pool | The Comeback Nobody Saw Coming",
  description:
    "Scott Gordon aka Flash Gordon Pool. Fitchburg, MA player on a cinematic comeback journey from WPB 450 to 620 and climbing, with eyes on the pro tour.",
  keywords: ["pool player", "billiards", "Flash Gordon Pool", "Scott Gordon", "WPB rating", "Fitchburg MA"],
  openGraph: {
    title: "Flash Gordon Pool",
    description: "The comeback nobody saw coming. Follow the journey to the pro tour.",
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
