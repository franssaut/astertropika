import React from 'react';
import { projectData } from '../data/projectData';

export default function Specifications({ onOpenImage }) {
  const posterImage = '/images/spesifikasi-dan-mutu.webp';

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low text-on-surface" id="spesifikasi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-2">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            Standar Mutu Cipta Group
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            Spesifikasi & Mutu Bangunan
          </h2>
          <p className="text-xs sm:text-base text-on-surface-variant max-w-xl mt-2">
            Rincian resmi material dan standar konstruksi berkualitas untuk memastikan hunian Aster Tropika kokoh, nyaman, dan tahan lama.
          </p>
        </div>

        {/* 2-Column Showcase: Poster Visual + Interactive Specs Table */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          {/* Left Column: Official Poster Visual with Zoom */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div
              className="relative rounded-3xl overflow-hidden bg-primary shadow-xl group cursor-pointer border border-outline-variant/30 flex-1 flex flex-col"
              onClick={() => onOpenImage && onOpenImage(posterImage, 'Brosur Spesifikasi & Mutu Aster Tropika')}
            >
              <div className="relative w-full h-full min-h-[460px] flex items-center justify-center bg-primary-container overflow-hidden">
                <img
                  src={posterImage}
                  alt="Poster Spesifikasi dan Mutu Bangunan Aster Tropika Kabil Batam Cipta Group"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover sm:object-contain transition-transform duration-700 group-hover:scale-105"
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

                {/* Badge Top Left */}
                <div className="absolute top-4 left-4 bg-primary/90 text-secondary-fixed px-3 py-1.5 rounded-xl text-xs font-bold backdrop-blur-md shadow-md border border-secondary-fixed/20">
                  Dokumen Brosur Resmi
                </div>
              </div>

              {/* Bottom Card Summary */}
              <div className="p-4 bg-primary text-on-primary border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-secondary-fixed font-bold block">
                    Brosur Spesifikasi & Mutu
                  </span>
                  <span className="text-[11px] text-surface-container-high">
                    PT Buana Cipta Propertindo
                  </span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    onOpenImage && onOpenImage(posterImage, 'Brosur Spesifikasi & Mutu Aster Tropika');
                  }}
                  className="px-3 py-1.5 rounded-xl bg-secondary-container text-on-secondary-container text-xs font-bold hover:bg-secondary-fixed transition-colors flex items-center gap-1"
                >
                  <span className="material-symbols-outlined text-[16px]">fullscreen</span>
                  <span>Lihat Full</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Structured Specifications Table */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-surface-container-lowest rounded-3xl shadow-md overflow-hidden border border-outline-variant/30 flex-1 flex flex-col justify-between">
              {/* Table Header */}
              <div className="bg-primary text-on-primary px-6 sm:px-8 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-secondary-fixed text-[22px]">
                    checklist
                  </span>
                  <span className="text-sm sm:text-base font-bold">
                    Rincian Spesifikasi Material
                  </span>
                </div>
                <span className="text-[11px] text-secondary-fixed uppercase tracking-wider font-bold">
                  Standar Mutu SNI
                </span>
              </div>

              {/* Specs Rows */}
              <div className="divide-y divide-surface-container-high/60 overflow-y-auto max-h-[520px]">
                {projectData.specifications.map((row, idx) => (
                  <div
                    key={idx}
                    className={`grid grid-cols-1 sm:grid-cols-12 px-5 sm:px-7 py-3 transition-colors ${
                      idx % 2 === 0
                        ? 'bg-surface-container-low/30 hover:bg-surface-container-low'
                        : 'bg-surface-container-lowest hover:bg-surface-container-low/40'
                    }`}
                  >
                    <div className="sm:col-span-4 font-bold text-xs text-primary flex items-center gap-2">
                      <span className="material-symbols-outlined text-[17px] text-secondary shrink-0">
                        {row.icon || 'check_circle'}
                      </span>
                      <span>{row.item}</span>
                    </div>
                    <div className="sm:col-span-8 text-xs text-on-surface font-semibold mt-1 sm:mt-0 flex items-center">
                      <span className="text-on-surface-variant font-normal mr-2 hidden sm:inline">:</span>
                      <span>{row.spec}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Table Footer */}
              <div className="bg-surface-container-low p-4 sm:p-5 border-t border-surface-container flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-[11px] text-on-surface-variant text-center sm:text-left">
                  *Spesifikasi teknis mengacu pada dokumen resmi mutu Cipta Group Batam.
                </p>
                <a
                  href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20ingin%20konsultasi%20mengenai%20spesifikasi%20dan%20mutu%20bangunan%20Aster%20Tropika%20Kabil`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn inline-flex items-center gap-1.5 px-4 py-2 bg-primary text-on-primary hover:bg-primary-container text-xs font-bold rounded-xl transition-all shadow-sm shrink-0"
                >
                  <span className="material-symbols-outlined text-[16px] text-tertiary-fixed">
                    chat
                  </span>
                  <span>Tanya Spesifikasi ke Frans</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
