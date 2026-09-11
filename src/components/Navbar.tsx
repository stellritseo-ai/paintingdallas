'use client';

import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useLanguage } from '@/context/LanguageContext';
import { ServiceItem } from '@/data/translations';
import { Logo } from './Logo';
import {
  Phone,
  CalendarDays,
  ArrowUpRight,
  Menu,
  X,
  Sparkles,
  ChevronRight,
  ChevronDown,
  ArrowRight,
  Paintbrush,
  Building2,
  Building,
  Factory,
  Layers,
  Shield,
  Droplets,
  Zap,
} from 'lucide-react';

export const navigationLinks = [
  { label: 'Home', labelEs: 'Inicio', href: '#home', id: 'home' },
  { label: 'About Us', labelEs: 'Sobre Nosotros', href: '#about', id: 'about' },
  { label: 'Commercial Painting', labelEs: 'Pintura Comercial', href: '#services', id: 'services' },
  { label: 'Reviews', labelEs: 'Reseñas', href: '#reviews', id: 'reviews' },
  { label: 'Projects', labelEs: 'Proyectos', href: '#projects', id: 'projects' },
  { label: 'Contact Us', labelEs: 'Contacto', href: '#contact', id: 'contact' },
];

const serviceIcons: Record<string, React.ElementType> = {
  interior: Paintbrush,
  exterior: Building2,
  building: Building,
  industrial: Factory,
  facility: Layers,
  restoration: Shield,
  surface_prep: Droplets,
  specialty: Zap,
};

export const USFlag: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-2.5' }) => (
  <svg viewBox="0 0 20 14" className={`${className} inline-block shrink-0 rounded-[2px] overflow-hidden shadow-xs`} aria-hidden="true">
    <rect width="20" height="14" fill="#B22234" />
    <rect y="1.08" width="20" height="1.08" fill="#fff" />
    <rect y="3.23" width="20" height="1.08" fill="#fff" />
    <rect y="5.38" width="20" height="1.08" fill="#fff" />
    <rect y="7.54" width="20" height="1.08" fill="#fff" />
    <rect y="9.69" width="20" height="1.08" fill="#fff" />
    <rect y="11.85" width="20" height="1.08" fill="#fff" />
    <rect width="8.5" height="7.54" fill="#3C3B6E" />
    <circle cx="2" cy="1.9" r="0.6" fill="#fff" />
    <circle cx="4.25" cy="1.9" r="0.6" fill="#fff" />
    <circle cx="6.5" cy="1.9" r="0.6" fill="#fff" />
    <circle cx="3.1" cy="3.8" r="0.6" fill="#fff" />
    <circle cx="5.4" cy="3.8" r="0.6" fill="#fff" />
    <circle cx="2" cy="5.7" r="0.6" fill="#fff" />
    <circle cx="4.25" cy="5.7" r="0.6" fill="#fff" />
    <circle cx="6.5" cy="5.7" r="0.6" fill="#fff" />
  </svg>
);

export const SpainFlag: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-2.5' }) => (
  <svg viewBox="0 0 20 14" className={`${className} inline-block shrink-0 rounded-[2px] overflow-hidden shadow-xs`} aria-hidden="true">
    <rect width="20" height="14" fill="#AA151B" />
    <rect y="3.5" width="20" height="7" fill="#F1BF00" />
    <g transform="translate(4.2, 4.8)">
      <rect width="2.6" height="3.5" rx="0.5" fill="#AA151B" opacity="0.95" />
      <circle cx="1.3" cy="0.7" r="0.8" fill="#F1BF00" />
      <rect x="0.5" y="1.1" width="1.6" height="2" fill="#F1BF00" />
      <rect x="0.8" y="1.4" width="1" height="1.4" fill="#AA151B" />
    </g>
  </svg>
);

export const Navbar: React.FC = () => {
  const { t, language, setLanguage, openEstimateModal, openServiceModal } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handleServicesMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleServicesMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 200);
  };

  const handleServiceSelect = (service: ServiceItem) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    openServiceModal(service);
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 28);

      // ScrollSpy section detection
      const scrollPosition = scrollY + 140;
      let currentActiveId = 'home';

      for (const item of navigationLinks) {
        const el = document.getElementById(item.id);
        if (el && scrollPosition >= el.offsetTop) {
          const currentEl = document.getElementById(currentActiveId);
          if (!currentEl || el.offsetTop >= currentEl.offsetTop) {
            currentActiveId = item.id;
          }
        }
      }

      setActiveSection(currentActiveId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-white/95 backdrop-blur-2xl text-[#0F172A] shadow-[0_4px_25px_-4px_rgba(15,23,42,0.06)] transition-all duration-300">
      {/* Top Micro Concierge Ribbon (Duke Pattern) */}
      <div
        className={`hidden transition-all duration-300 sm:block ${scrolled
          ? 'max-h-0 overflow-hidden opacity-0 py-0'
          : 'max-h-9 border-b border-black/[0.06] py-2 bg-slate-50 text-slate-500'
          }`}
      >
        <div className="site-shell flex items-center justify-between text-[11px] font-medium">
          <div className="flex items-center gap-2.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="opacity-90 font-bold text-[#062F57]">10+ Years Experience</span>
            <span className="hidden md:inline opacity-40">•</span>
            <span className="hidden md:inline opacity-80">50-Mile Commercial Service Radius</span>
            <span className="opacity-40">•</span>
            <span className="opacity-90 font-bold text-[#EF3340]">100% Commercial Only</span>
          </div>

          <div className="flex items-center gap-4">
            {/* EN / ES Language Switcher with Flags */}
            <div className="flex items-center rounded-full border border-black/10 bg-white p-0.5 text-xs font-bold text-[#0F172A] shadow-xs">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase transition-all cursor-pointer ${language === 'en'
                  ? 'bg-[#062F57] text-white shadow-xs'
                  : 'text-slate-500 hover:text-black'
                  }`}
                aria-label="Switch to English"
              >
                <USFlag className="w-3.5 h-2.5" />
                <span>EN</span>
              </button>
              <button
                type="button"
                onClick={() => setLanguage('es')}
                className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase transition-all cursor-pointer ${language === 'es'
                  ? 'bg-[#EF3340] text-white shadow-xs'
                  : 'text-slate-500 hover:text-black'
                  }`}
                aria-label="Switch to Spanish"
              >
                <SpainFlag className="w-3.5 h-2.5" />
                <span>ES</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`site-shell flex flex-nowrap items-center justify-between transition-all duration-300 ${scrolled ? 'h-18 py-1.5' : 'h-20 sm:h-22 py-2'
          }`}
      >
        {/* Brand Logo */}
        <a href="#home" className="flex items-center shrink-0 group focus:outline-none">
          <Logo variant="horizontal" theme="light" compact={scrolled} />
        </a>

        {/* Center Segmented Luxury Capsule (Duke Pattern) */}
        <nav
          className="hidden items-center xl:flex xl:translate-x-10 2xl:translate-x-16 transition-transform duration-200"
          aria-label="Primary navigation"
        >
          <div className="flex items-center gap-0.5 rounded-full border border-black/10 bg-slate-100/90 p-1 text-slate-600 backdrop-blur-xl shadow-xs transition-all duration-300">
            {navigationLinks.map((item) => {
              const isActive = activeSection === item.id;
              const displayLabel = language === 'es' ? item.labelEs : item.label;

              if (item.id === 'services') {
                return (
                  <div
                    key={item.id}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <a
                      href={item.href}
                      onClick={() => setActiveSection(item.id)}
                      className={`relative inline-flex items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.05em] transition-all duration-200 whitespace-nowrap cursor-pointer ${isActive || servicesDropdownOpen
                        ? 'bg-white text-[#062F57] shadow-xs ring-1 ring-[#062F57]/20 font-black'
                        : 'text-slate-600 hover:bg-white/80 hover:text-[#0F172A]'
                        }`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                    >
                      <span>{displayLabel}</span>
                      <ChevronDown
                        className={`size-3 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180 text-[#EF3340]' : 'text-slate-400'
                          }`}
                      />
                    </a>

                    {/* Desktop Submenu Mega-Menu Dropdown */}
                    <div
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-2.5 z-50 w-[720px] max-w-[calc(100vw-2rem)] transition-all duration-200 ease-out origin-top ${servicesDropdownOpen
                        ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto visible'
                        : 'opacity-0 scale-[0.98] -translate-y-2 pointer-events-none invisible'
                        }`}
                    >
                      {/* Submenu Card Container */}
                      <div className="bg-white/98 backdrop-blur-2xl rounded-2xl border border-slate-200/90 shadow-[0_25px_60px_-15px_rgba(6,47,87,0.22),0_10px_25px_-5px_rgba(0,0,0,0.06)] ring-1 ring-black/[0.04] overflow-hidden">
                        {/* Top Gradient Hairline Accent */}
                        <div className="h-[3px] w-full bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340]" />

                        {/* Submenu Header Strip */}
                        <div className="flex items-center justify-between px-5 py-3 bg-slate-50/80 border-b border-slate-100">
                          <div className="flex items-center gap-2.5">
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#EF3340]/10 text-[#EF3340]">
                              <Sparkles className="size-2.5" />
                              100% Commercial Only
                            </span>
                            <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#062F57]">
                              {language === 'es' ? 'Capacidades de Pintura Comercial' : 'DFW Commercial Painting Capabilities'}
                            </span>
                          </div>
                          <a
                            href="#services"
                            onClick={() => {
                              setServicesDropdownOpen(false);
                              setActiveSection('services');
                            }}
                            className="group/link inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-500 hover:text-[#EF3340] transition-colors uppercase tracking-wider"
                          >
                            <span>{language === 'es' ? 'Ver Todos' : 'View All Overview'}</span>
                            <ArrowRight className="size-3 transition-transform duration-200 group-hover/link:translate-x-0.5" />
                          </a>
                        </div>

                        {/* 8 Services Grid */}
                        <div className="grid grid-cols-2 gap-2 p-3 bg-white">
                          {t.services.items.map((service) => {
                            const Icon = serviceIcons[service.id] || Building2;
                            return (
                              <div
                                key={service.id}
                                onClick={() => handleServiceSelect(service)}
                                className="group/item flex items-start gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200/90 hover:bg-slate-50/90 transition-all duration-200 cursor-pointer text-left relative"
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                  if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    handleServiceSelect(service);
                                  }
                                }}
                              >
                                {/* Icon Badge */}
                                <div className="flex size-9 items-center justify-center rounded-xl bg-slate-100/90 text-[#062F57] border border-slate-200/70 shrink-0 transition-all duration-200 group-hover/item:bg-[#062F57] group-hover/item:border-[#062F57] group-hover/item:text-white group-hover/item:shadow-xs group-hover/item:scale-105">
                                  <Icon className="size-4.5" />
                                </div>

                                {/* Text Details */}
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-1.5 mb-0.5">
                                    <span className="text-[10px] font-mono font-black text-slate-400 group-hover/item:text-[#EF3340] transition-colors">
                                      {service.number}
                                    </span>
                                    <span className="text-[11px] font-extrabold uppercase tracking-tight text-slate-800 group-hover/item:text-[#062F57] transition-colors truncate">
                                      {service.title}
                                    </span>
                                  </div>
                                  <p className="text-[10.5px] leading-snug text-slate-500 line-clamp-1 group-hover/item:text-slate-600">
                                    {service.shortDesc}
                                  </p>
                                </div>

                                {/* Subtle Hover Arrow Indicator */}
                                <ChevronRight className="size-3.5 text-slate-300 group-hover/item:text-[#EF3340] group-hover/item:translate-x-0.5 transition-all opacity-0 group-hover/item:opacity-100 shrink-0 self-center" />
                              </div>
                            );
                          })}
                        </div>

                        {/* Submenu Footer Bar */}
                        <div className="px-5 py-3 bg-gradient-to-r from-slate-50 via-slate-50 to-slate-100/90 border-t border-slate-100 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-[11px] text-slate-600">
                            <span className="flex size-6 items-center justify-center rounded-full bg-[#062F57]/10 text-[#062F57]">
                              <Sparkles className="size-3" />
                            </span>
                            <span className="font-semibold">
                              {language === 'es'
                                ? '8 Divisiones con Estimación y Asesoría Técnica en Terreno'
                                : '8 Specialized Divisions with On-Site Technical Scoping'}
                            </span>
                          </div>

                          <div className="flex items-center gap-3">
                            <a
                              href="tel:4693605805"
                              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-[#062F57] hover:text-[#EF3340] hover:border-[#EF3340]/30 transition-all text-xs font-bold shadow-2xs"
                            >
                              <Phone className="size-3 text-[#EF3340]" />
                              <span>(469) 360-5805</span>
                            </a>

                            <button
                              type="button"
                              onClick={() => {
                                setServicesDropdownOpen(false);
                                openEstimateModal();
                              }}
                              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white text-[11px] font-black uppercase tracking-wider shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                            >
                              <span>{t.nav.getEstimate}</span>
                              <ArrowUpRight className="size-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative inline-flex items-center justify-center rounded-full px-3.5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.05em] transition-all duration-200 whitespace-nowrap ${isActive
                    ? 'bg-white text-[#062F57] shadow-xs ring-1 ring-[#062F57]/20 font-black'
                    : 'text-slate-600 hover:bg-white/80 hover:text-[#0F172A]'
                    }`}
                >
                  {displayLabel}
                </a>
              );
            })}
          </div>
        </nav>

        {/* Right Actions Cluster */}
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">

          {/* Phone Pill */}
          <a
            href="tel:4693605805"
            className="group inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3.5 py-2 text-xs font-bold text-[#0F172A] shadow-xs transition-all duration-200 hover:border-[#EF3340]/40 hover:text-[#EF3340] hover:-translate-y-0.5"
          >
            <span className="flex size-5 items-center justify-center rounded-full bg-[#EF3340]/15 text-[#EF3340] transition-transform duration-200 group-hover:scale-110">
              <Phone className="size-2.5" />
            </span>
            <span className="font-bold whitespace-nowrap">(469) 360-5805</span>
          </a>

          {/* Primary Action Button */}
          <button
            type="button"
            onClick={openEstimateModal}
            className="group h-10 sm:h-11 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-5 text-xs font-extrabold tracking-wide uppercase shadow-[0_6px_20px_rgba(239,51,64,0.3)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <CalendarDays className="size-3.5 transition-transform group-hover:scale-110" />
            <span>{t.nav.getEstimate}</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile & Tablet Controls (< xl) */}
        <div className="flex xl:hidden items-center gap-2 shrink-0">
          {/* Tablet Quick Call Button */}
          <a
            href="tel:4693605805"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs font-bold text-[#0F172A] shadow-xs"
          >
            <Phone className="size-3 text-[#EF3340]" />
            <span>(469) 360-5805</span>
          </a>

          {/* Language Toggle Button */}
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold uppercase rounded-full bg-slate-100 border border-black/10 text-slate-800 cursor-pointer"
          >
            {language === 'en' ? (
              <>
                <SpainFlag className="w-3.5 h-2.5" />
                <span>ES</span>
              </>
            ) : (
              <>
                <USFlag className="w-3.5 h-2.5" />
                <span>EN</span>
              </>
            )}
          </button>

          {/* Mobile Quote Pill (Available on 380px+ viewports; on smaller phones, the fixed bottom bar provides instant Quote CTA) */}
          <button
            type="button"
            onClick={openEstimateModal}
            className="hidden min-[380px]:inline-flex px-3.5 py-1.5 text-xs font-bold text-white uppercase rounded-full bg-[#EF3340] shadow-sm hover:bg-[#D8222F] cursor-pointer"
          >
            {language === 'en' ? 'Quote' : 'Cotizar'}
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex size-10 items-center justify-center rounded-xl border border-black/10 bg-slate-50 text-slate-800 shadow-xs hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer via Portal so it escapes header backdrop-blur containment */}
      {mounted && mobileMenuOpen && createPortal(
        <div className="fixed inset-0 z-[9999] xl:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/65 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-[340px] sm:max-w-sm bg-white border-l border-slate-200 shadow-2xl flex flex-col justify-between overflow-hidden animate-in slide-in-from-right duration-300 z-10"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            {/* Drawer Top Header: Logo + Close Button */}
            <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between shrink-0 bg-slate-50/90 pt-[max(1rem,env(safe-area-inset-top))]">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center shrink-0 focus:outline-none"
              >
                <Logo variant="horizontal" theme="light" compact={true} />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="flex size-9 items-center justify-center rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-[#EF3340] hover:text-white hover:border-[#EF3340] transition-colors shadow-xs cursor-pointer"
                aria-label="Close menu"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Language Switcher Ribbon */}
            <div className="px-5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between shrink-0">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500">
                {language === 'es' ? 'Idioma / Language' : 'Language / Idioma'}
              </span>
              <div className="flex items-center space-x-1 bg-slate-100 p-1 rounded-full text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold cursor-pointer transition-all ${
                    language === 'en' ? 'bg-white shadow-xs text-[#062F57]' : 'text-slate-600 hover:text-black'
                  }`}
                >
                  <USFlag className="w-3.5 h-2.5" />
                  <span>EN</span>
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('es')}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold cursor-pointer transition-all ${
                    language === 'es' ? 'bg-[#EF3340] text-white shadow-xs' : 'text-slate-600 hover:text-black'
                  }`}
                >
                  <SpainFlag className="w-3.5 h-2.5" />
                  <span>ES</span>
                </button>
              </div>
            </div>

            {/* Scrollable Navigation Links */}
            <div className="flex-1 overflow-y-auto px-5 py-3 space-y-1">
              {navigationLinks.map((item) => {
                const displayLabel = language === 'es' ? item.labelEs : item.label;

                if (item.id === 'services') {
                  return (
                    <div key={item.id} className="border-b border-slate-100 pb-1">
                      <div className="flex items-center justify-between py-2.5">
                        <a
                          href={item.href}
                          onClick={() => {
                            setMobileMenuOpen(false);
                            setActiveSection(item.id);
                          }}
                          className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#EF3340] transition-colors"
                        >
                          {displayLabel}
                        </a>
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="p-1.5 rounded-lg text-slate-500 hover:text-[#062F57] hover:bg-slate-100 transition-colors cursor-pointer"
                          aria-label="Toggle commercial services sub-menu"
                        >
                          <ChevronDown
                            className={`size-4 transition-transform duration-200 ${
                              mobileServicesOpen ? 'rotate-180 text-[#EF3340]' : ''
                            }`}
                          />
                        </button>
                      </div>

                      {/* Mobile Submenu Accordion */}
                      {mobileServicesOpen && (
                        <div className="mt-1 mb-2 space-y-1 bg-slate-50/90 rounded-xl p-2 border border-slate-100 animate-in fade-in duration-150">
                          <div className="px-2 py-1 text-[10px] font-mono font-black uppercase tracking-wider text-slate-400">
                            {language === 'es' ? '8 Servicios Comerciales' : '8 Commercial Services'}
                          </div>
                          {t.services.items.map((service) => {
                            const Icon = serviceIcons[service.id] || Building2;
                            return (
                              <button
                                key={service.id}
                                type="button"
                                onClick={() => handleServiceSelect(service)}
                                className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-slate-700 hover:text-[#062F57] hover:bg-white transition-all group cursor-pointer"
                              >
                                <div className="flex size-7 items-center justify-center rounded-md bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-colors shrink-0">
                                  <Icon className="size-3.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-[11px] font-bold uppercase truncate">
                                    {service.title}
                                  </div>
                                </div>
                                <ChevronRight className="size-3 text-slate-400 group-hover:text-[#EF3340] shrink-0" />
                              </button>
                            );
                          })}
                          <a
                            href="#services"
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveSection('services');
                            }}
                            className="flex items-center justify-between px-2.5 py-2 mt-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-[#EF3340] bg-white border border-[#EF3340]/20 hover:bg-[#EF3340]/5 transition-colors"
                          >
                            <span>{language === 'es' ? 'Ver Todos Los Servicios' : 'View All 8 Services'}</span>
                            <ArrowRight className="size-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.id);
                    }}
                    className="flex items-center justify-between py-3 text-xs font-bold uppercase tracking-wider text-slate-800 hover:text-[#EF3340] border-b border-slate-100 transition-colors"
                  >
                    <span>{displayLabel}</span>
                    <ChevronRight className="size-4 text-slate-400" />
                  </a>
                );
              })}
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50/90 space-y-2.5 shrink-0 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
              <a
                href="tel:4693605805"
                className="flex items-center justify-center gap-2 w-full py-3 bg-[#062F57] hover:bg-[#0B477D] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-colors"
              >
                <Phone className="size-3.5 text-[#EF3340]" />
                <span>(469) 360-5805</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  openEstimateModal();
                }}
                className="w-full py-3 bg-[#EF3340] hover:bg-[#D8222F] text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-md transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span>{t.nav.getEstimate}</span>
                <ArrowUpRight className="size-3.5" />
              </button>

              <div className="text-center pt-1 text-[10px] text-slate-400 font-medium">
                {language === 'es'
                  ? 'Contratistas Comerciales Registrados • DFW'
                  : 'Registered & Insured Commercial Contractor • DFW'}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
};
