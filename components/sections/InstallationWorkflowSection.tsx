'use client';

import React from 'react';
import Image from 'next/image';
import { 
  ClipboardCheck, 
  MapPin, 
  Settings, 
  Wrench, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare,
  Zap,
  Droplet,
  ZoomIn
} from 'lucide-react';
import { SITE_CONFIG, KHUMANI_REAL_IMAGES } from '@/lib/site-data';
import { LightboxImageData } from '@/components/visuals/ImageLightboxModal';

interface InstallationWorkflowSectionProps {
  onRequestInstallation: () => void;
  onOpenLightbox?: (img: LightboxImageData) => void;
}

export function InstallationWorkflowSection({ onRequestInstallation, onOpenLightbox }: InstallationWorkflowSectionProps) {
  const schoolPlazaImg = KHUMANI_REAL_IMAGES.schoolPlaza;
  const stepIcons = [ClipboardCheck, MapPin, Settings, Wrench, ShieldCheck];

  const handleWhatsApp = () => {
    const textMsg = encodeURIComponent(
      'Hello Khumani Water Solution, I would like to request an on-site installation assessment for a Water ATM / Commercial RO plant.'
    );
    window.open(`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${textMsg}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="installation" className="py-16 sm:py-24 bg-gradient-to-b from-[#F0F7FD] via-[#E6F3FB] to-[#DCEEFA] text-[#002D5A] relative">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E1F1FD] border border-[#B5DCF7] text-[#006FB8] text-xs font-heading font-bold uppercase tracking-wider mb-3">
            <Wrench className="w-3.5 h-3.5 text-[#006FB8]" />
            <span>STEP-BY-STEP INSTALLATION PROCESS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-heading font-black text-[#002348] tracking-tight mb-3">
            {SITE_CONFIG.installationWorkflow.heading}
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-[#00528A] font-sans leading-relaxed">
            {SITE_CONFIG.installationWorkflow.subheading}
          </p>
        </div>

        {/* 5-Step Process Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-14">
          {SITE_CONFIG.installationWorkflow.steps.map((item, idx) => {
            const IconComp = stepIcons[idx % stepIcons.length];

            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-[#BDE0F7] shadow-sm hover:border-[#006FB8] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full bg-[#006FB8] text-white flex items-center justify-center text-xs font-heading font-black shadow-sm">
                      0{item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EDF6FD] text-[#006FB8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#006FB8] block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-sm sm:text-base font-heading font-bold text-[#002348] mb-2 group-hover:text-[#006FB8] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#2D5377] font-sans leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EDF6FD] space-y-1">
                  {item.deliverables.map((del, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[#004C83] font-medium">
                      <CheckCircle2 className="w-3 h-3 text-[#059669] shrink-0" />
                      <span className="truncate">{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Installation Requirements Banner with Real Image Showcase */}
        <div className="bg-gradient-to-r from-[#003B70] via-[#004B86] to-[#075A99] rounded-3xl p-6 sm:p-10 text-white shadow-2xl border-2 border-[#38BDF8]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Requirements Summary */}
            <div className="lg:col-span-7">
              <span className="text-[11px] font-black uppercase tracking-wider text-[#38BDF8] block mb-2">
                SITE READINESS CHECKLIST
              </span>
              <h3 className="text-xl sm:text-3xl font-heading font-black text-white mb-3">
                Simple Site Requirements for Setup
              </h3>
              <p className="text-xs sm:text-sm text-[#BAE6FD] font-sans leading-relaxed mb-6">
                Our Water ATM units are engineered for hassle-free integration. Before scheduling an on-site installation, we verify these basic parameters:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mb-6">
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Space Requirement</strong>
                    <span className="text-[#BAE6FD]">15 – 25 sq. ft. covered area</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-start gap-2.5">
                  <Droplet className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Raw Water Inlet</strong>
                    <span className="text-[#BAE6FD]">Continuous piped or borewell</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-start gap-2.5">
                  <Zap className="w-4 h-4 text-[#FDE047] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Electric Power</strong>
                    <span className="text-[#BAE6FD]">220V AC (Inverter compatible)</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/15 flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-heading">Wastewater Drainage</strong>
                    <span className="text-[#BAE6FD]">Basic drain pipe line</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={onRequestInstallation}
                  className="btn-cta-orange py-3.5 px-6 rounded-xl text-sm font-heading font-extrabold flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Request Installation</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>

                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="py-3 px-5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-heading font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-colors"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>WhatsApp Details</span>
                </button>
              </div>
            </div>

            {/* Right Column: Real School Plaza Installation Photo */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border-2 border-[#38BDF8] aspect-[4/3] bg-black shadow-xl group cursor-pointer"
                 onClick={() => onOpenLightbox && onOpenLightbox(schoolPlazaImg)}>
              <Image
                src={schoolPlazaImg.url}
                alt={schoolPlazaImg.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                quality={90}
                referrerPolicy="no-referrer"
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#006FB8] text-white text-[10px] font-heading font-bold uppercase">
                {schoolPlazaImg.tag}
              </div>
              {onOpenLightbox && (
                <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 text-white group-hover:bg-black transition-all">
                  <ZoomIn className="w-4 h-4" />
                </div>
              )}
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <h4 className="text-sm font-heading font-bold">{schoolPlazaImg.title}</h4>
                <p className="text-[11px] text-[#BAE6FD] line-clamp-1">{schoolPlazaImg.caption}</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
