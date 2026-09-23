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
  Check,
  Zap,
  HelpCircle,
  FileText,
  AlertCircle,
  Layers,
  Wrench,
  ThumbsUp,
  Paintbrush,
  Factory,
  Droplets,
  HeartPulse,
  ShoppingBag,
  School,
  Landmark,
  Users,
} from 'lucide-react';

export default function CommercialInteriorPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // State for FAQ accordion
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Sector Solutions data
  const sectorSolutions = [
    {
      id: 'office',
      title: isEs ? 'Espacios Corporativos y de Oficinas' : 'Office & Corporate Spaces',
      desc: isEs
        ? 'Oficinas corporativas, suites ejecutivas, salas de conferencias, áreas de descanso y espacios comunes.'
        : 'Corporate offices, executive suites, conference rooms, breakrooms, and common areas.',
      icon: Building2,
      tag: isEs ? 'Cero Interrupción' : 'Zero Downtime',
      bullets: isEs
        ? [
            'Pinturas bajas en VOC para garantizar la salud y comodidad de los empleados',
            'Programación en fines de semana y turnos nocturnos sin interrupciones operativas',
            'Paredes de acento, esquemas de color corporativos e identidad de marca',
          ]
        : [
            'Low-VOC paints to ensure employee health and comfort',
            'Weekend and overnight scheduling for zero business disruption',
            'Accent walls, branded color schemes, and specialty finishes',
          ],
      perfectFor: isEs
        ? ['Sedes corporativas', 'Bufetes de abogados', 'Empresas tecnológicas', 'Espacios de coworking']
        : ['Corporate headquarters', 'Law firms', 'Tech companies', 'Co-working spaces'],
    },
    {
      id: 'medical',
      title: isEs ? 'Instalaciones Médicas y de Salud' : 'Medical & Healthcare Facilities',
      desc: isEs
        ? 'Hospitales, clínicas, consultorios dentales, farmacias y centros de atención de urgencias.'
        : 'Hospitals, clinics, dental practices, pharmacies, and urgent care centers.',
      icon: HeartPulse,
      tag: isEs ? 'Grado Higiénico' : 'Hygienic Grade',
      bullets: isEs
        ? [
            'Recubrimientos antimicrobianos e higiénicos resistentes a bacterias y moho',
            'Pinturas de bajo olor y cero VOC para proteger la calidad del aire interior',
            'Cumplimiento estricto de protocolos de sanitización hospitalaria',
            'Programación por fases para adaptarse a la atención continua de pacientes',
          ]
        : [
            'Antimicrobial and hygienic coatings that resist bacteria and mildew',
            'Low-odor, zero-VOC paints to maintain indoor air quality',
            'Strict compliance with healthcare sanitization protocols',
            'Phased scheduling to accommodate active patient care',
          ],
      perfectFor: isEs
        ? ['Consultorios médicos', 'Clínicas dentales', 'Centros ambulatorios', 'Residencias de ancianos']
        : ['Medical offices', 'Dental practices', 'Outpatient centers', 'Assisted living facilities'],
    },
    {
      id: 'retail',
      title: isEs ? 'Comercios, Tiendas y Restaurantes' : 'Retail & Restaurant Spaces',
      desc: isEs
        ? 'Boutiques, grandes tiendas, restaurantes, cafeterías y centros comerciales.'
        : 'Boutiques, big-box stores, restaurants, cafes, and shopping centers.',
      icon: ShoppingBag,
      tag: isEs ? 'Alta Resistencia' : 'High Traffic',
      bullets: isEs
        ? [
            'Recubrimientos de máxima durabilidad ante el tránsito constante de clientes',
            'Paletas de colores personalizadas alineadas con su imagen de marca',
            'Plazos de entrega rápidos para minimizar cualquier pérdida de ingresos',
            'Recubrimientos aprobados para contacto alimentario en áreas de cocina y preparación',
          ]
        : [
            'High-durability coatings that handle heavy customer foot traffic',
            'Custom color palettes to align with your brand identity',
            'Fast turnaround times to minimize lost revenue',
            'Food-safe coatings for kitchen and prep areas',
          ],
      perfectFor: isEs
        ? ['Locales comerciales', 'Restaurantes y bistrós', 'Centros comerciales', 'Concesionarios de autos']
        : ['Retail storefronts', 'Restaurants', 'Shopping centers', 'Auto dealerships'],
    },
    {
      id: 'industrial',
      title: isEs ? 'Instalaciones Industriales y Almacenes' : 'Industrial & Warehouse Facilities',
      desc: isEs
        ? 'Almacenes, centros de distribución, plantas de fabricación e instalaciones de almacenamiento.'
        : 'Warehouses, distribution centers, manufacturing plants, and storage facilities.',
      icon: Factory,
      tag: isEs ? 'Grado Industrial' : 'Industrial Spec',
      bullets: isEs
        ? [
            'Recubrimientos epóxicos para pisos y sistemas murales de alto rendimiento',
            'Franjas de seguridad vial, señalización de riesgos e indicadores direccionales OSHA',
            'Pintura y protección para acero estructural y sistemas de tuberías',
            'Acabados altamente resistentes a humedad y agentes químicos',
          ]
        : [
            'Epoxy floor coatings and high-performance wall systems',
            'Safety line striping, hazard markings, and directional indicators',
            'Structural steel and pipe coatings',
            'Moisture and chemical-resistant finishes',
          ],
      perfectFor: isEs
        ? ['Almacenes logísticos', 'Plantas de manufactura', 'Centros de distribución', 'Talleres automotrices']
        : ['Warehouses', 'Manufacturing plants', 'Distribution hubs', 'Automotive facilities'],
    },
    {
      id: 'multifamily',
      title: isEs ? 'Propiedades Multifamiliares y HOAs' : 'Multi-Family & HOA Properties',
      desc: isEs
        ? 'Complejos de apartamentos, condominios, casas club y áreas comunes de asociaciones de vecinos.'
        : 'Apartment complexes, condominiums, clubhouse facilities, and HOA common areas.',
      icon: Users,
      tag: isEs ? 'Rotación Rápida' : 'Quick Turns',
      bullets: isEs
        ? [
            'Servicio exprés de pintura para cambios rápidos de inquilinos (turnovers)',
            'Pintura de pasillos, vestíbulos principales y cajas de escaleras',
            'Acabados duraderos y fácilmente lavables para zonas de alto tránsito',
            'Coordinación directa y fluida con administradores de propiedades',
          ]
        : [
            'Turnaround painting for tenant move-outs/move-ins',
            'Hallway, lobby, and stairwell painting',
            'Durable, washable finishes for high-traffic common areas',
            'Coordinated scheduling with property managers',
          ],
      perfectFor: isEs
        ? ['Empresas de gestión de propiedades', 'Comunidades HOA', 'Condominios residenciales']
        : ['Property management companies', 'HOAs', 'Apartment communities'],
    },
    {
      id: 'education',
      title: isEs ? 'Centros Educativos e Institucionales' : 'Educational & Institutional Facilities',
      desc: isEs
        ? 'Escuelas, universidades, guarderías, bibliotecas y edificios gubernamentales.'
        : 'Schools, universities, daycares, libraries, and government buildings.',
      icon: School,
      tag: isEs ? 'Bajo VOC / Seguro' : 'Scuff-Resistant',
      bullets: isEs
        ? [
            'Pinturas resistentes a rozaduras y lavables para aulas y pasillos escolares',
            'Pinturas seguras para niños y con niveles mínimos de VOC',
            'Trabajos programados durante vacaciones escolares, fines de semana o noches',
            'Soluciones duraderas preparadas para el uso continuo diario',
          ]
        : [
            'Scuff-resistant, washable coatings for classrooms and hallways',
            'Low-VOC, child-safe paints',
            'Scheduled during school breaks, evenings, or weekends',
            'Durable solutions that handle heavy daily use',
          ],
      perfectFor: isEs
        ? ['Colegios privados y escuelas', 'Guarderías infantiles', 'Universidades', 'Edificios municipales']
        : ['Private schools', 'Daycare centers', 'Universities', 'Municipal buildings'],
    },
  ];

  // 7-step process
  const processSteps = [
    {
      step: '1',
      title: isEs ? '1. Consulta y Alcance del Proyecto' : '1. Consultation & Scope Definition',
      happens: isEs
        ? 'Analizamos sus objetivos, cronograma y restricciones operativas específicas.'
        : 'We discuss your goals, timeline, and operational constraints.',
      youGet: isEs ? 'Alineación clara del proyecto' : 'Clear project alignment',
    },
    {
      step: '2',
      title: isEs ? '2. Evaluación Técnica en el Sitio' : '2. On-Site Assessment',
      happens: isEs
        ? 'Inspección detallada de las instalaciones, mediciones láser y evaluación de superficies.'
        : 'Detailed property inspection, laser measurements, and surface evaluation.',
      youGet: isEs ? 'Propuesta precisa y transparente' : 'Accurate, transparent proposal',
    },
    {
      step: '3',
      title: isEs ? '3. Propuesta Detallada' : '3. Detailed Proposal',
      happens: isEs
        ? 'Cotización desglosada con materiales, mano de obra, preparación y cronograma claramente definidos.'
        : 'Itemized quote with materials, labor, prep work, and timeline clearly defined.',
      youGet: isEs ? 'Sin cargos ocultos, precios fijos' : 'No hidden fees, fixed pricing',
    },
    {
      step: '4',
      title: isEs ? '4. Preparación y Protección' : '4. Preparation & Protection',
      happens: isEs
        ? 'Protección de pisos, encintado de muebles, reparación de tablaroca (drywall), calafateo e imprimación.'
        : 'Floor covering, furniture masking, drywall repair, caulking, and priming.',
      youGet: isEs ? 'Superficies impecables listas para pintar' : 'Pristine surface ready for paint',
    },
    {
      step: '5',
      title: isEs ? '5. Aplicación de Precisión' : '5. Precision Application',
      happens: isEs
        ? 'Aplicación profesional con pinturas y recubrimientos comerciales de la más alta especificación.'
        : 'Professional application using premium commercial-grade paints and coatings.',
      youGet: isEs ? 'Acabado uniforme e impecable' : 'Flawless, uniform finish',
    },
    {
      step: '6',
      title: isEs ? '6. Recorrido Final de Inspección' : '6. Final Walkthrough',
      happens: isEs
        ? 'Inspección conjunta con su gerente de proyecto dedicado para asegurar total satisfacción.'
        : 'Joint inspection with your dedicated project manager to ensure complete satisfaction.',
      youGet: isEs ? 'Resolución total de lista de detalles (punch-list)' : 'Punch-list resolution',
    },
    {
      step: '7',
      title: isEs ? '7. Aprobación y Entrega de Garantía' : '7. Sign-Off & Warranty',
      happens: isEs
        ? 'Aprobación final del cliente y entrega formal de su certificado de garantía por escrito de 5 años.'
        : 'Final approval and delivery of your 5-year workmanship warranty.',
      youGet: isEs ? 'Tranquilidad total garantizada' : 'Peace of mind guaranteed',
    },
  ];

  // The Painting Dallas Advantage (7 Points)
  const advantageList = [
    {
      title: isEs ? 'Mínima Interrupción Operativa' : 'Minimal Disruption',
      desc: isEs
        ? 'Trabajamos en turnos de noche, fines de semana y etapas programadas para que su negocio nunca se detenga.'
        : 'We work nights, weekends, and phased schedules so your business never misses a beat.',
      icon: Clock,
      badge: isEs ? 'Horarios Flexibles' : 'Night / Weekend Shifts',
    },
    {
      title: isEs ? 'Cuadrillas con Verificación de Antecedentes' : 'Background-Checked Crews',
      desc: isEs
        ? 'Todos nuestros pintores están verificados, uniformados, asegurados y rigurosamente capacitados.'
        : 'All painters are vetted, uniformed, and professionally trained.',
      icon: ShieldCheck,
      badge: isEs ? '100% Verificados' : 'Vetted Professionals',
    },
    {
      title: isEs ? 'Gerente de Proyecto Dedicado' : 'Dedicated Project Manager',
      desc: isEs
        ? 'Un solo punto de contacto que le mantiene informado en cada etapa con informes diarios claros.'
        : 'A single point of contact who keeps you informed every step of the way.',
      icon: Users,
      badge: isEs ? 'Contacto Directo' : 'Single Point of Contact',
    },
    {
      title: isEs ? 'Materiales Comerciales Premium' : 'Premium Materials',
      desc: isEs
        ? 'Utilizamos únicamente pinturas comerciales de fabricantes líderes reconocidos: Sherwin-Williams, Benjamin Moore y PPG.'
        : 'We use only commercial-grade paints from trusted manufacturers (Sherwin-Williams, Benjamin Moore, PPG).',
      icon: Paintbrush,
      badge: isEs ? 'Marcas Líderes' : 'Sherwin / PPG / Ben Moore',
    },
    {
      title: isEs ? 'Sitios de Trabajo Limpios y Protegidos' : 'Clean Job Sites',
      desc: isEs
        ? 'Limpieza diaria, contención hermética de polvo y equipos con filtros HEPA para proteger sus instalaciones.'
        : 'Daily cleanup, dust containment, and HEPA-filtered equipment to protect your space.',
      icon: Sparkles,
      badge: isEs ? 'Filtros HEPA' : 'HEPA Dust Control',
    },
    {
      title: isEs ? 'Garantía de Mano de Obra de 5 Años' : '5-Year Workmanship Warranty',
      desc: isEs
        ? 'Garantía escrita integral en todos nuestros proyectos de pintura interior comercial.'
        : 'Written guarantee on all commercial interior projects.',
      icon: Award,
      badge: isEs ? 'Por Escrito' : 'Written Protection',
    },
    {
      title: isEs ? 'Con Licencia, Fianza y Seguro ($2M+)' : 'Licensed & Insured',
      desc: isEs
        ? 'Totalmente autorizados, afianzados y con amplia póliza de responsabilidad civil comercial y compensación de trabajadores.'
        : 'Fully licensed, bonded, and carrying comprehensive liability and workers\' comp coverage.',
      icon: Shield,
      badge: isEs ? 'Cobertura Total' : '$2M+ Liability Policy',
    },
  ];

  // Industries We Serve
  const industries = [
    {
      industry: isEs ? 'Oficinas Corporativas y Comerciales' : 'Corporate & Commercial Offices',
      projects: isEs
        ? 'Oficinas privadas, pasillos, vestíbulos principales, salas de conferencias, áreas de descanso.'
        : 'Offices, hallways, lobbies, conference rooms, breakrooms',
      icon: Building2,
    },
    {
      industry: isEs ? 'Instalaciones Médicas y de Salud' : 'Healthcare & Medical Facilities',
      projects: isEs
        ? 'Clínicas, habitaciones de pacientes, consultorios dentales, salas de examen y salas de espera.'
        : 'Clinics, patient rooms, dental offices, exam rooms, waiting areas',
      icon: HeartPulse,
    },
    {
      industry: isEs ? 'Comercio Minorista y Hospitalidad' : 'Retail & Hospitality',
      projects: isEs
        ? 'Fachadas interiores de tiendas, restaurantes, hoteles, bares y salones de eventos.'
        : 'Storefronts, restaurants, hotels, bars, event venues',
      icon: ShoppingBag,
    },
    {
      industry: isEs ? 'Industria y Manufactura' : 'Industrial & Manufacturing',
      projects: isEs
        ? 'Naves industriales, pisos de producción, áreas comunes y demarcación de seguridad vial.'
        : 'Warehouses, production floors, break areas, safety striping',
      icon: Factory,
    },
    {
      industry: isEs ? 'Comunidades Multifamiliares y Residenciales' : 'Multi-Family & Residential Communities',
      projects: isEs
        ? 'Áreas comunes de condominios, casas club, renovación rápida de unidades (turnovers) y pasillos.'
        : 'Apartment common areas, clubhouses, unit turnovers, hallways',
      icon: Users,
    },
    {
      industry: isEs ? 'Educación e Institucional' : 'Education & Institutional',
      projects: isEs
        ? 'Escuelas, guarderías infantiles, auditorios universitarios y edificios administrativos.'
        : 'Schools, daycares, universities, administrative buildings',
      icon: School,
    },
    {
      industry: isEs ? 'Gobierno y Municipalidades' : 'Government & Municipal',
      projects: isEs
        ? 'Oficinas municipales, estaciones de policía, bibliotecas públicas y cuarteles de bomberos.'
        : 'City offices, police stations, public libraries, fire stations',
      icon: Landmark,
    },
  ];

  // 5 Counties
  const serviceCounties = [
    {
      county: 'Dallas County',
      countyEs: 'Condado de Dallas',
      cities: 'Dallas, Irving, Garland, Mesquite, Richardson, Grand Prairie, Carrollton',
      hub: 'HQ Location',
    },
    {
      county: 'Collin County',
      countyEs: 'Condado de Collin',
      cities: 'Plano, Frisco, McKinney, Allen, Wylie, Prosper',
      hub: 'North DFW Hub',
    },
    {
      county: 'Denton County',
      countyEs: 'Condado de Denton',
      cities: 'Denton, Lewisville, Flower Mound, Little Elm, The Colony',
      hub: 'Northwest Corridor',
    },
    {
      county: 'Tarrant County',
      countyEs: 'Condado de Tarrant',
      cities: 'Fort Worth, Arlington, Grapevine, Southlake, Colleyville, Keller',
      hub: 'Fort Worth & Mid-Cities',
    },
    {
      county: 'Rockwall County',
      countyEs: 'Condado de Rockwall',
      cities: 'Rockwall, Royse City, Heath, Fate',
      hub: 'East DFW Coverage',
    },
  ];

  // 7 FAQs
  const faqs = [
    {
      q: isEs
        ? '¿Cuánto tiempo tomará mi proyecto de pintura interior comercial?'
        : 'How long will my interior painting project take?',
      a: isEs
        ? 'Los plazos de entrega varían según los metros cuadrados, el estado de las superficies y la complejidad del proyecto. La mayoría de los proyectos de oficinas se completan dentro de 2 a 5 días. Le proporcionamos un cronograma detallado por escrito en su propuesta formal y trabajamos por fases para minimizar la interrupción de sus operaciones comerciales.'
        : 'Project timelines vary based on square footage, surface preparation, and complexity. Most office projects are completed within 2–5 days. We provide a detailed schedule in your proposal and work to minimize disruption to your operations.',
    },
    {
      q: isEs
        ? '¿Pueden pintar fuera del horario comercial o durante los fines de semana?'
        : 'Can you paint after hours or on weekends?',
      a: isEs
        ? 'Absolutamente. Entendemos que muchas empresas no pueden permitirse tiempos de inactividad durante el día. Ofrecemos horarios flexibles, incluyendo turnos de noche, fines de semana y trabajos por secciones para adaptarnos completamente a sus necesidades operativas.'
        : 'Absolutely. We understand that many businesses cannot afford downtime. We offer flexible scheduling, including nights, weekends, and phased work to accommodate your needs.',
    },
    {
      q: isEs
        ? '¿Utilizan pinturas con bajo contenido de VOC o cero VOC?'
        : 'Do you use low-VOC or zero-VOC paints?',
      a: isEs
        ? 'Sí. Ofrecemos una amplia gama de opciones con bajo VOC y cero VOC que son completamente seguras para los empleados, clientes, inquilinos y el medio ambiente. Esto es especialmente crucial para entornos de atención médica, guarderías y edificios de oficinas activos.'
        : 'Yes. We offer a range of low-VOC and zero-VOC options that are safer for employees, tenants, and the environment. This is especially important for healthcare and educational facilities.',
    },
    {
      q: isEs
        ? '¿Se encargan de la reparación de tablaroca (drywall) y la preparación previa?'
        : 'Do you handle drywall repair and preparation?',
      a: isEs
        ? 'Sí. La preparación meticulosa es la clave absoluta para un acabado duradero y de nivel comercial. Reparamos tablaroca, parchamos agujeros y grietas, calafateamos juntas, lijamos minuciosamente e imprimamos según sea necesario antes de aplicar cualquier pintura.'
        : 'Yes. Proper preparation is the key to a long-lasting finish. We repair drywall, patch holes, caulk gaps, sand surfaces, and prime as needed before painting.',
    },
    {
      q: isEs
        ? '¿Sus cuadrillas de pintores tienen antecedentes verificados?'
        : 'Are your crews background-checked?',
      a: isEs
        ? 'Sí. Todos nuestros pintores cuentan con verificación completa de antecedentes penales, están debidamente uniformados y cuentan con capacitación profesional exhaustiva. Tratamos sus instalaciones y activos con el máximo respeto y confidencialidad.'
        : 'Yes. All of our painters are background-checked, uniformed, and professionally trained. We treat your property with the utmost respect.',
    },
    {
      q: isEs
        ? '¿Qué tipo de garantía ofrecen en trabajos de pintura interior?'
        : 'What type of warranty do you offer?',
      a: isEs
        ? 'Ofrecemos una garantía formal por escrito de 5 años en mano de obra para todos los proyectos de pintura interior comercial. Si surge algún desperfecto derivado de nuestra mano de obra, acudiremos de inmediato para corregirlo sin costo alguno.'
        : 'We offer a 5-year written workmanship warranty on all commercial interior painting projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: isEs
        ? '¿Proporcionan certificados de seguro (COI) para administración del edificio?'
        : 'Do you provide certificates of insurance?',
      a: isEs
        ? 'Sí. Contamos con licencias oficiales, afianzamiento y seguros de responsabilidad civil general y compensación laboral de primer nivel. Podemos emitir certificados de seguro específicos a nombre de su empresa o administración en un plazo de pocas horas.'
        : 'Yes. We are fully licensed, bonded, and insured. We can provide certificates of insurance upon request.',
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
                {isEs ? 'Pintura Comercial de Interiores' : 'Commercial Interior Painting'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • COMMERCIAL SERVICES</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Pintura Comercial de Interiores Profesional en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Transforme sus Instalaciones con Mínima Interrupción - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Commercial Interior Painting in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Transform Your Space with Minimal Disruption - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Transforme su oficina, espacio comercial o clínica médica con pintura de interiores de alta precisión. Mínima interrupción. Máximo impacto. Respaldado por una garantía de mano de obra de 5 años.'
                : 'Transform your office, retail, or medical facility with precision interior painting. Minimal disruption. Maximum impact. Backed by a 5-year workmanship warranty.'}
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
              <span className="font-bold text-xs sm:text-sm text-emerald-400">
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
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita de 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Turnos Nocturnos y Fines de Semana' : 'Zero Downtime Scheduling'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Pinturas Bajo / Cero VOC' : 'Low-VOC / Zero-VOC Options'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Seguro Comercial ($2M+)' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY INTERIOR PAINTING MATTERS ("More Than Just A Fresh Coat of Paint") ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5" />
              <span>{isEs ? 'VALOR E IMPACTO EMPRESARIAL' : 'VALUE & IMPACT FOR YOUR BUSINESS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Más que una Simple Capa de Pintura' : 'More Than Just A Fresh Coat of Paint'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'El ambiente interior de su empresa dice mucho de usted. Influye directamente en la moral de los empleados, la percepción de los clientes y el valor patrimonial de su propiedad comercial. Pero para propietarios y administradores de instalaciones, la pintura interior plantea desafíos operativos únicos:'
                : 'Your interior environment speaks volumes. It impacts employee morale, customer perception, and the overall value of your commercial property. But for business owners and facility managers, interior painting presents unique challenges:'}
            </p>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/commercial-interior.jpg"
                  alt={isEs ? "Pintura comercial de interiores en Dallas" : "Commercial interior painting in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Acabado de Calidad Comercial' : 'Commercial Precision Finish'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Key Challenge Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {/* Challenge 1 */}
            <div className="relative group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-5 group-hover:bg-[#EF3340] transition-colors shadow-md">
                  <Clock className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEs ? 'Tiempo de Inactividad' : 'Operational Downtime'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'No puede permitirse cerrar su negocio durante días enteros perdiendo ingresos valiosos.'
                    : "You can't shut down your business for days on end losing valuable operational revenue."}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-bold text-[#EF3340] flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                <span>{isEs ? 'Solución: Turnos nocturnos y fines de semana' : 'Solution: Nights & Weekend Crews'}</span>
              </div>
            </div>

            {/* Challenge 2 */}
            <div className="relative group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-5 group-hover:bg-[#EF3340] transition-colors shadow-md">
                  <Users className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEs ? 'Molestias a Empleados e Inquilinos' : 'Tenant & Employee Disruption'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'El ruido excesivo, los olores a químicos y el polvo deben gestionarse con estricto control.'
                    : 'Noise, harsh fumes, and foot traffic must be carefully managed to maintain productivity.'}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-bold text-[#EF3340] flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                <span>{isEs ? 'Solución: Pinturas bajo VOC y filtros HEPA' : 'Solution: Zero-VOC & HEPA Air Scrubbing'}</span>
              </div>
            </div>

            {/* Challenge 3 */}
            <div className="relative group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-5 group-hover:bg-[#EF3340] transition-colors shadow-md">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEs ? 'Normativas y Cumplimiento' : 'Code Compliance'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Clínicas y restaurantes requieren recubrimientos especializados y cumplimiento higiénico estricto.'
                    : 'Facilities like healthcare and food service require specialized coatings and strict health standards.'}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-bold text-[#EF3340] flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                <span>{isEs ? 'Solución: Acabados antimicrobianos certificados' : 'Solution: Certified Antimicrobial Finishes'}</span>
              </div>
            </div>

            {/* Challenge 4 */}
            <div className="relative group bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-xl flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-5 group-hover:bg-[#EF3340] transition-colors shadow-md">
                  <Award className="size-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {isEs ? 'Durabilidad Comercial' : 'High-Traffic Durability'}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Las zonas comerciales sufren alto tránsito y requieren acabados que resistan el desgaste diario.'
                    : 'Commercial spaces experience high traffic, requiring coatings that withstand daily wear and tear.'}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-200/80 text-xs font-bold text-[#EF3340] flex items-center gap-1.5">
                <CheckCircle2 className="size-4" />
                <span>{isEs ? 'Solución: Epóxicos y esmaltes industriales lavables' : 'Solution: Commercial Scrub-Rated Enamels'}</span>
              </div>
            </div>
          </div>

          {/* Value Callout Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#020F1D] via-[#062F57] to-[#020F1D] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-[#EF3340]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-2">
                  <Check className="size-3.5" />
                  <span>{isEs ? 'LA PROMESA DE PAINTING DALLAS' : 'THE PAINTING DALLAS COMMITMENT'}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                  {isEs
                    ? 'En Painting Dallas no solo pintamos paredes. Entregamos soluciones interiores personalizadas que resuelven estos desafíos directamente, brindando acabados impecables en los horarios que mejor se adapten a su negocio.'
                    : 'At Painting Dallas, we don’t just paint walls. We deliver customized interior solutions that address these challenges head-on—delivering flawless results on your schedule.'}
                </p>
              </div>
              <Link
                href="/free-estimate"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105"
              >
                <span>{isEs ? 'Cotizar Proyecto' : 'Get Started'}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: COMPREHENSIVE INTERIOR SOLUTIONS (6 Specialized Sectors) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'SOLUCIONES A LA MEDIDA' : 'TAILORED COMMERCIAL SOLUTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Soluciones a la Medida para Cada Espacio Comercial' : 'Tailored Solutions for Every Commercial Space'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Cada propiedad comercial tiene exigencias únicas. Proporcionamos servicios de pintura interior especializados para múltiples sectores en Dallas-Fort Worth:'
                : 'Every commercial property has unique demands. We provide specialized interior painting services across multiple sectors:'}
            </p>
          </div>

          {/* 6 Specialized Sector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {sectorSolutions.map((sector) => {
              const SectorIcon = sector.icon;
              return (
                <div
                  key={sector.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#EF3340]/40 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="size-14 rounded-2xl bg-[#062F57]/10 text-[#062F57] flex items-center justify-center group-hover:bg-[#EF3340] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <SectorIcon className="size-7" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {sector.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#062F57] transition-colors">
                      {sector.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {sector.desc}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                      {sector.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <CheckCircle2 className="size-4 text-[#EF3340] shrink-0 mt-0.5" />
                          <span className="leading-snug">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Perfect For Section */}
                  <div className="pt-5 border-t border-slate-100 mt-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      {isEs ? 'Ideal para:' : 'Perfect for:'}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.perfectFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md border border-slate-200/60"
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

      {/* ── SECTION 4: OUR PROVEN PROCESS (7 Steps from Consultation to Walkthrough) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <FileText className="size-3.5" />
              <span>{isEs ? 'EJECUCIÓN METÓDICA Y TRANSPARENTE' : 'OUR PROVEN 7-STEP PROCESS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'De la Consulta al Recorrido Final' : 'From Consultation to Final Walkthrough'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Un proceso estructurado y transparente diseñado para garantizar calidad superior, control de plazos y cero sorpresas.'
                : 'A transparent, structured process engineered to guarantee exceptional quality, firm timelines, and zero surprises.'}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020F1D] text-white text-xs uppercase tracking-wider font-black">
                  <th className="py-4 px-6 w-20 text-center">{isEs ? 'Paso' : 'Step'}</th>
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Fase del Proceso' : 'Process Phase'}</th>
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Lo Que Ocurre' : 'What Happens'}</th>
                  <th className="py-4 px-6">{isEs ? 'Lo Que Usted Recibe' : 'What You Get'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {processSteps.map((step, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 text-center">
                      <span className="inline-flex size-8 items-center justify-center rounded-full bg-[#EF3340]/10 text-[#EF3340] font-black text-xs">
                        {step.step}
                      </span>
                    </td>
                    <td className="py-4 px-6 font-bold text-slate-900">{step.title}</td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">{step.happens}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-xs">
                        <Check className="size-3.5 text-emerald-600" />
                        <span>{step.youGet}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile / Tablet Cards View */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden max-w-3xl mx-auto">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="size-7 rounded-full bg-[#EF3340] text-white flex items-center justify-center font-black text-xs">
                      {step.step}
                    </span>
                    <h3 className="font-bold text-slate-900 text-base">{step.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.happens}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/50">
                  <Check className="size-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>{isEs ? 'Resultado:' : 'What You Get:'}</strong> {step.youGet}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHAT SETS PAINTING DALLAS APART ("The Painting Dallas Advantage") ─── */}
      <section className="py-20 bg-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,47,87,0.4)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,51,64,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
              <Shield className="size-3.5" />
              <span>{isEs ? 'LA VENTAJA COMPETITIVA' : 'THE PAINTING DALLAS ADVANTAGE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs ? '¿Por Qué Elegir Painting Dallas?' : 'What Sets Painting Dallas Apart?'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Construimos nuestra reputación sobre estándares intransigentes de puntualidad, seguridad, limpieza y comunicación constante.'
                : 'Built on uncompromising standards of scheduling discipline, background-checked crews, premium materials, and written warranties.'}
            </p>
          </div>

          {/* 7 Advantage Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantageList.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#EF3340]/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-xl bg-[#062F57] text-[#EF3340] flex items-center justify-center border border-white/10">
                        <AdvIcon className="size-6" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-300 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                        {adv.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">{adv.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="size-4 shrink-0" />
                    <span>{isEs ? 'Estándar Garantizado' : 'Standard On Every Job'}</span>
                  </div>
                </div>
              );
            })}

            {/* Extra CTA Box in the grid */}
            <div className="bg-gradient-to-br from-[#EF3340] to-[#B81825] rounded-2xl p-6 shadow-xl flex flex-col justify-between text-white border border-white/20">
              <div>
                <div className="size-12 rounded-xl bg-white/20 text-white flex items-center justify-center mb-4">
                  <Star className="size-6 fill-white text-white" />
                </div>
                <h3 className="text-lg font-black mb-2">
                  {isEs ? '¿Listo para Comprobar la Diferencia?' : 'Ready to Experience the Difference?'}
                </h3>
                <p className="text-white/90 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Permítanos presentarle una propuesta personalizada y detallada para su inmueble.'
                    : 'Get a clear, fixed quote tailored to your business schedule and specifications.'}
                </p>
              </div>
              <Link
                href="/free-estimate"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white text-slate-900 font-black text-xs uppercase tracking-wider py-3 px-4 hover:bg-slate-100 transition-colors shadow-md"
              >
                <span>{isEs ? 'Cotización en 24 Horas' : 'Get Your 24-Hr Bid'}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: INDUSTRIES WE SERVE ("Built for Dallas Businesses") ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Building className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'PORTAFOLIO DE INDUSTRIAS' : 'BUILT FOR DALLAS BUSINESSES'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Industrias que Atendemos' : 'Industries We Serve'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Conocemos los requisitos técnicos, de durabilidad y de seguridad propios de cada sector empresarial en Texas.'
                : 'Engineered for the exact technical, safety, and durability demands of North Texas commerce.'}
            </p>
          </div>

          {/* Clean Modern Industries Table */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-black border-b border-slate-200">
                  <th className="py-4 px-6 w-2/5">{isEs ? 'Sector / Industria' : 'Industry'}</th>
                  <th className="py-4 px-6">{isEs ? 'Proyectos Típicos de Pintura Interior' : 'Common Projects'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {industries.map((ind, idx) => {
                  const IndIcon = ind.icon;
                  return (
                    <tr
                      key={idx}
                      className="hover:bg-slate-50/80 transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-[#062F57]/10 text-[#062F57] flex items-center justify-center shrink-0">
                          <IndIcon className="size-4 text-[#EF3340]" />
                        </div>
                        <span>{ind.industry}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                        {ind.projects}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SERVICE AREAS (5 Counties & 50-Mile Radius) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <MapPin className="size-3.5" />
              <span>{isEs ? 'COBERTURA EN EL METROPLEX DFW' : 'SERVICE AREAS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Sirviendo a Todo el Gran Dallas-Fort Worth'
                : 'Serving the Greater Dallas-Fort Worth Metroplex'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Brindamos servicios de pintura comercial de interiores en los condados de Dallas, Collin, Denton, Tarrant y Rockwall:'
                : 'We provide commercial interior painting across Dallas, Collin, Denton, Tarrant, and Rockwall counties:'}
            </p>
          </div>

          {/* 5 County Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {serviceCounties.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-extrabold text-slate-900 text-lg">
                      {isEs ? item.countyEs : item.county}
                    </h3>
                    <span className="text-[11px] font-bold text-[#062F57] bg-[#062F57]/10 px-2.5 py-0.5 rounded-full">
                      {item.hub}
                    </span>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 font-medium">
                    {item.cities}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-200/80 flex items-center gap-1.5 text-xs font-bold text-[#EF3340]">
                  <CheckCircle2 className="size-3.5" />
                  <span>{isEs ? 'Cuadrillas Locales Disponibles' : 'Dispatched Daily'}</span>
                </div>
              </div>
            ))}

            {/* 50-Mile Radius Callout Card */}
            <div className="bg-gradient-to-br from-[#062F57] to-[#020F1D] text-white rounded-2xl p-6 border border-white/10 shadow-lg flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#EF3340] mb-2">
                  <MapPin className="size-4" />
                  <span>{isEs ? 'Radio de 50 Millas' : '50-Mile Radius Coverage'}</span>
                </div>
                <h3 className="font-extrabold text-white text-lg mb-2">
                  {isEs ? '¿No ve su ciudad en la lista?' : "Don't See Your City?"}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Atendemos propiedades comerciales en un radio de 50 millas alrededor del centro de Dallas. Contáctenos para confirmar disponibilidad inmediata.'
                    : 'We serve properties within a 50-mile radius of downtown Dallas. Contact us to confirm service availability for your property.'}
                </p>
              </div>
              <a
                href="tel:4693685885"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 transition-colors shadow-md"
              >
                <Phone className="size-3.5" />
                <span>{isEs ? 'Verificar con un Asesor' : 'Confirm With Estimator'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 8: COMMON QUESTIONS (Interactive FAQ Accordion) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="size-3.5" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'FREQUENTLY ASKED QUESTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preguntas Frecuentes sobre Pintura Interior Comercial'
                : 'Common Questions About Commercial Interior Painting'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Respuestas directas a las dudas más comunes de gerentes de instalaciones, arquitectos y propietarios en Texas.'
                : 'Clear, straightforward answers to the questions facility managers and business owners ask us most.'}
            </p>
          </div>

          {/* Accordion Container */}
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'bg-white border-[#EF3340]/40 shadow-md ring-1 ring-[#EF3340]/20'
                      : 'bg-white border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-extrabold text-slate-900 text-base sm:text-lg flex items-center gap-3">
                      <span className="size-7 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center font-bold text-xs shrink-0">
                        {idx + 1}
                      </span>
                      <span>{faq.q}</span>
                    </span>
                    <div
                      className={`size-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen ? 'bg-[#EF3340] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      <ChevronDown className="size-4" />
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-2">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: READY TO TRANSFORM YOUR INTERIOR SPACE? & TRUST BADGES ─── */}
      <section className="py-20 bg-gradient-to-b from-[#020F1D] via-[#062F57] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,51,64,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="site-shell relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span className="text-white">
              {isEs ? 'HAGAMOS REALIDAD SU VISIÓN' : 'READY TO TRANSFORM YOUR SPACE?'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-md">
            {isEs ? 'Hagamos Realidad su Visión Comercial' : "Let's Bring Your Vision to Life"}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-10">
            {isEs
              ? 'Ya sea que necesite una actualización rápida entre inquilinos o una renovación interior integral completa, Painting Dallas está listo para ayudarle. Contáctenos hoy para recibir un presupuesto gratuito y sin compromiso.'
              : 'Whether you need a quick refresh between tenants or a complete interior overhaul, Painting Dallas is ready to help. Contact us today for a free, no-obligation estimate.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/free-estimate"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.6)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
              <span>{isEs ? 'Solicitar Presupuesto Gratuito' : 'Request Your Free Estimate'}</span>
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <a
              href="tel:4693685885"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/25 text-white px-7 py-4 text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:border-[#EF3340]/60 hover:text-white shadow-md"
            >
              <Phone className="size-4 text-[#EF3340]" />
              <span>{isEs ? 'Llamar (469) 368-5885' : 'Call (469) 368-5885'}</span>
            </a>
          </div>

          {/* Trust Badges Strip (7 Badges) */}
          <div className="pt-10 border-t border-white/15">
            <p className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
              {isEs ? 'RESPALDADOS POR NUESTRO COMPROMISO PROFESIONAL' : 'BACKED BY OUR PROFESSIONAL COMMITMENT'}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-200">
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Star className="size-3.5 text-amber-400 fill-amber-400" />
                <span>5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Building2 className="size-3.5 text-[#EF3340]" />
                <span>180+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Award className="size-3.5 text-amber-400" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Droplets className="size-3.5 text-cyan-400" />
                <span>Low-VOC Options</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Clock className="size-3.5 text-sky-400" />
                <span>Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>Free Estimates</span>
              </div>
            </div>
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
