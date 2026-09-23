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
  ShieldAlert,
  FlameKindling,
  Sun,
  Maximize2,
  ChevronRight,
  CalendarDays,
} from 'lucide-react';

export default function SpecialtyCoatingsPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const specialtyServices = [
    {
      title: 'Epoxy Floor Coatings',
      desc: 'High-build epoxy systems for industrial floors, production areas, and commercial spaces. Our epoxy floors resist chemicals, abrasion, and impact while providing a seamless, easy-to-clean surface.',
      perfectFor: ['Manufacturing floors', 'warehouses', 'garages', 'food processing', 'laboratories'],
      keyBenefits: 'Chemical resistance, durability, seamless finish, easy sanitation.',
      icon: Warehouse,
    },
    {
      title: 'Polyurethane & Polyaspartic Coatings',
      desc: 'Fast-curing, UV-stable coatings for floors and surfaces requiring superior durability and color retention. Ideal for exterior applications and rapid return-to-service.',
      perfectFor: ['Parking garages', 'loading docks', 'exterior walkways', 'stadiums'],
      keyBenefits: 'UV stability, fast cure, abrasion resistance, color retention.',
      icon: Zap,
    },
    {
      title: 'Intumescent Fireproofing Coatings',
      desc: 'Fire-resistant coatings for structural steel that expand when exposed to heat, insulating steel and delaying structural failure. Meets ASTM and UL fire rating requirements.',
      perfectFor: ['High-rise buildings', 'industrial facilities', 'parking structures', 'warehouses'],
      keyBenefits: 'Fire protection, code compliance, thin-film application.',
      icon: FlameKindling,
    },
    {
      title: 'Chemical-Resistant Linings',
      desc: 'Specialized coatings for tanks, vessels, piping, and containment areas exposed to aggressive chemicals. We apply linings designed for specific chemical environments.',
      perfectFor: ['Chemical plants', 'water treatment', 'food processing', 'pharmaceutical'],
      keyBenefits: 'Chemical resistance, corrosion protection, containment.',
      icon: ShieldAlert,
    },
    {
      title: 'Anti-Microbial Coatings',
      desc: 'Coatings infused with antimicrobial agents that inhibit the growth of bacteria, mold, and mildew. Ideal for healthcare, food processing, and sanitary environments.',
      perfectFor: ['Hospitals', 'clinics', 'food processing', 'schools', 'gyms'],
      keyBenefits: 'Bacteria resistance, mold inhibition, easy sanitation.',
      icon: Sparkles,
    },
    {
      title: 'High-Temperature Coatings',
      desc: 'Silicone and ceramic coatings designed for surfaces exposed to extreme heat, such as boilers, exhaust systems, and process equipment.',
      perfectFor: ['Boilers', 'stacks', 'exhaust systems', 'furnaces', 'pipelines'],
      keyBenefits: 'Heat resistance, thermal stability, corrosion protection.',
      icon: Flame,
    },
    {
      title: 'Non-Skid & Safety Coatings',
      desc: 'Textured coatings that provide slip resistance on floors, ramps, walkways, and stairs. Available in a range of colors for safety and wayfinding.',
      perfectFor: ['Loading docks', 'ramps', 'walkways', 'stairs', 'pool areas'],
      keyBenefits: 'Slip resistance, safety compliance, durability.',
      icon: Activity,
    },
    {
      title: 'Elastomeric Roof Coatings',
      desc: 'Reflective, flexible roof coatings that seal leaks, extend roof life, and reduce energy costs. We apply acrylic, silicone, and polyurethane roof systems.',
      perfectFor: ['Flat roofs', 'metal roofs', 'modified bitumen', 'EPDM'],
      keyBenefits: 'Energy savings, leak prevention, UV protection, longevity.',
      icon: Shield,
    },
    {
      title: 'Waterproofing & Sealants',
      desc: 'Coatings and sealants designed to prevent water intrusion on below-grade, plaza, and exterior surfaces.',
      perfectFor: ['Foundation walls', 'plaza decks', 'balconies', 'parking structures'],
      keyBenefits: 'Waterproofing, moisture protection, structural protection.',
      icon: Droplets,
    },
    {
      title: 'Anti-Graffiti Coatings',
      desc: 'Sacrificial and permanent anti-graffiti coatings that make graffiti removal easy and protect surfaces from repeated tagging.',
      perfectFor: ['Urban commercial properties', 'transit stations', 'public buildings'],
      keyBenefits: 'Easy graffiti removal, surface protection, cost savings.',
      icon: Brush,
    },
    {
      title: 'Concrete Sealers & Densifiers',
      desc: 'Penetrating sealers and densifiers that protect concrete from moisture, chemicals, and abrasion while improving appearance and extending life.',
      perfectFor: ['Warehouses', 'parking structures', 'industrial floors', 'sidewalks'],
      keyBenefits: 'Moisture protection, dust reduction, surface hardening.',
      icon: Hammer,
    },
    {
      title: 'Reflective & Cool Roof Coatings',
      desc: 'Highly reflective coatings that reduce roof surface temperature, lower cooling costs, and extend roof life. Meets ENERGY STAR and Cool Roof Rating Council standards.',
      perfectFor: ['Commercial buildings', 'warehouses', 'retail centers'],
      keyBenefits: 'Energy savings, UV protection, extended roof life.',
      icon: Sun,
    },
  ];

  const coatingTypesMatrix = [
    { type: 'Epoxy', bestFor: 'Floors, tanks, structural steel', benefits: 'Chemical resistance, durability' },
    { type: 'Polyurethane', bestFor: 'Exterior steel, floors, equipment', benefits: 'UV stability, color retention' },
    { type: 'Polyaspartic', bestFor: 'Floors, fast-turnaround projects', benefits: 'Fast cure, UV stability' },
    { type: 'Intumescent', bestFor: 'Structural steel', benefits: 'Fire protection, code compliance' },
    { type: 'Silicone', bestFor: 'Roofs, high-temp surfaces', benefits: 'Weather resistance, heat stability' },
    { type: 'Acrylic', bestFor: 'Roofs, exterior surfaces', benefits: 'UV resistance, affordability' },
    { type: 'Ceramic', bestFor: 'High-temperature equipment', benefits: 'Thermal insulation, heat resistance' },
    { type: 'Anti-Microbial', bestFor: 'Healthcare, food processing', benefits: 'Bacteria resistance, sanitation' },
    { type: 'Non-Skid', bestFor: 'Floors, ramps, walkways', benefits: 'Slip resistance, safety' },
    { type: 'Anti-Graffiti', bestFor: 'Urban surfaces, transit', benefits: 'Easy graffiti removal' },
    { type: 'Concrete Sealer', bestFor: 'Concrete floors, structures', benefits: 'Moisture protection, hardening' },
    { type: 'Reflective', bestFor: 'Roofs, exterior surfaces', benefits: 'Energy savings, UV protection' },
  ];

  const applicationsList = [
    { industry: 'Manufacturing', apps: 'Epoxy floors, equipment coatings, chemical linings' },
    { industry: 'Warehousing & Logistics', apps: 'Floor coatings, roof coatings, structural steel' },
    { industry: 'Food & Beverage', apps: 'Anti-microbial coatings, epoxy floors, chemical linings' },
    { industry: 'Healthcare', apps: 'Anti-microbial coatings, seamless floors, wall protection' },
    { industry: 'Pharmaceutical', apps: 'Clean room coatings, chemical linings, anti-microbial' },
    { industry: 'Chemical & Petrochemical', apps: 'Chemical-resistant linings, tank coatings, secondary containment' },
    { industry: 'Energy & Utilities', apps: 'High-temp coatings, structural steel, tank linings' },
    { industry: 'Automotive', apps: 'Epoxy floors, equipment coatings, paint booths' },
    { industry: 'Parking Structures', apps: 'Traffic coatings, waterproofing, non-skid' },
    { industry: 'Commercial Buildings', apps: 'Roof coatings, fireproofing, anti-graffiti' },
    { industry: 'Water & Wastewater', apps: 'Tank linings, pipe coatings, concrete sealers' },
    { industry: 'Aerospace', apps: 'High-temp coatings, chemical-resistant coatings' },
  ];

  const processSteps = [
    {
      step: '1. Consultation',
      what: 'We listen to your goals, environment, and performance requirements.',
      why: 'Ensures the right coating system for your needs.',
    },
    {
      step: '2. Site Assessment',
      what: 'We inspect substrates, test adhesion, and measure conditions.',
      why: 'Accurate specification and pricing.',
    },
    {
      step: '3. Coating Specification',
      what: 'We recommend the correct coating system based on your environment.',
      why: 'Ensures performance and longevity.',
    },
    {
      step: '4. Detailed Proposal',
      what: 'You receive a transparent, line-item quote with coating specifications.',
      why: 'No hidden fees. Clear expectations.',
    },
    {
      step: '5. Surface Preparation',
      what: 'We clean, profile, and prime surfaces per SSPC standards.',
      why: 'The secret to coating performance.',
    },
    {
      step: '6. Coating Application',
      what: 'Our certified crews apply coatings per manufacturer specifications.',
      why: 'Flawless finish, every time.',
    },
    {
      step: '7. Quality Control',
      what: 'We verify DFT, adhesion, and appearance throughout the project.',
      why: 'Ensures specification compliance.',
    },
    {
      step: '8. Final Inspection & Warranty',
      what: 'We inspect every inch with you. Final approval backed by warranty.',
      why: 'Your investment is protected.',
    },
  ];

  const comparisonFactors = [
    { factor: 'Chemical Resistance', paint: 'Poor', specialty: 'Excellent' },
    { factor: 'Abrasion Resistance', paint: 'Moderate', specialty: 'Excellent' },
    { factor: 'Temperature Resistance', paint: 'Limited', specialty: 'High' },
    { factor: 'Service Life', paint: '3-5 years', specialty: '10-20+ years' },
    { factor: 'Fire Protection', paint: 'None', specialty: 'Yes (intumescent)' },
    { factor: 'Slip Resistance', paint: 'None', specialty: 'Yes (non-skid)' },
    { factor: 'Anti-Microbial', paint: 'None', specialty: 'Yes' },
    { factor: 'Waterproofing', paint: 'Limited', specialty: 'Excellent' },
    { factor: 'Cost Per Year', paint: 'Higher long-term', specialty: 'Lower long-term' },
  ];

  const advantagePoints = [
    {
      title: 'Coating Specialists',
      desc: 'We understand chemistry, substrates, and rigorous technical performance requirements.',
    },
    {
      title: 'Certified Applicators',
      desc: 'Trained and manufacturer-certified in advanced specialty coating application and safety.',
    },
    {
      title: 'SSPC-Compliant Preparation',
      desc: 'We follow strict SSPC/NACE industry standards for mechanical surface profiling.',
    },
    {
      title: 'Quality Control',
      desc: 'We verify DFT, adhesion pull-off testing, and profile throughout the project lifecycle.',
    },
    {
      title: 'Dedicated Project Manager',
      desc: 'One point of technical contact from initial consultation through final warranty sign-off.',
    },
    {
      title: 'Minimal Downtime',
      desc: 'We work around your production schedules with fast-cure systems, nights, and weekends.',
    },
    {
      title: 'Clean Job Sites',
      desc: 'We leave your facility spotless, orderly, and OSHA-compliant every single day.',
    },
    {
      title: '5-Year Workmanship Warranty',
      desc: 'We stand firmly behind our work alongside comprehensive manufacturer warranties.',
    },
    {
      title: 'Licensed & Insured',
      desc: 'Full general liability, environmental protection, and workers’ compensation coverage.',
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
      q: 'How do I know which specialty coating is right for my facility?',
      a: 'It depends on your environment, substrate, and performance requirements. We offer free assessments to recommend the correct coating system for your needs.',
    },
    {
      q: 'How long do specialty coatings last?',
      a: 'With proper preparation and application, specialty coatings can last 10-20+ years, depending on the environment and coating type. This is significantly longer than standard paint.',
    },
    {
      q: 'Can you apply coatings while my facility is operational?',
      a: 'Yes. We work around your production schedule, including nights, weekends, and phased work. We also use low-VOC and solvent-free coatings when required.',
    },
    {
      q: 'What surface preparation standards do you follow?',
      a: 'We follow SSPC (Society for Protective Coatings) and NACE standards for surface preparation. The specific standard depends on the substrate and coating system specified.',
    },
    {
      q: 'Do you offer warranties on specialty coatings?',
      a: 'Yes. We offer a 5-year written workmanship warranty on all specialty coating projects. Manufacturer warranties may also apply depending on the product.',
    },
    {
      q: 'Are you licensed and insured?',
      a: "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers' compensation coverage. Certificates of insurance are available upon request.",
    },
    {
      q: 'Do you have experience with confined space entry?',
      a: 'Yes. Our crews are trained and certified for confined space entry. We follow all OSHA protocols, including atmospheric monitoring, ventilation, and rescue standby.',
    },
    {
      q: 'Can you match existing coatings or colors?',
      a: 'Yes. We can match existing coatings and colors using manufacturer color systems or custom matching.',
    },
    {
      q: 'Do you offer maintenance programs?',
      a: 'Yes. We offer ongoing maintenance programs for specialty coatings to ensure they continue to perform as designed. Contact us to learn more.',
    },
  ];

  const trustBadges = [
    'Licensed & Insured',
    '5.0 Google Rating',
    '180+ Commercial Projects',
    '10+ Years Experience',
    '5-Year Workmanship Warranty',
    'SSPC-Compliant Preparation',
    'Certified Applicators',
    'Confined Space Certified',
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
          poster="/images/specialty.jpg"
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
                {isEs ? 'Recubrimientos Especiales' : 'Specialty Coatings'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • SPECIALTY COATING SYSTEMS</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Recubrimientos Especiales Profesionales en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Sistemas Protectores de Alto Rendimiento - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Specialty Coatings in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    High-Performance Protective Systems - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Recubrimientos protectores de alto rendimiento diseñados para los entornos más exigentes. Prolongue la vida útil de sus activos, mejore la seguridad y reduzca los costos de mantenimiento a largo plazo.'
                : 'High-performance protective coatings engineered for the toughest environments. Extend asset life, improve safety, and reduce long-term maintenance costs.'}
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
                <span className="font-semibold">{isEs ? 'Durabilidad 10-20+ Años' : '10-20+ Year Coating Life'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Award className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Normas SSPC & NACE' : 'SSPC & NACE Compliant'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Póliza $2M+ Cobertura' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHEN STANDARD PAINT ISN'T ENOUGH ──────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="size-3.5 text-[#EF3340]" />
              <span>When Standard Paint Isn’t Enough</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Engineered Coatings for Demanding Environments
            </h2>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/specialty-coatings.jpg"
                  alt={isEs ? "Recubrimientos especializados de alto rendimiento en Dallas" : "High-performance specialty coatings in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Recubrimientos Poliméricos de Alto Rendimiento' : 'High-Performance Polymer Protection'}</span>
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
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-[#062F57] text-lg sm:text-xl">
              🛡️ Standard paint is designed for appearance. Specialty coatings are designed for performance.
            </div>
            <p>
              When your commercial or industrial property faces extreme conditions—chemical exposure, heavy traffic, extreme temperatures, moisture, or fire risk—you need more than paint. You need a coating system engineered to protect your assets and extend their life.
            </p>
            <p>
              At Painting Dallas, we specialize in high-performance specialty coatings for commercial and industrial applications. From epoxy floors to intumescent fireproofing, we deliver solutions that meet the most demanding specifications.
            </p>
            <p className="font-bold text-[#062F57]">
              If you need a coating that performs, we’re the team to call.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. OUR SPECIALTY COATING SERVICES ───────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="size-3.5" />
              <span>Our Specialty Coating Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Comprehensive High-Performance Coating Solutions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide a full spectrum of specialty coating services tailored to the unique needs of commercial and industrial properties across the DFW Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyServices.map((svc, idx) => {
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
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#062F57] mb-2.5">
                      {svc.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
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
                    <div className="text-[11px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <span className="font-bold text-[#062F57]">Key Benefits:</span>{' '}
                      {svc.keyBenefits}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. SPECIALTY COATING TYPES WE APPLY ─────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <PaintBucket className="size-3.5 text-[#EF3340]" />
              <span>Specialty Coating Types We Apply</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              High-Performance Coating Systems
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We use only the highest-quality specialty coatings from trusted manufacturers. Selected based on your specific environment, substrate, and performance requirements.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/4">Coating Type</th>
                  <th className="py-4 px-6 w-3/8">Best For</th>
                  <th className="py-4 px-6 w-3/8">Key Benefits</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {coatingTypesMatrix.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57] whitespace-nowrap flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#EF3340]" />
                      {row.type}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700 font-medium">
                      {row.bestFor}
                    </td>
                    <td className="py-3.5 px-6 text-slate-600 text-xs">
                      {row.benefits}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {coatingTypesMatrix.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-1 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {row.type}
                </div>
                <div className="text-xs text-slate-700 font-medium mb-1">
                  <span className="font-bold text-slate-900">Best For:</span> {row.bestFor}
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-700">Benefits:</span> {row.benefits}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. APPLICATIONS & INDUSTRIES ───────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Briefcase className="size-3.5" />
              <span>Applications & Industries</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Where Specialty Coatings Make a Difference
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Industrial and commercial asset protection across critical manufacturing, logistics, healthcare, and energy sectors.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/3">Industry</th>
                  <th className="py-4 px-6 w-2/3">Common Specialty Coating Applications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {applicationsList.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/70 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57] whitespace-nowrap flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-[#EF3340]" />
                      {row.industry}
                    </td>
                    <td className="py-3.5 px-6 text-slate-700 font-medium">
                      {row.apps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-3">
            {applicationsList.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-1 flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-[#EF3340]" />
                  {row.industry}
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  {row.apps}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. OUR PROVEN SPECIALTY COATING PROCESS ────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="size-3.5 text-[#EF3340]" />
              <span>Our Proven Specialty Coating Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              A Structured Approach for Superior Performance
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Specialty coatings require precise application to perform as designed. We follow a rigorous 8-step process to ensure every project meets specification.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden lg:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
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
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs"
              >
                <div className="text-xs font-mono font-bold text-[#EF3340] uppercase tracking-wider mb-1">
                  {step.step}
                </div>
                <div className="text-sm font-semibold text-slate-900 mb-2">
                  {step.what}
                </div>
                <div className="text-xs text-slate-500 bg-white p-2.5 rounded-lg border border-slate-100">
                  <span className="font-bold text-[#062F57]">Why It Matters:</span>{' '}
                  {step.why}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. WHY SPECIALTY COATINGS BEAT STANDARD PAINT ───────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Percent className="size-3.5" />
              <span>Why Specialty Coatings Beat Standard Paint</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              The Performance Difference
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Standard paints deteriorate under aggressive cycles. Engineered coatings provide an impenetrable defense that drastically lowers lifecycle expense.
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/3">Factor</th>
                  <th className="py-4 px-6 w-1/3 text-slate-300">Standard Paint</th>
                  <th className="py-4 px-6 w-1/3 text-emerald-400">Specialty Coatings</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonFactors.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60 hover:bg-slate-100/50'}
                  >
                    <td className="py-3.5 px-6 font-bold text-[#062F57]">
                      {row.factor}
                    </td>
                    <td className="py-3.5 px-6 text-slate-500 font-medium">
                      {row.paint}
                    </td>
                    <td className="py-3.5 px-6 font-bold text-emerald-600">
                      {row.specialty}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Comparison Cards */}
          <div className="md:hidden space-y-3 mb-8">
            {comparisonFactors.map((row, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-2">
                  {row.factor}
                </div>
                <div className="text-xs mb-1">
                  <span className="font-bold text-emerald-600">Specialty Coatings:</span>{' '}
                  <span className="text-slate-800 font-semibold">{row.specialty}</span>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-600">Standard Paint:</span>{' '}
                  {row.paint}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-xs sm:text-sm font-bold text-emerald-900">
              💰 Specialty coatings cost more upfront. They save dramatically more over time.
            </span>
          </div>
        </div>
      </section>

      {/* ── 8. WHAT SETS PAINTING DALLAS APART? ─────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="size-3.5 text-[#EF3340]" />
              <span>What Sets Painting Dallas Apart?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              The Painting Dallas Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you hire us for your specialty coating project, you get more than just an applicator. You get a partner dedicated to protecting your assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantagePoints.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs hover:border-[#EF3340]/40 hover:bg-white hover:shadow-sm transition-all flex items-start gap-3.5"
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
              We provide specialty coating services within a 50-mile radius of Dallas, including:
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
                  <span>50-Mile Radius Coverage</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Fast crew mobilization, surface prep rigs, and precision climate-controlled application.
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
              Common Questions About Specialty Coatings
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Clear answers regarding coating selection, cure times, operational continuity, and warranties.
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

      {/* ── 11. READY TO PROTECT YOUR ASSETS WITH SPECIALTY COATINGS? ──────────── */}
      <section className="py-20 bg-gradient-to-br from-[#020F1D] via-[#062F57] to-[#0A2540] text-white relative overflow-hidden">
        {/* Ambient Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-[92%] max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="size-3.5 text-[#EF3340]" />
            <span>Ready to Protect Your Assets with Specialty Coatings?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Extend the Life of Your Property
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you need epoxy floors, fireproofing, or roof coatings, Painting Dallas is ready to deliver.
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
            Trusted by 180+ commercial and industrial clients across the Dallas-Fort Worth Metroplex.
          </p>
        </div>
      </section>

      {/* ── 12. TRUST BADGES SECTION ────────────────────────────────────────────── */}
      <section className="py-12 bg-white border-t border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 text-center">
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
