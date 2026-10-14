import React from 'react';

export function TopLeftLeaves() {
  return (
    <div className="absolute -top-3 -left-3 sm:top-0 sm:left-0 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none select-none z-20">
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        {/* Branch stem */}
        <path d="M-10 -10 Q40 40 90 60" stroke="#3F6212" strokeWidth="4" strokeLinecap="round" />
        
        {/* Leaf 1 */}
        <path d="M20 20 C45 5 75 10 90 35 C70 50 40 45 20 20 Z" fill="#65A30D" />
        <path d="M20 20 C40 25 65 30 90 35" stroke="#84CC16" strokeWidth="1.5" />
        
        {/* Leaf 2 */}
        <path d="M45 45 C75 35 110 45 125 75 C100 85 65 75 45 45 Z" fill="#4D7C0F" />
        <path d="M45 45 C75 55 100 65 125 75" stroke="#65A30D" strokeWidth="1.5" />

        {/* Small Leaf 3 */}
        <path d="M10 40 C25 60 45 75 60 70 C55 50 35 35 10 40 Z" fill="#84CC16" />
        
        {/* Water dewdrop */}
        <circle cx="70" cy="30" r="3" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  );
}

export function TopRightLeaves() {
  return (
    <div className="absolute -top-3 -right-3 sm:top-0 sm:right-0 w-24 sm:w-36 h-24 sm:h-36 pointer-events-none select-none z-20">
      <svg viewBox="0 0 160 160" fill="none" className="w-full h-full drop-shadow-md" xmlns="http://www.w3.org/2000/svg">
        {/* Branch stem */}
        <path d="M170 -10 Q120 40 70 60" stroke="#3F6212" strokeWidth="4" strokeLinecap="round" />
        
        {/* Leaf 1 */}
        <path d="M140 20 C115 5 85 10 70 35 C90 50 120 45 140 20 Z" fill="#65A30D" />
        <path d="M140 20 C120 25 95 30 70 35" stroke="#84CC16" strokeWidth="1.5" />
        
        {/* Leaf 2 */}
        <path d="M115 45 C85 35 50 45 35 75 C60 85 95 75 115 45 Z" fill="#4D7C0F" />
        <path d="M115 45 C85 55 60 65 35 75" stroke="#65A30D" strokeWidth="1.5" />

        {/* Small Leaf 3 */}
        <path d="M150 40 C135 60 115 75 100 70 C105 50 125 35 150 40 Z" fill="#84CC16" />
        
        {/* Water dewdrop */}
        <circle cx="90" cy="30" r="3" fill="#FFFFFF" opacity="0.8" />
      </svg>
    </div>
  );
}
