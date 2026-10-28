import React from 'react';
import { projectData } from '../data/projectData';

export default function FloatingCta() {
  return (
    <aside aria-label="Aksi Cepat WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20ingin%20tanya%20informasi%20detail,%20promo,%20dan%20pricelist%20perumahan%20Aster%20Tropika%20at%20Kabil`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat Frans (${projectData.marketing.phone}) - Konsultasi WhatsApp Marketing`}
        className="pulse-floating-btn flex items-center gap-3 bg-tertiary-container text-on-tertiary hover:bg-primary-container hover:text-on-primary transition-all duration-300 px-4 py-3 rounded-full shadow-[0_10px_26px_rgba(37,211,102,0.45)] group border border-tertiary-fixed/30"
      >
        <div className="relative flex items-center justify-center">
          <span className="material-symbols-outlined text-[26px] text-tertiary-fixed group-hover:scale-110 transition-transform">
            chat
          </span>
          {/* Green Active Online Dot */}
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary-fixed opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-tertiary-fixed border-2 border-tertiary-container"></span>
          </span>
        </div>

        <div className="flex flex-col text-left pr-1">
          <span className="text-[11px] text-tertiary-fixed leading-tight font-bold flex items-center gap-1">
            <span>Online</span> • Konsultasi Cepat
          </span>
          <span className="text-xs sm:text-sm font-extrabold leading-tight text-white">
            Chat Frans ({projectData.marketing.phone})
          </span>
        </div>
      </a>
    </aside>
  );
}
