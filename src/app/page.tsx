'use client';

import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { StatsSection } from '@/components/stats-section';
import { ProjectsSection } from '@/components/projects-section';
import { AboutSection } from '@/components/about-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

export default function Home() {
  useScrollReveal();

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ProjectsSection />
        <StatsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
