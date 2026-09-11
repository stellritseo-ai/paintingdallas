'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import {
  Navigation,
  MapPin,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Zap,
  Building2,
  Sparkles,
  ArrowRight,
  Compass,
  Layers,
} from 'lucide-react';

interface CityNode {
  name: string;
  isHQ?: boolean;
  status: string;
  distance: string;
}

const citiesList: CityNode[] = [
  { name: 'Dallas', isHQ: true, status: 'Central Fleet Operations HQ', distance: '0 mi' },
  { name: 'Fort Worth', status: 'Active Industrial Corridor', distance: '32 mi' },
  { name: 'Plano', status: 'Corporate Technology Park', distance: '19 mi' },
  { name: 'Frisco', status: 'Prime Commercial District', distance: '28 mi' },
  { name: 'Arlington', status: 'Entertainment & Industrial Hub', distance: '20 mi' },
  { name: 'Irving', status: 'Las Colinas Corporate Center', distance: '12 mi' },
  { name: 'Carrollton', status: 'Commercial Distribution Corridor', distance: '16 mi' },
  { name: 'Garland', status: 'Manufacturing & Industrial Belt', distance: '15 mi' },
  { name: 'Grand Prairie', status: 'Logistics Distribution Center', distance: '14 mi' },
  { name: 'McKinney', status: 'North Metro Commercial Zone', distance: '33 mi' },
  { name: 'Denton', status: 'North Texas Logistics Corridor', distance: '39 mi' },
  { name: 'Richardson', status: 'Telecom Corridor Hub', distance: '14 mi' },
  { name: 'Grapevine', status: 'DFW Airport Commercial Gateway', distance: '22 mi' },
  { name: 'Southlake', status: 'High-End Retail & Office Corridor', distance: '26 mi' },
];

export const ServiceArea: React.FC = () => {
  const { t, language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const [activeCity, setActiveCity] = useState<CityNode>(citiesList[0]);

  return (
    <section
      id="service-area"
      className="relative overflow-hidden bg-[#F8FAFC] text-[#0F172A] py-[60px] border-b border-slate-200/80 font-['Inter',sans-serif]"
    >
      {/* Micro-dot ambient background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, #062F57 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Subtle luxury ambient lighting accents */}
      <div
        className="pointer-events-none absolute left-1/4 top-0 h-[480px] w-[520px] -translate-x-1/2 rounded-full bg-[#062F57]/5 blur-[160px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-10 bottom-0 h-[420px] w-[450px] rounded-full bg-[#EF3340]/5 blur-[150px]"
        aria-hidden="true"
      />

      <div className="site-shell relative z-10 max-w-7xl">
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
          {/* ── LEFT COLUMN: Service Territory Info, Stats & City Selector (Expanded) ── */}
          <div className="flex flex-col justify-between space-y-6 lg:col-span-7">
            <div>
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#062F57]/15 rounded-full px-4 py-1.5 text-[11px] font-mono font-extrabold uppercase tracking-[0.16em] text-[#062F57] shadow-2xs mb-4">
                <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>{t.serviceArea.tag} • {isEs ? 'COBERTURA EN EL METROPLEX' : 'DFW REGIONAL COVERAGE'}</span>
              </div>

              {/* Main Headline (Capitalize) */}
              <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-black tracking-tight text-[#0F172A] leading-tight capitalize">
                {isEs ? (
                  <>
                    Pintura Comercial En Todo El{' '}
                    <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                      Área De Dallas-Fort Worth.
                    </span>
                  </>
                ) : (
                  <>
                    Commercial Painting Across The{' '}
                    <span className="bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] bg-clip-text text-transparent">
                      Dallas-Fort Worth Metroplex.
                    </span>
                  </>
                )}
              </h2>

              <p className="mt-3.5 text-xs sm:text-sm md:text-[15px] leading-relaxed text-slate-600 font-normal">
                {isEs ? (
                  <>
                    Con sede en <strong className="text-[#0F172A]">Dallas, Texas (75201)</strong>, nuestros equipos comerciales dedicados y plataformas de elevación atienden todo el Metroplex y municipios dentro de un radio operativo de 50 millas.
                  </>
                ) : (
                  <>
                    Headquartered in <strong className="text-[#0F172A]">Dallas, Texas (75201)</strong>—our dedicated commercial painting crews, boom lifts, and industrial spray rigs dispatch across the entire DFW Metroplex and all municipalities within our 50-mile operating radius.
                  </>
                )}
              </p>
            </div>

            {/* 4 Sleek Stat Cards in a Single Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#062F57] tracking-tight">
                  50mi
                </div>
                <div className="mt-0.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'Radio de Cobertura' : 'Operating Radius'}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#062F57] tracking-tight">
                  DFW
                </div>
                <div className="mt-0.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'Centro de Despacho' : 'Central Dispatch'}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#062F57] tracking-tight">
                  25+
                </div>
                <div className="mt-0.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'Municipios Activos' : 'Cities Served'}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/90 bg-white p-3.5 text-center shadow-xs">
                <div className="text-xl sm:text-2xl font-black text-[#EF3340] tracking-tight">
                  &lt;24h
                </div>
                <div className="mt-0.5 text-[9.5px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'Inspección de Sitio' : 'Site Walk Dispatch'}
                </div>
              </div>
            </div>

            {/* Interactive Municipalities Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                  {isEs ? 'MUNICIPIOS COMERCIALES PRINCIPALES:' : 'PRIMARY COMMERCIAL MUNICIPALITIES:'}
                </span>
                <span className="text-[10px] font-mono text-[#EF3340] font-bold">
                  {isEs ? '★ Sede Central Dallas' : '★ Dallas HQ'}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {citiesList.map((city) => {
                  const isSelected = activeCity.name === city.name;
                  return (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => setActiveCity(city)}
                      className={`rounded-full px-3 py-1 text-xs font-mono font-bold uppercase transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? 'bg-[#062F57] text-white shadow-xs scale-[1.02]'
                          : 'border border-slate-200/90 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                      }`}
                    >
                      {city.isHQ ? `★ ${city.name}` : city.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Selected Node Status & Direct Action Banner */}
            <div className="rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="size-2 rounded-full bg-emerald-500" />
                  <span className="text-[10.5px] font-mono text-slate-400 font-bold uppercase">
                    {isEs ? 'CORREDOR SELECCIONADO:' : 'ACTIVE CORRIDOR:'}
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {activeCity.distance}
                  </span>
                </div>
                <div className="text-sm font-black uppercase text-[#0F172A] tracking-tight truncate mt-0.5">
                  {activeCity.name}, Texas • {activeCity.status}
                </div>
              </div>

              <button
                type="button"
                onClick={openEstimateModal}
                className="w-full sm:w-auto shrink-0 px-4 py-2 rounded-xl bg-[#EF3340] hover:bg-[#D8222F] text-white text-[11px] font-black uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-xs"
              >
                {isEs ? 'Verificar Cobertura' : 'Check Dispatch'}
              </button>
            </div>
          </div>

          {/* ── RIGHT COLUMN: Google Map Showcase Enclosure (Compact) ── */}
          <div className="lg:col-span-5 flex">
            <div className="relative w-full rounded-2xl sm:rounded-[2rem] overflow-hidden border border-slate-200/90 bg-white shadow-[0_20px_50px_-15px_rgba(15,23,42,0.1)] ring-1 ring-black/[0.03] flex flex-col min-h-[400px] sm:min-h-[440px] lg:min-h-full">
              {/* Top Floating Glassmorphic Telemetry Bar */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 z-10 rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 shadow-sm flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <span className="relative flex size-2 shrink-0">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                  </span>
                  <div className="truncate">
                    <div className="text-xs font-black uppercase text-[#0F172A] tracking-tight truncate">
                      Painting Dallas Commercial HQ
                    </div>
                    <div className="text-[10px] font-mono text-slate-500 hidden sm:block">
                      32.7880° N, 96.8198° W • Dallas 75201
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#EF3340]/8 border border-[#EF3340]/20 text-[#EF3340] text-[9.5px] font-mono font-bold uppercase shrink-0">
                  <Compass className="size-3 text-[#EF3340]" />
                  <span>50mi</span>
                </div>
              </div>

              {/* Embedded Google Map iframe */}
              <div className="w-full h-full flex-1 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27532.046825110432!2d-96.8198789946654!3d32.78806731414514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864e992365832e5b%3A0xd2a969e7a90b73f6!2sDallas%2C%20TX%2075201%2C%20USA!5e1!3m2!1sen!2snp!4v1789129150911!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '380px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Painting Dallas Service Area Google Map"
                  className="w-full h-full min-h-[400px] sm:min-h-[440px] object-cover"
                />
              </div>

              {/* Bottom Floating Operations Pill */}
              <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 z-10 rounded-xl sm:rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 sm:px-4 py-2 shadow-md flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex size-6.5 items-center justify-center rounded-lg bg-[#062F57]/10 text-[#062F57] shrink-0">
                    <MapPin className="size-3 text-[#062F57]" />
                  </div>
                  <div className="truncate">
                    <span className="text-[10.5px] font-bold text-[#0F172A] block truncate">
                      {isEs ? 'Sede Central Dallas 75201' : 'Central Hub • Dallas 75201'}
                    </span>
                    <span className="text-[9.5px] font-mono text-slate-500 block truncate">
                      {isEs ? 'Despacho en todo DFW' : '50mi Fleet Dispatch'}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openEstimateModal}
                  className="inline-flex items-center gap-1 text-[11px] font-black uppercase tracking-wider text-[#062F57] hover:text-[#EF3340] transition-colors cursor-pointer shrink-0 group"
                >
                  <span>{isEs ? 'Visita' : 'Walk'}</span>
                  <ArrowRight className="size-3 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

