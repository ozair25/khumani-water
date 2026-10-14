'use client';

import React from 'react';
import Image from 'next/image';
import { 
  TrendingUp, 
  Droplets, 
  MapPin, 
  Leaf, 
  Coins, 
  Award, 
  AlertCircle, 
  ArrowRight,
  MessageSquare,
  Sparkles,
  ZoomIn
} from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface WaterAtmBenefitsSectionProps {
  onOpenQuote: () => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function WaterAtmBenefitsSection({ onOpenQuote, onOpenLightbox }: WaterAtmBenefitsSectionProps) {
  const communityImg = KHUMANI_REAL_IMAGES.communityService;
  const showroomImg = KHUMANI_REAL_IMAGES.purificationShowroom;

  const iconMap: Record<string, React.ElementType> = {
    TrendingUp,
    Droplets,
    MapPin,
    Leaf,
    Coins,
    Award,
  };

  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I would like to learn more about the business opportunities and installation requirements for Water ATMs.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="business-benefits" className="py-16 sm:py-24 bg-gradient-to-b from-[#003B70] via-[#004B86] to-[#075A99] text-white relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <TrendingUp className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>BUSINESS OPPORTUNITY & ADVANTAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-black text-white tracking-tight mb-3 drop-shadow-md">
            {SITE_CONFIG.atmBenefits.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#BAE6FD] font-sans leading-relaxed">
            {SITE_CONFIG.atmBenefits.subheading}
          </p>
        </div>

        {/* 2-Photo Visual Feature Split: Real Community Reach & Showroom Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: Community Reach */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-[#00274D] p-6 shadow-xl flex flex-col justify-between group">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-black cursor-pointer"
                 onClick={() => onOpenLightbox && onOpenLightbox(communityImg)}>
              <Image
                src={communityImg.url}
                alt={communityImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-[10px] font-heading font-bold uppercase">
                {communityImg.tag}
              </div>
              {onOpenLightbox && (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-black transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                High Community Impact & Footfall Hydration
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed mb-4">
                {communityImg.caption}
              </p>
            </div>
          </div>

          {/* Card 2: Showroom & Equipment */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-[#00274D] p-6 shadow-xl flex flex-col justify-between group">
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-5 bg-black cursor-pointer"
                 onClick={() => onOpenLightbox && onOpenLightbox(showroomImg)}>
              <Image
                src={showroomImg.url}
                alt={showroomImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-[10px] font-heading font-bold uppercase">
                {showroomImg.tag}
              </div>
              {onOpenLightbox && (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-black transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}
            </div>

            <div>
              <h3 className="text-lg font-heading font-bold text-white mb-2">
                Showroom & Commercial Purification Systems
              </h3>
              <p className="text-xs text-[#BAE6FD] leading-relaxed mb-4">
                {showroomImg.caption}
              </p>
            </div>
          </div>

        </div>

        {/* Clear Financial Disclaimer Banner */}
        <div className="max-w-4xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-[#00274D]/80 border-2 border-[#38BDF8]/40 shadow-lg flex items-start gap-3.5">
          <AlertCircle className="w-5 h-5 text-[#FDE047] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-[#E0F2FE] font-sans leading-relaxed">
            <strong className="text-white font-bold block mb-0.5">Commercial Reality & Performance Note:</strong>
            {SITE_CONFIG.atmBenefits.disclaimer}
          </div>
        </div>

        {/* 6 Structured Benefits Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SITE_CONFIG.atmBenefits.cards.map((card) => {
            const IconComp = iconMap[card.iconName] || TrendingUp;

            return (
              <div
                key={card.id}
                className="p-6 sm:p-7 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-[#38BDF8] hover:bg-white/[0.12] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-105 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white mb-2 group-hover:text-[#38BDF8] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Row */}
        <div className="bg-[#002D5A]/70 rounded-2xl border border-white/15 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto text-center sm:text-left">
          <div>
            <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-1">
              Interested in setting up a Water ATM in your community?
            </h4>
            <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans">
              Our consultants help assess location feasibility, footfall potential, and machine configurations.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuote}
              className="btn-cta-orange px-6 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
            <button
              type="button"
              onClick={handleWhatsApp}
              className="px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-heading font-bold flex items-center gap-2 cursor-pointer shadow-lg transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Us</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
