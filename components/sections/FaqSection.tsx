'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I have a question regarding water purification.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gradient-to-b from-[#075A99] to-[#003B70] text-white relative">
      <div className="max-w-[880px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-white tracking-tight drop-shadow-md mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans">
            Essential information regarding system capacities, installation, water quality, and maintenance
          </p>
        </div>

        <div className="space-y-3.5 mb-10">
          {SITE_CONFIG.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#004B86] border-[#00F0FF] shadow-xl'
                    : 'bg-[#003B70]/80 border-[#8FD1F0]/30 hover:border-[#8FD1F0]/60'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full px-5 sm:px-6 py-4 flex items-center justify-between gap-4 text-left font-heading font-bold text-sm sm:text-base text-white hover:text-[#00F0FF] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-md bg-[#0870B2] text-[#8FD1F0] flex items-center justify-center text-xs font-black shrink-0">
                      {index + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8FD1F0] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#FFE082]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-[#D3E7F6] font-sans leading-relaxed border-t border-[#8FD1F0]/20 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Help Strip with WhatsApp CTA */}
        <div className="bg-[#004B86]/80 rounded-2xl border border-[#8FD1F0]/40 p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div>
            <h4 className="text-sm font-heading font-bold text-white">
              Need personalized guidance or custom volume estimation?
            </h4>
            <p className="text-xs text-[#BAE6FD] font-sans">
              Our water treatment engineers will help select the ideal configuration for your premises.
            </p>
          </div>
          <button
            onClick={handleWhatsApp}
            className="btn-cta-orange px-5 py-2.5 rounded-xl text-xs font-heading font-extrabold flex items-center gap-2 whitespace-nowrap cursor-pointer"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Chat on WhatsApp</span>
          </button>
        </div>

      </div>
    </section>
  );
}
