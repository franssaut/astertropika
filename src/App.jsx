import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import BrochureShowcase from './components/BrochureShowcase';
import DenahRuangSection from './components/DenahRuangSection';
import PaymentPromoSection from './components/PaymentPromoSection';
import Facilities from './components/Facilities';
import LocationSection from './components/LocationSection';
import Specifications from './components/Specifications';
import ContactForm from './components/ContactForm';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import FloatingCta from './components/FloatingCta';
import BrochureModal from './components/BrochureModal';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    index: 0,
    customImage: null,
    customTitle: null
  });

  const openBrochureModal = (index = 0) => {
    setModalState({
      isOpen: true,
      index,
      customImage: null,
      customTitle: null
    });
  };

  const openCustomModal = (image, title) => {
    setModalState({
      isOpen: true,
      index: 0,
      customImage: image,
      customTitle: title
    });
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-surface font-sans text-on-surface flex flex-col selection:bg-secondary-container selection:text-on-secondary-container">
      {/* Navigation Header */}
      <Navbar onOpenBrochure={openBrochureModal} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero onOpenBrochure={openBrochureModal} />

        {/* 2. 4 Value Propositions */}
        <ValueProps />

        {/* 3. Official Brochure Showcase (Stitch Screens) */}
        <BrochureShowcase onOpenModal={openBrochureModal} />

        {/* 4. Denah Ruang Resmi (Tipe 30/60 & Tipe 36+/72) */}
        <DenahRuangSection
          onOpenImage={openCustomModal}
        />

        {/* 6. Promo Cash Bertahap 60x Tanpa Bunga (Syarat KTP) */}
        <PaymentPromoSection />

        {/* 7. Estate Facilities */}
        <Facilities />

        {/* 7. Strategic Location & Connectivity */}
        <LocationSection />

        {/* 8. Technical Specifications */}
        <Specifications onOpenImage={openCustomModal} />

        {/* 9. FAQs Section */}
        <FaqSection />

        {/* 10. Official Consultation & WhatsApp Lead Form */}
        <ContactForm />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingCta />

      {/* Lightbox Modal for Brochure and Floorplans */}
      <BrochureModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        initialIndex={modalState.index}
        customImage={modalState.customImage}
        customTitle={modalState.customTitle}
      />

      {/* Vercel Web Analytics */}
      <Analytics />
    </div>
  );
}
