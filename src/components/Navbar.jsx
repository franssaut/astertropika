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
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-xl shadow-md py-3'
          : 'bg-surface/90 backdrop-blur-md py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#beranda" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center p-1.5 shadow-sm border border-outline-variant/30 group-hover:scale-105 transition-transform shrink-0">
            <img
              src="/images/logo-mark.webp"
              alt="Logo Aster Tropika at Kabil"
              width="32"
              height="32"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg text-primary tracking-tight leading-tight group-hover:text-primary-container transition-colors">
              ASTER TROPIKA
            </span>
            <span className="text-[11px] font-semibold text-secondary tracking-widest uppercase leading-none mt-0.5">
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
        <div className="flex items-center gap-3">
          <a
            href={`tel:${projectData.marketing.phoneRaw}`}
            className="hidden md:flex flex-col text-right group"
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
            className="shimmer-btn inline-flex items-center gap-1.5 bg-primary text-on-primary hover:bg-primary-container px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl shadow-sm text-xs font-semibold transition-all transform hover:-translate-y-0.5"
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
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
