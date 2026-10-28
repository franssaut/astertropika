import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function DenahRuangSection({ onOpenImage }) {
  const [activeView, setActiveView] = useState('both'); // 'both', 'tipe30', 'tipe36'

  const denahList = [
    {
      id: 'tipe-30',
      title: 'TIPE 30/60',
      subtitle: 'Standar Tropis Mewah',
      image: '/images/denah-tipe-30.webp',
      price: 'Rp 295.000.000',
      estimatedPrice: 295000000,
      code: 'Tipe 30/60',
      kitchenNotice: 'Sisa pekarangan belakang dapat dimanfaatkan untuk penambahan dapur sesuai selera.',
      roomList: [
        { name: 'Kamar Tidur Utama', desc: 'Sirkulasi Udara & Jendela Alami', icon: 'king_bed' },
        { name: 'Kamar Tidur 2', desc: 'Kamar Anak / Tamu Nyaman', icon: 'single_bed' },
        { name: 'Ruang Tamu & Keluarga', desc: 'Area Kumpul Lapang', icon: 'weekend' },
        { name: 'Kamar Mandi / Toilet', desc: 'Sanitasi Bersih & Higienis', icon: 'bathtub' },
        { name: 'Carport Mobil', desc: 'Parkir Kendaraan Pribadi', icon: 'directions_car' },
        { name: 'Taman Depan & Belakang', desc: 'Area Hijau & Sisa Lahan', icon: 'yard' }
      ],
      highlights: [
        'Cash Bertahap s/d 60x (0% Bunga)',
        'Syarat Cukup KTP Saja',
        '2 Kamar Tidur',
        '1 Carport Mobil',
        '1 Toilet Higienis'
      ],
      tag: 'Pilihan Favorit Keluarga Muda',
      tagColor: 'bg-tertiary-container text-tertiary-fixed',
      hasKitchenNow: false
    },
    {
      id: 'tipe-36',
      title: 'TIPE 36+/72',
      subtitle: 'Ekstra Luas & Sudah Ada Dapurnya',
      image: '/images/denah-tipe-36.webp',
      price: 'Rp 485.000.000',
      estimatedPrice: 485000000,
      code: 'Tipe 36+/72',
      kitchenNotice: 'Sudah dilengkapi area dapur terpadu di dalam rumah, siap langsung digunakan untuk memasak tanpa perlu renovasi tambahan!',
      roomList: [
        { name: 'Dapur Terpadu (Sudah Ada)', desc: 'Siap Pakai untuk Memasak', icon: 'soup_kitchen', isSpecial: true },
        { name: 'Kamar Tidur Utama', desc: 'Lebih Luas & Nyaman', icon: 'king_bed' },
        { name: 'Kamar Tidur 2', desc: 'Kamar Tidur Lega', icon: 'single_bed' },
        { name: 'Ruang Tamu', desc: 'Ruang Tamu Terpisah', icon: 'weekend' },
        { name: 'Ruang Makan', desc: 'Area Santap Keluarga Terpisah', icon: 'dining' },
        { name: 'Kamar Mandi / Toilet', desc: 'Sanitasi Modern Higienis', icon: 'bathtub' },
        { name: 'Carport Mobil', desc: 'Parkir Kendaraan Mobil', icon: 'directions_car' },
        { name: 'Taman Depan & Belakang', desc: 'Ruang Terbuka Hijau & Asri', icon: 'yard' }
      ],
      highlights: [
        'SUDAH ADA DAPURNYA',
        'Cash Bertahap s/d 60x (0% Bunga)',
        'Syarat Cukup KTP Saja',
        '2 Kamar Tidur',
        'Ruang Tamu & Makan Lebih Lega'
      ],
      tag: 'Sudah Ada Dapur & Lebih Luas',
      tagColor: 'bg-secondary-container text-on-secondary-container',
      hasKitchenNow: true
    }
  ];

  const displayedDenah =
    activeView === 'both'
      ? denahList
      : denahList.filter((d) => d.id === activeView);

  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low text-on-surface" id="denah-ruang">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container text-xs font-bold uppercase tracking-wider mb-2.5">
            <span className="material-symbols-outlined text-[17px]">architecture</span>
            Brosur Denah Resmi Aster Tropika
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            Denah Tata Ruang: Tipe 30/60 & Tipe 36+/72 Aster Tropika Kabil
          </h2>
          <p className="text-xs sm:text-base text-on-surface-variant max-w-xl mt-2">
            Perbandingan tata letak ruangan untuk hunian keluarga ideal. Khusus <strong>Tipe 36+/72 sudah ada dapurnya</strong> di dalam rumah siap pakai.
          </p>

          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-2xl bg-surface-container border border-outline-variant/30 shadow-inner mt-6">
            <button
              onClick={() => setActiveView('both')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'both'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Bandingkan Keduanya (Side-by-Side)
            </button>
            <button
              onClick={() => setActiveView('tipe-30')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'tipe-30'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Denah Tipe 30/60
            </button>
            <button
              onClick={() => setActiveView('tipe-36')}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeView === 'tipe-36'
                  ? 'bg-primary-container text-on-primary shadow-sm'
                  : 'text-on-surface-variant hover:text-primary'
              }`}
            >
              Denah Tipe 36+/72 (Ada Dapur)
            </button>
          </div>
        </div>

        {/* 2-Column Side-by-Side Posters Grid */}
        <div className={`grid grid-cols-1 ${activeView === 'both' ? 'lg:grid-cols-2' : 'max-w-3xl mx-auto'} gap-8 lg:gap-10 items-stretch`}>
          {displayedDenah.map((denah) => (
            <div
              key={denah.id}
              className={`bg-surface-container-lowest rounded-3xl overflow-hidden shadow-xl border flex flex-col justify-between card-lift-hover ${
                denah.hasKitchenNow ? 'border-secondary/40 ring-1 ring-secondary/20' : 'border-outline-variant/30'
              }`}
            >
              {/* Poster Image Container */}
              <div className="relative bg-primary-container group cursor-pointer overflow-hidden">
                <div
                  className="w-full aspect-[3/4] sm:aspect-[4/5] flex items-center justify-center p-2 bg-[#091e36]"
                  onClick={() => onOpenImage && onOpenImage(denah.image, `Brosur Denah ${denah.title}`)}
                >
                  <img
                    src={denah.image}
                    alt={`Brosur Denah Tata Ruang ${denah.title} Aster Tropika Kabil Batam Cipta Group - Harga ${denah.price}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>

                {/* Hover overlay hint */}
                <div
                  className="absolute inset-0 bg-primary/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]"
                  onClick={() => onOpenImage && onOpenImage(denah.image, `Brosur Denah ${denah.title}`)}
                >
                  <div className="bg-surface-container-lowest/95 backdrop-blur-md px-4 py-2.5 rounded-2xl text-primary font-bold text-xs sm:text-sm shadow-2xl flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span className="material-symbols-outlined text-[20px] text-secondary">
                      zoom_in
                    </span>
                    <span>Klik untuk Perbesar Gambar Penuh</span>
                  </div>
                </div>

                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-xl font-bold text-xs shadow-md backdrop-blur-md uppercase tracking-wider ${denah.tagColor}`}>
                    {denah.tag}
                  </span>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 text-secondary-fixed px-3 py-1 rounded-xl font-bold text-xs shadow-md backdrop-blur-md border border-secondary-fixed/20">
                  {denah.title}
                </div>
              </div>

              {/* Information & Breakdown Area */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-surface-container">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-primary">
                        {denah.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-secondary mt-0.5">
                        {denah.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[11px] text-on-surface-variant block uppercase font-medium">
                        Mulai dari
                      </span>
                      <span className="text-lg sm:text-xl font-extrabold text-primary">
                        {denah.price}
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bar */}
                  <div className="flex flex-wrap items-center gap-2 py-4">
                    {denah.highlights.map((h, i) => (
                      <span
                        key={i}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border ${
                          h === 'SUDAH ADA DAPURNYA'
                            ? 'bg-secondary-container text-on-secondary-container border-secondary font-extrabold shadow-sm'
                            : 'bg-surface-container-low text-primary border-outline-variant/30'
                        }`}
                      >
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                          {h === 'SUDAH ADA DAPURNYA' ? 'soup_kitchen' : 'check_circle'}
                        </span>
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>

                  {/* Special Kitchen Notice Banner */}
                  {denah.hasKitchenNow ? (
                    <div className="p-3.5 rounded-2xl bg-secondary-container/30 border border-secondary/30 flex items-start gap-2.5 mb-4">
                      <span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">
                        restaurant
                      </span>
                      <div>
                        <span className="text-xs font-extrabold text-primary block">
                          Sudah Ada Dapurnya!
                        </span>
                        <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                          {denah.kitchenNotice}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3.5 rounded-2xl bg-surface-container-low border border-surface-container flex items-start gap-2.5 mb-4">
                      <span className="material-symbols-outlined text-secondary text-[20px] shrink-0 mt-0.5">
                        yard
                      </span>
                      <div>
                        <span className="text-xs font-bold text-primary block">
                          Sisa Lahan Belakang
                        </span>
                        <p className="text-xs text-on-surface-variant mt-0.5 leading-relaxed">
                          {denah.kitchenNotice}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Room List without numeric sizes */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                      Daftar Pembagian Ruangan:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {denah.roomList.map((room, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-2.5 p-2.5 rounded-xl border transition-colors ${
                            room.isSpecial
                              ? 'bg-secondary-container/20 border-secondary/40 text-primary font-bold'
                              : 'bg-surface-container-low border-surface-container'
                          }`}
                        >
                          <span className={`material-symbols-outlined text-[18px] shrink-0 ${room.isSpecial ? 'text-secondary font-bold' : 'text-secondary'}`}>
                            {room.icon}
                          </span>
                          <div className="truncate">
                            <span className="font-bold text-primary block truncate">
                              {room.name}
                            </span>
                            <span className="text-[11px] text-on-surface-variant truncate block">
                              {room.desc}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="button"
                    onClick={() => onOpenImage && onOpenImage(denah.image, `Brosur Denah ${denah.title}`)}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-surface-container hover:bg-surface-variant text-primary px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-colors"
                  >
                    <span className="material-symbols-outlined text-[18px] text-secondary">
                      fullscreen
                    </span>
                    <span>Lihat Denah Penuh</span>
                  </button>

                  <a
                    href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20tertarik%20dengan%20denah%20ruang%20Aster%20Tropika%20${encodeURIComponent(denah.title)}.%20Boleh%20minta%20info%20blok%20unit%20tersedia?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shimmer-btn w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-primary text-on-primary hover:bg-primary-container px-4 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow hover:shadow-md"
                  >
                    <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                      chat
                    </span>
                    <span>Konsultasi Unit {denah.title}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
