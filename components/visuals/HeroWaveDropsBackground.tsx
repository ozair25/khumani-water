import React from 'react';

/**
 * HeroWaveDropsBackground
 * Renders a vibrant, multi-layered fluid wave background inspired by the reference imagery:
 * - Reference 1: Crystal-clear turquoise water with sunlit caustic web refractions and concentric ripples.
 * - Reference 2: Rolling deep sapphire to cyan ocean waves, curling splash crests, and realistic 3D floating water droplets.
 */
export function HeroWaveDropsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 select-none">
      {/* 1. Base Oceanic Gradient (Deep Sapphire to Luminous Aqua/Cyan) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#011633] via-[#023366] to-[#024B8C]" />

      {/* 2. Ambient Sunlight & Underwater Caustic Glow Radiance */}
      <div className="absolute top-0 right-1/4 w-[700px] h-[450px] bg-gradient-to-b from-[#38BDF8]/25 via-[#06B6D4]/15 to-transparent rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute -top-32 left-10 w-[600px] h-[500px] bg-[#0284C7]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-[#00B4D8]/20 rounded-full blur-2xl" />

      {/* 3. Vector Master Illustration: Caustic Mesh, Waves, Ripples & 3D Drops */}
      <svg
        viewBox="0 0 1600 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full object-cover"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Deep Sapphire Oceanic Gradient */}
          <linearGradient id="refWaveDeepOcean" x1="0" y1="0" x2="1600" y2="700" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#011B3D" stopOpacity="0.9" />
            <stop offset="40%" stopColor="#023A6E" stopOpacity="0.8" />
            <stop offset="85%" stopColor="#045696" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#01244C" stopOpacity="0.9" />
          </linearGradient>

          {/* Luminous Turquoise Wave Ribbon Gradient (Reference 1 & 2) */}
          <linearGradient id="refWaveTurquoise" x1="0" y1="200" x2="1600" y2="800" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.7" />
            <stop offset="30%" stopColor="#0284C7" stopOpacity="0.8" />
            <stop offset="65%" stopColor="#38BDF8" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#004B86" stopOpacity="0.85" />
          </linearGradient>

          {/* Translucent Ice-Glass Wave with White Shimmer */}
          <linearGradient id="refWaveIceGlass" x1="100" y1="100" x2="1500" y2="900" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.3" />
            <stop offset="35%" stopColor="#BAE6FD" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#38BDF8" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.4" />
          </linearGradient>

          {/* Sunlit Caustic Light Web Gradient */}
          <linearGradient id="causticGlowGradient" x1="0" y1="0" x2="1000" y2="600" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.45" />
            <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.05" />
          </linearGradient>

          {/* 3D Glass Droplet Shading (Large Pearl) */}
          <radialGradient id="glassSphereLg" cx="30%" cy="26%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="20%" stopColor="#E0F2FE" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="96%" stopColor="#012F5A" stopOpacity="0.95" />
          </radialGradient>

          {/* 3D Cyan Droplet Sphere */}
          <radialGradient id="glassSphereCyan" cx="32%" cy="28%" r="68%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="22%" stopColor="#A5F3FC" stopOpacity="0.9" />
            <stop offset="58%" stopColor="#06B6D4" stopOpacity="0.82" />
            <stop offset="90%" stopColor="#03517E" stopOpacity="0.92" />
          </radialGradient>

          {/* Internal Caustic Reflection (Bottom crescent) */}
          <radialGradient id="internalCausticGlow" cx="65%" cy="75%" r="42%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="45%" stopColor="#7DD3FC" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0" />
          </radialGradient>

          {/* Droplet Drop Shadow Filter */}
          <filter id="waterDropShadow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow dx="4" dy="10" stdDeviation="7" floodColor="#001833" floodOpacity="0.65" />
          </filter>

          <filter id="causticBlur" x="-10%" y="-10%" width="120%" height="120%">
            <feGaussianBlur stdDeviation="2.5" />
          </filter>
        </defs>

        {/* =========================================================================
            SECTION A: SUNLIT UNDERWATER CAUSTIC NETWORK (MATCHING REFERENCE 1)
            Intricate, interconnected polygonal light web mimicking sunlight through water
        ========================================================================= */}
        <g opacity="0.48" filter="url(#causticBlur)" stroke="url(#causticGlowGradient)" strokeWidth="1.8" fill="none">
          {/* Caustic Network Cell Cluster 1 - Top Left */}
          <path d="M 60 40 Q 120 70 170 50 T 260 90 T 340 60 T 420 110 T 510 70" />
          <path d="M 120 70 Q 150 140 210 160 T 300 140 T 390 190 T 480 150" />
          <path d="M 60 40 Q 90 110 150 140 T 210 220 T 320 230 T 440 250" />
          <path d="M 170 50 Q 230 110 300 140" />
          <path d="M 260 90 Q 320 160 390 190" />
          <path d="M 340 60 Q 410 130 480 150" />
          <path d="M 210 160 Q 250 200 320 230" />
          <path d="M 300 140 Q 360 210 440 250" />

          {/* Caustic Network Cell Cluster 2 - Center & Right Basin */}
          <path d="M 620 60 Q 710 110 790 70 T 920 120 T 1040 80 T 1180 130 T 1310 90 T 1450 140" />
          <path d="M 670 120 Q 750 180 840 150 T 980 190 T 1110 160 T 1250 210 T 1390 170 T 1530 220" />
          <path d="M 710 110 Q 750 180 840 150" />
          <path d="M 790 70 Q 860 140 920 120" />
          <path d="M 920 120 Q 950 190 980 190" />
          <path d="M 1040 80 Q 1080 160 1110 160" />
          <path d="M 1180 130 Q 1210 210 1250 210" />
          <path d="M 1310 90 Q 1350 170 1390 170" />
          <path d="M 1450 140 Q 1490 220 1530 220" />

          {/* Lower Caustic Refraction Lines */}
          <path d="M 150 280 Q 280 320 420 290 T 700 340 T 990 310 T 1280 350 T 1560 310" />
          <path d="M 240 370 Q 380 410 520 380 T 800 430 T 1090 390 T 1380 430" />
          <path d="M 280 320 Q 350 390 420 290" />
          <path d="M 420 290 Q 480 380 520 380" />
          <path d="M 700 340 Q 760 420 800 430" />
          <path d="M 990 310 Q 1050 390 1090 390" />
          <path d="M 1280 350 Q 1340 430 1380 430" />
        </g>

        {/* Luminous Caustic Web Nodes (Sunlight focal points) */}
        <g fill="#FFFFFF" opacity="0.6">
          <circle cx="210" cy="160" r="2.5" />
          <circle cx="300" cy="140" r="3" />
          <circle cx="390" cy="190" r="2" />
          <circle cx="750" cy="180" r="3" />
          <circle cx="840" cy="150" r="2.5" />
          <circle cx="980" cy="190" r="3" />
          <circle cx="1110" cy="160" r="2" />
          <circle cx="1250" cy="210" r="3" />
          <circle cx="1390" cy="170" r="2.5" />
        </g>

        {/* =========================================================================
            SECTION B: FLOWING OCEAN WAVE SWELLS (MATCHING REFERENCE 2)
            Graceful rolling waves with smooth contours and luminous crest lines
        ========================================================================= */}
        {/* Layer 1: Deep Ocean Background Wave */}
        <path
          d="M -50 140 C 320 260, 680 60, 1080 180 C 1320 250, 1490 200, 1680 150 L 1680 950 L -50 950 Z"
          fill="url(#refWaveDeepOcean)"
        />

        {/* Layer 2: Vibrant Turquoise Rolling Swell */}
        <path
          d="M -50 310 C 260 460, 640 190, 1020 360 C 1300 490, 1500 290, 1680 240 L 1680 950 L -50 950 Z"
          fill="url(#refWaveTurquoise)"
        />

        {/* Luminous Cyan Crest Line on Wave 2 */}
        <path
          d="M -50 310 C 260 460, 640 190, 1020 360 C 1300 490, 1500 290, 1680 240"
          stroke="#7DD3FC"
          strokeWidth="3"
          strokeOpacity="0.75"
          fill="none"
        />

        {/* Layer 3: Glassy Translucent Wave Forefront */}
        <path
          d="M -50 490 C 290 350, 620 590, 1060 420 C 1340 310, 1530 460, 1680 430 L 1680 950 L -50 950 Z"
          fill="url(#refWaveIceGlass)"
        />

        {/* Crisp White Specular Wave Crest Highlight */}
        <path
          d="M -50 490 C 290 350, 620 590, 1060 420 C 1340 310, 1530 460, 1680 430"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeOpacity="0.85"
          fill="none"
        />

        {/* Secondary Foam Glimmer Line */}
        <path
          d="M 80 505 C 380 390, 720 570, 1150 440 C 1380 370, 1550 440, 1640 420"
          stroke="#BAE6FD"
          strokeWidth="1.8"
          strokeDasharray="8 5"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* =========================================================================
            SECTION C: CONCENTRIC WATER RIPPLE RINGS (MATCHING REFERENCE 1 & 2)
            Expanding elliptical water ripples simulating surface drop impacts
        ========================================================================= */}
        {/* Ripple Set 1 - Upper Left */}
        <g opacity="0.5" transform="translate(190, 190)">
          <ellipse cx="0" cy="0" rx="95" ry="34" stroke="#7DD3FC" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="0" rx="65" ry="23" stroke="#BAE6FD" strokeWidth="2" fill="none" />
          <ellipse cx="0" cy="0" rx="32" ry="12" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
          <circle cx="0" cy="0" r="4.5" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Ripple Set 2 - Center Basin */}
        <g opacity="0.4" transform="translate(780, 240)">
          <ellipse cx="0" cy="0" rx="120" ry="40" stroke="#38BDF8" strokeWidth="1.4" fill="none" />
          <ellipse cx="0" cy="0" rx="80" ry="27" stroke="#BAE6FD" strokeWidth="1.8" fill="none" />
          <ellipse cx="0" cy="0" rx="42" ry="14" stroke="#FFFFFF" strokeWidth="2.2" fill="none" />
        </g>

        {/* Ripple Set 3 - Lower Right */}
        <g opacity="0.45" transform="translate(1410, 320)">
          <ellipse cx="0" cy="0" rx="90" ry="30" stroke="#7DD3FC" strokeWidth="1.5" fill="none" />
          <ellipse cx="0" cy="0" rx="55" ry="19" stroke="#E0F2FE" strokeWidth="2" fill="none" />
          <ellipse cx="0" cy="0" rx="25" ry="9" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        </g>

        {/* =========================================================================
            SECTION D: REALISTIC 3D WATER DROPS (MATCHING REFERENCE 2)
            Glass-like water spheres with specular refractions and drop shadows
        ========================================================================= */}
        {/* DROP 1: Large Crystal Water Sphere (Upper Left) */}
        <g filter="url(#waterDropShadow)" className="animate-float-slow" transform="translate(140, 120)">
          <circle cx="0" cy="0" r="30" fill="url(#glassSphereLg)" />
          <circle cx="0" cy="0" r="30" fill="url(#internalCausticGlow)" />
          {/* Top-left specular curved reflection */}
          <ellipse cx="-9" cy="-10" rx="10" ry="5.5" transform="rotate(-30, -9, -10)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-5" cy="-16" r="3" fill="#FFFFFF" opacity="0.98" />
          {/* Bottom ambient refraction rim */}
          <ellipse cx="11" cy="13" rx="7.5" ry="3" transform="rotate(-20, 11, 13)" fill="#BAE6FD" opacity="0.8" />
        </g>

        {/* DROP 2: Pure Cyan Water Droplet (Upper Mid-Left) */}
        <g filter="url(#waterDropShadow)" className="animate-float-medium" transform="translate(310, 85)">
          <circle cx="0" cy="0" r="21" fill="url(#glassSphereCyan)" />
          <circle cx="0" cy="0" r="21" fill="url(#internalCausticGlow)" />
          <ellipse cx="-7" cy="-7" rx="7" ry="3.8" transform="rotate(-35, -7, -7)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-3" cy="-11" r="2" fill="#FFFFFF" opacity="0.98" />
          <ellipse cx="6" cy="9" rx="5.5" ry="2.2" fill="#E0F2FE" opacity="0.85" />
        </g>

        {/* DROP 3: Splashing Teardrop Water Drop (Right Upper Swell) */}
        <g filter="url(#waterDropShadow)" className="animate-float-gentle" transform="translate(1380, 140)">
          <path
            d="M 0 -26 C 11 -11, 20 2, 20 15 C 20 26, 11 36, 0 36 C -11 36, -20 26, -20 15 C -20 2, -11 -11, 0 -26 Z"
            fill="url(#glassSphereLg)"
          />
          {/* Specular curved spine */}
          <path
            d="M -4 -16 C -9 -4, -13 5, -13 16"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <circle cx="-5" cy="-10" r="2.8" fill="#FFFFFF" opacity="0.98" />
          <ellipse cx="5" cy="20" rx="8" ry="4.5" fill="#7DD3FC" opacity="0.85" />
        </g>

        {/* DROP 4: Glass Droplet (Mid Right) */}
        <g filter="url(#waterDropShadow)" className="animate-float-slow" transform="translate(1500, 240)">
          <circle cx="0" cy="0" r="25" fill="url(#glassSphereCyan)" />
          <ellipse cx="-8" cy="-8" rx="8.5" ry="4.5" transform="rotate(-25, -8, -8)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-3.5" cy="-13" r="2.6" fill="#FFFFFF" opacity="0.98" />
          <ellipse cx="8" cy="10" rx="7" ry="2.8" fill="#BAE6FD" opacity="0.85" />
        </g>

        {/* DROP 5: Teardrop Near Bottom Left */}
        <g filter="url(#waterDropShadow)" className="animate-float-medium" transform="translate(85, 290)">
          <circle cx="0" cy="0" r="16" fill="url(#glassSphereLg)" />
          <ellipse cx="-5" cy="-5" rx="5" ry="2.6" transform="rotate(-30, -5, -5)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-2.5" cy="-8.5" r="1.8" fill="#FFFFFF" opacity="0.98" />
        </g>

        {/* Floating Dew Droplets */}
        <g className="animate-float-gentle" transform="translate(220, 230)">
          <circle cx="0" cy="0" r="11" fill="url(#glassSphereCyan)" />
          <ellipse cx="-3" cy="-3" rx="3.5" ry="1.8" fill="#FFFFFF" opacity="0.95" />
        </g>
        <g className="animate-float-slow" transform="translate(1250, 270)">
          <circle cx="0" cy="0" r="13" fill="url(#glassSphereLg)" />
          <ellipse cx="-4" cy="-4" rx="4" ry="2" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Micro Splash Droplets & Air Bubbles */}
        <circle cx="470" cy="95" r="5.5" fill="#BAE6FD" opacity="0.85" />
        <circle cx="468" cy="93" r="1.8" fill="#FFFFFF" opacity="0.95" />
        <circle cx="670" cy="145" r="6.5" fill="#7DD3FC" opacity="0.8" />
        <circle cx="668" cy="143" r="2.2" fill="#FFFFFF" opacity="0.98" />
        <circle cx="1110" cy="110" r="7.5" fill="#BAE6FD" opacity="0.85" />
        <circle cx="1108" cy="107" r="2.8" fill="#FFFFFF" opacity="0.98" />
        <circle cx="1200" cy="200" r="4.8" fill="#E0F2FE" opacity="0.8" />
        <circle cx="1530" cy="170" r="6.5" fill="#BAE6FD" opacity="0.85" />

        {/* Diamond Sparkle Glints along Wave Peaks */}
        <g className="animate-shimmer-glint" transform="translate(670, 190)">
          <path d="M0 -9 L2 -2 L9 0 L2 2 L0 9 L-2 2 L-9 0 L-2 -2 Z" fill="#FFFFFF" opacity="0.95" />
          <circle cx="0" cy="0" r="2.5" fill="#E0F2FE" />
        </g>
        <g className="animate-shimmer-glint" transform="translate(1030, 360)">
          <path d="M0 -11 L2.5 -2.5 L11 0 L2.5 2.5 L0 11 L-2.5 2.5 L-11 0 L-2.5 -2.5 Z" fill="#FFFFFF" opacity="0.98" />
          <circle cx="0" cy="0" r="3" fill="#BAE6FD" />
        </g>
        <g className="animate-shimmer-glint" transform="translate(350, 450)">
          <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#FFFFFF" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
