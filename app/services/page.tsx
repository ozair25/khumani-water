'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  ShieldCheck, 
  CheckCircle2, 
  Send, 
  MessageSquare, 
  ArrowRight,
  Sparkles,
  ClipboardCheck,
  PhoneCall,
  Calendar,
  Settings,
  Droplets
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';
import { FloatingContact } from '@/components/enquiry/FloatingContact';
import { FluidSectionWaveDivider } from '@/components/visuals/WaveDividers';
import { SITE_CONFIG } from '@/lib/site-data';

export default function ServicesPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState('Water ATM Installation & Setup');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenGeneralQuote = () => {
    setModalOpen(true);
  };

  const serviceOptions = [
    'Water ATM Installation & Setup',
    'Domestic RO Installation',
    'Commercial & Industrial RO Installation',
    'RO Repair & Troubleshooting',
    'Filter & Spare Parts Replacement',
    'Routine Maintenance & Servicing',
    'Annual Maintenance Contract (AMC)',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact number (at least 8 digits).');
      return;
    }
    if (!location.trim()) {
      setErrorMessage('Please provide your city or installation location.');
      return;
    }

    setErrorMessage('');
    const generated = `KWS-SVC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generated);
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution,\n\nI am submitting a Service Enquiry:\n- Ref ID: ${refId || 'Web Service Request'}\n- Name: ${fullName}\n- Phone: ${phone}\n- Service Needed: ${serviceRequired}\n- Location: ${location}\n${message ? `- Notes: ${message}\n` : ''}\nPlease contact me to confirm service schedule.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#075A99]">
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#002348] via-[#003B70] to-[#075A99] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Wrench className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>INSTALLATION & AFTER-SALES SERVICES</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-4">
            Professional Water ATM Setup & RO Servicing
          </h1>
          <p className="text-xs sm:text-base text-[#BAE6FD] font-sans max-w-2xl mx-auto leading-relaxed">
            From site feasibility assessment and machine installation to breakdown repair, filter replacements, and Annual Maintenance Contracts (AMC).
          </p>
        </div>
      </section>

      {/* Wave Transition into Services Grid */}
      <FluidSectionWaveDivider
        topColor="#075A99"
        bottomColor="#F0F7FD"
        accentColor="#38BDF8"
        variant="ripple"
      />

      {/* 1. SERVICES GRID */}
      <section className="py-12 sm:py-16 bg-[#F0F7FD] text-[#002348]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <span className="text-[11px] font-heading font-black text-[#006FB8] uppercase tracking-widest block mb-1">
              OUR AVAILABLE SERVICES
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight">
              Comprehensive Support at Every Step
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Service 1 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between overflow-hidden">
              <div>
                <div className="h-44 sm:h-48 relative -mx-6 -mt-6 mb-4 border-b border-[#BDE0F7] bg-[#F4F9FD]">
                  <Image
                    src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khummani_Water_Kiosk_Refill_Scene_dkfwfc.png"
                    alt="Khumani Water Kiosk Installation & Refill Scene"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                  />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  Water ATM Installation & Commissioning
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Full site assessment, electrical connection, raw water pipe fitting, dispense flow calibration, and operator training.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('Water ATM Installation & Setup');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Request Installation &rarr;
              </button>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  Domestic & Commercial RO Setup
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Expert mounting and plumbing for residential purifiers and industrial skid-mounted commercial RO plants.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('Commercial & Industrial RO Installation');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Request RO Setup &rarr;
              </button>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  RO Repair & Troubleshooting
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Rapid breakdown callouts for pump failures, solenoid leaks, coin validator issues, and pressure drops.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('RO Repair & Troubleshooting');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Book Repair Callout &rarr;
              </button>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-4">
                  <Settings className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  Filter & Spare Parts Replacement
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Scheduled replacement of spun sediment filters, activated carbon cartridges, and high-rejection RO membranes.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('Filter & Spare Parts Replacement');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Order Filter Swap &rarr;
              </button>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  Annual Maintenance Contracts (AMC)
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Structured preventive care including routine filter swaps, chemical membrane CIP descaling, and priority technician response.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('Annual Maintenance Contract (AMC)');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Enquire AMC Contract &rarr;
              </button>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-2xl p-6 border-2 border-[#BDE0F7] shadow-md hover:border-[#006FB8] hover:shadow-xl transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-heading font-bold text-[#002348] mb-2">
                  Routine Maintenance & After-Sales Care
                </h3>
                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  Regular health audits for water quality TDS, pump pressure, and dispensing electronics to maximize machine lifespan.
                </p>
              </div>
              <button
                onClick={() => {
                  setServiceRequired('Routine Maintenance & Servicing');
                  document.getElementById('service-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
              >
                Schedule Maintenance &rarr;
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Wave Transition into How It Works */}
      <FluidSectionWaveDivider
        topColor="#F0F7FD"
        bottomColor="#003B70"
        accentColor="#38BDF8"
        variant="flow"
      />

      {/* 2. HOW IT WORKS SECTION (Concise 4-Step Process) */}
      <section className="py-12 sm:py-16 bg-[#003B70] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[11px] font-heading font-black text-[#38BDF8] uppercase tracking-widest block mb-1">
              SIMPLE 4-STEP PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative">
              <span className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#002348] font-black font-heading flex items-center justify-center text-xs mb-4">
                01
              </span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Select Service
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed">
                Choose the exact service you need: Water ATM installation, RO repair, filter replacement, or AMC.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative">
              <span className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#002348] font-black font-heading flex items-center justify-center text-xs mb-4">
                02
              </span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Share Requirements
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed">
                Provide your contact details, city/location, and brief machine parameters in the form below.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative">
              <span className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#002348] font-black font-heading flex items-center justify-center text-xs mb-4">
                03
              </span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Receive Callback
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed">
                Our service coordinator calls you to review raw water TDS, power stability, and schedule an engineer visit.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 relative">
              <span className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#002348] font-black font-heading flex items-center justify-center text-xs mb-4">
                04
              </span>
              <h3 className="text-base font-heading font-bold text-white mb-2">
                Confirm Service
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed">
                Our technician arrives on site, completes the installation or repair, and provides testing reports.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Wave Transition into Form */}
      <FluidSectionWaveDivider
        topColor="#003B70"
        bottomColor="#F0F7FD"
        accentColor="#7DD3FC"
        variant="ripple"
      />

      {/* 3. SERVICE ENQUIRY FORM SECTION */}
      <section id="service-form" className="py-12 sm:py-16 bg-[#F0F7FD] text-[#002348]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#BDE0F7]">
            
            <div className="text-center mb-8 border-b border-[#BDE0F7] pb-4">
              <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block">
                SERVICE ASSISTANCE DESK
              </span>
              <h2 className="text-xl sm:text-3xl font-heading font-black text-[#002348] mt-1">
                Request Service or On-Site Support
              </h2>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-1">
                Fill in your location and requirements below. We will assign a technician to get in touch promptly.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 font-sans">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Suresh Patel"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Service Required <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                    >
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      City / Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. Indore, MP"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    Message or Machine Details (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="e.g. Machine capacity, current issue description, or site landmark..."
                    className="w-full px-3.5 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full btn-cta-orange py-3.5 rounded-xl text-xs sm:text-sm font-heading font-extrabold flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <span>Submit Service Request</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EAF5FF] text-[#0866D8] mx-auto flex items-center justify-center border border-[#D7E9F8]">
                  <CheckCircle2 className="w-10 h-10 text-[#0866D8]" />
                </div>

                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                  Service Request Received!
                </h3>

                <p className="text-xs sm:text-sm text-[#2D5377] font-sans max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your request for <strong>{serviceRequired}</strong> at <strong>{location}</strong> has been logged.
                </p>

                <div className="inline-block bg-[#EDF6FD] border border-[#BDE0F7] px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#004C83]">
                  Reference ID: {refId}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                  <button
                    type="button"
                    onClick={handleSendToWhatsApp}
                    className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 fill-white" />
                    <span>Send Request to WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-3 rounded-xl border border-[#BDE0F7] text-[#004C83] hover:bg-[#F0F7FD] font-heading font-bold text-xs cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      <Footer />

      {modalOpen && (
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}

      <FloatingContact onOpenQuote={handleOpenGeneralQuote} />
    </main>
  );
}
