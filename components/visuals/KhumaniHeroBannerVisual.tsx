import React from 'react';

/**
 * KhumaniHeroBannerVisual
 * High-fidelity vector recreation of the supplied Khumani Water Solution Hero Banner:
 * - Bright rippling water surface across the top with white foam crests and light caustics
 * - Deep underwater blue atmospheric gradient (#002348 -> #003665 -> #004C83 -> #006FB8)
 * - Ethereal diagonal sunbeams filtering down through the water
 * - Crystal clear 3D water bubbles with internal caustics and specular highlights
 * - Dynamic water splashes erupting toward the right
 * - Fresh green botanical leaves (#4DAD35) in lower-right and upper-right clusters
 * - Subtle left-to-right navy vignette overlay for optimal text readability
 */
export function KhumaniHeroBannerVisual() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none -z-10 bg-[#002348]">
      {/* 1. Master Vector Canvas representing the exact banner artwork */}
      <svg
        viewBox="0 0 1600 620"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover object-center"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Deep Aquatic Gradient Base */}
          <linearGradient id="khumaniOceanBase" x1="0" y1="0" x2="1600" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#001F3F" />
            <stop offset="25%" stopColor="#003665" />
            <stop offset="60%" stopColor="#004C83" />
            <stop offset="85%" stopColor="#0064A6" />
            <stop offset="100%" stopColor="#007CC0" />
          </linearGradient>

          {/* Top Water Surface Gradient (Bright daylight & azure surface) */}
          <linearGradient id="khumaniSurfaceSky" x1="0" y1="0" x2="1600" y2="120" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="35%" stopColor="#38BDF8" />
            <stop offset="70%" stopColor="#7DD3FC" />
            <stop offset="90%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>

          {/* Waterline Crest Luminous Gradient */}
          <linearGradient id="waterlineCrestGlow" x1="0" y1="50" x2="1600" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#E0F2FE" stopOpacity="0.9" />
            <stop offset="65%" stopColor="#7DD3FC" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#19C8F4" stopOpacity="0.95" />
          </linearGradient>

          {/* Sunbeam Light Rays */}
          <linearGradient id="sunbeamGrad1" x1="1250" y1="40" x2="850" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.32" />
            <stop offset="35%" stopColor="#A9E7FF" stopOpacity="0.18" />
            <stop offset="75%" stopColor="#19C8F4" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#004C83" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="sunbeamGrad2" x1="1350" y1="30" x2="1050" y2="620" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.28" />
            <stop offset="40%" stopColor="#7DD3FC" stopOpacity="0.14" />
            <stop offset="85%" stopColor="#079BE8" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#004C83" stopOpacity="0" />
          </linearGradient>

          {/* 3D Glass Bubble Gradients */}
          <radialGradient id="bubbleShadingLg" cx="30%" cy="28%" r="68%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.98" />
            <stop offset="25%" stopColor="#E0F2FE" stopOpacity="0.75" />
            <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.35" />
            <stop offset="82%" stopColor="#079BE8" stopOpacity="0.65" />
            <stop offset="98%" stopColor="#002D58" stopOpacity="0.9" />
          </radialGradient>

          <radialGradient id="bubbleCausticRim" cx="68%" cy="75%" r="40%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#19C8F4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#004C83" stopOpacity="0" />
          </radialGradient>

          {/* Botanical Green Leaf Gradients (#4DAD35 base) */}
          <linearGradient id="leafGreenGrad1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#75D65A" />
            <stop offset="35%" stopColor="#55BA3C" />
            <stop offset="70%" stopColor="#4DAD35" />
            <stop offset="100%" stopColor="#2E7E1D" />
          </linearGradient>

          <linearGradient id="leafGreenGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#67CE4C" />
            <stop offset="40%" stopColor="#4DAD35" />
            <stop offset="75%" stopColor="#3B9326" />
            <stop offset="100%" stopColor="#246415" />
          </linearGradient>

          {/* Water Splash Fluid Gradient */}
          <linearGradient id="splashFluidGrad" x1="1000" y1="350" x2="1500" y2="580" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="20%" stopColor="#E0F2FE" stopOpacity="0.85" />
            <stop offset="55%" stopColor="#7DD3FC" stopOpacity="0.75" />
            <stop offset="85%" stopColor="#19C8F4" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#006FB8" stopOpacity="0.5" />
          </linearGradient>

          {/* Left Text Contrast Gradient Overlay */}
          <linearGradient id="leftTextProtection" x1="0" y1="300" x2="1000" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#001833" stopOpacity="0.85" />
            <stop offset="35%" stopColor="#00284D" stopOpacity="0.7" />
            <stop offset="65%" stopColor="#003665" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#004C83" stopOpacity="0" />
          </linearGradient>

          {/* Bubble Shadow */}
          <filter id="bubbleShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="2" dy="5" stdDeviation="4" floodColor="#00142B" floodOpacity="0.5" />
          </filter>
        </defs>

        {/* --- LAYER 1: DEEP AQUATIC BASE BACKGROUND --- */}
        <rect width="1600" height="620" fill="url(#khumaniOceanBase)" />

        {/* Ambient Cyan/Aqua Glow on Right Water Volume */}
        <ellipse cx="1280" cy="380" rx="420" ry="260" fill="#079BE8" opacity="0.35" />
        <ellipse cx="1400" cy="220" rx="350" ry="180" fill="#19C8F4" opacity="0.25" />

        {/* --- LAYER 2: ETHEREAL SUNBEAMS FILTERING FROM TOP RIGHT --- */}
        <g opacity="0.85">
          {/* Broad Sunbeam Array */}
          <polygon points="1120,40 1260,35 960,620 780,620" fill="url(#sunbeamGrad1)" />
          <polygon points="1240,30 1370,25 1120,620 950,620" fill="url(#sunbeamGrad2)" />
          <polygon points="1350,20 1460,15 1320,620 1160,620" fill="url(#sunbeamGrad1)" opacity="0.7" />
          <polygon points="1020,50 1140,45 740,620 590,620" fill="url(#sunbeamGrad2)" opacity="0.5" />
          <polygon points="1440,15 1560,10 1520,620 1380,620" fill="url(#sunbeamGrad1)" opacity="0.5" />
        </g>

        {/* --- LAYER 3: BRIGHT UNDULATING WATERLINE SURFACE ACROSS THE TOP --- */}
        {/* Above Waterline Atmosphere (Sky/Glitter) */}
        <path
          d="M -50 0 L 1650 0 L 1650 75 Q 1380 50 1150 90 T 720 70 T 310 100 T -50 75 Z"
          fill="url(#khumaniSurfaceSky)"
        />

        {/* Undulating Dynamic Waterline Ribbon with Waves */}
        <path
          d="M -50 75 Q 310 100 720 70 T 1150 90 T 1380 50 T 1650 75 L 1650 125 Q 1390 100 1160 135 T 730 115 T 320 145 T -50 120 Z"
          fill="#006FB8"
          opacity="0.65"
        />

        {/* Brilliant Specular White & Cyan Wave Crest Highlight */}
        <path
          d="M -50 75 Q 310 100 720 70 T 1150 90 T 1380 50 T 1650 75"
          stroke="url(#waterlineCrestGlow)"
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
        />

        {/* Secondary Delicate Sunlight Sparkle Waves */}
        <path
          d="M -30 82 Q 320 108 730 78 T 1160 98 T 1390 58 T 1630 82"
          stroke="#FFFFFF"
          strokeWidth="2.5"
          strokeOpacity="0.85"
          fill="none"
        />

        <path
          d="M 120 95 Q 450 118 850 92 T 1280 105 T 1550 72"
          stroke="#E0F2FE"
          strokeWidth="1.8"
          strokeDasharray="14 6"
          strokeOpacity="0.7"
          fill="none"
        />

        {/* --- LAYER 4: UPPER-RIGHT WATER SURFACE LEAVES --- */}
        {/* Submerged Leaf 1 near upper-right surface */}
        <g transform="translate(1420, 80) rotate(22)">
          {/* Soft Water Shadow */}
          <path
            d="M 0 0 C 18 35, 42 75, 50 125 C 15 110, -15 80, -32 45 C -25 20, -10 5, 0 0 Z"
            fill="#002D58"
            opacity="0.4"
            transform="translate(8, 14)"
          />
          {/* Leaf Body */}
          <path
            d="M 0 0 C 18 35, 42 75, 50 125 C 15 110, -15 80, -32 45 C -25 20, -10 5, 0 0 Z"
            fill="url(#leafGreenGrad1)"
            stroke="#2E7E1D"
            strokeWidth="1.2"
          />
          {/* Main Spine Vein */}
          <path d="M 0 0 Q 12 60 48 122" stroke="#A6F092" strokeWidth="1.8" fill="none" opacity="0.9" />
          {/* Side Veins */}
          <path d="M 5 28 Q 16 34 26 42" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 10 52 Q 22 62 36 72" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 18 80 Q 28 90 44 100" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 2 25 Q -8 30 -20 38" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 8 50 Q -2 58 -16 68" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          {/* Water sheen on leaf surface */}
          <ellipse cx="6" cy="45" rx="14" ry="30" transform="rotate(12, 6, 45)" fill="#FFFFFF" opacity="0.32" />
        </g>

        {/* Submerged Leaf 2 beside it */}
        <g transform="translate(1345, 145) rotate(-18)">
          <path
            d="M 0 0 C 22 28, 48 65, 52 108 C 20 95, -10 70, -25 40 C -18 18, -8 5, 0 0 Z"
            fill="url(#leafGreenGrad2)"
            stroke="#246415"
            strokeWidth="1.2"
          />
          <path d="M 0 0 Q 16 55 50 106" stroke="#B4F5A2" strokeWidth="1.6" fill="none" opacity="0.9" />
          <path d="M 6 24 Q 18 30 28 38" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <path d="M 12 48 Q 24 56 38 66" stroke="#8FE478" strokeWidth="1" fill="none" opacity="0.8" />
          <ellipse cx="8" cy="40" rx="10" ry="24" transform="rotate(10, 8, 40)" fill="#FFFFFF" opacity="0.28" />
        </g>

        {/* --- LAYER 5: DYNAMIC WATER SPLASH IN LOWER RIGHT --- */}
        {/* Splash Water Plume */}
        <g>
          {/* Soft background blue splash envelope */}
          <path
            d="M 1040 620 C 1050 510, 1120 440, 1220 430 C 1320 420, 1420 470, 1580 430 L 1600 620 Z"
            fill="#0284C7"
            opacity="0.45"
          />

          {/* Swirling crystal splash tendrils */}
          <path
            d="M 1060 620 C 1070 540, 1110 470, 1160 460 C 1220 450, 1260 520, 1310 500 C 1360 480, 1410 420, 1470 410 C 1530 400, 1580 430, 1600 450 L 1600 620 Z"
            fill="url(#splashFluidGrad)"
            opacity="0.8"
          />

          {/* Frothy white splash crests */}
          <path
            d="M 1070 560 Q 1120 480 1170 470 T 1280 510 T 1420 430 T 1540 420"
            stroke="#FFFFFF"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
          <path
            d="M 1110 530 Q 1170 475 1240 505 T 1390 455 T 1490 430"
            stroke="#BAE6FD"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />

          {/* Splash droplets breaking off */}
          <circle cx="1140" cy="430" r="5" fill="#FFFFFF" opacity="0.95" />
          <circle cx="1195" cy="410" r="3.5" fill="#E0F2FE" opacity="0.9" />
          <circle cx="1270" cy="380" r="6" fill="#FFFFFF" opacity="0.95" />
          <circle cx="1320" cy="360" r="4" fill="#BAE6FD" opacity="0.9" />
          <circle cx="1400" cy="340" r="7" fill="#FFFFFF" opacity="0.95" />
          <circle cx="1450" cy="320" r="4.5" fill="#E0F2FE" opacity="0.9" />
          <circle cx="1500" cy="310" r="6" fill="#FFFFFF" opacity="0.95" />
          <circle cx="1560" cy="280" r="3.5" fill="#BAE6FD" opacity="0.9" />
        </g>

        {/* --- LAYER 6: LOWER-RIGHT GREEN LEAF CLUSTER (CENTRAL ICONIC PAIR) --- */}
        {/* Leaf 1 (Prominent Left Leaf, Standing Tall) */}
        <g transform="translate(1125, 340) rotate(-14)">
          {/* Deep Shadow inside splash */}
          <path
            d="M 0 0 C 26 45, 52 105, 58 175 C 18 160, -22 118, -45 65 C -35 28, -15 8, 0 0 Z"
            fill="#002348"
            opacity="0.5"
            transform="translate(12, 16)"
          />
          {/* Leaf Body */}
          <path
            d="M 0 0 C 26 45, 52 105, 58 175 C 18 160, -22 118, -45 65 C -35 28, -15 8, 0 0 Z"
            fill="url(#leafGreenGrad1)"
            stroke="#2E7E1D"
            strokeWidth="1.5"
          />
          {/* Central Stem Spine */}
          <path d="M 0 0 Q 18 85 55 172" stroke="#BAF8A6" strokeWidth="2.4" fill="none" opacity="0.95" />
          {/* Lateral Secondary Veins */}
          <path d="M 6 35 Q 22 45 36 56" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          <path d="M 12 70 Q 28 82 46 96" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          <path d="M 22 110 Q 36 122 52 136" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          <path d="M 3 32 Q -12 40 -28 50" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          <path d="M 10 65 Q -5 76 -22 90" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          <path d="M 18 105 Q 2 118 -14 134" stroke="#92E87A" strokeWidth="1.4" fill="none" opacity="0.85" />
          {/* Wet Glossy Surface Sheen */}
          <ellipse cx="8" cy="65" rx="16" ry="42" transform="rotate(12, 8, 65)" fill="#FFFFFF" opacity="0.35" />
          {/* 3D Glistening Water Droplet on Leaf */}
          <g transform="translate(12, 85)">
            <ellipse cx="0" cy="0" rx="8" ry="6" fill="#FFFFFF" fillOpacity="0.8" />
            <circle cx="-2" cy="-2" r="2.5" fill="#FFFFFF" />
            <ellipse cx="2" cy="2" rx="4" ry="2" fill="#2E7E1D" opacity="0.6" />
          </g>
        </g>

        {/* Leaf 2 (Right Leaning Leaf beside Leaf 1) */}
        <g transform="translate(1210, 350) rotate(18)">
          <path
            d="M 0 0 C 28 42, 54 95, 56 160 C 18 145, -18 108, -38 60 C -28 26, -12 6, 0 0 Z"
            fill="#002348"
            opacity="0.45"
            transform="translate(10, 14)"
          />
          <path
            d="M 0 0 C 28 42, 54 95, 56 160 C 18 145, -18 108, -38 60 C -28 26, -12 6, 0 0 Z"
            fill="url(#leafGreenGrad2)"
            stroke="#246415"
            strokeWidth="1.5"
          />
          <path d="M 0 0 Q 18 78 53 158" stroke="#BAF8A6" strokeWidth="2.2" fill="none" opacity="0.95" />
          <path d="M 6 32 Q 20 40 34 50" stroke="#92E87A" strokeWidth="1.2" fill="none" opacity="0.85" />
          <path d="M 12 66 Q 26 78 44 90" stroke="#92E87A" strokeWidth="1.2" fill="none" opacity="0.85" />
          <path d="M 22 102 Q 34 114 50 126" stroke="#92E87A" strokeWidth="1.2" fill="none" opacity="0.85" />
          <path d="M 3 30 Q -10 36 -24 46" stroke="#92E87A" strokeWidth="1.2" fill="none" opacity="0.85" />
          <path d="M 10 62 Q -4 72 -18 84" stroke="#92E87A" strokeWidth="1.2" fill="none" opacity="0.85" />
          <ellipse cx="6" cy="58" rx="14" ry="38" transform="rotate(10, 6, 58)" fill="#FFFFFF" opacity="0.3" />
          {/* Water droplet on leaf 2 */}
          <circle cx="10" cy="70" r="5" fill="#FFFFFF" fillOpacity="0.85" />
          <circle cx="8" cy="68" r="1.8" fill="#FFFFFF" />
        </g>

        {/* --- LAYER 7: PHOTOREALISTIC RISING WATER BUBBLES --- */}
        {/* Bubble 1: Large Crystal Sphere (Radius 28) */}
        <g filter="url(#bubbleShadow)" transform="translate(1010, 310)">
          <circle cx="0" cy="0" r="28" fill="url(#bubbleShadingLg)" />
          <circle cx="0" cy="0" r="28" fill="url(#bubbleCausticRim)" />
          {/* Top-Left Specular Reflection Crescent */}
          <ellipse cx="-8" cy="-9" rx="10" ry="5.5" transform="rotate(-30, -8, -9)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-5" cy="-14" r="3" fill="#FFFFFF" opacity="0.98" />
          {/* Bottom-Right Translucent Cyan Glow */}
          <ellipse cx="10" cy="11" rx="8" ry="3.5" transform="rotate(-20, 10, 11)" fill="#7DD3FC" opacity="0.8" />
        </g>

        {/* Bubble 2: Medium-Large Sphere (Radius 22) */}
        <g filter="url(#bubbleShadow)" transform="translate(970, 385)">
          <circle cx="0" cy="0" r="22" fill="url(#bubbleShadingLg)" />
          <circle cx="0" cy="0" r="22" fill="url(#bubbleCausticRim)" />
          <ellipse cx="-7" cy="-7" rx="7.5" ry="4" transform="rotate(-35, -7, -7)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-4" cy="-11" r="2.2" fill="#FFFFFF" opacity="0.98" />
          <ellipse cx="8" cy="8" rx="6" ry="2.5" fill="#19C8F4" opacity="0.8" />
        </g>

        {/* Bubble 3: Ascending Sphere (Radius 18) */}
        <g filter="url(#bubbleShadow)" transform="translate(1045, 230)">
          <circle cx="0" cy="0" r="18" fill="url(#bubbleShadingLg)" />
          <ellipse cx="-5" cy="-6" rx="6" ry="3.2" transform="rotate(-30, -5, -6)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-3" cy="-9" r="1.8" fill="#FFFFFF" opacity="0.98" />
        </g>

        {/* Bubble 4: Lower Sphere (Radius 16) */}
        <g filter="url(#bubbleShadow)" transform="translate(915, 455)">
          <circle cx="0" cy="0" r="16" fill="url(#bubbleShadingLg)" />
          <ellipse cx="-5" cy="-5" rx="5.5" ry="3" transform="rotate(-30, -5, -5)" fill="#FFFFFF" opacity="0.95" />
          <circle cx="-2.5" cy="-8" r="1.5" fill="#FFFFFF" opacity="0.98" />
        </g>

        {/* Bubble 5: Small Cluster Bubbles */}
        <g filter="url(#bubbleShadow)" transform="translate(935, 510)">
          <circle cx="0" cy="0" r="12" fill="url(#bubbleShadingLg)" />
          <ellipse cx="-3.5" cy="-3.5" rx="4" ry="2" fill="#FFFFFF" opacity="0.95" />
        </g>

        <g filter="url(#bubbleShadow)" transform="translate(995, 470)">
          <circle cx="0" cy="0" r="11" fill="url(#bubbleShadingLg)" />
          <ellipse cx="-3" cy="-3" rx="3.5" ry="1.8" fill="#FFFFFF" opacity="0.95" />
        </g>

        <g filter="url(#bubbleShadow)" transform="translate(1075, 280)">
          <circle cx="0" cy="0" r="10" fill="url(#bubbleShadingLg)" />
          <circle cx="-2" cy="-4" r="1.5" fill="#FFFFFF" opacity="0.95" />
        </g>

        {/* Trailing Micro-bubbles ascending to surface */}
        <circle cx="990" cy="190" r="6" fill="#BAE6FD" opacity="0.9" />
        <circle cx="988" cy="188" r="1.8" fill="#FFFFFF" />
        <circle cx="1025" cy="155" r="5" fill="#7DD3FC" opacity="0.9" />
        <circle cx="960" cy="225" r="4.5" fill="#E0F2FE" opacity="0.85" />
        <circle cx="1050" cy="195" r="7" fill="#BAE6FD" opacity="0.9" />
        <circle cx="1048" cy="193" r="2" fill="#FFFFFF" />
        <circle cx="920" cy="330" r="5" fill="#7DD3FC" opacity="0.85" />
        <circle cx="880" cy="410" r="6.5" fill="#E0F2FE" opacity="0.9" />
        <circle cx="850" cy="480" r="4" fill="#BAE6FD" opacity="0.85" />

        {/* Micro-sparkles & air beads near splash */}
        <circle cx="1110" cy="390" r="3" fill="#FFFFFF" opacity="0.95" />
        <circle cx="1135" cy="460" r="4" fill="#E0F2FE" opacity="0.9" />
        <circle cx="1080" cy="510" r="3.5" fill="#7DD3FC" opacity="0.85" />
        <circle cx="1165" cy="480" r="4.5" fill="#FFFFFF" opacity="0.9" />

        {/* --- LAYER 8: SUBTLE LEFT-SIDE OVERLAY FOR TEXT READABILITY --- */}
        {/* Fades out completely before reaching the center bubbles, ensuring high contrast on text */}
        <rect width="900" height="620" fill="url(#leftTextProtection)" />
      </svg>
    </div>
  );
}
