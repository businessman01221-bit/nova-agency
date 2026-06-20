import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import BeforeAfter from "@/components/BeforeAfter";
import ProcessSection from "@/components/ProcessSection";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhySection />
      <BeforeAfter />
      <ProcessSection />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
