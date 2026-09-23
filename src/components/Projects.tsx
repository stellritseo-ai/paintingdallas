'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import {
  MapPin,
  ZoomIn,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Phone,
  CalendarCheck,
} from 'lucide-react';

export const Projects: React.FC = () => {
  const { t, language, openProjectModal, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const projects = t.projects.items;

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#F8FAFC] py-20 lg:py-28 border-y border-slate-100 font-['Inter',sans-serif]"
    >
      {/* Micro-dot ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #EF3340 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Diffused luxury lighting orbs */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#062F57]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-10 h-[450px] w-[450px] rounded-full bg-[#EF3340]/6 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ── Section Header (Executive 2-Column Architecture) ─────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 lg:mb-14">
          <div className="max-w-3xl">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-[#EF3340]/25 rounded-full px-4 py-1.5 text-[11px] font-black uppercase tracking-widest text-[#EF3340] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#EF3340] animate-pulse" />
              {t.projects.tag} • {isEs ? 'REGISTRO ARQUITECTÓNICO' : 'ARCHITECTURAL PORTFOLIO'}
            </div>

            <h2 className="text-[#0F172A] tracking-tight leading-[1.15] font-black text-2xl sm:text-3xl lg:text-[34px] sm:whitespace-nowrap">
              {isEs ? (
                <>
                  Trabajos de los que Estamos{' '}
                  <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                    Orgullosos.
                  </span>
                </>
              ) : (
                <>
                  Commercial Work We're{' '}
                  <span className="bg-gradient-to-r from-[#EF3340] to-[#D8222F] bg-clip-text text-transparent">
                    Proud Of.
                  </span>
                </>
              )}
            </h2>

            <p className="mt-3 text-slate-500 text-sm sm:text-base leading-relaxed font-medium max-w-xl">
              {t.projects.subtitle}
            </p>
          </div>

          {/* Right Header Action Card */}
          <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-start lg:items-end gap-3 shrink-0 w-full sm:w-auto">
            <Link
              href="/projects"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs sm:text-[13px] font-black uppercase tracking-widest rounded-full px-7 py-4 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <span>{isEs ? 'Ver Todos Los Proyectos' : 'View All Projects & Case Studies'}</span>
              <ArrowRight className="size-4 text-[#EF3340]" />
            </Link>
            <div className="inline-flex items-center justify-center sm:justify-start gap-2 text-[10px] min-[380px]:text-[11px] font-bold text-slate-500 bg-white/80 border border-slate-200/80 rounded-full px-3.5 py-1.5 shadow-2xs">
              <ShieldCheck className="size-3.5 text-emerald-600 shrink-0" />
              <span className="truncate">{isEs ? 'Personal Certificado OSHA 30 • Turnos Nocturnos' : 'OSHA 30 Certified • Night & Weekend Scheduling'}</span>
            </div>
          </div>
        </div>

        {/* ── Project Cards Bento Gallery ─────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {projects.map((project) => (
            <article
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-950 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_22px_45px_-10px_rgba(239,51,64,0.22)] hover:border-[#EF3340]/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer aspect-[16/11] sm:aspect-[4/3] w-full"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              />

              {/* Cinematic multi-stop gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/40 bg-white/90 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-slate-900 backdrop-blur-md shadow-xs">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {project.categoryLabel}
                </span>
                <span className="inline-flex items-center bg-[#EF3340] text-white font-black text-[10.5px] font-mono px-3 py-1 rounded-full shadow-md tracking-wider">
                  {project.sqft}
                </span>
              </div>

              {/* Hover Zoom Micro-Interaction */}
              <div className="pointer-events-none absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                <div className="flex size-12 items-center justify-center rounded-full border border-white/40 bg-white/90 text-[#EF3340] shadow-xl backdrop-blur-md transform scale-80 transition-transform duration-300 group-hover:scale-100">
                  <ZoomIn className="size-5" />
                </div>
              </div>

              {/* Lower image location & view details */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-[11.5px] font-bold text-white/95 drop-shadow-sm">
                <div className="flex items-center gap-1.5">
                  <MapPin className="size-3.5 text-[#EF3340]" />
                  <span>{project.location}</span>
                </div>
                <span className="text-[#FFE2E5] text-[11px] font-black uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                  <span>{t.projects.viewDetails}</span>
                  <ArrowRight className="size-3" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* ── Commercial Assurance Strip & Bottom Direct CTA ──────────────── */}
        <div className="mt-16 lg:mt-20 rounded-3xl bg-white border border-slate-200/90 p-8 sm:p-10 shadow-sm relative overflow-hidden">
          {/* Accent border bar */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#062F57] via-[#EF3340] to-[#D8222F]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* 3 Value Pillars */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 shadow-2xs">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-[#0F172A] tracking-tight mb-1">
                    {isEs ? 'Garantía por Escrito' : 'Written Warranty'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {isEs
                      ? 'Garantía formal de mano de obra en cada proyecto comercial.'
                      : 'Multi-year written workmanship warranty on every commercial scope.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 text-amber-600 shadow-2xs">
                  <CalendarCheck className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-[#0F172A] tracking-tight mb-1">
                    {isEs ? 'Turnos Flexibles' : 'Off-Hours Phasing'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {isEs
                      ? 'Noches y fines de semana para evitar interrupciones de negocio.'
                      : 'Nights & weekends available to ensure zero disruption to business operations.'}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center shrink-0 text-[#EF3340] shadow-2xs">
                  <CheckCircle2 className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase text-[#0F172A] tracking-tight mb-1">
                    {isEs ? 'Presupuesto Fijo' : 'Fixed-Price Proposals'}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
                    {isEs
                      ? 'Cotizaciones desglosadas sin sorpresas ni sobrecostos ocultos.'
                      : 'Detailed line-item proposals with transparent fixed pricing guarantees.'}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button Block */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-center gap-3 lg:border-l lg:border-slate-100 lg:pl-8">
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 bg-[#EF3340] hover:bg-[#D8222F] text-white rounded-full px-7 py-3.5 text-xs sm:text-[13px] font-black uppercase tracking-wider shadow-[0_8px_25px_rgba(239,51,64,0.3)] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <span>{isEs ? 'Comenzar Proyecto Comercial' : 'Commission Project Estimate'}</span>
                <ArrowRight className="size-4" />
              </Link>

              <a
                href="tel:4693685885"
                className="inline-flex items-center justify-center gap-2 text-slate-600 hover:text-[#0F172A] text-xs font-bold transition-colors py-1 cursor-pointer"
              >
                <Phone className="size-3.5 text-[#EF3340]" />
                <span>{isEs ? 'Línea Comercial: (469) 368-5885' : 'Commercial Desk: (469) 368-5885'}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
