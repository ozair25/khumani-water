'use client';

import React from 'react';
import { Users, Shield, Sparkles, Droplets, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/site-data';
import { MissionVisual } from '@/components/visuals/MissionVisual';

export function MissionSection() {
  const getGoalIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users':
        return <Users className="w-5 h-5 text-[#0866D8]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#06B6D4]" />;
      case 'Sparkles':
      default:
        return <Sparkles className="w-5 h-5 text-[#0284C7]" />;
    }
  };

  return (
    <section id="about" className="py-18 sm:py-26 bg-white relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Business Goals Copy & Priorities */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FF] border border-[#BAE6FD] text-[#0284C7] text-xs font-black tracking-widest uppercase mb-3.5 shadow-sm">
              <Droplets className="w-3.5 h-3.5 text-[#06B6D4]" />
              <span>{SITE_CONFIG.mission.eyebrow}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[2.65rem] font-black text-[#062B63] tracking-tight leading-tight mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#0866D8] via-[#0284C7] to-[#06B6D4] bg-clip-text text-transparent">
                Business Goals
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#637995] leading-relaxed mb-8 font-normal">
              {SITE_CONFIG.mission.copy}
            </p>

            {/* 3 Priority Feature blocks matching reference layout */}
            <div className="space-y-4 sm:space-y-5 w-full">
              {SITE_CONFIG.mission.goals.map((goal) => (
                <div
                  key={goal.id}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-[#F8FBFE] border border-[#BAE6FD]/60 hover:border-[#0866D8]/50 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-13 h-13 rounded-2xl bg-gradient-to-tr from-[#E0F2FE] to-[#BAE6FD]/60 border border-[#BAE6FD] flex items-center justify-center shrink-0 shadow-sm">
                    {getGoalIcon(goal.iconName)}
                  </div>
                  <div>
                    <h3 className="text-base font-extrabold text-[#062B63] mb-1">
                      {goal.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#637995] leading-relaxed font-normal">
                      {goal.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Supporting Product Visual matching reference layout */}
          <div className="lg:col-span-6 w-full flex justify-center">
            <MissionVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
