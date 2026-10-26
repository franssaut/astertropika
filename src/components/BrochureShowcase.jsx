import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function BrochureShowcase({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeScreen = projectData.brochureScreens[activeTab];

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low text-on-surface" id="brosur-asli">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container text-xs font-bold uppercase tracking-wider">
              <span className="material-symbols-outlined text-[16px]">menu_book</span>
              Dokumen Resmi & Brosur
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Galeri Brosur Asli Aster Tropika
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant max-w-2xl">
              Lihat langsung lembar visual resmi Cipta Group, mulai dari fasad artistik, siteplan perumahan, denah tata letak, hingga spesifikasi material SNI.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20minta%20dikirimkan%20file%20PDF%20lengkap%20brosur%20Aster%20Tropika%20Kabil`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                download
              </span>
              <span>Minta PDF Brosur via WA</span>
            </a>
          </div>
        </div>

        {/* Tab Buttons for the 5 screens */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 no-scrollbar">
          {projectData.brochureScreens.map((screen, idx) => (
            <button
              key={screen.id}
              onClick={() => setActiveTab(idx)}
              className={`shrink-0 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === idx
                  ? 'bg-primary-container text-on-primary shadow-md scale-102 border-2 border-secondary-fixed/30'
                  : 'bg-surface-container-lowest text-on-surface-variant hover:text-primary hover:bg-surface-container'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-surface-container text-primary text-[11px] flex items-center justify-center font-bold">
                {idx + 1}
              </span>
              <span>{screen.category}</span>
            </button>
          ))}
        </div>

        {/* Active Screen Interactive Presentation */}
        <div className="bg-surface-container-lowest rounded-3xl p-4 sm:p-8 shadow-lg border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Preview with Zoom Trigger */}
            <div className="lg:col-span-7">
              <div
                className="relative rounded-2xl overflow-hidden bg-surface-container-low group cursor-pointer border border-outline-variant/20 shadow-inner"
                onClick={() => onOpenModal && onOpenModal(activeTab)}
              >
                <div className="aspect-[4/3] sm:aspect-[16/10] w-full flex items-center justify-center bg-black/5">
                  <img
                    src={activeScreen.image}
                    alt={activeScreen.title}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-103"
                  />
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-primary/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-surface-container-lowest/90 backdrop-blur-md px-4 py-2 rounded-xl text-primary font-bold text-xs sm:text-sm shadow-xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      zoom_in
                    </span>
                    <span>Klik untuk Perbesar Resolusi Penuh</span>
                  </div>
                </div>

                {/* Badge overlay */}
                <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-md text-on-primary px-3 py-1 rounded-lg text-xs font-semibold">
                  Halaman {activeTab + 1} dari 5
                </div>
              </div>
            </div>

            {/* Screen Info & Context */}
            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary font-bold">
                  Screen ID: {activeScreen.stitchId}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mt-1">
                  {activeScreen.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-secondary mt-0.5">
                  {activeScreen.subtitle}
                </p>
              </div>

              <p className="text-sm text-on-surface-variant leading-relaxed">
                {activeScreen.description}
              </p>

              <div className="p-4 rounded-2xl bg-surface-container-low space-y-2">
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Nama File Asli:</span>
                  <span className="font-mono text-primary font-medium text-[11px] truncate max-w-[200px]">
                    {activeScreen.originalName}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Developer:</span>
                  <span className="font-semibold text-primary">{projectData.developer.name}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-on-surface-variant">
                  <span>Konsultan Resmi:</span>
                  <span className="font-semibold text-secondary">{projectData.marketing.name}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch gap-3 pt-2">
                <button
                  onClick={() => onOpenModal && onOpenModal(activeTab)}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all"
                >
                  <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                    fullscreen
                  </span>
                  <span>Buka Gambar Penuh</span>
                </button>

                <a
                  href={activeScreen.image}
                  download={activeScreen.originalName}
                  className="inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-container-high text-primary px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm transition-colors"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    file_download
                  </span>
                  <span>Simpan Gambar</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mt-6">
          {projectData.brochureScreens.map((screen, idx) => (
            <div
              key={screen.id}
              onClick={() => setActiveTab(idx)}
              className={`cursor-pointer rounded-xl overflow-hidden p-1.5 transition-all bg-surface-container-lowest border-2 ${
                activeTab === idx
                  ? 'border-secondary shadow-md scale-102 ring-2 ring-secondary/20'
                  : 'border-transparent hover:border-outline-variant/60 opacity-70 hover:opacity-100'
              }`}
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-surface-container-low flex items-center justify-center">
                <img
                  src={screen.image}
                  alt={screen.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-1.5 text-center">
                <div className="text-[11px] font-bold text-primary truncate">
                  {screen.category}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
