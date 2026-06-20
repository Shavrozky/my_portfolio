import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { CosmicBackground } from "@/components/cosmic-background";
import { EducationSection } from "@/components/education-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/journey-section";
import { LanguageProvider } from "@/lib/language-context";
import { MusicPopup } from "@/components/music-popup";
import { Navbar } from "@/components/navbar";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { TestimonialsSection } from "@/components/testimonials-section";

export default function Home() {
  return (
    <main className="relative isolate min-h-screen overflow-x-hidden bg-black text-white">
      <CosmicBackground />
      <LanguageProvider>
        <div className="relative z-10">
          <Navbar />
          <MusicPopup />
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
        </div>
      </LanguageProvider>
    </main>
  );
}
