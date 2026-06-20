import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import ProcessSection from "@/components/ProcessSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WhySection />
      <ProcessSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
