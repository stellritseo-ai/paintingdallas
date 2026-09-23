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
  Paintbrush,
  Droplets,
  ChevronRight,
  Users,
  Check,
  Send,
  Sun,
  Umbrella,
  Target,
  Compass,
  HeartHandshake,
  Sparkles,
} from 'lucide-react';

export default function AboutPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Commercial Office Building',
    details: '',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  // 6 Philosophy & Advantage Pillars
  const philosophyPillars = [
    {
      number: '01',
      title: isEs ? 'Profesionales de Pintura Experimentados' : 'Experienced Painting Professionals',
      description: isEs
        ? 'Nuestro experimentado equipo aporta años de experiencia en pintura residencial y comercial, asegurando resultados uniformes, precisos y confiables en cada ocasión.'
        : 'Our skilled team brings years of experience in residential and commercial painting, ensuring smooth, precise, and reliable results every time.',
      icon: Users,
      badge: isEs ? 'Maestría Comprobada' : 'Proven Craftsmanship',
    },
    {
      number: '02',
      title: isEs ? 'Mano de Obra de Calidad' : 'Quality Workmanship',
      description: isEs
        ? 'Utilizamos pinturas premium y técnicas probadas para brindar acabados duraderos, limpios y visualmente atractivos que perduran en el tiempo.'
        : 'We use premium paints and proven techniques to deliver durable, clean, and visually appealing finishes that last.',
      icon: Award,
      badge: isEs ? 'Materiales Premium' : 'Premium Materials',
    },
    {
      number: '03',
      title: isEs ? 'Entrega del Proyecto a Tiempo' : 'On-Time Project Delivery',
      description: isEs
        ? 'Seguimos prácticas eficientes de programación y gestión de proyectos para completar todos los trabajos de pintura a tiempo y sin comprometer la calidad.'
        : 'We follow efficient scheduling and project management practices to complete all painting work on time without compromising quality.',
      icon: Clock,
      badge: isEs ? 'Cero Retrasos' : 'Reliable Timelines',
    },
    {
      number: '04',
      title: isEs ? 'Nuestra Misión Comercial' : 'Our Mission',
      description: isEs
        ? 'Entregar servicios excepcionales de pintura interior o exterior para edificios comerciales que eleven las propiedades a través de una mano de obra superior y un profesionalismo confiable.'
        : 'To deliver exceptional commercial buildings interior or exterior painting services that elevate properties through superior craftsmanship and dependable professionalism.',
      icon: Target,
      badge: isEs ? 'Propósito Central' : 'Core Objective',
    },
    {
      number: '05',
      title: isEs ? 'Nuestra Visión de Industria' : 'Our Vision',
      description: isEs
        ? 'Ser los especialistas en pintura de edificios comerciales más confiables, reconocidos por establecer altos estándares en la industria en calidad y confiabilidad.'
        : 'To be the most trusted commercial buildings painters specialists, renowned for setting high industry standards in quality and reliability.',
      icon: Compass,
      badge: isEs ? 'Liderazgo en DFW' : 'Industry Standard',
    },
    {
      number: '06',
      title: isEs ? 'Nuestro Compromiso Total' : 'Our Commitment',
      description: isEs
        ? 'Garantizamos la total satisfacción del cliente, utilizando materiales de primera calidad y una programación eficiente para proteger y mejorar sus valiosos espacios comerciales.'
        : 'We guarantee complete client satisfaction, utilizing premium materials and efficient scheduling to protect and enhance your valuable business spaces.',
      icon: HeartHandshake,
      badge: isEs ? 'Garantía Escrita' : 'Client Satisfaction',
    },
  ];

  // Triad Cards (Our Mission, Our Vision, Our Commitment)
  const triadItems = [
    {
      icon: Target,
      title: isEs ? 'NUESTRA MISIÓN' : 'OUR MISSION',
      subtitle: isEs ? 'Propósito y Valor' : 'Beauty, Protection & Value',
      content: isEs
        ? 'Proporcionar servicios de pintura de alta calidad que mejoren la belleza, protección y valor de propiedades residenciales y comerciales.'
        : 'To provide high-quality painting services that enhance the beauty, protection, and value of residential and commercial properties.',
      accent: 'border-[#062F57] text-[#062F57]',
    },
    {
      icon: Compass,
      title: isEs ? 'NUESTRA VISIÓN' : 'OUR VISION',
      subtitle: isEs ? 'Liderazgo y Confiabilidad' : 'Reliability & Premium Finishes',
      content: isEs
        ? 'Convertirnos en una empresa líder de pintura conocida por su confiabilidad, acabados premium y satisfacción del cliente en cada proyecto que completamos.'
        : 'To become a leading painting company known for reliability, premium finishes, and customer satisfaction across every project we complete.',
      accent: 'border-[#EF3340] text-[#EF3340]',
    },
    {
      icon: ShieldCheck,
      title: isEs ? 'NUESTRO COMPROMISO' : 'OUR COMMITMENT',
      subtitle: isEs ? 'Puntualidad y Presupuesto' : 'On-Time, On-Budget Excellence',
      content: isEs
        ? 'Estamos comprometidos a entregar cada proyecto de pintura a tiempo, dentro del presupuesto y con los más altos estándares de mano de obra, limpieza y profesionalismo.'
        : 'We are committed to delivering every painting project on time, within budget, and with the highest standards of craftsmanship, cleanliness, and professionalism.',
      accent: 'border-[#0B477D] text-[#0B477D]',
    },
  ];

  // Core Services
  const coreServices = [
    {
      icon: Paintbrush,
      title: isEs ? 'Pintura Interior Comercial' : 'Commercial Interior Painting',
      description: isEs
        ? 'Espacios de oficinas, instalaciones médicas e interiores comerciales diseñados para máxima durabilidad y con mínima interrupción operativa.'
        : 'Office spaces, medical facilities, and retail interiors designed for durability and minimal disruption.',
      image: '/images/interior.jpg',
      tag: isEs ? 'Cero Olores / VOC Bajo' : 'Low-VOC / Zero Downtime',
    },
    {
      icon: Building2,
      title: isEs ? 'Pintura Exterior Comercial' : 'Commercial Exterior Painting',
      description: isEs
        ? 'Recubrimientos resistentes a la intemperie para edificios de oficinas, bodegas, almacenes y parques industriales.'
        : 'Weather-resistant coatings for office buildings, warehouses, and industrial parks.',
      image: '/images/exterior.jpg',
      tag: isEs ? 'Resistente al Clima de TX' : 'UV & Storm Shield',
    },
    {
      icon: Umbrella,
      title: isEs ? 'Techos Comerciales y Recubrimientos' : 'Commercial Roofing & Coatings',
      description: isEs
        ? 'Recubrimientos protectores para techos diseñados para extender la vida útil de sus sistemas de techos planos o metálicos.'
        : 'Protective roof coatings designed to extend the life of your flat or metal roofing systems.',
      image: '/images/facility.jpg',
      tag: isEs ? 'Eficiencia Energética' : 'Thermal Reflective',
    },
    {
      icon: Building,
      title: isEs ? 'Pintura de Inmuebles e Instalaciones' : 'Property & Facility Painting',
      description: isEs
        ? 'Pintura preventiva y correctiva para grupos de administración de propiedades, complejos corporativos y asociaciones (HOAs).'
        : 'Maintenance painting for property management groups and HOAs.',
      image: '/images/building.jpg',
      tag: isEs ? 'Contratos de Mantenimiento' : 'Facility Agreements',
    },
    {
      icon: Shield,
      title: isEs ? 'Servicios de Restauración' : 'Restoration Services',
      description: isEs
        ? 'Restauración detallada para edificios históricos e infraestructuras existentes que requieren técnicas y cuidados especializados.'
        : 'Detailed restoration for historic buildings and older infrastructures requiring specialized care.',
      image: '/images/restoration.jpg',
      tag: isEs ? 'Conservación Arquitectónica' : 'Preservation Grade',
    },
    {
      icon: Droplets,
      title: isEs ? 'Lavado a Presión y Preparación' : 'Pressure Washing & Surface Prep',
      description: isEs
        ? 'Limpieza profunda y preparación mecánica esencial para garantizar la adherencia y máxima longevidad de cualquier recubrimiento.'
        : 'Essential cleaning and preparation to ensure the longevity of any coating.',
      image: '/images/surface_prep.jpg',
      tag: isEs ? 'Preparación Estándar SSPC' : 'SSPC Spec Cleaning',
    },
  ];

  // 7-Step Process
  const steps = [
    {
      num: '01',
      title: isEs ? 'Consulta' : 'Consultation',
      desc: isEs
        ? 'Escuchamos sus objetivos, presupuesto y cronograma.'
        : 'We listen to your goals, budget, and timeline.',
    },
    {
      num: '02',
      title: isEs ? 'Evaluación de Sitio' : 'Site Assessment',
      desc: isEs
        ? 'Una inspección minuciosa de las superficies y desafíos potenciales.'
        : 'A thorough inspection of the surfaces and potential challenges.',
    },
    {
      num: '03',
      title: isEs ? 'Propuesta' : 'Proposal',
      desc: isEs
        ? 'Un presupuesto detallado y transparente sin cargos ocultos.'
        : 'A detailed, transparent estimate with no hidden fees.',
    },
    {
      num: '04',
      title: isEs ? 'Preparación' : 'Preparation',
      desc: isEs
        ? 'Enmascarado, limpieza e imprimación adecuados: el secreto de un acabado duradero.'
        : 'Proper masking, cleaning, and priming—the secret to a long-lasting finish.',
    },
    {
      num: '05',
      title: isEs ? 'Pintura y Restauración' : 'Paint & Restore',
      desc: isEs
        ? 'Ejecución por parte de nuestras cuadrillas de pintores capacitados y verificados.'
        : 'Execution by our skilled, background-checked painting crews.',
    },
    {
      num: '06',
      title: isEs ? 'Inspección Final' : 'Final Walkthrough',
      desc: isEs
        ? 'No nos retiramos hasta que usted esté 100% satisfecho.'
        : "We don't leave until you are 100% satisfied.",
    },
    {
      num: '07',
      title: isEs ? 'Aprobación y Garantía' : 'Sign-Off & Warranty',
      desc: isEs
        ? 'Aprobación final respaldada por nuestra garantía escrita de mano de obra.'
        : 'Final approval backed by our written workmanship warranty.',
    },
  ];

  // Service Areas
  const serviceRegions = [
    {
      name: isEs ? 'Dallas y Fort Worth' : 'Dallas & Fort Worth',
      type: isEs ? 'Sede Central y Corredores Principales' : 'Central Hub & Metro Corridors',
      highlight: isEs ? 'Despacho Inmediato' : 'Immediate Dispatch',
    },
    {
      name: isEs ? 'Plano, Frisco, y McKinney' : 'Plano, Frisco, & McKinney',
      type: isEs ? 'Corredor Corporativo Norte y Sedes' : 'North Platinum Corridor & Corporate Parks',
      highlight: isEs ? 'Centros Corporativos' : 'Corporate HQ Support',
    },
    {
      name: isEs ? 'Irving, Arlington, y Grand Prairie' : 'Irving, Arlington, & Grand Prairie',
      type: isEs ? 'Centros Logísticos y Entretenimiento' : 'Distribution, Retail & Entertainment Parks',
      highlight: isEs ? 'Logística y Almacenes' : 'Logistics Centers',
    },
    {
      name: isEs ? 'Richardson, Garland, y Mesquite' : 'Richardson, Garland, & Mesquite',
      type: isEs ? 'Parques Industriales y Tecnológicos' : 'Technology, Telecom & Commercial Facilities',
      highlight: isEs ? 'Parques Industriales' : 'Industrial Parks',
    },
    {
      name: isEs ? 'Denton y Áreas Circundantes' : 'Denton & Surrounding Areas',
      type: isEs ? 'Sectores Institucionales e Industriales' : 'Institutional, Academic & Growth Sectors',
      highlight: isEs ? 'Cobertura Regional' : 'Regional Reach',
    },
  ];

  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-[#062F57] selection:text-white font-['Inter',sans-serif]">
      {/* 1. Sticky Navigation Bar */}
      <Navbar />

      {/* ── SECTION 1: HEADER / HERO SECTION ──────────────────────────── */}
      <section className="relative overflow-hidden bg-[#020F1D] text-white pt-12 sm:pt-16 pb-20 sm:pb-24 border-b border-black/[0.08]">
        {/* Background Cinematic Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
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
                {isEs ? 'Sobre Nosotros' : 'About Us'}
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
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-6 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Contrate un Contratista de Servicios de Pintura Interior o Exterior
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    para Edificios Comerciales Confiable o Premium - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Hire a Trusted or Premium Commercial Buildings Interior or Exterior
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Painting Services Contractor Services - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-8 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? "Proteja su inversión y mejore el valor de su propiedad eligiendo Painting Dallas. Como su contratista principal en servicios de pintura y construcción de edificios comerciales, brindamos servicios confiables o premium de pintura interior o exterior. Deje que nuestros especialistas en pintura de edificios comerciales brinden resultados superiores para su próximo proyecto."
                : "Protect your investment and enhance your property's value by choosing Painting Dallas. As your premier commercial buildings painting services construction services contractor, we provide trusted or premium commercial buildings interior or exterior painting services. Let our expert commercial buildings painters specialists deliver superior results for your next project."}
            </p>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {/* Primary CTA */}
              <button
                type="button"
                onClick={openEstimateModal}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{isEs ? 'Solicitar Cotización' : 'Request Quote'}</span>
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
                <span className="font-semibold">{isEs ? '10+ Años de Trayectoria' : '10+ Years Experience'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Radio de 50 Millas DFW' : '50-Mile DFW Service Radius'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Seguro Comercial $2M+' : '$2M+ Liability Insurance'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? '100% Especialistas Comerciales' : '100% Commercial Specialists'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ABOUT US: PROFESSIONAL PAINTING & RESTORATION ─── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle decorative dot pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Story Text Left */}
            <div className="lg:col-span-7">
              <div className="eyebrow mb-3">
                <span className="eyebrow-line" />
                <span>{isEs ? 'SOBRE NOSOTROS' : 'ABOUT US'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-6">
                {isEs
                  ? 'Servicios Profesionales de Pintura y Restauración'
                  : 'Professional Painting & Restoration Services'}
              </h2>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p className="text-base sm:text-lg font-medium text-slate-800">
                  {isEs
                    ? 'Painting Dallas ofrece servicios confiables de pintura interior y exterior para propiedades residenciales y comerciales en todo Dallas, Texas. Desde una preparación detallada de la superficie hasta un acabado impecable, nuestro experimentado equipo ofrece resultados duraderos y de alta calidad con profesionalismo, precisión y atención al detalle.'
                    : 'Painting Dallas provides dependable interior and exterior painting services for residential and commercial properties across Dallas, Texas. From detailed surface preparation to flawless finishing, our experienced team delivers high-quality, long-lasting results with professionalism, precision, and attention to detail.'}
                </p>

                <div className="p-5 rounded-2xl bg-slate-50 border-l-4 border-[#062F57] shadow-2xs my-4">
                  <p className="font-semibold text-[#062F57] text-sm sm:text-base">
                    {isEs
                      ? 'No somos simples pintores; somos Especialistas en Infraestructura Comercial.'
                      : 'We aren’t just painters; we are Commercial Infrastructure Specialists.'}
                  </p>
                  <p className="mt-2 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {isEs
                      ? 'Desde oficinas corporativas en rascacielos e instalaciones médicas hasta almacenes extensos y centros comerciales, comprendemos que su negocio no puede permitirse tiempos de inactividad. Por eso hemos construido nuestra reputación sobre dos pilares fundamentales: calidad intransigente y eficiencia operativa.'
                      : 'From high-rise corporate offices and medical facilities to sprawling warehouses and retail centers, we understand that your business cannot afford downtime. That is why we have built our reputation on two core pillars: uncompromising quality and operational efficiency.'}
                  </p>
                </div>

                <p>
                  {isEs
                    ? 'Ya sea una restauración exterior a gran escala o mejoras precisas en interiores para inquilinos, aportamos el mismo nivel de dedicación a cada proyecto, garantizando una interrupción mínima a sus operaciones y el máximo atractivo visual exterior e interior.'
                    : 'Whether it is a full-scale exterior restoration or precision interior tenant improvements, we bring the same level of dedication to every project, ensuring minimal disruption to your operations and maximum curb appeal.'}
                </p>
              </div>

              {/* Story Action Link */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#philosophy"
                  className="inline-flex items-center gap-2 rounded-full bg-[#062F57] hover:bg-[#0B477D] text-white px-6 py-3 text-xs font-black uppercase tracking-wider transition-all"
                >
                  <span>{isEs ? 'Ver Nuestra Filosofía' : 'Explore Our Philosophy'}</span>
                  <ArrowRight className="size-3.5" />
                </a>

                <button
                  type="button"
                  onClick={openEstimateModal}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 px-6 py-3 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                >
                  <span>{isEs ? 'Pedir Cotización en Línea' : 'Get Free Estimate'}</span>
                  <ArrowUpRight className="size-3.5 text-[#EF3340]" />
                </button>
              </div>
            </div>

            {/* Visual Right */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] sm:aspect-[5/4]">
                <Image
                  src="/images/about.jpg"
                  alt="Painting Dallas Professional Painting & Restoration Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020F1D]/80 via-transparent to-black/10" />

                {/* Floating Metric Card */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-lg text-slate-900">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#EF3340]">
                        {isEs ? 'Especialistas Certificados' : 'Painting & Restoration'}
                      </div>
                      <div className="text-sm font-black text-[#062F57] mt-0.5">
                        Dallas, Texas &amp; DFW Metroplex
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xl font-black text-[#0F172A] font-mono">10+</span>
                      <span className="text-[10px] block font-bold text-slate-500 uppercase">
                        {isEs ? 'Años' : 'Years'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: PHILOSOPHY / WHY CHOOSE PAINTING DALLAS ───────── */}
      <section id="philosophy" className="relative py-16 sm:py-24 bg-slate-50/70 border-b border-slate-100 overflow-hidden scroll-mt-20">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'FILOSOFÍA' : 'PHILOSOPHY'}</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs
                ? '¿Por Qué Elegir Painting Dallas Para Todas Sus Necesidades de Pintura?'
                : 'Why Choose Painting Dallas for Your All Kinds of Painting Needs?'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {isEs
                ? 'Elija Painting Dallas por nuestra experiencia inigualable, materiales de primera calidad y programación confiable en cada proyecto. Como sus principales especialistas locales en pintura de edificios comerciales, manejamos todo tipo de necesidades de pintura con precisión. Ya sea que requiera servicios de pintura interior o exterior para edificios comerciales o renovaciones complejas de instalaciones, nuestro equipo dedicado garantiza acabados impecables que minimizan el tiempo de inactividad y maximizan el atractivo profesional de su propiedad.'
                : 'Choose Painting Dallas for unmatched expertise, premium materials, and reliable scheduling on every project. As your top local commercial buildings painters specialists, we handle all kinds of painting needs with precision. Whether you require commercial buildings interior or exterior painting services or complex facility updates, our dedicated team guarantees flawless finishes that minimize downtime and maximize your property\'s professional appeal.'}
            </p>
          </div>

          {/* 6 Philosophy & Advantage Pillars Grid (01 to 06) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {philosophyPillars.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.number}
                  className="group relative rounded-3xl bg-white p-7 sm:p-8 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-[#062F57]/30 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Top Header Card */}
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex size-11 items-center justify-center rounded-2xl bg-[#062F57]/10 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-all duration-300 shadow-2xs">
                        <Icon className="size-5.5" />
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider bg-slate-100 text-slate-600 group-hover:bg-[#EF3340]/10 group-hover:text-[#EF3340] transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <div className="text-[11px] font-mono font-black text-[#EF3340] mb-1">
                      {item.number}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight mb-2.5 group-hover:text-[#062F57] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                    <span>STANDARD {item.number}</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <Check className="size-3.5" /> Verified
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: DEDICATED OUR MISSION, VISION & COMMITMENT ──────── */}
      <section className="relative py-16 sm:py-24 bg-[#062F57] text-white overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 size-96 bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 size-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 px-3.5 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-3 backdrop-blur-md">
              <Sparkles className="size-3 text-[#EF3340]" />
              <span>{isEs ? 'NUESTROS PRINCIPIOS RECTORES' : 'CORE GUIDING PRINCIPLES'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              {isEs
                ? 'Nuestra Misión, Nuestra Visión y Nuestro Compromiso'
                : 'Our Mission, Our Vision & Our Commitment'}
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {isEs
                ? 'Los tres pilares inquebrantables que impulsan cada decisión técnica, preparación de superficies y entrega de proyectos en Painting Dallas.'
                : 'The three unwavering pillars driving every technical decision, surface prep, and project delivery at Painting Dallas.'}
            </p>
          </div>

          {/* 3 Executive Triad Cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {triadItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-3xl bg-white text-slate-900 p-8 border border-white/20 shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="h-1.5 w-full bg-[#EF3340] absolute top-0 left-0" />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#062F57]/10 text-[#062F57] group-hover:bg-[#062F57] group-hover:text-white transition-colors duration-300">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                        PILLAR 0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-[#0F172A] tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#EF3340] mb-4">
                      {item.subtitle}
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-400">
                    <span>GUARANTEE 0{idx + 1}</span>
                    <CheckCircle2 className="size-4 text-[#EF3340]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR CORE SERVICES ──────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'NUESTROS SERVICIOS PRINCIPALES' : 'OUR CORE SERVICES'}</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs
                ? 'Soluciones Integrales de Pintura Para Cada Infraestructura'
                : 'Comprehensive Painting Solutions for Every Infrastructure'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {isEs
                ? 'Brindamos un espectro completo de servicios diseñados a la medida de las necesidades específicas de las propiedades comerciales:'
                : 'We provide a full spectrum of services tailored to the specific needs of commercial properties:'}
            </p>
          </div>

          {/* 6 Core Services 3x2 Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {coreServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Service Card Image */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Tag badge on image */}
                    <div className="absolute top-3.5 left-3.5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/90 text-[#062F57] backdrop-blur-md shadow-xs">
                        <Icon className="size-3 text-[#EF3340]" />
                        {service.tag}
                      </span>
                    </div>
                  </div>

                  {/* Service Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-black text-[#0F172A] tracking-tight mb-2 group-hover:text-[#062F57] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={openEstimateModal}
                        className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#EF3340] group-hover:text-[#D8222F] transition-colors cursor-pointer"
                      >
                        <span>{isEs ? 'Cotizar Servicio' : 'Request Estimate'}</span>
                        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                      </button>
                      <span className="text-[10px] font-mono text-slate-400 font-bold">
                        0{index + 1}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE PAINTING DALLAS PROCESS ─────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100 overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'EL PROCESO DE PAINTING DALLAS' : 'THE PAINTING DALLAS PROCESS'}</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs
                ? 'Completamos Cada Paso Con Cuidado y Precisión'
                : 'We Complete Every Step With Care & Precision'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {isEs
                ? 'Eliminamos las incertidumbres de su renovación. Nuestro proceso de 7 pasos está diseñado para brindar acabados superiores sin caos operativo:'
                : 'We take the guesswork out of your renovation. Our 7-step process is designed to deliver superior finishes without the chaos:'}
            </p>
          </div>

          {/* 7-Step Process Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.slice(0, 4).map((step) => (
              <div
                key={step.num}
                className="relative rounded-2xl bg-white p-6 border border-slate-200 shadow-xs hover:shadow-md hover:border-[#062F57]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-[#062F57] text-white font-mono font-black text-xs shadow-xs">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      STEP {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Remaining 3 steps (centered row on desktop) */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 max-w-5xl mx-auto">
            {steps.slice(4, 7).map((step) => (
              <div
                key={step.num}
                className={`relative rounded-2xl bg-white p-6 border shadow-xs hover:shadow-md transition-all flex flex-col justify-between ${
                  step.num === '07'
                    ? 'border-[#EF3340]/40 ring-1 ring-[#EF3340]/20 bg-gradient-to-br from-white to-[#EF3340]/5'
                    : 'border-slate-200 hover:border-[#062F57]/30'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`flex size-9 items-center justify-center rounded-xl font-mono font-black text-xs shadow-xs ${
                        step.num === '07'
                          ? 'bg-[#EF3340] text-white'
                          : 'bg-[#062F57] text-white'
                      }`}
                    >
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                      STEP {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-[#0F172A] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                {step.num === '07' && (
                  <div className="mt-4 pt-3 border-t border-[#EF3340]/20 text-[11px] font-bold text-[#EF3340] flex items-center gap-1.5">
                    <ShieldCheck className="size-3.5" />
                    <span>{isEs ? 'Garantía por Escrito Incluida' : 'Written Workmanship Warranty'}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SERVICE AREAS: COVERING THE DFW METROPLEX ─────── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'ÁREAS DE SERVICIO' : 'SERVICE AREAS: COVERING THE DFW METROPLEX'}</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs
                ? 'Experiencia Local, Alcance en Todo el Metroplex'
                : 'Local Expertise, Metroplex-Wide Reach'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {isEs
                ? 'Painting Dallas se enorgullece de servir a todo el Metroplex de Dallas-Fort Worth. Con un radio de servicio de 50 millas, nuestros equipos están posicionados estratégicamente para responder rápidamente a proyectos en:'
                : 'Painting Dallas is proud to serve the entire Dallas-Fort Worth Metroplex. With a 50-mile service radius, our teams are strategically positioned to respond quickly to projects in:'}
            </p>
          </div>

          {/* Regional Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-10">
            {serviceRegions.map((region, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-slate-50 border border-slate-200/80 hover:border-[#062F57]/40 hover:bg-white transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex size-8 items-center justify-center rounded-lg bg-[#062F57]/10 text-[#062F57] mb-3">
                    <MapPin className="size-4" />
                  </div>
                  <h3 className="text-sm font-black text-[#0F172A] leading-snug mb-1">
                    {region.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-normal">
                    {region.type}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/60">
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#EF3340]">
                    {region.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Texas Climate Weather Extreme Banner */}
          <div className="rounded-3xl bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#041E38] text-white p-7 sm:p-9 shadow-xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-[#EF3340]">
                <Sun className="size-7" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold uppercase tracking-widest text-[#EF3340] mb-1">
                  Texas Engineered Durability
                </span>
                <p className="text-sm sm:text-base font-semibold text-white/95 leading-relaxed">
                  {isEs
                    ? 'Comprendemos el clima local y los códigos de construcción de Texas, asegurando que su propiedad esté protegida contra los extremos climáticos del estado.'
                    : 'We understand the local climate and building codes, ensuring your property is protected against Texas weather extremes.'}
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-6 py-3.5 text-xs font-black uppercase tracking-wider shadow-md transition-all hover:scale-105"
              >
                <span>{isEs ? 'Consultar Cobertura' : 'Check Your Facility'}</span>
                <ArrowRight className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CONTACT US ─────────────────────────────────────── */}
      <section id="contact" className="relative py-16 sm:py-24 bg-white overflow-hidden scroll-mt-20">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'CONTÁCTENOS' : 'CONTACT US'}</span>
              <span className="eyebrow-line" />
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs
                ? '¿Listo Para Elevar Su Activo Comercial?'
                : 'Ready to Elevate Your Commercial Asset?'}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium">
              {isEs
                ? 'Únase a los cientos de clientes satisfechos, desde administradores de propiedades hasta directores de instalaciones, que confían en Painting Dallas para sus necesidades de restauración y pintura.'
                : 'Join the hundreds of satisfied clients, from property managers to facility directors, who trust Painting Dallas for their restoration and painting needs.'}
            </p>

            <div className="mt-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-black uppercase tracking-wider border border-[#EF3340]/25">
                {isEs ? 'Obtenga Su Cotización Gratis y Sin Compromiso Hoy' : 'Get Your Free, No-Obligation Quote Today.'}
              </span>
            </div>
          </div>

          {/* 2-Column Split: Info Left + Form Right */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left: Contact Info Card */}
            <div className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-[#062F57] text-white p-7 sm:p-9 shadow-xl border border-white/15 flex flex-col justify-between">
              {/* Radial decor */}
              <div className="absolute top-0 right-0 size-80 bg-[#EF3340]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 size-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-[10px] font-mono font-black uppercase tracking-widest text-[#EF3340] mb-6 border border-white/15">
                  <span className="size-1.5 rounded-full bg-[#EF3340] animate-pulse" />
                  Dallas HQ &amp; Direct Dispatch
                </span>

                <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                  {isEs ? 'Oficina Comercial Painting Dallas' : 'Painting Dallas Commercial HQ'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
                  {isEs
                    ? 'Comuníquese directamente con nuestros estimadores senior para asesoría en sitio y especificaciones técnicas.'
                    : 'Reach our senior commercial estimators directly for on-site assessments and specification reviews.'}
                </p>

                {/* Exact Specified Details */}
                <div className="space-y-5 text-xs sm:text-sm">
                  {/* Address */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#EF3340] shrink-0 border border-white/15">
                      <MapPin className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        {isEs ? 'Dirección' : 'Address'}
                      </div>
                      <div className="font-bold text-white text-sm mt-0.5">
                        3017 Grand Ave, Dallas, TX 75215
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#EF3340] shrink-0 border border-white/15">
                      <Phone className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        {isEs ? 'Teléfono Directo' : 'Phone'}
                      </div>
                      <a
                        href="tel:4693685885"
                        className="font-bold text-white text-base mt-0.5 hover:text-[#EF3340] transition-colors block font-mono"
                      >
                        (469) 368-5885
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#EF3340] shrink-0 border border-white/15">
                      <Mail className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        {isEs ? 'Correo Electrónico' : 'Email'}
                      </div>
                      <a
                        href="mailto:info@paintingdallas.com"
                        className="font-bold text-white text-sm mt-0.5 hover:text-[#EF3340] transition-colors block"
                      >
                        info@paintingdallas.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3.5">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-[#EF3340] shrink-0 border border-white/15">
                      <Clock className="size-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
                        {isEs ? 'Horario de Atención' : 'Hours'}
                      </div>
                      <div className="font-semibold text-white text-xs mt-0.5 leading-snug">
                        Monday - Friday: 7:00 AM - 6:00 PM
                        <span className="block text-[#EF3340] font-bold mt-1">
                          24/7 Emergency Support Available
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Guarantee */}
              <div className="relative z-10 mt-10 pt-6 border-t border-white/15 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <ShieldCheck className="size-4 text-[#EF3340]" />
                  <span className="font-semibold">{isEs ? 'Respuesta en 24 Horas' : 'Guaranteed 24-Hour Response'}</span>
                </div>
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold">
                  DFW Licensed
                </span>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 rounded-3xl bg-white border border-slate-200 p-7 sm:p-9 shadow-lg flex flex-col justify-center">
              {formSubmitted ? (
                <div className="py-12 text-center">
                  <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h3 className="text-2xl font-black text-[#0F172A] mb-2">
                    {isEs ? '¡Solicitud Recibida!' : 'Estimate Request Received!'}
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    {isEs
                      ? 'Gracias por comunicarse con Painting Dallas. Un gerente de proyecto dedicado revisará los detalles de su infraestructura y le responderá dentro de 24 horas garantizadas.'
                      : 'Thank you for reaching out to Painting Dallas. A dedicated project manager will review your infrastructure details and respond within 24 hours guaranteed.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Commercial Office Building',
                        details: '',
                      });
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#062F57] text-white text-xs font-black uppercase tracking-wider hover:bg-[#0B477D] transition-colors cursor-pointer"
                  >
                    <span>{isEs ? 'Enviar Otra Consulta' : 'Submit Another Request'}</span>
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="mb-2">
                    <h3 className="text-xl font-black text-[#0F172A] tracking-tight">
                      {isEs ? 'Solicite Su Presupuesto Comercial' : 'Request Your Commercial Estimate'}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1">
                      {isEs
                        ? 'Complete el formulario a continuación para recibir una cotización precisa.'
                        : 'Fill out the form below to receive an accurate, line-item commercial bid.'}
                    </p>
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      {isEs ? 'Nombre Completo *' : 'Name *'}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={isEs ? 'Ej. Carlos Mendez' : 'e.g. John Miller'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent text-sm transition-all"
                    />
                  </div>

                  {/* Email & Phone 2-Col */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        {isEs ? 'Correo Electrónico *' : 'Email *'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder={isEs ? 'correo@empresa.com' : 'john@company.com'}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                      >
                        {isEs ? 'Teléfono *' : 'Phone *'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(469) 000-0000"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent text-sm transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      {isEs
                        ? 'Tipo de Proyecto (Oficina, Bodega, Retail, etc.) *'
                        : 'Project Type (Office, Warehouse, Retail, etc.) *'}
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent text-sm transition-all bg-white"
                    >
                      <option value="Commercial Office Building">Commercial Office Building / Corporativo</option>
                      <option value="Industrial Warehouse / Distribution">Industrial Warehouse / Bodega o Almacén</option>
                      <option value="Retail Center / Strip Mall">Retail Center / Centro Comercial</option>
                      <option value="Healthcare / Medical Facility">Healthcare &amp; Medical / Instalación Médica</option>
                      <option value="Multi-Family & HOA Communities">Multi-Family &amp; HOA Communities</option>
                      <option value="Commercial Roof Coating">Commercial Roof Coating / Techos Industriales</option>
                      <option value="Epoxy Flooring / Industrial Coating">Epoxy Flooring &amp; Surface Prep</option>
                      <option value="Historic Building Restoration">Historic Restoration / Restauración Especial</option>
                      <option value="Other Commercial Infrastructure">Other Commercial Infrastructure</option>
                    </select>
                  </div>

                  {/* Project Details */}
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1"
                    >
                      {isEs ? 'Detalles del Proyecto *' : 'Project Details *'}
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={3}
                      value={formData.details}
                      onChange={handleInputChange}
                      placeholder={
                        isEs
                          ? 'Describa su proyecto, metraje estimado, cronograma y cualquier requerimiento especial...'
                          : 'Describe your property, estimated square footage, preferred schedule, and any specific requirements...'
                      }
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent text-sm transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#EF3340] hover:bg-[#D8222F] text-white py-4 px-6 text-sm font-black uppercase tracking-wider shadow-[0_8px_20px_rgba(239,51,64,0.3)] transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>{isEs ? 'Enviando Solicitud...' : 'Processing Request...'}</span>
                      ) : (
                        <>
                          <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
                          <span>{isEs ? 'Solicitar Mi Presupuesto' : 'Request My Estimate'}</span>
                        </>
                      )}
                    </button>
                    <p className="text-center text-[11px] text-slate-500 mt-2 font-medium">
                      {isEs
                        ? 'Respuesta garantizada en 24 horas.'
                        : 'Guaranteed response within 24 hours.'}
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────── */}
      <Footer />

      {/* Global Interactive Modals */}
      <EstimateModal />
      <ServiceDetailModal />
      <ProjectDetailModal />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileStickyBar />
    </main>
  );
}
