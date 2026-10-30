import React, { useState, useEffect } from 'react';
import { projectData } from '../data/projectData';

export default function Navbar({ onOpenBrochure }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(isScrolled);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Denah Ruang', href: '#denah-ruang' },
    { name: 'Cash Bertahap 60x', href: '#cash-bertahap' },
    { name: 'Brosur Asli', href: '#brosur-asli' },
    { name: 'Fasilitas', href: '#fasilitas' },
    { name: 'Lokasi', href: '#lokasi' },
    { name: 'Spesifikasi', href: '#spesifikasi' },
    { name: 'Kontak', href: '#kontak' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300">
      {/* Absolute Top Bar - Official Contact & Facebook */}
      <div className="bg-[#0b1e33] text-white/90 text-xs py-1 px-4 sm:px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs truncate">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse"></span>
            <span className="truncate">Konsultan Resmi Cipta Group: <strong>{projectData.marketing.name}</strong></span>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 text-[11px] sm:text-xs">
            {projectData.marketing.facebook && (
              <a
                href={projectData.marketing.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-white hover:text-secondary-fixed transition-colors bg-[#1877F2] hover:bg-[#166fe5] px-2.5 py-0.5 rounded-full shadow-xs"
              >
                <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
                </svg>
                <span>Facebook Frans</span>
              </a>
            )}
            <span className="text-white/20 hidden sm:inline">•</span>
            <a
              href={`tel:${projectData.marketing.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-1 text-surface-container-highest hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-[13px] text-tertiary-fixed">call</span>
              <span>{projectData.marketing.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`${
          scrolled
            ? 'bg-surface/95 backdrop-blur-xl shadow-md py-2.5'
            : 'bg-surface/90 backdrop-blur-md py-3 sm:py-3.5'
        } transition-all duration-300`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#beranda" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-outline-variant/30 group-hover:scale-105 transition-transform shrink-0">
              <img
                src="/images/logo-mark.webp"
                alt="Logo Aster Tropika at Kabil"
                width="32"
                height="32"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg text-primary tracking-tight leading-tight group-hover:text-primary-container transition-colors">
                ASTER TROPIKA
              </span>
              <span className="text-[10px] sm:text-[11px] font-semibold text-secondary tracking-widest uppercase leading-none mt-0.5">
                at Kabil • Cipta Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs lg:text-[13px] font-semibold text-on-surface-variant hover:text-primary hover:bg-surface-container px-2.5 py-1.5 rounded-lg transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action & Direct Marketing */}
          <div className="flex items-center gap-2 sm:gap-3">
            {projectData.marketing.facebook && (
              <a
                href={projectData.marketing.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Frans Saut"
                className="inline-flex items-center gap-1.5 bg-[#1877F2] hover:bg-[#166fe5] text-white px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-xl shadow-xs text-xs font-bold transition-all transform hover:-translate-y-0.5 shrink-0"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="12" fill="#1877F2" />
                  <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </a>
            )}

            <a
              href={`tel:${projectData.marketing.phoneRaw}`}
              className="hidden lg:flex flex-col text-right group"
            >
              <span className="text-[11px] text-on-surface-variant leading-tight">
                Marketing In-House
              </span>
              <span className="text-xs font-bold text-primary group-hover:text-secondary transition-colors">
                {projectData.marketing.phone}
              </span>
            </a>

            <a
              href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20tertarik%20dengan%20informasi%20perumahan%20Aster%20Tropika%20at%20Kabil%20Cipta%20Group`}
              target="_blank"
              rel="noopener noreferrer"
              className="shimmer-btn inline-flex items-center gap-1.5 bg-primary text-on-primary hover:bg-primary-container px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-sm text-xs font-semibold transition-all transform hover:-translate-y-0.5 shrink-0"
            >
              <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                chat
              </span>
              <span className="hidden sm:inline">Hubungi Frans</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="xl:hidden w-10 h-10 rounded-xl bg-surface-container flex items-center justify-center text-primary hover:bg-surface-container-high transition-colors"
            >
              <span className="material-symbols-outlined text-[24px]">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-surface-container-lowest/95 backdrop-blur-2xl border-t border-outline-variant/30 px-6 py-5 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold text-on-surface hover:text-secondary hover:bg-surface-container px-3 py-2.5 rounded-xl transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="material-symbols-outlined text-[18px] text-outline-variant">
                  chevron_right
                </span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-surface-container flex flex-col gap-2">
              <div className="text-xs text-on-surface-variant flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] text-secondary">
                  support_agent
                </span>
                <span>Konsultan: <strong>{projectData.marketing.name}</strong> ({projectData.marketing.phone})</span>
              </div>
              <a
                href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20ingin%20jadwalkan%20survei%20Aster%20Tropika%20Kabil`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-tertiary-container text-on-tertiary rounded-xl font-semibold text-xs flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary-fixed">
                  chat
                </span>
                <span>Chat Langsung WhatsApp</span>
              </a>
              {projectData.marketing.facebook && (
                <a
                  href={projectData.marketing.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 bg-surface-container hover:bg-surface-container-high text-primary rounded-xl font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="#1877F2" />
                    <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
                  </svg>
                  <span>Facebook Frans Saut</span>
                </a>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
