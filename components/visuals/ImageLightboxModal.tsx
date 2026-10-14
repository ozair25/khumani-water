'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export interface LightboxImageData {
  src?: string;
  url?: string;
  alt: string;
  title?: string;
  description?: string;
  caption?: string;
  tag?: string;
  id?: string;
}

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images?: LightboxImageData[] | string[];
  currentIndex?: number;
  onNavigate?: (index: number) => void;
  image?: LightboxImageData | string | null;
}

interface ResolvedImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

function toItem(entry: LightboxImageData | string | null | undefined): ResolvedImage | null {
  if (!entry) return null;
  if (typeof entry === 'string') {
    return { src: entry, alt: 'Khumani Water Solution Image' };
  }
  const src = entry.src ?? entry.url;
  if (!src) return null;
  return {
    src,
    alt: entry.alt,
    title: entry.title,
    description: entry.description ?? entry.caption,
  };
}

export function ImageLightboxModal({
  isOpen,
  onClose,
  images = [],
  currentIndex = 0,
  onNavigate,
  image,
}: ImageLightboxModalProps) {
  // Handle keyboard navigation (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' && onNavigate && images.length > 1) {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        onNavigate(prevIndex);
      } else if (e.key === 'ArrowRight' && onNavigate && images.length > 1) {
        const nextIndex = (currentIndex + 1) % images.length;
        onNavigate(nextIndex);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onNavigate, currentIndex, images]);

  if (!isOpen) return null;

  const currentItem = toItem(image ?? images[currentIndex]);

  if (!currentItem) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image Preview"
    >
      <div
        className="relative max-w-5xl w-full max-h-[90vh] bg-[#001D38] border-2 border-[#1687C5] rounded-2xl overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-[#00264A] px-5 py-3 border-b border-[#1687C5]/40 flex items-center justify-between text-white">
          <span className="text-xs sm:text-sm font-heading font-bold text-[#8FD1F0] truncate">
            {currentItem.title || currentItem.alt || 'Khumani Water Solution Showcase'}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Image Display Area */}
        <div className="relative w-full h-[60vh] sm:h-[70vh] bg-black/50 flex items-center justify-center p-2">
          <Image
            src={currentItem.src}
            alt={currentItem.alt || 'Khumani Water Solution'}
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            referrerPolicy="no-referrer"
            className="object-contain"
            priority
          />

          {/* Navigation Controls if multiple images */}
          {images.length > 1 && onNavigate && (
            <>
              <button
                type="button"
                onClick={() => {
                  const prevIndex = (currentIndex - 1 + images.length) % images.length;
                  onNavigate(prevIndex);
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#006FB8] text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() => {
                  const nextIndex = (currentIndex + 1) % images.length;
                  onNavigate(nextIndex);
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-[#006FB8] text-white transition-colors cursor-pointer border border-white/20 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}
        </div>

        {/* Footer Caption */}
        {currentItem.description && (
          <div className="bg-[#00264A] p-4 border-t border-[#1687C5]/40 text-xs sm:text-sm text-[#BAE6FD]">
            {currentItem.description}
          </div>
        )}
      </div>
    </div>
  );
}
