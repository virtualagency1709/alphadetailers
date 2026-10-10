import React, { useState } from 'react';
import ParticlesCanvas from './components/ParticlesCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import Services from './components/Services';
import CostEstimator from './components/CostEstimator';
import Memberships from './components/Memberships';
import Process from './components/Process';
import LocationSection from './components/LocationSection';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
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
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      <main>
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Studio Highlights & Trust Strip */}
        <TrustStrip />

        {/* Interactive Before & After Comparison Slider */}
        <BeforeAfterSlider />

        {/* 12 Comprehensive Services Grid */}
        <Services onOpenBooking={handleOpenBooking} />

        {/* Dynamic Cost Estimator & WhatsApp Generator */}
        <CostEstimator onOpenBooking={handleOpenBooking} />

        {/* Membership & Annual Studio Packages */}
        <Memberships onOpenBooking={handleOpenBooking} />

        {/* 5-Stage Alpha Master Protocol */}
        <Process />

        {/* Delhi Studio Location & Google Verified Card */}
        <LocationSection />

        {/* Customer Testimonials */}
        <Testimonials />

        {/* FAQ Accordion */}
        <Faq />
      </main>

      {/* Studio Footer */}
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
