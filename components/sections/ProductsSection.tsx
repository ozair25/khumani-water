'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Info, CheckCircle2, MessageSquare, Sparkles, ZoomIn } from 'lucide-react';
import { SITE_CONFIG, ProductItem, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface ProductsSectionProps {
  onEnquire: (product: ProductItem, selectedCapacity?: string) => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function ProductsSection({ onEnquire, onOpenLightbox }: ProductsSectionProps) {
  const [selectedCapacities, setSelectedCapacities] = useState<Record<string, string>>({
    'water-atm': '500 LPH',
    'chilled-water': '100 Ltr',
    'commercial-ro': '500 LPH',
    'domestic-ro': '15 Liters',
  });

  const [activeSpecsProduct, setActiveSpecsProduct] = useState<ProductItem | null>(null);

  const productImageMap: Record<string, typeof KHUMANI_REAL_IMAGES.communityService> = {
    'water-atm': KHUMANI_REAL_IMAGES.kioskRefill,
    'chilled-water': KHUMANI_REAL_IMAGES.purificationShowroom,
    'commercial-ro': KHUMANI_REAL_IMAGES.purificationShowroom,
    'domestic-ro': KHUMANI_REAL_IMAGES.schoolPlaza,
  };

  const handleSelectCapacity = (productId: string, cap: string) => {
    setSelectedCapacities((prev) => ({
      ...prev,
      [productId]: cap,
    }));
  };

  const handleWhatsAppProduct = (product: ProductItem) => {
    const cap = selectedCapacities[product.id] || product.capacities[0];
    const textMsg = encodeURIComponent(
      `Hello Khumani Water Solution, I would like to enquire about ${product.name} (Capacity: ${cap}). Please share technical specifications, pricing, and installation requirements.`
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="products" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-[#E5F2FB] to-[#DCEEFA] text-[#002D5A] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E1F1FD] border border-[#B5DCF7] text-[#006FB8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#006FB8]" />
            <span>PRODUCTS & COMMERCIAL EQUIPMENT</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-[#002348] tracking-tight mb-3">
            Water ATMs & Commercial Water Systems
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#00528A] font-sans leading-relaxed">
            Our primary focus is automated Water ATM kiosks, complemented by commercial chilled water dispensers, industrial RO plants, and domestic purifiers.
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.products.map((product) => {
            const currentCap = selectedCapacities[product.id] || product.capacities[0];
            const isFlagship = product.id === 'water-atm';
            const realImg = productImageMap[product.id] || KHUMANI_REAL_IMAGES.kioskRefill;

            return (
              <div
                key={product.id}
                className={`bg-white rounded-2xl border shadow-lg overflow-hidden flex flex-col justify-between transition-all duration-300 group ${
                  isFlagship
                    ? 'border-[#006FB8] ring-2 ring-[#006FB8]/30 shadow-2xl relative lg:-translate-y-2'
                    : 'border-[#BDE0F7] hover:border-[#006FB8] hover:shadow-xl'
                }`}
              >
                {/* Flagship Banner Tag */}
                {isFlagship && (
                  <div className="bg-[#006FB8] text-white text-[11px] font-heading font-black uppercase tracking-wider py-1 text-center">
                    ★ Primary Solution
                  </div>
                )}

                {/* Real Photo Visual Header */}
                <div className="relative w-full aspect-[4/3] border-b border-[#BDE0F7] bg-black overflow-hidden group/img">
                  <Image
                    src={realImg.url}
                    alt={realImg.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    quality={90}
                    referrerPolicy="no-referrer"
                    className="object-cover w-full h-full group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                  {/* Image Zoom button */}
                  {onOpenLightbox && (
                    <button
                      type="button"
                      onClick={() => onOpenLightbox(realImg)}
                      className="absolute top-3 left-3 p-1.5 rounded-full bg-black/60 hover:bg-black text-white text-[10px] font-bold flex items-center gap-1 shadow-md transition-all cursor-pointer"
                      aria-label="Zoom image"
                    >
                      <ZoomIn className="w-3.5 h-3.5" />
                    </button>
                  )}

                  {/* Specs button */}
                  <button
                    type="button"
                    onClick={() => setActiveSpecsProduct(product)}
                    className="absolute top-3 right-3 px-2 py-1 rounded-md bg-white/95 hover:bg-white text-[#004C83] hover:text-[#002348] border border-[#BDE0F7] text-[11px] flex items-center gap-1 font-heading font-bold shadow-sm transition-all cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>Specs</span>
                  </button>

                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <span className="text-[10px] font-mono text-[#7DD3FC] block">
                      {product.tagline}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 text-center items-center justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#2D5377] font-sans leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Capacity selection chips */}
                    <div className="flex items-center justify-center gap-1.5 flex-wrap mb-5">
                      {product.capacities.map((cap) => {
                        const isSelected = currentCap === cap;
                        return (
                          <button
                            key={cap}
                            type="button"
                            onClick={() => handleSelectCapacity(product.id, cap)}
                            className={`px-2.5 py-1 rounded-md text-[10px] font-bold font-sans transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#006FB8] text-white shadow-sm'
                                : 'bg-[#EDF6FD] text-[#004C83] border border-[#C5E1F7] hover:bg-[#DDF0FD]'
                            }`}
                          >
                            {cap}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Action Buttons: Modal + WhatsApp */}
                  <div className="w-full space-y-2 pt-2 border-t border-[#EDF6FD]">
                    <button
                      type="button"
                      onClick={() => onEnquire(product, currentCap)}
                      className={`w-full py-2.5 px-4 rounded-xl text-xs font-heading font-bold flex items-center justify-center gap-1.5 shadow-md transition-all cursor-pointer ${
                        isFlagship
                          ? 'btn-cta-orange'
                          : 'bg-[#006FB8] hover:bg-[#00528A] text-white'
                      }`}
                    >
                      <span>Enquire Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleWhatsAppProduct(product)}
                      className="w-full py-2 px-3 rounded-xl bg-[#EAFBF1] hover:bg-[#25D366] text-[#1EBE5D] hover:text-white border border-[#A7F3D0] text-xs font-heading font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 fill-current" />
                      <span>WhatsApp Price</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Specifications Modal */}
        {activeSpecsProduct && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#001D38]/70 backdrop-blur-sm"
            onClick={() => setActiveSpecsProduct(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-md w-full p-6 border-2 border-[#006FB8] shadow-2xl text-[#002D5A] animate-in zoom-in-95 duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4 border-b border-[#BDE0F7] pb-3">
                <h4 className="text-base sm:text-lg font-heading font-bold text-[#002348]">
                  {activeSpecsProduct.name} — Technical Specs
                </h4>
                <button
                  onClick={() => setActiveSpecsProduct(null)}
                  className="text-xs text-[#00528A] hover:text-[#002348] font-bold cursor-pointer"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-2 mb-6 text-xs text-[#2D5377]">
                {activeSpecsProduct.specifications.map((spec) => (
                  <div key={spec.label} className="flex justify-between items-center py-1.5 border-b border-[#E1F1FD]">
                    <span className="font-heading font-semibold text-[#004C83]">{spec.label}</span>
                    <span className="text-[#002348] font-medium text-right">{spec.value}</span>
                  </div>
                ))}

                <div className="pt-2">
                  <span className="text-xs font-bold text-[#004C83] block mb-2 font-heading">
                    Key Features:
                  </span>
                  <ul className="space-y-1.5">
                    {activeSpecsProduct.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#2D5377]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    const prod = activeSpecsProduct;
                    setActiveSpecsProduct(null);
                    onEnquire(prod, selectedCapacities[prod.id]);
                  }}
                  className="w-1/2 bg-[#006FB8] hover:bg-[#00528A] text-white py-2.5 rounded-xl text-xs font-heading font-bold text-center shadow-md transition-all cursor-pointer"
                >
                  Request Quote
                </button>
                <button
                  onClick={() => {
                    const prod = activeSpecsProduct;
                    setActiveSpecsProduct(null);
                    handleWhatsAppProduct(prod);
                  }}
                  className="w-1/2 bg-[#25D366] hover:bg-[#1EBE5D] text-white py-2.5 rounded-xl text-xs font-heading font-bold text-center shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
