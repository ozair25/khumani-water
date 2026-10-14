'use client';

import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, ShieldCheck, Droplets } from 'lucide-react';
import { SITE_CONFIG, ProductItem } from '@/lib/site-data';

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: ProductItem | null;
  initialCapacity?: string;
  initialLocation?: string;
}

export function EnquiryModal({
  isOpen,
  onClose,
  initialProduct,
  initialCapacity,
  initialLocation,
}: EnquiryModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<string>(
    initialProduct?.id || 'water-atm'
  );
  const [capacity, setCapacity] = useState<string>(
    initialCapacity || initialProduct?.capacities[0] || '500 LPH'
  );
  const [fullName, setFullName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [preferredLocation, setPreferredLocation] = useState<string>(
    initialLocation || 'Market / Commercial Area'
  );
  const [enquiryType, setEnquiryType] = useState<string>('Install New Water ATM');
  const [notes, setNotes] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [refId, setRefId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const locationOptions = [
    'Market / Commercial Area',
    'School / College Campus',
    'Residential Society / Colony',
    'Office / Corporate Tech Park',
    'Bus Stand / Transit Hub',
    'Hospital / Healthcare Clinic',
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

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const getProductName = (id: string) => {
    const found = SITE_CONFIG.products.find((p) => p.id === id);
    if (found) return found.name;
    if (id === 'ro-spares') return 'RO Spare Parts & Consumables';
    if (id === 'servicing') return 'Installation, Repair & Maintenance';
    return 'Water ATM & Purification System';
  };

  const handleWhatsAppEnquiry = () => {
    const prodName = getProductName(selectedProduct);
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution,\n\nI would like to submit an enquiry:\n- Ref ID: ${refId || 'Direct Web'}\n- Name: ${fullName || 'Client'}\n- Phone: ${phone}\n- City: ${city}\n- Location Type: ${preferredLocation}\n- Enquiry Type: ${enquiryType}\n- Selected Product: ${prodName} (${capacity})\n${notes ? `- Notes: ${notes}\n` : ''}\nPlease share specifications and installation feasibility.`
    );
    const whatsappUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

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
    const generatedRef = `KWS-ATM-${Math.floor(100000 + Math.random() * 900000)}`;
    setRefId(generatedRef);
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#001D38]/75 backdrop-blur-sm transition-opacity"
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <div
        className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-[#BAE6FD] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-[#003B70] via-[#004B86] to-[#075A99] px-6 py-4 sm:py-5 text-white flex items-center justify-between border-b-2 border-[#1687C5]">
          <div className="flex items-center gap-2.5">
            <div className="px-2 py-1 rounded bg-[#C91D2E] border border-white text-[10px] font-black font-heading tracking-tight">
              KHUMANI
            </div>
            <div>
              <span className="text-[10px] font-bold tracking-wider uppercase text-[#8FD1F0] block">
                WATER SOLUTION
              </span>
              <h3 id="enquiry-modal-title" className="text-base sm:text-lg font-heading font-extrabold text-white">
                {submitted ? 'Enquiry Recorded' : 'Water ATM & Business Enquiry'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto text-[#002D5A]">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#EAF5FF] text-[#0866D8] mx-auto flex items-center justify-center border border-[#D7E9F8]">
                <CheckCircle2 className="w-10 h-10 text-[#0866D8]" />
              </div>

              <h4 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                Enquiry Successfully Registered
              </h4>

              <p className="text-xs sm:text-sm text-[#2D5377] font-sans max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{fullName}</strong>. Your enquiry for <strong>{enquiryType}</strong> in <strong>{city}</strong> has been logged.
              </p>

              <div className="inline-block bg-[#EDF6FD] border border-[#BDE0F7] px-4 py-2 rounded-xl text-xs font-mono font-bold text-[#004C83]">
                Reference ID: {refId}
              </div>

              <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left">
                <strong>Demo Mode:</strong> In this prototype preview, your enquiry is generated on-device. Use the WhatsApp button below to transmit your details directly to our business team.
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-heading font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Send to WhatsApp Now</span>
                </button>

                <button
                  type="button"
                  onClick={onClose}
                  className="px-5 py-3 rounded-xl border border-[#BDE0F7] text-[#004C83] hover:bg-[#F0F7FD] font-heading font-bold text-xs cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-50 text-red-700 text-xs border border-red-200 font-sans">
                  {errorMessage}
                </div>
              )}

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Amit Sharma"
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
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
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  />
                </div>
              </div>

              {/* City & Preferred Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    City / Town / District <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Indore, Surat, Nagpur"
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    Preferred Location <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={preferredLocation}
                    onChange={(e) => setPreferredLocation(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  >
                    {locationOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Enquiry Type */}
              <div>
                <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                  Enquiry Type <span className="text-red-500">*</span>
                </label>
                <select
                  value={enquiryType}
                  onChange={(e) => setEnquiryType(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                >
                  {enquiryTypeOptions.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Product Sizing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    Machine System
                  </label>
                  <select
                    value={selectedProduct}
                    onChange={(e) => setSelectedProduct(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  >
                    {SITE_CONFIG.products.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name}
                      </option>
                    ))}
                    <option value="ro-spares">RO Spare Parts & Consumables</option>
                    <option value="servicing">Installation, Repair & AMC</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                    Target Capacity
                  </label>
                  <input
                    type="text"
                    value={capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    placeholder="e.g. 500 LPH, 1000 LPH"
                    className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-heading font-bold text-[#004C83] mb-1">
                  Site Notes / Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Water source details, daily demand, or installation deadline..."
                  className="w-full px-3 py-2 rounded-xl border border-[#BDE0F7] text-xs sm:text-sm text-[#002348] placeholder-slate-400 focus:outline-none focus:border-[#006FB8] bg-[#F9FCFF]"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:w-2/3 btn-cta-orange py-3 rounded-xl text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Submit Installation Enquiry</span>
                  <Send className="w-3.5 h-3.5 text-white" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppEnquiry}
                  className="w-full sm:w-1/3 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
