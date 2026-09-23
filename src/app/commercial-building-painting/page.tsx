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
  Shield,
  ShieldCheck,
  Building2,
  Building,
  CheckCircle2,
  Clock,
  MapPin,
  Award,
  ChevronRight,
  ChevronDown,
  Sparkles,
  Check,
  FileText,
  AlertCircle,
  Layers,
  Wrench,
  Factory,
  Droplets,
  HeartPulse,
  ShoppingBag,
  School,
  Landmark,
  Users,
  HardHat,
  Car,
  History,
  Paintbrush,
} from 'lucide-react';

export default function CommercialBuildingPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 8 Commercial Building Painting Services
  const buildingServices = [
    {
      id: 'full-exterior',
      title: isEs ? 'Pintura Exterior Integral de Edificios' : 'Full Building Exterior Painting',
      desc: isEs
        ? 'Repintado exterior completo para torres de oficinas, bodegas, centros comerciales e industrias. Tratamos estuco, ladrillo, mampostería, metal, madera y EIFS.'
        : 'Complete exterior repainting for office buildings, warehouses, retail centers, and industrial facilities. We handle all surfaces—stucco, brick, masonry, metal, wood, and EIFS.',
      includes: isEs
        ? 'Lavado a presión, reparación de grietas, calafateo, imprimación y acabados de primera calidad.'
        : 'Pressure washing, surface repairs, caulking, priming, and premium topcoats.',
      icon: Building2,
      tag: isEs ? 'Exterior Completo' : 'Complete Envelope',
    },
    {
      id: 'full-interior',
      title: isEs ? 'Pintura Interior Integral de Edificios' : 'Full Building Interior Painting',
      desc: isEs
        ? 'Pintura interior integral para oficinas, áreas comunes, pasillos, cajas de escaleras y suites de inquilinos. Trabajamos por fases para no interrumpir operaciones.'
        : 'Comprehensive interior painting for offices, common areas, hallways, stairwells, and tenant spaces. We work in phases to minimize disruption to building operations.',
      includes: isEs
        ? 'Reparación de drywall, parcheo, imprimación y acabados arquitectónicos lavables.'
        : 'Drywall repair, patching, priming, and premium interior finishes.',
      icon: Paintbrush,
      tag: isEs ? 'Interior Completo' : 'Tenant & Common Areas',
    },
    {
      id: 'campus',
      title: isEs ? 'Proyectos de Campus y Complejos Múltiples' : 'Multi-Building Campus Projects',
      desc: isEs
        ? 'Contamos con el volumen de cuadrillas y la experiencia gerencial para atender campus corporativos, complejos educativos, centros médicos y comunidades residenciales.'
        : 'We have the crew size and project management expertise to handle large-scale campus projects—apartment communities, corporate parks, educational institutions, and medical complexes.',
      includes: isEs
        ? 'Programación secuencial por etapas, gerentes de proyecto dedicados y coordinación centralizada.'
        : 'Phased scheduling, dedicated project managers, and centralized coordination.',
      icon: Building,
      tag: isEs ? 'Gran Escala' : 'Multi-Building Scale',
    },
    {
      id: 'high-rise',
      title: isEs ? 'Pintura en Altura y Acceso Difícil' : 'High-Rise & Difficult Access Painting',
      desc: isEs
        ? 'Cuadrillas certificadas en seguridad vertical equipadas para torres de gran altura, estructuras elevadas y zonas complejas con plataformas, andamios y canastillas colgantes.'
        : 'Our crews are certified in height safety and equipped to handle high-rise buildings, elevated structures, and difficult-access areas using lifts, scaffolding, and swing stages.',
      includes: isEs
        ? 'Protocolos rigurosos bajo normas OSHA y equipo especializado de acceso vertical.'
        : 'OSHA-compliant safety protocols and specialized access equipment.',
      icon: HardHat,
      tag: isEs ? 'Certificación OSHA' : 'Swing Stage Certified',
    },
    {
      id: 'roofing',
      title: isEs ? 'Cubiertas y Recubrimientos Protectores' : 'Roofing & Protective Coatings',
      desc: isEs
        ? 'Extienda la vida útil de su cubierta comercial con sistemas de impermeabilización y recubrimientos reflectivos. Pintamos también equipos mecánicos, unidades HVAC y torres.'
        : 'Extend the life of your commercial roof with professional roof coatings and waterproofing systems. We also paint and coat mechanical equipment, HVAC units, and rooftop structures.',
      includes: isEs
        ? 'Limpieza de techo, sellado de juntas y aplicación de recubrimientos elastoméricos reflectivos.'
        : 'Roof cleaning, seam repair, and reflective coating application.',
      icon: Layers,
      tag: isEs ? 'Impermeabilización' : 'Roof & HVAC Coatings',
    },
    {
      id: 'common-areas',
      title: isEs ? 'Áreas Comunes y Espacios de Amenidades' : 'Common Areas & Amenity Spaces',
      desc: isEs
        ? 'Desde vestíbulos principales y baterías de elevadores hasta gimnasios y salones comunitarios, entregamos acabados que impresionan a residentes, inquilinos y visitantes.'
        : 'From lobbies and elevator banks to fitness centers and community rooms, we deliver finishes that impress residents, tenants, and visitors.',
      includes: isEs
        ? 'Vestíbulos, pasillos principales, escaleras de servicio, baños y centros de acondicionamiento.'
        : 'Lobbies, corridors, stairwells, restrooms, fitness centers, and more.',
      icon: Users,
      tag: isEs ? 'Alto Tránsito' : 'Executive Finishes',
    },
    {
      id: 'parking',
      title: isEs ? 'Estructuras de Estacionamiento y Garajes' : 'Parking Structures & Garages',
      desc: isEs
        ? 'Especialistas en recubrimientos para estacionamientos multinivel, estructuras de concreto y elementos de acero. Fórmulas de grado industrial para soportar tránsito y químicos.'
        : 'We specialize in painting and coating parking garages, concrete structures, and metal components. Our industrial-grade coatings withstand vehicle traffic, chemicals, and weather.',
      includes: isEs
        ? 'Selladores de concreto, recubrimientos para tráfico vehicular, señalización vial e impermeabilización.'
        : 'Concrete sealers, traffic coatings, line striping, and waterproofing.',
      icon: Car,
      tag: isEs ? 'Grado Vial' : 'Traffic-Grade Systems',
    },
    {
      id: 'historic',
      title: isEs ? 'Restauración Histórica y Especializada' : 'Historic & Specialty Restoration',
      desc: isEs
        ? 'Experiencia en restauración de inmuebles comerciales históricos, con conocimiento técnico en sustratos antiguos, normas de seguridad con plomo y acabados de época.'
        : 'We have experience restoring historic commercial buildings, requiring specialized knowledge of older substrates, lead-safe practices, and period-appropriate finishes.',
      includes: isEs
        ? 'Cuadrillas con certificación Lead-Safe, consolidación de sustratos e igualación exacta de tonos históricos.'
        : 'Lead-safe certified crews, substrate repair, and historic color matching.',
      icon: History,
      tag: isEs ? 'Especialistas' : 'Historic Preservation',
    },
  ];

  // 10 Building Types Matrix
  const buildingTypes = [
    {
      type: isEs ? 'Edificios de Oficinas' : 'Office Buildings',
      projects: isEs ? 'Oficinas corporativas de baja, media y gran altura (rascacielos)' : 'Low-rise, mid-rise, and high-rise offices',
      icon: Building2,
    },
    {
      type: isEs ? 'Instalaciones Industriales' : 'Industrial Facilities',
      projects: isEs ? 'Almacenes logísticos, fábricas de manufactura, centros de distribución' : 'Warehouses, factories, distribution centers',
      icon: Factory,
    },
    {
      type: isEs ? 'Centros Comerciales' : 'Retail Centers',
      projects: isEs ? 'Plazas comerciales (strip malls), centros comerciales cerrados, tiendas ancla' : 'Strip malls, shopping centers, standalone retail',
      icon: ShoppingBag,
    },
    {
      type: isEs ? 'Edificios Médicos y Hospitales' : 'Medical Buildings',
      projects: isEs ? 'Hospitales, clínicas quirúrgicas, edificios de consultorios médicos' : 'Hospitals, clinics, medical office buildings',
      icon: HeartPulse,
    },
    {
      type: isEs ? 'Hospitalidad y Hoteles' : 'Hospitality',
      projects: isEs ? 'Hoteles, moteles, resorts, centros de convenciones y salones de eventos' : 'Hotels, motels, resorts, event venues',
      icon: Building,
    },
    {
      type: isEs ? 'Propiedades Multifamiliares' : 'Multi-Family',
      projects: isEs ? 'Complejos de apartamentos, condominios residenciales, townhomes' : 'Apartment complexes, condominiums, townhomes',
      icon: Users,
    },
    {
      type: isEs ? 'Centros Educativos' : 'Educational',
      projects: isEs ? 'Escuelas primarias y secundarias, universidades, centros de capacitación' : 'Schools, universities, training centers',
      icon: School,
    },
    {
      type: isEs ? 'Edificios Gubernamentales' : 'Government',
      projects: isEs ? 'Palacios municipales, tribunales de justicia, instalaciones públicas' : 'Municipal buildings, courthouses, public facilities',
      icon: Landmark,
    },
    {
      type: isEs ? 'Inmuebles de Uso Mixto' : 'Mixed-Use',
      projects: isEs ? 'Desarrollos combinados de comercio/residencial y oficinas/retail' : 'Retail/residential, office/retail combinations',
      icon: Layers,
    },
    {
      type: isEs ? 'Estructuras de Estacionamiento' : 'Parking Structures',
      projects: isEs ? 'Garajes elevados multinivel y estacionamientos subterráneos' : 'Above-ground and below-ground garages',
      icon: Car,
    },
  ];

  // 7-Step Process
  const processSteps = [
    {
      step: '1',
      title: isEs ? '1. Consulta Inicial' : '1. Consultation',
      what: isEs ? 'Escuchamos sus objetivos, presupuesto y plazos requeridos.' : 'We listen to your goals, budget, and timeline.',
      why: isEs ? 'Asegura alineación estratégica total desde el primer día.' : 'Ensures alignment from day one.',
    },
    {
      step: '2',
      title: isEs ? '2. Evaluación en el Sitio' : '2. Site Assessment',
      what: isEs ? 'Inspeccionamos todas las superficies, detectamos daños y medimos con láser.' : 'We inspect all surfaces, identify issues, and take measurements.',
      why: isEs ? 'Precios exactos sin sorpresas ni sobrecostos ocultos.' : 'Accurate pricing and no surprises.',
    },
    {
      step: '3',
      title: isEs ? '3. Propuesta Detallada' : '3. Detailed Proposal',
      what: isEs ? 'Recibe una cotización desglosada y transparente por partidas.' : 'You receive a transparent, line-item quote.',
      why: isEs ? 'Sin tarifas ocultas. Alcance y expectativas 100% claros.' : 'No hidden fees. Clear expectations.',
    },
    {
      step: '4',
      title: isEs ? '4. Preparación Integral' : '4. Preparation',
      what: isEs ? 'Lavamos a presión, reparamos grietas, calafateamos juntas e imprimamos.' : 'We pressure wash, repair, caulk, and prime.',
      why: isEs ? 'El secreto para un acabado uniforme y de máxima durabilidad.' : 'The secret to a long-lasting finish.',
    },
    {
      step: '5',
      title: isEs ? '5. Pintura y Restauración' : '5. Paint & Restore',
      what: isEs ? 'Nuestras cuadrillas aplican recubrimientos de grado industrial con precisión.' : 'Our skilled crews apply premium coatings with precision.',
      why: isEs ? 'Acabado impecable y duradero en cada metro cuadrado.' : 'Flawless finish, every time.',
    },
    {
      step: '6',
      title: isEs ? '6. Recorrido Final de Inspección' : '6. Final Walkthrough',
      what: isEs ? 'Inspeccionamos cada rincón y detalle junto a usted.' : 'We inspect every inch with you.',
      why: isEs ? 'No nos retiramos hasta que esté 100% satisfecho con la obra.' : "We don't leave until you're 100% satisfied.",
    },
    {
      step: '7',
      title: isEs ? '7. Aprobación y Entrega de Garantía' : '7. Sign-Off & Warranty',
      what: isEs ? 'Aprobación formal respaldada por nuestra garantía escrita de 5 años.' : 'Final approval backed by our written 5-year warranty.',
      why: isEs ? 'Protección patrimonial sólida para su inversión a largo plazo.' : 'Your investment is protected.',
    },
  ];

  // 9 Advantage Points for Large Projects
  const advantageList = [
    {
      title: isEs ? 'Cuadrillas Escalables' : 'Scalable Crews',
      desc: isEs
        ? 'Contamos con el volumen humano y técnico para ejecutar campus de varios edificios y torres de gran altura.'
        : 'We have the manpower to handle multi-building campuses and high-rise projects without delay.',
      icon: Users,
    },
    {
      title: isEs ? 'Gerentes de Proyecto Dedicados' : 'Dedicated Project Managers',
      desc: isEs
        ? 'Un punto de contacto único que garantiza comunicación transparente y reportes diarios continuos.'
        : 'One dedicated point of contact for seamless communication and proactive daily updates.',
      icon: ShieldCheck,
    },
    {
      title: isEs ? 'Programación por Fases' : 'Phased Scheduling',
      desc: isEs
        ? 'Trabajamos coordinados por etapas, noches o fines de semana para no afectar a inquilinos u operaciones.'
        : 'We work around your tenants and business operations to maintain normal facility functionality.',
      icon: Clock,
    },
    {
      title: isEs ? 'Seguridad Certificada OSHA' : 'OSHA-Compliant Safety',
      desc: isEs
        ? 'Personal entrenado en protección contra caídas, trabajo en altura y protocolos de espacios confinados.'
        : 'Our crews are trained in height safety, confined spaces, and full OSHA fall protection standards.',
      icon: HardHat,
    },
    {
      title: isEs ? 'Equipos Verificados y Uniformados' : 'Background-Checked Teams',
      desc: isEs
        ? 'Cuadrillas profesionales, verificadas, uniformadas y respetuosas de las normativas de su inmueble.'
        : 'Uniformed, professional, and respectful crews vetted with comprehensive background checks.',
      icon: Award,
    },
    {
      title: isEs ? 'Materiales Comerciales Premium' : 'Premium Materials',
      desc: isEs
        ? 'Utilizamos recubrimientos y pinturas de marcas líderes: Sherwin-Williams, PPG y Benjamin Moore.'
        : 'We use top-tier commercial paints, elastomeric coatings, and primers from trusted brands.',
      icon: Sparkles,
    },
    {
      title: isEs ? 'Sitios de Trabajo Limpios' : 'Clean Job Sites',
      desc: isEs
        ? 'Mantenemos sus instalaciones ordenadas y limpias al final de cada jornada de trabajo.'
        : 'We leave your property spotless every single day to protect your business image.',
      icon: CheckCircle2,
    },
    {
      title: isEs ? 'Garantía Escrita de 5 Años' : '5-Year Workmanship Warranty',
      desc: isEs
        ? 'Respaldamos la calidad de nuestra mano de obra con un compromiso escrito por 5 años.'
        : 'We stand firmly behind our commercial craftsmanship with a full 5-year written warranty.',
      icon: Shield,
    },
    {
      title: isEs ? 'Con Licencia, Fianza y Seguro ($2M+)' : 'Licensed & Insured',
      desc: isEs
        ? 'Cobertura completa de responsabilidad civil general y compensación de trabajadores para su seguridad.'
        : 'Full general liability policy and workers\' compensation coverage on every commercial contract.',
      icon: FileText,
    },
  ];

  // 8 Industries
  const industries = [
    {
      industry: isEs ? 'Bienes Raíces Corporativos' : 'Corporate Real Estate',
      projects: isEs ? 'Torres de oficinas, campus corporativos, edificios profesionales' : 'Office towers, corporate campuses, professional buildings',
      icon: Building2,
    },
    {
      industry: isEs ? 'Salud y Hospitales' : 'Healthcare',
      projects: isEs ? 'Hospitales, clínicas especializadas, complejos de consultorios médicos' : 'Hospitals, clinics, medical office buildings',
      icon: HeartPulse,
    },
    {
      industry: isEs ? 'Comercio y Hospitalidad' : 'Retail & Hospitality',
      projects: isEs ? 'Centros comerciales, hoteles, restaurantes, recintos de entretenimiento' : 'Shopping centers, hotels, restaurants, entertainment venues',
      icon: ShoppingBag,
    },
    {
      industry: isEs ? 'Industrial y Logística' : 'Industrial',
      projects: isEs ? 'Bodegas logísticas, fábricas, centros de distribución' : 'Warehouses, factories, distribution centers, logistics hubs',
      icon: Factory,
    },
    {
      industry: isEs ? 'Multifamiliar y Residencial' : 'Multi-Family',
      projects: isEs ? 'Comunidades de apartamentos, condominios, propiedades de asociaciones HOA' : 'Apartment communities, condominiums, HOA properties',
      icon: Users,
    },
    {
      industry: isEs ? 'Educación y Universidades' : 'Education',
      projects: isEs ? 'Escuelas K-12, campus universitarios, centros de capacitación' : 'K-12 schools, universities, training facilities',
      icon: School,
    },
    {
      industry: isEs ? 'Gobierno y Sector Público' : 'Government',
      projects: isEs ? 'Palacios municipales, tribunales, instalaciones de obras públicas' : 'Municipal buildings, courthouses, public works facilities',
      icon: Landmark,
    },
    {
      industry: isEs ? 'Administración de Propiedades (REITs)' : 'Property Management',
      projects: isEs ? 'Empresas de gestión integral, firmas de facility management y fondos REIT' : 'Full-service management companies and REITs',
      icon: Layers,
    },
  ];

  // 5 Counties
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

  // 8 FAQs
  const faqs = [
    {
      q: isEs
        ? '¿Cuánto tiempo tardará el proyecto de pintura de nuestro edificio comercial?'
        : 'How long will my commercial building painting project take?',
      a: isEs
        ? 'Los plazos varían según el tamaño del inmueble, el número de superficies a tratar y las condiciones climáticas. Un edificio de oficinas individual suele completarse en 1 o 2 semanas, mientras que un campus con múltiples edificios puede requerir de varias semanas a meses. En su propuesta formal incluimos un cronograma detallado por etapas.'
        : 'Project timelines vary based on building size, number of surfaces, and weather conditions. A single office building may take 1-2 weeks, while a multi-building campus could take several weeks to months. We provide a detailed schedule in your proposal.',
    },
    {
      q: isEs
        ? '¿Pueden pintar nuestro edificio mientras permanecemos abiertos al público?'
        : 'Can you paint our building while we remain open for business?',
      a: isEs
        ? 'Totalmente. Nos especializamos en pintura de edificios ocupados y en operación continua. Implementamos horarios escalonados por fases, trabajos fuera del horario comercial y estrictas medidas de protección para minimizar cualquier impacto en sus inquilinos y visitantes.'
        : 'Absolutely. We specialize in occupied building painting. We use phased scheduling, off-hours work, and careful protection of your space to minimize disruption to your tenants and operations.',
    },
    {
      q: isEs
        ? '¿Manejan tanto pintura interior como exterior para edificios completos?'
        : 'Do you handle both interior and exterior painting for entire buildings?',
      a: isEs
        ? 'Sí. Somos un contratista integral de servicio completo. Podemos abarcar todo su edificio: fachadas exteriores, áreas interiores, techumbres, estacionamientos multinivel y zonas comunes bajo un único contrato llave en mano, ahorrándole tiempo y dolores de cabeza de coordinación.'
        : 'Yes. We are a full-service contractor. We can handle your entire building—interior, exterior, roofing, parking structures, and common areas—under one contract, saving you time and coordination headaches.',
    },
    {
      q: isEs
        ? '¿Qué tipo de garantía ofrecen en pintura de edificios comerciales?'
        : 'What type of warranty do you offer?',
      a: isEs
        ? 'Ofrecemos una garantía formal por escrito de 5 años en mano de obra para todos nuestros proyectos de pintura de edificios comerciales. Si surge cualquier detalle imputable a nuestra aplicación, responderemos de inmediato para solucionarlo.'
        : 'We offer a 5-year written workmanship warranty on all commercial building painting projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: isEs
        ? '¿Cuentan con licencias y seguros al día?'
        : 'Are you licensed and insured?',
      a: isEs
        ? 'Absolutamente. Estamos autorizados, afianzados y respaldados por una póliza integral de responsabilidad civil general de alto límite y seguro de compensación para trabajadores. Los certificados de seguro (COI) con endoso a su empresa están disponibles en pocas horas.'
        : 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers\' compensation coverage. Certificates of insurance are available upon request.',
    },
    {
      q: isEs
        ? '¿Tienen experiencia comprobada en edificios de gran altura (High-Rise)?'
        : 'Do you have experience with high-rise buildings?',
      a: isEs
        ? 'Sí. Nuestras cuadrillas cuentan con certificación técnica en trabajo en altura y están capacitadas para operar canastillas colgantes (swing stages), andamios tubulares y plataformas elevadoras de gran alcance, cumpliendo al 100% con los estándares de seguridad de OSHA.'
        : 'Yes. Our crews are certified in height safety and equipped to handle high-rise projects using lifts, scaffolding, and swing stages. We are fully OSHA-compliant.',
    },
    {
      q: isEs
        ? '¿Pueden coordinar directamente con nuestro equipo de administración de propiedades?'
        : 'Can you work with our property management team?',
      a: isEs
        ? 'Por supuesto. Trabajamos cotidianamente con administradores de inmuebles, directores de instalaciones e ingenieros de mantenimiento. Comprendemos la importancia de la comunicación continua, el respeto a los reglamentos del edificio y la mínima interrupción operativa.'
        : 'Yes. We work with property managers, facility directors, and building engineers regularly. We understand the importance of clear communication, minimal disruption, and adherence to building rules and regulations.',
    },
    {
      q: isEs
        ? '¿Ofrecen programas de mantenimiento preventivo continuo?'
        : 'Do you offer maintenance programs?',
      a: isEs
        ? 'Sí. Brindamos contratos de mantenimiento preventivo y retoque programado para administradores que buscan mantener sus inmuebles en óptimas condiciones durante todo el año, protegiendo su valor a un costo controlado.'
        : 'Yes. We offer ongoing maintenance painting programs for property managers who want to keep their buildings in top condition year-round. Contact us to learn more.',
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
                {isEs ? 'Pintura de Edificios Comerciales' : 'Commercial Building Painting'}
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
                    Pintura Profesional de Edificios Comerciales en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Soluciones Integrales para Torres y Campus - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Commercial Building Painting in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Complete Solutions for Towers & Campuses - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Soluciones completas de pintura para torres de oficinas, instalaciones industriales, centros comerciales y campus corporativos. Un solo contratista. Cada superficie. Cero compromisos.'
                : 'Complete painting solutions for office towers, industrial facilities, retail centers, and multi-building campuses. One contractor. Every surface. Zero compromises.'}
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
                <Building2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Solución Integral Edificios' : 'Full-Scope Building Solutions'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <HardHat className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Certificación OSHA Altura' : 'High-Rise & Swing Stage'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Póliza $2M+ Cobertura' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY YOUR COMMERCIAL BUILDING NEEDS A PROFESSIONAL PARTNER ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5" />
              <span>{isEs ? 'PROTEGIENDO SU MAYOR ACTIVO' : 'PROTECTING YOUR MOST VALUABLE ASSET'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? '¿Por Qué su Edificio Comercial Requiere un Socio Especializado?'
                : 'Why Your Commercial Building Needs a Professional Painting Partner'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'Su edificio comercial es más que una estructura: es una inversión, una declaración de marca y un centro de operaciones. Ya sea propietario de un edificio individual o administre un gran campus industrial, el estado de la pintura impacta directamente en:'
                : "Your commercial building is more than a structure—it's an investment, a brand statement, and a place of business. Whether you own a single office building or manage a sprawling industrial campus, the condition of your building's paint directly impacts:"}
            </p>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/commercial-building.jpg"
                  alt={isEs ? "Pintura de edificios comerciales en Dallas" : "Commercial building painting in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Recubrimientos Comerciales de Gran Escala' : 'Large-Scale Commercial Facility Coverage'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Impact Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
            {/* Pillar 1 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Building2 className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Valor Patrimonial' : 'Property Value'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Un edificio en óptimas condiciones exige mayores tarifas de arrendamiento y mayor valor de reventa.'
                    : 'A well-maintained building commands higher lease rates, better tenant quality, and stronger resale value.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? '+ Plusvalía Inmobiliaria' : '+ Asset Valuation'}
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Users className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Retención de Inquilinos' : 'Tenant Retention'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Los inquilinos prefieren renovar en inmuebles que lucen profesionales, cuidados y limpios.'
                    : 'Tenants renew long-term leases in facilities that project professionalism and consistent pride of ownership.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? '+ Estabilidad de Ocupación' : '+ Occupancy Stability'}
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Award className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Percepción de Marca' : 'Brand Perception'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'La fachada y el lobby constituyen la primera impresión crucial que reciben sus clientes e inversionistas.'
                    : 'Your building is the physical anchor and primary impression clients, visitors, and investors form.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? '+ Imagen Corporativa' : '+ Corporate Prestige'}
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Protección Estructural' : 'Structural Protection'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Recubrimientos técnicos que bloquean filtraciones, corrosión de acero y reparaciones millonarias.'
                    : 'Quality coatings form an impenetrable barrier preventing moisture intrusion, rot, and masonry spalling.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? '+ Prevención de Daños' : '+ Moisture Barrier'}
              </div>
            </div>

            {/* Pillar 5 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <FileText className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Cumplimiento Normativo' : 'Code Compliance'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Cumpla con las normativas municipales de mantenimiento de fachadas comerciales en DFW.'
                    : 'Avoid municipal citations and maintain adherence to regional commercial facade maintenance codes.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? '+ Tranquilidad Legal' : '+ Municipal Standards'}
              </div>
            </div>
          </div>

          {/* Single-Source Contractor Commitment Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#020F1D] via-[#062F57] to-[#020F1D] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-[#EF3340]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-2">
                  <Check className="size-3.5" />
                  <span>{isEs ? 'SU CONTRATISTA DE FUENTE ÚNICA' : 'YOUR SINGLE-SOURCE CONTRACTOR'}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                  {isEs
                    ? 'En Painting Dallas nos especializamos en soluciones integrales para edificios comerciales: desde el techo hasta los cimientos, por dentro y por fuera. Somos su contratista de fuente única para cualquier requerimiento de pintura.'
                    : 'At Painting Dallas, we specialize in complete commercial building painting solutions—from the roof to the foundation, inside and out. We are your single-source contractor for every painting need.'}
                </p>
              </div>
              <Link
                href="/free-estimate"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105"
              >
                <span>{isEs ? 'Cotizar Edificio' : 'Estimate Building'}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR COMMERCIAL BUILDING PAINTING SERVICES (8 Solutions) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'ALCANCE TOTAL DE SERVICIOS' : 'COMPLETE BUILDING SOLUTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Soluciones Completas de Pintura para Cada Tipo de Edificio'
                : 'Complete Painting Solutions for Every Building Type'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Brindamos servicios de pintura de alcance integral para edificios comerciales de todos los tamaños y tipologías en el Metroplex de DFW.'
                : 'We provide full-scope painting services for commercial buildings of all sizes and types across the DFW Metroplex.'}
            </p>
          </div>

          {/* 8 Comprehensive Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {buildingServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#EF3340]/40 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="size-12 rounded-xl bg-[#062F57]/10 text-[#062F57] flex items-center justify-center group-hover:bg-[#EF3340] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <ServiceIcon className="size-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2.5 group-hover:text-[#062F57] transition-colors leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4 font-normal">
                      {service.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-100 mt-2">
                    <p className="text-[11px] font-semibold text-slate-500 mb-1">
                      <strong className="text-slate-800">{isEs ? 'Incluye:' : 'Includes:'}</strong> {service.includes}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: BUILDING TYPES WE SERVE (10 Building Types Matrix) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Building className="size-3.5" />
              <span>{isEs ? 'EXPERIENCIA EN CADA TIPOLOGÍA' : 'EXPERTISE ACROSS EVERY BUILDING TYPE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Tipologías de Edificios que Atendemos' : 'Building Types We Serve'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Desde rascacielos céntricos y centros hospitalarios hasta naves logísticas y complejos de apartamentos.'
                : 'Turnkey architectural painting solutions engineered for the specific scale and operations of every commercial building structure.'}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020F1D] text-white text-xs uppercase tracking-wider font-black">
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Tipo de Edificio' : 'Building Type'}</th>
                  <th className="py-4 px-6">{isEs ? 'Proyectos Típicos de Pintura y Restauración' : 'Common Projects'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {buildingTypes.map((item, idx) => {
                  const TypeIcon = item.icon;
                  return (
                    <tr
                      key={idx}
                      className={`hover:bg-slate-50 transition-colors ${
                        idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                      }`}
                    >
                      <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-3">
                        <div className="size-8 rounded-lg bg-[#062F57]/10 text-[#062F57] flex items-center justify-center shrink-0">
                          <TypeIcon className="size-4 text-[#EF3340]" />
                        </div>
                        <span>{item.type}</span>
                      </td>
                      <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                        {item.projects}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden max-w-2xl mx-auto">
            {buildingTypes.map((item, idx) => {
              const TypeIcon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="size-8 rounded-lg bg-[#062F57]/10 text-[#EF3340] flex items-center justify-center shrink-0">
                      <TypeIcon className="size-4" />
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base">{item.type}</h4>
                  </div>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.projects}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR PROVEN BUILDING PAINTING PROCESS (7 Steps) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <FileText className="size-3.5" />
              <span>{isEs ? 'PROYECTOS DE GRAN ENVERGADURA' : 'A STRUCTURED APPROACH FOR LARGE PROJECTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Nuestro Proceso Comprobado para Edificios Comerciales'
                : 'Our Proven Building Painting Process'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Seguimos un proceso riguroso de 7 pasos para garantizar que cada proyecto se complete a tiempo, dentro del presupuesto y con la máxima excelencia, sin importar su escala.'
                : 'We follow a rigorous 7-step process to ensure every project is completed on time, on budget, and to the highest standard—regardless of size.'}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden lg:block max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020F1D] text-white text-xs uppercase tracking-wider font-black">
                  <th className="py-4 px-6 w-20 text-center">{isEs ? 'Paso' : 'Step'}</th>
                  <th className="py-4 px-6 w-1/4">{isEs ? 'Fase del Proceso' : 'Process Phase'}</th>
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Lo Que Hacemos' : 'What We Do'}</th>
                  <th className="py-4 px-6">{isEs ? 'Por Qué Es Importante' : 'Why It Matters'}</th>
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
                    <td className="py-4 px-6 text-slate-600 leading-relaxed">{step.what}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 text-xs">
                        <Check className="size-3.5 text-emerald-600" />
                        <span>{step.why}</span>
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
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{step.what}</p>
                </div>
                <div className="pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-200/50">
                  <Check className="size-3.5 text-emerald-600 shrink-0" />
                  <span>
                    <strong>{isEs ? 'Importancia:' : 'Why It Matters:'}</strong> {step.why}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: THE PAINTING DALLAS ADVANTAGE FOR LARGE PROJECTS (9 Points) ─── */}
      <section className="py-20 bg-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,47,87,0.4)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,51,64,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
              <Shield className="size-3.5" />
              <span>{isEs ? 'LA VENTAJA EN PROYECTOS DE GRAN ESCALA' : 'THE ADVANTAGE FOR LARGE PROJECTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs
                ? '¿Por Qué los Administradores de Inmuebles nos Eligen?'
                : 'Why Property Managers Choose Us for Building Painting'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'La pintura de edificios a gran escala requiere más que simples pintores: exige pericia de gestión de proyectos, cumplimiento de normas de seguridad y los recursos para hacerlo bien.'
                : 'Large-scale commercial building painting requires more than just painters. It requires project management expertise, safety compliance, and the resources to get the job done right.'}
            </p>
          </div>

          {/* 9 Advantage Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {advantageList.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#EF3340]/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-[#062F57] text-[#EF3340] flex items-center justify-center border border-white/10 mb-4">
                      <AdvIcon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mb-2">{adv.title}</h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">{adv.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-white/10 flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="size-3.5 shrink-0" />
                    <span>{isEs ? 'Estándar Comprobado' : 'Proven Standard'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 7: INDUSTRIES WE SERVE (8 Industries) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Building className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'CONFIANZA SECTORIAL' : 'TRUSTED ACROSS DIVERSE COMMERCIAL SECTORS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Sectores que Atendemos' : 'Industries We Serve'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Soluciones especializadas para firmas de bienes raíces, fondos REIT, hospitales, industrias y corporativos en Texas.'
                : 'Turnkey building solutions tailored to the operational demands of commercial real estate and institutions.'}
            </p>
          </div>

          {/* Clean Modern Industries Table */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-black border-b border-slate-200">
                  <th className="py-4 px-6 w-2/5">{isEs ? 'Sector / Industria' : 'Industry'}</th>
                  <th className="py-4 px-6">{isEs ? 'Proyectos Típicos de Edificios' : 'Common Projects'}</th>
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

      {/* ── SECTION 8: SERVICE AREAS (5 Counties & 50-Mile Radius) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <MapPin className="size-3.5" />
              <span>{isEs ? 'COBERTURA EN EL METROPLEX DFW' : 'SERVICE AREAS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Sirviendo con Orgullo al Metroplex DFW'
                : 'Proudly Serving the DFW Metroplex'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Brindamos servicios de pintura para edificios comerciales en un radio de 50 millas alrededor de Dallas, incluyendo:'
                : 'We provide commercial building painting services within a 50-mile radius of Dallas, including:'}
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
                  <span>{isEs ? 'Cuadrillas de Edificios Asignadas' : 'Dispatched Daily'}</span>
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
                  {isEs ? '¿No está seguro si cubrimos su área?' : 'Not Sure If We Cover Your Area?'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {isEs
                    ? 'Llámenos al (469) 368-5885; lo más probable es que sí tengamos cobertura para su edificio.'
                    : 'Give us a call at (469) 368-5885—we likely do. We cover all commercial zones across North Texas.'}
                </p>
              </div>
              <a
                href="tel:4693685885"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs uppercase tracking-wider py-3 px-4 transition-colors shadow-md"
              >
                <Phone className="size-3.5" />
                <span>{isEs ? 'Llamar al (469) 368-5885' : 'Call (469) 368-5885'}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 9: FREQUENTLY ASKED QUESTIONS (Interactive FAQ Accordion) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Building2 className="size-3.5" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'COMMON QUESTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preguntas Frecuentes sobre Pintura de Edificios Comerciales'
                : 'Frequently Asked Questions'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Respuestas directas a las preguntas que los directores de operaciones y administradores nos hacen con más frecuencia.'
                : 'Common questions property managers, facility directors, and asset managers ask us most.'}
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

      {/* ── SECTION 10: READY TO TRANSFORM YOUR COMMERCIAL BUILDING? & TRUST BADGES ─── */}
      <section className="py-20 bg-gradient-to-b from-[#020F1D] via-[#062F57] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,51,64,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="site-shell relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span className="text-white">
              {isEs ? 'DELE NUEVA VIDA A SU EDIFICIO' : "LET'S BRING YOUR BUILDING BACK TO LIFE"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-md">
            {isEs
              ? '¿Listo para Transformar su Edificio Comercial?'
              : 'Ready to Transform Your Commercial Building?'}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-4">
            {isEs
              ? 'Ya sea que administre un solo edificio de oficinas o un portafolio de múltiples propiedades, Painting Dallas está listo para entregar resultados de clase mundial.'
              : "Whether you're managing a single office building or a multi-property portfolio, Painting Dallas is ready to deliver."}
          </p>

          <p className="text-xs uppercase tracking-widest font-black text-[#EF3340] mb-10">
            {isEs
              ? 'Con la confianza de 180+ clientes comerciales en todo el Metroplex de Dallas-Fort Worth.'
              : 'Trusted by 180+ commercial clients across the Dallas-Fort Worth Metroplex.'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <Link
              href="/free-estimate"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.6)] transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CalendarDays className="size-4 transition-transform group-hover:scale-110" />
              <span>{isEs ? 'Solicitar Cotización Gratuita' : 'Request a Free Estimate'}</span>
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
                <ShieldCheck className="size-3.5 text-emerald-400" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Star className="size-3.5 text-amber-400 fill-amber-400" />
                <span>5.0 Google Rating</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Building2 className="size-3.5 text-[#EF3340]" />
                <span>180+ Commercial Projects</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Award className="size-3.5 text-amber-400" />
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Shield className="size-3.5 text-[#EF3340]" />
                <span>5-Year Workmanship Warranty</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Users className="size-3.5 text-sky-400" />
                <span>Background-Checked Crews</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <HardHat className="size-3.5 text-amber-400" />
                <span>OSHA-Compliant Safety</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                <span>100% Satisfaction Guarantee</span>
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
