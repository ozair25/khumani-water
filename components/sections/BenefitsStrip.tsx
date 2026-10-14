import React from 'react';
import { Droplets, Leaf, ShieldCheck, Truck, Headphones } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function BenefitsStrip() {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Droplets':
        return <Droplets className="w-5 h-5 text-[#0866D8]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#06B6D4]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0284C7]" />;
      case 'Truck':
        return <Truck className="w-5 h-5 text-[#0866D8]" />;
      case 'Headphones':
      default:
        return <Headphones className="w-5 h-5 text-[#0284C7]" />;
    }
  };

  return (
    <section className="relative -mt-8 sm:-mt-12 z-20 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-[#BAE6FD]/80 shadow-xl shadow-[#0866D8]/8 p-6 sm:p-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 divide-y md:divide-y-0 md:divide-x divide-[#BAE6FD]/60">
          {SITE_CONFIG.benefits.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-2 sm:px-4 group cursor-default transition-transform duration-300 hover:-translate-y-1 ${
                index !== 0 ? 'pt-4 md:pt-0' : ''
              }`}
            >
              <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#E0F2FE] via-[#BAE6FD]/60 to-[#F0F9FF] border border-[#BAE6FD] flex items-center justify-center mb-3.5 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#38BDF8]/30 transition-all duration-300">
                {getIcon(item.iconName)}
              </div>
              <h3 className="text-sm font-extrabold text-[#062B63] mb-1 group-hover:text-[#0866D8] transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-[#637995] font-medium">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
