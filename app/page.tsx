'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Droplets, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  MessageSquare,
  Building2,
  Store,
  School,
  Factory,
  Wrench,
  Award
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { Footer } from '@/components/layout/Footer';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';
import { FloatingContact } from '@/components/enquiry/FloatingContact';
import { FluidSectionWaveDivider } from '@/components/visuals/WaveDividers';
import { ProductCardVisual } from '@/components/visuals/ProductCardVisual';
import { SITE_CONFIG, ProductItem } from '@/lib/site-data';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');

  const handleOpenGeneralQuote = () => {
    setSelectedProduct(null);
    setSelectedCapacity('');
    setModalOpen(true);
  };

  const handleProductEnquire = (product: ProductItem) => {
    setSelectedProduct(product);
    setSelectedCapacity(product.capacities[0] || '500 LPH');
    setModalOpen(true);
  };

  const handleExploreProducts = () => {
    const el = document.getElementById('core-categories');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#075A99]">
      {/* 1. Header Navigation */}
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      {/* 2. PROTECTED Hero Section - KEEP EXACTLY AS IS */}
      <HeroSection
        onOpenQuote={handleOpenGeneralQuote}
        onExploreProducts={handleExploreProducts}
      />

      {/* Wave Transition into Core Categories */}
      <FluidSectionWaveDivider
        topColor="#002348"
        bottomColor="#F0F7FD"
        accentColor="#38BDF8"
        variant="ripple"
      />

      {/* 3. CORE BUSINESS CATEGORIES (3 Attractive Visual Cards) */}
      <section id="core-categories" className="py-14 sm:py-20 bg-[#F0F7FD] text-[#002348]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-[11px] font-heading font-black text-[#006FB8] uppercase tracking-widest block mb-2">
              OUR CORE SOLUTIONS
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight">
              Three Pillars of Pure Water Excellence
            </h2>
            <p className="text-xs sm:text-sm text-[#00528A] font-sans mt-2">
              Explore our primary water dispensing, purification, and cooling solutions designed for commercial and community impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            
            {/* Category 1: Water ATMs */}
            <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] shadow-lg hover:border-[#006FB8] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-56 relative border-b border-[#BDE0F7]">
                  <Image
                    src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_ATM_Community_Service_iadjv3.png"
                    alt="Khumani Water ATM Community Service"
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                    ★ FLAGSHIP DISPENSING KIOSK
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                    Automated Water ATMs
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                    Coin and smart-card operated 24/7 water vending kiosks housed in heavy food-grade SS 304 with continuous flow metering.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/solutions#water-atms"
                  className="w-full btn-cta-orange py-3 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Water ATMs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 2: Domestic & Commercial RO Systems */}
            <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] shadow-lg hover:border-[#006FB8] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-56 relative border-b border-[#BDE0F7]">
                  <Image
                    src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_Purification_Showroom_vjvvfg.png"
                    alt="Khumani Water Purification Showroom"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                    INDUSTRIAL & RESIDENTIAL PURIFICATION
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                    Domestic & Commercial RO
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                    High-capacity RO plants for commercial establishments, offices, hotels, and compact multi-stage residential purifiers.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/solutions#ro-systems"
                  className="w-full bg-[#006FB8] hover:bg-[#00528A] text-white py-3 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore RO Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Category 3: Chilled Water Solutions */}
            <div className="bg-white rounded-2xl border-2 border-[#BDE0F7] shadow-lg hover:border-[#006FB8] hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
              <div>
                <div className="h-56 relative border-b border-[#BDE0F7]">
                  <Image
                    src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003944/Khumani_Water_ATM_School_Plaza_wa0a0i.png"
                    alt="Khumani Water ATM School & Commercial Plaza"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                    RAPID-COOLING DISPENSERS
                  </span>
                  <h3 className="text-xl font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                    Chilled Water Solutions
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-4">
                    Heavy-duty water coolers and chilled dispensers for schools, corporate tech parks, gyms, and commercial premises.
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href="/solutions#chilled-water"
                  className="w-full bg-[#006FB8] hover:bg-[#00528A] text-white py-3 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <span>Explore Chilled Systems</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Wave Transition into Featured Solutions */}
      <FluidSectionWaveDivider
        topColor="#F0F7FD"
        bottomColor="#003B70"
        accentColor="#38BDF8"
        variant="flow"
      />

      {/* 4. FEATURED SOLUTIONS (Reuse Existing Product Visual Cards) */}
      <section className="py-14 sm:py-20 bg-[#003B70] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/20">
            <div>
              <span className="text-[11px] font-heading font-black text-[#38BDF8] uppercase tracking-widest block mb-1">
                FEATURED EQUIPMENT
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-white">
                Main Equipment Lineup
              </h2>
            </div>
            <Link
              href="/solutions"
              className="text-xs font-heading font-bold text-[#38BDF8] hover:text-white flex items-center gap-1 transition-colors"
            >
              <span>View All Products & Specifications</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_CONFIG.products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-[#BDE0F7] shadow-lg overflow-hidden flex flex-col justify-between text-[#002348]"
              >
                <div className="h-44 relative bg-[#F4F9FD] border-b border-[#BDE0F7]">
                  <ProductCardVisual category={product.category} name={product.name} />
                </div>
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                      {product.tagline}
                    </span>
                    <h3 className="text-base font-heading font-bold text-[#002348] mb-1.5">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#2D5377] font-sans leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleProductEnquire(product)}
                    className="w-full btn-cta-orange py-2.5 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                  >
                    <span>Enquire Quotation</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Wave Transition into About Brief */}
      <FluidSectionWaveDivider
        topColor="#003B70"
        bottomColor="#F0F7FD"
        accentColor="#7DD3FC"
        variant="ripple"
      />

      {/* 5. ABOUT THE BUSINESS & KEY BENEFITS */}
      <section className="py-14 sm:py-20 bg-[#F0F7FD] text-[#002348]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[11px] font-heading font-black text-[#006FB8] uppercase tracking-widest block mb-2">
                ABOUT KHUMANI WATER SOLUTION
              </span>
              <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight mb-4">
                Reliable Water Engineering Built for Real Operations
              </h2>
              <p className="text-xs sm:text-sm text-[#00528A] font-sans leading-relaxed mb-6">
                Khumani Water Solution provides practical water purification, automated Water ATM dispensing, and commercial water cooling equipment supported by responsive installation and maintenance services.
              </p>

              <div className="p-4 rounded-2xl bg-white border border-[#BDE0F7] shadow-md flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center shrink-0 font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-xs sm:text-sm font-heading font-bold text-[#002348] block">
                    SS 304 Food-Grade Enclosures
                  </strong>
                  <span className="text-[11px] text-[#00528A]">
                    Durable, vandal-resistant stainless construction for maximum uptime.
                  </span>
                </div>
              </div>
            </div>

            {/* 4 Key Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SITE_CONFIG.benefits.slice(0, 4).map((b) => (
                <div
                  key={b.id}
                  className="p-5 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm hover:border-[#006FB8] hover:shadow-md transition-all flex items-start gap-3.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center shrink-0 font-bold">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-heading font-bold text-[#002348] mb-1">
                      {b.title}
                    </h3>
                    <p className="text-xs text-[#2D5377] font-sans leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Wave Transition into Visual Showcase */}
      <FluidSectionWaveDivider
        topColor="#F0F7FD"
        bottomColor="#002D5A"
        accentColor="#38BDF8"
        variant="crest"
      />

      {/* 6. VISUAL SHOWCASE (Real-World Equipment & Settings) */}
      <section className="py-14 sm:py-20 bg-[#002D5A] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-heading font-black text-[#38BDF8] uppercase tracking-widest block mb-2">
              REAL-WORLD DEPLOYMENTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight">
              Versatile Installation Environments
            </h2>
            <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans mt-2">
              Khumani equipment is installed across busy transit hubs, campuses, commercial facilities, and residential colonies.
            </p>
          </div>

          {/* Real Photo Spotlight Banner */}
          <div className="mb-10 h-64 sm:h-80 relative rounded-3xl overflow-hidden border-2 border-[#38BDF8]/40 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khummani_Water_Kiosk_Refill_Scene_dkfwfc.png"
              alt="Khumani Water Kiosk Installation & Refill Scene"
              fill
              sizes="(max-width: 1200px) 100vw, 1200px"
              referrerPolicy="no-referrer"
              className="object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center mb-3">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-1">
                  Markets & Transit Hubs
                </h3>
                <p className="text-xs text-[#BAE6FD] leading-relaxed">
                  High-footfall 24/7 coin and card dispensing for shoppers and commuters.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#38BDF8] uppercase mt-4 block">
                Recommended: 500 – 1000 LPH
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center mb-3">
                  <School className="w-5 h-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-1">
                  Schools & Campuses
                </h3>
                <p className="text-xs text-[#BAE6FD] leading-relaxed">
                  Safe student hydration with RFID smart cards and optional chilling.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#38BDF8] uppercase mt-4 block">
                Recommended: 250 – 500 LPH
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center mb-3">
                  <Factory className="w-5 h-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-1">
                  Industrial & Hospitals
                </h3>
                <p className="text-xs text-[#BAE6FD] leading-relaxed">
                  Heavy-duty skid-mounted commercial RO plants for continuous high TDS raw water.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#38BDF8] uppercase mt-4 block">
                Recommended: 500 – 2000+ LPH
              </span>
            </div>

            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#006FB8] text-white flex items-center justify-center mb-3">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-heading font-bold text-white mb-1">
                  Corporate Offices
                </h3>
                <p className="text-xs text-[#BAE6FD] leading-relaxed">
                  Eliminates heavy jar handling in pantries with rapid chilled dispensing.
                </p>
              </div>
              <span className="text-[10px] font-bold text-[#38BDF8] uppercase mt-4 block">
                Recommended: 100L – 200L Chiller
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* Wave Transition into CTA */}
      <FluidSectionWaveDivider
        topColor="#002D5A"
        bottomColor="#002348"
        accentColor="#06B6D4"
        variant="flow"
      />

      {/* 7. BUSINESS ENQUIRY CTA */}
      <section className="py-14 sm:py-20 bg-[#002348] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <span className="text-[11px] font-heading font-black text-[#38BDF8] uppercase tracking-widest block mb-2">
            EXPAND YOUR WATER BUSINESS
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight mb-4">
            Ready to Install a Water ATM or Commercial RO Plant?
          </h2>
          <p className="text-xs sm:text-base text-[#BAE6FD] font-sans leading-relaxed mb-8 max-w-xl mx-auto">
            Contact Khumani Water Solution today for site feasibility assessment, equipment catalogues, and custom quotations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={handleOpenGeneralQuote}
              className="btn-cta-orange py-3.5 px-8 rounded-full text-sm font-heading font-extrabold shadow-lg hover:shadow-2xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Enquire About Water ATM</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>

            <Link
              href="/about#contact-form"
              className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/25 text-white font-heading font-bold text-sm transition-colors"
            >
              Contact Us & Partnerships
            </Link>
          </div>
        </div>
      </section>

      {/* Wave Transition into Footer */}
      <FluidSectionWaveDivider
        topColor="#002348"
        bottomColor="#00264A"
        accentColor="#38BDF8"
        variant="ripple"
      />

      {/* 8. Footer */}
      <Footer />

      {/* Modals & WhatsApp Actions */}
      {modalOpen && (
        <EnquiryModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          initialProduct={selectedProduct}
          initialCapacity={selectedCapacity}
        />
      )}

      <FloatingContact onOpenQuote={handleOpenGeneralQuote} />
    </main>
  );
}
