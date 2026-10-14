'use client';

import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { PromoBannerVisual } from '@/components/visuals/PromoBannerVisual';

interface PromotionalBannerProps {
  onExplore: () => void;
}

export function PromotionalBanner({ onExplore }: PromotionalBannerProps) {
  return (
    <section id="solutions" className="py-8 sm:py-14 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-center border-2 border-[#BAE6FD]/80 shadow-2xl shadow-[#0866D8]/15 group">
        
        {/* Architectural backdrop */}
        <PromoBannerVisual />

        {/* Content Overlay */}
        <div className="relative z-10 px-6 sm:px-12 lg:px-16 py-10 sm:py-12 max-w-xl text-left">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/25 text-[#BAE6FD] text-[11px] sm:text-xs font-black tracking-widest uppercase mb-3 sm:mb-4 shadow-sm">
            <Sparkles className="w-3 h-3 text-[#38BDF8]" />
            <span>{SITE_CONFIG.promoBanner.eyebrow}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4 text-balance drop-shadow-sm">
            {SITE_CONFIG.promoBanner.title}
          </h2>

          <p className="text-sm sm:text-base text-[#E0F2FE]/95 leading-relaxed mb-8 max-w-md font-normal">
            {SITE_CONFIG.promoBanner.subtitle}
          </p>

          <button
            type="button"
            onClick={onExplore}
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0866D8] hover:opacity-95 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-xl shadow-[#0284C7]/30 transition-all border border-[#7DD3FC]/40 group"
          >
            <span>{SITE_CONFIG.promoBanner.cta}</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

        </div>
      </div>
    </section>
  );
}
