import React, { useState } from 'react';
import { projectData } from '../data/projectData';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-surface-container-low text-on-surface" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold">
            Pusat Bantuan
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight mt-1">
            Pertanyaan Yang Sering Diajukan
          </h2>
          <p className="text-xs sm:text-sm text-on-surface-variant mt-2">
            Informasi esensial seputar legalitas, pembelian unit, dan program KPR Aster Tropika Batam.
          </p>
        </div>

        <div className="space-y-3.5">
          {projectData.faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm transition-all"
            >
              <button
                type="button"
                onClick={() => toggleFaq(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-primary hover:text-secondary transition-colors"
              >
                <span>{faq.q}</span>
                <span
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 text-secondary shrink-0 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                >
                  keyboard_arrow_down
                </span>
              </button>

              {openIdx === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-on-surface-variant leading-relaxed border-t border-surface-container-low pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
