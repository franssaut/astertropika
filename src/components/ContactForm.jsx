import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    unit: 'Tipe 30/60',
    intent: 'Jadwal Survei Lokasi ke Kabil',
    notes: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const baseText =
      `Halo Frans, saya *${formData.name || 'Calon Pembeli'}*. Saya tertarik dengan perumahan *Aster Tropika at Kabil (Cipta Group)*.%0A%0A` +
      `*Pilihan Unit:* ${encodeURIComponent(formData.unit)}%0A` +
      `*Kebutuhan:* ${encodeURIComponent(formData.intent)}` +
      (formData.notes ? `%0A*Catatan:* ${encodeURIComponent(formData.notes)}` : '') +
      `%0A%0AMohon informasi ketersediaan unit dan jadwal survei lokasi. Terima kasih!`;

    window.open(`https://wa.me/${projectData.marketing.phoneRaw}?text=${baseText}`, '_blank');
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-primary text-on-primary relative overflow-hidden" id="kontak">
      {/* Background Glow */}
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-primary-container blur-3xl pointer-events-none"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="bg-surface-container-lowest text-on-surface rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl border border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Marketing Consultant Bio & Direct Contact */}
            <div className="lg:col-span-5 space-y-6 border-b lg:border-b-0 lg:border-r border-surface-container pb-8 lg:pb-0 lg:pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold">
                <span className="material-symbols-outlined text-[16px]">verified_user</span>
                Marketing In-House Resmi
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-primary">
                  {projectData.marketing.name}
                </h3>
                <p className="text-sm font-bold text-secondary">
                  {projectData.marketing.title} • Cipta Group
                </p>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {projectData.marketing.notes}
              </p>

              {/* Contact Cards */}
              <div className="space-y-3 pt-2">
                {projectData.marketing.facebook && (
                  <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low card-lift-hover border border-[#1877F2]/20">
                    <div className="w-10 h-10 rounded-xl bg-[#1877F2] text-white flex items-center justify-center shrink-0 shadow-sm">
                      <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="12" fill="#1877F2" />
                        <path d="M15.12 12.72l.46-3h-2.88V7.77c0-.82.4-1.62 1.69-1.62h1.31V3.59s-1.19-.2-2.33-.2c-2.38 0-3.93 1.44-3.93 4.05v2.28H6.8v3h2.64v7.26c.53.08 1.07.13 1.62.13s1.09-.05 1.62-.13v-7.26h2.44z" fill="#ffffff" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <span className="text-[11px] text-on-surface-variant block">
                        Facebook Profil Resmi
                      </span>
                      <a
                        href={projectData.marketing.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm font-bold text-primary hover:text-secondary transition-colors inline-flex items-center gap-1"
                      >
                        <span>facebook.com/frans.sautH</span>
                        <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                      </a>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low card-lift-hover">
                  <div className="w-10 h-10 rounded-xl bg-tertiary-container text-on-tertiary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant block">
                      Telepon / WhatsApp
                    </span>
                    <a
                      href={`tel:${projectData.marketing.phoneRaw}`}
                      className="text-sm sm:text-base font-bold text-primary hover:text-secondary transition-colors"
                    >
                      {projectData.marketing.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-surface-container-low card-lift-hover">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">store</span>
                  </div>
                  <div>
                    <span className="text-[11px] text-on-surface-variant block">
                      Kantor Pengembang
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-primary">
                      {projectData.developer.name}
                    </span>
                    <p className="text-[11px] text-on-surface-variant">
                      {projectData.developer.office}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-on-surface-variant">
                <span>Developer Phone: {projectData.developer.phone} • Fax: {projectData.developer.fax}</span>
              </div>
            </div>

            {/* Quick WhatsApp Inquiry Form */}
            <div className="lg:col-span-7 space-y-6 lg:pl-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-secondary">
                  Layanan Respons Cepat
                </span>
                <h4 className="text-xl sm:text-2xl font-bold text-primary mt-1">
                  Jadwalkan Survei Lokasi & Pricelist
                </h4>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
                  Isi formulir singkat di bawah untuk langsung terhubung ke WhatsApp Frans dengan pesan terformat rapi.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label htmlFor="contact-name" className="text-xs font-bold text-on-surface block">
                      Nama Lengkap
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Contoh: Budi Santoso"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm border border-outline-variant/30"
                    />
                  </div>

                  <div className="space-y-1">
                    <label htmlFor="contact-unit" className="text-xs font-bold text-on-surface block">
                      Peminatan Tipe Rumah
                    </label>
                    <select
                      id="contact-unit"
                      name="unit"
                      aria-label="Peminatan Tipe Rumah"
                      value={formData.unit}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm border border-outline-variant/30"
                    >
                      <option value="Tipe 30/60">Tipe 30/60 (Standar Tropis)</option>
                      <option value="Tipe 36+/72">Tipe 36+/72 (Ekstra Luas Granit)</option>
                      <option value="Belum Pasti (Ingin Konsultasi Dahulu)">
                        Belum Pasti (Konsultasi Dulu)
                      </option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-intent" className="text-xs font-bold text-on-surface block">
                    Kebutuhan Utama
                  </label>
                  <select
                    id="contact-intent"
                    name="intent"
                    aria-label="Kebutuhan Utama"
                    value={formData.intent}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm border border-outline-variant/30"
                  >
                    <option value="Promo Cash Bertahap 60x Tanpa Bunga (Syarat KTP)">
                      Promo Cash Bertahap 60x Tanpa Bunga (Syarat KTP Saja)
                    </option>
                    <option value="Jadwal Survei Lokasi ke Kabil">
                      Jadwal Survei Lokasi ke Kabil
                    </option>
                    <option value="Minta Brosur & Pricelist Resmi">
                      Minta Brosur & Pricelist Resmi
                    </option>
                    <option value="Cek Unit Tersedia & Blok Terfavorit">
                      Cek Ketersediaan Unit & Blok Terfavorit
                    </option>
                    <option value="Konsultasi Promo & Skema Pembayaran">
                      Konsultasi Promo & Skema Pembayaran
                    </option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label htmlFor="contact-notes" className="text-xs font-bold text-on-surface block">
                    Catatan Tambahan (Opsional)
                  </label>
                  <textarea
                    id="contact-notes"
                    name="notes"
                    rows="2"
                    placeholder="Tuliskan jika ingin dijadwalkan survei hari Sabtu/Minggu..."
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-surface-container-low text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:ring-2 focus:ring-primary text-xs sm:text-sm border border-outline-variant/30 resize-none"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="shimmer-btn w-full inline-flex items-center justify-center gap-2 bg-tertiary-container hover:bg-on-tertiary-container text-on-tertiary font-bold text-xs sm:text-sm py-4 px-6 rounded-xl shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    <span className="material-symbols-outlined text-[20px] text-tertiary-fixed">
                      send
                    </span>
                    <span>Kirim Pesan ke WhatsApp Frans ({projectData.marketing.phone})</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-xs text-on-surface-variant text-center pt-1">
                  <span className="material-symbols-outlined text-[16px] text-on-tertiary-container">
                    lock
                  </span>
                  <span>Data privasi Anda aman. Layanan konsultasi properti 100% gratis tanpa biaya.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
