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
  Send,
  Sparkles,
  AlertTriangle,
  FileText,
  Compass,
  HeartHandshake,
  MessageSquare,
  ExternalLink,
  Zap,
} from 'lucide-react';

export default function ContactPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    projectAddress: '',
    propertyType: 'Corporate Office Building',
    serviceNeeded: 'Commercial Interior Painting',
    projectDetails: '',
    referralSource: 'Google Search',
    preferredContactMethod: 'phone', // phone, email, text
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (method: string) => {
    setFormData((prev) => ({ ...prev, preferredContactMethod: method }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 750);
  };

  // What Happens After You Reach Out (5-Step Roadmap)
  const roadmapSteps = [
    {
      step: '01',
      title: isEs ? 'Respuesta Rápida (1 Hora)' : 'Rapid Response (Within 1 Hour)',
      desc: isEs
        ? 'Dentro de 1 hora hábil, uno de nuestros estimadores de proyectos comerciales revisará su solicitud y se pondrá en contacto.'
        : 'Within 1 business hour, one of our commercial project estimators will review your submission and connect with you.',
      badge: isEs ? 'Paso 1' : 'Step 1',
    },
    {
      step: '02',
      title: isEs ? 'Llamada de Descubrimiento' : 'Discovery Call',
      desc: isEs
        ? 'Discutimos el cronograma de su proyecto, limitaciones operativas, requerimientos presupuestarios y necesidades específicas.'
        : 'We discuss your project timeline, operational constraints, budget requirements, and specific facility needs.',
      badge: isEs ? 'Paso 2' : 'Step 2',
    },
    {
      step: '03',
      title: isEs ? 'Evaluación en el Sitio' : 'On-Site Assessment',
      desc: isEs
        ? 'Nuestro estimador comercial visita su propiedad para realizar mediciones precisas, pruebas de superficie y evaluaciones de seguridad.'
        : 'Our commercial estimator visits your property to perform precise measurements, surface testing, and safety evaluations.',
      badge: isEs ? 'Paso 3' : 'Step 3',
    },
    {
      step: '04',
      title: isEs ? 'Propuesta Detallada' : 'Detailed Proposal',
      desc: isEs
        ? 'Recibirá una propuesta desglosada y transparente que detalla el alcance, sistemas de recubrimiento recomendados, cronograma y precio fijo.'
        : 'You receive a line-item, transparent proposal outlining scope, recommended coating systems, timeline, and fixed pricing.',
      badge: isEs ? 'Paso 4' : 'Step 4',
    },
    {
      step: '05',
      title: isEs ? 'Inicio del Proyecto' : 'Project Kickoff',
      desc: isEs
        ? 'Tras la aprobación, programamos nuestras cuadrillas, coordinamos protocolos de seguridad y comenzamos el trabajo con interrupción mínima.'
        : 'Upon approval, we schedule our crews, coordinate safety protocols, and begin work with minimal disruption to your daily operations.',
      badge: isEs ? 'Paso 5' : 'Step 5',
    },
  ];

  // Service Areas (4 DFW Counties)
  const serviceCounties = [
    {
      county: 'Dallas County',
      countyEs: 'Condado de Dallas',
      cities: [
        'Dallas',
        'Highland Park',
        'University Park',
        'Irving',
        'Las Colinas',
        'Richardson',
        'Garland',
        'Mesquite',
        'Grand Prairie',
        'Addison',
        'Carrollton',
      ],
      hub: 'HQ Central Location',
      hubEs: 'Ubicación Central HQ',
    },
    {
      county: 'Collin County',
      countyEs: 'Condado de Collin',
      cities: [
        'Plano',
        'Frisco',
        'McKinney',
        'Allen',
        'Prosper',
        'Celina',
        'Fairview',
      ],
      hub: 'North DFW Corridor',
      hubEs: 'Corredor Norte de DFW',
    },
    {
      county: 'Denton County',
      countyEs: 'Condado de Denton',
      cities: [
        'Denton',
        'Lewisville',
        'Flower Mound',
        'The Colony',
        'Little Elm',
        'Corinth',
      ],
      hub: 'Northwest Expansion',
      hubEs: 'Expansión Noroeste',
    },
    {
      county: 'Tarrant County',
      countyEs: 'Condado de Tarrant',
      cities: [
        'Fort Worth',
        'Arlington',
        'Grapevine',
        'Southlake',
        'Colleyville',
        'Keller',
        'Mansfield',
      ],
      hub: 'Mid-Cities & Fort Worth',
      hubEs: 'Mid-Cities y Fort Worth',
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
                {isEs ? 'Contacto' : 'Contact Painting Dallas'}
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
                    Hablemos de su Próximo Proyecto Comercial en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Estimaciones Precisas y Sin Compromiso - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Let’s Discuss Your Next Commercial Project
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Precision Painting &amp; Restoration Across DFW - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-8 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Desde oficinas corporativas en rascacielos hasta almacenes industriales, nuestro equipo está listo para ofrecer pintura de precisión y restauración en todo el Metroplex de Dallas-Fort Worth. Solicite hoy su cotización gratuita y sin compromiso.'
                : 'From high-rise offices to industrial warehouses, our team is ready to deliver precision painting and restoration across the Dallas-Fort Worth Metroplex. Get your free, no-obligation estimate today.'}
            </p>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              {/* Primary CTA */}
              <a
                href="#estimate-form"
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
                <span>{isEs ? 'Solicitar Cotización Gratuita' : 'Request a Free Estimate'}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>

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
                <span className="font-semibold">{isEs ? 'Respuesta en 1 Hora Hábil' : '1-Hour Business Response'}</span>
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
                <span className="font-semibold">{isEs ? 'Soporte de Emergencia 24/7' : '24/7 Emergency Support'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: 2-COLUMN CONTACT DETAILS & ESTIMATE FORM ─── */}
      <section id="estimate-form" className="relative py-16 sm:py-24 bg-white border-b border-slate-100 overflow-hidden">
        {/* Subtle decorative grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Column: Contact Information & Details */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <div className="eyebrow mb-3">
                  <span className="eyebrow-line" />
                  <span>{isEs ? 'INFORMACIÓN Y DETALLES' : 'CONTACT INFORMATION & DETAILS'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight leading-tight mb-4">
                  {isEs ? 'Póngase en Contacto' : 'Get in Touch'}
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {isEs
                    ? 'Sabemos que su tiempo es valioso. Ya sea que necesite una propuesta detallada para la renovación de instalaciones o servicios de restauración de emergencia, nuestro equipo responde con rapidez y profesionalismo.'
                    : 'We know your time is valuable. Whether you need a detailed proposal for a facility refresh or emergency restoration services, our team responds quickly and professionally.'}
                </p>
              </div>

              {/* Direct Info Cards */}
              <div className="space-y-4">
                {/* Office Location */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#062F57]/30 transition-all flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <MapPin className="size-5 text-[#EF3340]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEs ? '📍 Ubicación de la Oficina' : '📍 Office Location'}
                    </h3>
                    <p className="text-base font-black text-[#062F57] mt-0.5">
                      3017 Grand Ave,
                    </p>
                    <p className="text-sm font-semibold text-slate-600">
                      Dallas, TX 75215
                    </p>
                    <a
                      href="https://maps.google.com/?q=3017+Grand+Ave,+Dallas,+TX+75215"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EF3340] hover:text-[#D8222F] mt-2 group"
                    >
                      <span>{isEs ? 'Abrir en Google Maps' : 'View on Google Maps'}</span>
                      <ExternalLink className="size-3 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  </div>
                </div>

                {/* Phone Call */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#062F57]/30 transition-all flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Phone className="size-5 text-[#EF3340]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEs ? '📞 Línea Telefónica Directa' : '📞 Direct Phone'}
                    </h3>
                    <a
                      href="tel:4693685885"
                      className="block text-lg font-black text-[#062F57] hover:text-[#EF3340] transition-colors mt-0.5"
                    >
                      (469) 368-5885
                    </a>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {isEs
                        ? 'Disponible para llamadas de Lunes a Viernes, 7:00 AM – 6:00 PM'
                        : 'Available for calls Monday – Friday, 7:00 AM – 6:00 PM'}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-2xs hover:border-[#062F57]/30 transition-all flex items-start gap-4">
                  <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center shrink-0 shadow-xs">
                    <Mail className="size-5 text-[#EF3340]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {isEs ? '✉️ Correo Electrónico' : '✉️ Email Proposal Desk'}
                    </h3>
                    <a
                      href="mailto:info@paintingdallas.com"
                      className="block text-base font-black text-[#062F57] hover:text-[#EF3340] transition-colors mt-0.5 truncate"
                    >
                      info@paintingdallas.com
                    </a>
                    <p className="text-xs text-slate-500 font-medium mt-1">
                      {isEs
                        ? 'Envíenos planos o especificaciones en cualquier momento'
                        : 'Send plans, RFPs, or scopes of work anytime'}
                    </p>
                  </div>
                </div>

                {/* Business Hours Card */}
                <div className="p-5 rounded-2xl bg-[#062F57] text-white shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#EF3340]/10 rounded-full blur-2xl pointer-events-none" />
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="size-5 text-[#EF3340]" />
                    <h3 className="text-sm font-black uppercase tracking-wider text-white">
                      {isEs ? '🕒 Horario de Atención' : '🕒 Business Hours'}
                    </h3>
                  </div>

                  <div className="space-y-2 text-xs sm:text-sm border-t border-white/10 pt-3">
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-slate-300 font-medium">
                        {isEs ? 'Lunes – Viernes:' : 'Monday – Friday:'}
                      </span>
                      <span className="font-bold text-white">7:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex items-center justify-between py-1 border-b border-white/5">
                      <span className="text-slate-300 font-medium">
                        {isEs ? 'Sábado:' : 'Saturday:'}
                      </span>
                      <span className="font-bold text-white">
                        {isEs ? 'Solo con Cita Previa' : 'By Appointment Only'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-slate-300 font-medium">
                        {isEs ? 'Domingo:' : 'Sunday:'}
                      </span>
                      <span className="font-bold text-slate-400">
                        {isEs ? 'Cerrado' : 'Closed'}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/15 flex items-start gap-2.5 bg-black/20 -mx-5 -mb-5 p-4 rounded-b-2xl">
                    <Zap className="size-4 text-[#EF3340] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-xs text-white uppercase tracking-wider">
                        {isEs ? 'Soporte de Emergencia 24/7:' : '24/7 Emergency Support:'}
                      </span>
                      <p className="text-[11px] text-slate-300 mt-0.5">
                        {isEs
                          ? 'Disponible para necesidades urgentes en instalaciones y restauración por desastres.'
                          : 'Available for urgent facility needs and disaster restoration.'}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Trust Badges */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldCheck className="size-4 text-emerald-600" />
                  <span className="text-xs font-black uppercase tracking-wider text-slate-800">
                    {isEs ? 'Tranquilidad Comercial Garantizada' : 'Commercial Compliance & Trust'}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#EF3340]" />
                    <span>{isEs ? 'Póliza $2M+ Responsabilidad' : '$2M+ General Liability'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#EF3340]" />
                    <span>{isEs ? 'Compensación de Trabajadores' : "Workers' Compensation"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#EF3340]" />
                    <span>{isEs ? 'Certificado OSHA y Seguridad' : 'OSHA Compliant Crews'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[#EF3340]" />
                    <span>{isEs ? 'Garantía Escrita 100%' : '100% Written Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Request a Free Estimate Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-10 relative overflow-hidden">
                <div className="h-1.5 w-full bg-gradient-to-r from-[#062F57] via-[#0B477D] to-[#EF3340] absolute top-0 left-0" />

                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider bg-[#062F57]/10 text-[#062F57] mb-3">
                    <CalendarDays className="size-3.5 text-[#EF3340]" />
                    <span>{isEs ? 'Presupuesto Comercial' : 'Fast Commercial Bid Request'}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#062F57] tracking-tight">
                    {isEs ? 'Solicitar una Cotización Gratuita' : 'Request a Free Estimate'}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    {isEs
                      ? 'Complete los detalles a continuación y le prepararemos un presupuesto detallado sin costo.'
                      : 'Fill in your project specifications below and our estimation team will prepare your proposal.'}
                  </p>
                </div>

                {formSubmitted ? (
                  <div className="p-8 sm:p-10 rounded-2xl bg-emerald-50 border border-emerald-200 text-center animate-in fade-in duration-300">
                    <div className="size-16 rounded-full bg-emerald-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-600/25">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h4 className="text-xl sm:text-2xl font-black text-emerald-950 mb-2">
                      {isEs ? '¡Solicitud Recibida con Éxito!' : 'Estimate Request Received!'}
                    </h4>
                    <p className="text-emerald-800 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
                      {isEs
                        ? 'Gracias por comunicarse con Painting Dallas. Un estimador comercial senior revisará sus especificaciones y se comunicará con usted dentro de 1 hora hábil.'
                        : 'Thank you for reaching out to Painting Dallas. A senior commercial estimator will review your project details and contact you within 1 business hour.'}
                    </p>
                    <div className="inline-flex flex-col sm:flex-row items-center gap-3">
                      <a
                        href="tel:4693685885"
                        className="inline-flex items-center gap-2 rounded-full bg-[#062F57] text-white px-6 py-3 text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0B477D] transition-colors"
                      >
                        <Phone className="size-3.5 text-[#EF3340]" />
                        <span>{isEs ? 'Llamada Directa (469) 368-5885' : 'Direct Call: (469) 368-5885'}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            fullName: '',
                            companyName: '',
                            email: '',
                            phone: '',
                            projectAddress: '',
                            propertyType: 'Corporate Office Building',
                            serviceNeeded: 'Commercial Interior Painting',
                            projectDetails: '',
                            referralSource: 'Google Search',
                            preferredContactMethod: 'phone',
                          });
                        }}
                        className="text-xs font-bold text-slate-600 hover:text-slate-900 underline underline-offset-4 cursor-pointer"
                      >
                        {isEs ? 'Enviar otra solicitud' : 'Submit another request'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-5">
                    {/* Row 1: Full Name & Company */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Nombre Completo *' : 'Full Name *'}
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
                          {isEs ? 'Empresa / Nombre de Propiedad' : 'Company / Property Name'}
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

                    {/* Row 2: Email & Phone */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Correo Electrónico *' : 'Email Address *'}
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
                          {isEs ? 'Número de Teléfono *' : 'Phone Number *'}
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

                    {/* Row 3: Project Address & City */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {isEs ? 'Dirección o Ciudad del Proyecto *' : 'Project Address / City *'}
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

                    {/* Row 4: Property Type & Service Needed Dropdowns */}
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Tipo de Propiedad *' : 'Property Type *'}
                        </label>
                        <select
                          name="propertyType"
                          value={formData.propertyType}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Corporate Office Building">
                            {isEs ? 'Edificio de Oficinas Corporativas' : 'Corporate Office Building'}
                          </option>
                          <option value="Industrial / Warehouse">
                            {isEs ? 'Nave Industrial / Almacén' : 'Industrial / Warehouse Facility'}
                          </option>
                          <option value="Healthcare / Medical">
                            {isEs ? 'Clínica / Centro Médico' : 'Healthcare & Medical Center'}
                          </option>
                          <option value="Multi-Family / HOA">
                            {isEs ? 'Multifamiliar / Comunidad HOA' : 'Multi-Family / HOA Community'}
                          </option>
                          <option value="Retail / Shopping Center">
                            {isEs ? 'Centro Comercial / Retail' : 'Retail / Shopping Center'}
                          </option>
                          <option value="Hospitality / Restaurant">
                            {isEs ? 'Hotel / Restaurante' : 'Hospitality / Restaurant'}
                          </option>
                          <option value="School / Institution">
                            {isEs ? 'Escuela / Instalación Educativa' : 'School / Educational Institution'}
                          </option>
                          <option value="Other Commercial">
                            {isEs ? 'Otro Espacio Comercial' : 'Other Commercial Property'}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Servicio Requerido *' : 'Service Needed *'}
                        </label>
                        <select
                          name="serviceNeeded"
                          value={formData.serviceNeeded}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all cursor-pointer"
                        >
                          <option value="Commercial Interior Painting">
                            {isEs ? 'Pintura Interior Comercial' : 'Commercial Interior Painting'}
                          </option>
                          <option value="Commercial Exterior Painting">
                            {isEs ? 'Pintura Exterior Comercial' : 'Commercial Exterior Painting'}
                          </option>
                          <option value="Epoxy & Concrete Coatings">
                            {isEs ? 'Recubrimientos Epóxicos y Concreto' : 'Epoxy & Concrete Floor Coatings'}
                          </option>
                          <option value="Industrial & Steel Coatings">
                            {isEs ? 'Recubrimientos de Acero Industrial' : 'Industrial & Steel Protective Coatings'}
                          </option>
                          <option value="Pressure Washing & Surface Prep">
                            {isEs ? 'Lavado a Presión y Prep Superficial' : 'Commercial Pressure Washing'}
                          </option>
                          <option value="Waterproofing & Sealants">
                            {isEs ? 'Impermeabilización y Selladores' : 'Waterproofing & Joint Sealants'}
                          </option>
                          <option value="Staining & Wood Finishing">
                            {isEs ? 'Barnizado y Acabados en Madera' : 'Wood Staining & Architectural Finishing'}
                          </option>
                          <option value="Drywall & Acoustic Repair">
                            {isEs ? 'Reparación de Paneles de Yeso' : 'Commercial Drywall & Acoustic Repair'}
                          </option>
                          <option value="Complete Restoration">
                            {isEs ? 'Restauración Completa de Edificio' : 'Complete Building Restoration'}
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Row 5: Project Details Textarea */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        {isEs
                          ? 'Detalles del Proyecto / Alcance del Trabajo'
                          : 'Project Details / Scope of Work'}
                      </label>
                      <textarea
                        name="projectDetails"
                        rows={4}
                        value={formData.projectDetails}
                        onChange={handleInputChange}
                        placeholder={
                          isEs
                            ? 'Describa metros cuadrados aproximados, requisitos de horario (nocturno/fines de semana), fecha límite y cualquier especificación especial...'
                            : 'Describe estimated square footage, scheduling constraints (night/weekend), deadline, and special specifications...'
                        }
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-slate-50/60 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#062F57] focus:border-transparent transition-all resize-none"
                      />
                    </div>

                    {/* Row 6: Referral Source & Preferred Contact Method */}
                    <div className="grid sm:grid-cols-2 gap-4 pt-1">
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
                          <option value="Google Search">
                            {isEs ? 'Búsqueda en Google' : 'Google Search'}
                          </option>
                          <option value="Referral / Colleague">
                            {isEs ? 'Recomendación de Colega / Socio' : 'Referral / Colleague'}
                          </option>
                          <option value="Job Site Signage">
                            {isEs ? 'Rótulo en Obra / Señalización' : 'Job Site Signage'}
                          </option>
                          <option value="LinkedIn / Social Media">
                            {isEs ? 'LinkedIn / Redes Sociales' : 'LinkedIn / Social Media'}
                          </option>
                          <option value="Returning Client">
                            {isEs ? 'Cliente Recurrente' : 'Returning Client'}
                          </option>
                          <option value="Other">
                            {isEs ? 'Otro Medio' : 'Other'}
                          </option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          {isEs ? 'Método de Contacto Preferido' : 'Preferred Contact Method'}
                        </label>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            { id: 'phone', label: isEs ? 'Teléfono' : 'Phone' },
                            { id: 'email', label: isEs ? 'Correo' : 'Email' },
                            { id: 'text', label: isEs ? 'Mensaje' : 'Text' },
                          ].map((item) => (
                            <button
                              key={item.id}
                              type="button"
                              onClick={() => handleMethodChange(item.id)}
                              className={`py-3 px-2 text-xs font-bold uppercase tracking-wider rounded-xl border transition-all text-center cursor-pointer ${
                                formData.preferredContactMethod === item.id
                                  ? 'bg-[#062F57] text-white border-[#062F57] shadow-xs'
                                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-3">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center justify-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white py-4 px-8 text-sm font-black uppercase tracking-wider shadow-[0_12px_24px_-6px_rgba(239,51,64,0.45)] hover:shadow-[0_16px_28px_-6px_rgba(239,51,64,0.55)] transition-all duration-200 active:scale-[0.99] disabled:opacity-70 cursor-pointer"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="size-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>{isEs ? 'Enviando Solicitud...' : 'Submitting Request...'}</span>
                          </>
                        ) : (
                          <>
                            <Send className="size-4" />
                            <span>{isEs ? 'Enviar Solicitud de Cotización' : 'Submit Request / Get Free Estimate'}</span>
                          </>
                        )}
                      </button>

                      {/* Privacy & Confidentiality Reassurance */}
                      <p className="text-[11px] text-slate-500 text-center mt-3 flex items-center justify-center gap-1.5">
                        <Shield className="size-3.5 text-slate-400 shrink-0" />
                        <span>
                          {isEs
                            ? 'Respetamos su privacidad. Su información se mantiene estrictamente confidencial y nunca será compartida.'
                            : 'We respect your privacy. Your information is kept strictly confidential and will never be shared.'}
                        </span>
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT HAPPENS AFTER YOU REACH OUT? (ROADMAP) ─── */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/80 relative overflow-hidden">
        <div className="site-shell relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center mb-3">
              <span className="eyebrow-line" />
              <span>{isEs ? '¿POR QUÉ CONTACTAR A PAINTING DALLAS?' : 'WHY CONTACT PAINTING DALLAS?'}</span>
              <span className="eyebrow-line" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0F172A] tracking-tight">
              {isEs ? '¿Qué Sucede Después de Contactarnos?' : 'What Happens After You Reach Out?'}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3 leading-relaxed">
              {isEs
                ? 'Un proceso transparente, predecible y diseñado para minimizar su esfuerzo y garantizar resultados impecables.'
                : 'A transparent, predictable commercial onboarding process designed to protect your time and ensure flawless execution.'}
            </p>
          </div>

          {/* 5-Step Roadmap Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {roadmapSteps.map((step, idx) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div className="h-1 w-12 bg-gradient-to-r from-[#062F57] to-[#EF3340] rounded-full mb-4" />

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl sm:text-3xl font-black text-[#062F57]/20 group-hover:text-[#062F57]/40 transition-colors font-mono">
                      {step.step}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider bg-slate-100 text-slate-600">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-black text-[#062F57] mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-[#EF3340]">
                  <CheckCircle2 className="size-3.5" />
                  <span>{isEs ? 'Compromiso Cumplido' : 'Guaranteed Standard'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: SERVICE AREAS (PROUDLY SERVING DFW METROPLEX) ─── */}
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
                ? 'Desde nuestra ubicación central en Dallas, Painting Dallas atiende con orgullo a clientes comerciales dentro de un radio de 50 millas en las principales áreas metropolitanas.'
                : 'From our central Dallas location, Painting Dallas proudly serves commercial clients within a 50-mile radius across the greater Dallas-Fort Worth metro area.'}
            </p>
          </div>

          {/* 4 Counties Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceCounties.map((item) => (
              <div
                key={item.county}
                className="rounded-2xl p-6 bg-slate-50 border border-slate-200 hover:border-[#062F57]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-[#062F57]/10 text-[#062F57] mb-3">
                    <MapPin className="size-3 text-[#EF3340]" />
                    <span>{isEs ? item.hubEs : item.hub}</span>
                  </div>

                  <h3 className="text-lg font-black text-[#062F57] mb-4">
                    {isEs ? item.countyEs : item.county}
                  </h3>

                  <div className="flex flex-wrap gap-1.5">
                    {item.cities.map((city) => (
                      <span
                        key={city}
                        className="inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-slate-700 shadow-2xs"
                      >
                        {city}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-slate-500">
                  <span>{isEs ? 'Cobertura Total' : 'Full Commercial Coverage'}</span>
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>

          {/* Outside Radius Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm font-semibold text-slate-700">
              {isEs
                ? '¿Necesita servicio fuera de este radio de 50 millas? Comuníquese con nosotros directamente para discutir proyectos comerciales regionales en Texas.'
                : 'Need service outside this 50-mile radius? Contact us directly to discuss regional commercial projects across Texas.'}
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

      {/* ── SECTION 5: EMERGENCY & AFTER-HOURS RESTORATION CALLOUT ─── */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-[#062F57] via-[#041E38] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF3340]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#062F57]/40 rounded-full blur-3xl pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto bg-white/5 border border-white/15 rounded-3xl p-8 sm:p-12 backdrop-blur-xl shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Emergency Icon */}
              <div className="size-20 sm:size-24 rounded-3xl bg-[#EF3340] text-white flex items-center justify-center shrink-0 shadow-[0_12px_28px_rgba(239,51,64,0.45)]">
                <AlertTriangle className="size-10 sm:size-12 animate-pulse" />
              </div>

              {/* Emergency Text */}
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-white/15 text-[#EF3340] mb-3 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-[#EF3340] animate-ping" />
                  <span>{isEs ? 'URGENCIA COMERCIAL 24/7' : '24/7 PRIORITY RESPONSE'}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
                  {isEs ? '¿Necesidades Urgentes de Restauración?' : 'Urgent Restoration Needs?'}
                </h2>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Las instalaciones comerciales enfrentan crisis inesperadas: desde fugas de agua y daños por tormentas hasta plazos críticos de inspección comercial. Painting Dallas ofrece respuesta de emergencia 24/7 y pintura de respuesta rápida.'
                    : 'Commercial facilities face unexpected crises—from catastrophic water leaks and storm damage to critical inspection deadlines. Painting Dallas provides 24/7 emergency response and rapid turnaround painting services.'}
                </p>

                <p className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3.5 py-2 rounded-xl inline-block">
                  {isEs
                    ? '⚠️ Para emergencias activas o fechas límite críticas, no use el formulario. Llame inmediatamente a nuestra línea prioritaria:'
                    : '⚠️ For active emergencies or critical deadline requests, do not use the form. Call our priority response line immediately:'}
                </p>
              </div>

              {/* Direct Urgent Callout CTA */}
              <div className="shrink-0 flex flex-col items-center">
                <a
                  href="tel:4693685885"
                  className="inline-flex items-center gap-3 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.6)] transition-all hover:scale-105 active:scale-95"
                >
                  <Phone className="size-5" />
                  <span>(469) 368-5885</span>
                </a>
                <span className="text-[11px] text-slate-300 font-bold uppercase tracking-wider mt-2">
                  {isEs ? 'Atención Inmediata 24/7' : '24/7 Live Commercial Dispatch'}
                </span>
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
