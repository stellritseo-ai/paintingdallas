'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceItem } from '@/data/translations';
import {
  ArrowRight,
  Building2,
  Paintbrush,
  Factory,
  Layers,
  Shield,
  Droplets,
  Zap,
  Sparkles,
} from 'lucide-react';

const serviceIcons: Record<string, React.ElementType> = {
  interior: Paintbrush,
  exterior: Building2,
  building: Building2,
  industrial: Factory,
  facility: Layers,
  restoration: Shield,
  surface_prep: Droplets,
  specialty: Zap,
};

interface CardContentProps {
  service: ServiceItem;
  onOpenModal: (service: ServiceItem) => void;
  isEs: boolean;
}

function CardContent({ service, onOpenModal, isEs }: CardContentProps) {
  const Icon = serviceIcons[service.id] || Building2;

  return (
    <div
      onClick={() => onOpenModal(service)}
      className="relative size-full overflow-hidden"
    >
      {/* Background Cover Image */}
      <img
        src={service.image}
        alt={service.title}
        loading="lazy"
        className="absolute inset-0 size-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Luxury Cinematic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent transition-all duration-500 group-hover:from-black/95 group-hover:via-black/80 group-hover:to-black/20" />

      {/* Red Accent Line at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#EF3340] via-[#D8222F] to-[#EF3340] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Floating Icon Badge Top-Left */}
      <div className="absolute top-4 left-4 flex size-9 items-center justify-center rounded-xl bg-[#EF3340]/90 text-white shadow-lg backdrop-blur-sm border border-white/15 opacity-0 transition-all duration-300 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
        <Icon className="size-4" />
      </div>

      {/* Floating Sequence Number Top-Right */}
      <div className="absolute top-4 right-4 rounded-full border border-white/15 bg-black/50 px-2.5 py-0.5 text-[10px] font-mono font-bold text-white/90 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
        {service.number}
      </div>

      {/* Bottom Content & Smooth Hover Drawer */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-5">
        <div className="transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-sm sm:text-[15px] font-extrabold uppercase leading-tight tracking-wide text-white">
            {service.title}
          </h3>

          {/* Hover Reveal Details */}
          <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover:grid-rows-[1fr] group-hover:opacity-100">
            <div className="overflow-hidden">
              <p className="mt-2 text-[12px] leading-snug text-white/80 line-clamp-3">
                {service.shortDesc}
              </p>
              <div className="mt-3 inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#EF3340] group/link">
                <span className="border-b border-[#EF3340]/50 transition-colors group-hover/link:border-[#EF3340]">
                  {isEs ? 'Explorar Servicio' : 'Explore Service'}
                </span>
                <ArrowRight className="size-3 transition-transform duration-300 group-hover/link:translate-x-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const Services: React.FC = () => {
  const { t, language, openServiceModal, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  const services = t.services.items;
  const topItems = services.slice(0, 3);
  const slideItems = [...services.slice(3), ...services.slice(3)];

  const trustHighlights = isEs
    ? ['100% Exclusivo Comercial', 'Asegurado $2M+ y Con Licencia', 'Horarios Nocturnos y Fines de Semana', 'Cotizaciones Detalladas Gratis']
    : ['100% Commercial Only', 'Licensed & $2M+ Insured', 'Night & Weekend Phasing', 'Free Detailed Proposals'];

  return (
    <section id="services" className="bg-[#F8FAFC] py-[60px] overflow-hidden border-y border-slate-100 font-['Inter',sans-serif]">
      <div className="site-shell relative z-10">

        {/* ── Top Row: Left Narrative Block + 3 Hero Cards ────────────────── */}
        <div className="grid gap-10 lg:grid-cols-[38%_1fr] lg:gap-14 items-center">

          {/* Left Text Block */}
          <div className="flex flex-col justify-center text-left">
            {/* Eyebrow badge */}
            <span className="inline-flex items-center gap-2 bg-[#EF3340]/10 border border-[#EF3340]/20 text-[#EF3340] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-5 w-fit shadow-2xs">
              <Sparkles className="size-3 text-[#EF3340]" />
              <span>{t.services.tag}</span>
              <Sparkles className="size-3 text-[#EF3340]" />
            </span>

            {/* Heading */}
            <h2
              className="text-neutral-900 tracking-tight leading-[1.22] font-extrabold"
              style={{ fontSize: 'clamp(24px, 3.2vw, 34px)' }}
            >
              {isEs ? (
                <>
                  Soluciones <span className="text-[#EF3340]">Comerciales</span> Completas de Pintura
                </>
              ) : (
                <>
                  Full-Spectrum <span className="text-[#EF3340]">Commercial</span> Painting Solutions
                </>
              )}
            </h2>

            {/* Divider accent */}
            <div className="flex items-center gap-3 mt-5 mb-5">
              <div className="h-[2px] w-10 bg-[#EF3340] rounded-full" />
              <div className="h-[2px] w-4 bg-[#EF3340]/40 rounded-full" />
            </div>

            {/* Paragraph Narrative */}
            <p className="text-slate-500 text-sm md:text-[15px] leading-[28px] font-medium max-w-[95%]">
              {t.services.subtitle}
            </p>

            {/* Trust highlights with colored beacons */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-bold text-slate-600">
              {trustHighlights.map((itemText) => (
                <span key={itemText} className="flex items-center gap-1.5">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  <span>{itemText}</span>
                </span>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-7">
              <button
                type="button"
                onClick={openEstimateModal}
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 bg-[#EF3340] hover:bg-[#D8222F] text-white rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.35)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{isEs ? 'Solicitar Cotización Comercial' : 'Request Commercial Quote'}</span>
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Right Top 3 Hero Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {topItems.map((service) => (
              <div
                key={service.id}
                className="group relative rounded-2xl overflow-hidden bg-neutral-950 h-[220px] sm:h-[300px] lg:h-[370px] xl:h-[400px] cursor-pointer shadow-[0_4px_24px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] transition-shadow duration-500"
              >
                <CardContent
                  service={service}
                  onOpenModal={openServiceModal}
                  isEs={isEs}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom Section: Infinite Auto-Scroll Carousel ────────────────── */}
        <div className="mt-12 sm:mt-14 relative">
          {/* Section divider with label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">
              {isEs ? 'Más Especialidades Comerciales' : 'More Commercial Specialties'}
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Gradient Edge Fades */}
          <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden sm:block" />
          <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#F8FAFC] to-transparent z-10 pointer-events-none hidden sm:block" />

          {/* Infinite Marquee Track */}
          <div className="marquee-container py-1">
            <div className="animate-marquee flex items-stretch gap-4 py-2 [animation-duration:32s] hover:[animation-play-state:paused]">
              {slideItems.map((service, idx) => (
                <div
                  key={`${service.id}-${idx}`}
                  className="w-[240px] sm:w-[270px] lg:w-[295px] shrink-0"
                >
                  <div className="group relative rounded-xl overflow-hidden bg-neutral-950 h-[190px] sm:h-[230px] lg:h-[260px] cursor-pointer shadow-md hover:shadow-[0_12px_32px_rgba(0,0,0,0.2)] transition-shadow duration-500">
                    <CardContent
                      service={service}
                      onOpenModal={openServiceModal}
                      isEs={isEs}
                    />
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
