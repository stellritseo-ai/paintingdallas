'use client';

import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Services } from '@/components/Services';
import { CommercialOnly } from '@/components/CommercialOnly';
import { BuildPaintTransform } from '@/components/BuildPaintTransform';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { About } from '@/components/About';
import { MissionVisionCommitment } from '@/components/MissionVisionCommitment';
import { Process } from '@/components/Process';
import { Projects } from '@/components/Projects';
import { VideoSection } from '@/components/VideoSection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { ServiceArea } from '@/components/ServiceArea';
import { FinalCTA } from '@/components/FinalCTA';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { EstimateModal } from '@/components/EstimateModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { MobileStickyBar } from '@/components/MobileStickyBar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#062F57] selection:text-white">
      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* 2. Cinematic LCP Hero */}
      <Hero />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. About Section */}
      <About />

      {/* 5. Professional Commercial Services */}
      <Services />

      {/* 6. Commercial-Only Positioning Differentiator */}
      {/* <CommercialOnly /> */}

      {/* 7. Build. Paint. Transform. */}
      <BuildPaintTransform />

      {/* 8. Why Choose Us Editorial */}
      <WhyChooseUs />

      {/* 10. Horizontal Process Timeline */}
      <Process />

      {/* 11. Projects Portfolio */}
      <Projects />

      {/* 12. Video & Craftsmanship Showcase */}
      {/* <VideoSection /> */}

      {/* 13. Client Testimonials Slider */}
      <Testimonials />

      {/* 14. Accessible FAQ Accordion */}
      {/* <FAQ /> */}

      {/* 15. Service Area & Radius Visual */}
      <ServiceArea />

      {/* 16. Final High-Contrast CTA */}
      <FinalCTA />

      {/* 17. Commercial Quote Form & Direct Call */}
      <Contact />

      {/* 18. Corporate Dark Navy Footer */}
      <Footer />

      {/* Interactive Modals & Overlays */}
      <EstimateModal />
      <ServiceDetailModal />
      <ProjectDetailModal />

      {/* Mobile Sticky Quick-Action Bar */}
      <MobileStickyBar />
    </main>
  );
}
