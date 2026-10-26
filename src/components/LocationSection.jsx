import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function LocationSection() {
  const [mapMode, setMapMode] = useState('embed'); // 'embed' or 'visual'
  const [copied, setCopied] = useState(false);

  const coords = projectData.locationCoordinates;

  const handleCopyCoords = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(coords.display);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-surface text-on-surface" id="lokasi">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">
              Konektivitas Unggul & Titik Presisi
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Lokasi Emas di Jantung Kabil, Batam
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant max-w-xl">
              Akses langsung ke kawasan industri Kabil, pelabuhan feri & roro Telaga Punggur, bandara internasional, sekolah, dan pusat komersial.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <div className="inline-flex items-center gap-2 text-primary bg-surface-container-low px-4 py-2 rounded-2xl shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-[18px] text-secondary">pin_drop</span>
              <span className="text-xs sm:text-sm font-bold font-mono">{coords.display}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Proximity Cards */}
          <div className="lg:col-span-6 space-y-4">
            {projectData.locations.map((loc, idx) => (
              <div
                key={idx}
                className="bg-surface-container-lowest p-5 rounded-2xl shadow-sm flex items-start gap-4 card-lift-hover border border-outline-variant/30"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-container text-secondary-fixed flex items-center justify-center shrink-0 shadow-sm">
                  <span className="material-symbols-outlined text-[24px]">
                    {loc.icon}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-bold text-sm sm:text-base text-primary">
                      {loc.title}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container text-[11px] font-bold">
                      {loc.time}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-on-surface-variant mt-1 leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Mega Project Highlight */}
            <div className="bg-gradient-to-r from-primary-container to-primary text-on-primary p-5 rounded-2xl flex items-center gap-4 card-lift-hover border border-secondary-fixed/20 shadow-md">
              <div className="w-12 h-12 rounded-xl bg-surface-container-lowest/10 flex items-center justify-center shrink-0 text-secondary-fixed">
                <span className="material-symbols-outlined text-[28px]">
                  connecting_airports
                </span>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-secondary-fixed font-bold block">
                  Potensi Mega Proyek Batam
                </span>
                <p className="text-xs sm:text-sm text-surface-container-high font-medium mt-0.5">
                  Berada di koridor rencana <strong>Landing Point Jembatan Batam – Bintan</strong> yang akan melipatgandakan nilai investasi hunian Anda.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Map & Coordinates Showcase */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-surface-container-lowest p-4 sm:p-5 rounded-3xl shadow-md border border-outline-variant/30">
              {/* Map Mode Tabs */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-1.5 p-1 rounded-xl bg-surface-container border border-outline-variant/30">
                  <button
                    onClick={() => setMapMode('embed')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      mapMode === 'embed'
                        ? 'bg-primary-container text-on-primary shadow-xs'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">map</span>
                    <span>Google Maps Langsung</span>
                  </button>
                  <button
                    onClick={() => setMapMode('visual')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                      mapMode === 'visual'
                        ? 'bg-primary-container text-on-primary shadow-xs'
                        : 'text-on-surface-variant hover:text-primary'
                    }`}
                  >
                    <span className="material-symbols-outlined text-[15px]">photo_library</span>
                    <span>Infografis Rute</span>
                  </button>
                </div>

                <button
                  onClick={handleCopyCoords}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold text-secondary hover:bg-surface-container transition-colors"
                  title="Salin koordinat ke clipboard"
                >
                  <span className="material-symbols-outlined text-[15px]">
                    {copied ? 'check_circle' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Tersalin!' : 'Salin Koordinat'}</span>
                </button>
              </div>

              {/* Map Container */}
              <div className="w-full h-80 sm:h-96 rounded-2xl overflow-hidden relative shadow-inner bg-surface-container-low border border-outline-variant/20">
                {mapMode === 'embed' ? (
                  <iframe
                    title="Peta Lokasi Aster Tropika Kabil"
                    src={coords.embedUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    allowFullScreen
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center overflow-hidden relative group"
                    style={{ backgroundImage: `url('/images/peta-lokasi.jpg')` }}
                  >
                    <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors"></div>
                    <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3.5 py-1.5 rounded-xl text-xs backdrop-blur-md flex items-center gap-1.5 shadow-md">
                      <span className="material-symbols-outlined text-secondary-fixed text-[16px]">
                        pin_drop
                      </span>
                      <span className="font-bold">Aster Tropika at Kabil</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-surface/90 text-primary px-3 py-1 rounded-lg text-xs font-semibold backdrop-blur-md">
                      Peta Konektivitas Kabil
                    </div>
                  </div>
                )}
              </div>

              {/* Coordinate Info Card & CTAs */}
              <div className="mt-4 p-4 rounded-2xl bg-surface-container-low space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-outline-variant/20 pb-3">
                  <div>
                    <span className="text-[11px] font-bold text-secondary uppercase tracking-wider block">
                      Titik Koordinat Proyek
                    </span>
                    <span className="text-sm sm:text-base font-extrabold text-primary font-mono">
                      {coords.display}
                    </span>
                  </div>
                  <div className="text-xs text-on-surface-variant">
                    Kabil, Kec. Nongsa, Kota Batam
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 pt-1">
                  <a
                    href={coords.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] px-4 py-2.5 bg-primary hover:bg-primary-container text-on-primary rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[17px] text-tertiary-fixed">
                      open_in_new
                    </span>
                    <span>Buka Google Maps</span>
                  </a>

                  <a
                    href={coords.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[150px] px-4 py-2.5 bg-secondary hover:bg-secondary-container text-on-secondary hover:text-on-secondary-container rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm flex items-center justify-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[17px]">
                      directions
                    </span>
                    <span>Petunjuk Arah Rute</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
