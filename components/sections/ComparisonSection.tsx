'use client';

import React from 'react';
import Image from 'next/image';
import { Droplets, Check, Sparkles, ZoomIn, ArrowRight } from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface ComparisonSectionProps {
  onOpenQuote: () => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function ComparisonSection({ onOpenQuote, onOpenLightbox }: ComparisonSectionProps) {
  const kioskRefillImg = KHUMANI_REAL_IMAGES.kioskRefill;

  return (
    <section id="comparison" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-[#E6F3FB] to-[#DCEEFA] text-[#002D5A] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E1F1FD] border border-[#B5DCF7] text-[#006FB8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#006FB8]" />
            <span>WATER QUALITY & ADVANTAGES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight">
            Why Choose Khumani Water ATM Over Alternatives?
          </h2>
          <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-2">
            Instant automated refills, stainless steel food-grade hygiene, and multi-stage purification eliminate the hassle of traditional heavy jar deliveries and unpurified borewell water.
          </p>
        </div>

        {/* Visual Banner Showcase featuring Real Kiosk Refill Image */}
        <div className="bg-gradient-to-r from-[#002348] via-[#003B70] to-[#004C83] rounded-3xl p-6 sm:p-8 text-white shadow-xl mb-12 border-2 border-[#38BDF8]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Real Image Card */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#38BDF8] aspect-[4/3] bg-black shadow-lg group cursor-pointer"
                 onClick={() => onOpenLightbox && onOpenLightbox(kioskRefillImg)}>
              <Image
                src={kioskRefillImg.url}
                alt={kioskRefillImg.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-[11px] font-heading font-bold uppercase tracking-wider">
                Real Refill Station
              </div>

              {onOpenLightbox && (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-black transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h3 className="text-sm font-heading font-bold">{kioskRefillImg.title}</h3>
                <p className="text-[11px] text-[#BAE6FD] line-clamp-1">{kioskRefillImg.caption}</p>
              </div>
            </div>

            {/* Quick Key Highlights */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#38BDF8] uppercase tracking-wider block mb-1 font-heading">
                  THE KHUMANI REFILL ADVANTAGE
                </span>
                <h3 className="text-xl sm:text-3xl font-heading font-black text-white mb-3 leading-tight">
                  Pure Water Dispensed at the Touch of a Button or Coin
                </h3>
                <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans leading-relaxed mb-6">
                  Unlike plastic jar delivery options subject to sunlight degradation and delivery delays, Khumani Water ATMs treat water fresh at the point of dispense, passing through sediment, activated carbon, high-rejection RO, UV sterilization, and mineral balance modules.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>24/7 Coin & Smart Card Access</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>SS 304 Food-Grade Enclosure</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Digital Calibrated Pulse Flow Meter</span>
                </div>
                <div className="bg-white/10 p-3 rounded-xl border border-white/15 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#4ADE80] shrink-0" />
                  <span>Zero Plastic Jar Wastage</span>
                </div>
              </div>

              <button
                type="button"
                onClick={onOpenQuote}
                className="self-start btn-cta-orange px-6 py-3 rounded-xl text-xs sm:text-sm font-heading font-bold shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Request Water ATM Quote</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </div>

        {/* 5-Column Comparison Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-2.5 items-stretch">
          {SITE_CONFIG.comparisonOptions.map((opt) => {
            const isFeatured = opt.isFeatured;

            return (
              <div
                key={opt.id}
                className={`rounded-xl p-4 sm:p-5 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-white text-[#002348] shadow-2xl ring-4 ring-[#006FB8]/25 scale-102 sm:scale-105 z-10 border-2 border-[#006FB8]'
                    : 'bg-white/95 text-[#002D5A] border border-[#BDE0F7] shadow-sm hover:border-[#38BDF8] hover:shadow-md'
                }`}
              >
                <div>
                  <div className="text-center mb-3">
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                        isFeatured
                          ? 'bg-[#006FB8] text-white shadow-sm'
                          : 'bg-[#E1F1FD] text-[#004C83] border border-[#B5DCF7]'
                      }`}
                    >
                      {opt.badge}
                    </span>
                  </div>

                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-2xl flex items-center justify-center border ${
                      isFeatured
                        ? 'bg-gradient-to-tr from-[#006FB8]/12 to-[#00A3FF]/20 border-[#006FB8]/35'
                        : 'bg-gradient-to-tr from-[#E1F1FD] to-[#D0EAFA] border-[#B5DCF7]'
                    }`}
                  >
                    <Droplets
                      className={`w-6 h-6 ${
                        isFeatured ? 'text-[#006FB8] fill-[#006FB8]/20' : 'text-[#006FB8]'
                      }`}
                    />
                  </div>

                  <h3
                    className={`text-center text-sm sm:text-base font-heading font-bold mb-4 ${
                      isFeatured ? 'text-[#002348]' : 'text-[#002D5A]'
                    }`}
                  >
                    {opt.title}
                  </h3>

                  <ul className="space-y-2 text-left mb-5">
                    {opt.points.map((pt, i) => (
                      <li
                        key={i}
                        className={`flex items-start gap-1.5 text-[11px] sm:text-xs leading-tight font-sans ${
                          isFeatured ? 'text-[#003B70] font-medium' : 'text-[#2D5377]'
                        }`}
                      >
                        {isFeatured ? (
                          <Check className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                        ) : (
                          <span className="text-[#007BC7] text-xs shrink-0 font-bold">•</span>
                        )}
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {isFeatured ? (
                  <button
                    onClick={onOpenQuote}
                    className="w-full bg-[#006FB8] hover:bg-[#00528A] text-white py-2.5 rounded-xl text-xs font-heading font-bold mt-2 cursor-pointer shadow-md hover:shadow-lg transition-all"
                  >
                    Choose Khumani ›
                  </button>
                ) : (
                  <div className="text-center pt-2 border-t border-[#D7EBF8] text-[10px] text-[#006FB8] font-medium">
                    Alternative Option
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
