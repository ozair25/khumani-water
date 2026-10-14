'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Users, 
  Droplets,
  ArrowRight,
  Briefcase
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';
import { FloatingContact } from '@/components/enquiry/FloatingContact';
import { FluidSectionWaveDivider } from '@/components/visuals/WaveDividers';
import { ProductCardVisual } from '@/components/visuals/ProductCardVisual';
import { SITE_CONFIG } from '@/lib/site-data';

export default function AboutContactPage() {
  const [modalOpen, setModalOpen] = useState(false);

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [enquiryCategory, setEnquiryCategory] = useState('Water ATM Installation & Expansion');
  const [message, setMessage] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOpenGeneralQuote = () => {
    setModalOpen(true);
  };

  const enquiryCategories = [
    'Water ATM Installation & Expansion',
    'Commercial RO Project Inquiry',
    'Dealership & Partnership Opportunities',
    'Equipment & Spare Parts Purchase',
    'Repair & AMC Support',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please enter a valid phone number (at least 8 digits).');
      return;
    }
    if (!city.trim()) {
      setErrorMessage('Please enter your city or district.');
      return;
    }

    setErrorMessage('');
    const generated = `KWS-CTC-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generated);
    setSubmitted(true);
  };

  const handleSendToWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution,\n\nI am sending an Enquiry:\n- Ref ID: ${refId || 'Web Contact'}\n- Name: ${fullName}\n- Phone: ${phone}\n- City: ${city}\n- Category: ${enquiryCategory}\n${message ? `- Notes: ${message}\n` : ''}\nPlease connect with me.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#075A99]">
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      {/* Header Banner */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#002348] via-[#003B70] to-[#075A99] text-white text-center">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Building2 className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>ABOUT US & CONTACT DESK</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-4">
            About Khumani Water Solution & Contact
          </h1>
          <p className="text-xs sm:text-base text-[#BAE6FD] font-sans max-w-2xl mx-auto leading-relaxed">
            Delivering pure drinking water systems, automated Water ATMs, and commercial water filtration supported by responsive installation and maintenance services.
          </p>
        </div>
      </section>

      {/* Wave Transition */}
      <FluidSectionWaveDivider
        topColor="#075A99"
        bottomColor="#F0F7FD"
        accentColor="#38BDF8"
        variant="ripple"
      />

      {/* 1. ABOUT INTRODUCTION & MISSION */}
      <section className="py-12 sm:py-16 bg-[#F0F7FD] text-[#002348]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
            
            <div className="lg:col-span-7">
              <span className="text-[11px] font-heading font-black text-[#006FB8] uppercase tracking-widest block mb-2">
                COMPANY OVERVIEW
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight mb-4">
                Empowering Communities with Safe & Affordable Hydration
              </h2>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans leading-relaxed mb-4">
                Khumani Water Solution was established with a single-minded goal: to make pure, safe drinking water accessible and reliable across residential, commercial, and public spaces through robust engineering and automated dispensing.
              </p>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans leading-relaxed mb-6">
                Our machines utilize heavy-gauge SS 304 food-grade enclosures, multi-stage RO and UV purification, and smart coin and RFID dispensing electronics, ensuring zero manual intervention and uninterrupted hydration.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm">
                  <span className="text-2xl font-heading font-black text-[#006FB8] block">SS 304</span>
                  <span className="text-xs font-bold text-[#002348]">Food-Grade Stainless Enclosures</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm">
                  <span className="text-2xl font-heading font-black text-[#006FB8] block">24/7</span>
                  <span className="text-xs font-bold text-[#002348]">Automated Coin & RFID Dispensing</span>
                </div>
              </div>
            </div>

            {/* Mission Card Visual */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#003B70] to-[#075A99] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border-2 border-[#38BDF8]/40">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-[#38BDF8] mb-4">
                <Droplets className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-bold text-[#38BDF8] uppercase tracking-wider block mb-1">
                OUR CORE PHILOSOPHY
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black mb-3 text-white">
                Think Pure • Live Better
              </h3>
              <p className="text-xs text-[#BAE6FD] font-sans leading-relaxed mb-6">
                We believe clean drinking water is the foundation of community wellness. By delivering long-lasting equipment and reliable maintenance, we help site owners and entrepreneurs build dependable water operations.
              </p>

              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello Khumani Water Solution, I would like to learn more about your company and solutions.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-heading font-bold shadow-md transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* 2. EQUIPMENT & GALLERY SHOWCASE */}
          <div className="border-t border-[#BDE0F7] pt-12">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-[11px] font-heading font-black text-[#006FB8] uppercase tracking-widest block mb-1">
                AUTHENTIC EQUIPMENT SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#002348]">
                Equipment & Installation Gallery
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] overflow-hidden shadow-md">
                <div className="h-52 relative border-b border-[#BDE0F7]">
                  <ProductCardVisual category="water-atm" name="Water ATM" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-heading font-bold text-[#002348]">
                    Automated Water ATM Kiosks
                  </h3>
                  <p className="text-xs text-[#2D5377] mt-1">
                    Heavy SS 304 coin & RFID dispensing units.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] overflow-hidden shadow-md">
                <div className="h-52 relative border-b border-[#BDE0F7]">
                  <ProductCardVisual category="ro-system" name="Commercial RO" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-heading font-bold text-[#002348]">
                    Commercial RO Plants
                  </h3>
                  <p className="text-xs text-[#2D5377] mt-1">
                    Skid-mounted industrial filtration systems.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] overflow-hidden shadow-md">
                <div className="h-52 relative border-b border-[#BDE0F7]">
                  <ProductCardVisual category="chiller" name="Chilled Systems" />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-sm font-heading font-bold text-[#002348]">
                    Chilled Water Systems
                  </h3>
                  <p className="text-xs text-[#2D5377] mt-1">
                    Rapid-cooling food-grade stainless dispensers.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Wave Transition into Contact */}
      <FluidSectionWaveDivider
        topColor="#F0F7FD"
        bottomColor="#003B70"
        accentColor="#38BDF8"
        variant="flow"
      />

      {/* 3. VERIFIED CONTACT DETAILS & FORM */}
      <section id="contact-form" className="py-12 sm:py-16 bg-[#003B70] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Verified Contact Details & Map */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-[11px] font-heading font-black text-[#38BDF8] uppercase tracking-widest block mb-1">
                  VERIFIED CONTACT INFO
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Get in Touch with Us
                </h2>
                <p className="text-xs text-[#BAE6FD] font-sans mt-2 leading-relaxed">
                  Connect directly with our sales, technical, and partnership department.
                </p>
              </div>

              <div className="space-y-4 text-xs font-sans">
                
                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 fill-white" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold text-sm">WhatsApp & Phone Helpline</strong>
                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#38BDF8] hover:underline text-sm font-bold block"
                    >
                      {SITE_CONFIG.contact.phoneDisplay}
                    </a>
                    <span className="text-[#BAE6FD] text-[11px]">Instant response for machine & price enquiries</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold text-sm">Email Address</strong>
                    <span className="text-[#BAE6FD] text-xs">{SITE_CONFIG.contact.emailDisplay}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold text-sm">Business Address</strong>
                    <span className="text-[#BAE6FD] text-xs">{SITE_CONFIG.contact.locationDisplay}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-start gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold text-sm">Operating Hours</strong>
                    <span className="text-[#BAE6FD] text-xs">{SITE_CONFIG.contact.workingHours}</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-5 h-5 text-[#E1306C]" />
                    <span className="text-xs font-bold text-white">Instagram Profile</span>
                  </div>
                  <a
                    href={SITE_CONFIG.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-heading font-bold text-[#38BDF8] hover:underline"
                  >
                    @aariz_khumani_brand &rarr;
                  </a>
                </div>

              </div>
            </div>

            {/* Right: Contact Enquiry Form */}
            <div className="lg:col-span-7 bg-white text-[#002348] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-[#BDE0F7]">
              
              <div className="mb-6 border-b border-[#BDE0F7] pb-4">
                <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block">
                  QUALIFIED ENQUIRY DESK
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                  Submit Your Business Enquiry
                </h3>
                <p className="text-xs text-[#00528A] font-sans mt-1">
                  Select your enquiry category below. Our team will evaluate your requirements and reach out.
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
                        placeholder="e.g. Vikram Singh"
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
                        City / District <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Indore, Bhopal"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                        Enquiry Category <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={enquiryCategory}
                        onChange={(e) => setEnquiryCategory(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                      >
                        {enquiryCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Message / Project Scope (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. Details about target site, raw water source, or daily volume..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      className="btn-cta-orange py-3.5 px-6 rounded-xl text-xs sm:text-sm font-heading font-extrabold flex-1 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                    >
                      <span>Submit Official Enquiry</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>

                    <a
                      href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello Khumani Water Solution, I am inquiring from your website.')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3.5 px-5 rounded-xl text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 shadow-md transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF5FF] text-[#0866D8] mx-auto flex items-center justify-center border border-[#D7E9F8]">
                    <CheckCircle2 className="w-10 h-10 text-[#0866D8]" />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                    Enquiry Logged Successfully!
                  </h4>

                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans max-w-md mx-auto leading-relaxed">
                    Thank you, <strong>{fullName}</strong>. Your enquiry regarding <strong>{enquiryCategory}</strong> in <strong>{city}</strong> has been registered.
                  </p>

                  <div className="inline-block bg-[#EDF6FD] border border-[#BDE0F7] px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#004C83]">
                    Reference ID: {refId}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send to WhatsApp Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl border border-[#BDE0F7] text-[#004C83] hover:bg-[#F0F7FD] font-heading font-bold text-xs cursor-pointer"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              )}

            </div>

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
