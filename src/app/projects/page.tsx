'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EstimateModal } from '@/components/EstimateModal';
import { ServiceDetailModal } from '@/components/ServiceDetailModal';
import { ProjectDetailModal } from '@/components/ProjectDetailModal';
import { MobileStickyBar } from '@/components/MobileStickyBar';
import { useLanguage } from '@/context/LanguageContext';
import { ProjectItem } from '@/data/translations';
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
  Paintbrush,
  Droplets,
  ChevronRight,
  ChevronDown,
  Users,
  Check,
  Zap,
  Sparkles,
  ZoomIn,
  CalendarCheck,
  Factory,
  Layers,
  Wrench,
  Flame,
  FileText,
  HelpCircle,
  SlidersHorizontal,
  FolderKanban,
  CheckCircle,
} from 'lucide-react';

interface ExtendedProjectItem extends ProjectItem {
  duration?: string;
  coatingSystem?: string;
  clientType?: string;
  highlights?: string;
}

export default function ProjectsPage() {
  const { language, openEstimateModal, openProjectModal } = useLanguage();
  const isEs = language === 'es';

  // Filter state
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Full 12-item verified commercial portfolio
  const projectsData: ExtendedProjectItem[] = useMemo(
    () => [
      {
        id: 'p1',
        title: isEs
          ? 'Atrio y Sede Corporativa de Oficinas'
          : 'Corporate Office Atrium & Headquarters',
        category: 'office',
        categoryLabel: isEs ? 'Oficinas y Corporativos' : 'Office & Corporate',
        location: 'Dallas, TX (Downtown)',
        scope: isEs
          ? 'Aplicación arquitectónica en atrio de gran altura, recubrimiento de techos acústicos y muros de acento ejecutivos.'
          : 'High-bay architectural atrium spraying, acoustic ceiling recoating, executive accent walls.',
        image: '/images/services/commercial-interior.jpg',
        sqft: '48,000 Sq. Ft.',
        completionTime: isEs
          ? 'Completado en turnos nocturnos sin interrupción'
          : 'Completed on scheduled weekend off-hours',
        duration: isEs ? '3 Semanas (Turno Nocturno)' : '3 Weeks (Night Shifts)',
        coatingSystem:
          'Sherwin-Williams ProMar 200 Zero-VOC & High-Bay Acrylic Enamel',
        clientType: isEs
          ? 'Sede Corporativa de Servicios Financieros'
          : 'Fortune 500 Financial Services Headquarters',
        highlights: isEs
          ? 'Cero interrupción para 1,200 colaboradores; filtración HEPA continua; garantía de 5 años.'
          : 'Zero disruption to 1,200 daytime employees; HEPA air scrubber containment; 5-year warranty.',
      },
      {
        id: 'p2',
        title: isEs
          ? 'Plaza Comercial y Canopias en North Dallas'
          : 'North Dallas Retail Plaza & Canopy Architecture',
        category: 'retail',
        categoryLabel: isEs ? 'Comercio y Retail' : 'Retail & Commercial',
        location: 'Plano, TX (Legacy West Corridor)',
        scope: isEs
          ? 'Pintura exterior completa de fachada, canopias metálicas comerciales, cancelería de aluminio y pretiles.'
          : 'Commercial exterior canopy coating, architectural parapets, storefront aluminum frames.',
        image: '/images/projects/retail-center.jpg',
        sqft: '34,500 Sq. Ft.',
        completionTime: isEs
          ? 'Cero impacto en ventas comerciales'
          : 'Zero retail store disruption',
        duration: isEs ? '2.5 Semanas' : '2.5 Weeks',
        coatingSystem:
          'PPG Sun-Proof 100% Acrylic Exterior & Matthews Architectural Polyurethane',
        clientType: isEs
          ? 'Fondo de Inversión Inmobiliaria Comercial (REIT)'
          : 'Premier Commercial Real Estate REIT',
        highlights: isEs
          ? 'Ejecución por fases con corredores seguros de tránsito peatonal y protección solar UV.'
          : 'Phased storefront execution with zero store downtime and full pedestrian safety corridors.',
      },
      {
        id: 'p3',
        title: isEs
          ? 'Centro Logístico y de Distribución de Gran Altura'
          : 'Metroplex High-Bay Logistics & Distribution Center',
        category: 'industrial',
        categoryLabel: isEs ? 'Industrial y Logística' : 'Industrial & Logistics',
        location: 'Grand Prairie, TX (DFW Airport Submarket)',
        scope: isEs
          ? 'Pintura dryfall blanca en estructura de techo metálica, piso epóxico de alta resistencia y señalización vial.'
          : 'Structural steel ceiling spray, heavy-duty epoxy floor coating, safety lane striping.',
        image: '/images/projects/warehouse-distribution.jpg',
        sqft: '125,000 Sq. Ft.',
        completionTime: isEs
          ? 'Cronograma escalonado por zonas'
          : 'Phased industrial shutdown schedule',
        duration: isEs ? '4 Semanas (Por Zonas)' : '4 Weeks (Phased Delivery)',
        coatingSystem:
          'Carboline High-Solids Epoxy Floor System & Sherwin-Williams Dryfall White',
        clientType: isEs
          ? 'Centro Nacional de Cumplimiento Logístico 3PL'
          : 'National E-Commerce 3PL Fulfillment Facility',
        highlights: isEs
          ? 'Resistencia total a montacargas, barrera contra vapor de humedad y entrega antes del plazo de arrendamiento.'
          : 'Forklift impact resistant, moisture vapor barrier applied, completed ahead of tenant lease date.',
      },
      {
        id: 'p4',
        title: isEs
          ? 'Torre Comercial Corporativa de Múltiples Pisos'
          : 'Multi-Story Corporate Commercial Tower',
        category: 'building',
        categoryLabel: isEs ? 'Torres Comerciales' : 'Commercial Towers',
        location: 'Dallas, TX (North Central Expressway)',
        scope: isEs
          ? 'Pintura exterior con plataformas elevadoras, reparación de desprendimientos de concreto y sellado elastomérico.'
          : 'High-reach boom lift exterior painting, concrete spall patching, elastomeric sealants.',
        image: '/images/services/commercial-building.jpg',
        sqft: '85,000 Sq. Ft.',
        completionTime: isEs
          ? 'Ejecutado con canastillas y plataformas articuladas'
          : 'Executed with swing stages & boom lifts',
        duration: isEs ? '5 Semanas' : '5 Weeks',
        coatingSystem:
          'Sherwin-Williams ConFlex Ultra Elastomeric High-Build Coating',
        clientType: isEs
          ? 'Grupo Administrador de Edificios de Oficinas'
          : 'Commercial Office Asset Management Group',
        highlights: isEs
          ? 'Sellado impermeable contra lluvias torrenciales de Texas, alta reflectancia térmica y garantía por escrito.'
          : '100% wind-driven rain elastomeric barrier, UV solar reflectance, and written warranty.',
      },
      {
        id: 'p5',
        title: isEs
          ? 'Pabellón Médico y Centro de Salud del Norte de Texas'
          : 'North Texas Healthcare & Medical Pavilion',
        category: 'healthcare',
        categoryLabel: isEs ? 'Salud y Clínicas' : 'Healthcare & Medical',
        location: 'Frisco, TX',
        scope: isEs
          ? 'Renovación de estuco exterior, pasillos clínicos de alto tráfico y recubrimientos higiénicos en salas de examen.'
          : 'Medical pavilion exterior stucco renewal, antimicrobial clinic corridors, exam room coatings.',
        image: '/images/projects/medical-plaza.jpg',
        sqft: '52,000 Sq. Ft.',
        completionTime: isEs
          ? 'Protocolo sanitario hospitalario estricto'
          : 'Strict medical infection control protocol',
        duration: isEs ? '3 Semanas' : '3 Weeks',
        coatingSystem:
          'Sherwin-Williams Harmony Zero-VOC & Paint Shield Microbicidal Coating',
        clientType: isEs
          ? 'Red Hospitalaria y Centro de Cirugía Ambulatoria'
          : 'Regional Healthcare Network & Surgical Center',
        highlights: isEs
          ? 'Cero olores químicos, recubrimientos que inhiben bacterias, máxima durabilidad ante lavado clínico.'
          : 'Zero odor, EPA-registered microbicidal wall coatings, hospital-grade sanitized hand-off.',
      },
      {
        id: 'p6',
        title: isEs
          ? 'Sede de Campus Corporativo de Tecnología Legacy'
          : 'Legacy Tech Corporate Campus Headquarters',
        category: 'office',
        categoryLabel: isEs ? 'Oficinas y Corporativos' : 'Office & Corporate',
        location: 'Plano, TX',
        scope: isEs
          ? 'Pintura exterior de 3 edificios del campus, recubrimiento de puentes peatonales de acero y muros de patio interior.'
          : 'Three-building corporate campus exterior coating, pedestrian steel bridges, architectural courtyards.',
        image: '/images/projects/corporate-campus.jpg',
        sqft: '160,000 Sq. Ft.',
        completionTime: isEs
          ? 'Garantía integral de 5 años por escrito'
          : 'Comprehensive 5-year written warranty',
        duration: isEs ? '6 Semanas' : '6 Weeks',
        coatingSystem:
          'Benjamin Moore Ultra Spec Commercial 500 & Tnemec Fluoropolymer Trim',
        clientType: isEs
          ? 'Corporación Global de Software'
          : 'Global Enterprise Software Campus',
        highlights: isEs
          ? 'Coordinación con seguridad del campus, respeto ecológico de bajas emisiones y acabado ultra duradero.'
          : 'Coordinated access with campus security, low environmental footprint, 5-year full guarantee.',
      },
      {
        id: 'p7',
        title: isEs
          ? 'Restauración de Fachada Histórica en West End'
          : 'Historic West End Commercial Facade Restoration',
        category: 'restoration',
        categoryLabel: isEs ? 'Restauración Histórica' : 'Historic Restoration',
        location: 'Downtown Dallas, TX (Historic District)',
        scope: isEs
          ? 'Estabilización de ladrillo y mampostería histórica, remoción de eflorescencia y recubrimiento mineral transpirable.'
          : 'Masonry stabilization, chemical cleaning, historic profile coating renewal.',
        image: '/images/services/commercial-restoration.jpg',
        sqft: '28,000 Sq. Ft.',
        completionTime: isEs
          ? 'Restauración con andamiaje multinivel'
          : 'Multi-tiered scaffolding restoration',
        duration: isEs ? '4 Semanas' : '4 Weeks',
        coatingSystem:
          'Keim Mineral Breathable Silicate Coatings & Prosoco Heritage Restorer',
        clientType: isEs
          ? 'Fideicomiso de Conservación Arquitectónica'
          : 'Historic Preservation Commercial Landlord',
        highlights: isEs
          ? 'Protege la mampostería sin atrapar humedad interior; aprobada por lineamientos de patrimonio histórico.'
          : 'Preserves 1920s heritage brick while establishing a waterproof yet breathable moisture shield.',
      },
      {
        id: 'p8',
        title: isEs
          ? 'Planta de Manufactura e Instalación Química Pesada'
          : 'Heavy Industrial Manufacturing & Chemical Facility',
        category: 'industrial',
        categoryLabel: isEs ? 'Industrial y Logística' : 'Industrial & Logistics',
        location: 'Fort Worth, TX',
        scope: isEs
          ? 'Chorreo abrasivo en pasarelas de acero (SSPC-SP 10), recubrimientos epóxicos resistentes a ácidos y pintura de seguridad.'
          : 'Steel catwalk abrasive blasting (SSPC-SP 10), chemical containment tank coatings, structural corrosion defense.',
        image: '/images/services/industrial-painting.jpg',
        sqft: '92,000 Sq. Ft.',
        completionTime: isEs
          ? 'Personal certificado en espacios confinados OSHA'
          : 'OSHA Confined Space certified crew',
        duration: isEs ? '3.5 Semanas' : '3.5 Weeks',
        coatingSystem:
          'Sherwin-Williams Macropoxy 646 & Hi-Solids Polyurethane Topcoat',
        clientType: isEs
          ? 'Fabricante de Componentes Aeroespaciales de Precisión'
          : 'Precision Aerospace Components Fabricator',
        highlights: isEs
          ? 'Inspecciones NACE Nivel 3 de espesor seco (DFT); resistencia extrema a vapores químicos y abrasión.'
          : 'NACE Level 3 DFT inspections; extreme resistance to harsh chemicals, fuels, and abrasive wear.',
      },
      {
        id: 'p9',
        title: isEs
          ? 'Mantenimiento de Parque Empresarial en Northwest Dallas'
          : 'Northwest Dallas Business Park & Facility Maintenance',
        category: 'building',
        categoryLabel: isEs ? 'Torres Comerciales' : 'Commercial Towers',
        location: 'Carrollton, TX',
        scope: isEs
          ? 'Pintura exterior de 6 edificios, portones seccionales de carga, pasillos de servicio y señalización de estacionamiento.'
          : 'Colonnade exterior repainting, common corridor refreshes, architectural metal coating.',
        image: '/images/services/property-facility.jpg',
        sqft: '74,000 Sq. Ft.',
        completionTime: isEs
          ? 'Contrato de mantenimiento preventivo continuo'
          : 'Ongoing property management contract',
        duration: isEs ? 'Contrato Anual Continuo' : 'Annual Ongoing Contract',
        coatingSystem:
          'PPG Speedhide Commercial Latex & Pitt-Tech Plus Waterborne Acrylic Epoxies',
        clientType: isEs
          ? 'Administradora Nacional de Inmuebles Industriales'
          : 'National Commercial Property Management REIT',
        highlights: isEs
          ? 'Respuesta inmediata de 48 horas para cambios de inquilinos y estandarización exacta de colores.'
          : 'Standardized master color specifications across 6 buildings with rapid 48-hour turnarounds.',
      },
      {
        id: 'p10',
        title: isEs
          ? 'Exterior Corporativo Moderno de Vidrio y Acero'
          : 'Modern Glass & Steel Executive Headquarters Exterior',
        category: 'retail',
        categoryLabel: isEs ? 'Comercio y Retail' : 'Retail & Commercial',
        location: 'Irving, TX (Las Colinas)',
        scope: isEs
          ? 'Reacondicionamiento de perfiles de aluminio en muros cortina, protección solar y recubrimiento de marcos arquitectónicos.'
          : 'Multi-story curtain wall exterior metal reconditioning, architectural overhang coatings, entrance portals.',
        image: '/images/services/commercial-exterior.jpg',
        sqft: '56,000 Sq. Ft.',
        completionTime: isEs
          ? 'Garantía contra decoloración por rayos UV'
          : 'High UV gloss retention guarantee',
        duration: isEs ? '3 Semanas' : '3 Weeks',
        coatingSystem:
          'Tnemec Endura-Shield Polyurethane & Corothane Moisture-Cure Urethane',
        clientType: isEs
          ? 'Firma Desarrolladora de Bienes Raíces Comerciales'
          : 'Commercial Real Estate Development Firm',
        highlights: isEs
          ? 'Retención de brillo superior ante el calor extremo de Dallas; plataformas articuladas con certificación OSHA.'
          : 'High UV degradation resistance, long-term gloss retention under Texas sun, certified boom access.',
      },
      {
        id: 'p11',
        title: isEs
          ? 'Preparación y Lavado a Presión de Concreto Logístico'
          : 'Commercial Logistics Concrete Substrate Profiling & Power Wash',
        category: 'specialty',
        categoryLabel: isEs ? 'Recubrimientos Especiales' : 'Specialty Coatings',
        location: 'Arlington, TX',
        scope: isEs
          ? 'Lavado a presión con agua caliente a 4,000 PSI, desengrase químico ecológico y perfilado mecánico de losas.'
          : 'Industrial parking structure power washing, oil stain chemical remediation, CSP 2 concrete profiling.',
        image: '/images/services/pressure-washing.jpg',
        sqft: '65,000 Sq. Ft.',
        completionTime: isEs
          ? 'Perfilado de concreto CSP 2 verificado'
          : 'CSP 2 concrete profile verified',
        duration: isEs ? '1.5 Semanas' : '1.5 Weeks',
        coatingSystem:
          'Hot-Water 4,000 PSI Surface Prep & Eco-Friendly Degreasing Chemistry',
        clientType: isEs
          ? 'Operador de Centro de Distribución Regional'
          : 'Regional Distribution Hub Operator',
        highlights: isEs
          ? 'Removió 100% de caucho y grasa pesada de montacargas sin desgastar la resistencia superficial del concreto.'
          : 'Eliminated 100% of tire rubber and petrochemical grease without damaging high-load industrial concrete.',
      },
      {
        id: 'p12',
        title: isEs
          ? 'Pisos Epóxicos de Alto Rendimiento para Sala Limpia Aeroespacial'
          : 'High-Performance Aerospace Cleanroom & Epoxy Showroom Flooring',
        category: 'specialty',
        categoryLabel: isEs ? 'Recubrimientos Especiales' : 'Specialty Coatings',
        location: 'McKinney, TX',
        scope: isEs
          ? 'Desbaste con diamante, imprimación supresora de humedad, sistema autonivelante epóxico y sellador poliaspártico.'
          : 'Diamond grinding substrate prep, moisture vapor suppression epoxy, electrostatic discharge (ESD) flooring.',
        image: '/images/services/specialty-coatings.jpg',
        sqft: '38,000 Sq. Ft.',
        completionTime: isEs
          ? 'Acabado espejo grado sala limpia libre de juntas'
          : 'Seamless cleanroom mirror finish delivered',
        duration: isEs ? '2 Semanas' : '2 Weeks',
        coatingSystem:
          '100% Solids Self-Leveling Epoxy & High-Gloss Polyaspartic Urethane Topcoat',
        clientType: isEs
          ? 'Laboratorio de Microelectrónica Aeroespacial y Defensa'
          : 'Aerospace & Defense Electronics Cleanroom',
        highlights: isEs
          ? 'Superficie no porosa impenetrable a solventes, grado estéril antibacteriano y altísima resistencia a tráfico pesado.'
          : 'Mirror-like ultra-reflective finish, non-porous chemical resistance, seamless anti-microbial cleanroom compliance.',
      },
    ],
    [isEs]
  );

  // Category filter tabs
  const categories = useMemo(
    () => [
      { id: 'all', label: isEs ? 'Todos los Proyectos' : 'All Projects' },
      { id: 'office', label: isEs ? 'Oficinas y Atrios' : 'Office & Corporate' },
      { id: 'retail', label: isEs ? 'Comercio y Retail' : 'Retail & Commercial' },
      { id: 'industrial', label: isEs ? 'Industrial y Logística' : 'Industrial & Logistics' },
      { id: 'building', label: isEs ? 'Torres Comerciales' : 'Commercial Towers' },
      { id: 'healthcare', label: isEs ? 'Salud y Clínicas' : 'Healthcare & Medical' },
      { id: 'restoration', label: isEs ? 'Restauración Histórica' : 'Historic Restoration' },
      { id: 'specialty', label: isEs ? 'Recubrimientos Especiales' : 'Specialty Coatings' },
    ],
    [isEs]
  );

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projectsData;
    return projectsData.filter((item) => item.category === selectedCategory);
  }, [projectsData, selectedCategory]);

  // Frequently Asked Questions
  const faqs = [
    {
      q: isEs
        ? '¿Cómo organizan los horarios de trabajo para evitar la interrupción de nuestro negocio?'
        : 'How do you coordinate project work hours to avoid business disruption?',
      a: isEs
        ? 'Más del 70% de nuestros proyectos comerciales se ejecutan en turnos nocturnos y fines de semana. Dividimos las instalaciones en zonas de trabajo aisladas con contención de polvo, filtros de aire HEPA y pinturas comerciales sin olor (Zero-VOC), permitiendo que sus operaciones continúen sin pérdida de ingresos.'
        : 'Over 70% of our commercial projects are scheduled during night shifts and weekends. We phase facilities into contained working zones with dust barriers, HEPA air filtration, and zero-VOC odorless coatings, ensuring your daily business operations continue seamlessly.',
    },
    {
      q: isEs
        ? '¿Qué marcas y especificaciones de pintura comercial utilizan?'
        : 'What commercial paint and coating systems do you specify?',
      a: isEs
        ? 'Trabajamos exclusivamente con sistemas comerciales de grado industrial de fabricantes líderes globales: Sherwin-Williams (ProMar 200, Macropoxy, ConFlex, Harmony), PPG (Sun-Proof, Pitt-Tech), Benjamin Moore (Ultra Spec Commercial 500) y recubrimientos especiales de alto desempeño como Tnemec y Carboline.'
        : 'We specify only commercial and industrial grade coating systems from top manufacturers: Sherwin-Williams (ProMar 200, Macropoxy, ConFlex, Harmony), PPG (Sun-Proof, Pitt-Tech), Benjamin Moore (Ultra Spec Commercial 500), and high-performance specialty brands like Tnemec and Carboline.',
    },
    {
      q: isEs
        ? '¿Qué pólizas de seguro y certificaciones de seguridad tienen sus cuadrillas?'
        : 'What insurance coverage and safety certifications do your crews maintain?',
      a: isEs
        ? 'Painting Dallas cuenta con una póliza de responsabilidad civil comercial de más de $2,000,000, compensación integral para trabajadores y fianzas vigentes. Todos nuestros supervisores están certificados en OSHA 30, y nuestros operadores están certificados para plataformas de elevación (boom & scissor lifts) y espacios confinados.'
        : 'Painting Dallas carries $2,000,000+ in comprehensive commercial general liability insurance, full statutory workers’ compensation, and commercial bonding. All on-site supervisors are OSHA 30 certified, and aerial lift operators are fully trained and certified.',
    },
    {
      q: isEs
        ? '¿Cómo calculan el presupuesto comercial y manejan cambios en el proyecto?'
        : 'How do you estimate commercial square footage and manage change orders?',
      a: isEs
        ? 'Realizamos levantamientos arquitectónicos detallados en sitio con medidores láser y evaluamos la condición del sustrato. Entregamos propuestas formales con precio fijo desglosado por partidas. No comenzamos ningún trabajo imprevisto sin un acuerdo de cambio de orden (Change Order) por escrito y aprobado por usted.'
        : 'We perform on-site laser takeoffs and thorough substrate evaluations. Every commercial bid is a detailed, line-item, fixed-price proposal. We never perform unauthorized extra work without a clear, written, client-approved Change Order.',
    },
    {
      q: isEs
        ? '¿Pueden igualar los colores corporativos exactos de nuestra marca?'
        : 'Can you match our exact corporate brand Pantone or RAL color standards?',
      a: isEs
        ? 'Absolutamente. Utilizamos espectrofotómetros digitales de grado laboratorio para formular igualaciones cromáticas exactas para sus colores de marca corporativa, franquicia o manual de identidad, garantizando consistencia absoluta en todas sus sedes.'
        : 'Yes. We use digital spectrophotometer technology to formulate exact color matches for your corporate Pantone, RAL, or brand identity guidelines, guaranteeing absolute consistency across all your properties.',
    },
    {
      q: isEs
        ? '¿Qué garantía por escrito ofrecen en proyectos comerciales?'
        : 'What written warranties do you provide on commercial painting projects?',
      a: isEs
        ? 'Ofrecemos una garantía de mano de obra por escrito de 5 años que cubre descascaramiento, ampollamiento y fallas de adherencia. Además, muchos de los recubrimientos industriales que aplicamos cuentan con garantías de fabricante de hasta 10 a 20 años.'
        : 'We provide a 5-year written workmanship warranty covering peeling, blistering, and adhesion failure. Additionally, many of our industrial and architectural coatings carry 10-to-20 year manufacturer material warranties.',
    },
    {
      q: isEs
        ? '¿Cómo garantizan la seguridad en trabajos de gran altura y fachadas en Dallas?'
        : 'How do you manage safety and equipment for high-reach exterior facades?',
      a: isEs
        ? 'Disponemos de flotas de plataformas articuladas (boom lifts) de hasta 120 pies, canastillas suspendidas (swing stages) y andamiaje certificado. Establecemos perímetros de exclusión peatonales con señalización clara y usamos líneas de vida y arneses dobles conformes con los estándares de OSHA.'
        : 'We deploy certified aerial boom lifts up to 120 feet, suspended swing stages, and engineered scaffolding. We enforce strict pedestrian drop-zone cordons with ground spotters and 100% OSHA-compliant dual tie-off fall arrest systems.',
    },
    {
      q: isEs
        ? '¿Cuál es su esquema de facturación y plazos de pago para empresas?'
        : 'What is your standard commercial billing structure and payment terms?',
      a: isEs
        ? 'Para clientes comerciales, administradores de propiedades y contratistas generales, ofrecemos facturación por hitos de avance (Progress Billing) mediante formatos estándar de la industria (AIA G702/G703) con términos de crédito aprobados.'
        : 'For commercial property owners, facility managers, and general contractors, we offer progress billing tied to measurable project milestones using industry-standard AIA G702/G703 documentation with approved credit terms.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-['Inter',sans-serif]">
      {/* ── Global Header Navigation ────────────────────────────────────────── */}
      <Navbar />

      {/* ── 1. STANDARDIZED HERO BROADCOM SECTION ───────────────────────────── */}
      <section className="relative overflow-hidden bg-[#062F57] py-20 lg:py-28 border-b border-white/10">
        {/* Cinematic Ambient Lighting Gradients */}
        <div
          className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[450px] w-[600px] rounded-full bg-[#0B477D]/50 blur-[140px]"
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
                {isEs ? 'Proyectos y Casos de Éxito' : 'Commercial Projects'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">
                PAINTING DALLAS • COMMERCIAL PORTFOLIO & CASE STUDIES
              </span>
            </div>

            {/* Headline - Sized & Formatted on 2 lines with Line 1 in a single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Proyectos de Pintura Comercial y Casos de Éxito en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Ejecución Impecable en Más de 180 Instalaciones en DFW - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Commercial Painting Projects & Case Studies in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Proven Execution Across 180+ DFW Commercial & Industrial Facilities
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Explore nuestro registro arquitectónico de torres corporativas, centros comerciales, bodegas logísticas y restauraciones históricas en el Metroplex de Dallas-Fort Worth. Cero interrupción operativa. Acabados de precisión respaldados por garantía de 5 años.'
                : 'Explore our verified architectural gallery of corporate towers, retail centers, logistics hubs, and historical restorations across the Dallas-Fort Worth Metroplex. Zero operational downtime. Precision craftsmanship backed by a 5-year warranty.'}
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
                {isEs ? 'Con Licencia y Seguro ($2M+)' : 'Licensed & Insured ($2M+)'}
              </span>
            </div>

            {/* CTA Button Cluster Centered */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <button
                type="button"
                onClick={openEstimateModal}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-7 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <CalendarDays className="size-4" />
                <span>{isEs ? 'Solicitar Propuesta Comercial' : 'Request Commercial Proposal'}</span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href="tel:4693685885"
                className="inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-md"
              >
                <Phone className="size-4 text-[#EF3340]" />
                <span>{isEs ? 'Llamar (469) 368-5885' : 'Call (469) 368-5885'}</span>
              </a>
            </div>

            {/* Micro-Ribbon Trust Proof Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mt-12 pt-8 border-t border-white/15 w-full text-xs text-slate-300">
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Building2 className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">
                  {isEs ? '180+ Inmuebles Completados' : '180+ Facilities Completed'}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Clock className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">
                  {isEs ? 'Turnos Nocturnos y Fines de Semana' : 'Off-Hours Phasing'}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <ShieldCheck className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">
                  {isEs ? 'Garantía Escrita de 5 Años' : '5-Year Workmanship Warranty'}
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <Award className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">
                  {isEs ? 'Supervisores OSHA 30' : 'OSHA 30 Certified Crews'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. INTERACTIVE CATEGORY FILTER BAR ──────────────────────────────── */}
      <section className="sticky top-[68px] sm:top-[74px] z-30 bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm py-4">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            <div className="hidden lg:flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-wider pr-3 border-r border-slate-200 shrink-0">
              <SlidersHorizontal className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'Filtrar:' : 'Filter:'}</span>
            </div>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === 'all'
                  ? projectsData.length
                  : projectsData.filter((p) => p.category === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-[#062F57] text-white shadow-md'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`inline-flex items-center justify-center size-5 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-[#EF3340] text-white'
                        : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 3. MAIN PROJECTS PORTFOLIO BENTO GALLERY ────────────────────────── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Subheading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles className="size-3 text-[#EF3340]" />
                <span>
                  {isEs ? 'CATÁLOGO DE PROYECTOS VERIFICADOS' : 'VERIFIED DFW PORTFOLIO'}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {selectedCategory === 'all'
                  ? isEs
                    ? 'Todos los Proyectos Comerciales Realizados'
                    : 'All Completed Commercial & Industrial Projects'
                  : categories.find((c) => c.id === selectedCategory)?.label}
              </h2>
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              {isEs ? 'Mostrando' : 'Showing'}{' '}
              <span className="text-[#EF3340] font-black">{filteredProjects.length}</span>{' '}
              {isEs ? 'proyectos arquitectónicos' : 'commercial projects'}
            </div>
          </div>

          {/* Project Cards Grid - Clean Pure Image Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => openProjectModal(project)}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-slate-900 border border-slate-200/90 shadow-md hover:shadow-2xl hover:border-[#EF3340]/60 transition-all duration-500 hover:-translate-y-2 cursor-pointer aspect-[16/10] sm:aspect-[4/3] w-full"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Subtle dark overlay on hover */}
                <div className="absolute inset-0 bg-black/5 group-hover:bg-black/30 transition-colors duration-300 pointer-events-none" />

                {/* Center Zoom Icon on Hover */}
                <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex size-14 items-center justify-center rounded-full bg-white/95 text-[#EF3340] shadow-2xl backdrop-blur-md transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="size-6" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Quick Portfolio Stats Ribbon */}
          <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center shrink-0 shadow-md">
                <FolderKanban className="size-6 text-[#EF3340]" />
              </div>
              <div>
                <h4 className="text-base font-black text-slate-900">
                  {isEs
                    ? '¿Requiere una Muestra en Sitio o Prueba de Color en su Edificio?'
                    : 'Need an On-Site Color Drawdown or Mockup for Your Facility?'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-500">
                  {isEs
                    ? 'Aplicamos pruebas de adherencia y muestras de color en sus muros sin compromiso.'
                    : 'We apply test patches and substrate adhesion mockups on your building at no obligation.'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={openEstimateModal}
              className="inline-flex items-center gap-2 bg-[#EF3340] hover:bg-[#D8222F] text-white text-xs font-black uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0 cursor-pointer"
            >
              <span>{isEs ? 'Solicitar Muestra en Sitio' : 'Request On-Site Mockup'}</span>
              <ArrowRight className="size-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* ── 4. FLAGSHIP CASE STUDY SPOTLIGHTS ────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'CASOS DE ÉXITO DESTACADOS' : 'FLAGSHIP CASE STUDY SPOTLIGHTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Transformaciones Arquitectónicas a Gran Escala'
                : 'Architectural Transformations at Scale'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isEs
                ? 'Conozca a detalle tres de nuestras ejecuciones más complejas en Dallas-Fort Worth: cómo superamos desafíos logísticos, turnos nocturnos y especificaciones técnicas rigurosas.'
                : 'Examine three of our most demanding commercial projects in DFW: how we conquered logistical hurdles, night shifts, and rigorous technical specs.'}
            </p>
          </div>

          {/* Spotlight 1: Corporate Atrium */}
          <div className="mb-14 rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[420px]">
              <Image
                src="/images/services/commercial-interior.jpg"
                alt="Corporate Office Atrium Dallas"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1 rounded-full bg-[#EF3340] text-white text-xs font-black uppercase tracking-wider shadow-md">
                  {isEs ? 'Caso de Éxito #1' : 'Case Study #1'}
                </span>
              </div>
            </div>
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <MapPin className="size-3.5 text-[#EF3340]" />
                  <span>Downtown Dallas, TX</span>
                  <span>•</span>
                  <span>48,000 Sq. Ft.</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4">
                  {isEs
                    ? 'Sede Corporativa de Servicios Financieros en Downtown Dallas'
                    : 'Downtown Dallas Financial Tower Corporate Atrium'}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {isEs
                    ? 'El cliente requería repintar un atrio de 40 pies de altura y pasillos corporativos sin alterar la jornada laboral de 1,200 colaboradores diarios. Se implementaron plataformas de elevación especializadas y barreras de contención herméticas con filtros HEPA durante turnos nocturnos de 7:00 PM a 5:00 AM.'
                    : 'The client required a complete 40-foot atrium spray and acoustic ceiling renewal with zero disruption to 1,200 daily finance professionals. We orchestrated off-hours night shifts (7 PM - 5 AM) with positive-pressure HEPA air scrubbing and zero-VOC coatings.'}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      {isEs ? 'Interrupción Laboral' : 'Workplace Downtime'}
                    </span>
                    <span className="text-lg font-black text-emerald-400">
                      {isEs ? '0 Horas Perdidas' : 'Zero Hours Lost'}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      {isEs ? 'Calificación Ambiental' : 'Environmental Rating'}
                    </span>
                    <span className="text-lg font-black text-emerald-400">Zero-VOC Certified</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {isEs ? 'Garantía de Mano de Obra: 5 Años' : 'Workmanship Guarantee: 5 Years'}
                </span>
                <button
                  type="button"
                  onClick={openEstimateModal}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#EF3340] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{isEs ? 'Cotizar Proyecto Similar' : 'Bid Similar Scope'}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Spotlight 2: Industrial Logistics Center */}
          <div className="rounded-3xl bg-slate-900 text-white overflow-hidden shadow-2xl border border-slate-800 grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">
                  <MapPin className="size-3.5 text-[#EF3340]" />
                  <span>Grand Prairie, TX (DFW Airport)</span>
                  <span>•</span>
                  <span>125,000 Sq. Ft.</span>
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-4">
                  {isEs
                    ? 'Centro Logístico y Distribución E-Commerce Metroplex'
                    : 'DFW High-Bay E-Commerce Logistics Facility'}
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {isEs
                    ? 'Transformación integral de una nave industrial recién arrendada: aplicación de pintura dryfall blanca de alto brillo en la cubierta estructural para maximizar la reflectancia lumínica en un 35%, junto con 125,000 pies cuadrados de piso epóxico de alta resistencia química con pasillos peatonales amarillos de seguridad.'
                    : 'A comprehensive facility turnaround for a national 3PL tenant: high-reflectance dryfall ceiling coating elevating ambient lux by 35%, combined with 125,000 sq ft of high-solids chemical-resistant epoxy flooring and OSHA safety pedestrian lane demarcation.'}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      {isEs ? 'Mejora de Iluminación' : 'Ambient Lux Gain'}
                    </span>
                    <span className="text-lg font-black text-amber-400">+35% Lumens</span>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[11px] text-slate-400 block font-semibold uppercase">
                      {isEs ? 'Resistencia Mecánica' : 'Mechanical Resistance'}
                    </span>
                    <span className="text-lg font-black text-white">Forklift Heavy Traffic</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {isEs ? 'Inspección de Adherencia: CSP 2 / NACE' : 'Substrate Adhesion: CSP 2 / NACE'}
                </span>
                <button
                  type="button"
                  onClick={openEstimateModal}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#EF3340] hover:text-white transition-colors cursor-pointer"
                >
                  <span>{isEs ? 'Cotizar Proyecto Industrial' : 'Bid Industrial Scope'}</span>
                  <ArrowRight className="size-4" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[420px] order-1 lg:order-2">
              <Image
                src="/images/projects/warehouse-distribution.jpg"
                alt="Industrial Logistics Warehouse DFW"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute top-6 right-6">
                <span className="px-3.5 py-1 rounded-full bg-[#EF3340] text-white text-xs font-black uppercase tracking-wider shadow-md">
                  {isEs ? 'Caso de Éxito #2' : 'Case Study #2'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. THE PAINTING DALLAS EXECUTION STANDARD ───────────────────────── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <ShieldCheck className="size-3.5" />
              <span>{isEs ? 'EL ESTÁNDAR PAINTING DALLAS' : 'THE PAINTING DALLAS STANDARD'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? '¿Por Qué Nuestro Modelo de Ejecución Supera a la Competencia?'
                : 'Why Our Project Delivery Outperforms the Industry'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isEs
                ? 'Los proyectos comerciales no toleran errores de cronograma, sobrecostos ni cuadrillas sin capacitación. Respaldamos cada metro cuadrado con procesos de ingeniería probados.'
                : 'Commercial properties cannot afford delayed milestones, surprise line items, or unvetted crews. We engineer reliability into every square foot.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Standard 1 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Users className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Gerente de Proyecto Dedicado en Sitio' : 'Dedicated On-Site Project Manager'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Un solo punto de contacto responsable presente en su propiedad todos los días, coordinando accesos, logística y reportes de avance.'
                  : 'A single point of technical accountability on your property every day, coordinating facility access, crew phasing, and milestone audits.'}
              </p>
            </div>

            {/* Standard 2 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Clock className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Turnos Nocturnos y Fines de Semana' : 'Off-Hours & Weekend Phasing'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Trabajamos cuando su empresa está cerrada. Al iniciar la jornada laboral al día siguiente, el área queda limpia, ventilada y lista para operar.'
                  : 'We execute while your business sleeps. Before morning operations commence, the work zone is vacuumed, sanitized, ventilated, and ready.'}
              </p>
            </div>

            {/* Standard 3 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Wrench className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Preparación Científica de Superficies' : 'Scientific Substrate Profiling'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'El 80% del éxito radica en la preparación. Usamos lavado a presión de 4,000 PSI, desbaste mecánico y medidores digitales de humedad antes de pintar.'
                  : 'Over 80% of coating longevity is decided before painting begins. We deploy 4,000 PSI hot water wash, mechanical scarification, and digital moisture verification.'}
              </p>
            </div>

            {/* Standard 4 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Paintbrush className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Químicas de Recubrimiento Premium' : 'Tier-1 Commercial Chemistries'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Sin recortes ni productos residenciales baratos. Especificamos formulaciones comerciales de Sherwin-Williams, PPG y Benjamin Moore adaptadas al sol de Texas.'
                  : 'Zero retail diluted paints. We formulate commercial-spec acrylics, elastomeric membranes, and high-solids polyurethanes engineered for Texas UV exposure.'}
              </p>
            </div>

            {/* Standard 5 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <ShieldCheck className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Supervisores Certificados OSHA 30' : 'OSHA 30 Safety Protocols'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Nuestras cuadrillas están uniformadas, aseguradas y rigurosamente entrenadas en el uso de arneses y canastillas elevadoras para cero accidentes.'
                  : 'Full background checks, uniform policy, zero job-site accidents, and 100% adherence to aerial work platform harness and drop-zone regulations.'}
              </p>
            </div>

            {/* Standard 6 */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="size-12 rounded-2xl bg-[#062F57] text-white flex items-center justify-center mb-5 shadow-sm">
                <Award className="size-6 text-[#EF3340]" />
              </div>
              <h3 className="text-lg font-black text-slate-900 mb-2">
                {isEs ? 'Garantía Escrita de 5 Años' : '5-Year Written Workmanship Warranty'}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {isEs
                  ? 'Realizamos un recorrido final detallado con medidores de espesor seco (DFT) y emitimos su certificado formal de garantía de 5 años antes del cierre.'
                  : 'A formal punch-list walkthrough with dry-film thickness verification, followed by delivery of your written 5-year workmanship guarantee.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. 5-PHASE PROJECT DELIVERY METHODOLOGY ─────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'NUESTRO MÉTODO DE TRABAJO' : 'PROJECT DELIVERY LIFECYCLE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? '5 Fases de Ejecución Transparente y Sin Sorpresas'
                : 'Our 5-Phase Commercial Project Execution'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {isEs
                ? 'Desde el levantamiento inicial hasta la entrega final de la garantía, nuestro flujo de trabajo garantiza puntualidad y presupuesto respetado.'
                : 'From initial architectural assessment to warranty handover, every step is calculated for on-time, on-budget precision.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                step: '01',
                title: isEs ? 'Inspección en Sitio' : 'On-Site Assessment',
                desc: isEs
                  ? 'Medición láser, prueba de sustrato y análisis de humedad en su edificio.'
                  : 'Laser measurements, substrate moisture testing, and elevation access planning.',
              },
              {
                step: '02',
                title: isEs ? 'Propuesta Precio Fijo' : 'Fixed-Price Bid',
                desc: isEs
                  ? 'Cotización desglosada por partidas con plan de fases y cronograma exacto.'
                  : 'Detailed line-item scope with exact working hours, timelines, and material specs.',
              },
              {
                step: '03',
                title: isEs ? 'Contención y Prep' : 'Containment & Prep',
                desc: isEs
                  ? 'Lavado a presión, sellado de juntas, mascarillado y filtros HEPA.'
                  : 'Pressure washing, spall repair, perimeter masking, and dust containment.',
              },
              {
                step: '04',
                title: isEs ? 'Aplicación Precisa' : 'Precision Coating',
                desc: isEs
                  ? 'Aspersión airless y roleado profesional con capas medidas de espesor.'
                  : 'Airless spray and back-rolling applying manufacturer-specified mil thickness.',
              },
              {
                step: '05',
                title: isEs ? 'Auditoría y Garantía' : 'Audit & Warranty',
                desc: isEs
                  ? 'Recorrido final de punch-list y entrega formal de garantía escrita de 5 años.'
                  : 'Joint inspection, zero punch-list resolution, and written 5-year certificate.',
              },
            ].map((p, idx) => (
              <div
                key={idx}
                className="relative p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:border-[#EF3340]/40 transition-all hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-black text-[#EF3340] font-mono mb-3">
                    {p.step}
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">{p.title}</h4>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/70 text-[11px] font-bold text-[#062F57] flex items-center gap-1">
                  <CheckCircle2 className="size-3.5 text-emerald-600" />
                  <span>{isEs ? 'Paso Verificado' : 'Milestone Verified'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. DFW COMMERCIAL COVERAGE MAP ─────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="site-shell max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <MapPin className="size-3.5" />
              <span>{isEs ? 'COBERTURA EN EL METROPLEX DFW' : 'DFW COMMERCIAL COVERAGE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs
                ? 'Servicio Comercial en Todo el Metroplex de Dallas-Fort Worth'
                : 'Serving Commercial Properties Across All 5 DFW Counties'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {isEs
                ? 'Nuestras cuadrillas móviles se desplazan diariamente con equipo completo para atender propiedades comerciales e industriales en un radio de más de 50 millas.'
                : 'Our mobile commercial fleets deploy daily with full aerial equipment, servicing facilities within a 50+ mile radius.'}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 max-w-6xl mx-auto mb-12">
            {[
              { city: 'Dallas', note: 'Downtown / Uptown / N. Dallas' },
              { city: 'Fort Worth', note: 'Cultural / Industrial' },
              { city: 'Plano', note: 'Legacy West / Tech Corridor' },
              { city: 'Irving', note: 'Las Colinas / Freeport' },
              { city: 'Arlington', note: 'Entertainment / Logistics' },
              { city: 'Frisco', note: 'Corporate / Retail Centers' },
              { city: 'McKinney', note: 'Medical / Corporate' },
              { city: 'Carrollton', note: 'Industrial / Business Parks' },
              { city: 'Garland', note: 'Manufacturing Hub' },
              { city: 'Grand Prairie', note: '3PL Logistics Corridor' },
              { city: 'Richardson', note: 'Telecom Corridor' },
              { city: 'Grapevine', note: 'Airport / Commercial Hub' },
            ].map((loc, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-[#EF3340]/50 transition-all text-center"
              >
                <div className="text-sm font-black text-white mb-0.5">{loc.city}</div>
                <div className="text-[10px] text-slate-400 font-mono">{loc.note}</div>
              </div>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-xs font-bold text-slate-300 bg-white/10 border border-white/20 px-5 py-2.5 rounded-full">
            <CheckCircle className="size-4 text-emerald-400" />
            <span>
              {isEs
                ? 'Flota móvil equipada para respuesta rápida de emergencia en Dallas-Fort Worth'
                : 'Rapid-response mobile commercial painting fleets deployed throughout DFW'}
            </span>
          </div>
        </div>
      </section>

      {/* ── 8. COMMERCIAL CLIENT FAQS ACCORDION ─────────────────────────────── */}
      <section className="py-20 bg-white border-b border-slate-200">
        <div className="site-shell max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <HelpCircle className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'COMMERCIAL CLIENT FAQS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preguntas Frecuentes sobre Nuestros Proyectos'
                : 'Frequently Asked Questions About Commercial Projects'}
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              {isEs
                ? 'Respuestas directas sobre tiempos de ejecución, pólizas de seguro, garantías y procedimientos.'
                : 'Clear answers on project phasing, insurance minimums, warranties, and bidding.'}
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? 'border-[#062F57] bg-slate-50/70 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base sm:text-lg font-bold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`size-5 text-[#EF3340] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600 leading-relaxed border-t border-slate-200/60 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 9. CONVERSION BANNER & TRUST ACCREDITATIONS ───────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-[#062F57] via-[#083866] to-[#041E38] text-white relative overflow-hidden">
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-[#EF3340]/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="site-shell max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-6">
            <Sparkles className="size-3.5" />
            <span>{isEs ? 'INICIE SU PROYECTO HOY' : 'READY TO ELEVATE YOUR PROPERTY?'}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
            {isEs
              ? 'Hagamos de su Edificio Comercial Nuestro Próximo Caso de Éxito'
              : "Let's Make Your Commercial Property Our Next Success Story"}
          </h2>

          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            {isEs
              ? 'Contáctenos hoy para agendar una inspección técnica en sitio sin costo. Le entregaremos una propuesta detallada con precio fijo en menos de 24 horas.'
              : 'Contact our commercial estimating team today for a complimentary on-site architectural evaluation and itemized fixed-price proposal within 24 hours.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={openEstimateModal}
              className="inline-flex items-center gap-2.5 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white px-8 py-4 text-xs sm:text-sm font-black uppercase tracking-wider shadow-[0_10px_25px_-5px_rgba(239,51,64,0.5)] transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <CalendarDays className="size-4" />
              <span>{isEs ? 'Solicitar Propuesta Gratuita' : 'Request Commercial Proposal'}</span>
              <ArrowRight className="size-4" />
            </button>

            <a
              href="tel:4693685885"
              className="inline-flex items-center gap-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 px-7 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Phone className="size-4 text-[#EF3340]" />
              <span>{isEs ? 'Llamar al (469) 368-5885' : 'Call (469) 368-5885'}</span>
            </a>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-300 text-xs font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-emerald-400" />
              <span>{isEs ? 'Póliza $2M+ Cobertura' : '$2M+ Liability Insurance'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="size-4 text-amber-400" />
              <span>{isEs ? 'Certificado OSHA 30' : 'OSHA 30 Certified'}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-emerald-400" />
              <span>{isEs ? 'Garantía 5 Años por Escrito' : '5-Year Written Guarantee'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="size-4 text-amber-400 fill-amber-400" />
              <span>5.0 Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Global Modals & Sticky Mobile Action Bar ────────────────────────── */}
      <EstimateModal />
      <ServiceDetailModal />
      <ProjectDetailModal />
      <MobileStickyBar />

      {/* ── Global Footer ───────────────────────────────────────────────────── */}
      <Footer />
    </div>
  );
}
