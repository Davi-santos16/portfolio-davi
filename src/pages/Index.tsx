import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import TechSection from "@/components/portfolio/TechSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import Aurora from "@/components/portfolio/Aurora";

const Index = () => {
  return (
    <div className="min-h-screen text-foreground overflow-x-hidden relative bg-background/50">
      <div className="fixed inset-0 z-0 w-full h-full pointer-events-none opacity-50 dark:opacity-80">
        <Aurora colorStops={["#3b82f6", "#8b5cf6", "#ec4899"]} blend={0.5} amplitude={1.2} speed={0.5} />
      </div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
