import React from 'react';
import { Award, Wrench, ShieldCheck, Heart } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function TrustStrip() {
  const getTrustIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-5 h-5 text-[#0866D8]" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-[#06B6D4]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#0284C7]" />;
      case 'Heart':
      default:
        return <Heart className="w-5 h-5 text-[#0866D8]" />;
    }
  };

  return (
    <section className="py-8 sm:py-12 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-gradient-to-b from-[#F0F9FF] to-[#FFFFFF] rounded-3xl border-2 border-[#BAE6FD]/80 p-7 sm:p-9 shadow-lg shadow-[#0866D8]/6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#BAE6FD]/60">
          {SITE_CONFIG.trustStrip.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center px-4 group cursor-default transition-transform duration-300 hover:-translate-y-1 ${
                index !== 0 ? 'pt-6 sm:pt-0' : ''
              }`}
            >
              <div className="w-13 h-13 rounded-2xl bg-white border border-[#BAE6FD] flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:shadow-md group-hover:shadow-[#38BDF8]/20 transition-all duration-300">
                {getTrustIcon(item.iconName)}
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
