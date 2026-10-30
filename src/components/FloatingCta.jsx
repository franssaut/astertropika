import React from 'react';
import { projectData } from '../data/projectData';

export default function FloatingCta() {
  return (
    <aside aria-label="Aksi Cepat Kontak" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-2.5 sm:gap-3">
      {/* Floating Facebook Button */}
      {projectData.marketing.facebook && (
        <a
          href={projectData.marketing.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kunjungi Facebook Frans Saut"
          className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white p-2.5 sm:px-3.5 sm:py-2 rounded-full shadow-[0_8px_20px_rgba(24,119,242,0.45)] transition-all duration-300 hover:scale-105 group border border-white/20"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="12" fill="#1877F2" />
            <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
          </svg>
          <span className="hidden sm:inline text-xs font-bold pr-1">
            Facebook Frans
          </span>
        </a>
      )}

      {/* Floating WhatsApp Button */}
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
