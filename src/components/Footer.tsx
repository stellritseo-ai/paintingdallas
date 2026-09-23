'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Logo } from './Logo';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const HomeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const MapMarkerIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: 'https://www.facebook.com', label: 'Facebook' },
  { icon: HomeIcon, href: 'https://nextdoor.com', label: 'Nextdoor' },
  { icon: MapMarkerIcon, href: 'https://www.google.com/business', label: 'Google My Business' },
];

/** Mobile Collapsible Accordion Section (Brown Pattern) */
function MobileCollapsibleSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/10 py-3">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center justify-between w-full py-1 text-left cursor-pointer"
        aria-expanded={open}
      >
        <span className="text-xs uppercase tracking-widest text-[#EF3340] font-bold">
          {title}
        </span>
        <ChevronDown
          className={`h-4 w-4 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && <div className="pt-3 pb-1">{children}</div>}
    </div>
  );
}

export const Footer: React.FC = () => {
  const { t, language, setLanguage } = useLanguage();
  const isEs = language === 'es';

  const quickLinks = [
    { label: isEs ? 'Inicio' : 'Home', href: '/' },
    { label: isEs ? 'Sobre Nosotros' : 'About Us', href: '/about' },
    { label: isEs ? 'Servicios Comerciales' : 'Commercial Services', href: '/#services' },
    { label: isEs ? 'Especialización Comercial' : 'Commercial Only', href: '/#commercial-only' },
    { label: isEs ? 'Proyectos Realizados' : 'Projects Portfolio', href: '/projects' },
    { label: isEs ? 'Testimonios' : 'Testimonials', href: '/reviews' },
    { label: isEs ? 'Área de Cobertura' : 'Service Area', href: '/#service-area' },
    { label: isEs ? 'Solicitar Cotización' : 'Request a Quote', href: '/contact' },
  ];

  const servicesLinks = [
    { label: isEs ? 'Pintura Interior Comercial' : 'Commercial Interior Painting', href: '/commercial-interior-painting' },
    { label: isEs ? 'Pintura Exterior Comercial' : 'Commercial Exterior Painting', href: '/commercial-exterior-painting' },
    { label: isEs ? 'Pintura de Edificios Comerciales' : 'Commercial Building Painting', href: '/commercial-building-painting' },
    { label: isEs ? 'Pintura Industrial' : 'Industrial Painting', href: '/industrial-painting' },
    { label: isEs ? 'Pintura de Propiedades e Instalaciones' : 'Property & Facility Painting', href: '/property-facility-painting' },
    { label: isEs ? 'Restauración de Pintura Comercial' : 'Commercial Painting Restoration', href: '/commercial-painting-restoration' },
    { label: isEs ? 'Recubrimientos Especiales' : 'Specialty Coatings', href: '/specialty-coatings' },
    { label: isEs ? 'Lavado a Presión y Preparación' : 'Surface Prep & Pressure Washing', href: '/pressure-washing-surface-preparation' },
  ];

  const serviceAreaLinks = [
    { label: 'Dallas, TX (HQ)', href: '/#service-area' },
    { label: 'Fort Worth, TX', href: '/#service-area' },
    { label: 'Plano, TX', href: '/#service-area' },
    { label: 'Irving, TX', href: '/#service-area' },
    { label: 'Arlington, TX', href: '/#service-area' },
    { label: 'Frisco, TX', href: '/#service-area' },
    { label: 'Garland, TX', href: '/#service-area' },
    { label: 'Grand Prairie, TX', href: '/#service-area' },
    { label: isEs ? 'Toda el Área DFW (Radio 50-Mi)' : 'All Service Areas (50-Mi)', href: '/#service-area' },
  ];

  return (
    <footer className="relative bg-[#020F1D] text-white overflow-hidden border-t border-white/15 font-['Inter',sans-serif]">
      {/* Background patterns like brown */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div
        className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-[#062F57]/25 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-[90%] max-w-7xl pt-10 sm:pt-14 lg:pt-16 pb-24 xl:pb-[20px] z-10 text-left">
        {/* ── MOBILE VERSION (COLLAPSIBLE LIKE BROWN) ────────────────────────── */}
        <div className="block lg:hidden">
          {/* Logo & Description */}
          <div className="mb-4">
            <div className="mb-4">
              <Logo variant="horizontal" theme="dark" />
            </div>

            <p className="text-[13px] text-slate-300 leading-relaxed font-medium mb-4">
              {isEs
                ? 'Con décadas de experiencia combinada, Painting Dallas ofrece pintura comercial certificada, pisos epóxicos y restauración en Dallas-Fort Worth y su radio de 50 millas.'
                : 'Backed by decades of combined commercial craftsmanship, Painting Dallas provides licensed, insured, and bonded commercial painting, specialty epoxy coatings, and facility repainting across Dallas-Fort Worth and the 50-mile radius.'}
            </p>

            {/* Phone CTA Banner */}
            <a
              href="tel:4693685885"
              className="flex items-center gap-3 w-full bg-gradient-to-r from-[#062F57] to-[#0B477D] border border-white/20 rounded-2xl px-4 py-3 mb-4 shadow-lg hover:border-[#EF3340]/60 transition-colors"
            >
              <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <Phone className="h-4 w-4 text-[#EF3340]" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                  {isEs ? 'Línea de Despacho Comercial' : 'Commercial Dispatch Line'}
                </span>
                <span className="font-black text-white text-[15px] tracking-tight leading-tight font-mono">
                  (469) 368-5885
                </span>
              </div>
            </a>

            {/* Trust Badges - 2x2 grid */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {['Licensed', 'Insured', 'Bonded', '$5M Aggregate'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-2 bg-[#062F57]/60 border border-white/15 rounded-xl px-3 py-2 text-[10px] font-bold text-white uppercase tracking-wide"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EF3340] shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>

            {/* Language Switcher on Mobile */}
            <div className="flex items-center gap-2 mb-4 text-xs font-mono">
              <span className="text-slate-400 text-[11px] font-bold uppercase">{isEs ? 'Idioma:' : 'Language:'}</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full font-bold uppercase transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-[#062F57] shadow-xs'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full font-bold uppercase transition-colors cursor-pointer ${
                  language === 'es'
                    ? 'bg-[#EF3340] text-white shadow-xs'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                Español
              </button>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-bold text-slate-400">{isEs ? 'Síganos:' : 'Follow Us:'}</span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900/80 border border-white/15 text-slate-300 hover:text-[#EF3340] hover:border-[#EF3340]/40 transition-all shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Collapsible Sections */}
          <MobileCollapsibleSection title={isEs ? 'Enlaces Rápidos' : 'Quick Links'}>
            <ul className="space-y-2.5">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-slate-300 hover:text-white font-semibold block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={isEs ? 'Servicios' : 'Our Services'}>
            <ul className="space-y-2.5">
              {servicesLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-slate-300 hover:text-white font-semibold block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={isEs ? 'Áreas de Servicio' : 'Service Areas'}>
            <ul className="space-y-2.5">
              {serviceAreaLinks.map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-xs text-slate-300 hover:text-white font-semibold block">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={isEs ? 'Contáctenos' : 'Contact Us'}>
            <ul className="space-y-3 text-xs">
              <li>
                <a href="tel:4693685885" className="flex items-center gap-2.5 text-slate-300">
                  <Phone className="h-3.5 w-3.5 text-[#EF3340] shrink-0" />
                  <span className="font-mono">(469) 368-5885</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@paintingdallas.com" className="flex items-center gap-2.5 text-slate-300 break-all">
                  <Mail className="h-3.5 w-3.5 text-[#EF3340] shrink-0" />
                  <span>info@paintingdallas.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2.5 text-slate-300">
                  <MapPin className="h-3.5 w-3.5 text-[#EF3340] shrink-0" />
                  <span>Dallas, TX 75201</span>
                </div>
              </li>
            </ul>
          </MobileCollapsibleSection>

          <MobileCollapsibleSection title={isEs ? 'Horario Comercial' : 'Business Hours'}>
            <div className="bg-black/40 border border-white/15 rounded-xl p-3 text-xs text-slate-300 leading-relaxed font-semibold space-y-1 font-mono">
              <span className="text-emerald-400 font-black uppercase tracking-wider block mb-1 text-[10px]">
                ⚡ Commercial Estimating Desk
              </span>
              <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
              <p className="text-rose-400">Sunday: Closed</p>
              <p className="text-[10px] text-slate-400 pt-1 border-t border-white/10 font-normal">
                * Pre-scheduled night shifts operate 24/7 per contract
              </p>
            </div>
          </MobileCollapsibleSection>
        </div>

        {/* ── DESKTOP VERSION (LIKE BROWN PROJECT) ──────────────── */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-start">
          {/* Col 1: Brand Info (col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <a href="#home" className="inline-block">
              <Logo variant="horizontal" theme="dark" />
            </a>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm font-medium">
              {isEs
                ? 'Con décadas de experiencia combinada, Painting Dallas ofrece pintura comercial certificada, pisos epóxicos y restauración en Dallas-Fort Worth y su radio de 50 millas.'
                : 'Backed by decades of combined commercial craftsmanship, Painting Dallas provides licensed, insured, and bonded commercial painting, specialty epoxy coatings, and facility repainting across Dallas-Fort Worth and the 50-mile radius.'}
            </p>

            {/* Socials */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-slate-400">{isEs ? 'Síganos:' : 'Follow Us:'}</span>
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid place-items-center h-9 w-9 rounded-xl bg-slate-900/90 border border-white/15 text-slate-300 hover:text-white hover:bg-[#062F57] hover:border-[#EF3340]/50 transition-all shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-2 pt-1">
              {['Licensed', 'Insured', 'Bonded', '$5M Aggregate'].map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 bg-[#062F57]/60 border border-white/15 rounded-xl px-3 py-1.5 text-[10px] font-bold text-white uppercase tracking-wider"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-[#EF3340] shrink-0" />
                  ✓ {badge}
                </div>
              ))}
            </div>

            {/* Language Switcher */}
            <div className="pt-2 flex items-center gap-2 text-xs font-mono">
              <span className="text-slate-400 text-[11px] font-bold uppercase">{isEs ? 'Idioma:' : 'Language:'}</span>
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full font-bold uppercase transition-colors cursor-pointer ${
                  language === 'en'
                    ? 'bg-white text-[#062F57] shadow-xs'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`px-3 py-1 rounded-full font-bold uppercase transition-colors cursor-pointer ${
                  language === 'es'
                    ? 'bg-[#EF3340] text-white shadow-xs'
                    : 'bg-white/10 text-slate-400 hover:text-white'
                }`}
              >
                Español
              </button>
            </div>
          </div>

          {/* Col 2: Quick Links (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#EF3340] font-extrabold mb-6">
              {isEs ? 'Enlaces Rápidos' : 'Quick Links'}
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#EF3340] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (col-span-3) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-[#EF3340] font-extrabold mb-6">
              {isEs ? 'Nuestros Servicios' : 'Our Services'}
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              {servicesLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="h-3 w-3 text-[#EF3340] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Service Areas (col-span-2) */}
          <div className="lg:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-[#EF3340] font-extrabold mb-6">
              {isEs ? 'Áreas de Servicio' : 'Service Areas'}
            </h3>
            <ul className="space-y-2 text-xs font-semibold">
              {serviceAreaLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-300 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="h-2.5 w-2.5 text-[#EF3340] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
                    <span className="truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact & Hours (col-span-2) */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-[#EF3340] font-extrabold mb-5">
                {isEs ? 'Contáctenos' : 'Contact Us'}
              </h3>
              <ul className="space-y-3.5 text-sm">
                <li>
                  <a
                    href="tel:4693685885"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#062F57] border border-white/20 flex items-center justify-center text-[#EF3340] group-hover:bg-[#EF3340] group-hover:text-white transition-all shrink-0">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        {isEs ? 'Teléfono' : 'Phone'}
                      </span>
                      <span className="font-semibold text-white tracking-tight text-xs font-mono">
                        (469) 368-5885
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@paintingdallas.com"
                    className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                  >
                    <div className="h-8 w-8 rounded-lg bg-[#062F57] border border-white/20 flex items-center justify-center text-[#EF3340] group-hover:bg-[#EF3340] group-hover:text-white transition-all shrink-0">
                      <Mail className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        {isEs ? 'Correo' : 'Email'}
                      </span>
                      <span className="font-semibold text-white tracking-tight text-xs truncate font-mono">
                        info@paintingdallas.com
                      </span>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-slate-300">
                    <div className="h-8 w-8 rounded-lg bg-[#062F57] border border-white/20 flex items-center justify-center text-[#EF3340] shrink-0">
                      <MapPin className="h-3.5 w-3.5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-bold text-slate-400 tracking-wider">
                        {isEs ? 'Dirección' : 'Address'}
                      </span>
                      <span className="font-semibold text-white tracking-tight text-xs leading-snug">
                        Dallas, TX 75201
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours card */}
            <div className="bg-black/40 border border-white/15 rounded-2xl p-4 font-mono">
              <span className="text-white font-black uppercase tracking-wider block mb-2 text-[10px] flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                ⚡ {isEs ? 'Mesa de Estimación' : 'Estimating Desk'}
              </span>
              <div className="text-xs text-slate-300 leading-relaxed font-semibold space-y-1">
                <p>Mon–Sat: 8:00 AM – 5:00 PM</p>
                <p className="text-rose-400">Sunday: Closed</p>
                <p className="text-[10px] text-slate-400 pt-1 border-t border-white/10 font-normal">
                  * 24/7 Night &amp; Weekend Phasing Available
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── BOTTOM BAR (LIKE BROWN) ───────────────────────────────────────── */}
        <div className="mt-10 sm:mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 order-2 sm:order-1 text-xs text-slate-400 font-semibold">
            <p>
              © 2026 Painting Dallas Commercial Contractors.{' '}
              {isEs ? 'Todos los derechos reservados.' : 'All Rights Reserved.'}
            </p>
            <span className="hidden sm:inline text-white/20">|</span>
            <p className="text-slate-400">
              {isEs ? 'Área DFW y radio de 50 millas.' : 'Serving the DFW Metroplex & 50-mile radius.'}
            </p>
          </div>

          <div className="flex items-center gap-6 order-1 sm:order-2">
            <p className="text-xs text-slate-400 font-semibold hidden sm:block">
              ✓ Licensed · Insured · Bonded · $5,000,000 Liability
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-xs text-slate-300 hover:text-white transition-colors font-bold flex items-center gap-2 cursor-pointer select-none group"
            >
              <span>{isEs ? 'Volver Arriba' : 'Back to Top'}</span>
              <ArrowRight className="h-4 w-4 -rotate-90 text-[#EF3340] group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
