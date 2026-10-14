import React from 'react';

export function HeroWaterAtmVisual() {
  return (
    <div className="relative w-full max-w-xl mx-auto flex items-center justify-center select-none group">
      {/* Background radial aqua & cyan glow */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-[#06B6D4]/30 via-[#29A9F5]/25 to-[#0866D8]/20 rounded-3xl blur-2xl -z-10 animate-water-pulse" />

      {/* Main visual frame with glass border */}
      <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border-2 border-[#BAE6FD]/80 shadow-2xl shadow-[#0866D8]/20 bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#D5EBFD]">
        
        {/* Sky, Mountain, Sun & Lake Backdrop (SVG Vector Landscape) */}
        <svg
          viewBox="0 0 600 450"
          className="absolute inset-0 w-full h-full object-cover"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Sky Gradient with Turquoise Tint */}
            <linearGradient id="heroSkyVibrant" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7DD3FC" />
              <stop offset="35%" stopColor="#BAE6FD" />
              <stop offset="70%" stopColor="#E0F2FE" />
              <stop offset="100%" stopColor="#F0F9FF" />
            </linearGradient>

            {/* Radiant Sun Burst */}
            <radialGradient id="heroSunGlow" cx="68%" cy="18%" r="55%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="25%" stopColor="#FEF08A" stopOpacity="0.5" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </radialGradient>

            {/* Snow Mountain Gradients */}
            <linearGradient id="mountFar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#CFE4FC" />
            </linearGradient>

            <linearGradient id="mountNear" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="50%" stopColor="#93C5FD" />
              <stop offset="100%" stopColor="#BAE6FD" />
            </linearGradient>

            {/* Pristine Turquoise Lake Base */}
            <linearGradient id="lakeTurquoise" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="30%" stopColor="#0284C7" />
              <stop offset="75%" stopColor="#0369A1" />
              <stop offset="100%" stopColor="#044394" />
            </linearGradient>

            {/* Realistic Stainless Steel Shading */}
            <linearGradient id="ssChamber" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="15%" stopColor="#E2E8F0" />
              <stop offset="40%" stopColor="#FFFFFF" />
              <stop offset="65%" stopColor="#CBD5E1" />
              <stop offset="85%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id="ssDoor" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#CBD5E1" />
              <stop offset="20%" stopColor="#FFFFFF" />
              <stop offset="45%" stopColor="#E2E8F0" />
              <stop offset="70%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>

            {/* Premium Sapphire & Cyan Fascia */}
            <linearGradient id="fasciaGlow" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="30%" stopColor="#0866D8" />
              <stop offset="75%" stopColor="#062B63" />
              <stop offset="100%" stopColor="#031F48" />
            </linearGradient>

            {/* Crystal Flowing Water Stream */}
            <linearGradient id="pureFlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="30%" stopColor="#E0F2FE" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.9" />
            </linearGradient>

            {/* LED Screen Display */}
            <linearGradient id="oledBg" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#02142B" />
              <stop offset="100%" stopColor="#010A17" />
            </linearGradient>
          </defs>

          {/* Sky with soft cloud streaks */}
          <rect width="600" height="450" fill="url(#heroSkyVibrant)" />
          <circle cx="430" cy="80" r="150" fill="url(#heroSunGlow)" />

          {/* Distant Alpine Peaks */}
          <path
            d="M0 230 L70 155 L130 205 L220 120 L300 180 L410 100 L490 175 L600 125 L600 310 L0 310 Z"
            fill="url(#mountFar)"
            opacity="0.8"
          />
          <polygon points="220,120 205,145 235,145" fill="#FFFFFF" opacity="0.95" />
          <polygon points="410,100 390,130 430,130" fill="#FFFFFF" opacity="0.95" />

          {/* Near Alpine Ridge */}
          <path
            d="M-20 270 L100 170 L170 220 L280 140 L370 210 L470 150 L620 230 L620 330 L-20 330 Z"
            fill="url(#mountNear)"
          />
          <polygon points="280,140 262,168 298,168" fill="#FFFFFF" />
          <polygon points="470,150 452,175 488,175" fill="#FFFFFF" />

          {/* Pristine Turquoise Lake with Light Sheen */}
          <path
            d="M0 300 C150 285 450 305 600 290 L600 450 L0 450 Z"
            fill="url(#lakeTurquoise)"
          />

          {/* Water Caustics & Reflection Ripples */}
          <ellipse cx="300" cy="328" rx="240" ry="7" fill="#FFFFFF" opacity="0.3" />
          <ellipse cx="270" cy="350" rx="270" ry="10" fill="#38BDF8" opacity="0.4" />
          <ellipse cx="320" cy="378" rx="250" ry="12" fill="#06B6D4" opacity="0.35" />
          <ellipse cx="290" cy="410" rx="230" ry="9" fill="#FFFFFF" opacity="0.25" />

          {/* --- 3D SHOWCASE WATER ATM KIOSK --- */}
          <g transform="translate(185, 55)">
            {/* Ground Pedestal Shadow */}
            <ellipse cx="115" cy="325" rx="115" ry="16" fill="#021E40" opacity="0.5" />

            {/* Stainless Steel Heavy Base Frame */}
            <rect x="35" y="308" width="160" height="15" rx="4" fill="#475569" />
            <rect x="40" y="304" width="150" height="7" rx="3" fill="#94A3B8" />

            {/* Main Outer Cabinet (Polished Food-Grade SS 304) */}
            <rect x="25" y="15" width="180" height="294" rx="16" fill="url(#ssDoor)" stroke="#64748B" strokeWidth="1.8" />
            
            {/* Metallic Edge Bevel Highlighting */}
            <line x1="28" y1="18" x2="28" y2="305" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
            <line x1="202" y1="18" x2="202" y2="305" stroke="#475569" strokeWidth="1.5" opacity="0.7" />

            {/* --- TOP BRANDED FASCIA --- */}
            <rect x="33" y="23" width="164" height="56" rx="10" fill="url(#fasciaGlow)" />
            {/* Cyan Accent Light Strip */}
            <line x1="33" y1="24" x2="197" y2="24" stroke="#06B6D4" strokeWidth="2.5" />
            <line x1="33" y1="78" x2="197" y2="78" stroke="#38BDF8" strokeWidth="1.5" opacity="0.7" />
            
            {/* Illuminated Brand Water Droplet Icon */}
            <circle cx="56" cy="51" r="11" fill="#06B6D4" />
            <circle cx="56" cy="51" r="14" fill="#38BDF8" opacity="0.3" />
            <path d="M56 43 C52 48 50 52 50 54 A6 6 0 0 0 62 54 C62 52 60 48 56 43 Z" fill="#FFFFFF" />

            <text x="74" y="47" fill="#FFFFFF" fontSize="10.5" fontWeight="900" fontFamily="system-ui" letterSpacing="0.08em">
              KHUMANI
            </text>
            <text x="74" y="60" fill="#38BDF8" fontSize="8" fontWeight="700" fontFamily="system-ui" letterSpacing="0.1em">
              WATER ATM
            </text>

            {/* Status Live LED Indicator */}
            <circle cx="180" cy="38" r="3.5" fill="#22C55E" />
            <circle cx="180" cy="38" r="7" fill="#22C55E" opacity="0.4" />

            {/* --- DIGITAL OLED TOUCH INTERFACE --- */}
            <rect x="40" y="88" width="150" height="48" rx="6" fill="url(#oledBg)" stroke="#0284C7" strokeWidth="1.2" />
            
            {/* Screen Telemetry Lines */}
            <text x="49" y="103" fill="#38BDF8" fontSize="7" fontWeight="700" fontFamily="monospace">
              STATUS: PURE RO ACTIVE
            </text>
            <text x="49" y="115" fill="#4ADE80" fontSize="8" fontWeight="800" fontFamily="monospace">
              TDS: 38 PPM • PH 7.8
            </text>
            <text x="49" y="126" fill="#F8FAFC" fontSize="6.8" fontWeight="600" fontFamily="monospace">
              TAP RFID / INSERT COIN
            </text>

            {/* Digital volume gauge dots */}
            <circle cx="172" cy="103" r="3" fill="#06B6D4" />
            <circle cx="172" cy="113" r="3" fill="#38BDF8" />
            <circle cx="172" cy="123" r="3" fill="#22C55E" />

            {/* --- PAYMENT CONTROLS --- */}
            {/* RFID Card Sensor */}
            <rect x="40" y="142" width="68" height="26" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
            <circle cx="52" cy="155" r="5" fill="#0866D8" opacity="0.8" />
            <path d="M50 152 A4 4 0 0 1 54 158" stroke="#FFFFFF" strokeWidth="1" fill="none" />
            <text x="61" y="154" fill="#0F172A" fontSize="6.5" fontWeight="700" fontFamily="system-ui">
              RFID CARD
            </text>
            <text x="61" y="162" fill="#0284C7" fontSize="5.5" fontWeight="600" fontFamily="system-ui">
              TOUCH HERE
            </text>

            {/* Coin Slot */}
            <rect x="122" y="142" width="68" height="26" rx="4" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
            <text x="130" y="154" fill="#0F172A" fontSize="6.5" fontWeight="700" fontFamily="system-ui">
              COIN INSERT
            </text>
            <rect x="142" y="158" width="28" height="3.5" rx="1.5" fill="#1E293B" />

            {/* --- RECESSED DISPENSING CHAMBER --- */}
            <rect x="38" y="176" width="154" height="124" rx="8" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
            {/* Inner chamber with soft blue ambient light */}
            <rect x="42" y="180" width="146" height="116" rx="6" fill="url(#ssChamber)" />
            <rect x="42" y="180" width="146" height="116" rx="6" fill="#0284C7" fillOpacity="0.08" />

            {/* Interior LED spotlight at top of niche */}
            <ellipse cx="115" cy="183" rx="45" ry="4" fill="#BAE6FD" opacity="0.9" />

            {/* Chrome Dual Dispensing Faucets */}
            <g transform="translate(115, 184)">
              {/* Tap 1: Chilled (Blue) */}
              <rect x="-28" y="0" width="10" height="16" rx="2" fill="#64748B" />
              <path d="M-23 16 L-23 25 L-27 27" stroke="#475569" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <circle cx="-23" cy="6" r="3.5" fill="#0866D8" />

              {/* Tap 2: Ambient / Normal (Cyan/Green) */}
              <rect x="18" y="0" width="10" height="16" rx="2" fill="#64748B" />
              <path d="M23 16 L23 25 L19 27" stroke="#475569" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              <circle cx="23" cy="6" r="3.5" fill="#06B6D4" />

              {/* Crystal Flowing Water Stream */}
              <path
                d="M-27 27 Q-26 62 -25 90"
                stroke="url(#pureFlow)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />

              {/* Clear Glass Bottle container on tray */}
              <path
                d="M-42 60 L-39 104 C-39 108 -10 108 -10 104 L-7 60 Z"
                fill="#FFFFFF"
                fillOpacity="0.45"
                stroke="#38BDF8"
                strokeWidth="1.5"
              />
              {/* Water filling inside bottle */}
              <path
                d="M-39 76 L-39 104 C-39 107 -10 107 -10 104 L-10 76 Z"
                fill="#06B6D4"
                fillOpacity="0.65"
              />
              <ellipse cx="-24.5" cy="76" rx="12" ry="2.5" fill="#FFFFFF" opacity="0.8" />

              {/* Water Splash Droplets around bottle */}
              <circle cx="-25" cy="58" r="2.5" fill="#BAE6FD" opacity="0.9" />
              <circle cx="-16" cy="65" r="2" fill="#FFFFFF" opacity="0.8" />
              <circle cx="-34" cy="70" r="1.8" fill="#38BDF8" opacity="0.8" />
            </g>

            {/* Heavy-duty Stainless Drip Grille */}
            <rect x="50" y="284" width="130" height="12" rx="3" fill="#1E293B" />
            <line x1="56" y1="290" x2="174" y2="290" stroke="#94A3B8" strokeWidth="1.5" strokeDasharray="4 3" />
          </g>

          {/* Floating Foreground Water Splashes & Bubbles */}
          <circle cx="150" cy="385" r="6" fill="#E0F2FE" opacity="0.95" />
          <circle cx="130" cy="360" r="3.5" fill="#BAE6FD" opacity="0.85" />
          <circle cx="440" cy="375" r="7" fill="#E0F2FE" opacity="0.95" />
          <circle cx="465" cy="350" r="4.5" fill="#38BDF8" opacity="0.85" />
          <circle cx="420" cy="335" r="3" fill="#FFFFFF" opacity="0.9" />

          {/* Fresh Green Foliage Accents at Bottom Edges */}
          <path
            d="M575 415 C540 370 505 375 485 405 C515 422 550 425 575 415 Z"
            fill="#15803D"
            opacity="0.9"
          />
          <path
            d="M590 385 C555 350 520 360 510 390 C545 398 575 398 590 385 Z"
            fill="#22C55E"
            opacity="0.95"
          />
          <path
            d="M25 425 C60 380 95 385 115 415 C80 432 45 435 25 425 Z"
            fill="#15803D"
            opacity="0.9"
          />
          <path
            d="M10 395 C45 360 80 370 90 400 C55 408 25 408 10 395 Z"
            fill="#22C55E"
            opacity="0.95"
          />
        </svg>

        {/* --- FLOATING HIGH-TECH GLASS BADGES --- */}
        {/* Top Left: Kiosk Certification */}
        <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-slate-900/85 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-2xl border border-[#00F0FF]/40 flex items-center gap-2.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] shadow-[0_0_10px_#00F0FF] animate-pulse" />
          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-heading font-black text-white tracking-tight leading-none">
              Smart Water ATM
            </span>
            <span className="text-[10px] text-[#00F0FF] font-sans font-semibold leading-tight mt-1">
              Coin & RFID Card Enabled
            </span>
          </div>
        </div>

        {/* Bottom Right: High-capacity Badge */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-slate-900/85 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-2xl border border-[#00F0FF]/40 flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-[#0284C7] to-[#00F0FF] flex items-center justify-center text-white text-xs font-heading font-black shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            RO
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm sm:text-base font-heading font-black text-[#00F0FF] leading-none">
              250 – 1000 LPH
            </span>
            <span className="text-[10px] sm:text-[11px] text-[#BAE6FD] font-sans font-medium leading-tight mt-1">
              High Output Dispenser
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
