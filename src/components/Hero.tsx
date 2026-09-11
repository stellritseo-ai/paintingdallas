'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  CalendarDays,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Award,
  MapPin,
  ShieldCheck,
} from 'lucide-react';
import { USFlag, SpainFlag } from './Navbar';

export const Hero: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();

  return (
    <section id="home" className="hero-section dark">
      {/* Background Cinematic Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster="/images/hero.jpg"
        className="hero-image pointer-events-none brightness-110 contrast-105"
      >
        <source src="/images/hero.mp4" type="video/mp4" />
      </video>

      {/* Atmospheric Vignette & Radial Specular Lights */}
      <div className="hero-overlay opacity-85" />
      <div className="hero-grid opacity-40" aria-hidden="true" />

      {/* Radiant Specular Glow Spheres (Subtle to preserve video clarity) */}
      <div
        className="pointer-events-none absolute -left-20 top-1/4 h-[580px] w-[580px] rounded-full bg-[#062F57]/20 blur-[180px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-16 h-[480px] w-[480px] rounded-full bg-[#EF3340]/10 blur-[190px]"
        aria-hidden="true"
      />

      {/* Main Hero Container */}
      <div className="site-shell relative z-10 flex min-h-[84vh] flex-col justify-center py-14 sm:py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 xl:col-span-7">
            {/* Live Concierge Status Badge (Duke Pattern) */}
            <div className="mb-5 inline-flex items-center gap-2.5 self-start rounded-full border border-white/25 bg-black/40 px-3.5 sm:px-4 py-1.5 shadow-xl backdrop-blur-xl mt-14 sm:mt-20 lg:mt-[70px] max-w-full">
              <span className="relative flex size-2.5 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-[10px] min-[360px]:text-[11px] font-extrabold uppercase tracking-[0.12em] sm:tracking-[0.14em] text-white truncate">
                10+ Years Experience • PAINTING DALLAS
              </span>
              <Sparkles className="size-3 text-[#EF3340] shrink-0" />
            </div>

            {/* Monumental Headline (Duke Pattern) */}
            <h1 className="hero-title mt-0 text-[26px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[50px] leading-[1.12] mb-4 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
              Painting Dallas – Bringing Your
              <br />
              <span className="hero-title-gradient">Property Back to Life</span>
            </h1>

            {/* Elevated Subtitle */}
            <p className="mt-4 max-w-2xl font-medium text-white text-xs sm:text-sm lg:text-[15px] leading-relaxed lg:leading-[32px] mb-8 drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
              {t.hero.subheadline}
            </p>

            {/* Primary Action Button Cluster (Duke Pattern) */}
            <div className="flex flex-col gap-3.5 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={openEstimateModal}
                className="group h-12 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 text-xs sm:text-[13px] font-extrabold uppercase tracking-wide shadow-[0_6px_24px_rgba(239,51,64,0.4)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{t.hero.ctaPrimary}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#contact"
                className="h-12 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 px-7 text-xs sm:text-[13px] font-extrabold text-white backdrop-blur-xl transition-all duration-200 flex items-center justify-center gap-2 hover:border-white/40"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Floating Micro-Capsules (Compact, Non-Form, Luxury Glass Design) */}
          <div className="lg:col-span-5 xl:col-span-5 w-full mt-6 lg:mt-[100px] flex flex-col gap-2.5 lg:items-end">
            {/* Pill 1: 10+ Years Experience */}
            <div className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 hover:bg-white/15 px-4 sm:px-5 py-2.5 backdrop-blur-xl shadow-lg transition-all duration-200 hover:border-[#EF3340]/60 hover:-translate-x-1">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EF3340]/20 text-[#EF3340] border border-[#EF3340]/40 transition-transform duration-200 group-hover:scale-110">
                <Award className="size-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white group-hover:text-[#EF3340] transition-colors leading-tight">
                  {language === 'es' ? '10+ Años de Experiencia' : '10+ Years Experience'}
                </div>
                <div className="text-[10px] text-slate-300 font-medium">
                  {language === 'es' ? 'Trayectoria comprobada en Dallas' : 'Proven Dallas History'}
                </div>
              </div>
            </div>

            {/* Pill 2: 50-Mile Service Radius */}
            <div className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 hover:bg-white/15 px-4 sm:px-5 py-2.5 backdrop-blur-xl shadow-lg transition-all duration-200 hover:border-emerald-500/60 hover:-translate-x-1">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 transition-transform duration-200 group-hover:scale-110">
                <MapPin className="size-4" />
              </div>
              <div className="text-left">
                <div className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white group-hover:text-emerald-400 transition-colors leading-tight">
                  {language === 'es' ? 'Radio de 50 Millas' : '50-Mile Service Radius'}
                </div>
                <div className="text-[10px] text-slate-300 font-medium">
                  {language === 'es' ? 'Cobertura completa en DFW' : 'Complete DFW Coverage'}
                </div>
              </div>
            </div>

            {/* Pill 3: English & Spanish Crews */}
            <div className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 hover:bg-white/15 px-4 sm:px-5 py-2.5 backdrop-blur-xl shadow-lg transition-all duration-200 hover:border-sky-500/60 hover:-translate-x-1">
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 border border-sky-500/40 transition-transform duration-200 group-hover:scale-110">
                <ShieldCheck className="size-4" />
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white group-hover:text-sky-400 transition-colors leading-tight">
                    {language === 'es' ? 'Equipos en Inglés y Español' : 'English & Spanish Crews'}
                  </span>
                  <span className="inline-flex items-center gap-1 shrink-0">
                    <USFlag className="w-3.5 h-2.5 rounded-[2px]" />
                    <SpainFlag className="w-3.5 h-2.5 rounded-[2px]" />
                  </span>
                </div>
                <div className="text-[10px] text-slate-300 font-medium">
                  {language === 'es' ? 'Supervisión bilingüe en sitio' : 'Bilingual Site Supervision'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
