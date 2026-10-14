'use client';

import React from 'react';
import { Droplets, Check } from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';

interface ComparisonSectionProps {
  onOpenQuote: () => void;
  onOpenLightbox?: (index: number) => void;
}

export function ComparisonSection({ onOpenQuote, onOpenLightbox }: ComparisonSectionProps) {
  const kioskRefillImg = KHUMANI_REAL_IMAGES.kioskRefill;
  return (
    <section id="comparison" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-[#E6F3FB] to-[#DCEEFA] text-[#002D5A] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight">
            Water Quality & Advantages Comparison
          </h2>
          <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-2 max-w-2xl mx-auto">
            Why communities, businesses, and households choose Khumani Water Solution over traditional alternatives
          </p>
        </div>

        {/* 5-Column Comparison Grid in Light Blue Theme */}
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
                  {/* Top Badge */}
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

                  {/* Icon Vignette */}
                  <div
                    className={`w-14 h-14 mx-auto mb-3 rounded-2xl flex items-center justify-center border ${
                      isFeatured
                        ? 'bg-gradient-to-tr from-[#006FB8]/12 to-[#00A3FF]/20 border-[#006FB8]/35'
                        : 'bg-gradient-to-tr from-[#E1F1FD] to-[#D0EAFA] border-[#B5DCF7]'
                    }`}
                  >
                    <Droplets
                      className={`w-7 h-7 ${
                        isFeatured ? 'text-[#006FB8] fill-[#006FB8]/20' : 'text-[#006FB8]'
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`text-center text-sm sm:text-base font-heading font-bold mb-4 ${
                      isFeatured ? 'text-[#002348]' : 'text-[#002D5A]'
                    }`}
                  >
                    {opt.title}
                  </h3>

                  {/* Comparison Points List */}
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

                {/* Bottom Action */}
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
