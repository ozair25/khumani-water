import React from 'react';

export function MissionVisual() {
  return (
    <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden border-2 border-[#BAE6FD]/80 shadow-2xl shadow-[#0866D8]/12 bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#D5EBFD] group">
      <svg
        viewBox="0 0 540 400"
        className="w-full h-full object-cover"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="misSkyVibrant" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="45%" stopColor="#7DD3FC" />
            <stop offset="80%" stopColor="#BAE6FD" />
            <stop offset="100%" stopColor="#F0F9FF" />
          </linearGradient>

          <radialGradient id="misSunGlow" cx="68%" cy="25%" r="55%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="misMountVibrant" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#2563EB" />
          </linearGradient>

          <linearGradient id="misLakeVibrant" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="40%" stopColor="#0284C7" />
            <stop offset="85%" stopColor="#0369A1" />
            <stop offset="100%" stopColor="#082F49" />
          </linearGradient>

          <linearGradient id="bottleGlassVibrant" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="25%" stopColor="#E0F2FE" stopOpacity="0.45" />
            <stop offset="65%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#7DD3FC" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="goldCapVibrant" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#B45309" />
            <stop offset="25%" stopColor="#FDE047" />
            <stop offset="60%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>
        </defs>

        {/* Vibrant Sky */}
        <rect width="540" height="400" fill="url(#misSkyVibrant)" />
        <circle cx="360" cy="100" r="140" fill="url(#misSunGlow)" />

        {/* Alpine Peaks */}
        <path
          d="M0 230 L70 160 L140 200 L230 130 L310 180 L410 115 L480 170 L540 130 L540 300 L0 300 Z"
          fill="url(#misMountVibrant)"
          opacity="0.75"
        />
        <polygon points="230,130 215,150 245,150" fill="#FFFFFF" opacity="0.95" />
        <polygon points="410,115 392,140 428,140" fill="#FFFFFF" opacity="0.95" />

        {/* Pure Turquoise Lake Base */}
        <rect x="0" y="260" width="540" height="140" fill="url(#misLakeVibrant)" />
        <ellipse cx="270" cy="278" rx="230" ry="8" fill="#FFFFFF" opacity="0.35" />
        <ellipse cx="290" cy="305" rx="200" ry="8" fill="#BAE6FD" opacity="0.3" />
        <ellipse cx="250" cy="335" rx="220" ry="10" fill="#38BDF8" opacity="0.25" />

        {/* Natural Stone Pedestal */}
        <path
          d="M185 305 C210 290 385 288 415 305 C425 328 395 345 355 350 C290 356 205 345 185 305 Z"
          fill="#1E293B"
        />
        <path
          d="M200 302 C230 292 375 290 400 302 C375 314 240 316 200 302 Z"
          fill="#334155"
        />

        {/* Glass Pure Water Vessels on Stone */}
        {/* Main Central Vessel */}
        <g transform="translate(305, 130)">
          {/* Gold cap */}
          <rect x="-12" y="0" width="24" height="14" rx="2.5" fill="url(#goldCapVibrant)" stroke="#78350F" strokeWidth="0.8" />
          {/* Neck */}
          <rect x="-9" y="14" width="18" height="20" fill="url(#bottleGlassVibrant)" stroke="#38BDF8" strokeWidth="1" />
          {/* Shoulder & Body */}
          <path
            d="M-9 34 C-25 60 -28 98 -27 175 C-27 180 27 180 27 175 C28 98 25 60 9 34 Z"
            fill="url(#bottleGlassVibrant)"
            stroke="#0284C7"
            strokeWidth="1.5"
          />
          {/* Pure Water Filling */}
          <path
            d="M-26 80 C-26 115 -26 172 -26 174 C-26 178 26 178 26 174 C26 172 26 115 26 80 Z"
            fill="#06B6D4"
            fillOpacity="0.45"
          />
          {/* Pure brand ribbon */}
          <rect x="-20" y="102" width="40" height="18" rx="3" fill="#0866D8" />
          <text x="0" y="114" fill="#FFFFFF" fontSize="6.8" fontWeight="bold" textAnchor="middle" fontFamily="system-ui" letterSpacing="0.05em">
            KHUMANI
          </text>
          <ellipse cx="0" cy="80" rx="14" ry="3" fill="#FFFFFF" opacity="0.8" />
        </g>

        {/* Small Left Bottle */}
        <g transform="translate(242, 178)">
          <rect x="-9" y="0" width="18" height="10" rx="2" fill="url(#goldCapVibrant)" />
          <path
            d="M-7 10 C-18 30 -20 65 -19 125 C-19 128 19 128 19 125 C20 65 18 30 7 10 Z"
            fill="url(#bottleGlassVibrant)"
            stroke="#0284C7"
            strokeWidth="1.2"
          />
          <path
            d="M-18 50 C-18 85 -18 122 -18 124 C-18 127 18 127 18 124 C18 122 18 85 18 50 Z"
            fill="#06B6D4"
            fillOpacity="0.4"
          />
        </g>

        {/* Small Right Bottle */}
        <g transform="translate(372, 192)">
          <rect x="-8" y="0" width="16" height="9" rx="1.8" fill="url(#goldCapVibrant)" />
          <path
            d="M-6 9 C-16 26 -17 55 -16 110 C-16 113 16 113 16 110 C17 55 16 26 6 9 Z"
            fill="url(#bottleGlassVibrant)"
            stroke="#0284C7"
            strokeWidth="1.2"
          />
        </g>

        {/* Dynamic Water Splashes & Sparkling Droplets */}
        <circle cx="205" cy="325" r="4.5" fill="#FFFFFF" opacity="0.9" />
        <circle cx="400" cy="320" r="5" fill="#BAE6FD" opacity="0.95" />
        <circle cx="422" cy="310" r="3" fill="#FFFFFF" opacity="0.85" />
        <circle cx="195" cy="310" r="2.5" fill="#E0F2FE" opacity="0.8" />
      </svg>

      {/* Real HTML Overlay text matching reference: "Think Pure / Live Better" */}
      <div className="absolute top-7 left-7 sm:top-9 sm:left-9 z-10">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
          Think Pure<br />
          <span className="text-[#BAE6FD]">Live Better</span>
        </h3>
        <div className="w-20 h-1.5 bg-gradient-to-r from-[#06B6D4] to-[#29A9F5] rounded-full mt-2.5 shadow-md" />
      </div>
    </div>
  );
}
