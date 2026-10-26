import React from 'react';
import { projectData } from '../data/projectData';

export default function PaymentPromoSection() {
  const promo = projectData.paymentPromo;

  return (
    <section className="w-full py-16 lg:py-24 bg-gradient-to-b from-primary via-primary-container to-primary text-on-primary relative overflow-hidden" id="cash-bertahap">
      {/* Decorative Blur Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-tertiary-container/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-extrabold uppercase tracking-wider mb-4 shadow-lg animate-pulse">
            <span className="material-symbols-outlined text-[18px]">local_fire_department</span>
            <span>{promo.badge}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-on-primary tracking-tight">
            {promo.title}
          </h2>
          
          <p className="text-base sm:text-lg text-secondary-fixed font-bold mt-2">
            {promo.subtitle}
          </p>

          <p className="text-xs sm:text-sm text-surface-container-high max-w-xl mt-2 leading-relaxed">
            Wujudkan impian memiliki rumah sendiri di Batam dengan skema paling fleksibel dan menguntungkan. Bebas dari persyaratan bank yang berbelit-belit.
          </p>
        </div>

        {/* 4 Core Promo Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 sm:mb-16">
          {promo.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest/10 backdrop-blur-md p-6 rounded-3xl border border-white/10 hover:border-secondary-fixed/50 transition-all card-lift-hover flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-secondary-container/20 border border-secondary-fixed/30 flex items-center justify-center text-secondary-fixed mb-5 shadow-sm">
                  <span className="material-symbols-outlined text-[30px]">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-on-primary mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-surface-container-high/90 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs text-secondary-fixed font-bold">
                <span className="material-symbols-outlined text-[16px]">verified</span>
                <span>Garansi Resmi Developer</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Box with Step-by-Step & WhatsApp CTA */}
        <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-outline-variant/30">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Explanation */}
            <div className="lg:col-span-7 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Cara Pengajuan Sangat Mudah
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-primary">
                  4 Langkah Praktis Punya Rumah Tanpa Proses Bank
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-surface-container">
                  <span className="w-8 h-8 rounded-xl bg-primary text-secondary-fixed font-extrabold text-sm flex items-center justify-center shrink-0">
                    1
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary block">Pilih Unit & Blok</span>
                    <span className="text-[11px] text-on-surface-variant">Tipe 30/60 atau Tipe 36+/72</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-surface-container">
                  <span className="w-8 h-8 rounded-xl bg-primary text-secondary-fixed font-extrabold text-sm flex items-center justify-center shrink-0">
                    2
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary block">Kirim Berkas KTP</span>
                    <span className="text-[11px] text-on-surface-variant">Cukup foto KTP tanpa berkas lain</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-surface-container">
                  <span className="w-8 h-8 rounded-xl bg-primary text-secondary-fixed font-extrabold text-sm flex items-center justify-center shrink-0">
                    3
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary block">Tanda Tangan SPK</span>
                    <span className="text-[11px] text-on-surface-variant">Surat Perjanjian Resmi Developer</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-surface-container-low border border-surface-container">
                  <span className="w-8 h-8 rounded-xl bg-primary text-secondary-fixed font-extrabold text-sm flex items-center justify-center shrink-0">
                    4
                  </span>
                  <div>
                    <span className="text-xs font-bold text-primary block">Cicil 60x (0% Bunga)</span>
                    <span className="text-[11px] text-on-surface-variant">Langsung dicicil ke pengembang</span>
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-tertiary-container/10 border border-tertiary-fixed/40 flex items-center gap-3">
                <span className="material-symbols-outlined text-[24px] text-tertiary-fixed-dim shrink-0">
                  task_alt
                </span>
                <p className="text-xs text-on-surface font-semibold">
                  Tanpa BI Checking • Tanpa Slip Gaji • Tanpa Wawancara Bank • Pasti Disetujui 100%!
                </p>
              </div>
            </div>

            {/* Quick Action Button Box */}
            <div className="lg:col-span-5 bg-primary-container text-on-primary rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 border border-secondary-fixed/20 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-secondary-fixed font-bold block">
                  Konsultasi Promo Sekarang
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  Tertarik Cash Bertahap 60x?
                </h4>
                <p className="text-xs text-surface-container-high mt-2 leading-relaxed">
                  Hubungi <strong>Frans Rumah Batam</strong> untuk rincian angsuran per bulan, perhitungan tanda jadi (booking fee), dan pemilihan blok unit strategis.
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/${projectData.marketing.phoneRaw}?text=Halo%20Frans,%20saya%20tertarik%20dengan%20promo%20*Cash%20Bertahap%2060x%20Tanpa%20Bunga%20(Syarat%20KTP%20Saja)*%20di%20Aster%20Tropika%20Kabil.%20Mohon%20rincian%20cicilan%20dan%20unit%20tersedia.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shimmer-btn w-full inline-flex items-center justify-center gap-2.5 bg-tertiary-container hover:bg-on-tertiary-container text-on-tertiary font-bold text-xs sm:text-sm py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <span className="material-symbols-outlined text-[22px] text-tertiary-fixed">
                    chat
                  </span>
                  <span>Ambil Promo Cash Bertahap 60x</span>
                </a>

                <div className="flex items-center justify-center gap-2 text-[11px] text-surface-container-high">
                  <span className="material-symbols-outlined text-[15px] text-secondary-fixed">
                    phone_in_talk
                  </span>
                  <span>Hotline: {projectData.marketing.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
