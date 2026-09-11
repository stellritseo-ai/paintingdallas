'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Phone,
  Clock,
  Building2,
  ShieldCheck,
  Award,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
} from 'lucide-react';

export const BuildPaintTransform: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  return (
    <section
      id="transform"
      className="relative w-full overflow-hidden py-[60px] text-white bg-[#020F1D] border-y border-white/10 font-['Inter',sans-serif]"
    >
      {/* ── Background Cinematic Canvas ──────────────────────────────────── */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        <img
          src="/images/transform.jpg"
          alt="Painting Dallas Commercial Painting Execution"
          loading="lazy"
          className="h-full w-full object-cover object-center opacity-25"
        />
        {/* Vignette Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#020F1D] via-[#020F1D]/85 to-[#020F1D]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020F1D]/90 via-transparent to-[#020F1D]/50" />
        {/* Subtle dot matrix grid */}
        <div className="pointer-events-none absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="site-shell relative z-10">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">

          {/* ── Left Content Column (7 cols) ─────────────────────────────────── */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Status Beacon Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/30 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span>
                {isEs
                  ? 'Despacho Comercial Activo • Dallas-Fort Worth'
                  : 'Commercial Dispatch Active • Dallas-Fort Worth'}
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[26px] sm:text-3xl lg:text-[36px] font-black capitalize tracking-tight leading-[1.2] text-white">
              {isEs ? (
                <>
                  ¿Listo Para Renovar Su Propiedad?{' '}
                  <span className="text-[#EF3340]">Construir. Pintar. Transformar.</span>
                </>
              ) : (
                <>
                  Ready To Elevate Your Commercial Property?{' '}
                  <span className="text-[#EF3340]">Build. Paint. Transform.</span>
                </>
              )}
            </h2>

            {/* Narrative Description */}
            <p className="text-sm sm:text-[15px] text-slate-300 max-w-xl leading-relaxed font-normal">
              {t.transform.body}
            </p>

            {/* 4 Trust & Capability Highlights */}
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 w-full max-w-lg">
              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF3340]/20 text-[#EF3340] shrink-0">
                  <Clock className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold">
                  {isEs ? 'Propuestas Rápidas en 24-48h' : '24-48 Hr Itemized Proposals'}
                </span>
              </li>

              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF3340]/20 text-[#EF3340] shrink-0">
                  <Building2 className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold">
                  {isEs ? 'Horarios Nocturnos y Fines de Semana' : 'Night & Weekend Phased Shifts'}
                </span>
              </li>

              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF3340]/20 text-[#EF3340] shrink-0">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold">
                  {isEs ? 'Seguro Comercial $2M+ y Con Licencia' : 'Licensed & $2M+ Insured'}
                </span>
              </li>

              <li className="flex items-center gap-3 text-white/90">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#EF3340]/20 text-[#EF3340] shrink-0">
                  <Award className="h-3.5 w-3.5" />
                </div>
                <span className="text-xs sm:text-[13px] font-semibold">
                  {isEs ? 'Garantía Total de Mano de Obra' : '100% Workmanship Warranty'}
                </span>
              </li>
            </ul>
          </div>

          {/* ── Right Action Column (5 cols) ────────────────────────────────── */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start lg:items-end gap-3.5 w-full">

            {/* Glowing Pulsing Ring Phone Hotline Card */}
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl blur opacity-35 group-hover:opacity-75 transition duration-500 animate-pulse" />

              <a
                href="tel:4693605805"
                className="relative flex items-center justify-between gap-3 sm:gap-4 rounded-2xl bg-gradient-to-r from-red-600 to-[#d62828] p-3.5 sm:p-5 font-semibold text-white shadow-2xl hover:brightness-110 transition-all duration-300 w-full"
              >
                <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
                  <span className="relative grid place-items-center h-10 w-10 sm:h-11 sm:w-11 rounded-full bg-white/15 ring-4 ring-white/10 shrink-0">
                    <Phone className="h-4 sm:h-5 w-4 sm:w-5 text-white" />
                  </span>
                  <div className="text-left min-w-0">
                    <span className="block text-[9.5px] sm:text-[10px] uppercase tracking-widest text-white/85 font-bold truncate">
                      {isEs ? 'Línea Directa Comercial' : 'Commercial Estimate Hotline'}
                    </span>
                    <span className="block text-lg min-[360px]:text-xl sm:text-2xl font-black leading-tight tracking-tight mt-0.5 font-mono truncate">
                      (469) 360-5805
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="size-4 sm:size-5 text-white/80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
              </a>
            </div>

            {/* Request Estimate Modal Button */}
            <button
              type="button"
              onClick={openEstimateModal}
              className="w-full max-w-sm h-11 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/35 text-white text-xs sm:text-[13px] font-black uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg backdrop-blur-md hover:scale-[1.01] active:scale-[0.99]"
            >
              <CalendarDays className="size-4 text-[#EF3340]" />
              <span>{t.transform.cta}</span>
              <ArrowRight className="size-3.5 text-white/70" />
            </button>

            {/* Live Dispatcher Status Glass Badge */}
            <div className="flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white/80 w-full max-w-sm justify-center sm:justify-start">
              <span className="size-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <span className="text-[11.5px] font-medium leading-tight">
                {isEs
                  ? 'Estimadores comerciales listos en radio de 50 millas'
                  : 'Commercial estimators active across 50-mile DFW radius'}
              </span>
            </div>

            {/* 3 Quick Hairline Metrics */}
            <div className="grid grid-cols-3 gap-2 w-full max-w-sm pt-2 border-t border-white/10 text-center">
              {t.transform.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-lg bg-white/[0.03] border border-white/10 py-2 px-1 hover:border-white/20 transition-colors"
                >
                  <div className="text-base sm:text-lg font-black text-white font-mono leading-none">
                    {stat.value}
                  </div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-slate-400 mt-1 truncate">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
