'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Building2,
  ShieldCheck,
  Zap,
  Sparkles,
  ArrowRight,
  Clock,
  CalendarDays,
} from 'lucide-react';

export const CommercialOnly: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  return (
    <section
      id="commercial-only"
      className="relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] py-[60px] border-b border-black/[0.08] font-['Inter',sans-serif]"
    >
      {/* Ambient luxury lighting accents (Duke Master Pattern) */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[480px] w-[520px] -translate-x-1/2 rounded-full bg-[#062F57]/6 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-[420px] w-[420px] rounded-full bg-[#EF3340]/6 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10">
        {/* Section Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#062F57]/15 bg-white px-4 py-1.5 text-[11px] font-mono font-extrabold uppercase tracking-[0.16em] text-[#062F57] shadow-2xs mb-4">
            <Sparkles className="size-3 text-[#EF3340]" />
            <span>{t.commercialOnly.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-[32px] lg:text-[38px] font-extrabold tracking-tight text-[#0F172A] leading-tight capitalize">
            {isEs ? (
              <>
                Pintura Comercial.{' '}
                <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                  No Un Servicio Secundario.
                </span>
              </>
            ) : (
              <>
                Commercial Painting.{' '}
                <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                  Not A Side Service.
                </span>
              </>
            )}
          </h2>

          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-slate-600 max-w-2xl mx-auto font-normal">
            {t.commercialOnly.supporting}
          </p>
        </div>

        {/* Bento Comparison Grid (Duke Master Pattern) */}
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-8 items-stretch">
          {/* Left Column: Painting Dallas (Commercial Specialist Standard) */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-b from-[#062F57] via-[#031C35] to-[#020F1D] text-white p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(6,47,87,0.35)] flex flex-col justify-between">
            {/* Corner Precision Reticles (Duke HUD Accent) */}
            <div className="pointer-events-none absolute -top-3 -left-3 size-4 border-t-2 border-l-2 border-emerald-400/40 rounded-tl-xs z-20" />
            <div className="pointer-events-none absolute -bottom-3 -right-3 size-4 border-b-2 border-r-2 border-[#EF3340]/50 rounded-br-xs z-20" />

            {/* Ambient Corner Glow */}
            <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-[#EF3340]/15 blur-3xl" />

            <div>
              {/* Header Telemetry Badge */}
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/15 px-3.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-emerald-300">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <span>100% Commercial Standard</span>
                </div>
                <span className="text-[10.5px] font-mono font-bold text-[#EF3340] uppercase tracking-widest">
                  [ STANDARD OF RECORD ]
                </span>
              </div>

              {/* Company Title & Operational Focus */}
              <h3 className="text-2xl sm:text-[26px] font-black uppercase tracking-tight text-white mb-1.5">
                Painting Dallas
              </h3>
              <p className="text-xs font-mono text-slate-300 uppercase tracking-widest mb-6">
                {isEs
                  ? 'Infraestructura Comercial Dedicada • Fases Nocturnas y Fin de Semana'
                  : 'Dedicated Commercial Infrastructure • Night & Weekend Staging'}
              </p>

              {/* 8 Verified Criteria Rows */}
              <div className="space-y-3">
                {t.commercialOnly.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="group rounded-xl border border-white/10 bg-white/[0.05] p-3.5 backdrop-blur-md transition-all duration-200 hover:border-emerald-400/40 hover:bg-white/[0.08]"
                  >
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#EF3340]">
                        0{idx + 1} // {point.title}
                      </span>
                      <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-200 leading-relaxed font-normal">
                      {point.us}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Assurance Strip */}
            <div className="mt-8 pt-5 border-t border-white/15 flex items-center justify-between text-xs font-mono flex-wrap gap-2">
              <span className="text-slate-300 flex items-center gap-1.5 font-bold">
                <ShieldCheck className="size-4 text-emerald-400 shrink-0" />
                <span>OSHA 30 • $2M+ Liability</span>
              </span>
              <span className="text-[#EF3340] font-extrabold uppercase tracking-wide">
                {isEs ? 'Garantía Cero Interrupción' : 'Zero Business Downtime'}
              </span>
            </div>
          </div>

          {/* Right Column: General / Residential Painters (Common Commercial Risks) */}
          <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-white text-[#0F172A] p-6 sm:p-8 shadow-sm flex flex-col justify-between">
            <div>
              {/* Header Warning Badge */}
              <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
                <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3.5 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-600">
                  <ShieldAlert className="size-3.5 text-slate-500" />
                  <span>{isEs ? 'Pintores Generales / Residenciales' : 'General / Residential Painters'}</span>
                </div>
                <span className="text-[10.5px] font-mono text-slate-400 uppercase tracking-widest">
                  [ COMMON RISKS ]
                </span>
              </div>

              {/* Title & Limitations */}
              <h3 className="text-2xl sm:text-[26px] font-black uppercase tracking-tight text-slate-700 mb-1.5">
                {isEs ? 'Pintores Tradicionales' : 'Standard Generalists'}
              </h3>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-6">
                {isEs
                  ? 'Enfoque Residencial • Horarios Rígidos de 9 a 5'
                  : 'Homeowner Focus • Disruptive 9-to-5 Daytime Hours'}
              </p>

              {/* 8 Limitation Rows */}
              <div className="space-y-3">
                {t.commercialOnly.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="rounded-xl border border-black/5 bg-slate-50/80 p-3.5 transition-all duration-200 hover:border-slate-300 hover:bg-slate-50"
                  >
                    <div className="flex items-center justify-between mb-1.5 gap-2">
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                        0{idx + 1} // {point.title}
                      </span>
                      <XCircle className="size-4 text-slate-400 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-[13px] text-slate-500 leading-relaxed font-normal">
                      {point.others}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Disclaimer Strip */}
            <div className="mt-8 pt-5 border-t border-slate-200 flex items-center justify-between text-xs font-mono text-slate-500 flex-wrap gap-2">
              <span>{isEs ? 'Pinturas de vinil domésticas' : 'Consumer-grade paints'}</span>
              <span className="text-slate-600 font-semibold">{isEs ? 'Sin equipo de gran altura' : 'No boom lift fleet'}</span>
            </div>
          </div>
        </div>

        {/* Bottom Directive & Direct Action Pill */}
        <div className="mt-8 rounded-2xl border border-black/10 bg-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex size-2 shrink-0 rounded-full bg-[#EF3340]" />
            <span className="text-xs font-mono font-black uppercase tracking-wider text-[#062F57]">
              {isEs
                ? 'Especialización total en propiedades comerciales e industriales en Dallas-Fort Worth'
                : 'Exclusively calibrated for commercial facilities and enterprise properties across DFW'}
            </span>
          </div>

          <button
            type="button"
            onClick={openEstimateModal}
            className="h-9 sm:h-10 shrink-0 inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-5 text-xs font-extrabold tracking-wide uppercase shadow-xs transition-all duration-200 hover:scale-[1.02] cursor-pointer"
          >
            <CalendarDays className="size-3.5" />
            <span>{isEs ? 'Solicitar Cotización' : 'Request Commercial Quote'}</span>
            <ArrowRight className="size-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
