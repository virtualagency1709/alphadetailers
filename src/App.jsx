import React, { useState } from 'react';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import WorkShowcase from './components/WorkShowcase';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import TrustStrip from './components/TrustStrip';
import Process from './components/Process';
import CostEstimator from './components/CostEstimator';
import Memberships from './components/Memberships';
import Testimonials from './components/Testimonials';
import LocationSection from './components/LocationSection';
import Faq from './components/Faq';
import FinalBookingCta from './components/FinalBookingCta';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('10H Ceramic Coating');

  const handleOpenBooking = (service = '10H Ceramic Coating') => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className="app-root">
      {/* 1. Header Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* 2. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 3. Services Section – Immediately after Hero */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* 4. Our Work in Action – Official Instagram Reels Showcase */}
        <WorkShowcase onOpenBooking={handleOpenBooking} />

        {/* 5. Before/After Gallery Slider */}
        <BeforeAfterSlider />

        {/* 5. Why Choose Alpha Detailers */}
        <TrustStrip />

        {/* 6. Detailing Process (The Alpha Master Protocol) */}
        <Process />

        {/* 7. Packages & Pricing / Cost Estimator */}
        <CostEstimator onOpenBooking={handleOpenBooking} />
        <Memberships onOpenBooking={handleOpenBooking} />

        {/* 8. Customer Reviews & Testimonials */}
        <Testimonials />

        {/* 9. Delhi Studio Location & Contact Details */}
        <LocationSection />

        {/* 10. FAQ & Final Booking CTA */}
        <Faq />
        <FinalBookingCta onOpenBooking={handleOpenBooking} />
      </main>

      {/* 11. Studio Footer */}
      <Footer />

      {/* Direct Booking & Consultation Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={selectedService}
      />

      {/* Floating Action Buttons */}
      <FloatingActions />
    </div>
  );
}
