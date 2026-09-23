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
  ChevronDown,
  Sparkles,
  Send,
  Upload,
  Check,
  Zap,
  HelpCircle,
  FileText,
  AlertCircle,
  Layers,
  Wrench,
  ThumbsUp,
} from 'lucide-react';

export default function FreeEstimatePage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeStep, setActiveStep] = useState<1 | 2 | 3>(1);
  const [selectedFiles, setSelectedFiles] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    // Step 1: Your Information
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    preferredContactMethod: 'phone', // 'phone' | 'email' | 'text'

    // Step 2: Project Details
    projectAddress: '',
    propertyType: 'Commercial Office',
    serviceNeeded: 'Interior Painting',
    projectSize: '5,000 – 20,000 sq. ft.',
    projectTimeline: 'Within 1 Month',

    // Step 3: Additional Information
    projectDetails: '',
    referralSource: 'Google Search',
    scheduleOnSite: 'yes', // 'yes' | 'no' | 'not_sure'
  });

  // Accordion State for FAQs
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (method: string) => {
    setFormData((prev) => ({ ...prev, preferredContactMethod: method }));
  };

  const handleScheduleChange = (choice: string) => {
    setFormData((prev) => ({ ...prev, scheduleOnSite: choice }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const names = Array.from(e.target.files).map((f) => f.name);
      setSelectedFiles(names);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 750);
  };

  const scrollToForm = () => {
    const el = document.getElementById('estimate-form');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 5 What You Get Items
  const whatYouGetItems = [
    {
      title: isEs ? 'Propuesta Detallada y Desglosada' : 'Detailed Line-Item Proposal',
      why: isEs
        ? 'Sepa exactamente por qué está pagando: mano de obra, materiales premium, preparación exhaustiva y limpieza final.'
        : 'Know exactly what you’re paying for—labor, materials, surface prep, and cleanup.',
      icon: FileText,
      badge: isEs ? 'Sin Sorpresas' : 'Itemized Scope',
    },
    {
      title: isEs ? 'Evaluación Técnica en el Sitio' : 'On-Site Assessment',
      why: isEs
        ? 'Inspeccionamos su propiedad en persona para identificar problemas potenciales antes de que se conviertan en gastos costosos.'
        : 'We inspect your property in person to identify potential issues before they become expensive problems.',
      icon: MapPin,
      badge: isEs ? 'Sin Costo' : 'Free Inspection',
    },
    {
      title: isEs ? 'Precios Fijos y Transparentes' : 'Transparent Pricing',
      why: isEs
        ? 'Sin tarifas ocultas ni cotizaciones ambiguas. Una propuesta clara y de precio fijo garantizado.'
        : 'No hidden fees. No vague "estimates." A clear, fixed quote.',
      icon: ShieldCheck,
      badge: isEs ? 'Precio Fijo' : 'Fixed Quotes',
    },
    {
      title: isEs ? 'Programación Flexible y Sin Interrupción' : 'Flexible Scheduling',
      why: isEs
        ? 'Trabajamos alrededor de sus horarios comerciales, noches y fines de semana para minimizar cualquier interrupción.'
        : 'We work around your business hours to minimize disruption.',
      icon: Clock,
      badge: isEs ? 'Turnos Nocturnos' : 'Zero Downtime',
    },
    {
      title: isEs ? 'Garantía de Mano de Obra de 5 Años' : '5-Year Workmanship Warranty',
      why: isEs
        ? 'Su inversión está protegida mucho después de finalizar la obra con nuestro respaldo escrito.'
        : 'Your investment is protected long after the job is done.',
      icon: Award,
      badge: isEs ? 'Por Escrito' : 'Written Protection',
    },
  ];

  // 5-Step Process
  const estimateSteps = [
    {
      num: '01',
      title: isEs ? '1. Respuesta Rápida (Menos de 24 Horas)' : '1. Rapid Response (Within 24 Hours)',
      desc: isEs
        ? 'Un miembro de nuestro equipo de estimación comercial se comunicará con usted para confirmar la recepción y hacer preguntas aclaratorias.'
        : 'A member of our commercial estimating team will reach out to acknowledge your request and ask any clarifying questions.',
    },
    {
      num: '02',
      title: isEs ? '2. Llamada de Descubrimiento (15-30 Min)' : '2. Discovery Call (15-30 Minutes)',
      desc: isEs
        ? 'Una breve conversación para comprender el alcance del trabajo, presupuesto, plazos y cualquier restricción operativa especial.'
        : 'A brief conversation to understand your scope, budget, timeline, and any specific requirements or constraints.',
    },
    {
      num: '03',
      title: isEs ? '3. Evaluación en el Sitio (A Su Conveniencia)' : '3. On-Site Assessment (Scheduled at Your Convenience)',
      desc: isEs
        ? 'Vamos a su propiedad. Inspeccionamos las superficies, detectamos humedad o recubrimientos deteriorados y tomamos medidas láser precisas.'
        : 'We come to you. We inspect the surfaces, identify potential issues (like dry rot, moisture, or failing coatings), and take precise measurements.',
    },
    {
      num: '04',
      title: isEs ? '4. Propuesta Detallada (En 48 Horas)' : '4. Detailed Proposal (Delivered Within 48 Hours of Assessment)',
      desc: isEs
        ? 'Recibirá una cotización desglosada y transparente. Sin cargos ocultos ni estimaciones vagas: precios y especificaciones 100% claros.'
        : 'You receive a transparent, line-item quote. No hidden fees. No vague "estimates." Just clear pricing and a clear scope of work.',
    },
    {
      num: '05',
      title: isEs ? '5. Inicio del Proyecto (En Su Calendario)' : '5. Project Kickoff (On Your Schedule)',
      desc: isEs
        ? 'Una vez aprobada, nos coordinamos con su equipo para programar los trabajos en el horario que minimice la interrupción de sus operaciones.'
        : 'Once approved, we coordinate with your team to schedule the work at a time that minimizes disruption to your business operations.',
    },
  ];

  // The Painting Dallas Advantage (7 Points)
  const advantageList = [
    {
      title: isEs ? '10+ Años de Experiencia Comercial' : '10+ Years of Commercial Experience',
      desc: isEs ? 'Especialistas certificados en infraestructura comercial en DFW.' : 'Dedicated commercial infrastructure specialists across DFW.',
    },
    {
      title: isEs ? 'Con Licencia, Fianza y Seguro ($2M+)' : 'Licensed, Bonded & Insured ($2M+)',
      desc: isEs ? 'Póliza completa de responsabilidad civil y compensación de trabajadores.' : 'Comprehensive general liability and full workers’ comp coverage.',
    },
    {
      title: isEs ? 'Cuadrillas Uniformadas y Verificadas' : 'Background-Checked, Uniformed Crews',
      desc: isEs ? 'Personal confiable, capacitado en normas de seguridad y OSHA.' : 'Vetted, respectful professionals trained in OSHA standards.',
    },
    {
      title: isEs ? 'Gerente de Proyecto Dedicado' : 'Dedicated Project Manager for Every Job',
      desc: isEs ? 'Un solo punto de contacto con informes diarios fotográficos.' : 'Single point of contact with daily photo logs and proactive updates.',
    },
    {
      title: isEs ? 'Garantía Escrita de Mano de Obra de 5 Años' : '5-Year Written Workmanship Warranty',
      desc: isEs ? 'Tranquilidad total y protección a largo plazo para sus instalaciones.' : 'Long-term asset protection and guaranteed commercial durability.',
    },
    {
      title: isEs ? 'Mínima Interrupción en sus Operaciones' : 'Minimal Disruption to Your Operations',
      desc: isEs ? 'Opciones de turnos nocturnos, fines de semana y contención de polvo.' : 'Night shifts, weekend work, and HEPA containment protocols.',
    },
    {
      title: isEs ? '100% Garantía de Satisfacción' : '100% Satisfaction Guarantee',
      desc: isEs ? 'Recorrido final de inspección antes de dar por terminado cualquier proyecto.' : 'Full post-job walk-through before final punch list sign-off.',
    },
  ];

  // Service Areas (5 Counties)
  const serviceCounties = [
    {
      county: 'Dallas County',
      countyEs: 'Condado de Dallas',
      cities: 'Dallas, Irving, Garland, Mesquite, Richardson, Grand Prairie',
      hub: 'HQ Location',
    },
    {
      county: 'Collin County',
      countyEs: 'Condado de Collin',
      cities: 'Plano, Frisco, McKinney, Allen, Wylie',
      hub: 'North DFW Hub',
    },
    {
      county: 'Denton County',
      countyEs: 'Condado de Denton',
      cities: 'Denton, Lewisville, Flower Mound, Little Elm',
      hub: 'Northwest Corridor',
    },
    {
      county: 'Tarrant County',
      countyEs: 'Condado de Tarrant',
      cities: 'Fort Worth, Arlington, Grapevine, Southlake, Mansfield',
      hub: 'Fort Worth & Mid-Cities',
    },
    {
      county: 'Rockwall County',
      countyEs: 'Condado de Rockwall',
      cities: 'Rockwall, Royse City',
      hub: 'East DFW Coverage',
    },
  ];

  // FAQs
  const faqs = [
    {
      q: isEs ? '¿El presupuesto es realmente gratuito?' : 'Is the estimate really free?',
      a: isEs
        ? 'Sí. Ofrecemos presupuestos gratuitos y sin compromiso para todos los proyectos comerciales dentro de nuestra área de cobertura. No hay costos ocultos ni presión para contratarnos.'
        : 'Yes. We provide free, no-obligation estimates for all commercial projects within our service area. There is no cost and no pressure to hire us.',
    },
    {
      q: isEs ? '¿Cuánto tiempo tardan en entregar el presupuesto?' : 'How long does it take to receive my estimate?',
      a: isEs
        ? 'Respondemos a todas las solicitudes en menos de 24 horas hábiles. Luego de la evaluación técnica en el sitio, recibirá su propuesta detallada en un plazo de 48 horas.'
        : 'We respond to all inquiries within 24 business hours. After an on-site assessment, you will receive a detailed proposal within 48 hours.',
    },
    {
      q: isEs ? '¿Necesito estar presente durante la evaluación en el sitio?' : 'Do I need to be present for the on-site assessment?',
      a: isEs
        ? 'Es de gran ayuda, pero no obligatorio. Si no puede asistir, asegúrese de que tengamos acceso a las áreas a pintar y un punto de contacto disponible para responder preguntas.'
        : 'It is helpful but not required. If you cannot be there, please ensure we have access to the areas that need painting and a point of contact who can answer questions.',
    },
    {
      q: isEs ? '¿Qué información necesitan para proporcionar una cotización exacta?' : 'What information do you need from me to provide an accurate estimate?',
      a: isEs
        ? 'Cuantos más detalles pueda proporcionar, mejor. Información útil incluye: pies cuadrados aproximados, número de pisos, tipos de superficie, estado actual, recubrimientos especiales y plazos deseados.'
        : 'The more details you can provide, the better. Helpful information includes: square footage, number of floors, surface types, current condition, any specific coatings required, and your ideal timeline.',
    },
    {
      q: isEs ? '¿Ofrecen estimaciones de emergencia o fuera de horario?' : 'Do you offer emergency or after-hours estimates?',
      a: isEs
        ? 'Sí. Para necesidades urgentes de restauración por daños o inspecciones críticas, ofrecemos soporte de emergencia 24/7. Llame al (469) 368-5885.'
        : 'Yes. For urgent restoration needs, we offer 24/7 emergency support. Call (469) 368-5885 and follow the prompts.',
    },
    {
      q: isEs ? '¿Qué tipos de propiedades comerciales pintan?' : 'What types of commercial properties do you paint?',
      a: isEs
        ? 'Pintamos edificios de oficinas corporativas, almacenes y naves industriales, centros comerciales, clínicas e instalaciones médicas, complejos multifamiliares/HOA, escuelas, hoteles y edificios gubernamentales.'
        : 'We service office buildings, warehouses, retail centers, medical facilities, multi-family properties, educational institutions, hospitality venues, and government buildings.',
    },
    {
      q: isEs ? '¿Cuentan con licencias y seguros al día?' : 'Are you licensed and insured?',
      a: isEs
        ? 'Absolutamente. Estamos totalmente autorizados, afianzados y asegurados con póliza integral de responsabilidad civil general y cobertura de compensación para trabajadores. Certificados disponibles a solicitud.'
        : 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers’ compensation coverage. Certificates of insurance are available upon request.',
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
                {isEs ? 'Cotización Gratuita' : 'Request Your Free Estimate'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • COMMERCIAL ESTIMATING</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Solicite su Cotización Gratuita de Pintura Comercial
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Propuestas Transparentes Entregadas en 24 Horas - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Request Your Free Commercial Painting Estimate
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Transparent Proposals Delivered Within 24 Hours - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Obtenga una propuesta detallada y transparente para su proyecto comercial, industrial o multifamiliar dentro de 24 horas. Sin cargos ocultos. Sin presiones. Solo servicio profesional garantizado.'
                : 'Get a detailed, transparent proposal for your commercial, industrial, or multi-family project within 24 hours. No hidden fees. No pressure. Just professional service.'}
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
                {isEs ? '180+ Proyectos Comerciales Realizados' : '180+ Commercial Projects Completed'}
              </span>
              <span className="text-slate-400">•</span>
              <span className="font-bold text-xs sm:text-sm text-emerald-400">
                {isEs ? 'Con Licencia y Seguro' : 'Licensed & Insured'}
              </span>
            </div>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              {/* Primary CTA: Smooth scrolls to form */}
              <button
                type="button"
                onClick={scrollToForm}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{isEs ? 'Llenar Formulario de Cotización' : 'Fill Out Estimate Form'}</span>
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
                <span className="font-semibold">{isEs ? 'Propuesta en 24 Horas' : '24-Hour Bid Turnaround'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Evaluación Técnica en Sitio' : 'Free On-Site Inspection'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita de 5 Años' : '5-Year Written Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Cero Interrupción Comercial' : 'Zero Operational Downtime'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY REQUEST AN ESTIMATE WITH US? (WHAT YOU GET) ─── */}
      <section className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? '¿POR QUÉ SOLICITAR UN PRESUPUESTO?' : 'WHY REQUEST AN ESTIMATE WITH US?'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
              {isEs ? 'Lo Que Obtiene al Contactarnos' : 'What You Get When You Reach Out'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isEs
                ? 'Entendemos que solicitar una cotización es el primer paso en una decisión importante. Esto es exactamente lo que puede esperar cuando se comunica con Painting Dallas:'
                : 'We understand that requesting a quote is the first step in a major decision. Here is what you can expect when you contact Painting Dallas:'}
            </p>
          </div>

          {/* 5-Card Value Comparison Matrix */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatYouGetItems.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#062F57]/40 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center shadow-md group-hover:bg-[#EF3340] transition-colors">
                        <Icon className="size-6 text-[#EF3340] group-hover:text-white transition-colors" />
                      </div>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white border border-slate-200 text-slate-700 shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-[#062F57] mb-2 leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.why}
                    </p>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#EF3340]">
                    <CheckCircle2 className="size-3.5" />
                    <span>{isEs ? 'Garantía Estándar' : 'Standard In Every Bid'}</span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: Direct Hotline */}
            <div className="rounded-2xl p-6 bg-gradient-to-br from-[#062F57] to-[#020F1D] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF3340]/20 rounded-full blur-2xl pointer-events-none" />
              <div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-white/15 text-[#EF3340] mb-4">
                  {isEs ? 'Atención Prioritaria' : 'Commercial Priority Desk'}
                </span>
                <h3 className="text-base sm:text-lg font-black text-white mb-2 leading-snug">
                  {isEs ? '¿Prefiere Hablar Directamente con un Estimador?' : 'Prefer to Speak Directly with an Estimator?'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {isEs
                    ? 'Si tiene planos, licitaciones (RFP) o plazos urgentes, llámenos directamente ahora mismo.'
                    : 'If you have blueprints, RFPs, or urgent deadlines, call our senior estimating desk directly.'}
                </p>
              </div>

              <a
                href="tel:4693685885"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white py-3 px-5 text-xs font-black uppercase tracking-wider shadow-md transition-all"
              >
                <Phone className="size-3.5" />
                <span>(469) 368-5885</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: REQUEST YOUR ESTIMATE (TELL US ABOUT YOUR PROJECT) ─── */}
      <section id="estimate-form" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="eyebrow justify-center mb-3">
                <span className="eyebrow-line" />
                <span>{isEs ? 'SOLICITAR COTIZACIÓN' : 'REQUEST YOUR ESTIMATE'}</span>
                <span className="eyebrow-line" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
                {isEs ? 'Cuéntenos Sobre Su Proyecto' : 'Tell Us About Your Project'}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl mx-auto leading-relaxed">
                {isEs
                  ? 'Complete el formulario a continuación y uno de nuestros estimadores comerciales se comunicará con usted dentro de 24 horas hábiles para discutir alcance, plazos y presupuesto.'
                  : 'Fill out the form below, and one of our commercial estimators will contact you within 24 business hours to discuss your project scope, timeline, and budget.'}
              </p>
            </div>

            {/* Main Form Container Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
              <div className="h-1.5 w-full bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] absolute top-0 left-0" />

              {formSubmitted ? (
                <div className="py-12 sm:py-16 text-center animate-in fade-in duration-300">
                  <div className="size-20 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-5 shadow-xl shadow-emerald-600/30">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#062F57] mb-3">
                    {isEs ? '¡Solicitud de Cotización Recibida!' : 'Estimate Request Received!'}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed mb-8">
                    {isEs
                      ? 'Gracias por comunicarse con Painting Dallas. Un estimador comercial senior revisará sus especificaciones y se comunicará con usted dentro de 24 horas hábiles.'
                      : 'Thank you for contacting Painting Dallas. A senior commercial estimator will review your specifications and reach out within 24 business hours.'}
                  </p>
                  <div className="inline-flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href="tel:4693685885"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#062F57] text-white px-7 py-3.5 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0B477D] transition-colors"
                    >
                      <Phone className="size-4 text-[#EF3340]" />
                      <span>(469) 368-5885</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setActiveStep(1);
                        setSelectedFiles([]);
                      }}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                    >
                      {isEs ? 'Enviar otra solicitud' : 'Submit another request'}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-10">
                  {/* Step Progress Indicators */}
                  <div className="grid grid-cols-3 gap-2 pb-6 border-b border-slate-100 text-center">
                    <div className="flex flex-col items-center">
                      <span className="size-7 rounded-full bg-[#062F57] text-white text-xs font-black flex items-center justify-center mb-1">
                        1
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#062F57]">
                        {isEs ? 'Paso 1: Contacto' : 'Step 1: Contact'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="size-7 rounded-full bg-[#062F57] text-white text-xs font-black flex items-center justify-center mb-1">
                        2
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#062F57]">
                        {isEs ? 'Paso 2: Proyecto' : 'Step 2: Details'}
                      </span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="size-7 rounded-full bg-[#062F57] text-white text-xs font-black flex items-center justify-center mb-1">
                        3
                      </span>
                      <span className="text-[11px] font-black uppercase tracking-wider text-[#062F57]">
                        {isEs ? 'Paso 3: Alcance' : 'Step 3: Scope'}
                      </span>
                    </div>
                  </div>

                  {/* ── STEP 1: YOUR INFORMATION ── */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="size-6 rounded-md bg-[#EF3340] text-white text-xs font-black flex items-center justify-center">
                        1
                      </div>
                      <h3 className="text-base font-black text-[#062F57] uppercase tracking-wider">
                        {isEs ? 'Paso 1: Su Información' : 'Step 1: Your Information'}
                      </h3>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Nombre Completo (Obligatorio) *' : 'Full Name (Required) *'}
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          required
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder={isEs ? 'ej. Carlos Morales' : 'e.g. David Vance'}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Empresa / Nombre de Propiedad (Opcional)' : 'Company / Property Name (Optional)'}
                        </label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder={isEs ? 'ej. Metroplex Logistics LLC' : 'e.g. DFW Properties Group'}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Correo Electrónico (Obligatorio) *' : 'Email Address (Required) *'}
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder={isEs ? 'carlos@empresa.com' : 'david@company.com'}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Número de Teléfono (Obligatorio) *' : 'Phone Number (Required) *'}
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder={isEs ? '(469) 000-0000' : '(469) 000-0000'}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {isEs ? 'Método de Contacto Preferido:' : 'Preferred Contact Method:'}
                      </label>
                      <div className="grid grid-cols-3 gap-3">
                        {[
                          { id: 'phone', label: isEs ? '📞 Llamada Telefónica' : '📞 Phone Call' },
                          { id: 'email', label: isEs ? '✉️ Correo Electrónico' : '✉️ Email' },
                          { id: 'text', label: isEs ? '💬 Mensaje de Texto' : '💬 Text Message' },
                        ].map((m) => (
                          <button
                            key={m.id}
                            type="button"
                            onClick={() => handleMethodChange(m.id)}
                            className={`py-3 px-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all text-center cursor-pointer ${
                              formData.preferredContactMethod === m.id
                                ? 'bg-[#062F57] text-white border-[#062F57] shadow-xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {m.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ── STEP 2: PROJECT DETAILS ── */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="size-6 rounded-md bg-[#EF3340] text-white text-xs font-black flex items-center justify-center">
                        2
                      </div>
                      <h3 className="text-base font-black text-[#062F57] uppercase tracking-wider">
                        {isEs ? 'Paso 2: Detalles del Proyecto' : 'Step 2: Project Details'}
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {isEs ? 'Dirección / Ciudad del Proyecto (Obligatorio) *' : 'Project Address / City (Required) *'}
                      </label>
                      <input
                        type="text"
                        name="projectAddress"
                        required
                        value={formData.projectAddress}
                        onChange={handleInputChange}
                        placeholder={isEs ? 'ej. 1200 Main St, Dallas o Plano, TX' : 'e.g. 1200 Main St, Dallas or Plano, TX'}
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Property Type Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Tipo de Propiedad:' : 'Property Type:'}
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Commercial Office">{isEs ? 'Oficina Comercial' : 'Commercial Office'}</option>
                          <option value="Industrial / Warehouse">{isEs ? 'Nave Industrial / Almacén' : 'Industrial / Warehouse'}</option>
                          <option value="Retail / Restaurant">{isEs ? 'Comercio / Restaurante' : 'Retail / Restaurant'}</option>
                          <option value="Medical Facility">{isEs ? 'Instalación Médica' : 'Medical Facility'}</option>
                          <option value="Multi-Family / HOA">{isEs ? 'Multifamiliar / HOA' : 'Multi-Family / HOA'}</option>
                          <option value="Educational Institution">{isEs ? 'Institución Educativa' : 'Educational Institution'}</option>
                          <option value="Hospitality / Hotel">{isEs ? 'Hotelería / Hotel' : 'Hospitality / Hotel'}</option>
                          <option value="Government / Municipal">{isEs ? 'Gobierno / Municipal' : 'Government / Municipal'}</option>
                          <option value="Other">{isEs ? 'Otro Espacio' : 'Other'}</option>
                        </select>
                      </div>

                      {/* Service Needed Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Servicio Requerido:' : 'Service Needed:'}
                        </label>
                        <select
                          name="serviceNeeded"
                          value={formData.serviceNeeded}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Interior Painting">{isEs ? 'Pintura Interior' : 'Interior Painting'}</option>
                          <option value="Exterior Painting">{isEs ? 'Pintura Exterior' : 'Exterior Painting'}</option>
                          <option value="Roofing & Protective Coatings">{isEs ? 'Recubrimientos Protectores y Techos' : 'Roofing & Protective Coatings'}</option>
                          <option value="Pressure Washing & Surface Prep">{isEs ? 'Lavado a Presión y Prep Superficial' : 'Pressure Washing & Surface Prep'}</option>
                          <option value="Drywall Repair & Restoration">{isEs ? 'Reparación de Drywall y Restauración' : 'Drywall Repair & Restoration'}</option>
                          <option value="Wallcovering Installation">{isEs ? 'Instalación de Revestimientos' : 'Wallcovering Installation'}</option>
                          <option value="Full-Service Restoration">{isEs ? 'Restauración Completa' : 'Full-Service Restoration'}</option>
                          <option value="Not Sure / Consultation Needed">{isEs ? 'No Seguro / Requiere Consulta' : 'Not Sure / Consultation Needed'}</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Project Size Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Tamaño Aproximado (Pies Cuadrados):' : 'Project Size (Approx. Sq. Footage):'}
                        </label>
                        <select
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Under 5,000 sq. ft.">{isEs ? 'Menos de 5,000 sq. ft.' : 'Under 5,000 sq. ft.'}</option>
                          <option value="5,000 – 20,000 sq. ft.">{isEs ? '5,000 – 20,000 sq. ft.' : '5,000 – 20,000 sq. ft.'}</option>
                          <option value="20,000 – 50,000 sq. ft.">{isEs ? '20,000 – 50,000 sq. ft.' : '20,000 – 50,000 sq. ft.'}</option>
                          <option value="50,000+ sq. ft.">{isEs ? '50,000+ sq. ft.' : '50,000+ sq. ft.'}</option>
                          <option value="Not Sure">{isEs ? 'No Estoy Seguro' : 'Not Sure'}</option>
                        </select>
                      </div>

                      {/* Project Timeline Dropdown */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Plazo del Proyecto:' : 'Project Timeline:'}
                        </label>
                        <select
                          name="projectTimeline"
                          value={formData.projectTimeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="ASAP / Emergency">{isEs ? 'Urgente / Emergencia' : 'ASAP / Emergency'}</option>
                          <option value="Within 2 Weeks">{isEs ? 'En 2 Semanas' : 'Within 2 Weeks'}</option>
                          <option value="Within 1 Month">{isEs ? 'En 1 Mes' : 'Within 1 Month'}</option>
                          <option value="1-3 Months">{isEs ? '1 a 3 Meses' : '1-3 Months'}</option>
                          <option value="Planning / Budgeting Phase">{isEs ? 'Fase de Planeación / Presupuesto' : 'Planning / Budgeting Phase'}</option>
                          <option value="Not Sure Yet">{isEs ? 'Aún No Estoy Seguro' : 'Not Sure Yet'}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* ── STEP 3: ADDITIONAL INFORMATION ── */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                      <div className="size-6 rounded-md bg-[#EF3340] text-white text-xs font-black flex items-center justify-center">
                        3
                      </div>
                      <h3 className="text-base font-black text-[#062F57] uppercase tracking-wider">
                        {isEs ? 'Paso 3: Información Adicional' : 'Step 3: Additional Information'}
                      </h3>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {isEs ? 'Detalles del Proyecto / Mensaje:' : 'Project Details / Message:'}
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder={
                          isEs
                            ? 'Describa el estado actual de las superficies, cualquier desafío específico (ej. espacio ocupado, acceso en altura, recubrimientos especiales) y su fecha ideal de finalización...'
                            : 'Please describe the current condition of the surfaces, any specific challenges (e.g., occupied space, height access, special coatings), and your ideal completion date...'
                        }
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {/* Referral Source */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? '¿Cómo Supo de Nosotros?' : 'How Did You Hear About Us?'}
                        </label>
                        <select
                          name="referralSource"
                          value={formData.referralSource}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Google Search">{isEs ? 'Búsqueda en Google' : 'Google Search'}</option>
                          <option value="Google Reviews">{isEs ? 'Reseñas de Google' : 'Google Reviews'}</option>
                          <option value="Referral">{isEs ? 'Recomendación' : 'Referral'}</option>
                          <option value="Driving By">{isEs ? 'Pasando por la Obra' : 'Driving By'}</option>
                          <option value="Social Media">{isEs ? 'Redes Sociales' : 'Social Media'}</option>
                          <option value="Repeat Client">{isEs ? 'Cliente Recurrente' : 'Repeat Client'}</option>
                          <option value="Other">{isEs ? 'Otro' : 'Other'}</option>
                        </select>
                      </div>

                      {/* Photo Upload Input */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Subir Fotos (Opcional):' : 'Upload Photos (Optional):'}
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            multiple
                            accept="image/*,.pdf"
                            onChange={handleFileChange}
                            id="photo-upload"
                            className="sr-only"
                          />
                          <label
                            htmlFor="photo-upload"
                            className="flex items-center justify-between px-4 py-2.5 rounded-xl border border-dashed border-slate-300 bg-slate-50/80 hover:bg-slate-100 text-xs font-medium text-slate-600 cursor-pointer transition-colors"
                          >
                            <span className="flex items-center gap-2 truncate">
                              <Upload className="size-4 text-[#EF3340] shrink-0" />
                              <span className="truncate">
                                {selectedFiles.length > 0
                                  ? `${selectedFiles.length} file(s) attached`
                                  : isEs
                                  ? 'Adjuntar fotos del área a pintar'
                                  : 'Attach photos of project area'}
                              </span>
                            </span>
                            <span className="px-2 py-1 rounded bg-white text-[10px] font-bold uppercase tracking-wider border border-slate-200 shrink-0">
                              {isEs ? 'Examinar' : 'Browse'}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* Schedule On-Site Assessment Question */}
                    <div className="pt-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        {isEs ? '¿Le gustaría programar una evaluación en el sitio?' : 'Would you like to schedule an on-site assessment?'}
                      </label>
                      <div className="grid sm:grid-cols-3 gap-2.5">
                        {[
                          { id: 'yes', label: isEs ? 'Sí, contáctenme para agendar' : 'Yes, please contact to schedule' },
                          { id: 'no', label: isEs ? 'No, consulta telefónica es suficiente' : 'No, phone consultation is fine' },
                          { id: 'not_sure', label: isEs ? 'Aún no estoy seguro' : 'I’m not sure yet' },
                        ].map((choice) => (
                          <button
                            key={choice.id}
                            type="button"
                            onClick={() => handleScheduleChange(choice.id)}
                            className={`p-3 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all text-center cursor-pointer ${
                              formData.scheduleOnSite === choice.id
                                ? 'bg-[#062F57] text-white border-[#062F57] shadow-xs'
                                : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                            }`}
                          >
                            {choice.label}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button & Reassurance */}
                  <div className="pt-4 border-t border-slate-100">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white py-4 px-8 text-sm sm:text-base font-black uppercase tracking-wider shadow-[0_12px_24px_-6px_rgba(239,51,64,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(239,51,64,0.55)] transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>{isEs ? 'Enviando Solicitud...' : 'Submitting Your Request...'}</span>
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          <span>{isEs ? 'Solicitar Mi Cotización Gratuita' : 'Request My Free Estimate'}</span>
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
                      <Shield className="size-3.5 text-slate-400 shrink-0" />
                      <span>
                        {isEs
                          ? 'Respetamos su privacidad. Su información nunca será compartida ni vendida.'
                          : 'We respect your privacy. Your information will never be shared or sold.'}
                      </span>
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: WHAT HAPPENS AFTER YOU SUBMIT? (5-STEP PROCESS) ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'PROCESO SENCILLO' : 'WHAT HAPPENS AFTER YOU SUBMIT?'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Nuestro Proceso de Estimación en 5 Pasos' : 'Our Simple 5-Step Estimate Process'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Sabemos que su tiempo es valioso. Esto es exactamente lo que sucede después de hacer clic en "Solicitar Cotización":'
                : 'We know your time is valuable. Here is exactly what happens after you hit "Submit":'}
            </p>
          </div>

          {/* 5-Step Roadmap Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {estimateSteps.map((step) => (
              <div
                key={step.num}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-black text-[#062F57]/20 group-hover:text-[#062F57]/40 font-mono transition-colors">
                      {step.num}
                    </span>
                    <span className="size-2 rounded-full bg-[#EF3340]" />
                  </div>
                  <h3 className="text-sm font-black text-[#062F57] mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-bold text-[#EF3340]">
                  <CheckCircle2 className="size-3.5" />
                  <span>{isEs ? 'Compromiso Cumplido' : 'Guaranteed Standard'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY CHOOSE PAINTING DALLAS? (THE ADVANTAGE) ─── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'LA VENTAJA DE PAINTING DALLAS' : 'WHY CHOOSE PAINTING DALLAS?'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'La Ventaja de Painting Dallas' : 'The Painting Dallas Advantage'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Cuando solicita una cotización con nosotros, no solo obtiene un precio: obtiene acceso a un equipo que ha completado con éxito más de 180 proyectos comerciales en todo el Metroplex de DFW.'
                : 'When you request an estimate from us, you’re not just getting a price—you’re getting access to a team that has successfully completed 180+ commercial projects across the DFW Metroplex.'}
            </p>
          </div>

          {/* 7 Advantage Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {advantageList.map((adv) => (
              <div
                key={adv.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex items-start gap-4"
              >
                <div className="size-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
                  <Check className="size-5 stroke-[2.5]" />
                </div>
                <div>
                  <h3 className="text-sm font-black text-[#062F57] leading-snug mb-1">
                    {adv.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {adv.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Extra CTA Box in Grid */}
            <div className="bg-gradient-to-br from-[#062F57] to-[#041E38] text-white rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#EF3340]">
                  {isEs ? 'Respaldo Confiable' : 'Proven Track Record'}
                </span>
                <h3 className="text-base font-black text-white mt-1">
                  {isEs ? '180+ Proyectos Comerciales' : '180+ Commercial Projects'}
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  {isEs
                    ? 'Edificios corporativos, hospitales, almacenes e industrias.'
                    : 'Corporate towers, hospital hubs, warehouses and retail.'}
                </p>
              </div>
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center justify-between w-full mt-4 px-4 py-2.5 rounded-xl bg-[#EF3340] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#D8222F] transition-colors cursor-pointer"
              >
                <span>{isEs ? 'Iniciar Cotización' : 'Start Free Bid'}</span>
                <ArrowRight className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: SERVICE AREAS (PROUDLY SERVING DFW METROPLEX) ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'ÁREA DE COBERTURA COMERCIAL' : 'SERVICE AREAS'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Sirviendo con Orgullo al Metroplex de DFW' : 'Proudly Serving the DFW Metroplex'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Ofrecemos presupuestos gratuitos para propiedades comerciales dentro de un radio de 50 millas de Dallas, incluyendo:'
                : 'We provide free estimates for commercial properties within a 50-mile radius of Dallas, including:'}
            </p>
          </div>

          {/* 5 Counties Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {serviceCounties.map((c) => (
              <div
                key={c.county}
                className="rounded-2xl p-5 bg-slate-50 border border-slate-200 hover:border-[#062F57]/40 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-[#062F57]/10 text-[#062F57] mb-3">
                    <MapPin className="size-2.5 text-[#EF3340]" />
                    <span>{c.hub}</span>
                  </div>
                  <h3 className="text-base font-black text-[#062F57] mb-2">
                    {isEs ? c.countyEs : c.county}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">
                    {c.cities}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] font-bold text-slate-500">
                  <span>{isEs ? 'Radio 50 Mi' : '50-Mi Radius'}</span>
                  <CheckCircle2 className="size-3 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Radius Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              {isEs
                ? '¿No está seguro si cubrimos su área? Llámenos al (469) 368-5885; es muy probable que sí lo hagamos.'
                : 'Not sure if we cover your area? Give us a call at (469) 368-5885—we likely do.'}
            </p>
            <div className="mt-3 flex items-center justify-center gap-3">
              <a
                href="tel:4693685885"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#EF3340] hover:text-[#D8222F]"
              >
                <Phone className="size-3.5" />
                <span>(469) 368-5885</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href="mailto:info@paintingdallas.com"
                className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#062F57] hover:text-[#0B477D]"
              >
                <Mail className="size-3.5" />
                <span>info@paintingdallas.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: PREFER TO SPEAK WITH SOMEONE DIRECTLY? (CONTACT CARDS) ─── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'CONTACTO DIRECTO' : 'PREFER TO SPEAK WITH SOMEONE DIRECTLY?'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight mb-3">
              {isEs ? 'Contáctenos Hoy Mismo' : 'Contact Us Today'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              {isEs
                ? 'Si prefiere saltarse el formulario y hablar con una persona de nuestro equipo comercial, estamos aquí para ayudarle.'
                : 'If you’d rather skip the form and speak with a real person, we’re here to help.'}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {/* Phone */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Phone className="size-5 text-[#EF3340]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? '📞 Teléfono Directo' : '📞 Phone'}
                </h3>
                <a
                  href="tel:4693685885"
                  className="block text-lg font-black text-[#062F57] hover:text-[#EF3340] transition-colors mt-1"
                >
                  (469) 368-5885
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                {isEs ? 'Lunes – Viernes: 7:00 AM – 6:00 PM' : 'Monday – Friday: 7:00 AM – 6:00 PM'}
              </p>
            </div>

            {/* Email */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Mail className="size-5 text-[#EF3340]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? '✉️ Correo Electrónico' : '✉️ Email Desk'}
                </h3>
                <a
                  href="mailto:info@paintingdallas.com"
                  className="block text-sm sm:text-base font-black text-[#062F57] hover:text-[#EF3340] transition-colors mt-1 truncate"
                >
                  info@paintingdallas.com
                </a>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                {isEs ? 'Envíe planos o RFPs en cualquier momento' : 'Send blueprints or scopes anytime'}
              </p>
            </div>

            {/* Office Location */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <MapPin className="size-5 text-[#EF3340]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {isEs ? '📍 Sede Central' : '📍 Office Location'}
                </h3>
                <p className="text-sm font-black text-[#062F57] mt-1">
                  3017 Grand Ave,
                </p>
                <p className="text-xs font-semibold text-slate-600">
                  Dallas, TX 75215
                </p>
              </div>
              <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-slate-100">
                {isEs ? 'Centro de Operaciones DFW' : 'DFW Commercial Operations'}
              </p>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-2xl bg-[#062F57] text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF3340]/15 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="size-11 rounded-xl bg-white/10 text-white flex items-center justify-center mb-4">
                  <Clock className="size-5 text-[#EF3340]" />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {isEs ? '🕒 Horario de Atención' : '🕒 Business Hours'}
                </h3>
                <p className="text-xs font-bold text-white mt-1">
                  Mon – Fri: 7:00 AM – 6:00 PM
                </p>
                <p className="text-xs text-slate-300">
                  Sat: By Appt | Sun: Closed
                </p>
              </div>
              <div className="mt-3 pt-3 border-t border-white/15 text-[11px] font-bold text-amber-300 flex items-center gap-1.5">
                <Zap className="size-3.5 text-[#EF3340]" />
                <span>{isEs ? 'Soporte de Emergencia 24/7' : '24/7 Emergency Support'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: FREQUENTLY ASKED QUESTIONS (FAQ ACCORDION) ─── */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? 'Preguntas Comunes Sobre Nuestras Cotizaciones' : 'Common Questions About Our Estimates'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Todo lo que necesita saber sobre el proceso de cotización comercial de Painting Dallas.'
                : 'Everything you need to know about the Painting Dallas commercial estimating process.'}
            </p>
          </div>

          {/* Accordion List */}
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm sm:text-base font-bold text-[#062F57]">
                      {faq.q}
                    </span>
                    <div
                      className={`size-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-[#EF3340] text-white border-[#EF3340]' : 'text-slate-500'
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: READY TO GET STARTED? (CALLOUT BANNER) ─── */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#062F57] via-[#041E38] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#062F57]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-white/15 text-[#EF3340] mb-4 backdrop-blur-md">
              <Sparkles className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'INICIE SU PROYECTO HOY' : 'READY TO GET STARTED?'}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs ? 'Devolvamos la Vida y el Valor a Su Propiedad' : 'Let’s Bring Your Property Back to Life'}
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-8">
              {isEs
                ? 'Ya sea que esté planificando un mantenimiento de rutina o una restauración integral a gran escala, Painting Dallas está lista para cumplir.'
                : 'Whether you’re planning a routine maintenance refresh or a full-scale restoration, Painting Dallas is ready to deliver.'}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <button
                type="button"
                onClick={scrollToForm}
                className="inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CalendarDays className="size-4" />
                <span>{isEs ? 'Solicitar Mi Cotización Gratuita' : 'Request My Free Estimate'}</span>
                <ArrowRight className="size-4" />
              </button>

              <a
                href="tel:4693685885"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/20 text-white px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all"
              >
                <Phone className="size-4 text-[#EF3340]" />
                <span>{isEs ? 'Llamar (469) 368-5885' : 'Call (469) 368-5885'}</span>
              </a>
            </div>

            <p className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              {isEs
                ? 'Confiado por más de 180 clientes comerciales en todo el Metroplex de Dallas-Fort Worth.'
                : 'Trusted by 180+ commercial clients across the Dallas-Fort Worth Metroplex.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 10: TRUST BADGES SECTION ─── */}
      <section className="py-14 sm:py-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-center">
              {[
                { title: isEs ? 'Con Licencia y Seguro' : 'Licensed & Insured' },
                { title: isEs ? '5.0 Calificación Google' : '5.0 Google Rating' },
                { title: isEs ? '180+ Proyectos Realizados' : '180+ Commercial Projects' },
                { title: isEs ? '10+ Años de Experiencia' : '10+ Years Experience' },
                { title: isEs ? 'Garantía Escrita de 5 Años' : '5-Year Warranty' },
                { title: isEs ? 'Personal Verificado' : 'Vetted Crews' },
                { title: isEs ? '100% Satisfacción' : '100% Satisfaction' },
              ].map((badge) => (
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
