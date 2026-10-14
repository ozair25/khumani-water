'use client';

import React from 'react';
import { Droplets, ShieldCheck, HeartPulse } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function InformationalSection() {
  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#003B70] via-[#004B86] to-[#075A99] text-white relative">
      <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Heading matching screenshot */}
        <h2 className="text-2xl sm:text-3xl lg:text-[2.25rem] font-heading font-black text-white tracking-tight mb-8 drop-shadow-md">
          Pure Drinking Water & Advanced Purification<br />
          <span className="text-lg sm:text-xl text-[#00F0FF] font-medium block mt-1 font-heading">
            Why High Purity Standards Are Essential for Every Community & Enterprise
          </span>
        </h2>

        {/* Narrative Copy matching the editorial layout of the screenshot */}
        <div className="space-y-4 text-xs sm:text-sm text-[#BAE6FD] font-sans leading-relaxed text-justify sm:text-center max-w-3xl mx-auto bg-panel-translucent p-6 sm:p-8 rounded-2xl border border-[#8FD1F0]/30 shadow-xl">
          <p>
            Pure, safe drinking water is the vital foundation of daily health, sustained energy, and operational productivity. Adults require a minimum of 2 to 3 liters of purified hydration daily. Beyond hydration, water used in commercial food preparation, institutional dining, and workplace facilities must be microbiologically secure, low in hazardous dissolved solids, and properly mineralized.
          </p>

          <p>
            Unfiltered tap and borewell sources often contain high TDS, heavy chlorine, hardness scale, and pipeline corrosion that degrades equipment and risks consumer wellness. <strong>Khumani Water Solution</strong> provides an integrated engineering response: from compact domestic RO systems to heavy-duty community Water ATMs and rapid chilled water dispensers.
          </p>

          <p>
            Equipped with food-grade SS 304 storage chambers, multi-stage membrane purification, and dedicated on-site AMC maintenance, our systems deliver dependable water safety 24 hours a day, 365 days a year.
          </p>
        </div>

        {/* 3 Quick Benefit Metrics beneath copy */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 max-w-2xl mx-auto text-center font-sans">
          <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
            <span className="text-lg sm:text-xl font-heading font-black text-[#00F0FF] block">100% SS 304</span>
            <span className="text-[11px] text-[#BAE6FD]">Food-Grade Stainless Steel Build</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
            <span className="text-lg sm:text-xl font-heading font-black text-[#4ADE80] block">TDS & PH Balance</span>
            <span className="text-[11px] text-[#BAE6FD]">Optimal Alkaline Mineral Retention</span>
          </div>
          <div className="p-3.5 rounded-xl bg-white/[0.07] border border-white/15 backdrop-blur-md">
            <span className="text-lg sm:text-xl font-heading font-black text-[#FCD34D] block">Prompt AMC Service</span>
            <span className="text-[11px] text-[#BAE6FD]">Warranty & Preventive Maintenance</span>
          </div>
        </div>

      </div>
    </section>
  );
}
