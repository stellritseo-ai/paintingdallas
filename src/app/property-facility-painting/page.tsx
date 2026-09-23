'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EstimateModal } from '@/components/EstimateModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { useLanguage } from '@/context/LanguageContext';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  Phone,
  ArrowRight,
  ChevronDown,
  Building2,
  Sparkles,
  Star,
  MapPin,
  HelpCircle,
  FileCheck,
  Award,
  Layers,
  Wrench,
  Users,
  DollarSign,
  Activity,
  FileText,
  Calendar,
  Percent,
  RefreshCw,
  Home,
  Check,
  Building,
  Key,
  Brush,
  PaintBucket,
  Shield,
  Briefcase,
  Warehouse,
  CheckSquare,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';

export default function PropertyFacilityPaintingPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pressures = [
    {
      title: 'Tenant Satisfaction',
      desc: 'Your tenants expect clean, well-maintained spaces.',
      icon: Users,
    },
    {
      title: 'Budget Constraints',
      desc: 'You need predictable pricing and no surprise costs.',
      icon: DollarSign,
    },
    {
      title: 'Operational Continuity',
      desc: "You can't afford prolonged disruptions.",
      icon: Activity,
    },
    {
      title: 'Board & Owner Expectations',
      desc: 'You need a contractor who makes you look good.',
      icon: Award,
    },
    {
      title: 'Compliance Requirements',
      desc: 'You must meet codes, regulations, and safety standards.',
      icon: ShieldCheck,
    },
  ];

  const servicesList = [
    {
      title: 'Unit Turns & Vacancy Prep',
      desc: 'Fast, reliable unit turns that get your units rent-ready quickly. We handle everything from drywall repair and painting to trim work and final touch-ups.',
      perfectFor: ['Apartment communities', 'condominiums', 'student housing', 'senior living'],
      icon: Key,
    },
    {
      title: 'Common Area Painting',
      desc: 'Keep your lobbies, hallways, stairwells, elevators, and amenity spaces looking pristine. We work in phases to minimize disruption to residents and tenants.',
      perfectFor: ['Corridors', 'lobbies', 'leasing offices', 'clubhouses', 'fitness centers'],
      icon: Building,
    },
    {
      title: 'Exterior Building Maintenance',
      desc: "Protect your property's curb appeal and structural integrity with scheduled exterior painting and coatings. We handle stucco, brick, siding, and metal surfaces.",
      perfectFor: ['Apartment complexes', 'office parks', 'retail centers', 'industrial facilities'],
      icon: Building2,
    },
    {
      title: 'Interior Office & Tenant Space Painting',
      desc: 'Refresh office suites, tenant spaces, and shared work areas. We work around business hours to keep your tenants productive and happy.',
      perfectFor: ['Office buildings', 'co-working spaces', 'professional suites'],
      icon: Briefcase,
    },
    {
      title: 'Amenity & Community Space Painting',
      desc: 'Create inviting spaces that attract and retain residents. From pools and clubhouses to playgrounds and dog parks, we deliver finishes that impress.',
      perfectFor: ['Clubhouses', 'fitness centers', 'pools', 'outdoor lounges', 'sport courts'],
      icon: Sparkles,
    },
    {
      title: 'Parking Structures & Garages',
      desc: 'Durable coatings for parking garages, stairwells, and elevator banks. We use industrial-grade products that withstand vehicle traffic and weather.',
      perfectFor: ['Above-ground and below-ground parking structures'],
      icon: Warehouse,
    },
    {
      title: 'Pressure Washing & Surface Cleaning',
      desc: 'Remove dirt, mildew, and grime from walkways, building exteriors, and common areas. Regular pressure washing extends the life of your paint and improves safety.',
      perfectFor: ['Sidewalks', 'building exteriors', 'dumpster pads', 'parking areas'],
      icon: PaintBucket,
    },
    {
      title: 'Roof Coatings & Waterproofing',
      desc: "Extend the life of your property's roof with reflective coatings and waterproofing systems. Reduce energy costs and delay costly roof replacement.",
      perfectFor: ['Flat roofs', 'metal roofs', 'commercial roofing systems'],
      icon: Shield,
    },
    {
      title: 'Signage & Branding Painting',
      desc: 'Keep your property signage, monument signs, and wayfinding markers looking sharp. We also paint and refresh branded elements.',
      perfectFor: ['Monument signs', 'building signage', 'wayfinding markers'],
      icon: Brush,
    },
    {
      title: 'Fence & Gate Painting',
      desc: "Protect and beautify your property's fencing and gates. We handle wood, metal, and vinyl surfaces.",
      perfectFor: ['Perimeter fencing', 'pool fences', 'security gates'],
      icon: Layers,
    },
  ];

  const propertyTypes = [
    { type: 'Multi-Family', projects: 'Apartment communities, condominiums, townhomes' },
    { type: 'Office Buildings', projects: 'Low-rise, mid-rise, and high-rise offices' },
    { type: 'Retail Centers', projects: 'Strip malls, shopping centers, standalone retail' },
    { type: 'Industrial Parks', projects: 'Warehouses, distribution centers, flex spaces' },
    { type: 'Medical Facilities', projects: 'Hospitals, clinics, medical office buildings' },
    { type: 'Hospitality', projects: 'Hotels, motels, resorts, event venues' },
    { type: 'Senior Living', projects: 'Assisted living, independent living, memory care' },
    { type: 'Student Housing', projects: 'Dorms, off-campus apartments, Greek housing' },
    { type: 'Mixed-Use', projects: 'Retail/residential, office/retail combinations' },
    { type: 'HOA Communities', projects: 'Single-family HOAs, townhome associations' },
  ];

  const processSteps = [
    {
      step: '1. Consultation',
      what: 'We listen to your goals, budget, and timeline.',
      why: 'Ensures alignment from day one.',
    },
    {
      step: '2. Site Assessment',
      what: 'We inspect surfaces, identify issues, and take measurements.',
      why: 'Accurate pricing and no surprises.',
    },
    {
      step: '3. Detailed Proposal',
      what: 'You receive a transparent, line-item quote.',
      why: 'No hidden fees. Clear expectations.',
    },
    {
      step: '4. Preparation',
      what: 'We protect surfaces, repair damage, and prime.',
      why: 'The secret to a long-lasting finish.',
    },
    {
      step: '5. Paint & Restore',
      what: 'Our skilled crews apply premium coatings with precision.',
      why: 'Flawless finish, every time.',
    },
    {
      step: '6. Final Walkthrough',
      what: 'We inspect every inch with you.',
      why: "We don't leave until you're 100% satisfied.",
    },
    {
      step: '7. Sign-Off & Warranty',
      what: 'Final approval backed by our written 5-year warranty.',
      why: 'Your investment is protected.',
    },
  ];

  const programBenefits = [
    {
      title: 'Scheduled Inspections',
      desc: 'Regular assessments to identify issues early before they escalate into costly capital expenditures.',
      icon: Clock,
    },
    {
      title: 'Budget Predictability',
      desc: 'Planned annual painting budgets with fixed, transparent pricing that eliminates unexpected costs.',
      icon: DollarSign,
    },
    {
      title: 'Priority Scheduling',
      desc: 'Front-of-line priority service for urgent unit turns, emergency repairs, and scheduled tenant move-ins.',
      icon: Calendar,
    },
    {
      title: 'Dedicated Account Manager',
      desc: 'One point of contact for all your properties, ensuring streamlined communication and consistent standards.',
      icon: Users,
    },
    {
      title: 'Volume Discounts',
      desc: 'Tiered, discounted pricing structures for multi-property portfolios and ongoing contract maintenance.',
      icon: Percent,
    },
    {
      title: 'Detailed Reporting',
      desc: 'Digital documentation of completed work, before/after photography, and future lifecycle recommendations.',
      icon: FileCheck,
    },
  ];

  const advantagePoints = [
    {
      title: 'Property Management Experience',
      desc: 'We understand your business, leasing cycles, and owner pressures.',
    },
    {
      title: 'Minimal Disruption',
      desc: 'We work around tenants, business hours, and daily operations.',
    },
    {
      title: 'Background-Checked Crews',
      desc: 'Uniformed, professional, and respectful of residents and property.',
    },
    {
      title: 'Dedicated Project Manager',
      desc: 'One accountable point of contact from initial scoping to sign-off.',
    },
    {
      title: 'Premium Materials',
      desc: 'We use top-tier paints and heavy-duty coatings from trusted manufacturers.',
    },
    {
      title: 'Clean Job Sites',
      desc: 'We leave your property spotless, orderly, and safe every single day.',
    },
    {
      title: '5-Year Workmanship Warranty',
      desc: 'We stand firmly behind our work with written warranty coverage.',
    },
    {
      title: 'Licensed & Insured',
      desc: 'Full liability and comprehensive workers’ compensation protection.',
    },
    {
      title: 'Multi-Property Capability',
      desc: 'We can manage and mobilize across portfolios throughout the DFW Metroplex.',
    },
  ];

  const industries = [
    {
      industry: 'Property Management',
      projects: 'Full-service management companies and REITs',
    },
    {
      industry: 'Multi-Family',
      projects: 'Apartment communities, condominiums, HOA properties',
    },
    {
      industry: 'Corporate Real Estate',
      projects: 'Office towers, corporate campuses, professional buildings',
    },
    {
      industry: 'Retail & Hospitality',
      projects: 'Shopping centers, hotels, restaurants',
    },
    {
      industry: 'Industrial',
      projects: 'Warehouses, factories, distribution centers',
    },
    {
      industry: 'Healthcare',
      projects: 'Hospitals, clinics, medical office buildings',
    },
    {
      industry: 'Senior Living',
      projects: 'Assisted living, independent living, memory care',
    },
    {
      industry: 'Student Housing',
      projects: 'Dorms, off-campus apartments, Greek housing',
    },
  ];

  const serviceCounties = [
    {
      name: 'Dallas County',
      cities: 'Dallas, Irving, Garland, Mesquite, Richardson, Grand Prairie',
    },
    {
      name: 'Collin County',
      cities: 'Plano, Frisco, McKinney, Allen, Wylie',
    },
    {
      name: 'Denton County',
      cities: 'Denton, Lewisville, Flower Mound, Little Elm',
    },
    {
      name: 'Tarrant County',
      cities: 'Fort Worth, Arlington, Grapevine, Southlake, Mansfield',
    },
    {
      name: 'Rockwall County',
      cities: 'Rockwall, Royse City',
    },
  ];

  const faqs = [
    {
      q: 'How quickly can you complete a unit turn?',
      a: 'Unit turns are our specialty. Most standard units can be completed within 1-2 days, depending on the scope of work. We prioritize unit turns to help you minimize vacancy loss.',
    },
    {
      q: 'Can you paint occupied units and common areas?',
      a: "Absolutely. We specialize in occupied property painting. We work around tenant schedules, use low-VOC paints when needed, and take extra care to protect residents' belongings.",
    },
    {
      q: 'Do you offer volume discounts for multiple properties?',
      a: 'Yes. We offer competitive pricing for property management companies with multiple properties or ongoing maintenance needs. Contact us to discuss a custom program.',
    },
    {
      q: 'What type of warranty do you offer?',
      a: 'We offer a 5-year written workmanship warranty on all property and facility painting projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: 'Are you licensed and insured?',
      a: "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers' compensation coverage. Certificates of insurance are available upon request.",
    },
    {
      q: 'Can you work with our property management software?',
      a: 'Yes. We can integrate with your existing work order and property management systems to streamline communication and scheduling.',
    },
    {
      q: 'Do you offer emergency services?',
      a: 'Yes. We offer 24/7 emergency response for urgent painting and restoration needs. Call (469) 368-5885 and follow the prompts.',
    },
    {
      q: 'Do you provide certificates of insurance?',
      a: 'Yes. We are fully licensed, bonded, and insured. We can provide certificates of insurance upon request.',
    },
  ];

  const trustBadges = [
    'Licensed & Insured',
    '5.0 Google Rating',
    '180+ Commercial Projects',
    '10+ Years Experience',
    '5-Year Workmanship Warranty',
    'Background-Checked Crews',
    'Multi-Property Capability',
    '100% Satisfaction Guarantee',
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-[#EF3340] selection:text-white">
      {/* Global Navigation */}
      <Navbar />

      {/* ── SECTION 1: CINEMATIC BREADCRUMB & HERO ─── */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-black/[0.12] bg-[#020F1D] text-white">
        {/* Background Video Layer */}
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/facility.jpg"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none brightness-[0.38] contrast-105"
          aria-hidden="true"
        >
          <source src="/images/hero.mp4" type="video/mp4" />
        </video>

        {/* Cinematic Vignette & Radial Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#020F1D]/85 via-[#020F1D]/65 to-[#020F1D]/95 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,47,87,0.5)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none opacity-40" />

        {/* Ambient Glows */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[600px] rounded-full bg-[#062F57]/45 blur-[140px]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-[#EF3340]/15 blur-[140px]"
          aria-hidden="true"
        />

        <div className="site-shell relative z-10 text-center flex flex-col items-center">
          {/* Breadcrumb Navigation Centered */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-300">
              <li>
                <Link
                  href="/"
                  className="hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>{isEs ? 'Inicio' : 'Home'}</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3 text-slate-400" />
              </li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-white transition-colors"
                >
                  <span>{isEs ? 'Pintura Comercial' : 'Commercial Painting'}</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3 text-slate-400" />
              </li>
              <li className="text-[#EF3340] font-bold">
                {isEs ? 'Pintura de Propiedades e Instalaciones' : 'Property & Facility Painting'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • FACILITY MAINTENANCE SERVICES</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Pintura Profesional de Propiedades e Instalaciones en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Mantenimiento Confiable para Administradores - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Property & Facility Painting in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Reliable Maintenance for Property Managers - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Mantenimiento de pintura confiable para administradores de propiedades, directores de instalaciones y juntas de HOA. A tiempo. En presupuesto. Cero dolores de cabeza.'
                : 'Reliable painting maintenance for property managers, facility directors, and HOA boards. On-time. On-budget. Zero headaches.'}
            </p>

            {/* Hero Metric Pill (Golden Rating & Experience Strip) */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-black/40 border border-white/20 px-5 py-2.5 backdrop-blur-md mb-8 shadow-xl">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-black text-xs sm:text-sm text-white">5.0 Google Rating</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-xs sm:text-sm text-slate-200">
                {isEs ? '180+ Proyectos Comerciales' : '180+ Commercial Projects'}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-bold text-xs sm:text-emerald-400 text-emerald-400">
                {isEs ? 'Con Licencia y Seguro' : 'Licensed & Insured'}
              </span>
            </div>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <Link
                href="/free-estimate"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{isEs ? 'Solicitar Cotización Gratuita' : 'Request a Free Estimate'}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href="tel:4693685885"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:border-[#EF3340]/60 hover:text-white shadow-md"
              >
                <Phone className="size-4 text-[#EF3340]" />
                <span>{isEs ? 'Llamar (469) 368-5885' : 'Call (469) 368-5885'}</span>
              </a>
            </div>

            {/* Trust Proof Micro-Ribbon Centered */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 pt-8 border-t border-white/15 text-xs w-full max-w-3xl justify-center">
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Clock className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Rotación Rápida 1-2 Días' : '1-2 Day Unit Turns'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Activity className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Cero Interrupción Inquilinos' : 'Zero Disruption Maintenance'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Póliza $2M+ Cobertura' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. BUILT FOR PROPERTY & FACILITY PROFESSIONALS ─────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Building2 className="size-3.5 text-[#EF3340]" />
              <span>Built for Property & Facility Professionals</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Your Trusted Painting Partner for Ongoing Maintenance
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-4">
              Managing a commercial property or facility means juggling dozens of priorities. The last thing you need is a painting contractor who misses deadlines, disrupts tenants, or delivers inconsistent quality.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              At Painting Dallas, we specialize in property and facility painting—the ongoing maintenance, unit turns, common area refreshes, and capital improvement projects that keep your property looking its best and performing at its peak.
            </p>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/property-facility.jpg"
                  alt={isEs ? "Pintura y mantenimiento de propiedades e instalaciones en Dallas" : "Property and facility maintenance painting in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Mantenimiento Preventivo de Instalaciones' : 'Proactive Property Maintenance'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pressures Grid */}
          <div className="mb-10">
            <div className="text-center text-xs font-mono font-black uppercase tracking-wider text-slate-400 mb-6">
              We Understand the Unique Pressures You Face
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {pressures.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#EF3340]/40 transition-all hover:shadow-sm group text-left"
                  >
                    <div className="size-10 rounded-xl bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center mb-4">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#062F57] uppercase tracking-wide mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-50 via-slate-100 to-slate-50 border border-slate-200 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#062F57]">
              ✨ We’ve built our reputation on being the contractor property managers call back again and again.
            </span>
          </div>
        </div>
      </section>

      {/* ── 3. OUR PROPERTY & FACILITY PAINTING SERVICES ────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="size-3.5" />
              <span>Our Property & Facility Painting Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Comprehensive Painting Solutions for Every Property Type
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide a full spectrum of property and facility painting services tailored to the unique needs of property management professionals across the DFW Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-[#EF3340]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-11 rounded-xl bg-slate-100 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center">
                        <Icon className="size-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#062F57] mb-2.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Perfect for:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.perfectFor.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-block text-[11px] px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. PROPERTY TYPES WE SERVE ─────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Building className="size-3.5 text-[#EF3340]" />
              <span>Property Types We Serve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Expertise Across Every Property Type
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Tailored coating protocols and dedicated crew staging built for the operational nuances of every real estate asset class.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6">Property Type</th>
                  <th className="py-4 px-6">Common Projects</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {propertyTypes.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57] whitespace-nowrap flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#EF3340]" />
                      {row.type}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 font-medium">
                      {row.projects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {propertyTypes.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-1 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {row.type}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {row.projects}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. OUR PROVEN PROPERTY & FACILITY PAINTING PROCESS ───────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="size-3.5" />
              <span>Our Proven Property & Facility Painting Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              A Structured Approach for Reliable Results
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We follow a rigorous 7-step process to ensure every project is completed on time, on budget, and to the highest standard.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/4">Step</th>
                  <th className="py-4 px-6 w-1/2">What We Do</th>
                  <th className="py-4 px-6 w-1/4">Why It Matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {processSteps.map((step, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60 hover:bg-slate-100/50'}
                  >
                    <td className="py-4 px-6 font-bold text-[#062F57]">
                      {step.step}
                    </td>
                    <td className="py-4 px-6 text-slate-700">
                      {step.what}
                    </td>
                    <td className="py-4 px-6 text-[#EF3340] font-semibold text-xs">
                      {step.why}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Step Cards */}
          <div className="lg:hidden space-y-3">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs"
              >
                <div className="text-xs font-mono font-bold text-[#EF3340] uppercase tracking-wider mb-1">
                  {step.step}
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  {step.what}
                </div>
                <div className="text-xs text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#062F57]">Why It Matters:</span>{' '}
                  {step.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. MAINTENANCE PROGRAMS FOR PROPERTY MANAGERS ───────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <RefreshCw className="size-3.5 text-[#EF3340]" />
              <span>Maintenance Programs for Property Managers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Stay Ahead of Maintenance with a Custom Painting Plan
            </h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Reactive painting is expensive. Proactive maintenance saves money, extends asset life, and keeps your property looking its best year-round.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              We offer customized maintenance painting programs designed specifically for property management companies and facility departments.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {programBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-[#EF3340]/40 hover:bg-white hover:shadow-sm transition-all group"
                >
                  <div className="size-11 rounded-xl bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center mb-4">
                    <Icon className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#062F57] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Callout Box */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#020F1D] to-[#0A2540] text-white flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-lg font-bold mb-1">
                Ready to Lower Turnover Costs & Protect Your Portfolio?
              </div>
              <div className="text-xs text-slate-300">
                Contact us to learn how a maintenance program can save you time and money.
              </div>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/free-estimate"
                className="px-6 py-3 rounded-xl bg-[#EF3340] hover:bg-[#d02733] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Inquire About Programs
              </Link>
              <a
                href="tel:4693685885"
                className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                Call (469) 368-5885
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WHAT SETS PAINTING DALLAS APART? ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="size-3.5" />
              <span>What Sets Painting Dallas Apart?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              The Painting Dallas Advantage for Property Managers
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you hire us for your property or facility painting project, you get more than just paint. You get a partner dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantagePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#EF3340]/40 hover:shadow-sm transition-all flex items-start gap-3.5"
              >
                <div className="size-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="size-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#062F57] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. INDUSTRIES WE SERVE ─────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="size-3.5 text-[#EF3340]" />
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Trusted Across Diverse Property Sectors
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              From commercial real estate to specialized hospitality and healthcare facilities, we deliver tailored painting solutions across Texas.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/3">Industry</th>
                  <th className="py-4 px-6 w-2/3">Common Projects</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {industries.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57] whitespace-nowrap flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#EF3340]" />
                      {row.industry}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 font-medium">
                      {row.projects}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {industries.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-1 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {row.industry}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {row.projects}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 9. SERVICE AREAS ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="size-3.5" />
              <span>Service Areas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Proudly Serving the DFW Metroplex
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide property and facility painting services within a 50-mile radius of Dallas, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {serviceCounties.map((county, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:border-[#062F57]/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2 font-bold text-[#062F57] text-sm">
                  <MapPin className="size-4 text-[#EF3340] shrink-0" />
                  <span>{county.name}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed pl-6">
                  {county.cities}
                </p>
              </div>
            ))}

            {/* 50-Mile Radius Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#062F57] to-[#0A2540] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-1.5 font-bold text-sm text-white">
                  <Sparkles className="size-4 text-[#EF3340]" />
                  <span>50-Mile Service Coverage</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Full rapid dispatch across all North Texas commercial corridors and sub-markets.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-[#EF3340] font-bold">
                Rapid Mobilization Available
              </div>
            </div>
          </div>

          {/* Quick confirmation strip */}
          <div className="p-5 rounded-2xl bg-white border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs sm:text-sm font-semibold text-slate-700">
              Not sure if we cover your area? Give us a call at{' '}
              <a
                href="tel:4693685885"
                className="font-bold text-[#062F57] hover:text-[#EF3340] underline transition-colors"
              >
                (469) 368-5885
              </a>
              —we likely do.
            </span>
            <a
              href="tel:4693685885"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#062F57] hover:bg-[#0A2540] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0"
            >
              <Phone className="size-3.5 text-[#EF3340]" />
              <span>Call Us Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 10. FREQUENTLY ASKED QUESTIONS ─────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="size-3.5 text-[#EF3340]" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Common Questions About Property & Facility Painting
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Clear answers to the most common questions property managers and facility directors ask us.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#062F57] flex items-center gap-3">
                      <span className="size-2 rounded-full bg-[#EF3340] shrink-0" />
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#EF3340]' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/50 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 11. READY TO ELEVATE YOUR PROPERTY? ─────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#020F1D] via-[#062F57] to-[#0A2540] text-white relative overflow-hidden">
        {/* Ambient Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-[92%] max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="size-3.5 text-[#EF3340]" />
            <span>Ready to Elevate Your Property?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Keep Your Property Looking Its Best
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you’re managing a single property or a multi-property portfolio, Painting Dallas is ready to deliver.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              href="/free-estimate"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#EF3340] hover:bg-[#d02733] text-white font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.99]"
            >
              <span>Request a Free Estimate</span>
              <ArrowRight className="size-4" />
            </Link>
            <a
              href="tel:4693685885"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold text-sm tracking-wide backdrop-blur-md transition-all hover:scale-[1.02] active:scale-[0.99]"
            >
              <Phone className="size-4 text-[#EF3340]" />
              <span>Call (469) 368-5885</span>
            </a>
          </div>

          <p className="text-xs text-slate-400 font-semibold tracking-wide">
            Trusted by 180+ commercial clients across the Dallas-Fort Worth Metroplex.
          </p>
        </div>
      </section>

      {/* ── 12. TRUST BADGES SECTION ────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {trustBadges.map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-bold text-[#062F57]"
              >
                <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                <span>{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Modals & Sticky Mobile Bar */}
      <EstimateModal />
      <ServiceDetailModal />
      <ProjectDetailModal />
      <MobileStickyBar />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
