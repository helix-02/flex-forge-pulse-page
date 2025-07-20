/* 
 * MAIN INDEX PAGE - Gym Website
 * 
 * CUSTOMIZATION GUIDE:
 * This is the main page that brings together all components.
 * Each section can be customized individually in their respective component files:
 * 
 * - Header.tsx: Navigation, logo, contact info
 * - HeroSection.tsx: Main hero banner, stats, call-to-action
 * - AboutSection.tsx: About content, features, company info
 * - ServicesSection.tsx: Services offered, facilities
 * - PricingSection.tsx: Membership plans and pricing
 * - GallerySection.tsx: Photo gallery, virtual tour
 * - TestimonialsSection.tsx: Customer reviews and testimonials
 * - ContactSection.tsx: Contact form, location, hours
 * - Footer.tsx: Footer links, social media, copyright
 * 
 * To customize colors, fonts, and animations, edit:
 * - src/index.css: Design system colors, gradients, fonts
 * - tailwind.config.ts: Extended theme configuration
 * - src/components/ui/button.tsx: Button variants
 */

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAVIGATION HEADER */}
      <Header />
      
      {/* MAIN CONTENT SECTIONS */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Index;
