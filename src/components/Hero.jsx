import React from 'react';
import { projectData } from '../data/projectData';

export default function Hero({ onOpenBrochure }) {
  return (
    <section className="relative w-full overflow-hidden bg-primary text-on-primary pt-24 sm:pt-28" id="beranda">
      {/* Ambient Backdrop Image & Gradients */}
      <div className="absolute inset-0 z-0">
        <div
          role="presentation"
          style={{ backgroundImage: `url('/images/hero-estate.webp')` }}
          className="w-full h-full bg-cover bg-center opacity-35 mix-blend-luminosity scale-105 filter blur-[1px] transition-transform duration-1000 ease-out hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/85 to-primary/45"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-10 w-80 h-80 rounded-full bg-on-tertiary-container/15 blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-8 pb-16 lg:pt-14 lg:pb-24">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white text-primary text-xs font-extrabold shadow-md">
            <img src="/images/logo-mark.webp" alt="Logo Aster Tropika" width="16" height="16" className="w-4 h-4 object-contain" />
            <span>ASTER TROPIKA</span>
          </span>
          {projectData.marketing.facebook && (
            <a
              href={projectData.marketing.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#1877F2] hover:bg-[#166fe5] text-white text-xs font-extrabold shadow-md transition-all hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="12" fill="#1877F2" />
                <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
              </svg>
              <span>Facebook Frans Saut</span>
            </a>
          )}
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-extrabold uppercase tracking-wider shadow-md">
            <span className="material-symbols-outlined text-[16px]">
              local_fire_department
            </span>
            Cash Bertahap 60x Tanpa Bunga • Syarat KTP Saja
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary-fixed text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-secondary-fixed/20">
            <span className="material-symbols-outlined text-[15px] text-secondary-fixed">
              verified
            </span>
            Official Project by Cipta Group
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest/10 text-surface-container-lowest text-xs font-semibold uppercase tracking-wider backdrop-blur-md border border-white/10">
            <span className="material-symbols-outlined text-[15px] text-tertiary-fixed">
              location_on
            </span>
            Kabil, Nongsa - Batam
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="px-3.5 py-1.5 rounded-lg bg-primary-container text-secondary-fixed text-xs sm:text-sm font-bold tracking-wide border border-secondary-fixed/20 shadow-sm">
                TERSEDIA TIPE 30/60 • TIPE 36+/72
              </span>
              <span className="px-3 py-1 rounded-lg bg-tertiary-container text-tertiary-fixed text-xs font-extrabold tracking-wide">
                BUNGA 0% • TANPA PROSES BANK
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-on-primary uppercase leading-tight">
              ASTER TROPIKA <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-fixed via-secondary-container to-surface-bright">
                AT KABIL BATAM
              </span>
            </h1>

            <p className="text-xs sm:text-sm font-bold text-secondary-fixed tracking-widest uppercase">
              Hunian Modern Tropis Eksklusif • Cipta Group Batam
            </p>

            <p className="text-base sm:text-lg text-inverse-primary/95 max-w-2xl leading-relaxed">
              Punya rumah eksklusif di Kabil tanpa proses bank yang ribet? <strong>Bisa banget!</strong> Tersedia kemudahan <strong>Cash Bertahap s/d 60x Tanpa Bunga</strong> langsung ke pengembang, proses mudah pasti disetujui, dan <strong>syarat berkas cukup KTP saja</strong>.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20tertarik%20dengan%20informasi%20lengkap%20dan%20promo%20perumahan%20Aster%20Tropika%20Kabil`}
                target="_blank"
                rel="noopener noreferrer"
                className="shimmer-btn inline-flex items-center justify-center gap-2.5 bg-tertiary-container hover:bg-on-tertiary-container text-on-tertiary font-bold text-sm sm:text-base px-6 py-4 rounded-xl shadow-[0_8px_24px_-2px_rgba(37,211,102,0.35)] transition-all duration-300 transform hover:-translate-y-0.5 group"
              >
                <span className="material-symbols-outlined text-[22px] text-tertiary-fixed group-hover:scale-110 transition-transform">
                  chat
                </span>
                <span>Hubungi Frans ({projectData.marketing.phone})</span>
              </a>

              {projectData.marketing.facebook && (
                <a
                  href={projectData.marketing.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#1877F2] hover:bg-[#166fe5] text-white font-bold text-sm sm:text-base px-5 py-4 rounded-xl shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                    <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
                  </svg>
                  <span>Facebook Frans</span>
                </a>
              )}

              <a
                href="#denah-ruang"
                className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest/15 hover:bg-surface-container-lowest/25 text-on-primary font-semibold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition-all duration-200 border border-white/10 hover:-translate-y-0.5"
              >
                <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                  architecture
                </span>
                <span>Lihat Denah Ruang</span>
              </a>
            </div>

            {/* Developer Credibility Indicators */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-6 pt-3 text-surface-container-high/90 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                  domain
                </span>
                <span className="font-semibold">{projectData.developer.name}</span>
              </div>
              <span className="text-surface-container/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                  verified_user
                </span>
                <span className="font-medium">Member of Cipta Group Batam</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative bg-surface-container-lowest p-3 rounded-3xl shadow-2xl card-lift-hover border border-outline-variant/30">
              <div
                className="overflow-hidden rounded-2xl aspect-[3/4] relative group cursor-pointer bg-[#0a1f35] flex items-center justify-center p-1"
                onClick={() => onOpenBrochure && onOpenBrochure(0)}
              >
                <img
                  src="/images/konsep-hunian-tropis.webp"
                  alt="Aster Tropika Kabil Batam - Rumah Modern Tropis Cipta Group"
                  width="1528"
                  height="2048"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl text-primary font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      zoom_in
                    </span>
                    <span>Klik untuk Perbesar Brosur</span>
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-primary/90 backdrop-blur-md p-3.5 rounded-xl text-on-primary shadow-lg border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-secondary-fixed font-bold block">
                      Aster Tropika Residence
                    </span>
                    <h2 className="text-xs sm:text-sm font-bold text-white leading-tight">
                      Hunian Modern Tropis di Kabil
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 bg-secondary-container text-on-secondary-container text-[11px] rounded-lg font-bold">
                    Cipta Group
                  </span>
                </div>
              </div>

              {/* Floating Badge Overlap */}
              <div className="absolute -top-3.5 -left-3.5 bg-primary-container text-on-primary px-3.5 py-1.5 rounded-xl shadow-xl flex items-center gap-2 border border-secondary-fixed/30">
                <span className="material-symbols-outlined text-secondary-fixed text-[18px]">
                  villa
                </span>
                <span className="text-xs font-bold tracking-wide">Konsep Hunian Tropis</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Specification Ticker Bar */}
      <div className="w-full bg-primary-container text-on-primary py-4 px-4 sm:px-6 relative z-10 border-t border-primary/40">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-secondary-fixed">
            <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
              payments
            </span>
            <span className="text-on-primary font-bold">Cash Bertahap 60x (0% Bunga)</span>
          </div>
          <div className="flex items-center gap-2 text-secondary-fixed">
            <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
              badge
            </span>
            <span className="text-on-primary font-bold">Syarat Berkas KTP Saja</span>
          </div>
          {projectData.highlights.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-secondary-fixed">
              <span className="material-symbols-outlined text-[19px]">
                {item.icon}
              </span>
              <span className="text-on-primary font-medium">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
