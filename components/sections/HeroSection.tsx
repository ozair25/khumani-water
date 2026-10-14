'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, MessageSquare } from 'lucide-react';
import { HeroWaveBottom } from '@/components/visuals/WaveDividers';
import { SITE_CONFIG } from '@/lib/site-data';

interface HeroSectionProps {
  onOpenQuote: () => void;
  onExploreProducts: () => void;
  onOpenLightbox?: (index: number) => void;
}

/**
 * HeroSection
 * Displays the Khumani Water Solution hero section focused on Water ATM expansion,
 * commercial water solutions, installation enquiries, and lead generation.
 *
 * Maintains:
 * - Desktop wallpaper: Cloudinary Crystal Clear Water Splash at 100% opacity
 * - Mobile wallpaper: Cloudinary Sunlit Bubbles and Green Leaves at 100% opacity
 * - Exact wavy division matching image.png (HeroWaveBottom fill="#F0F7FD")
 */
const CLOUDINARY_HERO_URL = 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1791968407/Crystal-Clear_Water_Splash_with_Green_Leaves_sai4zh.png';
const LOCAL_HERO_FALLBACK = '/hero-banner.png';

const CLOUDINARY_MOBILE_HERO_URL = 'https://res.cloudinary.com/dtrvyelcg/image/upload/v1791969485/Sunlit_Bubbles_and_Green_Leaves_ijfrjy.png';
const LOCAL_MOBILE_HERO_FALLBACK = '/hero-banner-mobile.png';

export function HeroSection({ onOpenQuote, onExploreProducts }: HeroSectionProps) {
  const [currentHeroUrl, setCurrentHeroUrl] = useState(CLOUDINARY_HERO_URL);
  const [currentMobileHeroUrl, setCurrentMobileHeroUrl] = useState(CLOUDINARY_MOBILE_HERO_URL);

  const handleWhatsAppClick = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I am interested in expanding my water business and installing a Water ATM. Please share machine details, installation requirements, and quotation.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="home"
      aria-label="Khumani Water Solution Hero - Water ATM Business Expansion"
      className="relative w-full aspect-[941/1672] sm:aspect-auto min-h-[calc(100vw*1672/941)] sm:min-h-[640px] lg:min-h-[720px] xl:min-h-[760px] flex flex-col justify-between pt-20 sm:pt-28 lg:pt-32 pb-0 text-white overflow-hidden bg-[#002348]"
    >
      {/* 1A. Mobile Hero Wallpaper Layer (Applied ONLY for mobile view with full 100% opacity, displayed fully) */}
      <div
        className="block sm:hidden absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none opacity-100"
        style={{
          backgroundImage: `url("${currentMobileHeroUrl}"), url("${LOCAL_MOBILE_HERO_FALLBACK}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src={currentMobileHeroUrl}
          alt="Khumani Water Solution - Sunlit Bubbles and Green Leaves (Mobile View)"
          fill
          priority
          sizes="100vw"
          quality={100}
          referrerPolicy="no-referrer"
          className="object-cover object-top w-full h-full opacity-100"
          onError={() => {
            if (currentMobileHeroUrl !== LOCAL_MOBILE_HERO_FALLBACK) {
              setCurrentMobileHeroUrl(LOCAL_MOBILE_HERO_FALLBACK);
            }
          }}
        />
      </div>

      {/* 1B. Desktop/Tablet Hero Wallpaper Layer (Full 100% opacity) */}
      <div
        className="hidden sm:block absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none select-none opacity-100"
        style={{
          backgroundImage: `url("${currentHeroUrl}"), url("${LOCAL_HERO_FALLBACK}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Image
          src={currentHeroUrl}
          alt="Khumani Water Solution - Crystal Clear Water Splash with Green Leaves"
          fill
          priority
          sizes="100vw"
          quality={100}
          referrerPolicy="no-referrer"
          className="object-cover object-center w-full h-full opacity-100"
          onError={() => {
            if (currentHeroUrl !== LOCAL_HERO_FALLBACK) {
              setCurrentHeroUrl(LOCAL_HERO_FALLBACK);
            }
          }}
        />
      </div>

      {/* 2. Main Content Container */}
      <div className="relative z-10 w-full max-w-[1500px] mx-auto px-5 sm:px-10 lg:px-16 xl:px-24 my-auto pt-2 pb-6 sm:py-12 lg:py-16">
        
        {/* Left-Aligned Text Block */}
        <div className="w-full lg:w-[60%] xl:w-[56%] flex flex-col items-start text-left">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#003B70]/80 backdrop-blur-md border border-[#38BDF8]/40 mb-3 sm:mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <span className="text-[10px] sm:text-xs font-sans font-bold uppercase tracking-[0.2em] sm:tracking-[0.24em] text-[#BAE6FD]">
              {SITE_CONFIG.hero.eyebrow}
            </span>
          </div>

          {/* Main Headline: KHUMANI WATER SOLUTION ONLY */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-heading font-black tracking-[-0.02em] leading-[1.06] mb-3 sm:mb-4 drop-shadow-[0_3px_14px_rgba(0,15,40,0.9)]">
            <span className="text-white">KHUMANI </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A9E7FF] via-[#56D4F7] to-[#19C8F4]">
              WATER SOLUTION
            </span>
          </h1>

          {/* Supporting Copy: Strictly 2 lines, clean and uncluttered */}
          <p className="text-xs sm:text-base lg:text-lg text-[#F0F9FF] font-sans font-medium leading-snug sm:leading-relaxed max-w-2xl mb-5 sm:mb-7 drop-shadow-[0_2px_8px_rgba(0,12,35,0.9)] line-clamp-2 sm:line-clamp-none">
            <span>Accelerate community water reach and commercial growth with reliable Water ATM installations,</span>
            <br className="hidden sm:inline" />
            <span> commercial RO plants, and chilled water dispensing systems built for uninterrupted performance.</span>
          </p>

          {/* CTA Button Row: Prominent "Enquire About Water ATM" and "WhatsApp Us" buttons */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 w-full sm:w-auto">
            
            {/* Primary Button: Enquire About Water ATM */}
            <button
              type="button"
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-[#006FB8] hover:text-[#004C83] text-sm sm:text-base font-heading font-extrabold shadow-lg hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[46px] sm:min-h-[50px] group"
            >
              <span>{SITE_CONFIG.hero.primaryCtaText}</span>
              <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary Button: WhatsApp Us */}
            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm sm:text-base font-heading font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer min-h-[46px] sm:min-h-[50px]"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>{SITE_CONFIG.hero.secondaryCtaText}</span>
            </button>

          </div>

        </div>

      </div>

      {/* 3. Fluid Wave Transition at Bottom of Hero into Website Body (Exact match to image.png reference) */}
      <div className="w-full relative z-10 -mt-1 sm:-mt-2">
        <HeroWaveBottom fill="#F0F7FD" />
      </div>
    </section>
  );
}
