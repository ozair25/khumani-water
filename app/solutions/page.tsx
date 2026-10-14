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
  Wrench,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { EnquiryModal } from '@/components/enquiry/EnquiryModal';
import { FloatingContact } from '@/components/enquiry/FloatingContact';
import { FluidSectionWaveDivider } from '@/components/visuals/WaveDividers';
import { ProductCardVisual } from '@/components/visuals/ProductCardVisual';
import { SITE_CONFIG, ProductItem } from '@/lib/site-data';

export default function SolutionsPage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [selectedCapacity, setSelectedCapacity] = useState<string>('');
  const [activeTab, setActiveTab] = useState<'all' | 'water-atm' | 'ro-system' | 'chiller' | 'spares'>('all');
  const [expandedSpecs, setExpandedSpecs] = useState<Record<string, boolean>>({});

  const handleOpenGeneralQuote = () => {
    setSelectedProduct(null);
    setSelectedCapacity('');
    setModalOpen(true);
  };

  const handleProductEnquire = (product: ProductItem, capacity?: string) => {
    setSelectedProduct(product);
    setSelectedCapacity(capacity || product.capacities[0] || '500 LPH');
    setModalOpen(true);
  };

  const toggleSpecs = (id: string) => {
    setExpandedSpecs((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleWhatsAppProduct = (productName: string, category: string) => {
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution, I am inquiring about ${productName} (${category}). Please send technical specs and quotation.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#075A99]">
      <Navbar onOpenQuote={handleOpenGeneralQuote} />

      {/* Page Header Banner */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 bg-gradient-to-b from-[#002348] via-[#003B70] to-[#075A99] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#38BDF8] text-xs font-heading font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>SOLUTIONS & PRODUCTS CATALOGUE</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-heading font-black tracking-tight text-white mb-4">
            Commercial Water ATMs & RO Systems
          </h1>
          <p className="text-xs sm:text-base text-[#BAE6FD] font-sans max-w-2xl mx-auto leading-relaxed">
            High-performance automated Water ATMs, commercial RO plants, chilled water dispensers, and certified replacement spare parts built for uninterrupted operation.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-white text-[#003B70] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              All Solutions
            </button>
            <button
              onClick={() => setActiveTab('water-atm')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                activeTab === 'water-atm'
                  ? 'bg-white text-[#003B70] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              A. Water ATMs
            </button>
            <button
              onClick={() => setActiveTab('ro-system')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                activeTab === 'ro-system'
                  ? 'bg-white text-[#003B70] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              B. Domestic & Commercial RO
            </button>
            <button
              onClick={() => setActiveTab('chiller')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                activeTab === 'chiller'
                  ? 'bg-white text-[#003B70] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              C. Chilled Water Solutions
            </button>
            <button
              onClick={() => setActiveTab('spares')}
              className={`px-4 py-2 rounded-xl text-xs font-heading font-bold transition-all cursor-pointer ${
                activeTab === 'spares'
                  ? 'bg-white text-[#003B70] shadow-md font-black'
                  : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
              }`}
            >
              D. RO Spare Parts
            </button>
          </div>
        </div>
      </section>

      {/* Wave Transition into Content */}
      <FluidSectionWaveDivider
        topColor="#075A99"
        bottomColor="#F0F7FD"
        accentColor="#38BDF8"
        variant="ripple"
      />

      <div className="bg-[#F0F7FD] py-12 sm:py-16 text-[#002348]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

          {/* CATEGORY A: WATER ATMs */}
          {(activeTab === 'all' || activeTab === 'water-atm') && (
            <section id="water-atms" className="scroll-mt-32">
              <div className="border-b-2 border-[#006FB8] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-heading font-bold text-[#006FB8] uppercase tracking-wider block">
                    CATEGORY A
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#002348]">
                    Automated Water ATMs
                  </h2>
                </div>
                <p className="text-xs text-[#00528A] font-sans max-w-md">
                  Vandal-resistant SS 304 automated kiosks for public markets, campuses, and community locations.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Product Card */}
                <div className="lg:col-span-7 bg-white rounded-3xl border-2 border-[#BDE0F7] shadow-xl overflow-hidden">
                  <div className="h-64 sm:h-72 relative border-b border-[#BDE0F7] bg-[#F4F9FD]">
                    <Image
                      src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_ATM_Community_Service_iadjv3.png"
                      alt="Khumani Water ATM Community Service Installation"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      referrerPolicy="no-referrer"
                      className="object-cover object-center"
                    />
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider bg-[#E1F1FD] px-2.5 py-1 rounded-full">
                        Flagship Machine
                      </span>
                      <span className="text-xs font-mono font-bold text-[#002348]">
                        Capacities: 250 / 500 / 1000 LPH
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-black text-[#002348] mb-3">
                      Automated Water ATM Dispensing Kiosk
                    </h3>
                    <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-6">
                      Coin acceptor, RFID smart-card, and push-button dispensing system with digital pulse flow accuracy and food-grade insulated SS 304 water storage tanks.
                    </p>

                    <div className="space-y-2 mb-6 text-xs text-[#2D5377]">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                        <span>Dual Coin & Contactless RFID Smart Card Automation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                        <span>Multi-Stage RO + UV + Mineral Cartridge Filtration</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0" />
                        <span>Digital Metering Panel with Daily Volume & Transaction Logger</span>
                      </div>
                    </div>

                    {/* Expandable Specifications Panel */}
                    <button
                      onClick={() => toggleSpecs('water-atm')}
                      className="w-full py-2 px-3 rounded-xl bg-[#EDF6FD] border border-[#BDE0F7] text-xs font-heading font-bold text-[#004C83] flex items-center justify-between mb-6 cursor-pointer hover:bg-[#E1F1FD] transition-colors"
                    >
                      <span>Technical Specifications & Storage</span>
                      {expandedSpecs['water-atm'] ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {expandedSpecs['water-atm'] && (
                      <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] mb-6 space-y-2 text-xs">
                        <div className="flex justify-between border-b pb-1">
                          <span className="font-bold text-[#004C83]">Dispensing Mechanism</span>
                          <span>Multi-Coin / RFID Smart Card / Push Button</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="font-bold text-[#004C83]">Buffer Storage</span>
                          <span>200L – 1000L Insulated Stainless SS 304</span>
                        </div>
                        <div className="flex justify-between border-b pb-1">
                          <span className="font-bold text-[#004C83]">Power Rating</span>
                          <span>220V AC / Solar Inverter Compatible</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-bold text-[#004C83]">Flow Accuracy</span>
                          <span>±1.5% Digital Pulse Flow Sensor</span>
                        </div>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => handleProductEnquire(SITE_CONFIG.products[0])}
                        className="btn-cta-orange py-3 px-6 rounded-xl text-xs sm:text-sm font-heading font-extrabold flex-1 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                      >
                        <span>Enquire Water ATM Installation</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleWhatsAppProduct('Automated Water ATM', 'Water ATM Category')}
                        className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-5 rounded-xl text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer transition-colors"
                      >
                        <MessageSquare className="w-4 h-4 fill-white" />
                        <span>WhatsApp Details</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Community & Expansion Opportunities Right Panel */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="bg-white rounded-3xl p-6 border-2 border-[#BDE0F7] shadow-md">
                    <h4 className="text-base font-heading font-black text-[#002348] mb-3">
                      Community & Public Location Benefits
                    </h4>
                    <ul className="space-y-3 text-xs text-[#2D5377] font-sans">
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                          1
                        </div>
                        <span><strong>24/7 Unattended Hydration:</strong> Self-service operation removes the need for manual jar delivery or continuous staff cashiering.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                          2
                        </div>
                        <span><strong>High Footfall Adaptability:</strong> Ideal for bus stands, railway gates, vegetable markets, schools, and residential colonies.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center shrink-0 font-bold text-[10px] mt-0.5">
                          3
                        </div>
                        <span><strong>Reduced Single-Use Plastic:</strong> Promotes refillable bottles and 20-liter jars, cutting down environmental plastic pollution.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#003B70] to-[#075A99] rounded-3xl p-6 text-white shadow-xl border border-[#38BDF8]/30">
                    <h4 className="text-base font-heading font-black mb-2">
                      Business Expansion & Partnership
                    </h4>
                    <p className="text-xs text-[#BAE6FD] leading-relaxed mb-4">
                      Are you looking to expand an existing water delivery business or set up new Water ATM kiosks in high-demand markets?
                    </p>
                    <Link
                      href="/about#contact-form"
                      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#003B70] text-xs font-heading font-bold shadow hover:bg-[#F0F7FD] transition-colors"
                    >
                      <span>Discuss Partnership Opportunities</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* CATEGORY B: DOMESTIC & COMMERCIAL RO SYSTEMS */}
          {(activeTab === 'all' || activeTab === 'ro-system') && (
            <section id="ro-systems" className="scroll-mt-32">
              <div className="border-b-2 border-[#006FB8] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-heading font-bold text-[#006FB8] uppercase tracking-wider block">
                    CATEGORY B
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#002348]">
                    Domestic & Commercial RO Systems
                  </h2>
                </div>
                <p className="text-xs text-[#00528A] font-sans max-w-md">
                  High-rejection RO plants for offices, schools, shops, hotels, and residential units.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Commercial RO Plant */}
                <div className="bg-white rounded-3xl border-2 border-[#BDE0F7] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-56 relative border-b border-[#BDE0F7] bg-[#F4F9FD]">
                      <ProductCardVisual category="ro-system" name="Commercial RO Plant" />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                        INDUSTRIAL & COMMERCIAL
                      </span>
                      <h3 className="text-xl font-heading font-black text-[#002348] mb-2">
                        Commercial RO Purification Plants
                      </h3>
                      <p className="text-xs text-[#2D5377] font-sans leading-relaxed mb-4">
                        Skid-mounted RO plants engineered for commercial establishments, restaurants, hotels, hospitals, and water packaging units handling high TDS raw water.
                      </p>

                      <div className="space-y-1.5 text-xs text-[#2D5377] mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>Multi-media sand & activated carbon filter vessels</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>Industrial high-rejection 4040/8040 TFC membranes</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>Capacities: 250 LPH, 500 LPH, 1000+ LPH</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-3">
                    <button
                      onClick={() => handleProductEnquire(SITE_CONFIG.products[2])}
                      className="bg-[#006FB8] hover:bg-[#00528A] text-white py-2.5 px-4 rounded-xl text-xs font-heading font-bold flex-1 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <span>Enquire Commercial RO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppProduct('Commercial RO Plant', 'Commercial Category')}
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Domestic RO Purifier */}
                <div className="bg-white rounded-3xl border-2 border-[#BDE0F7] shadow-xl overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="h-56 sm:h-64 relative border-b border-[#BDE0F7] bg-[#F4F9FD]">
                      <Image
                        src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003945/Khumani_Water_Purification_Showroom_vjvvfg.png"
                        alt="Khumani Water Purification Showroom & RO Systems"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        referrerPolicy="no-referrer"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider block mb-1">
                        RESIDENTIAL & CLINICS
                      </span>
                      <h3 className="text-xl font-heading font-black text-[#002348] mb-2">
                        Domestic RO Water Purifiers
                      </h3>
                      <p className="text-xs text-[#2D5377] font-sans leading-relaxed mb-4">
                        Compact multi-stage residential RO purifiers with alkaline mineral retention and ultra-quiet booster pumps for modern homes, apartments, and private offices.
                      </p>

                      <div className="space-y-1.5 text-xs text-[#2D5377] mb-6">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>7-Stage purification with alkaline mineral balance</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>Food-grade detachable storage tank (12L / 15L)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>Auto shut-off sensor and quiet operation</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 flex gap-3">
                    <button
                      onClick={() => handleProductEnquire(SITE_CONFIG.products[3])}
                      className="bg-[#006FB8] hover:bg-[#00528A] text-white py-2.5 px-4 rounded-xl text-xs font-heading font-bold flex-1 flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <span>Enquire Domestic RO</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppProduct('Domestic RO Purifier', 'Residential Category')}
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 px-3 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-white" />
                      <span>WhatsApp</span>
                    </button>
                  </div>
                </div>

              </div>
            </section>
          )}

          {/* CATEGORY C: CHILLED WATER SOLUTIONS */}
          {(activeTab === 'all' || activeTab === 'chiller') && (
            <section id="chilled-water" className="scroll-mt-32">
              <div className="border-b-2 border-[#006FB8] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-heading font-bold text-[#006FB8] uppercase tracking-wider block">
                    CATEGORY C
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#002348]">
                    Chilled Water Solutions
                  </h2>
                </div>
                <p className="text-xs text-[#00528A] font-sans max-w-md">
                  Heavy-duty water coolers and chilled dispensing units for colleges, gyms, and corporate pantries.
                </p>
              </div>

              <div className="bg-white rounded-3xl border-2 border-[#BDE0F7] shadow-xl p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-6 h-64 sm:h-72 relative rounded-2xl overflow-hidden border border-[#BDE0F7] bg-[#F4F9FD]">
                  <Image
                    src="https://res.cloudinary.com/dtrvyelcg/image/upload/v1792003944/Khumani_Water_ATM_School_Plaza_wa0a0i.png"
                    alt="Khumani Water ATM School & Commercial Plaza"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    referrerPolicy="no-referrer"
                    className="object-cover object-center"
                  />
                </div>

                <div className="lg:col-span-6">
                  <span className="text-[10px] font-bold text-[#006FB8] uppercase tracking-wider bg-[#E1F1FD] px-2.5 py-1 rounded-full">
                    HIGH-DEMAND DISPENSER
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-[#002348] mt-2 mb-3">
                    Commercial Chilled Water Systems & Coolers
                  </h3>
                  <p className="text-xs sm:text-sm text-[#2D5377] font-sans leading-relaxed mb-5">
                    Heavy-duty rapid-chilling water dispensers equipped with hermetic cooling compressors, dual taps for cold and ambient water, and high-density PUF insulation.
                  </p>

                  <div className="grid grid-cols-2 gap-3 text-xs mb-6">
                    <div className="p-3 rounded-xl bg-[#F0F7FD] border border-[#BDE0F7]">
                      <strong className="block text-[#004C83] font-heading font-bold">Storage Capacities</strong>
                      <span>50 Liter, 100 Liter, 200 Liter</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F0F7FD] border border-[#BDE0F7]">
                      <strong className="block text-[#004C83] font-heading font-bold">Cooling Range</strong>
                      <span>8°C to 16°C Adjustable</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => handleProductEnquire(SITE_CONFIG.products[1])}
                      className="bg-[#006FB8] hover:bg-[#00528A] text-white py-3 px-6 rounded-xl text-xs sm:text-sm font-heading font-bold flex-1 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <span>Enquire Chilled Water System</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleWhatsAppProduct('Commercial Chilled Water System', 'Chiller Category')}
                      className="bg-[#25D366] hover:bg-[#1EBE5D] text-white py-3 px-5 rounded-xl text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4 fill-white" />
                      <span>WhatsApp Price</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* CATEGORY D: RO SPARE PARTS */}
          {(activeTab === 'all' || activeTab === 'spares') && (
            <section id="spares" className="scroll-mt-32">
              <div className="border-b-2 border-[#006FB8] pb-4 mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-heading font-bold text-[#006FB8] uppercase tracking-wider block">
                    CATEGORY D
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#002348]">
                    RO Spare Parts & Consumables
                  </h2>
                </div>
                <p className="text-xs text-[#00528A] font-sans max-w-md">
                  Certified replacement membranes, filter cartridges, pumps, and dispensing accessories.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-3">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-[#002348] mb-1">
                      RO Membranes
                    </h3>
                    <p className="text-xs text-[#2D5377] leading-relaxed">
                      High-rejection 4040, 8040, and 75 GPD polyamide thin-film RO membranes.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenGeneralQuote}
                    className="mt-4 text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
                  >
                    Request Spares Quote &rarr;
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-3">
                      <Droplets className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-[#002348] mb-1">
                      Sediment & Carbon Filters
                    </h3>
                    <p className="text-xs text-[#2D5377] leading-relaxed">
                      High-grade spun polypropylene sediment filters, granular and block carbon cartridges.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenGeneralQuote}
                    className="mt-4 text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
                  >
                    Request Spares Quote &rarr;
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-3">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-[#002348] mb-1">
                      Booster Pumps & Valves
                    </h3>
                    <p className="text-xs text-[#2D5377] leading-relaxed">
                      Heavy-duty stainless booster pumps, solenoid valves, and digital flow sensors.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenGeneralQuote}
                    className="mt-4 text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
                  >
                    Request Spares Quote &rarr;
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-[#BDE0F7] shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#E1F1FD] text-[#006FB8] flex items-center justify-center mb-3">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-heading font-bold text-[#002348] mb-1">
                      Coin & RFID Controllers
                    </h3>
                    <p className="text-xs text-[#2D5377] leading-relaxed">
                      Replacement coin validators, RFID contactless smart cards, and dispense circuit boards.
                    </p>
                  </div>
                  <button
                    onClick={handleOpenGeneralQuote}
                    className="mt-4 text-xs font-heading font-bold text-[#006FB8] hover:underline text-left cursor-pointer"
                  >
                    Request Spares Quote &rarr;
                  </button>
                </div>
              </div>
            </section>
          )}

        </div>
      </div>

      {/* Footer */}
      <Footer />

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
