import React from 'react';

interface ProductCardVisualProps {
  category: 'water-atm' | 'chiller' | 'ro-system' | 'spares';
  name: string;
}

export function ProductCardVisual({ category, name }: ProductCardVisualProps) {
  if (category === 'water-atm') {
    return (
      <div className="relative w-full h-full min-h-[240px] sm:min-h-[270px] bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#D5EBFD] flex items-center justify-center p-4 overflow-hidden group">
        {/* Soft background aura */}
        <div className="absolute inset-0 bg-radial from-[#06B6D4]/25 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        
        <svg viewBox="0 0 320 250" className="w-full h-full max-h-[220px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pAtmBodyVibrant" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="20%" stopColor="#FFFFFF" />
              <stop offset="50%" stopColor="#E2E8F0" />
              <stop offset="80%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id="pAtmFascia" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0284C7" />
              <stop offset="40%" stopColor="#0866D8" />
              <stop offset="100%" stopColor="#03234F" />
            </linearGradient>

            <linearGradient id="pWaterStream" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.95" />
            </linearGradient>
          </defs>

          {/* Pedestal shadow */}
          <ellipse cx="160" cy="235" rx="95" ry="11" fill="#062B63" fillOpacity="0.18" />

          {/* ATM Cabinet */}
          <rect x="92" y="12" width="136" height="218" rx="12" fill="url(#pAtmBodyVibrant)" stroke="#64748B" strokeWidth="1.5" />
          <line x1="95" y1="15" x2="95" y2="225" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />

          {/* Header Marquee */}
          <rect x="100" y="20" width="120" height="46" rx="8" fill="url(#pAtmFascia)" />
          <line x1="100" y1="21" x2="220" y2="21" stroke="#06B6D4" strokeWidth="2" />
          
          <circle cx="118" cy="43" r="8" fill="#06B6D4" />
          <path d="M118 38 C115 41 113 44 113 45 A5 5 0 0 0 123 45 C123 44 121 41 118 38 Z" fill="#FFFFFF" />
          
          <text x="131" y="40" fill="#FFFFFF" fontSize="8.5" fontWeight="900" fontFamily="system-ui" letterSpacing="0.05em">
            KHUMANI
          </text>
          <text x="131" y="50" fill="#38BDF8" fontSize="7" fontWeight="700" fontFamily="system-ui" letterSpacing="0.08em">
            WATER ATM
          </text>

          {/* LCD Status display */}
          <rect x="104" y="74" width="112" height="30" rx="5" fill="#02142B" stroke="#0284C7" strokeWidth="1" />
          <text x="112" y="87" fill="#38BDF8" fontSize="6.5" fontWeight="700" fontFamily="monospace">
            STATUS: PURE RO ACTIVE
          </text>
          <text x="112" y="97" fill="#4ADE80" fontSize="6" fontWeight="700" fontFamily="monospace">
            COIN / RFID DISPENSE
          </text>
          <circle cx="206" cy="83" r="2.8" fill="#22C55E" />

          {/* Card & Coin Controls */}
          <rect x="104" y="110" width="52" height="20" rx="3.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
          <text x="110" y="123" fill="#0F172A" fontSize="5.5" fontWeight="700">
            TAP CARD
          </text>

          <rect x="164" y="110" width="52" height="20" rx="3.5" fill="#F1F5F9" stroke="#94A3B8" strokeWidth="1" />
          <text x="170" y="123" fill="#0F172A" fontSize="5.5" fontWeight="700">
            COIN SLOT
          </text>

          {/* Dispense Niche */}
          <rect x="104" y="136" width="112" height="86" rx="7" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.2" />
          <rect x="108" y="140" width="104" height="78" rx="5" fill="#E2E8F0" />
          <rect x="108" y="140" width="104" height="78" rx="5" fill="#0284C7" fillOpacity="0.07" />

          {/* Dispensing Tap */}
          <rect x="155" y="142" width="10" height="12" rx="2" fill="#64748B" />
          <path d="M160 154 L160 162 L156 164" stroke="#475569" strokeWidth="3" fill="none" strokeLinecap="round" />
          
          {/* Flowing Water Stream */}
          <line x1="156" y1="164" x2="156" y2="204" stroke="url(#pWaterStream)" strokeWidth="3" strokeLinecap="round" />

          {/* Bottle under faucet */}
          <path d="M146 182 L147 214 C147 217 165 217 165 214 L166 182 Z" fill="#FFFFFF" fillOpacity="0.5" stroke="#38BDF8" strokeWidth="1.2" />
          <path d="M147 194 L147 214 C147 217 165 217 165 214 L165 194 Z" fill="#06B6D4" fillOpacity="0.65" />
          <ellipse cx="156" cy="194" rx="9" ry="2" fill="#FFFFFF" opacity="0.8" />

          {/* Bottom Grille */}
          <rect x="114" y="210" width="92" height="8" rx="2" fill="#1E293B" />
          <line x1="118" y1="214" x2="202" y2="214" stroke="#94A3B8" strokeWidth="1" strokeDasharray="3 2" />
        </svg>

        {/* Product Spec overlay badge */}
        <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md border border-[#BAE6FD] rounded-xl px-3 py-1 text-xs font-bold text-[#062B63] shadow-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
          <span>Food-Grade SS 304</span>
        </div>
      </div>
    );
  }

  if (category === 'chiller') {
    return (
      <div className="relative w-full h-full min-h-[240px] sm:min-h-[270px] bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#D5EBFD] flex items-center justify-center p-4 overflow-hidden group">
        <div className="absolute inset-0 bg-radial from-[#0284C7]/25 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
        
        <svg viewBox="0 0 320 250" className="w-full h-full max-h-[220px]" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="pChillerBodyVibrant" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#94A3B8" />
              <stop offset="25%" stopColor="#FFFFFF" />
              <stop offset="55%" stopColor="#E2E8F0" />
              <stop offset="85%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#64748B" />
            </linearGradient>

            <linearGradient id="pFrostBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06B6D4" />
              <stop offset="50%" stopColor="#0866D8" />
              <stop offset="100%" stopColor="#03234F" />
            </linearGradient>
          </defs>

          {/* Pedestal shadow */}
          <ellipse cx="160" cy="235" rx="90" ry="10" fill="#062B63" fillOpacity="0.18" />

          {/* Chiller Main Cabinet */}
          <rect x="96" y="20" width="128" height="208" rx="10" fill="url(#pChillerBodyVibrant)" stroke="#64748B" strokeWidth="1.5" />
          <line x1="99" y1="23" x2="99" y2="225" stroke="#FFFFFF" strokeWidth="1.8" opacity="0.9" />

          {/* Ventilation Cooling Louvers */}
          <g stroke="#64748B" strokeWidth="1.2" strokeLinecap="round">
            <line x1="106" y1="170" x2="136" y2="170" />
            <line x1="106" y1="177" x2="136" y2="177" />
            <line x1="106" y1="184" x2="136" y2="184" />
            <line x1="106" y1="191" x2="136" y2="191" />
            <line x1="106" y1="198" x2="136" y2="198" />
            <line x1="106" y1="205" x2="136" y2="205" />
          </g>

          {/* Top Brand & Temp Bar */}
          <rect x="104" y="28" width="112" height="40" rx="6" fill="url(#pFrostBlue)" />
          <text x="112" y="44" fill="#FFFFFF" fontSize="8.5" fontWeight="900" fontFamily="system-ui">
            KHUMANI CHILLER
          </text>
          <text x="112" y="56" fill="#BAE6FD" fontSize="7" fontWeight="600" fontFamily="system-ui">
            RAPID CHILL TECH
          </text>
          
          {/* Temperature LED Display */}
          <rect x="182" y="34" width="30" height="18" rx="3" fill="#02142B" stroke="#38BDF8" strokeWidth="0.8" />
          <text x="187" y="47" fill="#38BDF8" fontSize="8.5" fontWeight="bold" fontFamily="monospace">
            8°C
          </text>

          {/* Dual Dispensing Faucets */}
          <g transform="translate(142, 85)">
            {/* Cold Faucet (Blue) */}
            <rect x="-18" y="0" width="14" height="20" rx="2.5" fill="#0866D8" />
            <path d="M-11 20 L-11 32 L-14 34" stroke="#044394" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <circle cx="-11" cy="7" r="3.5" fill="#60A5FA" />

            {/* Normal Faucet (Cyan/Green) */}
            <rect x="18" y="0" width="14" height="20" rx="2.5" fill="#059669" />
            <path d="M25 20 L25 32 L22 34" stroke="#047857" strokeWidth="3.5" fill="none" strokeLinecap="round" />
            <circle cx="25" cy="7" r="3.5" fill="#34D399" />

            {/* Cold Condensation Droplets */}
            <circle cx="-3" cy="55" r="1.8" fill="#38BDF8" />
            <circle cx="3" cy="72" r="1.8" fill="#06B6D4" />
            <circle cx="12" cy="60" r="1.4" fill="#38BDF8" />

            {/* Heavy Stainless Drip Basin */}
            <rect x="-34" y="46" width="90" height="16" rx="4" fill="#1E293B" />
            <rect x="-32" y="48" width="86" height="5" rx="1.5" fill="#475569" stroke="#94A3B8" strokeWidth="0.6" />
          </g>

          {/* Snowflake frost emblem */}
          <g transform="translate(202, 145)" stroke="#0284C7" strokeWidth="1.2" strokeLinecap="round">
            <line x1="0" y1="-8" x2="0" y2="8" />
            <line x1="-8" y1="0" x2="8" y2="0" />
            <line x1="-5.5" y1="-5.5" x2="5.5" y2="5.5" />
            <line x1="-5.5" y1="5.5" x2="5.5" y2="-5.5" />
          </g>
        </svg>

        <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md border border-[#BAE6FD] rounded-xl px-3 py-1 text-xs font-bold text-[#062B63] shadow-md flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#0284C7]" />
          <span>Dual Cold & Ambient</span>
        </div>
      </div>
    );
  }

  // RO Purification Systems (Domestic & Commercial)
  return (
    <div className="relative w-full h-full min-h-[240px] sm:min-h-[270px] bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-[#D5EBFD] flex items-center justify-center p-4 overflow-hidden group">
      <div className="absolute inset-0 bg-radial from-[#06B6D4]/25 via-transparent to-transparent opacity-80 group-hover:scale-110 transition-transform duration-700 pointer-events-none" />
      
      <svg viewBox="0 0 320 250" className="w-full h-full max-h-[220px]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="pRoClearFilter" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.75" />
            <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#BAE6FD" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0284C7" stopOpacity="0.75" />
          </linearGradient>

          <linearGradient id="pRoMembraneVibrant" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#0866D8" />
            <stop offset="40%" stopColor="#0284C7" />
            <stop offset="70%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#03234F" />
          </linearGradient>
        </defs>

        {/* Shadow */}
        <ellipse cx="160" cy="235" rx="90" ry="10" fill="#062B63" fillOpacity="0.18" />

        {/* Mounting Frame Skid */}
        <rect x="80" y="24" width="160" height="204" rx="8" fill="#F8FAFC" stroke="#64748B" strokeWidth="1.8" />
        <rect x="85" y="29" width="150" height="194" rx="6" fill="#EDF2F7" />

        {/* Header Bar */}
        <rect x="88" y="32" width="144" height="30" rx="5" fill="#0866D8" />
        <text x="98" y="48" fill="#FFFFFF" fontSize="8.5" fontWeight="900">
          KHUMANI RO SYSTEM
        </text>
        <text x="98" y="57" fill="#BAE6FD" fontSize="6.8" fontWeight="600">
          MULTI-STAGE PURIFICATION
        </text>

        {/* High-Pressure RO Membrane Vessel (Horizontal top cylinder) */}
        <rect x="94" y="68" width="132" height="28" rx="14" fill="url(#pRoMembraneVibrant)" stroke="#044394" strokeWidth="1.2" />
        <rect x="98" y="72" width="124" height="4" rx="2" fill="#BAE6FD" opacity="0.7" />
        <text x="120" y="85" fill="#FFFFFF" fontSize="7" fontWeight="bold" letterSpacing="0.06em">
          RO MEMBRANE HOUSING
        </text>

        {/* Brass Pressure Gauge */}
        <circle cx="160" cy="116" r="15" fill="#FDE047" stroke="#CA8A04" strokeWidth="1.4" />
        <circle cx="160" cy="116" r="12" fill="#FFFFFF" />
        <line x1="160" y1="116" x2="167" y2="110" stroke="#DC2626" strokeWidth="1.8" strokeLinecap="round" />
        <text x="152" y="123" fill="#0F172A" fontSize="5" fontWeight="bold">PSI</text>

        {/* Multi-Stage Pre-Filter Cartridge Housings (3 vertical cylinders) */}
        {/* Filter 1: Sediment */}
        <rect x="94" y="136" width="36" height="82" rx="6" fill="url(#pRoClearFilter)" stroke="#0284C7" strokeWidth="1.2" />
        <rect x="98" y="144" width="28" height="66" rx="3" fill="#FFFFFF" opacity="0.95" />
        <text x="100" y="180" fill="#0369A1" fontSize="5.5" fontWeight="bold">SEDIMENT</text>

        {/* Filter 2: Carbon Block */}
        <rect x="142" y="136" width="36" height="82" rx="6" fill="url(#pRoClearFilter)" stroke="#0284C7" strokeWidth="1.2" />
        <rect x="146" y="144" width="28" height="66" rx="3" fill="#334155" opacity="0.9" />
        <text x="149" y="180" fill="#E2E8F0" fontSize="5.5" fontWeight="bold">CARBON</text>

        {/* Filter 3: Post Mineral */}
        <rect x="190" y="136" width="36" height="82" rx="6" fill="url(#pRoClearFilter)" stroke="#0284C7" strokeWidth="1.2" />
        <rect x="194" y="144" width="28" height="66" rx="3" fill="#06B6D4" opacity="0.85" />
        <text x="196" y="180" fill="#034870" fontSize="5.5" fontWeight="bold">MINERAL</text>

        {/* Connecting High-Pressure Tubing */}
        <path d="M112 136 L112 126 L160 126 L160 98" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M160 136 L160 126" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        <path d="M208 136 L208 126 L160 126" stroke="#0284C7" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      </svg>

      <div className="absolute bottom-3 left-4 bg-white/95 backdrop-blur-md border border-[#BAE6FD] rounded-xl px-3 py-1 text-xs font-bold text-[#062B63] shadow-md flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full bg-[#0866D8]" />
        <span>Multi-Stage RO Skid</span>
      </div>
    </div>
  );
}
