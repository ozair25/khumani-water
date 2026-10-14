'use client';

import React from 'react';
import { ArrowRight, MessageSquare, Phone, Sparkles, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { HeroWaveDropsBackground } from '@/components/visuals/HeroWaveDropsBackground';

interface WaveCtaSectionProps {
  onOpenQuote: () => void;
  onContactClick?: () => void;
}

export function WaveCtaSection({ onOpenQuote, onContactClick }: WaveCtaSectionProps) {
  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I am ready to expand my water business and explore Water ATM installation. Please contact me.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="relative overflow-hidden text-white py-14 sm:py-20 select-none">
      {/* Rich Oceanic Wave & 3D Water Droplets Background matching Hero theme */}
      <HeroWaveDropsBackground />

      {/* Content Area */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#BAE6FD] text-xs font-black tracking-widest uppercase mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>START YOUR WATER ATM JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-heading font-black text-white tracking-tight leading-tight mb-5 max-w-3xl mx-auto text-balance drop-shadow-md">
          Ready to Expand Your Water Business with Khumani?
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-[#EAF5FF]/95 max-w-2xl mx-auto leading-relaxed mb-9 font-normal">
          Whether you need a single community Water ATM, a commercial RO plant, or want to discuss dealership partnerships in your region, our engineering team is here to guide you.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={onOpenQuote}
            className="btn-cta-orange inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base sm:text-lg shadow-2xl transition-all cursor-pointer"
          >
            <span>Request Installation Quote</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </button>

          <button
            type="button"
            onClick={handleWhatsApp}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-white font-heading font-bold text-sm sm:text-base shadow-xl transition-all cursor-pointer"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white font-heading font-bold text-sm sm:text-base border border-white/40 backdrop-blur-sm transition-all cursor-pointer"
          >
            <span>View Contact Info</span>
          </button>
        </div>

      </div>
    </section>
  );
}
