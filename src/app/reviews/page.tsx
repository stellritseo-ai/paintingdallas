'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EstimateModal } from '@/components/EstimateModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { useLanguage } from '@/context/LanguageContext';
import {
  Star,
  Phone,
  CalendarDays,
  ArrowRight,
  ArrowUpRight,
  Shield,
  ShieldCheck,
  Building2,
  Building,
  CheckCircle2,
  Clock,
  MapPin,
  Mail,
  Award,
  ChevronRight,
  Sparkles,
  MessageSquare,
  ExternalLink,
  Users,
  Quote,
  ThumbsUp,
  FileCheck,
  Check,
  Briefcase,
} from 'lucide-react';

const GoogleLogoIcon = ({ className = 'size-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

const YelpLogoIcon = ({ className = 'size-4' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="#FF1A1A" aria-hidden="true">
    <path d="M12.18 12.3l2.84 6.74c.26.62-.3 1.25-.93.99l-5.83-2.4c-.62-.26-.64-1.12-.03-1.4l5.95-3.93zm-1.89-1.93L3.84 8.7c-.63-.22-.67-1.1-.07-1.39l5.65-2.8c.61-.3 1.21.32.96.93l-2.09 6.93zm2.5-1.19l6.39-2.6c.64-.26 1.19.34.89.96l-2.85 5.86c-.3.62-1.17.6-1.43-.04l-3-4.18zM8.9 14.6l-5.74 3.7c-.59.38-1.24-.2-1.04-.86l1.83-6.17c.2-.66 1.05-.8 1.44-.23l3.51 3.56zm3.32-4.55l.89-7.23c.09-.7.9-.99 1.37-.48l4.47 4.84c.48.52.2 1.36-.46 1.41l-6.27.46z" />
  </svg>
);

export default function ReviewsPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // State for category filtering
  const [activeCategory, setActiveCategory] = useState<'all' | 'corporate' | 'industrial' | 'medical' | 'property'>('all');

  // 4 Pillars of Performance
  const trustPillars = [
    {
      icon: Clock,
      title: isEs ? 'Finalización a Tiempo' : 'On-Time Completion',
      desc: isEs
        ? 'Respetamos su horario operativo con cronogramas estrictos, trabajo en turno nocturno y cero tiempos muertos para su negocio.'
        : 'We respect your schedule with disciplined timelines, night/weekend shift scheduling, and zero downtime for your business.',
      badge: isEs ? 'Cero Retrasos' : 'Zero Downtime',
    },
    {
      icon: Sparkles,
      title: isEs ? 'Obras Limpias e Impecables' : 'Clean Job Sites',
      desc: isEs
        ? 'Tratamos su propiedad como si fuera la nuestra. Protección total con plásticos, sellado contra polvo y limpieza meticulosa diaria.'
        : 'We treat your property like our own. Full containment, HEPA dust containment, and thorough daily end-of-shift site cleanups.',
      badge: isEs ? 'Orden Total' : 'Site Containment',
    },
    {
      icon: MessageSquare,
      title: isEs ? 'Comunicación Transparente' : 'Transparent Communication',
      desc: isEs
        ? 'Sin sorpresas ni tarifas ocultas. Gerente de proyecto dedicado que envía informes fotográficos y actualizaciones diarias de avance.'
        : 'No surprises, no hidden fees. Dedicated commercial project managers with daily photo logs and proactive milestone updates.',
      badge: isEs ? 'Cero Sorpresas' : 'No Hidden Fees',
    },
    {
      icon: Award,
      title: isEs ? 'Mano de Obra Superior' : 'Superior Workmanship',
      desc: isEs
        ? 'Respaldada por nuestra garantía escrita de mano de obra. Preparación de superficies según estándares de la industria y pinturas comerciales premium.'
        : 'Backed by our written workmanship warranty. Rigorous SSPC surface prep, premium commercial coatings, and flawless laser lines.',
      badge: isEs ? 'Garantía Escrita' : 'Written Warranty',
    },
  ];

  // 6 Verified Client Testimonials
  const testimonials = [
    {
      id: 'libby',
      category: 'corporate',
      name: 'Libby Isaacs',
      title: isEs ? 'Gerente de Propiedad' : 'Property Manager',
      location: 'Dallas, TX',
      propertyType: isEs ? 'Edificio Corporativo (20,000 sq. ft.)' : 'Corporate Office (20,000 sq. ft.)',
      headline: isEs
        ? '“Painting Dallas transformó nuestro espacio de oficina con una interrupción mínima en nuestras operaciones diarias.”'
        : '“Painting Dallas transformed our office space with minimal disruption to our daily operations.”',
      quote: isEs
        ? 'Necesitábamos repintar nuestra oficina corporativa de 20,000 pies cuadrados durante un fin de semana para evitar cualquier tiempo de inactividad. El equipo de Painting Dallas fue profesional, eficiente e increíblemente limpio. Terminaron antes de lo programado y los resultados superaron nuestras expectativas. El gerente de proyecto nos mantuvo informados en cada paso del camino. Altamente recomendado para cualquier empresa que busque pintores comerciales confiables.'
        : 'We needed our 20,000 sq. ft. corporate office repainted over a weekend to avoid any downtime. The team at Painting Dallas was professional, efficient, and incredibly clean. They finished ahead of schedule and the results exceeded our expectations. The project manager kept us informed every step of the way. Highly recommended for any business looking for reliable commercial painters.',
      rating: 5,
      date: '2 months ago',
      verified: true,
      serviceBadge: isEs ? 'Pintura Interior Corporativa' : 'Corporate Interior Repaint',
    },
    {
      id: 'robin',
      category: 'industrial',
      name: 'Robin Swartz',
      title: isEs ? 'Director de Instalaciones' : 'Facility Director',
      location: 'Plano, TX',
      propertyType: isEs ? 'Almacén Industrial y Logístico (85,000 sq. ft.)' : 'Industrial Warehouse (85,000 sq. ft.)',
      headline: isEs
        ? '“Su equipo de pintura industrial terminó nuestro almacén de 85,000 pies cuadrados en tiempo récord.”'
        : '“Their industrial painting team cleared our 85,000 sq. ft. warehouse in record time.”',
      quote: isEs
        ? 'Encontrar un equipo que pueda manejar proyectos industriales a gran escala sin tomar atajos es difícil. Painting Dallas superó nuestras expectativas. Gestionaron la preparación de superficies, los protocolos de seguridad y la aplicación de manera impecable. Nuestro almacén parece nuevo y los recubrimientos protectores que utilizaron nos ahorrarán dinero en mantenimiento durante los próximos años.'
        : 'Finding a crew that can handle large-scale industrial projects without cutting corners is difficult. Painting Dallas exceeded our expectations. They managed the surface preparation, safety protocols, and application flawlessly. Our warehouse looks brand new, and the protective coatings they used will save us money on maintenance for years to come.',
      rating: 5,
      date: '3 months ago',
      verified: true,
      serviceBadge: isEs ? 'Recubrimientos Epóxicos e Industriales' : 'Industrial Protective Coatings',
    },
    {
      id: 'timothy',
      category: 'property',
      name: 'Timothy Wright',
      title: isEs ? 'Broker de Bienes Raíces Comerciales' : 'Commercial Real Estate Broker',
      location: 'Fort Worth, TX',
      propertyType: isEs ? 'Complejo Multifamiliar / Comunidad' : 'Multi-Family Commercial Complex',
      headline: isEs
        ? '“Un verdadero equipo de expertos en Texas. Los recomendaría 10/10.”'
        : '“A true team of experts in Texas. 10/10 would recommend.”',
      quote: isEs
        ? 'He trabajado con muchos contratistas a lo largo de mis 20 años en bienes raíces comerciales, y Painting Dallas está entre los mejores. Desde la consulta inicial hasta el recorrido final, su atención al detalle fue impecable. Manejaron nuestra propiedad multifamiliar con cuidado, se comunicaron claramente con nuestros inquilinos y entregaron un acabado impecable. Son mis pintores de cabecera a partir de ahora.'
        : 'I have worked with many contractors over my 20 years in commercial real estate, and Painting Dallas is among the best. From the initial consultation to the final walkthrough, their attention to detail was impeccable. They handled our multi-family property with care, communicated clearly with our tenants, and delivered a flawless finish. They are my go-to painters from now on.',
      rating: 5,
      date: '1 month ago',
      verified: true,
      serviceBadge: isEs ? 'Restauración Multifamiliar' : 'Multi-Family Restoration',
    },
    {
      id: 'maria',
      category: 'property',
      name: 'Maria Rodriguez',
      title: isEs ? 'Propietaria de Edificio' : 'Building Owner',
      location: 'Dallas, TX',
      propertyType: isEs ? 'Edificio Histórico en Downtown Dallas' : 'Historic Downtown Commercial Building',
      headline: isEs
        ? '“Su conocimiento de albañilería y técnicas de restauración no tiene comparación.”'
        : '“Their knowledge of masonry and restoration techniques is unmatched.”',
      quote: isEs
        ? 'Contratamos a Painting Dallas para restaurar el exterior de nuestro edificio histórico en el centro. Su equipo demostró un conocimiento increíble de albañilería y preparación de superficies. No solo pintaron sobre los problemas: solucionaron las causas subyacentes. El edificio luce sensacional y hemos recibido incontables elogios de inquilinos y visitantes.'
        : "We hired Painting Dallas to restore the exterior of our historic downtown building. Their team demonstrated incredible knowledge of masonry and surface preparation. They didn't just paint over problems—they fixed the underlying issues. The building looks stunning, and we've received countless compliments from tenants and visitors.",
      rating: 5,
      date: '4 months ago',
      verified: true,
      serviceBadge: isEs ? 'Restauración de Mampostería Exterior' : 'Exterior Masonry Restoration',
    },
    {
      id: 'david',
      category: 'property',
      name: 'David Chen',
      title: isEs ? 'Compañía de Gestión de Propiedades' : 'Property Management Company',
      location: 'Irving, TX',
      propertyType: isEs ? 'Portafolio de Oficinas y Comercio' : 'Commercial Facility Portfolio',
      headline: isEs
        ? '“Los precios transparentes y la excelente comunicación hicieron que este proyecto fuera libre de estrés.”'
        : '“Transparent pricing and excellent communication made this project stress-free.”',
      quote: isEs
        ? 'Como empresa de administración de propiedades, necesitamos contratistas que sean confiables y transparentes. Painting Dallas nos brindó una propuesta detallada y desglosada sin costos ocultos. El personal contaba con verificación de antecedentes, fue profesional y respetuoso con nuestros residentes. La garantía de mano de obra de 5 años nos da total tranquilidad.'
        : 'As a property management company, we need contractors who are reliable and transparent. Painting Dallas provided a detailed, line-item proposal with no hidden fees. The crew was background-checked, professional, and respectful of our residents. The 5-year workmanship warranty gives us total peace of mind.',
      rating: 5,
      date: '5 months ago',
      verified: true,
      serviceBadge: isEs ? 'Gestión de Portafolio Comercial' : 'Facility Portfolio Repainting',
    },
    {
      id: 'sarah',
      category: 'medical',
      name: 'Dr. Sarah Mitchell',
      title: isEs ? 'Directora de Instalaciones Médicas' : 'Medical Facility Director',
      location: 'Richardson, TX',
      propertyType: isEs ? 'Centro Médico y Clínico Especializado' : 'Specialized Medical Facility',
      headline: isEs
        ? '“Servicio profesional, resultados de calidad y dejaron el lugar impecable.”'
        : '“Professional service, quality results, and they left the site spotless.”',
      quote: isEs
        ? 'Contratamos a Painting Dallas para un repintado interior completo de nuestras instalaciones médicas. Dada la naturaleza delicada de nuestro entorno, necesitábamos un equipo que entendiera el cumplimiento de HIPAA y el control de infecciones. Superaron nuestras expectativas. El sitio quedó impecable todos los días y el acabado es hermoso. ¡Gracias, Painting Dallas!'
        : 'We contracted Painting Dallas for a complete interior repaint of our medical facility. Given the sensitive nature of our environment, we needed a team that understood HIPAA compliance and infection control. They exceeded our expectations. The site was left spotless every single day, and the finish is beautiful. Thank you, Painting Dallas!',
      rating: 5,
      date: '6 months ago',
      verified: true,
      serviceBadge: isEs ? 'Pintura Médica y de Infección Cero' : 'Medical Facility Anti-Microbial',
    },
  ];

  // Filtered reviews
  const filteredTestimonials =
    activeCategory === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeCategory);

  // Review Highlights by Category Table
  const categoryHighlights = [
    {
      category: isEs ? 'Profesionalismo' : 'Professionalism',
      quote: isEs
        ? '“Puntuales, cuadrillas uniformadas, respetuosos con nuestra propiedad.”'
        : '“On time, uniformed crews, respectful of our property.”',
      score: '5.0',
      stars: 5,
      icon: Users,
    },
    {
      category: isEs ? 'Calidad de Trabajo' : 'Quality of Work',
      quote: isEs
        ? '“Acabado impecable, adecuada preparación previa, recubrimientos duraderos.”'
        : '“Flawless finish, proper prep work, durable coatings.”',
      score: '5.0',
      stars: 5,
      icon: Award,
    },
    {
      category: isEs ? 'Comunicación' : 'Communication',
      quote: isEs
        ? '“Actualizaciones proactivas, gerentes de proyecto atentos y receptivos.”'
        : '“Proactive updates, responsive project managers.”',
      score: '5.0',
      stars: 5,
      icon: MessageSquare,
    },
    {
      category: isEs ? 'Limpieza de Obra' : 'Cleanliness',
      quote: isEs
        ? '“Dejaron el sitio impecable todos los días. Cero desorden dejado atrás.”'
        : '“Left the site spotless every day. No mess left behind.”',
      score: '5.0',
      stars: 5,
      icon: Sparkles,
    },
    {
      category: isEs ? 'Valor por su Dinero' : 'Value',
      quote: isEs
        ? '“Precios justos, sin cargos ocultos, valió cada centavo invertido.”'
        : '“Fair pricing, no hidden fees, worth every penny.”',
      score: '5.0',
      stars: 5,
      icon: ThumbsUp,
    },
    {
      category: isEs ? 'Puntualidad y Plazos' : 'Timeliness',
      quote: isEs
        ? '“Terminaron antes de lo programado. Mínima interrupción para todos.”'
        : '“Finished ahead of schedule. Minimal disruption.”',
      score: '5.0',
      stars: 5,
      icon: Clock,
    },
  ];

  // Commercial Sectors Served
  const industrySectors = [
    {
      icon: Building2,
      title: isEs ? 'Oficinas Corporativas en Rascacielos' : 'High-Rise Corporate Offices',
      desc: isEs ? 'Dallas Arts District, Uptown, Las Colinas & Plano' : 'Dallas Arts District, Uptown, Las Colinas & Plano',
    },
    {
      icon: Building,
      title: isEs ? 'Almacenes y Centros Logísticos' : 'Industrial Logistics & Warehouses',
      desc: isEs ? 'DFW Airport Corridor, Grand Prairie, South Dallas' : 'DFW Airport Corridor, Grand Prairie, South Dallas',
    },
    {
      icon: Briefcase,
      title: isEs ? 'Instalaciones Médicas y Clínicas' : 'Healthcare Clinics & Hospitals',
      desc: isEs ? 'UT Southwestern, Baylor Scott & White medical hubs' : 'UT Southwestern, Baylor Scott & White medical hubs',
    },
    {
      icon: Users,
      title: isEs ? 'Comunidades Multifamiliares y HOA' : 'Multi-Family & HOA Portfolios',
      desc: isEs ? 'Luxury high-rises, garden-style commercial complexes' : 'Luxury high-rises, garden-style commercial complexes',
    },
    {
      icon: Shield,
      title: isEs ? 'Centros Comerciales y Retail' : 'Retail Centers & Shopping Plazas',
      desc: isEs ? 'NorthPark area, Galleria Dallas, Frisco retail parks' : 'NorthPark area, Galleria Dallas, Frisco retail parks',
    },
    {
      icon: FileCheck,
      title: isEs ? 'Instituciones Educativas y Públicas' : 'Educational & Public Facilities',
      desc: isEs ? 'Campuses, private academies, administrative halls' : 'Campuses, private academies, administrative halls',
    },
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
          poster="/images/hero.jpg"
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
              <li className="text-[#EF3340] font-bold">
                {isEs ? 'Reseñas de Clientes' : 'Client Reviews & Testimonials'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Validado por Líderes de Instalaciones y Propiedades en Texas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Reseñas y Testimonios de Clientes Comerciales - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Validated by Texas Facility Leaders
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Commercial Client Reviews &amp; Testimonials - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'No se quede solo con nuestra palabra. Lea lo que administradores de propiedades, contratistas generales y propietarios de negocios en todo el Metroplex de Dallas-Fort Worth tienen que decir sobre trabajar con Painting Dallas.'
                : 'Don’t just take our word for it. Read what property managers, general contractors, and business owners across the Dallas-Fort Worth Metroplex have to say about working with Painting Dallas.'}
            </p>

            {/* Hero Metric Pill (Golden 5.0 Strip) */}
            <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-full bg-black/40 border border-white/20 px-5 py-2.5 backdrop-blur-md mb-8 shadow-xl">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="font-black text-xs sm:text-sm text-white">5.0 Google Rating</span>
              <span className="text-slate-400">•</span>
              <span className="font-semibold text-xs sm:text-sm text-slate-200">
                {isEs ? '180+ Reseñas Comerciales' : '180+ Commercial Facility Reviews'}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-bold text-xs sm:text-sm text-emerald-400">
                {isEs ? '98% Satisfacción' : '98% Customer Satisfaction'}
              </span>
            </div>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={openEstimateModal}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{isEs ? 'Solicitar Cotización Gratuita' : 'Request a Free Estimate'}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Direct Call CTA */}
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
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Calificación 5.0 Google' : '5.0 Google Star Rating'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? '180+ Reseñas Verificadas' : '180+ Verified Reviews'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? '98% Tasa de Satisfacción' : '98% Client Satisfaction'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? '100% Clientes Comerciales' : '100% Commercial Feedback'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY OUR CLIENTS TRUST US (THE PROOF IS IN THE PERFORMANCE) ─── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'POR QUÉ NUESTROS CLIENTES CONFÍAN EN NOSOTROS' : 'WHY OUR CLIENTS TRUST US'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs ? 'La Prueba Está en el Rendimiento' : 'The Proof is in the Performance'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isEs
                ? 'Durante más de una década, hemos construido nuestra reputación sobre algo más que pintura: entregamos tranquilidad. Nuestros clientes nos eligen y siguen regresando porque comprendemos las presiones únicas de los proyectos comerciales: plazos estrictos, limitaciones presupuestarias y la necesidad de una interrupción mínima en sus operaciones diarias.'
                : 'For over a decade, we have built our reputation on more than just paint. We deliver peace of mind. Our clients choose us—and keep coming back—because we understand the unique pressures of commercial projects: strict deadlines, budget constraints, and the need for minimal disruption to their operations.'}
            </p>
          </div>

          {/* 4 Performance Standard Pillars */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustPillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#062F57]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center shadow-md group-hover:bg-[#EF3340] transition-colors">
                        <Icon className="size-6 text-[#EF3340] group-hover:text-white transition-colors" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white border border-slate-200 text-slate-600 shadow-2xs">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-[#062F57] mb-2 leading-snug">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#EF3340]">
                    <CheckCircle2 className="size-3.5" />
                    <span>{isEs ? 'Estándar Comprobado' : 'Proven Standard'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: FEATURED CLIENT TESTIMONIALS (REAL FEEDBACK FROM REAL CLIENTS) ─── */}
      <section id="featured-reviews" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'TESTIMONIOS DESTACADOS' : 'FEATURED CLIENT TESTIMONIALS'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Opiniones Reales de Clientes Reales' : 'Real Feedback from Real Clients'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'A continuación se muestran reseñas verificadas de propietarios de edificios comerciales, directores de instalaciones y contratistas generales en Dallas, Plano, Fort Worth y áreas metropolitanas.'
                : 'Below are verified reviews from commercial property owners, facility directors, and general contractors across Dallas, Plano, Fort Worth, and surrounding areas.'}
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {[
              { id: 'all', label: isEs ? 'Todas las Reseñas (6)' : 'All Reviews (6)' },
              { id: 'corporate', label: isEs ? 'Oficinas Corporativas' : 'Corporate Offices' },
              { id: 'industrial', label: isEs ? 'Almacenes e Industria' : 'Industrial & Warehouse' },
              { id: 'property', label: isEs ? 'Gestión de Inmuebles' : 'Commercial Real Estate' },
              { id: 'medical', label: isEs ? 'Centros Médicos' : 'Healthcare & Medical' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? 'bg-[#062F57] text-white shadow-md'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Testimonial Cards Grid (6 In-Depth Reviews) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
              >
                {/* Accent Top Line */}
                <div className="h-1.5 w-full bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] absolute top-0 left-0" />

                <div>
                  {/* Rating Stars + Verified Badge Strip */}
                  <div className="flex items-center justify-between gap-2 mb-4 pt-1">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                      <CheckCircle2 className="size-3 text-emerald-600" />
                      {isEs ? 'Cliente Verificado' : 'Verified Commercial Client'}
                    </span>
                  </div>

                  {/* Service Badge */}
                  <div className="inline-block text-[11px] font-black uppercase tracking-wider text-[#062F57] bg-slate-100 px-2.5 py-1 rounded-md mb-3">
                    {item.serviceBadge}
                  </div>

                  {/* Headline Title Quote */}
                  <h3 className="text-base font-black text-[#0F172A] leading-snug mb-3">
                    {item.headline}
                  </h3>

                  {/* Full Body Narrative */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic relative">
                    “{item.quote}”
                  </p>
                </div>

                {/* Author & Property Metadata Footer */}
                <div className="mt-6 pt-5 border-t border-slate-100 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-black text-[#062F57]">{item.name}</h4>
                    <p className="text-xs font-semibold text-slate-500">{item.title}</p>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium mt-0.5">
                      <MapPin className="size-3 text-[#EF3340]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="size-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[#062F57] shrink-0 font-black text-xs">
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REVIEW HIGHLIGHTS BY CATEGORY (WHAT CLIENTS MENTION MOST) ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'MÉTRICAS Y ATRIBUTOS CLAVE' : 'REVIEW HIGHLIGHTS BY CATEGORY'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Lo Que Más Destacan Nuestros Clientes' : 'What Clients Mention Most'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Con base en nuestras más de 180 reseñas verificadas, estas son las cualidades que los administradores de instalaciones y contratistas más aprecian:'
                : 'Based on our 180+ verified reviews, here are the core qualities our commercial clients value most:'}
            </p>
          </div>

          {/* 6 Category Highlights Matrix */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryHighlights.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.category}
                  className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#062F57]/30 shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="size-9 rounded-lg bg-[#062F57] text-white flex items-center justify-center shrink-0">
                          <Icon className="size-4 text-[#EF3340]" />
                        </div>
                        <h3 className="text-base font-black text-[#062F57]">{cat.category}</h3>
                      </div>
                      <div className="flex items-center gap-1 text-amber-500 text-xs font-black bg-white px-2.5 py-1 rounded-md border border-slate-200">
                        <Star className="size-3 fill-amber-400 text-amber-400" />
                        <span>{cat.score}</span>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-700 font-medium italic leading-relaxed">
                      {cat.quote}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500">
                    <span className="font-semibold">{isEs ? 'Calificación Promedio' : 'Average Rating'}</span>
                    <div className="flex items-center gap-0.5 text-amber-400">
                      {[...Array(cat.stars)].map((_, i) => (
                        <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: TRUSTED BY INDUSTRY LEADERS ─── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'CONFIADO POR LÍDERES DE LA INDUSTRIA' : 'TRUSTED BY INDUSTRY LEADERS'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Clientes Comerciales que Servimos con Orgullo' : "Commercial Clients We've Proudly Served"}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Nos sentimos honrados de colaborar con firmas de administración inmobiliaria, contratistas generales, instalaciones de atención médica, distritos educativos y corporaciones de alto perfil en todo el Metroplex de DFW.'
                : 'We are honored to have partnered with property management firms, general contractors, healthcare facilities, educational institutions, and corporate enterprises across the DFW Metroplex.'}
            </p>
          </div>

          {/* Industry Sectors Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {industrySectors.map((sector) => {
              const Icon = sector.icon;
              return (
                <div
                  key={sector.title}
                  className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
                >
                  <div className="size-12 rounded-xl bg-slate-100 border border-slate-200 text-[#062F57] flex items-center justify-center shrink-0">
                    <Icon className="size-6 text-[#EF3340]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#062F57] leading-tight mb-1">
                      {sector.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prominent Pull Quote Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#062F57] text-white text-center shadow-xl relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none" />
            <Quote className="size-10 text-[#EF3340] mx-auto mb-3 opacity-80" />
            <p className="text-lg sm:text-2xl font-black tracking-tight max-w-2xl mx-auto leading-snug">
              {isEs
                ? '“Desde rascacielos corporativos hasta naves y almacenes industriales, Painting Dallas cumple con creces.”'
                : '“From high-rise corporate offices to industrial warehouses, Painting Dallas delivers.”'}
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-bold text-slate-300 uppercase tracking-widest">
              <span>Painting Dallas Commercial Specialists</span>
              <span>•</span>
              <span className="text-[#EF3340]">DFW Metroplex</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: LEAVE US A REVIEW (HAD A GREAT EXPERIENCE?) ─── */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'COMPARTE TU EXPERIENCIA' : 'LEAVE US A REVIEW'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight mb-4">
              {isEs ? '¿Tuvo una Gran Experiencia? ¡Comparta su Opinión!' : 'Had a Great Experience? Share Your Feedback!'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
              {isEs
                ? 'Sus comentarios nos ayudan a mejorar y ayudan a otros administradores de instalaciones y propietarios de negocios en Texas a encontrar pintores comerciales confiables. Si ha trabajado con nosotros, nos encantaría conocer su experiencia.'
                : 'Your feedback helps us improve and helps other business owners find reliable commercial painting services. If you’ve worked with us, we’d love to hear about your experience.'}
            </p>

            {/* Review Buttons on Google & Yelp */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              {/* Google Review Button */}
              <a
                href="https://www.google.com/search?q=Painting+Dallas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-400 text-slate-900 px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
              >
                <GoogleLogoIcon className="size-5" />
                <span>{isEs ? 'Danos tu Opinión en Google' : 'Review Us on Google'}</span>
                <div className="flex items-center gap-0.5 text-amber-400 ml-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="size-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <ExternalLink className="size-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Yelp Review Button */}
              <a
                href="https://www.yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#D32323] hover:bg-[#B31D1D] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-200 group cursor-pointer"
              >
                <YelpLogoIcon className="size-5 fill-white" />
                <span>{isEs ? 'Danos tu Opinión en Yelp' : 'Review Us on Yelp'}</span>
                <ExternalLink className="size-3.5 text-white/80 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: READY TO EXPERIENCE THE PAINTING DALLAS DIFFERENCE? ─── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#062F57] via-[#041E38] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#062F57]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/15 text-[#EF3340] mb-4 backdrop-blur-md">
              <Sparkles className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'EXPERIENCIA COMPROBADA EN DFW' : 'EXPERIENCE THE DIFFERENCE'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs
                ? '¿Listo para Experimentar la Diferencia de Painting Dallas?'
                : 'Ready to Experience the Painting Dallas Difference?'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              {isEs
                ? 'No solo lea sobre nuestro servicio de 5 estrellas: compruébelo usted mismo. Contáctenos hoy para recibir un presupuesto gratuito y sin compromiso para su próximo proyecto comercial de pintura o restauración.'
                : 'Don’t just read about our 5-star service—experience it for yourself. Contact us today for a free, no-obligation estimate on your next commercial painting or restoration project.'}
            </p>

            {/* Direct Contact Cluster */}
            <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-8 text-left">
              <a
                href="tel:4693685885"
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors flex items-center gap-3"
              >
                <div className="size-10 rounded-xl bg-[#EF3340] text-white flex items-center justify-center shrink-0">
                  <Phone className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    {isEs ? 'Llámenos' : 'Call Us'}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white truncate">
                    (469) 368-5885
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@paintingdallas.com"
                className="p-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 transition-colors flex items-center gap-3"
              >
                <div className="size-10 rounded-xl bg-[#EF3340] text-white flex items-center justify-center shrink-0">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    {isEs ? 'Escríbanos' : 'Email Us'}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white truncate">
                    info@paintingdallas.com
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 flex items-center gap-3">
                <div className="size-10 rounded-xl bg-[#EF3340] text-white flex items-center justify-center shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-bold text-slate-400">
                    {isEs ? 'Sede' : 'Location'}
                  </div>
                  <div className="text-xs sm:text-sm font-black text-white truncate">
                    Dallas, TX 75215
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Trigger CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={openEstimateModal}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CalendarDays className="size-4" />
                <span>{isEs ? 'Solicitar su Cotización Gratuita' : 'Request Your Free Estimate'}</span>
                <ArrowRight className="size-4" />
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
              >
                <span>{isEs ? 'Ir a Página de Contacto' : 'Visit Contact Page'}</span>
                <ArrowUpRight className="size-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: REVIEW VERIFICATION & TRUST BADGES (TRANSPARENCY COMMITMENT) ─── */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 mb-2">
                <ShieldCheck className="size-3.5 text-emerald-600" />
                <span>{isEs ? 'TRANSPARENCIA 100%' : '100% TRANSPARENCY COMMITMENT'}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-[#062F57]">
                {isEs ? 'Nuestro Compromiso con la Transparencia' : 'Our Commitment to Transparency'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-2 max-w-2xl mx-auto">
                {isEs
                  ? 'Creemos en la total transparencia. Todas las reseñas mostradas en esta página son de clientes comerciales verificados que han completado con éxito proyectos con Painting Dallas.'
                  : 'We believe in 100% transparency. All reviews displayed on this page are from verified commercial clients who have completed projects with Painting Dallas.'}
              </p>
            </div>

            {/* 5 Checkmarks Row */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center mb-8">
              {[
                { title: isEs ? 'Con Licencia y Seguro' : 'Licensed & Insured' },
                { title: isEs ? 'Personal Verificado' : 'Background-Checked Crews' },
                { title: isEs ? 'Garantía por Escrito' : 'Written Warranty' },
                { title: isEs ? '5.0 Calificación Google' : '5.0 Google Rating' },
                { title: isEs ? '180+ Reseñas Verificadas' : '180+ Verified Reviews' },
              ].map((badge, idx) => (
                <div
                  key={badge.title}
                  className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center gap-1.5"
                >
                  <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
                  <span className="text-[11px] font-bold text-slate-800 leading-tight">
                    {badge.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Reference Assistance Reassurance */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <p className="text-xs text-slate-600 font-semibold">
                {isEs
                  ? '¿Tiene preguntas sobre una reseña específica? Contáctenos directamente y con gusto le proporcionaremos referencias comerciales directas.'
                  : 'Have questions about a specific review? Contact us directly and we’ll be happy to provide references.'}
              </p>
              <div className="mt-2 flex items-center justify-center gap-3 text-xs font-black uppercase tracking-wider text-[#062F57]">
                <a href="tel:4693685885" className="hover:text-[#EF3340] transition-colors">
                  (469) 368-5885
                </a>
                <span>•</span>
                <a href="mailto:info@paintingdallas.com" className="hover:text-[#EF3340] transition-colors">
                  info@paintingdallas.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modals & Sticky Bar */}
      <EstimateModal />
      <ServiceDetailModal />
      <ProjectDetailModal />
      <MobileStickyBar />

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
