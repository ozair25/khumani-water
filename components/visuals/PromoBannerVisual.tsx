import React from 'react';

export function PromoBannerVisual() {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      <svg
        viewBox="0 0 1200 420"
        className="w-full h-full object-cover"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="promoSkyVibrant" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#0284C7" />
            <stop offset="35%" stopColor="#38BDF8" />
            <stop offset="70%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#E0F2FE" />
          </linearGradient>

          <radialGradient id="promoSunBurst" cx="65%" cy="25%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="30%" stopColor="#FEF08A" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="marbleWhite" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F1F5F9" />
            <stop offset="100%" stopColor="#CBD5E1" />
          </linearGradient>

          <linearGradient id="poolTurquoise" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.75" />
            <stop offset="45%" stopColor="#0284C7" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#034870" stopOpacity="0.95" />
          </linearGradient>

          {/* Deep Navy/Aqua Scrim to guarantee WCAG AAA text legibility on left */}
          <linearGradient id="textScrimVibrant" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#03234F" stopOpacity="0.96" />
            <stop offset="45%" stopColor="#062B63" stopOpacity="0.85" />
            <stop offset="75%" stopColor="#0284C7" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {/* Vibrant Sky */}
        <rect width="1200" height="420" fill="url(#promoSkyVibrant)" />
        <circle cx="780" cy="110" r="180" fill="url(#promoSunBurst)" />

        {/* Distant Treeline */}
        <path
          d="M480 290 Q550 255 620 290 Q700 245 800 290 Q920 235 1060 290 L1200 290 L1200 420 L480 420 Z"
          fill="#065F46"
          opacity="0.4"
        />

        {/* Grand Community Architecture / Civic Pavilion with Domes & Colonnades */}
        <g transform="translate(480, 75)">
          {/* Main Grand Central Dome */}
          <ellipse cx="280" cy="118" rx="68" ry="64" fill="url(#marbleWhite)" />
          {/* Golden Finial */}
          <path d="M280 42 L280 58 M276 48 L284 48" stroke="#EAB308" strokeWidth="3" strokeLinecap="round" />
          <circle cx="280" cy="42" r="3.5" fill="#FACC15" />

          {/* Left Dome */}
          <ellipse cx="168" cy="138" rx="44" ry="42" fill="url(#marbleWhite)" />
          <path d="M168 88 L168 98" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />

          {/* Right Dome */}
          <ellipse cx="388" cy="142" rx="40" ry="38" fill="url(#marbleWhite)" />
          <path d="M388 98 L388 108" stroke="#EAB308" strokeWidth="2.5" strokeLinecap="round" />

          {/* Minarets / Spire Columns */}
          <rect x="68" y="70" width="20" height="142" fill="url(#marbleWhite)" />
          <polygon points="78,38 65,70 91,70" fill="url(#marbleWhite)" />
          <line x1="78" y1="28" x2="78" y2="38" stroke="#EAB308" strokeWidth="2.5" />

          <rect x="475" y="80" width="18" height="132" fill="url(#marbleWhite)" />
          <polygon points="484,48 472,80 496,80" fill="url(#marbleWhite)" />
          <line x1="484" y1="38" x2="484" y2="48" stroke="#EAB308" strokeWidth="2.5" />

          {/* Arched Colonnade Pavilion */}
          <rect x="88" y="165" width="375" height="58" fill="url(#marbleWhite)" stroke="#94A3B8" strokeWidth="1" />
          {/* Arches with Soft Shadows */}
          <g fill="#64748B" opacity="0.65">
            <path d="M108 223 V190 C108 182 124 182 124 190 V223 Z" />
            <path d="M138 223 V190 C138 182 154 182 154 190 V223 Z" />
            <path d="M168 223 V185 C168 174 196 174 196 185 V223 Z" />
            <path d="M208 223 V185 C208 174 236 174 236 185 V223 Z" />
            <path d="M258 223 V180 C258 165 300 165 300 180 V223 Z" />
            <path d="M320 223 V185 C320 174 348 174 348 185 V223 Z" />
            <path d="M360 223 V185 C360 174 388 174 388 185 V223 Z" />
            <path d="M400 223 V190 C400 182 416 182 416 190 V223 Z" />
            <path d="M430 223 V190 C430 182 446 182 446 190 V223 Z" />
          </g>
        </g>

        {/* Foreground Lush Palm Trees */}
        <g transform="translate(860, 155)">
          <path d="M40 150 Q45 80 50 10" stroke="#78350F" strokeWidth="5.5" fill="none" strokeLinecap="round" />
          <path d="M50 10 Q20 0 -12 30" stroke="#15803D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M50 10 Q35 -20 10 -42" stroke="#16A34A" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M50 10 Q65 -30 88 -38" stroke="#15803D" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M50 10 Q85 -5 115 25" stroke="#16A34A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M50 10 Q50 -25 55 -55" stroke="#22C55E" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>

        <g transform="translate(1030, 175)">
          <path d="M30 130 Q35 70 38 10" stroke="#78350F" strokeWidth="4.5" fill="none" strokeLinecap="round" />
          <path d="M38 10 Q10 0 -15 25" stroke="#15803D" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M38 10 Q25 -20 0 -35" stroke="#16A34A" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M38 10 Q55 -25 78 -30" stroke="#15803D" strokeWidth="4" fill="none" strokeLinecap="round" />
          <path d="M38 10 Q70 -5 95 20" stroke="#16A34A" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        </g>

        {/* Pristine Turquoise Reflecting Pool / Water Surface at Bottom */}
        <rect x="0" y="300" width="1200" height="120" fill="url(#poolTurquoise)" />
        {/* Shimmering ripple lines */}
        <line x1="450" y1="322" x2="880" y2="322" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.45" strokeDasharray="16 10" />
        <line x1="500" y1="344" x2="940" y2="344" stroke="#BAE6FD" strokeWidth="1.4" opacity="0.55" strokeDasharray="22 14" />
        <line x1="420" y1="368" x2="900" y2="368" stroke="#FFFFFF" strokeWidth="1.2" opacity="0.35" strokeDasharray="18 12" />

        {/* High-Legibility Contrast Scrim on the Left */}
        <rect x="0" y="0" width="760" height="420" fill="url(#textScrimVibrant)" />
      </svg>
    </div>
  );
}
