'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Play, ArrowUpRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const VideoSection: React.FC = () => {
  const { t, openEstimateModal } = useLanguage();

  return (
    <section className="relative py-20 lg:py-28 bg-[#020F1D] text-white overflow-hidden border-b border-white/10">
      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[480px] w-[500px] -translate-x-1/2 rounded-full bg-[#062F57]/20 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-[400px] w-[400px] rounded-full bg-[#EF3340]/10 blur-[160px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left: Master Luxury Viewport Showcase (Duke Pattern) */}
          <div className="lg:col-span-7 relative">
            <div className="group relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-white/[0.03] p-2.5 sm:p-3 shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl">
              {/* Corner Reticles */}
              <div
                className="pointer-events-none absolute left-4 top-4 size-3.5 border-l-2 border-t-2 border-[#EF3340] z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute right-4 top-4 size-3.5 border-r-2 border-t-2 border-[#EF3340] z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-14 left-4 size-3.5 border-b-2 border-l-2 border-[#EF3340] z-20"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute bottom-14 right-4 size-3.5 border-b-2 border-r-2 border-[#EF3340] z-20"
                aria-hidden="true"
              />

              {/* Viewport Canvas */}
              <div className="relative aspect-video overflow-hidden rounded-[1.75rem] bg-slate-950">
                <img
                  src="/images/hero.jpg"
                  alt="Painting Dallas Commercial Airless Spraying & Rigorous Prep"
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-85"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30" />

                {/* Status Beacon */}
                <div className="absolute top-3.5 left-3.5 z-20 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-mono font-extrabold uppercase tracking-wider text-white backdrop-blur-md">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>FIELD CAM • BOOM LIFT RIG</span>
                </div>

                {/* Minimalist Industrial Center Badge */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="flex size-16 items-center justify-center rounded-full border border-white/30 bg-[#EF3340] text-white shadow-2xl transition-transform duration-300 group-hover:scale-110">
                    <Play className="size-6 ml-1 fill-white" />
                  </div>
                </div>

                {/* Bottom Telemetry HUD */}
                <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between rounded-xl border border-white/15 bg-black/70 px-4 py-2 text-[10.5px] font-mono text-slate-300 backdrop-blur-md">
                  <span>[ HIGH-REACH APPLICATION // DFW METROPLEX ]</span>
                  <span className="text-[#EF3340] font-bold">100% NON-RESIDENTIAL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Technical Execution Brief */}
          <div className="lg:col-span-5">
            <div className="eyebrow mb-3.5">
              <span className="eyebrow-line bg-[#EF3340]" />
              <span className="text-[#EF3340] font-black tracking-widest text-[11px] uppercase">
                {t.videoSection.tag} • FIELD STANDARDS
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-black tracking-tight text-white leading-tight uppercase mb-4">
              {t.videoSection.headline}
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed font-normal mb-8">
              {t.videoSection.subtitle}
            </p>

            <div className="space-y-3 mb-8">
              {t.videoSection.features.map((feat, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 flex items-center gap-3 transition-colors hover:bg-white/[0.08]"
                >
                  <span className="text-[#EF3340] font-mono font-bold text-xs">
                    0{i + 1} //
                  </span>
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-200">
                    {feat}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={openEstimateModal}
              className="h-11 sm:h-12 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 text-xs sm:text-[13px] font-extrabold tracking-wide uppercase shadow-[0_6px_24px_rgba(239,51,64,0.35)] transition-all duration-200 hover:scale-[1.02] inline-flex items-center gap-2 cursor-pointer"
            >
              <span>{t.videoSection.cta}</span>
              <ArrowUpRight className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
