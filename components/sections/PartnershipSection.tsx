'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  Briefcase, 
  TrendingUp, 
  Sparkles,
  ZoomIn
} from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface PartnershipSectionProps {
  onSuccess?: (refId: string) => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function PartnershipSection({ onSuccess, onOpenLightbox }: PartnershipSectionProps) {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [preferredLocation, setPreferredLocation] = useState('Market / Commercial Area');
  const [enquiryType, setEnquiryType] = useState('Install New Water ATM');
  const [notes, setNotes] = useState('');
  
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const partnershipImages = [
    KHUMANI_REAL_IMAGES.communityService,
    KHUMANI_REAL_IMAGES.kioskRefill,
    KHUMANI_REAL_IMAGES.schoolPlaza,
    KHUMANI_REAL_IMAGES.purificationShowroom,
  ];

  const locationOptions = [
    'Market / Commercial Area',
    'School / College Campus',
    'Residential Society / Colony',
    'Office / Corporate Tech Park',
    'Bus Stand / Transit Hub',
    'Hospital / Healthcare Center',
    'Existing Water Plant / Expansion',
    'Other Location',
  ];

  const enquiryTypeOptions = [
    'Install New Water ATM',
    'Expand Existing Water Business',
    'Dealership / Partnership Opportunity',
    'Commercial RO Plant Setup',
    'Repair, Spare Parts & AMC',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 8) {
      setErrorMessage('Please provide a valid contact number (at least 8 digits).');
      return;
    }
    if (!city.trim()) {
      setErrorMessage('Please enter your city, town, or district.');
      return;
    }

    setErrorMessage('');
    const generated = `KWS-BIZ-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generated);
    setSubmitted(true);
    if (onSuccess) onSuccess(generated);
  };

  const handleSendToWhatsApp = () => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution,\n\nI am submitting a Business & Installation Enquiry:\n- Ref ID: ${refId || 'Direct Web Enquiry'}\n- Name: ${fullName}\n- Phone: ${phone}\n- City: ${city}\n- Preferred Location: ${preferredLocation}\n- Enquiry Type: ${enquiryType}\n${notes ? `- Details: ${notes}\n` : ''}\nPlease contact me to discuss business expansion and quotation.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="partnership" className="py-16 sm:py-24 bg-gradient-to-b from-[#003B70] via-[#004B86] to-[#075A99] text-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>BUSINESS OPPORTUNITIES & LEAD GENERATION</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-black text-white tracking-tight mb-3 drop-shadow-md">
            Business & Partnership Enquiries
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#BAE6FD] font-sans leading-relaxed">
            Interested in installing a Water ATM, expanding an existing water distribution route, or discussing regional dealership opportunities? Share your requirements below.
          </p>
        </div>

        {/* 4-Image Real Setup Ribbon Showcase */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-12">
          {partnershipImages.map((img) => (
            <div
              key={img.id}
              onClick={() => onOpenLightbox && onOpenLightbox(img)}
              className="relative rounded-2xl overflow-hidden border-2 border-white/20 hover:border-[#38BDF8] aspect-[4/3] bg-black cursor-pointer shadow-lg group transition-all duration-300 hover:scale-[1.02]"
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-108 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#006FB8] text-white text-[9px] font-heading font-bold uppercase">
                {img.tag}
              </div>

              {onOpenLightbox && (
                <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 text-white group-hover:bg-black transition-all">
                  <ZoomIn className="w-3.5 h-3.5" />
                </div>
              )}

              <div className="absolute bottom-2 left-2 right-2 text-left">
                <span className="text-xs font-heading font-bold text-white block line-clamp-1 group-hover:text-[#7DD3FC]">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Why Partner with Khumani */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6">
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/20 shadow-xl">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#38BDF8] block mb-2">
                EXPANSION ADVANTAGES
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white mb-4">
                Partner with Khumani Water Solution
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-[#BAE6FD] font-sans">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold">Existing Route Expansion</strong>
                    <span>If you already distribute water jars, upgrade to 24/7 coin & RFID smart card automated kiosks to capture walk-in retail demand.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold">Direct Manufacturer Support</strong>
                    <span>Full technical guidance on water testing, space sizing, piping diagrams, and ongoing spare parts delivery.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0284C7] text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-heading font-bold">Dealership & Territory Inquiries</strong>
                    <span>Open to dedicated partners interested in supplying and servicing water filtration machinery in their local districts.</span>
                  </div>
                </div>
              </div>

              {/* Direct Help Info */}
              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[#8FD1F0] block">Prefer phone conversation?</span>
                  <strong className="text-white font-heading text-sm sm:text-base font-bold">
                    {SITE_CONFIG.contact.phoneDisplay}
                  </strong>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    const textMsg = encodeURIComponent('Hello Khumani Water Solution, I want to discuss Water ATM business partnership.');
                    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
                  }}
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-heading font-bold flex items-center gap-1.5 shadow-md hover:bg-[#1EBE5D] transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>

            {/* Honest Disclaimer */}
            <div className="bg-[#00274D]/80 rounded-2xl p-4 border border-[#38BDF8]/30 text-[11px] sm:text-xs text-[#BAE6FD]">
              <strong className="text-white block mb-0.5">Important Note:</strong>
              Khumani Water Solution does not guarantee fixed earnings, customer traffic, or commercial returns. Equipment is supplied as engineered water treatment machinery.
            </div>
          </div>

          {/* Right Column: Prominent Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-[#002D5A] shadow-2xl border-2 border-[#BDE0F7]">
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#BDE0F7] pb-3 mb-4">
                    <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block">
                      OFFICIAL ENQUIRY DESK
                    </span>
                    <h4 className="text-lg sm:text-xl font-heading font-black text-[#002348]">
                      Request Water ATM & Business Partnership Details
                    </h4>
                    <p className="text-xs text-[#2D5377] font-sans mt-0.5">
                      Fill out the form below. Our commercial team will evaluate feasibility and provide equipment specifications.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 font-sans">
                      {errorMessage}
                    </div>
                  )}

                  {/* 1. Name & 2. Phone */}
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
                        placeholder="e.g. Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] focus:ring-2 focus:ring-[#006FB8]/15 bg-[#F9FCFF]"
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
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] focus:ring-2 focus:ring-[#006FB8]/15 bg-[#F9FCFF]"
                      />
                    </div>
                  </div>

                  {/* 3. City & 4. Preferred Installation Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                        City / Town / District <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Pune, Jaipur, Ahmedabad"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] focus:ring-2 focus:ring-[#006FB8]/15 bg-[#F9FCFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                        Preferred Installation Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={preferredLocation}
                        onChange={(e) => setPreferredLocation(e.target.value)}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] focus:ring-2 focus:ring-[#006FB8]/15 bg-[#F9FCFF]"
                      >
                        {locationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* 5. Enquiry Type */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Enquiry Type <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                      {enquiryTypeOptions.map((type) => (
                        <label
                          key={type}
                          className={`flex items-center gap-2 p-2.5 rounded-xl border text-xs font-sans cursor-pointer transition-colors ${
                            enquiryType === type
                              ? 'bg-[#E1F1FD] border-[#006FB8] text-[#002348] font-bold'
                              : 'bg-[#F9FCFF] border-[#D0E5F7] text-[#2D5377] hover:bg-[#EDF6FD]'
                          }`}
                        >
                          <input
                            type="radio"
                            name="enquiryType"
                            checked={enquiryType === type}
                            onChange={() => setEnquiryType(type)}
                            className="text-[#006FB8] focus:ring-[#006FB8]"
                          />
                          <span>{type}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Optional Notes */}
                  <div>
                    <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                      Location Details or Questions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Existing daily water demand, raw water source (borewell/municipal), or target launch timeline..."
                      className="w-full px-3.5 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] focus:ring-2 focus:ring-[#006FB8]/15 bg-[#F9FCFF]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-cta-orange py-3.5 rounded-xl text-sm font-heading font-black flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all cursor-pointer"
                    >
                      <span>Submit Business & Installation Enquiry</span>
                      <Send className="w-4 h-4 text-white" />
                    </button>
                  </div>
                </form>
              ) : (
                <div className="py-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#EAF5FF] text-[#0866D8] mx-auto flex items-center justify-center border border-[#D7E9F8]">
                    <CheckCircle2 className="w-10 h-10 text-[#0866D8]" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#006FB8] block">
                    ENQUIRY REGISTERED SUCCESSFULLY
                  </span>

                  <h4 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                    Thank you, {fullName}!
                  </h4>

                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans max-w-md mx-auto leading-relaxed">
                    Your enquiry for <strong>{enquiryType}</strong> in <strong>{city}</strong> ({preferredLocation}) has been recorded.
                  </p>

                  <div className="inline-block bg-[#EDF6FD] border border-[#BDE0F7] px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#004C83]">
                    Reference ID: {refId}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <button
                      type="button"
                      onClick={handleSendToWhatsApp}
                      className="px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>Send Enquiry to WhatsApp Now</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-3 rounded-xl border border-[#BDE0F7] text-[#004C83] hover:bg-[#F0F7FD] font-heading font-bold text-xs cursor-pointer transition-colors"
                    >
                      Submit Another Enquiry
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
