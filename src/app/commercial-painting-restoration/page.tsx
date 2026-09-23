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
  ChevronRight,
  CalendarDays,
} from 'lucide-react';

export default function CommercialPaintingRestorationPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const warningSigns = [
    'Peeling, flaking, or blistering paint',
    'Cracks in stucco, masonry, or drywall',
    'Water stains or moisture damage',
    'Rot, decay, or soft spots in wood',
    'Rust or corrosion on metal surfaces',
    'Chalking or fading from UV exposure',
    'Mold or mildew growth',
    'Efflorescence (white powder) on masonry',
    'Previous poor-quality paint jobs failing',
    'Visible surface deterioration or crumbling',
  ];

  const servicesList = [
    {
      title: 'Stucco & EIFS Restoration',
      desc: 'Repair cracks, patch damaged areas, and recoat stucco and EIFS surfaces with elastomeric coatings designed to bridge cracks and waterproof your exterior.',
      perfectFor: ['Office buildings', 'retail centers', 'multi-family properties'],
      icon: Layers,
    },
    {
      title: 'Masonry & Brick Restoration',
      desc: 'Restore the beauty and integrity of brick, block, and stone surfaces. We repair mortar joints, address efflorescence, and apply breathable coatings that protect without trapping moisture.',
      perfectFor: ['Historic buildings', 'warehouses', 'retail centers', 'schools'],
      icon: Building2,
    },
    {
      title: 'Wood Siding & Trim Restoration',
      desc: 'Replace rotten wood, repair damaged trim, and recoat with premium paints and stains that protect against moisture, insects, and UV damage.',
      perfectFor: ['Multi-family properties', 'office parks', 'historic buildings'],
      icon: Hammer,
    },
    {
      title: 'Metal & Steel Restoration',
      desc: 'Remove rust, repair corroded areas, and apply rust-inhibitive primers and durable topcoats that protect structural steel, railings, and metal panels.',
      perfectFor: ['Industrial facilities', 'warehouses', 'parking structures'],
      icon: Wrench,
    },
    {
      title: 'Drywall & Interior Restoration',
      desc: 'Repair water damage, patch holes, fix cracks, and restore interior walls and ceilings to like-new condition. We also address mold and moisture issues before painting.',
      perfectFor: ['Offices', 'medical facilities', 'retail spaces', 'multi-family units'],
      icon: Home,
    },
    {
      title: 'Concrete & Parking Structure Restoration',
      desc: 'Repair spalling concrete, seal cracks, and apply protective coatings to parking garages, walkways, and loading docks.',
      perfectFor: ['Parking structures', 'industrial floors', 'sidewalks'],
      icon: Warehouse,
    },
    {
      title: 'Roof Restoration & Coatings',
      desc: 'Extend the life of your commercial roof with reflective coatings, seam repair, and waterproofing systems. Avoid costly roof replacement.',
      perfectFor: ['Flat roofs', 'metal roofs', 'industrial roofing systems'],
      icon: Shield,
    },
    {
      title: 'Historic Building Restoration',
      desc: 'We have experience restoring historic commercial properties, requiring specialized knowledge of older substrates, lead-safe practices, and period-appropriate finishes.',
      perfectFor: ['Historic downtown buildings', 'landmarks', 'older commercial properties'],
      icon: Building,
    },
    {
      title: 'Water & Storm Damage Restoration',
      desc: 'We work with property owners and insurance companies to restore properties damaged by water intrusion, storms, and flooding.',
      perfectFor: ['Emergency restoration', 'insurance claims', 'storm damage'],
      icon: Droplets,
    },
    {
      title: 'Mold & Mildew Remediation',
      desc: 'We address mold and mildew growth at the source, treating affected areas and applying antimicrobial coatings to prevent recurrence.',
      perfectFor: ['Properties with moisture issues', 'humid climates', 'water damage'],
      icon: Sparkles,
    },
  ];

  const processSteps = [
    {
      step: '1. Consultation',
      what: 'We listen to your concerns and goals.',
      why: 'Understand the scope and priorities.',
    },
    {
      step: '2. Site Assessment',
      what: 'We inspect surfaces, identify damage, and diagnose root causes.',
      why: 'Accurate pricing and no surprises.',
    },
    {
      step: '3. Detailed Proposal',
      what: 'You receive a transparent, line-item quote with recommended repairs.',
      why: 'No hidden fees. Clear expectations.',
    },
    {
      step: '4. Surface Preparation',
      what: 'We clean, repair, patch, and prime surfaces.',
      why: 'The secret to a long-lasting finish.',
    },
    {
      step: '5. Restoration & Repair',
      what: 'We fix damage, replace materials, and address underlying issues.',
      why: 'We fix problems, not hide them.',
    },
    {
      step: '6. Coating Application',
      what: 'Our skilled crews apply premium restoration coatings.',
      why: 'Flawless finish, every time.',
    },
    {
      step: '7. Final Walkthrough',
      what: 'We inspect every inch with you.',
      why: "We don't leave until you're 100% satisfied.",
    },
    {
      step: '8. Sign-Off & Warranty',
      what: 'Final approval backed by our written 5-year warranty.',
      why: 'Your investment is protected.',
    },
  ];

  const comparisonFactors = [
    {
      factor: 'Cost',
      restoration: '30-60% less expensive',
      replacement: 'Significantly higher',
      highlight: true,
    },
    {
      factor: 'Timeline',
      restoration: 'Days to weeks',
      replacement: 'Weeks to months',
      highlight: false,
    },
    {
      factor: 'Disruption',
      restoration: 'Minimal',
      replacement: 'Major',
      highlight: false,
    },
    {
      factor: 'Environmental Impact',
      restoration: 'Lower (less waste)',
      replacement: 'Higher (more waste)',
      highlight: false,
    },
    {
      factor: 'Property Value',
      restoration: 'Restored and protected',
      replacement: 'Depends on new materials',
      highlight: false,
    },
    {
      factor: 'Longevity',
      restoration: '10+ years with proper maintenance',
      replacement: 'Varies',
      highlight: false,
    },
  ];

  const advantagePoints = [
    {
      title: 'Restoration Specialists',
      desc: 'We understand substrates, historic coatings, and technical repair techniques.',
    },
    {
      title: 'Root Cause Diagnosis',
      desc: 'We fix the actual underlying problem, not just the cosmetic symptom.',
    },
    {
      title: 'Premium Materials',
      desc: 'We use top-tier restoration coatings from trusted industrial and architectural brands.',
    },
    {
      title: 'Background-Checked Crews',
      desc: 'Uniformed, professional, and respectful of your property and ongoing business.',
    },
    {
      title: 'Dedicated Project Manager',
      desc: 'One point of contact from diagnostic assessment to final sign-off.',
    },
    {
      title: 'Minimal Disruption',
      desc: 'We work around your business operations and active tenants.',
    },
    {
      title: 'Clean Job Sites',
      desc: 'We leave your property spotless, orderly, and debris-free every single day.',
    },
    {
      title: '5-Year Workmanship Warranty',
      desc: 'We stand firmly behind our restoration work with written warranty protection.',
    },
    {
      title: 'Licensed & Insured',
      desc: 'Full general liability and comprehensive workers’ compensation coverage.',
    },
  ];

  const industries = [
    {
      industry: 'Multi-Family',
      projects: 'Stucco repair, wood replacement, unit turns',
    },
    {
      industry: 'Office Buildings',
      projects: 'EIFS restoration, metal refinishing, drywall repair',
    },
    {
      industry: 'Retail Centers',
      projects: 'Masonry restoration, storefront repainting',
    },
    {
      industry: 'Industrial',
      projects: 'Steel restoration, concrete repair, roof coatings',
    },
    {
      industry: 'Healthcare',
      projects: 'Interior restoration, mold remediation',
    },
    {
      industry: 'Hospitality',
      projects: 'Full property restoration, exterior refinishing',
    },
    {
      industry: 'Historic Buildings',
      projects: 'Period-appropriate restoration, lead-safe practices',
    },
    {
      industry: 'Parking Structures',
      projects: 'Concrete repair, traffic coatings, waterproofing',
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
      q: 'How do I know if my property needs restoration or just repainting?',
      a: 'If you see cracks, peeling, rot, rust, or water damage, restoration is likely needed. A professional assessment will determine the extent of repairs required. We offer free assessments.',
    },
    {
      q: 'How long does commercial restoration take?',
      a: 'Project timelines vary based on the extent of damage and the size of the property. Small restorations may take a few days, while larger projects could take several weeks. We provide a detailed schedule in your proposal.',
    },
    {
      q: 'Can you work with my insurance company?',
      a: 'Yes. We have experience working with insurance companies on storm damage, water damage, and other covered restoration projects. We can provide documentation and estimates as needed.',
    },
    {
      q: 'Do you offer emergency restoration services?',
      a: 'Yes. We offer 24/7 emergency response for urgent restoration needs. Call (469) 368-5885 and follow the prompts.',
    },
    {
      q: 'What type of warranty do you offer?',
      a: 'We offer a 5-year written workmanship warranty on all commercial restoration projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: 'Are you licensed and insured?',
      a: "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers' compensation coverage. Certificates of insurance are available upon request.",
    },
    {
      q: 'Do you handle lead-based paint removal?',
      a: 'Yes. We are lead-safe certified and follow all EPA and OSHA regulations for lead-based paint removal and disposal.',
    },
    {
      q: 'Can you restore historic buildings?',
      a: 'Yes. We have experience restoring historic commercial properties and understand the specialized knowledge required for older substrates and period-appropriate finishes.',
    },
  ];

  const trustBadges = [
    'Licensed & Insured',
    '5.0 Google Rating',
    '180+ Commercial Projects',
    '10+ Years Experience',
    '5-Year Workmanship Warranty',
    'Lead-Safe Certified',
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
          poster="/images/restoration.jpg"
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
                {isEs ? 'Restauración de Pintura Comercial' : 'Commercial Painting Restoration'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • RESTORATION SERVICES</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Restauración de Pintura Comercial Profesional en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Reparación de Superficies y Recubrimientos - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Commercial Painting Restoration in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Surface Restoration, Repairs & Premium Coatings - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Devuelva la vida a su propiedad comercial deteriorada o dañada por el clima. Restauración experta de superficies, reparaciones estructurales y recubrimientos respaldados por 5 años de garantía.'
                : 'Bring your weathered, damaged, or aging commercial property back to life. Expert surface restoration, repairs, and premium coatings backed by a 5-year warranty.'}
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
                <Percent className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? '30-60% Menor Costo vs Reemplazo' : '30-60% Less Cost vs Replacement'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Award className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Certificado EPA Libre de Plomo' : 'Lead-Safe Certified (EPA)'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Póliza $2M+ Cobertura' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHY COMMERCIAL RESTORATION MATTERS ───────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="size-3.5 text-[#EF3340]" />
              <span>Why Commercial Restoration Matters</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Don’t Replace. Restore.
            </h2>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/commercial-restoration.jpg"
                  alt={isEs ? "Restauración de pintura comercial en Dallas" : "Commercial painting restoration in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Restauración Arquitectónica Completa' : 'Complete Architectural Restoration'}</span>
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
              Time, weather, and wear take a toll on every commercial property. What starts as a small crack, a patch of peeling paint, or a minor water stain can quickly escalate into structural damage, code violations, and costly repairs.
            </p>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 font-semibold text-[#062F57] text-lg sm:text-xl">
              💡 But here’s the good news: you don’t always need to replace. You need to restore.
            </div>
            <p>
              Commercial painting restoration is the process of repairing, preparing, and recoating your property’s surfaces to extend their life and restore their appearance. It’s a cost-effective alternative to full replacement that delivers dramatic results.
            </p>
            <p>
              At Painting Dallas, we specialize in commercial painting restoration—bringing weathered, damaged, and aging properties back to life with expert craftsmanship and premium materials.
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. SIGNS YOUR PROPERTY NEEDS RESTORATION ────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <AlertTriangle className="size-3.5" />
              <span>Signs Your Property Needs Restoration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Is Your Commercial Property Due for Restoration?
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              If you notice any of these warning signs, it may be time for a professional restoration assessment:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {warningSigns.map((sign, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-center gap-3.5 hover:border-[#EF3340]/40 transition-all"
              >
                <div className="size-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <AlertTriangle className="size-4" />
                </div>
                <span className="text-sm font-bold text-slate-800">
                  {sign}
                </span>
              </div>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-[#062F57] text-white text-center">
            <span className="text-xs sm:text-sm font-semibold">
              ⚠️ The longer you wait, the more expensive the repair. Early intervention saves money and protects your investment.
            </span>
          </div>
        </div>
      </section>

      {/* ── 4. OUR COMMERCIAL RESTORATION SERVICES ─────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>Our Commercial Restoration Services</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Comprehensive Restoration Solutions
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              We provide a full spectrum of commercial painting restoration services tailored to the unique needs of properties across the DFW Metroplex.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesList.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:bg-white hover:border-[#EF3340]/40 hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-11 rounded-xl bg-white border border-slate-200 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all flex items-center justify-center">
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

                  <div className="pt-4 border-t border-slate-200/70">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Perfect for:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {svc.perfectFor.map((item, pIdx) => (
                        <span
                          key={pIdx}
                          className="inline-block text-[11px] px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium"
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

      {/* ── 5. OUR PROVEN RESTORATION PROCESS ──────────────────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="w-[92%] max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-3">
              <Wrench className="size-3.5" />
              <span>Our Proven Restoration Process</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              A Structured Approach for Lasting Results
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Restoration is not a simple paint job. It requires a systematic approach to diagnose problems, repair damage, and apply the right coatings for long-term protection.
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

      {/* ── 6. WHY RESTORATION BEATS REPLACEMENT ───────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="w-[92%] max-w-5xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-wider mb-3">
              <Percent className="size-3.5 text-[#EF3340]" />
              <span>Why Restoration Beats Replacement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#062F57] tracking-tight mb-4">
              Save Money. Save Time. Save Your Property.
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Restoration delivers identical or superior aesthetic and weatherproofing results with far less capital outlay and minimal business disruption.
            </p>
          </div>

          {/* Desktop Comparison Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs mb-8">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/4">Factor</th>
                  <th className="py-4 px-6 w-3/8 text-emerald-400">Restoration (Painting Dallas)</th>
                  <th className="py-4 px-6 w-3/8 text-slate-300">Full Replacement</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {comparisonFactors.map((row, idx) => (
                  <tr
                    key={idx}
                    className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60 hover:bg-slate-100/50'}
                  >
                    <td className="py-4 px-6 font-bold text-[#062F57]">
                      {row.factor}
                    </td>
                    <td className="py-4 px-6 font-bold text-emerald-600">
                      {row.restoration}
                    </td>
                    <td className="py-4 px-6 text-slate-500 font-medium">
                      {row.replacement}
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
                className="p-4 rounded-xl bg-slate-50 border border-slate-200"
              >
                <div className="font-bold text-[#062F57] text-sm mb-2">
                  {row.factor}
                </div>
                <div className="text-xs mb-1">
                  <span className="font-bold text-emerald-600">Restoration:</span>{' '}
                  <span className="text-slate-800 font-semibold">{row.restoration}</span>
                </div>
                <div className="text-xs text-slate-500">
                  <span className="font-bold text-slate-600">Full Replacement:</span>{' '}
                  {row.replacement}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
            <span className="text-xs sm:text-sm font-bold text-emerald-900">
              ✅ Restoration is the smart choice for most commercial properties.
            </span>
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
              The Painting Dallas Advantage
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              When you hire us for your commercial restoration project, you get more than just a contractor. You get a partner dedicated to protecting your investment.
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
              Trusted Across Diverse Commercial Sectors
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Tailored remediation protocols and restoration coatings engineered for Texas commercial environments.
            </p>
          </div>

          {/* Desktop Table */}
          <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-xs">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#062F57] text-white text-xs uppercase tracking-wider font-extrabold">
                  <th className="py-4 px-6 w-1/3">Industry</th>
                  <th className="py-4 px-6 w-2/3">Common Restoration Projects</th>
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
              We provide commercial painting restoration services within a 50-mile radius of Dallas, including:
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
                  Rapid scoping, technical assessment, and multi-crew restoration mobilization across DFW.
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
              Common Questions About Commercial Restoration
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Get clear, expert answers regarding commercial restoration diagnosis, timelines, insurance, and lead-safe practices.
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

      {/* ── 11. READY TO RESTORE YOUR COMMERCIAL PROPERTY? ─────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#020F1D] via-[#062F57] to-[#0A2540] text-white relative overflow-hidden">
        {/* Ambient Blurs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 w-[92%] max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-white/15">
            <Sparkles className="size-3.5 text-[#EF3340]" />
            <span>Ready to Restore Your Commercial Property?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">
            Let’s Bring Your Property Back to Life
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Whether you’re dealing with peeling paint, water damage, or decades of wear, Painting Dallas is ready to deliver.
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
