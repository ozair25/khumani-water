import React from 'react';

/**
 * HeroWaveBottom
 * Exact wavy division effect matching Screenshot_20261014-151027.png:
 * - Graceful double-curve undulating ribbon in vibrant sky-blue (#38BDF8)
 * - Brilliant white sparkle glints at left and right troughs
 * - Translucent floating water bubble at center crest
 * - Seamless fill connecting into the next section
 */
export function HeroWaveBottom({
  fill = '#F0F7FD',
  ribbonColor = '#38BDF8',
  heightClass = 'h-10 sm:h-14 lg:h-18',
}: {
  fill?: string;
  ribbonColor?: string;
  heightClass?: string;
}) {
  return (
    <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${heightClass}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="heroRibbonExactGrad" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38BDF8" />
            <stop offset="0.25" stopColor="#29A9F5" />
            <stop offset="0.5" stopColor="#38BDF8" />
            <stop offset="0.75" stopColor="#29A9F5" />
            <stop offset="1" stopColor="#38BDF8" />
          </linearGradient>

          <filter id="heroSparkleGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.2" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Sky Blue Wavy Ribbon (Exact smooth double-curve matching image.png) */}
        <path
          d="M0,38 C180,38 220,50 310,50 C440,50 560,42 680,42 C800,42 920,52 1030,52 C1160,52 1300,37 1440,37 L1440,46 C1300,46 1160,61 1030,61 C920,61 800,51 680,51 C560,51 440,59 310,59 C220,59 180,47 0,47 Z"
          fill="url(#heroRibbonExactGrad)"
        />

        {/* 2. Solid Bottom Body filling into next section */}
        <path
          d="M0,46 C180,46 220,58 310,58 C440,58 560,50 680,50 C800,50 920,60 1030,60 C1160,60 1300,45 1440,45 V100 H0 Z"
          fill={fill}
        />

        {/* 3. Glossy Crest Edge Line on top of ribbon */}
        <path
          d="M0,38 C180,38 220,50 310,50 C440,50 560,42 680,42 C800,42 920,52 1030,52 C1160,52 1300,37 1440,37"
          stroke="#BAE6FD"
          strokeWidth="1.2"
          strokeOpacity="0.8"
          fill="none"
        />

        {/* 4. Accents matching image.png */}

        {/* Left Trough Sparkle (~21% width, near x=310, y=50) */}
        <g filter="url(#heroSparkleGlow)">
          <path
            d="M310,45 L311.2,48.8 L315,50 L311.2,51.2 L310,55 L308.8,51.2 L305,50 L308.8,48.8 Z"
            fill="#FFFFFF"
          />
          <circle cx="310" cy="50" r="1.4" fill="#FFFFFF" />
        </g>

        {/* Translucent Center Droplet / Bubble (~46% width, near x=668, y=36, just above crest) */}
        <ellipse cx="668" cy="36" rx="4" ry="5.2" fill="#38BDF8" fillOpacity="0.45" />
        <ellipse cx="668" cy="36" rx="3" ry="3.8" fill="#BAE6FD" fillOpacity="0.3" />
        <circle cx="666.5" cy="34" r="1" fill="#FFFFFF" fillOpacity="0.9" />

        {/* Right Trough Sparkle (~71% width, near x=1028, y=52) */}
        <g filter="url(#heroSparkleGlow)">
          <path
            d="M1028,47 L1029.2,50.8 L1033,52 L1029.2,53.2 L1028,57 L1026.8,53.2 L1023,52 L1026.8,50.8 Z"
            fill="#FFFFFF"
          />
          <circle cx="1028" cy="52" r="1.4" fill="#FFFFFF" />
        </g>

        {/* Far Right Subtle Specular Glint (~88% width, near x=1270, y=39) */}
        <circle cx="1270" cy="39" r="1.2" fill="#FFFFFF" opacity="0.85" />
      </svg>
    </div>
  );
}

interface FluidSectionWaveDividerProps {
  topColor: string;
  bottomColor: string;
  accentColor?: string;
  variant?: 'crest' | 'flow' | 'ripple' | 'trough' | 'ribbon';
  heightClass?: string;
}

/**
 * FluidSectionWaveDivider
 * Multi-layer flowing water wave divider placed between sections with
 * glistening wave crests, realistic droplets, and subtle water sparkles.
 */
export function FluidSectionWaveDivider({
  topColor,
  bottomColor,
  accentColor = '#06B6D4',
  variant = 'crest',
  heightClass = 'h-12 sm:h-16 lg:h-20',
}: FluidSectionWaveDividerProps) {
  const gradientId = `waveGrad_${variant}_${topColor.replace(/[^a-zA-Z0-9]/g, '')}_${bottomColor.replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div
      className="w-full overflow-hidden leading-none relative -my-0.5 select-none pointer-events-none z-10"
      style={{ backgroundColor: topColor }}
    >
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full ${heightClass}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1440" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor={accentColor} stopOpacity="0.7" />
            <stop offset="0.5" stopColor="#38BDF8" stopOpacity="0.5" />
            <stop offset="1" stopColor={accentColor} stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {variant === 'crest' && (
          <>
            {/* Background Accent Wave */}
            <path
              d="M0 20C320 70 640 10 960 45C1200 70 1340 30 1440 15V100H0V20Z"
              fill={`url(#${gradientId})`}
            />
            {/* Glossy Edge Highlight */}
            <path
              d="M0 20C320 70 640 10 960 45C1200 70 1340 30 1440 15"
              stroke="#E0F2FE"
              strokeWidth="2"
              strokeOpacity="0.65"
              fill="none"
            />
            {/* Foreground Solid Bottom Wave */}
            <path
              d="M0 45C280 85 680 30 1020 65C1240 85 1360 48 1440 38V100H0V45Z"
              fill={bottomColor}
            />
            {/* Floating Droplets on wave */}
            <circle cx="310" cy="40" r="3" fill="#FFFFFF" opacity="0.85" />
            <circle cx="670" cy="25" r="4" fill="#BAE6FD" opacity="0.9" />
            <circle cx="1030" cy="50" r="3" fill="#FFFFFF" opacity="0.8" />
            <circle cx="1280" cy="32" r="2.5" fill="#E0F2FE" opacity="0.9" />
          </>
        )}

        {variant === 'flow' && (
          <>
            {/* Flowing S-Curve Accent Wave */}
            <path
              d="M0 10C240 80 520 20 800 65C1080 100 1320 30 1440 40V100H0V10Z"
              fill={`url(#${gradientId})`}
            />
            {/* Translucent Middle Ribbon */}
            <path
              d="M0 30C280 90 560 40 840 75C1120 100 1320 50 1440 55V100H0V30Z"
              fill="#7DD3FC"
              fillOpacity="0.3"
            />
            {/* Foreground Bottom Wave */}
            <path
              d="M0 50C280 100 600 50 900 80C1160 100 1340 65 1440 60V100H0V50Z"
              fill={bottomColor}
            />
            {/* Crest highlight line */}
            <path
              d="M0 50C280 100 600 50 900 80C1160 100 1340 65 1440 60"
              stroke="#BAE6FD"
              strokeWidth="2"
              strokeOpacity="0.75"
              fill="none"
            />
            {/* Water Drops */}
            <circle cx="270" cy="55" r="3.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="820" cy="45" r="4" fill="#E0F2FE" opacity="0.85" />
            <circle cx="1180" cy="68" r="2.5" fill="#FFFFFF" opacity="0.9" />
          </>
        )}

        {variant === 'ripple' && (
          <>
            {/* Multi-Ripple Accent Wave */}
            <path
              d="M0 25C180 5 360 45 540 20C720 -5 900 35 1080 15C1260 -5 1380 30 1440 22V100H0V25Z"
              fill={`url(#${gradientId})`}
            />
            {/* Foreground Bottom Wave */}
            <path
              d="M0 50C180 30 360 65 540 40C720 15 900 55 1080 35C1260 18 1380 50 1440 42V100H0V50Z"
              fill={bottomColor}
            />
            {/* Ripple Specular Line */}
            <path
              d="M0 50C180 30 360 65 540 40C720 15 900 55 1080 35C1260 18 1380 50 1440 42"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              strokeOpacity="0.7"
              strokeDasharray="8 4"
              fill="none"
            />
            {/* Droplets & Bubbles */}
            <circle cx="190" cy="22" r="3" fill="#FFFFFF" opacity="0.9" />
            <circle cx="530" cy="25" r="3.5" fill="#BAE6FD" opacity="0.85" />
            <circle cx="890" cy="30" r="4" fill="#FFFFFF" opacity="0.9" />
            <circle cx="1270" cy="18" r="3" fill="#E0F2FE" opacity="0.85" />
          </>
        )}

        {variant === 'trough' && (
          <>
            {/* Ocean Trough Accent Wave */}
            <path
              d="M0 15C360 90 1080 90 1440 15V100H0V15Z"
              fill={`url(#${gradientId})`}
            />
            {/* Foreground Solid Bottom Wave */}
            <path
              d="M0 38C360 105 1080 105 1440 38V100H0V38Z"
              fill={bottomColor}
            />
            {/* Glistening Rim */}
            <path
              d="M0 38C360 105 1080 105 1440 38"
              stroke="#E0F2FE"
              strokeWidth="2"
              strokeOpacity="0.8"
              fill="none"
            />
            {/* Droplet cluster at center */}
            <circle cx="680" cy="65" r="3.5" fill="#FFFFFF" opacity="0.9" />
            <circle cx="720" cy="68" r="4.5" fill="#BAE6FD" opacity="0.9" />
            <circle cx="760" cy="64" r="3" fill="#FFFFFF" opacity="0.85" />
          </>
        )}

        {variant === 'ribbon' && (
          <>
            {/* 1. Sky Blue Wavy Ribbon (Exact smooth double-curve matching image.png) */}
            <path
              d="M0,38 C180,38 220,50 310,50 C440,50 560,42 680,42 C800,42 920,52 1030,52 C1160,52 1300,37 1440,37 L1440,46 C1300,46 1160,61 1030,61 C920,61 800,51 680,51 C560,51 440,59 310,59 C220,59 180,47 0,47 Z"
              fill={accentColor}
            />

            {/* 2. Solid Bottom Body */}
            <path
              d="M0,46 C180,46 220,58 310,58 C440,58 560,50 680,50 C800,50 920,60 1030,60 C1160,60 1300,45 1440,45 V100 H0 Z"
              fill={bottomColor}
            />

            {/* 3. Glossy Crest Edge Line on top of ribbon */}
            <path
              d="M0,38 C180,38 220,50 310,50 C440,50 560,42 680,42 C800,42 920,52 1030,52 C1160,52 1300,37 1440,37"
              stroke="#BAE6FD"
              strokeWidth="1.2"
              strokeOpacity="0.8"
              fill="none"
            />

            {/* 4. Accents matching image.png */}

            {/* Left Trough Sparkle (~21% width, near x=310, y=50) */}
            <path
              d="M310,45 L311.2,48.8 L315,50 L311.2,51.2 L310,55 L308.8,51.2 L305,50 L308.8,48.8 Z"
              fill="#FFFFFF"
            />
            <circle cx="310" cy="50" r="1.4" fill="#FFFFFF" />

            {/* Translucent Center Droplet / Bubble (~46% width, near x=668, y=36, just above crest) */}
            <ellipse cx="668" cy="36" rx="4" ry="5.2" fill="#38BDF8" fillOpacity="0.45" />
            <ellipse cx="668" cy="36" rx="3" ry="3.8" fill="#BAE6FD" fillOpacity="0.3" />
            <circle cx="666.5" cy="34" r="1" fill="#FFFFFF" fillOpacity="0.9" />

            {/* Right Trough Sparkle (~71% width, near x=1028, y=52) */}
            <path
              d="M1028,47 L1029.2,50.8 L1033,52 L1029.2,53.2 L1028,57 L1026.8,53.2 L1023,52 L1026.8,50.8 Z"
              fill="#FFFFFF"
            />
            <circle cx="1028" cy="52" r="1.4" fill="#FFFFFF" />

            {/* Far Right Subtle Specular Glint (~88% width, near x=1270, y=39) */}
            <circle cx="1270" cy="39" r="1.2" fill="#FFFFFF" opacity="0.85" />
          </>
        )}
      </svg>
    </div>
  );
}

export function SectionWaveTop({ fill = '#FFFFFF', bg = '#F5FAFF' }: { fill?: string; bg?: string }) {
  return (
    <div className="w-full overflow-hidden leading-none select-none pointer-events-none" style={{ backgroundColor: bg }}>
      <svg
        viewBox="0 0 1440 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-8 sm:h-14"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0C360 50 1080 50 1440 0L1440 70L0 70Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function CtaWaveTop() {
  return (
    <div className="w-full overflow-hidden leading-none relative -mb-1 select-none pointer-events-none">
      <svg
        viewBox="0 0 1440 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-14 sm:h-20 lg:h-24"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="ctaWaveAqua" x1="0" y1="0" x2="1440" y2="100" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#0866D8" stopOpacity="0.6" />
            <stop offset="1" stopColor="#03234F" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Background Aqua Sheen */}
        <path
          d="M0 0C280 65 640 15 960 55C1200 80 1340 45 1440 30V100H0V0Z"
          fill="url(#ctaWaveAqua)"
        />
        {/* Navy Primary Wave */}
        <path
          d="M0 25C320 80 680 25 1020 65C1240 95 1360 55 1440 45V100H0V25Z"
          fill="#062B63"
        />
        {/* Deep Navy Baseline */}
        <path
          d="M0 45C260 90 580 40 920 75C1180 100 1320 65 1440 55V100H0V45Z"
          fill="#03234F"
        />
      </svg>
    </div>
  );
}
