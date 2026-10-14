'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Building2, 
  School, 
  Factory, 
  Store, 
  MessageSquare,
  ZoomIn
} from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface ServicesSectionProps {
  onOpenQuote: () => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function ServicesSection({ onOpenQuote, onOpenLightbox }: ServicesSectionProps) {
  const [activeGalleryTab, setActiveGalleryTab] = useState<'market-atm' | 'campus-dispenser' | 'commercial-ro' | 'kiosk-refill'>('market-atm');

  const galleryItems = {
    'market-atm': {
      title: 'Water ATM Community Service Station',
      category: 'Public Market & Community Reach',
      environment: 'Bus stands, railway gates, vegetable markets, shopping hubs & rural centers',
      capacity: '500 – 1000 LPH Output with 500L Storage',
      features: ['Coin & Smart Card Automation', 'Vandal-Resistant SS 304 Enclosure', 'Continuous Flow Metering & Solar Compatible'],
      icon: Store,
      image: KHUMANI_REAL_IMAGES.communityService,
    },
    'campus-dispenser': {
      title: 'Automated Water ATM at School Plaza & Campus',
      category: 'Institutional & Campus Hydration',
      environment: 'Schools, university dining halls, coaching centers, public plazas',
      capacity: '250 – 500 LPH with Dual Ambient & Chilled Spouts',
      features: ['Student Contactless RFID Cards', 'Hygienic Push-Button Tap System', 'High-Capacity Cold Storage for Peak Recesses'],
      icon: School,
      image: KHUMANI_REAL_IMAGES.schoolPlaza,
    },
    'commercial-ro': {
      title: 'Commercial RO Purification Plant & Showroom',
      category: 'Heavy-Duty Commercial Skid',
      environment: 'Hotels, multi-specialty hospitals, industrial catering, commercial water shops',
      capacity: '500 – 2000+ LPH Skid-Mounted System',
      features: ['Multi-Media Pre-Filter Vessel Skid', 'High-TDS Rejection Polyamide RO Membranes', 'Automatic Flush & Pressure Balancing Panel'],
      icon: Factory,
      image: KHUMANI_REAL_IMAGES.purificationShowroom,
    },
    'kiosk-refill': {
      title: 'Smart Automated Refill Station & Vending Kiosk',
      category: 'Direct Refill & Vending Scene',
      environment: 'Gated residential colonies, petrol stations, tech parks, marketplace corners',
      capacity: 'Instant 1L, 5L & 20L Calibrated Dispensing',
      features: ['Precision Calibrated Pulse Flow Meter', 'Coin Validator & Contactless RFID Reader', 'Insulated Stainless SS 304 Storage Buffer'],
      icon: Building2,
      image: KHUMANI_REAL_IMAGES.kioskRefill,
    },
  };

  const activeItem = galleryItems[activeGalleryTab];
  const IconComponent = activeItem.icon;

  const handleWhatsAppGallery = () => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution, I am interested in reviewing installation feasibility for: ${activeItem.title} (${activeItem.category}). Please share details.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-gradient-to-b from-[#003B70] via-[#004B86] to-[#075A99] text-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Spares, Repair & AMC */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>SPARES, REPAIR & LIFELONG SUPPORT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight drop-shadow-md mb-3">
            Spare Parts, Servicing & Annual Maintenance
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#BAE6FD] font-sans leading-relaxed">
            Secondary to our Water ATM machinery, we maintain a complete inventory of certified replacement spares, on-site technician repair support, and proactive AMC contracts.
          </p>
        </div>

        {/* 3 Secondary Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {SITE_CONFIG.secondaryOfferings.map((offering) => (
            <div
              key={offering.id}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 flex flex-col justify-between hover:border-[#38BDF8] hover:bg-white/[0.12] transition-all duration-300 group shadow-lg"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#004B86] border border-[#8FD1F0]/50 flex items-center justify-center text-[#38BDF8] mb-5 shadow-sm group-hover:scale-105 transition-transform">
                  {offering.id === 'ro-spares' ? (
                    <Wrench className="w-6 h-6 text-[#38BDF8]" />
                  ) : offering.id === 'installation-repair' ? (
                    <ShieldCheck className="w-6 h-6 text-[#38BDF8]" />
                  ) : (
                    <Sparkles className="w-6 h-6 text-[#38BDF8]" />
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3 group-hover:text-[#38BDF8] transition-colors">
                  {offering.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans leading-relaxed mb-6 font-normal">
                  {offering.description}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenQuote}
                className="btn-beveled-blue py-3 px-5 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request Service & Spares</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          ))}
        </div>

        {/* --- APPLICATION ENVIRONMENTS GALLERY (REAL CLOUDINARY PHOTOS SHOWCASE) --- */}
        <div className="rounded-3xl border-2 border-[#BAE6FD]/80 bg-gradient-to-b from-[#F0F9FF] to-white p-6 sm:p-10 shadow-2xl text-[#002D5A]">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-[#BAE6FD]/60">
            <div>
              <span className="text-[11px] font-black tracking-widest text-[#006FB8] uppercase block mb-1">
                INSTALLATION ENVIRONMENTS GALLERY
              </span>
              <h3 className="text-xl sm:text-3xl font-heading font-black text-[#002348]">
                Real-World Installation Showcase
              </h3>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-0.5">
                Explore real high-resolution photographs of Khumani Water ATMs in community, campus & commercial settings
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveGalleryTab('market-atm')}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeGalleryTab === 'market-atm'
                    ? 'bg-[#006FB8] text-white shadow-md'
                    : 'bg-white text-[#004C83] border border-[#BAE6FD] hover:bg-[#F0F9FF]'
                }`}
              >
                Community ATM
              </button>
              <button
                onClick={() => setActiveGalleryTab('campus-dispenser')}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeGalleryTab === 'campus-dispenser'
                    ? 'bg-[#006FB8] text-white shadow-md'
                    : 'bg-white text-[#004C83] border border-[#BAE6FD] hover:bg-[#F0F9FF]'
                }`}
              >
                School Plaza
              </button>
              <button
                onClick={() => setActiveGalleryTab('commercial-ro')}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeGalleryTab === 'commercial-ro'
                    ? 'bg-[#006FB8] text-white shadow-md'
                    : 'bg-white text-[#004C83] border border-[#BAE6FD] hover:bg-[#F0F9FF]'
                }`}
              >
                Showroom & Plants
              </button>
              <button
                onClick={() => setActiveGalleryTab('kiosk-refill')}
                className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                  activeGalleryTab === 'kiosk-refill'
                    ? 'bg-[#006FB8] text-white shadow-md'
                    : 'bg-white text-[#004C83] border border-[#BAE6FD] hover:bg-[#F0F9FF]'
                }`}
              >
                Smart Refill Kiosk
              </button>
            </div>
          </div>

          {/* Active Gallery Showcase Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Image Left */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border-2 border-[#BAE6FD] aspect-[4/3] bg-black shadow-lg group cursor-pointer"
                 onClick={() => onOpenLightbox && onOpenLightbox(activeItem.image)}>
              <Image
                src={activeItem.image.url}
                alt={activeItem.image.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                quality={92}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-xs font-heading font-bold uppercase">
                {activeItem.image.tag}
              </div>

              {onOpenLightbox && (
                <div className="absolute top-3 right-3 p-2.5 rounded-full bg-black/60 text-white group-hover:bg-black transition-all shadow-md">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-[#7DD3FC] block mb-0.5">
                  {activeItem.capacity}
                </span>
                <h4 className="text-base sm:text-xl font-heading font-bold">
                  {activeItem.image.title}
                </h4>
              </div>
            </div>

            {/* Details & CTA Right */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full text-left">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#006FB8] to-[#0284C7] text-white flex items-center justify-center shadow-md shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-heading font-bold text-[#006FB8] uppercase tracking-wider block">
                      {activeItem.category}
                    </span>
                    <h4 className="text-lg sm:text-2xl font-heading font-black text-[#002348]">
                      {activeItem.title}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                  <strong>Environment Profile:</strong> {activeItem.environment}
                </p>

                <div className="grid grid-cols-1 gap-2 mb-6">
                  {activeItem.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-[#002348] bg-white p-2.5 rounded-xl border border-[#BAE6FD]">
                      <Check className="w-4 h-4 text-[#059669] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#BAE6FD]">
                <button
                  type="button"
                  onClick={onOpenQuote}
                  className="px-6 py-3 rounded-xl bg-[#006FB8] hover:bg-[#00528A] text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all cursor-pointer text-center"
                >
                  Request Site Blueprint
                </button>
                <button
                  type="button"
                  onClick={handleWhatsAppGallery}
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-heading font-bold text-center shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Details</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
