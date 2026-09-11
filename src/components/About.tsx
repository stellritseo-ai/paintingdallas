'use client';

import React, { useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  ShieldCheck,
  Building2,
  Sparkles,
  Clock,
  Phone,
  CheckCircle2,
  Award,
  Layers,
  Zap,
  Target,
  Compass,
  Volume2,
  VolumeX,
} from 'lucide-react';

export const About: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (!nextMuted && videoRef.current.paused) {
        videoRef.current.play().catch(() => { });
      }
    }
  };

  const pillars = [
    {
      icon: Target,
      title: isEs ? 'MISIÓN' : 'MISSION',
      tag: isEs ? 'Nuestro Propósito' : 'Our Purpose',
      desc: isEs
        ? 'Nuestra misión es brindar servicios confiables de pintura comercial con mano de obra profesional, comunicación clara y atención a cada detalle.'
        : 'Our mission is to provide dependable commercial painting services with professional workmanship, clear communication, and attention to detail.',
    },
    {
      icon: Compass,
      title: isEs ? 'VISIÓN' : 'VISION',
      tag: isEs ? 'Hacia Dónde Vamos' : 'Our Direction',
      desc: isEs
        ? 'Nuestra visión es convertirnos en el socio de confianza en pintura comercial para empresas y propiedades en toda el área de servicio de Dallas.'
        : 'Our vision is to become a trusted commercial painting partner for businesses and properties throughout the Dallas service area.',
    },
    {
      icon: ShieldCheck,
      title: isEs ? 'COMPROMISO' : 'COMMITMENT',
      tag: isEs ? 'Nuestra Promesa' : 'Our Promise',
      desc: isEs
        ? 'Estamos comprometidos con la preparación de calidad, los acabados profesionales, el servicio puntual y la total satisfacción del cliente en cada proyecto.'
        : 'We are committed to quality preparation, professional finishes, dependable service, and customer satisfaction on every project.',
    },
  ];

  const trustGuarantees = [
    {
      label: isEs ? 'Seguro de Responsabilidad $2M+' : '$2M+ Commercial Liability Insurance',
      sub: isEs ? 'Póliza comercial completa' : 'Fully bonded & insured',
    },
    {
      label: isEs ? 'Líderes de Equipo Certificados OSHA' : 'OSHA-Certified Crew Leaders',
      sub: isEs ? 'Protocolos de seguridad total' : 'Strict jobsite safety',
    },
    {
      label: isEs ? 'Supervisión Bilingüe en Sitio' : 'Bilingual On-Site Supervision',
      sub: isEs ? 'Inglés y Español continuo' : 'English & Spanish continuous',
    },
    {
      label: isEs ? 'Garantía Comercial de Acabado' : 'Written Commercial Finish Warranty',
      sub: isEs ? 'Respaldo total del trabajo' : 'Multi-year workmanship backing',
    },
  ];

  const marqueeCards = [...pillars, ...pillars, ...pillars, ...pillars];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-[#F1F5F9] to-white py-10 sm:py-[60px] border-b border-black/[0.08] font-['Inter',sans-serif]"
    >
      {/* Ambient luxury lighting accents (Duke Master Pattern) */}
      <div
        className="pointer-events-none absolute -left-28 top-1/4 h-[560px] w-[560px] -translate-y-1/2 rounded-full bg-[#062F57]/8 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 top-2/3 h-[520px] w-[520px] rounded-full bg-[#EF3340]/6 blur-[170px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 bottom-0 h-[380px] w-[700px] -translate-x-1/2 rounded-full bg-[#062F57]/4 blur-[140px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 w-full min-w-0 max-w-full">

        {/* Main 2-Column Master Grid */}
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-12 xl:gap-16 w-full min-w-0 max-w-full">
          {/* Left Column: Visual Showcase (Duke Frame Architecture) */}
          <div className="w-full min-w-0 max-w-full lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none">
              {/* Corner Precision Reticles (Duke Signature HUD) */}
              <div className="pointer-events-none absolute -top-1.5 -left-1.5 sm:-top-3.5 sm:-left-3.5 size-4 sm:size-5 border-t-2 border-l-2 border-[#062F57]/35 rounded-tl-sm z-30" />
              <div className="pointer-events-none absolute -top-1.5 -right-1.5 sm:-top-3.5 sm:-right-3.5 size-4 sm:size-5 border-t-2 border-r-2 border-[#062F57]/35 rounded-tr-sm z-30" />
              <div className="pointer-events-none absolute -bottom-1.5 -left-1.5 sm:-bottom-3.5 sm:-left-3.5 size-4 sm:size-5 border-b-2 border-l-2 border-[#EF3340]/40 rounded-bl-sm z-30" />
              <div className="pointer-events-none absolute -bottom-1.5 -right-1.5 sm:-bottom-3.5 sm:-right-3.5 size-4 sm:size-5 border-b-2 border-r-2 border-[#EF3340]/40 rounded-br-sm z-30" />

              {/* Master Beveled Canvas Outer Container */}
              <div className="group relative w-full overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] border border-black/10 bg-white p-2 sm:p-3 shadow-[0_20px_60px_-15px_rgba(15,23,42,0.12)] sm:shadow-[0_30px_90px_-20px_rgba(15,23,42,0.16)] ring-1 ring-black/5 backdrop-blur-md transition-all duration-300 hover:border-[#062F57]/40 hover:shadow-[0_40px_110px_-15px_rgba(6,47,87,0.22)]">
                {/* Video Canvas with Responsive Aspect Ratio */}
                <div className="relative overflow-hidden rounded-[1.25rem] sm:rounded-[2rem] bg-slate-950 aspect-[1.15/1] min-[420px]:aspect-[1.25/1] sm:aspect-[3/4] lg:aspect-[4/5]">
                  <video
                    ref={videoRef}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="auto"
                    poster="/images/about.jpg"
                    className="w-full h-full object-cover scale-[1.14] sm:scale-[1.18] transition-transform duration-700 ease-out group-hover:scale-[1.24] origin-center"
                  >
                    <source src="/images/welcome.mp4" type="video/mp4" />
                  </video>

                  {/* Cinematic Vignette Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020F1D]/80 via-transparent to-black/30" />

                  {/* Top Left: Live Telemetry Beacon */}
                  <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 z-20 inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-white/20 bg-black/65 px-2.5 py-1 sm:px-3.5 sm:py-1.5 shadow-lg backdrop-blur-xl text-white">
                    <span className="relative flex size-1.5 sm:size-2">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex size-1.5 sm:size-2 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[9.5px] sm:text-[11px] font-mono font-extrabold uppercase tracking-widest">
                      {isEs ? 'Flota Activa' : 'Commercial Fleet Active'}
                    </span>
                  </div>

                  {/* Top Right: Audio Control & Quality Shield Cluster */}
                  <div className="absolute right-2.5 top-2.5 sm:right-4 sm:top-4 z-20 flex items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={toggleMute}
                      aria-label={isMuted ? 'Unmute video sound' : 'Mute video sound'}
                      title={isMuted ? 'Unmute sound' : 'Mute sound'}
                      className="flex size-7 sm:size-8 items-center justify-center rounded-full border border-white/25 bg-black/65 hover:bg-[#062F57] text-white shadow-lg backdrop-blur-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer group/sound"
                    >
                      {isMuted ? (
                        <VolumeX className="size-3.5 sm:size-4 text-slate-300 group-hover/sound:text-[#EF3340] transition-colors" />
                      ) : (
                        <Volume2 className="size-3.5 sm:size-4 text-emerald-400 group-hover/sound:text-emerald-300 transition-colors animate-pulse" />
                      )}
                    </button>

                    <div className="hidden min-[420px]:inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[9.5px] sm:text-[10.5px] font-bold text-white shadow-md backdrop-blur-xl">
                      <ShieldCheck className="size-3 sm:size-3.5 text-[#EF3340]" />
                      <span className="font-semibold tracking-wide">10+ Yrs DFW</span>
                    </div>
                  </div>

                  {/* Overlaid Bottom Telemetry Card */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3.5 sm:left-3.5 sm:right-3.5 z-20 rounded-xl sm:rounded-2xl border border-white/20 bg-[#020F1D]/85 p-2.5 sm:p-4 shadow-2xl backdrop-blur-2xl text-white transition-all duration-300 group-hover:bg-[#020F1D]/95">
                    <div className="flex items-center gap-2.5 sm:gap-3.5">
                      <div className="flex size-9 sm:size-11 shrink-0 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#EF3340]/30 to-[#EF3340]/10 text-[#EF3340] ring-1 ring-white/20 shadow-md">
                        <Building2 className="size-4 sm:size-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <b className="block text-[11px] sm:text-sm font-black leading-tight uppercase tracking-tight truncate">
                          {isEs ? 'Restauración y Pintura Comercial' : 'Commercial Restoration & Coating'}
                        </b>
                        <span className="block mt-0.5 sm:mt-1 text-[9.5px] sm:text-[11px] text-slate-300 leading-tight font-medium truncate">
                          {isEs
                            ? 'Atendiendo todo Dallas-Fort Worth en un radio de 50 millas'
                            : 'Serving Dallas-Fort Worth within a 50-mile operational radius'}
                        </span>
                      </div>
                    </div>

                    <div className="mt-2 sm:mt-3 pt-2 sm:pt-3 border-t border-white/10 flex items-center justify-between text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Zap className="size-2.5 sm:size-3" />
                        {isEs ? 'Noches y Fines de Semana' : 'Off-Hours Ready'}
                      </span>
                      <span className="text-white/70">
                        {isEs ? 'Supervisión en Sitio' : 'On-Site Management'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Floating Assurance Pill below canvas */}
            <div className="mt-3 sm:mt-4 flex items-center justify-center gap-1.5 sm:gap-2 text-center text-[11px] sm:text-xs text-slate-500 font-medium px-2">
              <ShieldCheck className="size-3.5 sm:size-4 text-[#062F57] shrink-0" />
              <span className="leading-tight">
                {isEs
                  ? 'Contratistas comerciales registrados y asegurados en el estado de Texas'
                  : 'Fully registered, bonded, and insured commercial contractor in Texas'}
              </span>
            </div>
          </div>

          {/* Right Column: Corporate Narrative, Telemetry, and Highlights */}
          <div className="flex w-full min-w-0 max-w-full flex-col justify-center lg:col-span-7 xl:col-span-7">
            {/* Main Headline */}
            <h2 className="text-[26px] sm:text-[32px] lg:text-[36px] font-extrabold capitalize tracking-tight text-[#0F172A] leading-[1.2] sm:leading-[1.18] break-words">
              {isEs ? 'Servicios Profesionales de ' : 'Professional Painting & '}
              <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent inline sm:inline-block">
                {isEs ? 'Pintura y Restauración' : 'Restoration Services'}
              </span>
            </h2>

            {/* Subheadline Mission Statement */}
            <p className="mt-2.5 sm:mt-1.5 mb-2.5 sm:mb-1.5 lg:mt-[5px] lg:mb-[-13px] text-sm sm:text-[16px] leading-snug sm:leading-[27px] font-bold text-[#062F57] break-words">
              {isEs
                ? 'Más de 10 años entregando acabados comerciales impecables, duraderos y sin interrumpir sus operaciones.'
                : 'Over 10 years delivering dependable commercial painting and architectural restoration with zero operational downtime.'}
            </p>

            {/* Narrative Body Paragraphs */}
            <p className="mt-3.5 text-xs sm:text-[15px] leading-relaxed text-slate-600 font-normal break-words">
              {t.about.p1}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-slate-500 font-normal break-words">
              {t.about.p2}
            </p>

            {/* Infinite Seamless Mission, Vision & Commitment Track */}
            <div className="mt-6 w-full min-w-0 max-w-full overflow-hidden">
              <div className="flex items-center justify-between mb-2.5 gap-2 flex-wrap">
                <span className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'Misión, Visión y Compromiso' : 'Mission, Vision & Commitment'}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-red-50 border border-[#EF3340]/20 px-2 sm:px-2.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-bold text-[#EF3340] shadow-2xs">
                  <span className="size-1.5 rounded-full bg-[#EF3340] animate-pulse" />
                  {isEs ? 'Pilares Operativos • Pausa al Hover' : 'Core Pillars • Pause on Hover'}
                </span>
              </div>

              {/* Infinite Seamless Marquee Slider */}
              <div className="marquee-container py-1 w-full max-w-full min-w-0 overflow-hidden">
                <div className="animate-marquee flex items-stretch gap-3 sm:gap-3.5 py-1 [animation-duration:26s] hover:[animation-play-state:paused]">
                  {marqueeCards.map(({ icon: Icon, title, tag, desc }, idx) => (
                    <div
                      key={`${title}-${idx}`}
                      className="w-[240px] min-[360px]:w-[270px] sm:w-[315px] shrink-0 group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-black/10 bg-white/95 p-3.5 sm:p-4 shadow-xs backdrop-blur-sm transition-all duration-300 hover:border-[#EF3340]/40 hover:bg-white hover:shadow-md hover:-translate-y-1"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <div className="flex size-8 sm:size-9 items-center justify-center rounded-lg sm:rounded-xl bg-[#062F57]/10 text-[#062F57] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#EF3340] group-hover:text-white shadow-xs">
                            <Icon className="size-4 sm:size-4.5" />
                          </div>
                          <span className="rounded-full bg-slate-100 border border-black/5 px-2 sm:px-2.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-bold text-[#062F57] group-hover:bg-[#EF3340]/10 group-hover:text-[#EF3340] group-hover:border-[#EF3340]/20 transition-colors">
                            {tag}
                          </span>
                        </div>
                        <h3 className="text-xs sm:text-[13px] font-black text-[#0F172A] transition-colors group-hover:text-[#EF3340] uppercase tracking-tight">
                          {title}
                        </h3>
                        <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs leading-relaxed text-slate-600 font-normal">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Commercial Trust Verification Bar */}
            <div className="mt-6 rounded-xl sm:rounded-2xl border border-black/10 bg-white/70 p-3 sm:p-3.5 backdrop-blur-sm w-full min-w-0 max-w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                {trustGuarantees.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 min-w-0">
                    <CheckCircle2 className="size-3.5 sm:size-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div className="min-w-0 flex-1">
                      <div className="text-[11px] sm:text-xs font-bold text-[#0F172A] leading-tight break-words">
                        {item.label}
                      </div>
                      <div className="text-[9.5px] sm:text-[10px] text-slate-500 leading-tight font-medium mt-0.5 break-words">
                        {item.sub}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons Suite */}
            <div className="mt-6 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-3 w-full min-w-0 max-w-full">
              <button
                type="button"
                onClick={openEstimateModal}
                className="w-full sm:w-auto h-11 sm:h-10 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-5 sm:px-5.5 text-xs font-extrabold tracking-wide uppercase shadow-[0_4px_16px_rgba(239,51,64,0.3)] transition-all duration-200 hover:scale-[1.02] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <CalendarDays className="size-3.5" />
                <span>{t.about.cta}</span>
                <ArrowUpRight className="size-3.5" />
              </button>

              <a
                href="#services"
                className="w-full sm:w-auto h-11 sm:h-10 rounded-full border border-black/15 bg-white hover:bg-slate-50 text-[#0F172A] px-4.5 sm:px-5 text-xs font-extrabold tracking-wide uppercase shadow-xs transition-all duration-200 flex items-center justify-center gap-1.5 hover:border-black/30"
              >
                <span>{isEs ? 'Explorar Servicios' : 'Explore Commercial Services'}</span>
                <ArrowRight className="size-3.5" />
              </a>

              <a
                href="tel:4693605805"
                className="w-full sm:w-auto h-11 sm:h-10 flex items-center justify-center gap-2 rounded-full border border-black/10 bg-white/85 px-3.5 text-xs font-bold text-[#0F172A] shadow-xs hover:border-[#EF3340]/40 hover:text-[#EF3340] transition-colors"
              >
                <span className="flex size-4.5 items-center justify-center rounded-full bg-[#EF3340]/15 text-[#EF3340]">
                  <Phone className="size-2.5" />
                </span>
                <span className="font-bold tracking-tight">(469) 360-5805</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
