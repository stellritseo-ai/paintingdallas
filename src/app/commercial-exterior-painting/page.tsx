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
  Sun,
  Umbrella,
  Flame,
} from 'lucide-react';

export default function CommercialExteriorPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 6 Specialized Exterior Services
  const exteriorServices = [
    {
      id: 'office',
      title: isEs ? 'Edificios de Oficinas y Campus Corporativos' : 'Office Buildings & Corporate Campuses',
      desc: isEs
        ? 'Cree una imagen pulida y profesional que atraiga a inquilinos e impresione a los visitantes. Atendemos desde edificios de baja altura hasta torres corporativas.'
        : 'Create a polished, professional image that attracts tenants and impresses visitors. We handle everything from low-rise offices to high-rise corporate towers.',
      icon: Building2,
      tag: isEs ? 'Imagen Corporativa' : 'High-Rise & Low-Rise',
      perfectFor: isEs
        ? ['Parques de oficinas', 'Sedes corporativas', 'Edificios profesionales', 'Espacios de coworking']
        : ['Office parks', 'Corporate headquarters', 'Professional buildings', 'Co-working spaces'],
    },
    {
      id: 'industrial',
      title: isEs ? 'Instalaciones Industriales y Almacenes' : 'Industrial & Warehouse Facilities',
      desc: isEs
        ? 'Utilizamos recubrimientos de grado industrial diseñados para resistir químicos, abrasión y clima extremo. Cuadrillas capacitadas en trabajo en altura y espacios confinados.'
        : 'We use heavy-duty, industrial-grade coatings designed to withstand chemicals, abrasion, and extreme weather. Our teams are trained in height safety and confined space protocols.',
      icon: Factory,
      tag: isEs ? 'Grado Industrial' : 'Heavy-Duty Coatings',
      perfectFor: isEs
        ? ['Plantas de manufactura', 'Centros de distribución', 'Bodegas de almacenamiento', 'Talleres automotrices']
        : ['Manufacturing plants', 'Distribution centers', 'Storage facilities', 'Automotive shops'],
    },
    {
      id: 'retail',
      title: isEs ? 'Propiedades Comerciales y Hospitalidad' : 'Retail & Hospitality Properties',
      desc: isEs
        ? 'Las primeras impresiones generan ventas. Entregamos acabados vibrantes y duraderos que realzan su identidad de marca y resisten el alto tránsito de clientes.'
        : 'First impressions drive revenue. We deliver vibrant, durable finishes that enhance your brand identity and withstand heavy foot traffic.',
      icon: ShoppingBag,
      tag: isEs ? 'Impacto Comercial' : 'Brand Identity',
      perfectFor: isEs
        ? ['Fachadas de tiendas', 'Restaurantes', 'Hoteles', 'Centros comerciales', 'Salas de exhibición']
        : ['Storefronts', 'Restaurants', 'Hotels', 'Shopping centers', 'Showrooms'],
    },
    {
      id: 'medical',
      title: isEs ? 'Instalaciones Médicas y de Salud' : 'Medical & Healthcare Facilities',
      desc: isEs
        ? 'Entendemos los estrictos requisitos de cumplimiento en entornos de salud. Aplicamos recubrimientos de bajo VOC, antimicrobianos y fáciles de higienizar.'
        : 'Our team understands the strict compliance requirements of healthcare environments. We use low-VOC, antimicrobial, and easy-to-clean coatings that meet industry standards.',
      icon: HeartPulse,
      tag: isEs ? 'Grado Sanitario' : 'Healthcare Grade',
      perfectFor: isEs
        ? ['Hospitales', 'Clínicas', 'Consultorios dentales', 'Centros veterinarios', 'Residencias de ancianos']
        : ['Hospitals', 'Clinics', 'Dental offices', 'Veterinary facilities', 'Assisted living centers'],
    },
    {
      id: 'multifamily',
      title: isEs ? 'Propiedades Multifamiliares y HOAs' : 'Multi-Family & HOA Properties',
      desc: isEs
        ? 'Desde condominios hasta asociaciones de propietarios, ayudamos a mantener fachadas hermosas y protegidas que atraen y retienen residentes.'
        : 'From apartment complexes to condominium associations, we help property managers maintain beautiful, weather-protected exteriors that attract and retain residents.',
      icon: Users,
      tag: isEs ? 'Valor Residencial' : 'HOA / Multi-Family',
      perfectFor: isEs
        ? ['Complejos de apartamentos', 'Condominios', 'Townhomes', 'Comunidades HOA']
        : ['Apartment complexes', 'Condominiums', 'Townhomes', 'HOA communities'],
    },
    {
      id: 'education',
      title: isEs ? 'Centros Educativos e Institucionales' : 'Educational & Institutional Facilities',
      desc: isEs
        ? 'Trabajamos coordinados con calendarios académicos para entregar acabados exteriores seguros, resistentes a la intemperie y de máxima longevidad.'
        : 'We work around school schedules and campus calendars to deliver safe, durable, and aesthetically pleasing exterior finishes.',
      icon: School,
      tag: isEs ? 'Seguro y Duradero' : 'Campus Scheduling',
      perfectFor: isEs
        ? ['Escuelas', 'Universidades', 'Iglesias', 'Centros comunitarios', 'Edificios de gobierno']
        : ['Schools', 'Universities', 'Churches', 'Community centers', 'Government buildings'],
    },
  ];

  // 7 Exterior Surfaces Substrates
  const exteriorSurfaces = [
    {
      surface: isEs ? 'Estuco (Stucco)' : 'Stucco',
      approach: isEs
        ? 'Recubrimientos elastoméricos de alto espesor para puentear grietas e impermeabilizar.'
        : 'Elastomeric coatings for crack bridging and waterproofing',
      highlight: isEs ? 'Impermeabilización Elastomérica' : 'Elastomeric Waterproofing',
    },
    {
      surface: isEs ? 'Ladrillo y Mampostería' : 'Brick & Masonry',
      approach: isEs
        ? 'Recubrimientos transpirables que protegen de la lluvia mientras permiten evacuar la humedad interna.'
        : 'Breathable coatings that protect while allowing moisture escape',
      highlight: isEs ? 'Barrera Transpirable' : 'Vapor Permeable Barrier',
    },
    {
      surface: isEs ? 'Concreto y Muros Tilt-Up' : 'Concrete & Tilt-Up',
      approach: isEs
        ? 'Acrílicos y epóxicos de máxima durabilidad contra tránsito pesado e intemperie.'
        : 'Durable acrylics and epoxies for high-traffic areas',
      highlight: isEs ? 'Acrílico & Epóxico Duradero' : 'High-Durability Systems',
    },
    {
      surface: isEs ? 'Metal y Acero Estructural' : 'Metal & Steel',
      approach: isEs
        ? 'Imprimadores inhibidores de corrosión y capas de acabado de especificación industrial.'
        : 'Rust-inhibitive primers and industrial-grade topcoats',
      highlight: isEs ? 'Protección Anticorrosiva' : 'Rust-Inhibitive Protection',
    },
    {
      surface: isEs ? 'Revestimiento de Madera' : 'Wood Siding',
      approach: isEs
        ? 'Preparación profunda, sellado de fibra, imprimación y pinturas base látex o aceite premium.'
        : 'Proper prep, priming, and premium latex or oil-based paints',
      highlight: isEs ? 'Sellado Contra la Humedad' : 'Moisture & UV Defense',
    },
    {
      surface: isEs ? 'Sistemas EIFS (Estuco Sintético)' : 'EIFS',
      approach: isEs
        ? 'Recubrimientos de flexibilidad avanzada diseñados para la expansión de sistemas sintéticos.'
        : 'Specialized coatings designed for synthetic stucco systems',
      highlight: isEs ? 'Formulación Especial EIFS' : 'Synthetic Stucco Formula',
    },
    {
      surface: isEs ? 'Fibrocemento (Hardie)' : 'Fiber Cement',
      approach: isEs
        ? 'Acabados de calidad industrial con alta resistencia a decoloración UV y agrietamiento.'
        : 'Factory-grade finishes that resist fading and cracking',
      highlight: isEs ? 'Resistente a Rayos UV' : 'Factory-Grade UV Shield',
    },
  ];

  // 7-Step Process
  const processSteps = [
    {
      step: '1',
      title: isEs ? '1. Consulta Inicial' : '1. Consultation',
      what: isEs
        ? 'Escuchamos sus objetivos, presupuesto y plazos requeridos.'
        : 'We listen to your goals, budget, and timeline.',
      why: isEs ? 'Asegura alineación total desde el primer día.' : 'Ensures alignment from day one.',
    },
    {
      step: '2',
      title: isEs ? '2. Evaluación en el Sitio' : '2. Site Assessment',
      what: isEs
        ? 'Inspeccionamos superficies, identificamos daños previos y tomamos medidas exactas.'
        : 'We inspect surfaces, identify damage, and take measurements.',
      why: isEs ? 'Precios precisos y cero sorpresas en la cotización.' : 'Accurate pricing and no surprises.',
    },
    {
      step: '3',
      title: isEs ? '3. Propuesta Detallada' : '3. Detailed Proposal',
      what: isEs
        ? 'Recibe una cotización desglosada y transparente por partidas.'
        : 'You receive a transparent, line-item quote.',
      why: isEs ? 'Sin cargos ocultos. Expectativas 100% claras.' : 'No hidden fees. Clear expectations.',
    },
    {
      step: '4',
      title: isEs ? '4. Preparación Integral' : '4. Preparation',
      what: isEs
        ? 'Lavamos a presión, reparamos grietas, calafateamos juntas e imprimamos.'
        : 'We pressure wash, repair, caulk, and prime.',
      why: isEs ? 'El secreto para un acabado exterior duradero.' : 'The secret to a long-lasting finish.',
    },
    {
      step: '5',
      title: isEs ? '5. Pintura y Restauración' : '5. Paint & Restore',
      what: isEs
        ? 'Nuestras cuadrillas aplican recubrimientos exteriores de alta gama.'
        : 'Our skilled crews apply premium exterior coatings.',
      why: isEs ? 'Acabado uniforme e impecable en cada metro.' : 'Flawless finish, every time.',
    },
    {
      step: '6',
      title: isEs ? '6. Recorrido Final' : '6. Final Walkthrough',
      what: isEs
        ? 'Inspeccionamos cada detalle junto a usted en el inmueble.'
        : "We inspect every inch with you.",
      why: isEs ? 'No nos retiramos hasta que esté 100% satisfecho.' : "We don't leave until you're 100% satisfied.",
    },
    {
      step: '7',
      title: isEs ? '7. Aprobación y Garantía' : '7. Sign-Off & Warranty',
      what: isEs
        ? 'Aprobación final respaldada por nuestra garantía escrita de 5 años.'
        : 'Final approval backed by our written 5-year warranty.',
      why: isEs ? 'Su inversión queda protegida a largo plazo.' : 'Your investment is protected.',
    },
  ];

  // 5 Surface Preparation Pillars
  const prepPillars = [
    {
      title: isEs ? 'Lavado a Presión Comercial' : 'Pressure Washing',
      desc: isEs
        ? 'Eliminación completa de suciedad acumulada, moho, caleo y restos de pintura suelta.'
        : 'Removing dirt, mildew, chalk, and loose paint to ensure proper coating adhesion.',
      icon: Droplets,
    },
    {
      title: isEs ? 'Reparación de Superficies' : 'Surface Repairs',
      desc: isEs
        ? 'Parcheo minucioso de grietas, sellado de juntas y reemplazo de madera o estuco dañado.'
        : 'Patching cracks, sealing gaps, replacing rotten wood, and repairing damaged substrates.',
      icon: Wrench,
    },
    {
      title: isEs ? 'Calafateo e Impermeabilización' : 'Caulking & Sealing',
      desc: isEs
        ? 'Impermeabilización de uniones y penetraciones para bloquear cualquier filtración de humedad.'
        : 'Waterproofing joints and penetrations to prevent destructive moisture intrusion.',
      icon: ShieldCheck,
    },
    {
      title: isEs ? 'Imprimación Especializada' : 'Priming',
      desc: isEs
        ? 'Aplicación del imprimador correcto para cada sustrato, asegurando anclaje y durabilidad.'
        : 'Applying the correct primer specified for the substrate and exterior topcoat.',
      icon: Layers,
    },
    {
      title: isEs ? 'Enmascarado y Protección' : 'Masking & Protection',
      desc: isEs
        ? 'Cobertura total de ventanas, puertas, jardinería circundante y vehículos en estacionamientos.'
        : 'Covering windows, doors, landscaping, HVAC units, and adjacent parking surfaces.',
      icon: Shield,
    },
  ];

  // 8 The Painting Dallas Advantage Points
  const advantageList = [
    {
      title: isEs ? 'Recubrimientos Resistentes al Clima' : 'Weather-Resistant Coatings',
      desc: isEs
        ? 'Sistemas seleccionados especialmente para soportar el calor extremo, rayos UV y tormentas de Texas.'
        : 'Specially selected for the brutal Texas heat, intense UV exposure, and heavy rainstorms.',
      icon: Sun,
    },
    {
      title: isEs ? 'Certificación de Seguridad en Altura' : 'Height Safety Certified',
      desc: isEs
        ? 'Cuadrillas certificadas en plataformas elevadoras, andamios y protocolos de acceso vertical.'
        : 'Our crews are trained and certified for high-rise, boom lifts, and difficult access projects.',
      icon: Award,
    },
    {
      title: isEs ? 'Cuadrillas con Verificación Completa' : 'Background-Checked Crews',
      desc: isEs
        ? 'Personal uniformado, verificado, profesional y totalmente respetuoso de sus instalaciones.'
        : 'Uniformed, professional, vetted painters who treat your commercial property with care.',
      icon: ShieldCheck,
    },
    {
      title: isEs ? 'Gerente de Proyecto Dedicado' : 'Dedicated Project Manager',
      desc: isEs
        ? 'Un punto de contacto exclusivo de inicio a fin para una comunicación transparente y continua.'
        : 'One dedicated point of contact keeping you informed through daily updates from start to finish.',
      icon: Users,
    },
    {
      title: isEs ? 'Materiales de Primer Nivel' : 'Premium Materials',
      desc: isEs
        ? 'Pinturas y selladores comerciales de las marcas más reconocidas (Sherwin-Williams, PPG, Benjamin Moore).'
        : 'We use top-tier paints, elastomeric coatings, and industrial primers from trusted brands.',
      icon: Sparkles,
    },
    {
      title: isEs ? 'Sitios de Trabajo Impecables' : 'Clean Job Sites',
      desc: isEs
        ? 'Limpieza diaria y retiro ordenado de residuos para que sus operaciones sigan sin interrupción.'
        : 'We leave your property neat and spotless every single day of the exterior project.',
      icon: CheckCircle2,
    },
    {
      title: isEs ? 'Garantía de Mano de Obra de 5 Años' : '5-Year Workmanship Warranty',
      desc: isEs
        ? 'Respaldamos la calidad de nuestro trabajo con una sólida garantía escrita por 5 años.'
        : 'We stand firmly behind our exterior craftsmanship with a 5-year written warranty.',
      icon: Shield,
    },
    {
      title: isEs ? 'Con Licencia, Fianza y Seguro ($2M+)' : 'Licensed & Insured',
      desc: isEs
        ? 'Cobertura total de responsabilidad civil y compensación para trabajadores para su absoluta tranquilidad.'
        : 'Comprehensive general liability and full workers\' compensation coverage on every job.',
      icon: FileText,
    },
  ];

  // Industries We Serve
  const industries = [
    {
      industry: isEs ? 'Oficinas Corporativas' : 'Corporate Offices',
      projects: isEs
        ? 'Parques de oficinas, torres corporativas, fachadas de edificios profesionales'
        : 'Office parks, high-rises, professional buildings',
      icon: Building2,
    },
    {
      industry: isEs ? 'Salud y Clínicas' : 'Healthcare',
      projects: isEs
        ? 'Hospitales, clínicas especializadas, edificios de consultorios médicos'
        : 'Hospitals, clinics, medical office buildings',
      icon: HeartPulse,
    },
    {
      industry: isEs ? 'Comercio Minorista y Hospitalidad' : 'Retail & Hospitality',
      projects: isEs
        ? 'Fachadas de tiendas, restaurantes, complejos hoteleros, centros comerciales'
        : 'Storefronts, restaurants, hotels, shopping centers',
      icon: ShoppingBag,
    },
    {
      industry: isEs ? 'Industrial y Manufactura' : 'Industrial',
      projects: isEs
        ? 'Bodegas logísticas, fábricas de producción, centros de distribución'
        : 'Warehouses, factories, distribution centers',
      icon: Factory,
    },
    {
      industry: isEs ? 'Multifamiliar y Residencial' : 'Multi-Family',
      projects: isEs
        ? 'Complejos de apartamentos, condominios, casas club, comunidades HOA'
        : 'Apartment complexes, condos, HOA communities',
      icon: Users,
    },
    {
      industry: isEs ? 'Educación e Institucional' : 'Education',
      projects: isEs
        ? 'Escuelas, campus universitarios, iglesias, centros comunitarios'
        : 'Schools, universities, churches, community centers',
      icon: School,
    },
    {
      industry: isEs ? 'Gobierno y Municipalidades' : 'Government',
      projects: isEs
        ? 'Edificios municipales, juzgados cívicos, instalaciones de servicios públicos'
        : 'Municipal buildings, courthouses, public facilities',
      icon: Landmark,
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
        ? '¿Cuánto tiempo tomará mi proyecto de pintura exterior comercial?'
        : 'How long will my exterior painting project take?',
      a: isEs
        ? 'Los plazos de ejecución varían según los metros cuadrados, la preparación de superficies requerida y las condiciones climáticas. La mayoría de los proyectos exteriores comerciales se completan en un plazo de 1 a 3 semanas. Le proporcionamos un cronograma detallado por escrito en su propuesta.'
        : 'Project timelines vary based on square footage, surface preparation, and weather conditions. Most commercial exterior projects are completed within 1-3 weeks. We provide a detailed schedule in your proposal.',
    },
    {
      q: isEs
        ? '¿Cuál es la mejor época del año para pintar un exterior comercial en Texas?'
        : 'What is the best time of year to paint a commercial exterior in Texas?',
      a: isEs
        ? 'La ventana ideal es durante primavera y otoño, cuando las temperaturas son moderadas y la humedad es más baja. Sin embargo, empleamos recubrimientos comerciales avanzados formulados para aplicarse en un rango muy amplio de condiciones. Monitoreamos el pronóstico meteorológico a diario y programamos las aplicaciones estratégicamente.'
        : 'The ideal window is spring and fall when temperatures are moderate and humidity is lower. However, we use premium coatings that can be applied in a wide range of conditions. We monitor weather closely and schedule accordingly.',
    },
    {
      q: isEs
        ? '¿Con qué frecuencia se debe repintar un edificio comercial?'
        : 'How often should a commercial building be repainted?',
      a: isEs
        ? 'Depende del sustrato, el tipo de recubrimiento y la orientación al sol. Generalmente, los edificios comerciales en Texas deben repintarse cada 5 a 10 años. Podemos inspeccionar su inmueble y diseñar un programa de mantenimiento preventivo.'
        : 'It depends on the substrate, coating type, and exposure. Generally, commercial buildings in Texas should be repainted every 5-10 years. We can assess your property and recommend a maintenance schedule.',
    },
    {
      q: isEs
        ? '¿Realizan lavado a presión antes de pintar?'
        : 'Do you pressure wash before painting?',
      a: isEs
        ? 'Sí. El lavado a presión es un paso indispensable en nuestro protocolo de preparación. Remueve polvo, moho, caleo y capas desprendidas, garantizando la perfecta adherencia química y mecánica de la nueva pintura.'
        : 'Yes. Pressure washing is a critical step in our preparation process. It removes dirt, mildew, chalk, and loose paint, ensuring proper adhesion of the new coating.',
    },
    {
      q: isEs
        ? '¿Reparan las superficies dañadas antes de pintar?'
        : 'Do you repair damaged surfaces before painting?',
      a: isEs
        ? 'Sí. Reparamos grietas, sellamos juntas, reparamos estuco deteriorado, reemplazamos madera podrida y resolvemos cualquier falla estructural subyacente. Creemos en solucionar los problemas de raíz, nunca en ocultarlos bajo pintura.'
        : 'Yes. We repair cracks, seal gaps, patch stucco, replace rotten wood, and address any underlying issues before painting. We believe in fixing problems, not hiding them.',
    },
    {
      q: isEs
        ? '¿Qué tipo de garantía ofrecen en pintura exterior?'
        : 'What type of warranty do you offer?',
      a: isEs
        ? 'Ofrecemos una garantía escrita de mano de obra de 5 años en todos nuestros proyectos de pintura exterior comercial. Si surge cualquier falla relacionada con nuestra aplicación, acudiremos a corregirla sin costo adicional.'
        : 'We offer a 5-year written workmanship warranty on all commercial exterior painting projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: isEs
        ? '¿Cuentan con licencias y seguros al día?'
        : 'Are you licensed and insured?',
      a: isEs
        ? 'Totalmente. Estamos debidamente autorizados, afianzados y respaldados por una póliza integral de responsabilidad civil general de más de $2M y compensación de trabajadores. Los certificados de seguro están disponibles de inmediato a solicitud.'
        : 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers\' compensation coverage. Certificates of insurance are available upon request.',
    },
    {
      q: isEs
        ? '¿Pueden trabajar adaptándose al horario de nuestro negocio?'
        : 'Can you work around our business hours?',
      a: isEs
        ? 'Sí. Comprendemos que sus instalaciones comerciales deben seguir operando y atendiendo público. Ofrecemos horarios flexibles, incluyendo trabajos en madrugadas, turnos vespertinos y fines de semana para evitar cualquier molestia.'
        : 'Yes. We understand that your business needs to operate. We offer flexible scheduling, including early morning, evening, and weekend work to minimize disruption.',
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
                {isEs ? 'Pintura Comercial de Exteriores' : 'Commercial Exterior Painting'}
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
                    Pintura Comercial de Exteriores Profesional en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Proteja su Inmueble con Acabados Resistentes al Clima - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Commercial Exterior Painting in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Durable Weather-Resistant Commercial Coatings - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Proteja su inversión y mejore el atractivo exterior de su propiedad con recubrimientos duraderos y resistentes al clima. Sirviendo al Metroplex de DFW con precisión y profesionalismo.'
                : 'Protect your investment and enhance your curb appeal with durable, weather-resistant exterior coatings. Serving the DFW Metroplex with precision and professionalism.'}
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
                <Sun className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Protección UV y Clima' : 'Weather-Resistant Coatings'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Award className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Seguridad en Altura Certificada' : 'Height Safety Certified'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <CheckCircle2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Garantía Escrita de 5 Años' : '5-Year Workmanship Warranty'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Seguro Comercial ($2M+)' : 'Licensed & Insured ($2M+)'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY EXTERIOR PAINTING MATTERS ("More Than Just Curb Appeal") ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5" />
              <span>{isEs ? 'PROTECCIÓN DE ACTIVOS COMERCIALES' : 'PROTECTION & ASSET VALUE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Más que Simple Atractivo Visual' : 'More Than Just Curb Appeal'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'El exterior de su edificio es la primera carta de presentación ante clientes, inquilinos e inversionistas. Pero la pintura exterior no es solo estética: es la primera línea de protección de su propiedad.'
                : "Your building's exterior is the first thing clients, tenants, and investors see. But exterior painting is about more than aesthetics—it's about protection."}
            </p>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/commercial-exterior.jpg"
                  alt={isEs ? "Pintura comercial de exteriores en Dallas" : "Commercial exterior painting in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Protección Climatológica Extrema' : 'Weather-Resistant Architectural Finish'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Texas Climate Reality Callout */}
          <div className="max-w-5xl mx-auto mb-12 p-6 sm:p-8 rounded-2xl bg-amber-500/[0.07] border border-amber-500/20 text-slate-800 flex flex-col md:flex-row items-center gap-6">
            <div className="size-14 rounded-2xl bg-amber-500/20 text-amber-700 flex items-center justify-center shrink-0">
              <Flame className="size-7" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {isEs ? 'El Clima de Texas no Da Tregua' : 'The Brutal Texas Climate Takes a Toll'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Desde veranos abrasadores y radiación UV extrema hasta tormentas torrenciales y cambios bruscos de temperatura, su propiedad comercial recibe impactos constantes todo el año. Sin los recubrimientos exteriores adecuados, se arriesga a daños estructurales severos.'
                  : 'From scorching summers and intense UV rays to unpredictable storms and sudden temperature swings, your commercial property takes a beating year-round. Without proper exterior coatings, you risk significant long-term damage:'}
              </p>
            </div>
          </div>

          {/* 4 Risks Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {/* Risk 1 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <AlertCircle className="size-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Deterioro Prematuro' : 'Premature Deterioration'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Desgaste acelerado y agrietamiento de revestimientos, estuco, tableros y mampostería.'
                    : 'Rapid degradation and cracking of siding, stucco, fiber cement, and masonry substrates.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-red-600 flex items-center gap-1">
                <span>{isEs ? 'Riesgo Crítico' : 'High Structural Risk'}</span>
              </div>
            </div>

            {/* Risk 2 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Droplets className="size-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Reparaciones Costosas por Humedad' : 'Costly Moisture Intrusion'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Filtraciones de agua, pudrición de madera, moho interno y fallas estructurales ocultas.'
                    : 'Water intrusion, wood rot, interior drywall mold, and expensive structural repairs.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-red-600 flex items-center gap-1">
                <span>{isEs ? 'Riesgo de Filtración' : 'Water Damage Hazard'}</span>
              </div>
            </div>

            {/* Risk 3 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Sun className="size-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Decoloración y Caleo' : 'Fading & Chalking'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Pérdida de color y textura polvosa causada por los rayos UV que dan apariencia de abandono.'
                    : 'UV breakdown causing powdery chalking, fading, and an unkempt, neglected property appearance.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-red-600 flex items-center gap-1">
                <span>{isEs ? 'Impacto en Imagen' : 'Brand Perception Loss'}</span>
              </div>
            </div>

            {/* Risk 4 */}
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Building className="size-6" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Pérdida de Valor Patrimonial' : 'Reduced Property Value'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Menor satisfacción de inquilinos, dificultades de arrendamiento y pérdida de plusvalía.'
                    : 'Lower tenant satisfaction, lease renegotiation leverage loss, and declining commercial appraisal.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-red-600 flex items-center gap-1">
                <span>{isEs ? 'Impacto Financiero' : 'Valuation Impact'}</span>
              </div>
            </div>
          </div>

          {/* Protective Solution Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#020F1D] via-[#062F57] to-[#020F1D] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-[#EF3340]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-2">
                  <ShieldCheck className="size-3.5" />
                  <span>{isEs ? 'LA SOLUCIÓN DE PAINTING DALLAS' : 'THE PAINTING DALLAS SOLUTION'}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                  {isEs
                    ? 'En Painting Dallas nos especializamos en sistemas de pintura exterior de grado comercial diseñados para resistir el clima de DFW y proteger su inversión durante muchos años.'
                    : 'At Painting Dallas, we specialize in commercial-grade exterior painting systems designed to withstand the DFW climate and protect your investment for years to come.'}
                </p>
              </div>
              <Link
                href="/free-estimate"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105"
              >
                <span>{isEs ? 'Proteger mi Inmueble' : 'Protect My Property'}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR COMMERCIAL EXTERIOR PAINTING SERVICES (6 Specialized Sectors) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'SOLUCIONES EXTERIORES COMPLETAS' : 'COMPREHENSIVE EXTERIOR SOLUTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Nuestros Servicios de Pintura Comercial de Exteriores'
                : 'Our Commercial Exterior Painting Services'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Ofrecemos un espectro completo de servicios de pintura exterior adaptados a las exigencias específicas de cada tipo de propiedad en el Metroplex DFW.'
                : 'We provide a full spectrum of exterior painting services tailored to the unique needs of commercial properties across the DFW Metroplex.'}
            </p>
          </div>

          {/* 6 Specialized Sector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {exteriorServices.map((service) => {
              const ServiceIcon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white rounded-2xl border border-slate-200 hover:border-[#EF3340]/40 p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Header: Icon + Tag */}
                    <div className="flex items-center justify-between gap-3 mb-6">
                      <div className="size-14 rounded-2xl bg-[#062F57]/10 text-[#062F57] flex items-center justify-center group-hover:bg-[#EF3340] group-hover:text-white transition-colors duration-300 shadow-sm">
                        <ServiceIcon className="size-7" />
                      </div>
                      <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#062F57] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
                      {service.desc}
                    </p>
                  </div>

                  {/* Perfect For Section */}
                  <div className="pt-5 border-t border-slate-100 mt-2">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                      {isEs ? 'Ideal para:' : 'Perfect for:'}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.perfectFor.map((item, idx) => (
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

      {/* ── SECTION 4: EXTERIOR SURFACES WE PAINT (7 Substrates Matrix) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Wrench className="size-3.5" />
              <span>{isEs ? 'DOMINIO EN TODOS LOS SUSTRATOS' : 'EXPERTISE ACROSS ALL SUBSTRATES'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Superficies Exteriores que Pintamos' : 'Exterior Surfaces We Paint'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Diferentes superficies requieren métodos de preparación y recubrimientos específicos. Nuestro equipo tiene la experiencia para tratar cualquier sustrato exterior.'
                : 'Different surfaces require different preparation methods and coatings. Our team has the expertise to handle any exterior substrate.'}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020F1D] text-white text-xs uppercase tracking-wider font-black">
                  <th className="py-4 px-6 w-1/4">{isEs ? 'Tipo de Superficie' : 'Surface Type'}</th>
                  <th className="py-4 px-6">{isEs ? 'Nuestro Enfoque Técnico' : 'Our Approach'}</th>
                  <th className="py-4 px-6 w-1/4">{isEs ? 'Beneficio Clave' : 'Key Advantage'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {exteriorSurfaces.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#EF3340]" />
                      <span>{item.surface}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                      {item.approach}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 text-xs">
                        <Check className="size-3 text-[#EF3340]" />
                        <span>{item.highlight}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="grid grid-cols-1 gap-4 md:hidden max-w-2xl mx-auto">
            {exteriorSurfaces.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-slate-900 text-base">{item.surface}</h4>
                  <span className="text-[11px] font-bold text-[#EF3340] bg-[#EF3340]/10 px-2.5 py-0.5 rounded-full">
                    {item.highlight}
                  </span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR PROVEN EXTERIOR PAINTING PROCESS (7 Steps) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <FileText className="size-3.5" />
              <span>{isEs ? 'METODOLOGÍA RIGUROSA' : 'A STRUCTURED APPROACH'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Nuestro Proceso Comprobado de Pintura Exterior'
                : 'Our Proven Exterior Painting Process'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Seguimos un proceso riguroso de 7 pasos para garantizar que cada proyecto se complete a tiempo, dentro del presupuesto y con los estándares más altos.'
                : 'We follow a rigorous 7-step process to ensure every project is completed on time, on budget, and to the highest standard.'}
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

      {/* ── SECTION 6: THE IMPORTANCE OF PROPER SURFACE PREPARATION ("Why Preparation is 80% of the Job") ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Droplets className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'EL 80% DEL ÉXITO EN PINTURA EXTERIOR' : 'WHY PREPARATION IS 80% OF THE JOB'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'La Importancia de una Preparación de Superficie Impecable'
                : 'The Importance of Proper Surface Preparation'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'Un trabajo de pintura solo es tan duradero como la superficie que tiene debajo. Por eso invertimos fuertemente en una preparación meticulosa: es la diferencia entre un acabado que dura 2 años y uno que dura 10.'
                : "A beautiful paint job is only as good as the surface beneath it. That's why we invest heavily in proper preparation—it's the difference between a finish that lasts 2 years and one that lasts 10."}
            </p>
          </div>

          {/* 5 Prep Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {prepPillars.map((prep, idx) => {
              const PrepIcon = prep.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4 shadow-sm">
                      <PrepIcon className="size-6 text-[#EF3340]" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{prep.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{prep.desc}</p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/70 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                    <span>{isEs ? 'Paso Estándar Obligatorio' : 'Non-Negotiable Protocol'}</span>
                  </div>
                </div>
              );
            })}

            {/* Prep Guarantee Card */}
            <div className="bg-gradient-to-br from-[#020F1D] to-[#062F57] text-white rounded-2xl p-6 border border-white/15 shadow-xl flex flex-col justify-between">
              <div>
                <div className="size-12 rounded-xl bg-[#EF3340] text-white flex items-center justify-center mb-4">
                  <ShieldCheck className="size-6" />
                </div>
                <h3 className="text-lg font-black mb-2 text-white">
                  {isEs ? 'Nunca Escatimamos en Preparación' : 'We Never Cut Corners on Prep'}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {isEs
                    ? 'Garantizamos que cada metro cuadrado esté lavado, reparado, sellado e imprimado antes de abrir la primera cubeta de pintura exterior.'
                    : 'We never cut corners on prep. Ever. Every square foot is washed, sealed, primed, and inspected.'}
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-white/10 text-xs font-black text-[#EF3340] uppercase tracking-wider">
                {isEs ? 'Garantía Escrita de 5 Años' : 'Backed by 5-Year Warranty'}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: WHAT SETS PAINTING DALLAS APART ("The Painting Dallas Advantage") ─── */}
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
                ? 'Cuando nos contrata para su proyecto de pintura exterior, obtiene mucho más que pintura: obtiene un socio dedicado a proteger el valor de su inversión.'
                : 'When you hire us for your exterior painting project, you get more than just paint. You get a partner dedicated to protecting your investment.'}
            </p>
          </div>

          {/* 8 Advantage Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                    <span>{isEs ? 'Compromiso Certificado' : 'Certified Standard'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: INDUSTRIES WE SERVE ("Trusted Across Diverse Commercial Sectors") ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Building className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'EXPERIENCIA SECTORIAL' : 'TRUSTED ACROSS DIVERSE SECTORS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Industrias que Atendemos' : 'Industries We Serve'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Conocemos los requisitos técnicos, de andamiaje y de durabilidad que exige cada sector comercial e industrial en Texas.'
                : 'Tailored exterior painting solutions engineered for the specific functional and safety needs of commercial facilities.'}
            </p>
          </div>

          {/* Clean Modern Industries Table */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-black border-b border-slate-200">
                  <th className="py-4 px-6 w-2/5">{isEs ? 'Sector / Industria' : 'Industry'}</th>
                  <th className="py-4 px-6">{isEs ? 'Proyectos Típicos de Pintura Exterior' : 'Common Projects'}</th>
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

      {/* ── SECTION 9: SERVICE AREAS (5 Counties & 50-Mile Radius) ─── */}
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
                ? 'Brindamos servicios de pintura comercial de exteriores en un radio de 50 millas alrededor de Dallas, incluyendo:'
                : 'We provide commercial exterior painting services within a 50-mile radius of Dallas, including:'}
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
                  <span>{isEs ? 'Cuadrillas Exteriores Activas' : 'Active Crews Dispatched'}</span>
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
                    ? 'Llámenos al (469) 368-5885; lo más seguro es que sí tengamos cobertura para su propiedad.'
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

      {/* ── SECTION 10: FREQUENTLY ASKED QUESTIONS (Interactive FAQ Accordion) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Sun className="size-3.5" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'COMMON QUESTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preguntas Frecuentes sobre Pintura Exterior Comercial'
                : 'Frequently Asked Questions'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Respuestas directas a las preguntas que los gerentes de instalaciones y propietarios nos hacen con más frecuencia.'
                : 'Common questions property managers, general contractors, and facility owners ask us most.'}
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

      {/* ── SECTION 11: READY TO PROTECT & ENHANCE YOUR PROPERTY? & TRUST BADGES ─── */}
      <section className="py-20 bg-gradient-to-b from-[#020F1D] via-[#062F57] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,51,64,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="site-shell relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span className="text-white">
              {isEs ? 'DELE NUEVA VIDA A SU FACHADA' : 'LET’S BRING YOUR EXTERIOR BACK TO LIFE'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-md">
            {isEs
              ? '¿Listo para Proteger y Realzar su Propiedad?'
              : 'Ready to Protect & Enhance Your Property?'}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-4">
            {isEs
              ? 'Ya sea que esté renovando un solo edificio o repintando un campus completo, Painting Dallas está listo para entregar resultados sobresalientes.'
              : "Whether you're refreshing a single building or repainting an entire campus, Painting Dallas is ready to deliver."}
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
