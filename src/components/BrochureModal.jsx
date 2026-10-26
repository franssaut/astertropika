import React, { useEffect, useState } from 'react';
import { projectData } from '../data/projectData';

export default function BrochureModal({ isOpen, onClose, initialIndex = 0, customImage = null, customTitle = null }) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    setCurrentIndex(initialIndex);
    setScale(1);
  }, [initialIndex, isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && !customImage) handleNext();
      if (e.key === 'ArrowLeft' && !customImage) handlePrev();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, currentIndex, customImage]);

  if (!isOpen) return null;

  const screens = projectData.brochureScreens;
  const currentItem = customImage
    ? { image: customImage, title: customTitle || 'Visualisasi Unit' }
    : screens[currentIndex];

  const handleNext = () => {
    setScale(1);
    setCurrentIndex((prev) => (prev + 1) % screens.length);
  };

  const handlePrev = () => {
    setScale(1);
    setCurrentIndex((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.25, 2.5));
  const zoomOut = () => setScale((s) => Math.max(s - 0.25, 0.75));
  const resetZoom = () => setScale(1);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-2 sm:p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl h-[90vh] bg-surface-container-lowest rounded-3xl overflow-hidden shadow-2xl flex flex-col border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="bg-primary text-on-primary px-4 sm:px-6 py-3.5 flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-3 truncate">
            <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
              image
            </span>
            <div className="truncate">
              <h3 className="font-bold text-xs sm:text-sm truncate">
                {currentItem.title}
              </h3>
              {!customImage && (
                <span className="text-[11px] text-surface-container-high block">
                  Halaman {currentIndex + 1} dari {screens.length} • {currentItem.category}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-surface-container-lowest/10 rounded-xl p-1">
              <button
                onClick={zoomOut}
                title="Perkecil"
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-on-primary text-xs"
              >
                <span className="material-symbols-outlined text-[18px]">remove</span>
              </button>
              <button
                onClick={resetZoom}
                title="Reset Zoom"
                className="px-2 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-xs font-mono"
              >
                {Math.round(scale * 100)}%
              </button>
              <button
                onClick={zoomIn}
                title="Perbesar"
                className="w-7 h-7 rounded-lg hover:bg-white/10 flex items-center justify-center text-on-primary text-xs"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
              </button>
            </div>

            <a
              href={currentItem.image}
              download
              className="w-8 h-8 rounded-xl bg-surface-container-lowest/15 hover:bg-white/25 flex items-center justify-center text-on-primary transition-colors"
              title="Unduh Gambar"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
            </a>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-xl bg-surface-container-lowest/15 hover:bg-red-500/80 flex items-center justify-center text-on-primary transition-colors"
              title="Tutup (ESC)"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Main Image Display Area */}
        <div className="flex-1 bg-surface-container-high/40 overflow-auto flex items-center justify-center p-2 sm:p-6 relative select-none">
          <div
            className="transition-transform duration-200 ease-out flex items-center justify-center"
            style={{ transform: `scale(${scale})` }}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="max-h-[72vh] max-w-full object-contain rounded-xl shadow-lg"
            />
          </div>

          {/* Prev/Next buttons on lightbox */}
          {!customImage && screens.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-on-primary shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                title="Halaman Sebelumnya"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_left</span>
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary/80 hover:bg-primary text-on-primary shadow-lg flex items-center justify-center transition-transform hover:scale-110"
                title="Halaman Selanjutnya"
              >
                <span className="material-symbols-outlined text-[24px]">chevron_right</span>
              </button>
            </>
          )}
        </div>

        {/* Bottom Bar Thumbnail Bar */}
        {!customImage && (
          <div className="bg-surface-container-lowest p-2.5 border-t border-outline-variant/30 flex items-center justify-center gap-2 overflow-x-auto shrink-0">
            {screens.map((screen, idx) => (
              <button
                key={screen.id}
                onClick={() => {
                  setScale(1);
                  setCurrentIndex(idx);
                }}
                className={`w-14 h-11 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${
                  currentIndex === idx
                    ? 'border-secondary shadow-md scale-105'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
