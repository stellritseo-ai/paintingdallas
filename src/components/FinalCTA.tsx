'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowUpRight,
  Phone,
  CalendarDays,
  ShieldCheck,
  Clock,
  Award,
  Building2,
} from 'lucide-react';

export const FinalCTA: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#062F57] via-[#031C35] to-[#020F1D] text-white py-[60px] border-b border-white/10 font-['Inter',sans-serif]">
      {/* Precision Blueprint Grid Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
        aria-hidden="true"
      />

      {/* Specular ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[640px] -translate-x-1/2 rounded-full bg-[#EF3340]/18 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-[320px] w-[320px] rounded-full bg-[#062F57]/40 blur-[130px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 mb-4 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-md shadow-xs">
          <span className="size-1.5 rounded-full bg-[#EF3340] animate-pulse" />
          <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-white">
            {isEs
              ? 'PRÓXIMOS PASOS • DESPACHO RÁPIDO DE PRESUPUESTOS'
              : 'NEXT STEPS • FAST ESTIMATE DISPATCH'}
          </span>
        </div>

        {/* Main Headline (Capitalize & Single Line) */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-black tracking-tight capitalize leading-tight mb-4 text-white sm:whitespace-nowrap">
          {isEs ? (
            <>
              ¿Listo Para Proteger y Renovar{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                Su Activo Comercial?
              </span>
            </>
          ) : (
            <>
              Ready To Protect &amp; Elevate{' '}
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                Your Commercial Asset?
              </span>
            </>
          )}
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-300 max-w-2xl mx-auto mb-8 font-normal">
          {t.finalCta.subheadline}
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-10">
          <Link
            href="/free-estimate"
            className="w-full sm:w-auto h-12 sm:h-13 rounded-xl bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 sm:px-8 text-xs sm:text-[13px] font-black tracking-wider uppercase shadow-[0_8px_25px_rgba(239,51,64,0.35)] transition-all duration-200 hover:scale-[1.02] inline-flex items-center justify-center gap-2.5 cursor-pointer group"
          >
            <CalendarDays className="size-4" />
            <span>{t.finalCta.btnEstimate}</span>
            <ArrowUpRight className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>

          <a
            href="tel:4693685885"
            className="w-full sm:w-auto h-12 sm:h-13 rounded-xl border border-white/20 bg-white/10 hover:bg-white/15 text-white px-7 sm:px-8 text-xs sm:text-[13px] font-black tracking-wider uppercase backdrop-blur-md transition-all duration-200 inline-flex items-center justify-center gap-2.5 group cursor-pointer"
          >
            <Phone className="size-4 text-[#EF3340] group-hover:rotate-12 transition-transform" />
            <span>{isEs ? 'Llamar: (469) 368-5885' : 'Call (469) 368-5885'}</span>
          </a>
        </div>

        {/* 4 Sleek Proof Credentials */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 pt-8 border-t border-white/10 text-left">
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3.5 backdrop-blur-xs flex items-center gap-2 sm:gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0">
              <ShieldCheck className="size-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] min-[360px]:text-[11px] font-bold text-white uppercase truncate">
                {isEs ? '100% Comercial' : '100% Commercial'}
              </div>
              <div className="text-[8.5px] min-[360px]:text-[9.5px] font-mono text-slate-400 truncate">
                {isEs ? 'Sin mezclas residenciales' : 'Zero residential mix'}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3.5 backdrop-blur-xs flex items-center gap-2 sm:gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg bg-[#EF3340]/15 text-[#EF3340] shrink-0">
              <Clock className="size-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] min-[360px]:text-[11px] font-bold text-white uppercase truncate">
                {isEs ? 'Respuesta en 24 Horas' : '< 24h Site Walk'}
              </div>
              <div className="text-[8.5px] min-[360px]:text-[9.5px] font-mono text-slate-400 truncate">
                {isEs ? 'Presupuesto formal rápido' : 'Fast technical bid'}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3.5 backdrop-blur-xs flex items-center gap-2 sm:gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg bg-sky-500/15 text-sky-400 shrink-0">
              <Award className="size-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] min-[360px]:text-[11px] font-bold text-white uppercase truncate">
                {isEs ? 'Supervisores OSHA-30' : 'OSHA-30 Certified'}
              </div>
              <div className="text-[8.5px] min-[360px]:text-[9.5px] font-mono text-slate-400 truncate">
                {isEs ? 'Seguridad estricta' : 'Full safety compliance'}
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:p-3.5 backdrop-blur-xs flex items-center gap-2 sm:gap-2.5">
            <div className="flex size-7 items-center justify-center rounded-lg bg-amber-500/15 text-amber-400 shrink-0">
              <Building2 className="size-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[10px] min-[360px]:text-[11px] font-bold text-white uppercase truncate">
                {isEs ? 'Radio de 50 Millas' : '50-Mile Coverage'}
              </div>
              <div className="text-[8.5px] min-[360px]:text-[9.5px] font-mono text-slate-400 truncate">
                {isEs ? 'Despacho completo en DFW' : 'All DFW municipalities'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

