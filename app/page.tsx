import About from "@/components/about";
import Feature from "@/components/feature";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <About />
      <Feature />
      <Footer />
    </main>
  );
}
