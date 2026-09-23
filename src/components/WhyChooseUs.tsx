'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  Clock,
  Award,
  MapPin,
  Languages,
  Building2,
  CheckCircle2,
  Star,
  Phone,
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.muted = false;
      setIsMuted(false);
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const features = [
    {
      icon: Award,
      title: isEs ? '10+ Años de Experiencia' : '10+ Years of Experience',
      desc: isEs
        ? 'Más de una década de experiencia entregando soluciones de pintura profesional en Dallas.'
        : 'More than a decade of proven commercial painting solutions across Dallas-Fort Worth.',
    },
    {
      icon: Building2,
      title: isEs ? '100% Exclusivo Comercial' : '100% Commercial Only',
      desc: isEs
        ? 'Cero trabajo residencial. Equipos, cuadrillas y recubrimientos calibrados para empresas.'
        : 'Zero residential distraction. Crews, spray rigs, and coatings calibrated solely for businesses.',
    },
    {
      icon: MapPin,
      title: isEs ? 'Radio de Cobertura de 50 Millas' : '50-Mile Service Area',
      desc: isEs
        ? 'Atendiendo propiedades comerciales en todo Dallas-Fort Worth con despacho confiable.'
        : 'Serving commercial properties within 50 miles of Dallas with rapid dispatch.',
    },
    {
      icon: Sparkles,
      title: isEs ? 'Preparación Rigurosa de Superficies' : 'Rigorous Surface Preparation',
      desc: isEs
        ? 'Lavado a presión de hasta 4,000 PSI, sellado elastomérico e imprimación industrial.'
        : 'Up to 4,000 PSI pressure washing, elastomeric caulking, and industrial primers.',
    },
    {
      icon: Clock,
      title: isEs ? 'Horarios Flexibles Fuera de Turno' : 'Flexible Phased Scheduling',
      desc: isEs
        ? 'Cuadrillas nocturnas y fines de semana para evitar interrupciones en sus operaciones.'
        : 'Night and weekend crew shifts to eliminate downtime for your tenants and clients.',
    },
    {
      icon: Languages,
      title: isEs ? 'Supervisión Bilingüe en Sitio' : 'Bilingual Field Supervision',
      desc: isEs
        ? 'Comunicación fluida en inglés y español con supervisores comerciales dedicados.'
        : 'Clear communication on your jobsite in both English and Spanish with dedicated leads.',
    },
    {
      icon: ShieldCheck,
      title: isEs ? 'Asegurado y Con Licencia $2M+' : 'Licensed & $2M+ Insured',
      desc: isEs
        ? 'Póliza de responsabilidad civil comercial completa para su total tranquilidad.'
        : 'Full commercial liability and bonding protection so your property is always safeguarded.',
    },
    {
      icon: CheckCircle2,
      title: isEs ? 'Garantía Escrita de Mano de Obra' : 'Written Workmanship Warranty',
      desc: isEs
        ? 'Garantía total de acabado y mano de obra por escrito en cada proyecto comercial.'
        : 'Multi-year written finish and workmanship warranty backed on every commercial project.',
    },
  ];

  const trustStats = isEs
    ? [
        { value: '10+', label: 'Años Experiencia' },
        { value: '100%', label: 'Solo Comercial' },
        { value: '500+', label: 'Proyectos DFW' },
        { value: '50mi', label: 'Radio Servicio' },
      ]
    : [
        { value: '10+', label: 'Years Experience' },
        { value: '100%', label: 'Commercial Only' },
        { value: '500+', label: 'DFW Projects' },
        { value: '50mi', label: 'Service Radius' },
      ];

  return (
    <section
      id="why-choose-us"
      className="relative py-[60px] bg-white border-b border-slate-100 overflow-hidden font-['Inter',sans-serif]"
    >
      {/* Subtle background ambient blobs (Brown style) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#EF3340]/[0.03] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-[#062F57]/[0.04] blur-3xl"
      />

      <div className="site-shell relative z-10">
        <div className="grid gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20 items-center">

          {/* ── LEFT: Content & Features ───────────────────────────── */}
          <div className="flex flex-col order-2 lg:order-1 text-left">
            {/* Eyebrow Badge with live ping */}
            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full border border-[#EF3340]/30 bg-[#EF3340]/8 text-[#EF3340] text-[10px] font-black uppercase tracking-widest mb-5 shadow-xs select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#EF3340] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#EF3340]" />
              </span>
              <span>{isEs ? 'Por Qué Elegirnos' : 'Why Choose Us'}</span>
            </div>

            {/* Headline */}
            <h2 className="text-slate-900 font-black tracking-tight leading-[1.18] text-[24px] sm:text-[30px] lg:text-[36px] mt-0 mb-3 sm:mb-4 max-w-lg">
              {isEs ? (
                <>
                  Por Qué Dallas Confía en{' '}
                  <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                    Painting Dallas.
                  </span>
                </>
              ) : (
                <>
                  Why Commercial Clients Trust{' '}
                  <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                    Painting Dallas.
                  </span>
                </>
              )}
            </h2>

            {/* Subtext */}
            <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed mb-7 font-medium max-w-[540px]">
              {t.whyChooseUs.subtitle}
            </p>

            {/* Feature 2-Column Grid (Brown style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group flex items-start gap-3 p-3 rounded-xl hover:bg-[#EF3340]/5 border border-transparent hover:border-[#EF3340]/15 transition-all duration-200 cursor-default"
                  >
                    <span className="mt-0.5 shrink-0 p-1.5 rounded-lg bg-[#EF3340]/10 border border-[#EF3340]/20 group-hover:bg-[#EF3340]/20 transition-colors duration-200">
                      <Icon className="w-3.5 h-3.5 text-[#EF3340]" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[12.5px] font-extrabold text-slate-900 leading-tight mb-0.5 group-hover:text-[#EF3340] transition-colors duration-200">
                        {f.title}
                      </p>
                      <p className="text-[11.5px] text-slate-500 leading-relaxed font-medium">
                        {f.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/free-estimate"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#020F1D] hover:bg-[#062F57] text-white text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <span>{isEs ? 'Solicitar Cotización' : 'Request Proposal'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="tel:4693685885"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-gradient-to-r from-[#EF3340] to-[#D8222F] text-white border border-[#EF3340]/50 text-[11px] font-black uppercase tracking-widest rounded-full px-6 py-3 transition-all duration-300 shadow-md hover:scale-[1.03] active:scale-[0.97] cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(469) 368-5885</span>
              </a>
            </div>
          </div>

          {/* ── RIGHT: Video Showcase Card (Brown signature architecture) ──── */}
          <div className="relative order-1 lg:order-2 lg:sticky lg:top-[100px] w-full">
            {/* Decorative ambient glow rings */}
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[36px] bg-gradient-to-br from-[#062F57]/15 via-transparent to-[#EF3340]/15 blur-xl pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-[32px] bg-gradient-to-tr from-[#062F57]/20 to-[#EF3340]/20 blur-md pointer-events-none"
            />

            {/* Video container */}
            <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_80px_-12px_rgba(0,0,0,0.18)] border-2 border-white/90 group bg-slate-950">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster="/images/building.jpg"
                className="w-full h-[280px] sm:h-[400px] lg:h-[620px] object-cover transition-transform duration-700 ease-out"
              >
                <source src="/images/why.mp4" type="video/mp4" />
              </video>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent pointer-events-none" />

              {/* ── Play / Pause center button ── */}
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="absolute inset-0 flex items-center justify-center z-10 group/btn cursor-pointer"
              >
                <span
                  className={`flex items-center justify-center w-16 h-16 rounded-full border-2 border-white/60 bg-black/35 backdrop-blur-sm shadow-xl transition-all duration-300 ${
                    isPlaying
                      ? 'opacity-0 group-hover/btn:opacity-100 scale-90 group-hover/btn:scale-100'
                      : 'opacity-100 scale-100'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white fill-white" />
                  ) : (
                    <Play className="w-7 h-7 text-white fill-white translate-x-0.5" />
                  )}
                </span>
              </button>

              {/* ── Sound toggle button (top-right) ── */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleMute();
                }}
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                className="absolute top-4 right-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/40 backdrop-blur-sm border border-white/30 text-white hover:bg-black/60 hover:scale-110 transition-all duration-200 shadow-md cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4" />
                ) : (
                  <Volume2 className="w-4 h-4" />
                )}
              </button>

              {/* Top-left Star Badge */}
              <div className="absolute top-4 left-4 z-20 bg-[#EF3340] border border-white/30 text-white text-[9.5px] sm:text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                <Star className="w-3 h-3 fill-white text-white" />
                <span>
                  {isEs ? 'Opción #1 en Dallas' : "DFW's #1 Commercial Choice"}
                </span>
              </div>

              {/* Trust Stats Bar at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 z-10">
                <div className="bg-black/60 backdrop-blur-md border border-white/20 rounded-2xl px-3 sm:px-4 py-3 grid grid-cols-4 divide-x divide-white/20">
                  {trustStats.map((s) => (
                    <div
                      key={s.label}
                      className="flex flex-col items-center px-1 sm:px-2"
                    >
                      <span className="text-[#EF3340] font-black text-[13px] min-[360px]:text-[14px] sm:text-[16px] leading-tight font-mono">
                        {s.value}
                      </span>
                      <span className="text-white/80 text-[7.5px] min-[360px]:text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-wide text-center leading-tight mt-0.5">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
