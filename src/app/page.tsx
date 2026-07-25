import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedClip from "@/components/FeaturedClip";
import About from "@/components/About";
import Tournaments from "@/components/Tournaments";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FeaturedClip />
      <About />
      <Tournaments />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
