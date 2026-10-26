import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function UnitCatalog({ onSelectKprUnit, onOpenFloorPlan }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredUnits =
    activeTab === 'all'
      ? projectData.units
      : projectData.units.filter((u) => u.id === activeTab);

  return (
    <section className="w-full py-16 lg:py-24 bg-surface text-on-surface" id="tipe-rumah">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-widest text-secondary font-bold">
              Pilihan Unit Hunian
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
              Pilihan Tipe Rumah
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant max-w-xl">
              Tersedia pilihan <strong>Tipe 30/60</strong> dan <strong>Tipe 36+/72</strong> dengan kualitas terbaik persembahan Cipta Group Batam.
            </p>
          </div>

          {/* Tab Selector */}
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-inner">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Semua Unit
            </button>
            <button
              onClick={() => setActiveTab('tipe-30-60')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tipe-30-60'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Tipe 30/60
            </button>
            <button
              onClick={() => setActiveTab('tipe-36-72')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'tipe-36-72'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Tipe 36+/72
            </button>
          </div>
        </div>

        {/* Units Cards */}
        <div className="space-y-12">
          {filteredUnits.map((unit) => (
            <div
              key={unit.id}
              className="bg-surface-container-lowest rounded-3xl shadow-md overflow-hidden card-lift-hover border border-outline-variant/30 transition-all duration-500"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Visual Fasad Side */}
                <div className="lg:col-span-5 relative bg-primary-container overflow-hidden group min-h-[320px] lg:min-h-full">
                  <img
                    src={unit.image}
                    alt={unit.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-xl bg-primary/90 text-secondary-fixed font-bold text-sm sm:text-base shadow-md backdrop-blur-md border border-secondary-fixed/20">
                      {unit.code}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-md p-4 rounded-2xl text-on-primary border border-white/10">
                    <p className="text-[11px] text-secondary-fixed uppercase tracking-wider font-semibold">
                      Spesifikasi Luas Lahan & Bangunan
                    </p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-extrabold text-sm sm:text-base text-on-primary">
                        LB: {unit.lb} m²
                      </span>
                      <span className="text-surface-container/40">|</span>
                      <span className="font-extrabold text-sm sm:text-base text-on-primary">
                        LT: {unit.lt} m² ({unit.dimension})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Details & Specs Side */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-surface-container">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-primary">
                          {unit.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-on-surface-variant mt-0.5">
                          {unit.subtitle}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${unit.badgeColor}`}
                      >
                        {unit.category}
                      </span>
                    </div>

                    {/* Features and Floorplan Row */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 my-6 items-center bg-surface-container-low p-4 sm:p-5 rounded-2xl">
                      {/* Features list */}
                      <div className="md:col-span-7 space-y-3">
                        <div className="flex items-center gap-3 text-xs sm:text-sm text-on-surface font-semibold">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              king_bed
                            </span>
                          </div>
                          <span>{unit.bedrooms} Kamar Tidur Nyaman</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs sm:text-sm text-on-surface font-semibold">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              directions_car
                            </span>
                          </div>
                          <span>{unit.carport} Carport Pribadi Mobil</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs sm:text-sm text-on-surface font-semibold">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              bathtub
                            </span>
                          </div>
                          <span>{unit.bathrooms} Toilet / Kamar Mandi Higienis</span>
                        </div>

                        {unit.hasKitchen ? (
                          <div className="flex items-center gap-3 text-xs sm:text-sm text-primary font-bold bg-secondary-container/20 p-2 rounded-xl border border-secondary/30">
                            <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center text-on-secondary-container shrink-0">
                              <span className="material-symbols-outlined text-[20px]">
                                soup_kitchen
                              </span>
                            </div>
                            <span>Sudah Ada Dapurnya (Siap Pakai di Dalam)</span>
                          </div>
                        ) : null}

                        <div className="flex items-center gap-3 text-xs sm:text-sm text-on-surface font-semibold">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              weekend
                            </span>
                          </div>
                          <span>Ruang Tamu & Ruang Keluarga Luas</span>
                        </div>

                        <div className="flex items-center gap-3 text-xs sm:text-sm text-on-surface font-semibold">
                          <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-secondary shrink-0">
                            <span className="material-symbols-outlined text-[20px]">
                              yard
                            </span>
                          </div>
                          <span>Taman Depan Asri & Sisa Pekarangan Belakang</span>
                        </div>
                      </div>

                      {/* Floor plan Poster Preview with Click to Zoom */}
                      <div className="md:col-span-5 flex flex-col items-center">
                        <div
                          className="w-full bg-surface-container-lowest p-2 rounded-2xl shadow-md group/plan overflow-hidden cursor-pointer border border-outline-variant/30 hover:border-secondary transition-all"
                          onClick={() => onOpenFloorPlan && onOpenFloorPlan(unit.posterImage, `Brosur Denah ${unit.code} Aster Tropika`)}
                        >
                          <div className="aspect-[3/4] rounded-xl bg-primary-container/10 flex flex-col items-center justify-center relative overflow-hidden">
                            <img
                              src={unit.posterImage}
                              alt={`Denah Arsitektur Resmi ${unit.name}`}
                              className="w-full h-full object-contain transition-transform duration-500 group-hover/plan:scale-106"
                            />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover/plan:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                              <span className="px-3 py-1.5 rounded-xl bg-surface-container-lowest/95 text-primary text-xs font-bold shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover/plan:translate-y-0 transition-transform">
                                <span className="material-symbols-outlined text-[16px] text-secondary">
                                  zoom_in
                                </span>
                                <span>Perbesar Denah</span>
                              </span>
                            </div>

                            <div className="absolute bottom-2 right-2 bg-primary/90 text-on-primary text-[10px] px-2 py-0.5 rounded font-bold shadow">
                              Denah {unit.code}
                            </div>
                          </div>
                        </div>
                        <span className="text-[11px] text-on-surface-variant font-medium mt-1.5">
                          *Klik gambar untuk perbesar denah
                        </span>
                      </div>
                    </div>

                    {/* Key Specs Pills */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                      {unit.keySpecs.map((spec, i) => (
                        <div key={i} className="bg-surface-container px-3 py-2 rounded-xl">
                          <span className="text-[11px] text-secondary font-bold block">
                            {spec.label}
                          </span>
                          <span className="text-on-surface font-semibold truncate block">
                            {spec.val}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions & Price Estimation */}
                  <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-on-surface-variant block uppercase font-medium">
                        Harga Mulai dari
                      </span>
                      <div className="text-xl sm:text-2xl font-extrabold text-primary">
                        {unit.priceFormatted}
                      </div>
                      <span className="text-xs text-secondary font-semibold">
                        Unit Terbatas • Cipta Group
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2.5">
                      <a
                        href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20tertarik%20dengan%20informasi%20lengkap%20dan%20harga%20Aster%20Tropika%20${encodeURIComponent(unit.code)}.%20Boleh%20minta%20info%20ketersediaan%20unit?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shimmer-btn w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow hover:shadow-md transform hover:-translate-y-0.5"
                      >
                        <span className="material-symbols-outlined text-[19px] text-tertiary-fixed">
                          chat
                        </span>
                        <span>Hubungi Frans ({unit.code})</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
