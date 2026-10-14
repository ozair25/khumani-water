'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Droplets, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { TopLeftLeaves, TopRightLeaves } from '@/components/visuals/NatureLeaves';

interface NavbarProps {
  onOpenQuote?: () => void;
}

export function Navbar({ onOpenQuote }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I would like to enquire about Water ATM installation and business opportunities.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-b from-[#003B70] via-[#004B86] to-[#075A99] border-b border-[#1687C5]/40 shadow-xl select-none">
      
      {/* Decorative Green Leaves on Corners */}
      <TopLeftLeaves />
      <TopRightLeaves />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        
        {/* Top Header Row */}
        <div className="h-20 sm:h-22 flex items-center justify-between gap-4 sm:gap-6">
          
          {/* Left: Red Brand Badge */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2.5 group whitespace-nowrap shrink-0 pl-8 sm:pl-10"
          >
            <div className="px-3 py-1.5 rounded-lg bg-[#C91D2E] border-2 border-white/90 shadow-md flex items-center gap-2 group-hover:scale-105 transition-transform">
              <Droplets className="w-5 h-5 text-white fill-white" />
              <div className="flex flex-col text-left">
                <span className="text-sm sm:text-base font-black text-white leading-none font-heading tracking-tight">
                  KHUMANI
                </span>
                <span className="text-[9px] font-bold text-white/90 uppercase tracking-wider leading-none mt-0.5">
                  WATER SOLUTION
                </span>
              </div>
            </div>
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-heading font-bold text-white/95">
            {SITE_CONFIG.navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative py-1 whitespace-nowrap transition-colors ${
                    isActive ? 'text-[#8FD1F0] font-black underline decoration-2 underline-offset-4' : 'hover:text-[#8FD1F0]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Helpline & Actions */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0 pr-4 sm:pr-8">
            {/* Desktop WhatsApp Support Pill with OG Number */}
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello Khumani Water Solution, I would like to enquire about Water ATM installation.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#25D366]/25 border border-white/20 hover:border-[#25D366]/60 transition-all text-white group whitespace-nowrap shadow-sm shrink-0"
              title={`Chat on WhatsApp (${SITE_CONFIG.contact.phoneDisplay})`}
            >
              <div className="w-6 h-6 rounded-full bg-[#25D366] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-110 transition-transform">
                <MessageSquare className="w-3.5 h-3.5 fill-white text-white" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-[#8FD1F0] font-bold uppercase tracking-wider leading-none">
                  WhatsApp Support
                </span>
                <span className="text-xs sm:text-sm font-black font-heading text-white tracking-tight leading-none mt-1 group-hover:text-[#00F0FF]">
                  {SITE_CONFIG.contact.phoneDisplay}
                </span>
              </div>
            </a>

            {/* Mobile / Tablet Quick WhatsApp Icon Button */}
            <button
              type="button"
              onClick={handleWhatsApp}
              className="xl:hidden w-9 h-9 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center hover:scale-105 shadow-md transition-transform cursor-pointer shrink-0"
              title={`WhatsApp: ${SITE_CONFIG.contact.phoneDisplay}`}
              aria-label="WhatsApp Enquiry"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
            </button>

            {/* Orange CTA Button */}
            {onOpenQuote ? (
              <button
                onClick={onOpenQuote}
                className="btn-cta-orange px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold whitespace-nowrap cursor-pointer shadow-md shrink-0"
              >
                Enquire ATM
              </button>
            ) : (
              <Link
                href="/about#contact-form"
                className="btn-cta-orange px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-lg text-xs sm:text-sm font-heading font-bold whitespace-nowrap cursor-pointer shadow-md shrink-0 inline-block text-center"
              >
                Enquire ATM
              </Link>
            )}

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-white hover:text-[#8FD1F0] cursor-pointer shrink-0"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#003B70] border-t border-[#1687C5]/40 px-6 py-5 shadow-2xl">
          <nav className="flex flex-col gap-3 text-sm font-bold text-white">
            {SITE_CONFIG.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-1.5 ${pathname === item.href ? 'text-[#8FD1F0] font-black' : 'hover:text-[#8FD1F0]'}`}
              >
                {item.label}
              </Link>
            ))}

            <div className="pt-3 border-t border-white/20 flex flex-col gap-2.5">
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent('Hello Khumani Water Solution, I want to enquire about Water ATM installation.')}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-between gap-2 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageSquare className="w-4 h-4 fill-white" />
                  </div>
                  <div className="text-left leading-tight">
                    <span className="text-[10px] text-[#8FD1F0] block font-semibold uppercase tracking-wider">WhatsApp Support</span>
                    <span className="text-sm font-black font-heading text-white">{SITE_CONFIG.contact.phoneDisplay}</span>
                  </div>
                </div>
                <span className="text-xs text-[#00F0FF] font-bold">Chat &rarr;</span>
              </a>

              {onOpenQuote ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="btn-cta-orange py-2.5 rounded-lg text-sm text-center font-bold cursor-pointer"
                >
                  Enquire About Water ATM
                </button>
              ) : (
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-cta-orange py-2.5 rounded-lg text-sm text-center font-bold cursor-pointer block"
                >
                  Enquire About Water ATM
                </Link>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

