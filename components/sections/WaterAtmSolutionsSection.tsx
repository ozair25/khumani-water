'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Droplets, 
  Coins, 
  ShieldCheck, 
  Gauge, 
  Store, 
  School, 
  Home, 
  Building2, 
  MapPin, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  CheckCircle2,
  ZoomIn
} from 'lucide-react';
import { SITE_CONFIG, ApplicationLocation, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface WaterAtmSolutionsSectionProps {
  onEnquireLocation: (locationName: string) => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function WaterAtmSolutionsSection({ onEnquireLocation, onOpenLightbox }: WaterAtmSolutionsSectionProps) {
  const [activeLocationId, setActiveLocationId] = useState<string>('markets');

  const locationIcons: Record<string, React.ElementType> = {
    Store,
    School,
    Home,
    Building2,
    MapPin,
  };

  const locationImageMap: Record<string, typeof KHUMANI_REAL_IMAGES.communityService> = {
    markets: KHUMANI_REAL_IMAGES.communityService,
    schools: KHUMANI_REAL_IMAGES.schoolPlaza,
    residential: KHUMANI_REAL_IMAGES.kioskRefill,
    offices: KHUMANI_REAL_IMAGES.purificationShowroom,
    transit: KHUMANI_REAL_IMAGES.communityService,
  };

  const activeLocation = SITE_CONFIG.suitableLocations.find((l) => l.id === activeLocationId) || SITE_CONFIG.suitableLocations[0];
  const activeImage = locationImageMap[activeLocationId] || KHUMANI_REAL_IMAGES.communityService;

  const handleWhatsAppLocation = (loc: ApplicationLocation) => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution, I want to enquire about installing a Water ATM in a ${loc.name} setting (${loc.recommendedModel}). Please share feasibility details and quotation.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="water-atms" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-[#E8F4FC] to-[#DCEEFA] text-[#002D5A] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E1F1FD] border border-[#B5DCF7] text-[#006FB8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Droplets className="w-3.5 h-3.5 text-[#006FB8]" />
            <span>COMMERCIAL WATER ATM SOLUTIONS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-black text-[#002348] tracking-tight mb-3">
            {SITE_CONFIG.waterAtmConcept.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#00528A] font-sans leading-relaxed">
            Self-service water vending kiosks engineered for high footfall, automated coin/card refills, and food-grade SS 304 longevity.
          </p>
        </div>

        {/* 4 Working Concept Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-14">
          {SITE_CONFIG.waterAtmConcept.workingPillars.map((pillar, idx) => {
            const icons = [Droplets, Coins, Gauge, ShieldCheck];
            const IconComp = icons[idx % icons.length];

            return (
              <div
                key={pillar.id}
                className="bg-white rounded-2xl p-6 border border-[#BDE0F7] shadow-sm hover:border-[#006FB8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#E1F1FD] border border-[#B5DCF7] flex items-center justify-center text-[#006FB8] mb-4 group-hover:scale-105 group-hover:bg-[#006FB8] group-hover:text-white transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-[#EDF6FD] flex items-center justify-between text-[11px] font-heading font-bold text-[#006FB8]">
                  <span>Step 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#006FB8]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* --- SUITABILITY FOR LOCATIONS SHOWCASE WITH REAL IMAGES --- */}
        <div className="bg-white rounded-3xl border-2 border-[#BDE0F7] shadow-xl p-6 sm:p-10 overflow-hidden mb-14">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8 pb-6 border-b border-[#E1F1FD]">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#006FB8] block mb-1">
                LOCATION COMPATIBILITY & SITES
              </span>
              <h3 className="text-xl sm:text-3xl font-heading font-black text-[#002348]">
                Where Can You Install a Water ATM?
              </h3>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-1">
                Explore recommended configurations and footfall dynamics across high-impact venue categories
              </p>
            </div>

            {/* Location Selector Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {SITE_CONFIG.suitableLocations.map((loc) => {
                const isSelected = loc.id === activeLocationId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveLocationId(loc.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#006FB8] text-white shadow-md'
                        : 'bg-[#EDF6FD] text-[#004C83] border border-[#C5E1F7] hover:bg-[#DDF0FD]'
                    }`}
                  >
                    {loc.name.split(' ')[0]}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Location Detail Spotlight featuring Real Photo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Real High-Res Installation Image */}
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border-2 border-[#BDE0F7] aspect-[4/3] bg-slate-900 shadow-lg group">
              <Image
                src={activeImage.url}
                alt={activeImage.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-xs font-heading font-bold uppercase">
                {activeLocation.name}
              </div>

              {onOpenLightbox && (
                <button
                  type="button"
                  onClick={() => onOpenLightbox(activeImage)}
                  className="absolute top-3 right-3 p-2 rounded-full bg-black/60 hover:bg-black text-white transition-all cursor-pointer shadow-md"
                  aria-label="Expand image"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              )}

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono text-[#7DD3FC] block mb-0.5">
                  {activeLocation.recommendedModel}
                </span>
                <h4 className="text-base sm:text-lg font-heading font-bold leading-tight">
                  {activeImage.title}
                </h4>
              </div>
            </div>

            {/* Right: Location Specs & CTAs */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#006FB8] to-[#0284C7] text-white flex items-center justify-center shadow-md">
                    {React.createElement(locationIcons[activeLocation.iconName] || Store, {
                      className: 'w-6 h-6 text-white',
                    })}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#006FB8] uppercase tracking-wider">
                      {activeLocation.tagline}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-heading font-black text-[#002348]">
                      {activeLocation.name}
                    </h4>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-5">
                  {activeLocation.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-[#EDF6FD] p-3 rounded-xl border border-[#BDE0F7]">
                    <span className="text-[10px] font-bold text-[#006FB8] uppercase block">
                      Recommended Capacity
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-bold text-[#002348]">
                      {activeLocation.recommendedModel}
                    </span>
                  </div>
                  <div className="bg-[#EDF6FD] p-3 rounded-xl border border-[#BDE0F7]">
                    <span className="text-[10px] font-bold text-[#006FB8] uppercase block">
                      Footfall Profile
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-bold text-[#002348]">
                      {activeLocation.footfallImpact}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-[#E1F1FD]">
                <button
                  type="button"
                  onClick={() => onEnquireLocation(activeLocation.name)}
                  className="px-6 py-3 rounded-xl bg-[#006FB8] hover:bg-[#00528A] text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enquire For This Venue</span>
                  <ArrowRight className="w-4 h-4 text-[#A9E7FF]" />
                </button>
                <button
                  type="button"
                  onClick={() => handleWhatsAppLocation(activeLocation)}
                  className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-heading font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
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
