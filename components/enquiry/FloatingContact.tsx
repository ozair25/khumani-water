'use client';

import React from 'react';
import { MessageSquare, FileText } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

interface FloatingContactProps {
  onOpenQuote: () => void;
}

export function FloatingContact({ onOpenQuote }: FloatingContactProps) {
  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I would like to inquire about your Water ATMs and purification systems.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      {/* Quick Quote Floating Pill */}
      <button
        onClick={onOpenQuote}
        className="hidden md:flex items-center gap-2 px-5 py-3 rounded-xl btn-cta-orange text-xs font-heading font-extrabold shadow-xl transition-all hover:scale-105 active:scale-95 group"
      >
        <FileText className="w-4 h-4 text-white" />
        <span>Quick Quote</span>
      </button>

      {/* Floating WhatsApp Action Button with Radiant Pulse Ring */}
      <div className="relative group">
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 blur-sm animate-ping pointer-events-none" />
        <button
          onClick={handleWhatsApp}
          className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] hover:brightness-110 text-white shadow-2xl shadow-[#25D366]/30 flex items-center justify-center transition-all hover:scale-110 active:scale-95 focus-visible:outline-2 focus-visible:outline-white"
          aria-label="Chat on WhatsApp"
          title="Chat with Khumani Water Solution on WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-white" />
        </button>

        {/* Hover Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-[#021B3D] text-white text-xs font-bold px-3.5 py-1.5 rounded-xl whitespace-nowrap shadow-xl border border-[#38BDF8]/40 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200">
          Chat on WhatsApp
        </span>
      </div>
    </div>
  );
}
