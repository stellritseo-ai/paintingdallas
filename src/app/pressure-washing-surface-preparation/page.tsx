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
  AlertTriangle,
  DollarSign,
  Activity,
  FileText,
  Calendar,
  Percent,
  RefreshCw,
  Home,
  Check,
  Building,
  Brush,
  PaintBucket,
  Shield,
  Briefcase,
  Warehouse,
  CheckSquare,
  Droplets,
  Flame,
  Hammer,
  Zap,
  Gauge,
  Thermometer,
  Trash2,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';

export default function PressureWashingSurfacePrepPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const pressureWashingServices = [
    {
      title: 'Building Exterior Pressure Washing',
      desc: 'Remove years of dirt, mildew, algae, and grime from building exteriors. We use commercial-grade equipment and eco-friendly cleaning solutions to restore your property’s appearance.',
      perfectFor: ['Office buildings', 'retail centers', 'multi-family properties', 'industrial facilities'],
      icon: Building2,
    },
    {
      title: 'Sidewalk & Walkway Cleaning',
      desc: 'Improve safety and appearance with professional sidewalk and walkway cleaning. We remove gum, stains, and built-up grime.',
      perfectFor: ['Office parks', 'retail centers', 'multi-family communities', 'schools'],
      icon: Activity,
    },
    {
      title: 'Parking Lot & Garage Cleaning',
      desc: 'Remove oil stains, tire marks, and dirt from parking lots and garages. We use hot water and specialized degreasers for tough stains.',
      perfectFor: ['Parking structures', 'surface lots', 'loading docks'],
      icon: Warehouse,
    },
    {
      title: 'Dumpster Pad Cleaning',
      desc: 'Sanitize and degrease dumpster pads to eliminate odors and pests. We remove grease, food waste, and bacteria.',
      perfectFor: ['Restaurants', 'retail centers', 'multi-family properties', 'grocery stores'],
      icon: Trash2,
    },
    {
      title: 'Drive-Thru & Menu Board Cleaning',
      desc: 'Keep your drive-thru and menu boards clean and presentable. We remove grease, exhaust residue, and grime.',
      perfectFor: ['Quick-service restaurants', 'banks', 'pharmacies'],
      icon: Sparkles,
    },
    {
      title: 'Awning & Canopy Cleaning',
      desc: 'Remove mildew and dirt from fabric and metal awnings. We use gentle cleaning methods that won’t damage materials.',
      perfectFor: ['Retail storefronts', 'restaurants', 'office entrances'],
      icon: Shield,
    },
    {
      title: 'Fence & Gate Cleaning',
      desc: 'Restore the appearance of wood, vinyl, and metal fencing. We remove mildew, dirt, and oxidation.',
      perfectFor: ['Perimeter fencing', 'pool fences', 'security gates'],
      icon: Layers,
    },
    {
      title: 'Concrete & Masonry Cleaning',
      desc: 'Remove stains, efflorescence, and embedded dirt from concrete, brick, and stone surfaces.',
      perfectFor: ['Building facades', 'retaining walls', 'monuments', 'columns'],
      icon: Hammer,
    },
    {
      title: 'Graffiti Removal',
      desc: 'Remove graffiti from building exteriors, dumpsters, and hard surfaces. We use specialized solutions that lift paint without damaging substrates.',
      perfectFor: ['Urban commercial properties', 'transit stations', 'public buildings'],
      icon: Brush,
    },
    {
      title: 'Roof Cleaning',
      desc: 'Remove black streaks, mildew, and algae from roofs. We use soft-wash methods that won’t damage shingles or void warranties.',
      perfectFor: ['Commercial roofs', 'multi-family properties', 'retail centers'],
      icon: Home,
    },
  ];

  const surfacePrepServices = [
    {
      title: 'Power Washing & Rinsing',
      desc: 'Removing dirt, chalk, mildew, and loose contaminants from all surfaces.',
      icon: Droplets,
    },
    {
      title: 'Hand Scraping & Sanding',
      desc: 'Removing loose and peeling paint by hand for areas where pressure washing is not appropriate.',
      icon: Wrench,
    },
    {
      title: 'Abrasive Blasting',
      desc: 'For industrial applications, we use abrasive blasting (sandblasting) to achieve SSPC-compliant surface profiles for maximum coating adhesion.',
      icon: Zap,
    },
    {
      title: 'Chemical Stripping',
      desc: 'Removing old coatings, stains, and contaminants using specialized chemical strippers.',
      icon: PaintBucket,
    },
    {
      title: 'Caulking & Sealing',
      desc: 'Sealing gaps, joints, and penetrations to prevent moisture intrusion and improve appearance.',
      icon: ShieldCheck,
    },
    {
      title: 'Patching & Repair',
      desc: 'Repairing cracks, holes, and damaged surfaces with appropriate patching materials.',
      icon: Hammer,
    },
    {
      title: 'Priming',
      desc: 'Applying the correct primer for the substrate and topcoat to ensure proper adhesion and color uniformity.',
      icon: Brush,
    },
    {
      title: 'Masking & Protection',
      desc: 'Protecting windows, doors, landscaping, and adjacent surfaces from overspray and damage.',
      icon: CheckSquare,
    },
    {
      title: 'Profile Verification',
      desc: 'For industrial projects, we verify anchor profile using approved methods to ensure coating adhesion.',
      icon: Gauge,
    },
    {
      title: 'Moisture Testing',
      desc: 'Testing concrete and masonry for moisture content before applying coatings to prevent blistering and failure.',
      icon: Thermometer,
    },
  ];

  const substrateMatrix = [
    { surface: 'Stucco', method: 'Pressure washing, crack repair, patching, priming' },
    { surface: 'Brick & Masonry', method: 'Pressure washing, tuckpointing, efflorescence treatment' },
    { surface: 'Concrete', method: 'Pressure washing, grinding, acid etching, sealing' },
    { surface: 'Wood Siding', method: 'Hand scraping, sanding, priming, caulking' },
    { surface: 'Metal & Steel', method: 'Abrasive blasting, power tool cleaning, priming' },
    { surface: 'EIFS', method: 'Soft washing, crack repair, patching, priming' },
    { surface: 'Fiber Cement', method: 'Pressure washing, patching, priming' },
    { surface: 'Aluminum', method: 'Chemical cleaning, etching, priming' },
    { surface: 'Galvanized Steel', method: 'Chemical cleaning, etching, priming' },
    { surface: 'Previously Painted Surfaces', method: 'Assessment, scraping, sanding, priming' },
  ];

  const contaminantsRemoved = [
    { item: 'Dirt & Dust', why: 'Interferes with adhesion' },
    { item: 'Mildew & Algae', why: 'Causes peeling and staining' },
    { item: 'Chalk', why: 'Reduces adhesion and causes color fade' },
    { item: 'Oil & Grease', why: 'Prevents paint from bonding' },
    { item: 'Loose Paint', why: 'Causes peeling and flaking' },
    { item: 'Rust', why: 'Causes corrosion and coating failure' },
    { item: 'Efflorescence', why: 'Indicates moisture issues' },
    { item: 'Mold', why: 'Health hazard and adhesion problem' },
  ];

  const qualitiesCreated = [
    { item: 'Clean Surfaces', desc: 'Free of contaminants' },
    { item: 'Proper Profile', desc: 'Anchor pattern for mechanical bond' },
    { item: 'Sound Substrate', desc: 'Free of loose or damaged material' },
    { item: 'Correct Priming', desc: 'Chemical bond and corrosion protection' },
    { item: 'Sealed Surfaces', desc: 'Protected from moisture intrusion' },
  ];

  const processSteps = [
    {
      step: '1. Consultation',
      what: 'We listen to your goals, budget, and timeline.',
      why: 'Understand the scope and requirements.',
    },
    {
      step: '2. Site Assessment',
      what: 'We inspect surfaces, identify contaminants, and test adhesion.',
      why: 'Determine the correct preparation method.',
    },
    {
      step: '3. Detailed Proposal',
      what: 'You receive a transparent, line-item quote.',
      why: 'No hidden fees. Clear expectations.',
    },
    {
      step: '4. Containment & Protection',
      what: 'We protect landscaping, windows, and adjacent surfaces.',
      why: 'Prevents damage and overspray.',
    },
    {
      step: '5. Cleaning & Prep',
      what: 'We pressure wash, scrape, sand, or blast as needed.',
      why: 'Removes contaminants and creates profile.',
    },
    {
      step: '6. Repairs & Priming',
      what: 'We repair damage, caulk, and apply primer.',
      why: 'Creates a sound, uniform surface.',
    },
    {
      step: '7. Final Inspection',
      what: 'We inspect every inch with you before painting.',
      why: 'Ensures readiness for coating application.',
    },
  ];

  const equipmentList = [
    {
      name: 'Hot Water Pressure Washers',
      desc: 'Up to 4,000 PSI for tough stains, oil, and grease eradication.',
      icon: Flame,
    },
    {
      name: 'Cold Water Pressure Washers',
      desc: 'For delicate surfaces and general high-efficiency exterior cleaning.',
      icon: Droplets,
    },
    {
      name: 'Soft Wash Systems',
      desc: 'Low-pressure cleaning for roofs, stucco, and delicate substrates.',
      icon: Shield,
    },
    {
      name: 'Abrasive Blasting Equipment',
      desc: 'For industrial surface profiling and heavy rust removal.',
      icon: Zap,
    },
    {
      name: 'Airless Paint Sprayers',
      desc: 'For uniform, continuous primer and sealer application.',
      icon: PaintBucket,
    },
    {
      name: 'Moisture Meters',
      desc: 'For concrete and masonry internal moisture content testing.',
      icon: Thermometer,
    },
    {
      name: 'DFT Gauges',
      desc: 'For digital dry film thickness and anchor profile verification.',
      icon: Gauge,
    },
  ];

  const advantagePoints = [
    {
      title: 'Preparation Specialists',
      desc: 'We understand substrates, coatings, and chemical/mechanical adhesion.',
    },
    {
      title: 'Commercial-Grade Equipment',
      desc: 'Hot water, high pressure up to 4,000 PSI, and soft wash capabilities.',
    },
    {
      title: 'Eco-Friendly Solutions',
      desc: 'We use biodegradable cleaners and environmentally approved detergents.',
    },
    {
      title: 'Background-Checked Crews',
      desc: 'Uniformed, professional, and respectful of your active property.',
    },
    {
      title: 'Dedicated Project Manager',
      desc: 'One point of contact from technical assessment to final handover.',
    },
    {
      title: 'Minimal Disruption',
      desc: 'We work around your business hours and customer traffic.',
    },
    {
      title: 'Clean Job Sites',
      desc: 'We contain runoff, protect drains, and leave your property spotless.',
    },
    {
      title: '5-Year Workmanship Warranty',
      desc: 'We stand firmly behind our preparation and coating work.',
    },
    {
      title: 'Licensed & Insured',
      desc: 'Full general liability and comprehensive workers’ compensation protection.',
    },
  ];

  const whyChooseUsPillars = [
    {
      title: 'Expert Assessment',
      desc: 'We identify the right cleaning method for each surface.',
    },
    {
      title: 'Proper Techniques',
      desc: 'We use the correct pressure, temperature, and detergents.',
    },
    {
      title: 'Surface Protection',
      desc: 'We protect delicate surfaces from damage and water intrusion.',
    },
    {
      title: 'Runoff Containment',
      desc: 'We contain and properly dispose of wastewater per municipal codes.',
    },
    {
      title: 'Seamless Integration',
      desc: 'If painting follows, we transition seamlessly from prep to finish coats.',
    },
  ];

  const industries = [
    {
      industry: 'Multi-Family',
      projects: 'Building exteriors, walkways, dumpster pads, garages',
    },
    {
      industry: 'Office Buildings',
      projects: 'Facades, sidewalks, parking areas, awnings',
    },
    {
      industry: 'Retail Centers',
      projects: 'Storefronts, sidewalks, dumpster pads, signage',
    },
    {
      industry: 'Restaurants',
      projects: 'Drive-thrus, dumpster pads, patios, awnings',
    },
    {
      industry: 'Industrial',
      projects: 'Building exteriors, loading docks, equipment',
    },
    {
      industry: 'Healthcare',
      projects: 'Building exteriors, entrances, walkways',
    },
    {
      industry: 'Hospitality',
      projects: 'Facades, pool areas, walkways, parking',
    },
    {
      industry: 'Education',
      projects: 'Buildings, walkways, stadiums, parking lots',
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
      q: 'How often should commercial properties be pressure washed?',
      a: 'Most commercial properties benefit from pressure washing 1-2 times per year. High-traffic areas, restaurants, and properties in humid climates may need more frequent cleaning.',
    },
    {
      q: "What's the difference between pressure washing and soft washing?",
      a: 'Pressure washing uses high-pressure water to clean hard surfaces. Soft washing uses low pressure with specialized cleaning solutions for delicate surfaces like roofs, stucco, and wood.',
    },
    {
      q: 'Will pressure washing damage my building?',
      a: 'When done correctly, no. We assess each surface and use the appropriate pressure, temperature, and technique to clean without causing damage.',
    },
    {
      q: 'Do you use chemicals?',
      a: 'We use eco-friendly detergents and degreasers when needed to remove tough stains. We also offer chemical-free cleaning for sensitive areas.',
    },
    {
      q: 'How do you handle wastewater runoff?',
      a: 'We contain and properly dispose of wastewater to comply with environmental regulations. We never allow runoff to enter storm drains.',
    },
    {
      q: 'How long does pressure washing take?',
      a: 'Project timelines vary based on square footage and contamination levels. Most commercial projects are completed within 1-3 days.',
    },
    {
      q: 'Do you offer surface preparation as a standalone service?',
      a: 'Yes. We offer pressure washing and surface preparation as standalone services, though most clients combine them with painting for the best results.',
    },
    {
      q: 'What type of warranty do you offer?',
      a: 'We offer a 5-year written workmanship warranty on all painting projects. If surface preparation issues arise due to our workmanship, we will make it right.',
    },
    {
      q: 'Are you licensed and insured?',
      a: "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers' compensation coverage. Certificates of insurance are available upon request.",
    },
  ];

  const trustBadges = [
    'Licensed & Insured',
    '5.0 Google Rating',
    '180+ Commercial Projects',
    '10+ Years Experience',
    '5-Year Workmanship Warranty',
    'Eco-Friendly Solutions',
    'Background-Checked Crews',
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
          poster="/images/surface_prep.jpg"
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
                  <span>{isEs ? 'Servicios Comerciales' : 'Commercial Painting'}</span>
                </Link>
              </li>
              <li>
                <ChevronRight className="size-3 text-slate-400" />
              </li>
              <li className="text-[#EF3340] font-bold">
                {isEs ? 'Lavado a Presión y Preparación' : 'Pressure Washing & Surface Prep'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • SURFACE PREPARATION & POWER WASHING</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Lavado a Presión y Preparación Profesional en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Limpieza Profunda y Perfilado de Superficies - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Pressure Washing & Surface Preparation in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Substrate Cleaning, Profiling & Adhesion Prep - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'El paso crítico para un acabado duradero y de calidad industrial. Limpiamos, descontaminamos y perfilamos superficies para asegurar la máxima adherencia de recubrimientos.'
                : 'The critical first step for a long-lasting finish. We clean, prep, and profile surfaces to ensure maximum coating adhesion and durability.'}
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
                <Flame className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Agua Caliente 4,000 PSI' : 'Hot Water 4,000 PSI'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Droplets className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Lavado y Desengrase Ecológico' : 'Eco-Friendly Cleaning Solutions'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Póliza $2M+ Cobertura' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY SURFACE PREPARATION MATTERS ──────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="size-3.5 text-[#EF3340]" />
              <span>Why Surface Preparation Matters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              80% of a Paint Job’s Success Happens Before the Paint Goes On
            </h2>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/pressure-washing.jpg"
                  alt={isEs ? "Lavado a presión comercial y preparación de superficies en Dallas" : "Commercial pressure washing and surface preparation in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Preparación y Limpieza de Grado Industrial' : 'Commercial Power Washing & Profiling'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 text-base sm:text-lg leading-relaxed space-y-5 text-left">
            <p>
              Most paint failures aren’t caused by bad paint. They’re caused by bad preparation.
            </p>
            <p>
              Dirt, mildew, chalk, oil, grease, and loose paint all prevent coatings from adhering properly. Without proper surface preparation, even the most premium paint will peel, flake, and fail prematurely.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-[#062F57] text-lg sm:text-xl">
              🎯 At Painting Dallas, we take surface preparation seriously. We invest in the equipment, training, and products required to prepare surfaces properly—every single time.
            </div>
            <p>
              Whether you need standalone pressure washing or full surface preparation as part of a painting project, we deliver results that protect your investment.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. OUR PRESSURE WASHING SERVICES ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Droplets className="size-3.5" />
              <span>Our Pressure Washing Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Commercial-Grade Pressure Washing Solutions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide a full spectrum of pressure washing services tailored to the unique needs of commercial properties across the DFW Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressureWashingServices.map((svc, idx) => {
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

      {/* ── 4. OUR SURFACE PREPARATION SERVICES ────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>Our Surface Preparation Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Preparation is the Key to Coating Performance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Pressure washing is only the beginning. True surface preparation involves a systematic process to ensure coatings adhere properly and last for years.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {surfacePrepServices.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#EF3340]/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="size-10 rounded-xl bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center mb-3">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#062F57] mb-1.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {svc.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. SURFACE TYPES WE PREPARE ────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Hammer className="size-3.5" />
              <span>Surface Types We Prepare</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Expertise Across All Substrates
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Different surfaces require different preparation methods. Our team has the expertise to properly prepare any substrate.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/3">Surface Type</th>
                  <th className="py-4 px-6 w-2/3">Preparation Method</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {substrateMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57] whitespace-nowrap flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#EF3340]" />
                      {row.surface}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700 font-medium">
                      {row.method}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {substrateMatrix.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-1 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {row.surface}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {row.method}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. WHY SURFACE PREPARATION IS CRITICAL ─────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="size-3.5 text-[#EF3340]" />
              <span>Why Surface Preparation is Critical</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              The Science Behind Coating Adhesion
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Coatings adhere through a combination of mechanical and chemical bonds. Contaminants interfere with these bonds, causing premature failure.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* What We Remove */}
            <div className="p-6 rounded-2xl bg-rose-50/60 border border-rose-100">
              <div className="flex items-center gap-2.5 text-base font-bold text-rose-900 mb-4">
                <AlertTriangle className="size-5 text-[#EF3340]" />
                <span>What We Remove (Interference Factors)</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contaminantsRemoved.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white border border-rose-100/80 shadow-2xs"
                  >
                    <div className="text-xs font-bold text-slate-800">
                      {item.item}
                    </div>
                    <div className="text-[11px] text-slate-500">
                      {item.why}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What We Create */}
            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100">
              <div className="flex items-center gap-2.5 text-base font-bold text-emerald-900 mb-4">
                <CheckCircle2 className="size-5 text-emerald-600" />
                <span>What We Create (Adhesion Foundation)</span>
              </div>
              <div className="space-y-3">
                {qualitiesCreated.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white border border-emerald-100/80 shadow-2xs flex items-center justify-between"
                  >
                    <div className="text-xs font-bold text-slate-900">
                      {item.item}
                    </div>
                    <div className="text-xs text-emerald-700 font-medium">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#062F57] to-[#0A2540] text-white text-center">
            <span className="text-xs sm:text-sm font-bold tracking-wide">
              ⚡ The result: A coating system that lasts for years, not months.
            </span>
          </div>
        </div>
      </section>

      {/* ── 7. OUR PROVEN PREPARATION PROCESS ──────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="size-3.5" />
              <span>Our Proven Preparation Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              A Structured Approach for Superior Results
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We follow a rigorous 7-step process to ensure every project is properly prepared.
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

      {/* ── 8. EQUIPMENT & CAPABILITIES ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Gauge className="size-3.5 text-[#EF3340]" />
              <span>Equipment & Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Professional-Grade Equipment for Superior Results
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We invest in commercial-grade equipment to handle any size project.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            {equipmentList.map((eq, idx) => {
              const Icon = eq.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-[#EF3340]/40 hover:shadow-sm transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="size-11 rounded-xl bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center mb-3.5">
                      <Icon className="size-5" />
                    </div>
                    <h3 className="text-sm font-bold text-[#062F57] mb-1.5">
                      {eq.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {eq.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
            <span className="text-xs sm:text-sm font-bold text-[#062F57]">
              ✨ We have the equipment and expertise to handle any commercial project.
            </span>
          </div>
        </div>
      </section>

      {/* ── 9. WHAT SETS PAINTING DALLAS APART? ─────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="size-3.5" />
              <span>What Sets Painting Dallas Apart?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              The Painting Dallas Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you hire us for pressure washing or surface preparation, you get more than just a cleaning service. You get a partner dedicated to protecting your investment.
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

      {/* ── 10. WHY CHOOSE US FOR PRESSURE WASHING? ─────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="size-3.5 text-[#EF3340]" />
              <span>Why Choose Us for Pressure Washing?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              More Than Just Cleaning
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-3">
              Many companies offer pressure washing. But few understand the critical role it plays in coating performance. We do.
            </p>
            <div className="text-lg font-black text-[#EF3340] uppercase tracking-wide">
              We’re Not Just Cleaners. We’re Coating Experts.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {whyChooseUsPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="flex items-center gap-2 font-bold text-sm text-[#062F57] mb-1.5">
                  <CheckCircle2 className="size-4 text-[#EF3340]" />
                  <span>{p.title}</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-slate-100 text-center font-bold text-xs sm:text-sm text-[#062F57]">
            🏆 We don’t just clean. We prepare for success.
          </div>
        </div>
      </section>

      {/* ── 11. INDUSTRIES WE SERVE ─────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="size-3.5" />
              <span>Industries We Serve</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Trusted Across Diverse Commercial Sectors
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Commercial-grade cleaning and substrate profiling for high-traffic facilities across Texas.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
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
                className="p-4 rounded-xl bg-white border border-slate-200"
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

      {/* ── 12. SERVICE AREAS ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <MapPin className="size-3.5 text-[#EF3340]" />
              <span>Service Areas</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Proudly Serving the DFW Metroplex
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide pressure washing and surface preparation services within a 50-mile radius of Dallas, including:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {serviceCounties.map((county, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-[#062F57]/30 transition-all"
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
                  <span>50-Mile Radius Coverage</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Rapid rig dispatch, hot-water rigs, and surface prep crews available across North Texas.
                </p>
              </div>
              <div className="mt-3 text-[11px] font-mono text-[#EF3340] font-bold">
                Rapid Mobilization Available
              </div>
            </div>
          </div>

          {/* Quick confirmation strip */}
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
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

      {/* ── 13. FREQUENTLY ASKED QUESTIONS ─────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-4xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle className="size-3.5" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Common Questions About Pressure Washing & Surface Prep
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Get answers about water temperature, soft washing vs pressure washing, runoff compliance, and coating warranties.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
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
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 14. READY TO PREPARE YOUR PROPERTY FOR SUCCESS? ───────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#020F1D] via-[#062F57] to-[#0A2540] text-white relative overflow-hidden">
        {/* Ambient Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-[92%] max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="size-3.5 text-[#EF3340]" />
            <span>Ready to Prepare Your Property for Success?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Get Your Surfaces Ready
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need standalone pressure washing or full surface preparation for an upcoming painting project, Painting Dallas is ready to deliver.
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

      {/* ── 15. TRUST BADGES SECTION ────────────────────────────────────────────── */}
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
