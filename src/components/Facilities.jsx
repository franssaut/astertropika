import React from 'react';
import { projectData } from '../data/projectData';

export default function Facilities() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface-container-low text-on-surface" id="fasilitas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            Fasilitas Kawasan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight mt-1">
            Kenyamanan & Ketenangan Komunitas Eksklusif
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-2">
            Nikmati hidup berkualitas bersama keluarga dengan sarana terpadu yang dirancang untuk keamanan, kesehatan, dan interaksi sosial yang harmonis.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main One Gate System Feature Card */}
          <div className="lg:col-span-7 bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm card-lift-hover flex flex-col justify-between group border border-outline-variant/30">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-container">
              <img
                src="/images/one-gate.jpg"
                alt="One Gate System Aster Tropika Kabil Batam"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              />
              <div className="absolute top-4 left-4 bg-primary/90 text-secondary-fixed px-3.5 py-1.5 rounded-xl text-xs font-bold tracking-wide shadow-md backdrop-blur-md">
                SECURITY 24 JAM
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-secondary mb-2">
                <span className="material-symbols-outlined text-[24px]">vpn_key</span>
                <h3 className="text-xl sm:text-2xl font-bold text-primary">
                  One Gate System & Pos Jaga
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Akses pintu masuk tunggal yang dikontrol penuh oleh personel keamanan profesional dan barrier gate otomatis. Menjamin ketenangan anak-anak saat bermain di lingkungan perumahan serta privasi setiap keluarga penghuni.
              </p>
            </div>
          </div>

          {/* Side Cards: Park & Infrastructure */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Park Card */}
            <div className="bg-surface-container-lowest rounded-3xl overflow-hidden shadow-sm card-lift-hover p-6 flex flex-col justify-between group border border-outline-variant/30">
              <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-4 relative bg-primary-container">
                <img
                  src="/images/taman.jpg"
                  alt="Taman Tematik dan Jogging Track Aster Tropika Kabil"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                />
                <span className="absolute bottom-2.5 right-2.5 px-3 py-1 bg-surface/90 text-primary text-xs font-bold rounded-lg backdrop-blur-md shadow-sm">
                  Taman Hijau & Jogging Track
                </span>
              </div>
              <h4 className="text-lg font-bold text-primary mb-1">
                Taman Tematik & Ruang Terbuka Hijau
              </h4>
              <p className="text-xs sm:text-sm text-on-surface-variant">
                Taman komunal dengan tanaman peneduh tropis dan area duduk santai untuk berolahraga pagi maupun melepas penat sore hari bersama tetangga.
              </p>
            </div>

            {/* Infrastructure Specs Card */}
            <div className="bg-primary-container text-on-primary rounded-3xl p-6 sm:p-7 shadow-sm card-lift-hover border border-secondary-fixed/20">
              <h4 className="text-base sm:text-lg font-bold text-secondary-fixed mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-[22px]">engineering</span>
                <span>Infrastruktur Berstandar Cipta Group</span>
              </h4>
              <ul className="space-y-3 text-xs sm:text-sm text-surface-container-high">
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>Jalan ROW aspal lebar, leluasa untuk papasan 2 mobil</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>Sistem saluran drainase tertutup rapi dan bebas banjir</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="material-symbols-outlined text-tertiary-fixed text-[18px] shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <span>Penerangan Jalan Umum (PJU) hemat energi dan terang</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
