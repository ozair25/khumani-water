'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Droplets, ArrowRight, Instagram, Phone, Mail, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim() && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="contact" className="bg-[#00264A] text-white pt-14 sm:pt-18 pb-10 border-t-2 border-[#1687C5] relative">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row matching the screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-10 border-b border-[#1687C5]/30">
          
          {/* Left: Red Brand Badge */}
          <div className="md:col-span-4 flex flex-col items-start">
            <a href="#home" className="flex items-center gap-2.5 mb-4 group">
              <div className="px-3.5 py-2 rounded-lg bg-[#C91D2E] border-2 border-white/90 shadow-lg flex items-center gap-2">
                <Droplets className="w-5 h-5 text-white fill-white" />
                <div className="flex flex-col text-left">
                  <span className="text-base font-black text-white leading-none font-heading tracking-tight">
                    KHUMANI
                  </span>
                  <span className="text-[10px] font-bold text-white/90 uppercase tracking-wider leading-none mt-0.5">
                    WATER SOLUTION
                  </span>
                </div>
              </div>
            </a>

            <p className="text-xs text-[#BAE6FD] font-sans leading-relaxed mb-4 max-w-sm">
              Khumani Water Solution delivers comprehensive water purification, automated Water ATM dispensing, chilled water systems, and reliable maintenance across domestic, commercial, and community spaces.
            </p>

            <div className="flex items-center gap-2">
              <a
                href={SITE_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#004B86] hover:bg-[#C91D2E] text-white flex items-center justify-center transition-colors border border-[#8FD1F0]/40"
                title="Instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-[#004B86] hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border border-[#8FD1F0]/40"
                title="WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Center: Navigation Links in Clean White Modern Font */}
          <div className="md:col-span-5 text-center md:text-left">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm font-heading font-bold text-white mb-4">
              {SITE_CONFIG.navigation.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-[#00F0FF] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Newsletter input */}
            <form onSubmit={handleSubscribe} className="flex items-center max-w-xs mx-auto md:mx-0">
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder="Enter your email for updates"
                className="w-full px-3 py-2 rounded-l-xl bg-[#002B54] border border-[#8FD1F0]/40 text-xs text-white placeholder-[#8FD1F0]/50 focus:outline-none focus:border-[#00F0FF]"
              />
              <button
                type="submit"
                className="btn-cta-orange px-4 py-2 rounded-r-xl text-xs font-heading font-bold whitespace-nowrap cursor-pointer"
              >
                Join
              </button>
            </form>
            {newsletterSubscribed && (
              <span className="text-[11px] text-[#00F0FF] mt-1 block">Thank you for subscribing!</span>
            )}
          </div>

          {/* Right: Order Plaque Action ("Order Water Solutions" card) */}
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <a
              href="#home"
              className="bg-gradient-to-b from-[#FFFFFF] to-[#EAF7FF] rounded-2xl p-3 border-2 border-[#8FD1F0] text-center shadow-xl hover:scale-105 transition-transform flex flex-col items-center group w-28"
            >
              <div className="w-10 h-10 rounded-xl bg-[#004B86] flex items-center justify-center text-white mb-1 shadow-md">
                <Droplets className="w-6 h-6 text-[#00F0FF] fill-[#00F0FF]" />
              </div>
              <span className="text-xs font-heading font-black text-[#C91D2E] uppercase group-hover:text-[#004B86]">
                Order
              </span>
              <span className="text-[10px] text-[#004B86] font-bold">
                Get Quotation
              </span>
            </a>
          </div>

        </div>

        {/* Bottom Regional Contact Strip */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-xs font-sans text-[#BAE6FD]">
          <div className="border-r border-[#1687C5]/30 pr-2">
            <span className="font-bold text-white block font-heading">WhatsApp & Helpline:</span>
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F0FF] hover:underline hover:text-white transition-colors"
            >
              {SITE_CONFIG.contact.phoneDisplay}
            </a>
          </div>
          <div className="border-r border-[#1687C5]/30 pr-2">
            <span className="font-bold text-white block font-heading">Sales Department:</span>
            <span className="text-[#BAE6FD]">Mon-Sat 9:00 - 19:00</span>
          </div>
          <div className="border-r border-[#1687C5]/30 pr-2">
            <span className="font-bold text-white block font-heading">Service & AMC:</span>
            <span className="text-[#BAE6FD]">On-Site Technical Team</span>
          </div>
          <div>
            <span className="font-bold text-white block">Email Address:</span>
            <span className="text-[#8FD1F0]">{SITE_CONFIG.contact.emailDisplay}</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-[11px] text-[#8FD1F0]/70 font-sans">
          © {new Date().getFullYear()} Khumani Water Solution. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
