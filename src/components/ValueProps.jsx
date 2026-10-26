import React from 'react';
import { projectData } from '../data/projectData';

export default function ValueProps() {
  return (
    <section className="w-full py-16 lg:py-24 bg-surface text-on-surface" id="keunggulan">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-widest text-secondary font-bold mb-2">
            Harmoni & Kenyamanan
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight">
            4 Keunggulan Utama Memilih Aster Tropika
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3 max-w-xl">
            Dirancang spesifik untuk menjawab kebutuhan hunian fungsional, bernilai investasi tinggi, dan lingkungan ramah tumbuh kembang keluarga.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projectData.advantages.map((item) => (
            <div
              key={item.id}
              className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm card-lift-hover group flex flex-col justify-between border border-transparent hover:border-secondary-container/50 transition-all"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-surface-container-low flex items-center justify-center text-primary group-hover:bg-primary-container group-hover:text-secondary-fixed group-hover:scale-105 transition-all mb-5">
                  <span className="material-symbols-outlined text-[30px]">
                    {item.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 flex items-center gap-1.5 text-xs text-secondary font-bold group-hover:translate-x-1 transition-transform border-t border-surface-container">
                <span>{item.badge}</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
