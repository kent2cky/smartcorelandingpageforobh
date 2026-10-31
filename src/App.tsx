/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TopBar } from './components/TopBar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutUs } from './components/AboutUs.tsx';
import { ServicesSection } from './components/ServicesSection.tsx';
import { PhotoGallery } from './components/PhotoGallery.tsx';
import { WhyChooseUs } from './components/WhyChooseUs.tsx';
import { HoursAndLocation } from './components/HoursAndLocation.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#faf9fe] text-slate-900 font-sans selection:bg-[#532dbe]/15 selection:text-[#532dbe]">
      {/* 1. Top bar with business name and the main button */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero section: strong headline, one-line description, and main button */}
        <Hero />

        {/* 3. About us */}
        <AboutUs />

        {/* 4. Services or products with prices, shown as cards */}
        <ServicesSection />

        {/* 5. Photo gallery (tasteful placeholder images; client can add their own photos later) */}
        <PhotoGallery />

        {/* 6. Why choose us (3–4 short points) */}
        <WhyChooseUs />

        {/* 7. Opening hours and location */}
        <HoursAndLocation />

        {/* 8. Contact section */}
        <ContactSection />
      </main>

      {/* 9. Footer with copyright and social links */}
      <Footer />

      {/* Floating WhatsApp button at the bottom-right corner on every screen size */}
      <FloatingWhatsApp />
    </div>
  );
}
