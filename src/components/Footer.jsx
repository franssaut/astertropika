import React from 'react';
import { projectData } from '../data/projectData';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container text-on-surface pt-16 pb-12 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-12 border-b border-outline-variant/30">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-outline-variant/30 shrink-0">
                <img
                  src="/images/logo-mark.png"
                  alt="Logo Aster Tropika"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight text-primary leading-tight">
                  ASTER TROPIKA
                </span>
                <span className="text-[10px] uppercase font-bold text-secondary tracking-widest leading-none mt-0.5">
                  At Kabil • Batam
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
              Hunian modern bernuansa tropis asri di kawasan berkembang Kabil, Batam. Persembahan developer terkemuka Cipta Group untuk gaya hidup keluarga yang berkualitas dan aman.
            </p>
            <div className="pt-1">
              <span className="inline-block px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
                Cipta Group Batam
              </span>
            </div>
          </div>

          {/* Developer Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm sm:text-base text-primary">
              Pengembang Resmi
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <p className="font-bold text-on-surface">
                {projectData.developer.name}
              </p>
              <p className="text-xs">({projectData.developer.group})</p>
              <p className="text-xs leading-relaxed">
                {projectData.developer.office}
              </p>
              <p className="text-xs pt-1 flex items-center gap-1.5 text-primary font-medium">
                <span className="material-symbols-outlined text-[16px]">domain</span>
                <span>{projectData.developer.reputation}</span>
              </p>
            </div>
          </div>

          {/* Marketing In-House Info */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm sm:text-base text-primary">
              Marketing In-House
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <p className="font-bold text-on-surface">
                {projectData.marketing.name}
              </p>
              <p className="text-xs">{projectData.marketing.title}</p>
              <div className="flex items-center gap-2 pt-1">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                  call
                </span>
                <a
                  href={`tel:${projectData.marketing.phoneRaw}`}
                  className="font-bold text-primary hover:text-secondary transition-colors"
                >
                  {projectData.marketing.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed-dim">
                  chat
                </span>
                <a
                  href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20info%20brosur%20Aster%20Tropika`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-secondary hover:underline"
                >
                  Chat WhatsApp Direct
                </a>
              </div>
              <div className="pt-2">
                <a
                  href={projectData.locationCoordinates.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-secondary hover:text-primary transition-colors font-medium"
                >
                  <span className="material-symbols-outlined text-[15px]">pin_drop</span>
                  <span>Titik Koordinat: {projectData.locationCoordinates.display}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm sm:text-base text-primary">
              Akses Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-on-surface-variant">
              <li>
                <a href="#beranda" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Beranda
                </a>
              </li>
              <li>
                <a href="#denah-ruang" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Denah Tata Ruang
                </a>
              </li>
              <li>
                <a href="#brosur-asli" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Brosur & Dokumen Asli
                </a>
              </li>
              <li>
                <a href="#fasilitas" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Fasilitas Kawasan
                </a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Lokasi Strategis Kabil
                </a>
              </li>
              <li>
                <a href="#spesifikasi" className="hover:text-primary transition-colors flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                  Spesifikasi & Mutu
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-on-surface-variant">
          <p className="text-center sm:text-left">
            © 2026 Aster Tropika at Kabil. Dikembangkan oleh PT Buana Cipta Propertindo (Cipta Group Batam).
          </p>
          <div className="flex items-center gap-4">
            <span>Direct Representative: Frans Rumah Batam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
