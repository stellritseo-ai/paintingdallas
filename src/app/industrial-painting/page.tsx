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
  HardHat,
  Gauge,
  Flame,
  Zap,
  Activity,
  Boxes,
  Truck,
  Forklift,
  FlaskConical,
  Wheat,
  Plane,
  Fuel,
  Workflow,
} from 'lucide-react';

export default function IndustrialPaintingPage() {
  const { language, openEstimateModal } = useLanguage();
  const isEs = language === 'es';

  // FAQ accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // 9 Industrial Painting Services
  const industrialServices = [
    {
      id: 'steel',
      title: isEs ? 'Pintura de Acero Estructural' : 'Structural Steel Painting',
      desc: isEs
        ? 'Proteja la integridad estructural de su edificio con recubrimientos de alto rendimiento para vigas, columnas y cerchas. Imprimadores inhibidores de corrosión y acabados resistentes a vibración e intemperie.'
        : "Protect your building's structural integrity with high-performance coatings designed for steel beams, columns, trusses, and joists. We apply rust-inhibitive primers and durable topcoats that withstand vibration, impact, and weather.",
      perfectFor: isEs
        ? ['Plantas de manufactura', 'Almacenes', 'Puentes', 'Estructuras de acero']
        : ['Manufacturing plants', 'Warehouses', 'Bridges', 'Steel-framed buildings'],
      icon: Factory,
      tag: isEs ? 'Acero & Cerchas' : 'SSPC Structural',
    },
    {
      id: 'warehouse',
      title: isEs ? 'Pintura de Almacenes y Centros Logísticos' : 'Warehouse & Distribution Center Painting',
      desc: isEs
        ? 'Recubrimientos de alto espesor para muros, techos, estanterías (racks) y pisos. Pinturas reflectivas que mejoran la luminosidad y eficiencia energética soportando el tránsito constante de montacargas.'
        : 'Durable, high-build coatings for warehouse walls, ceilings, racking, and floors. We use light-reflective paints to improve visibility and energy efficiency while withstanding forklift traffic and heavy equipment.',
      perfectFor: isEs
        ? ['Centros de distribución', 'Hubs logísticos', 'Centros de cumplimiento (fulfillment)', 'Bodegas de almacenamiento']
        : ['Distribution centers', 'Logistics hubs', 'Fulfillment centers', 'Storage facilities'],
      icon: Truck,
      tag: isEs ? 'Alta Reflectancia' : 'Forklift Rated',
    },
    {
      id: 'manufacturing',
      title: isEs ? 'Pintura para Plantas de Manufactura' : 'Manufacturing Facility Painting',
      desc: isEs
        ? 'Soluciones especializadas para líneas de producción: desde epóxicos resistentes a agentes químicos agresivos hasta acabados resistentes a altas temperaturas, protegiendo sus equipos y operarios.'
        : 'We understand that manufacturing environments require specialized coatings. From chemical-resistant epoxies to heat-resistant finishes, we deliver solutions that protect your equipment and your people.',
      perfectFor: isEs
        ? ['Plantas automotrices', 'Procesamiento de alimentos', 'Manufactura electrónica', 'Industria pesada']
        : ['Automotive plants', 'Food processing', 'Electronics manufacturing', 'Heavy industry'],
      icon: Workflow,
      tag: isEs ? 'Químico & Térmico' : 'Process Resistant',
    },
    {
      id: 'floors',
      title: isEs ? 'Recubrimientos de Pisos y Sistemas Epóxicos' : 'Floor Coatings & Epoxy Systems',
      desc: isEs
        ? 'Pisos industriales sometidos a exigencia extrema. Instalamos sistemas epóxicos, poliuretanos y selladores para concreto que soportan derrames químicos, cargas pesadas y abrasión mecánica constante.'
        : 'Industrial floors take a beating. We install epoxy, polyurethane, and concrete sealers designed to withstand chemical spills, heavy loads, and abrasion. Our floor coatings improve safety and extend the life of your concrete.',
      perfectFor: isEs
        ? ['Pisos de producción', 'Andenes de carga', 'Almacenamiento químico', 'Bahías de mantenimiento']
        : ['Production floors', 'Loading docks', 'Chemical storage areas', 'Maintenance bays'],
      icon: Layers,
      tag: isEs ? 'Alto Tránsito' : 'Abrasion Resistant',
    },
    {
      id: 'tanks',
      title: isEs ? 'Recubrimiento de Tanques y Recipientes' : 'Tank & Vessel Coating',
      desc: isEs
        ? 'Proteja tanques de almacenamiento, recipientes a presión y tuberías con recubrimientos interiores y exteriores especializados para resistencia química, protección catódica y agua potable.'
        : 'Protect your tanks, vessels, and piping with specialized interior and exterior coatings. We apply linings designed for chemical resistance, corrosion protection, and potable water compliance.',
      perfectFor: isEs
        ? ['Plantas químicas', 'Tratamiento de agua', 'Procesamiento de bebidas y alimentos']
        : ['Chemical plants', 'Water treatment facilities', 'Food and beverage processing'],
      icon: Droplets,
      tag: isEs ? 'Linings Internos' : 'Containment Linings',
    },
    {
      id: 'roofs',
      title: isEs ? 'Impermeabilización y Cubiertas Industriales' : 'Roof Coatings & Waterproofing',
      desc: isEs
        ? 'Extienda la vida útil de su cubierta industrial con sistemas elastoméricos reflectivos e impermeabilizantes. Reduzca costos energéticos, selle goteras y posponga reemplazos costosos de techo.'
        : 'Extend the life of your industrial roof with reflective roof coatings and waterproofing systems. Our roof coatings reduce energy costs, prevent leaks, and delay costly roof replacement.',
      perfectFor: isEs
        ? ['Techos planos', 'Cubiertas metálicas', 'Sistemas de techado industrial']
        : ['Flat roofs', 'Metal roofs', 'Industrial roofing systems'],
      icon: Shield,
      tag: isEs ? 'Ahorro Energético' : 'Cool Roof Systems',
    },
    {
      id: 'machinery',
      title: isEs ? 'Pintura de Maquinaria y Equipos' : 'Equipment & Machinery Painting',
      desc: isEs
        ? 'Pintura y recubrimiento para maquinaria industrial pesada y sistemas mecánicos. Protección activa contra corrosión, aceites y fricción mientras mejora la seguridad visual operativa.'
        : 'We paint and coat industrial equipment, machinery, and mechanical systems. Our coatings protect against corrosion, chemicals, and abrasion while improving appearance and safety.',
      perfectFor: isEs
        ? ['Equipos de producción', 'Unidades HVAC', 'Grúas industriales', 'Sistemas de manejo de materiales']
        : ['Production equipment', 'HVAC units', 'Cranes', 'Material handling systems'],
      icon: Wrench,
      tag: isEs ? 'Maquinaria Pesada' : 'Equipment Spec',
    },
    {
      id: 'pipes',
      title: isEs ? 'Pintura de Tuberías y Servicios (Color-Coding)' : 'Pipe & Utility Painting',
      desc: isEs
        ? 'Código de colores y recubrimientos protectores para tuberías, conductos y redes de servicios. Seguimos estándares normativos de seguridad (ANSI/ASME) para facilitar la identificación.'
        : 'Color-coding and protective coatings for pipes, conduits, and utility systems. We follow industry standards for color coding and labeling to improve safety and compliance.',
      perfectFor: isEs
        ? ['Tuberías de procesos', 'Líneas de servicios públicos', 'Redes contra incendio']
        : ['Process piping', 'Utility lines', 'Fire suppression systems'],
      icon: Gauge,
      tag: isEs ? 'Norma ANSI/ASME' : 'Color Coded',
    },
    {
      id: 'confined',
      title: isEs ? 'Pintura en Espacios Confinados y Gran Altura' : 'Confined Space & High-Access Painting',
      desc: isEs
        ? 'Personal certificado para ingreso seguro a espacios confinados y maniobras verticales en silos, chimeneas, tolvas y estructuras de acceso complejo con estricto monitoreo atmosférico.'
        : 'Our crews are trained and certified for confined space entry and high-access work. We safely paint tanks, silos, stacks, and other difficult-to-reach areas.',
      perfectFor: isEs
        ? ['Tanques de almacenamiento', 'Silos de granos', 'Chimeneas industriales', 'Estructuras elevadas']
        : ['Storage tanks', 'Silos', 'Smokestacks', 'Elevated structures'],
      icon: HardHat,
      tag: isEs ? 'Espacios Confinados' : 'OSHA Certified',
    },
  ];

  // 10 Industrial Coatings Matrix
  const coatingsMatrix = [
    {
      coating: isEs ? 'Recubrimientos Epóxicos' : 'Epoxy Coatings',
      bestFor: isEs ? 'Pisos, tanques, acero estructural' : 'Floors, tanks, structural steel',
      benefits: isEs ? 'Resistencia química, alta dureza y durabilidad mecánica' : 'Chemical resistance, durability',
    },
    {
      coating: isEs ? 'Recubrimientos de Poliuretano' : 'Polyurethane Coatings',
      bestFor: isEs ? 'Acero exterior, maquinaria, tuberías expuestas' : 'Exterior steel, equipment',
      benefits: isEs ? 'Estabilidad ante rayos UV, brillo y retención de color' : 'UV stability, color retention',
    },
    {
      coating: isEs ? 'Imprimadores Ricos en Zinc' : 'Zinc-Rich Primers',
      bestFor: isEs ? 'Acero estructural en ambientes corrosivos' : 'Structural steel',
      benefits: isEs ? 'Protección catódica activa galvánica contra óxido' : 'Cathodic protection, rust prevention',
    },
    {
      coating: isEs ? 'Recubrimientos Elastoméricos' : 'Elastomeric Coatings',
      bestFor: isEs ? 'Concreto, muros de mampostería industrial' : 'Concrete, masonry',
      benefits: isEs ? 'Puenteo de fisuras e impermeabilización flexible' : 'Crack bridging, waterproofing',
    },
    {
      coating: isEs ? 'Pinturas Intumescentes' : 'Intumescent Coatings',
      bestFor: isEs ? 'Acero estructural y vías de evacuación' : 'Structural steel',
      benefits: isEs ? 'Protección pasiva contra fuego y cumplimiento de códigos' : 'Fire protection, code compliance',
    },
    {
      coating: isEs ? 'Linings Resistentes a Químicos' : 'Chemical-Resistant Linings',
      bestFor: isEs ? 'Tanques, recipientes a presión, diques de contención' : 'Tanks, vessels, piping',
      benefits: isEs ? 'Contención química agresiva y barrera anticorrosiva' : 'Corrosion protection, containment',
    },
    {
      coating: isEs ? 'Recubrimientos Antimicrobianos' : 'Anti-Microbial Coatings',
      bestFor: isEs ? 'Procesamiento de alimentos, farmacéutica' : 'Food processing, healthcare',
      benefits: isEs ? 'Inhibición bacteriana activa y fácil sanitización' : 'Bacteria resistance, sanitation',
    },
    {
      coating: isEs ? 'Recubrimientos de Alta Temperatura' : 'High-Temperature Coatings',
      bestFor: isEs ? 'Calderas, ductos de escape, hornos' : 'Boilers, exhaust systems',
      benefits: isEs ? 'Resistencia térmica extrema hasta 1200°F sin degradarse' : 'Heat resistance, thermal stability',
    },
    {
      coating: isEs ? 'Recubrimientos Antideslizantes' : 'Non-Skid Coatings',
      bestFor: isEs ? 'Pisos de producción, pasarelas, rampas de carga' : 'Floors, walkways, ramps',
      benefits: isEs ? 'Tracción segura, prevención de caídas y seguridad laboral' : 'Slip resistance, safety',
    },
    {
      coating: isEs ? 'Recubrimientos Reflectivos de Techo' : 'Reflective Roof Coatings',
      bestFor: isEs ? 'Cubiertas metálicas y techos planos' : 'Flat and metal roofs',
      benefits: isEs ? 'Ahorro sustancial en aire acondicionado y blindaje UV' : 'Energy savings, UV protection',
    },
  ];

  // 7-Step Process
  const processSteps = [
    {
      step: '1',
      title: isEs ? '1. Consulta Técnica' : '1. Consultation',
      what: isEs ? 'Escuchamos sus objetivos, presupuesto y ventana operativa de producción.' : 'We listen to your goals, budget, and timeline.',
      why: isEs ? 'Garantiza alineación operativa y de seguridad desde el día uno.' : 'Ensures alignment from day one.',
    },
    {
      step: '2',
      title: isEs ? '2. Evaluación en el Sitio' : '2. Site Assessment',
      what: isEs ? 'Inspeccionamos sustratos, evaluamos corrosión y tomamos medidas exactas.' : 'We inspect substrates, identify corrosion, and take measurements.',
      why: isEs ? 'Cotización precisa sin costos ocultos ni sorpresas.' : 'Accurate pricing and no surprises.',
    },
    {
      step: '3',
      title: isEs ? '3. Propuesta Detallada' : '3. Detailed Proposal',
      what: isEs ? 'Recibe una cotización desglosada con especificaciones técnicas completas.' : 'You receive a transparent, line-item quote with coating specifications.',
      why: isEs ? 'Sin cargos ocultos. Selección de producto 100% justificada.' : 'No hidden fees. Clear expectations.',
    },
    {
      step: '4',
      title: isEs ? '4. Preparación de Superficie' : '4. Surface Preparation',
      what: isEs ? 'Limpiamos, perfilamos e imprimamos según las normas técnicas de SSPC.' : 'We clean, profile, and prime surfaces per SSPC standards.',
      why: isEs ? 'El factor determinante para la adherencia y longevidad del recubrimiento.' : 'The secret to coating longevity.',
    },
    {
      step: '5',
      title: isEs ? '5. Aplicación del Recubrimiento' : '5. Coating Application',
      what: isEs ? 'Cuadrillas certificadas aplican sistemas según especificaciones de fábrica.' : 'Our certified crews apply coatings per manufacturer specifications.',
      why: isEs ? 'Acabado industrial uniforme con espesor de película controlado.' : 'Flawless finish, every time.',
    },
    {
      step: '6',
      title: isEs ? '6. Inspección Final de Calidad' : '6. Final Inspection',
      what: isEs ? 'Verificamos con medidores de espesor de película seca (DFT) e inspección visual.' : 'We inspect every inch with you using DFT gauges and visual checks.',
      why: isEs ? 'No abandonamos el sitio hasta lograr el 100% de cumplimiento técnico.' : "We don't leave until you're 100% satisfied.",
    },
    {
      step: '7',
      title: isEs ? '7. Aprobación y Entrega de Garantía' : '7. Sign-Off & Warranty',
      what: isEs ? 'Aprobación final respaldada por nuestra garantía escrita de 5 años.' : 'Final approval backed by our written 5-year warranty.',
      why: isEs ? 'Su inversión e infraestructura quedan protegidas a largo plazo.' : 'Your investment is protected.',
    },
  ];

  // 6 SSPC Preparation Standards
  const prepCapabilities = [
    {
      title: isEs ? 'Chorro Abrasivo (Sandblasting)' : 'Abrasive Blasting',
      standards: 'SSPC-SP 5 (White Metal), SP 6 (Commercial), SP 10 (Near-White)',
      desc: isEs ? 'Remoción total de óxido y calamina, creando perfil de anclaje óptimo.' : 'Complete removal of rust and scale, creating optimal anchor profile for coating bond.',
    },
    {
      title: isEs ? 'Limpieza con Herramienta Mecánica' : 'Power Tool Cleaning',
      standards: 'SSPC-SP 2, SP 3, SP 11',
      desc: isEs ? 'Lijado mecánico y raspado para eliminar costras de corrosión adheridas.' : 'Mechanical wire brushing, grinding, and descaling to eliminate corrosion crusts.',
    },
    {
      title: isEs ? 'Lavado a Ultra Alta Presión' : 'Pressure Washing & Water Jetting',
      standards: 'SSPC-SP 12 (Water Jetting)',
      desc: isEs ? 'Hidrodemolición suave y limpieza de contaminantes solubles en agua.' : 'High-pressure wash removing grease, soluble salts, chalk, and dirt.',
    },
    {
      title: isEs ? 'Limpieza Química con Solventes' : 'Chemical Solvent Cleaning',
      standards: 'SSPC-SP 1 (Solvent Cleaning)',
      desc: isEs ? 'Desengrase minucioso de aceites antes de la preparación abrasiva.' : 'Thorough degreasing of cutting oils and lubricants prior to abrasive blasting.',
    },
    {
      title: isEs ? 'Preparación Mecánica de Concreto' : 'Concrete Surface Prep',
      standards: 'ICRI CSP 2 – 5 Profiles',
      desc: isEs ? 'Desbastado con diamante, escarificado y neutralización ácida de pisos.' : 'Diamond grinding, scarifying, and shot blasting for epoxy mechanical lock.',
    },
    {
      title: isEs ? 'Verificación de Perfil de Anclaje' : 'Profile & DFT Verification',
      standards: 'ASTM D4417 / SSPC-PA 2',
      desc: isEs ? 'Medición micrométrica del rugosímetro y espesor de película seca.' : 'Micrometer verification ensuring correct anchor tooth and dry film thickness.',
    },
  ];

  // 8 Safety Credentials
  const safetyCredentials = [
    { title: 'OSHA-Compliant Protocols', desc: isEs ? 'Cumplimiento estricto de todas las regulaciones de seguridad laboral' : 'Strict enforcement of all federal and state workplace safety standards' },
    { title: 'Confined Space Entry Certified', desc: isEs ? 'Monitoreo atmosférico continuo, ventilación forzada y vigía capacitado' : 'Atmospheric testing, forced ventilation, and certified rescue standby' },
    { title: 'Fall Protection Trained', desc: isEs ? 'Certificación en arneses, líneas de vida y plataformas elevadoras' : 'Harness inspection, anchor rigging, and elevated platform certification' },
    { title: 'Respirator & PPE Compliance', desc: isEs ? 'Equipos de respiración asistida y protección química grado industrial' : 'Full PAPR/cartridge respirators and chemical barrier PPE protocols' },
    { title: 'HazCom & SDS Trained', desc: isEs ? 'Manejo riguroso de sustancias y hojas de datos de seguridad' : 'Complete hazardous chemical communication and SDS management' },
    { title: 'Lead-Safe Certified', desc: isEs ? 'Manejo y contención segura de sustratos antiguos con plomo' : 'Certified lead containment and abatement encapsulation practices' },
    { title: 'Environmental VOC Compliance', desc: isEs ? 'Fórmulas con estricto apego a límites de emisiones ambientales' : 'Low-VOC and solvent-free industrial coating formulations' },
    { title: 'Full Liability & Workers\' Comp', desc: isEs ? 'Póliza comercial integral de $2M+ y cobertura laboral total' : 'Comprehensive $2M+ general liability and full workers\' compensation' },
  ];

  // 8 The Painting Dallas Advantage Points
  const advantageList = [
    { title: isEs ? 'Recubrimientos de Grado Industrial' : 'Industrial-Grade Coatings', desc: isEs ? 'Seleccionados minuciosamente para su entorno operativo específico.' : 'Specially selected and engineered for your facility’s unique chemical and mechanical demands.', icon: FlaskConical },
    { title: isEs ? 'Aplicadores Certificados' : 'Certified Applicators', desc: isEs ? 'Personal capacitado en especificaciones de fábrica y seguridad industrial.' : 'Trained in coating application techniques, mil thickness control, and jobsite safety.', icon: HardHat },
    { title: isEs ? 'Mínimo Tiempo de Inactividad' : 'Minimal Downtime', desc: isEs ? 'Trabajamos adaptados a su calendario de producción (noches y fines de semana).' : 'We work around your production schedule with night shifts and phased closures.', icon: Clock },
    { title: isEs ? 'Gerente de Proyecto Dedicado' : 'Dedicated Project Manager', desc: isEs ? 'Un punto de contacto técnico exclusivo de principio a fin.' : 'One point of contact from initial estimate to final DFT sign-off.', icon: ShieldCheck },
    { title: isEs ? 'Preparación Estándar SSPC' : 'SSPC-Compliant Preparation', desc: isEs ? 'Seguimos las normas más exigentes de la industria de recubrimientos protectores.' : 'Rigorous adherence to Society for Protective Coatings standards.', icon: Gauge },
    { title: isEs ? 'Sitios de Trabajo Limpios' : 'Clean Job Sites', desc: isEs ? 'Dejamos sus instalaciones industriales impecables al finalizar cada jornada.' : 'We leave your facility neat, contained, and spotless every single day.', icon: CheckCircle2 },
    { title: isEs ? 'Garantía de Mano de Obra de 5 Años' : '5-Year Workmanship Warranty', desc: isEs ? 'Respaldamos la calidad de nuestra aplicación con un compromiso escrito de 5 años.' : 'We stand behind our industrial coating durability with a written 5-year warranty.', icon: Shield },
    { title: isEs ? 'Con Licencia, Fianza y Seguro ($2M+)' : 'Licensed & Insured', desc: isEs ? 'Cobertura integral de responsabilidad civil y compensación para trabajadores.' : 'Comprehensive liability and workers’ comp coverage on every industrial site.', icon: FileText },
  ];

  // 10 Industrial Sectors
  const industrialSectors = [
    { industry: isEs ? 'Manufactura y Producción' : 'Manufacturing', projects: isEs ? 'Pisos de producción, equipos mecánicos, acero estructural' : 'Production floors, equipment, structural steel', icon: Factory },
    { industry: isEs ? 'Almacenamiento y Logística' : 'Warehousing & Logistics', projects: isEs ? 'Estanterías metálicas (racks), muros interiores, andenes de carga' : 'Racking, walls, floors, loading docks', icon: Truck },
    { industry: isEs ? 'Alimentos y Bebidas' : 'Food & Beverage', projects: isEs ? 'Áreas de procesamiento, tanques, pisos sanitarios aprobados por USDA' : 'Processing areas, tanks, floors, USDA-compliant coatings', icon: Wheat },
    { industry: isEs ? 'Química y Petroquímica' : 'Chemical & Petrochemical', projects: isEs ? 'Tanques, tuberías de proceso, áreas de contención secundaria' : 'Tanks, piping, containment areas, corrosion protection', icon: FlaskConical },
    { industry: isEs ? 'Energía y Servicios Públicos' : 'Energy & Utilities', projects: isEs ? 'Plantas de energía, subestaciones eléctricas, tratamiento de agua' : 'Power plants, substations, water treatment', icon: Zap },
    { industry: isEs ? 'Industria Automotriz' : 'Automotive', projects: isEs ? 'Líneas de ensamble, cabinas de pintura, pisos de talleres' : 'Assembly lines, paint booths, floors, equipment', icon: Flame },
    { industry: isEs ? 'Farmacéutica y Laboratorios' : 'Pharmaceutical', projects: isEs ? 'Cuartos limpios (cleanrooms), laboratorios, áreas de formulación' : 'Clean rooms, labs, production areas', icon: Activity },
    { industry: isEs ? 'Aeroespacial y Aviación' : 'Aerospace', projects: isEs ? 'Hangares de aeronaves, componentes estructurales, equipos de pista' : 'Hangars, components, equipment', icon: Plane },
    { industry: isEs ? 'Minería y Agregados' : 'Mining & Aggregates', projects: isEs ? 'Trituradoras, bandas transportadoras, tolvas y estructuras pesadas' : 'Crushers, conveyors, structures, equipment', icon: Boxes },
    { industry: isEs ? 'Agua y Tratamiento de Efluentes' : 'Water & Wastewater', projects: isEs ? 'Plantas de tratamiento, clarificadores, tanques de sedimentación' : 'Treatment plants, tanks, piping, clarifiers', icon: Droplets },
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
        ? '¿Cuánto tiempo tomará mi proyecto de pintura industrial?'
        : 'How long will my industrial painting project take?',
      a: isEs
        ? 'Los plazos de ejecución varían según el tamaño de la planta, el nivel de preparación de superficies requerido (SSPC) y los sistemas de recubrimiento especificados. Proyectos pequeños pueden completarse en pocos días, mientras que plantas completas pueden tomar varias semanas. Le entregamos un cronograma por etapas exacto en su propuesta técnica.'
        : 'Project timelines vary based on facility size, surface preparation requirements, and coating systems. Small projects may take a few days, while large-scale facility painting could take several weeks. We provide a detailed schedule in your proposal.',
    },
    {
      q: isEs
        ? '¿Pueden trabajar adaptándose al horario de nuestra producción?'
        : 'Can you work around our production schedule?',
      a: isEs
        ? 'Absolutamente. Comprendemos que las paradas de planta representan pérdidas económicas importantes. Ofrecemos turnos nocturnos, fines de semana y aplicaciones por fases seccionales para mantener su línea en funcionamiento continuo.'
        : 'Absolutely. We understand that downtime costs money. We offer flexible scheduling, including nights, weekends, and phased work to keep your operation running.',
    },
    {
      q: isEs
        ? '¿Qué normas de preparación de superficies siguen en sus proyectos?'
        : 'What surface preparation standards do you follow?',
      a: isEs
        ? 'Nos regimos estrictamente por las normas internacionales de la SSPC (Society for Protective Coatings) y NACE para la preparación de sustratos metálicos y de concreto, asegurando el perfil de anclaje especificado por el fabricante de la pintura.'
        : 'We follow SSPC (Society for Protective Coatings) and NACE standards for surface preparation. The specific standard depends on the substrate and coating system specified.',
    },
    {
      q: isEs
        ? '¿Qué tipo de garantía ofrecen en recubrimientos industriales?'
        : 'What type of warranty do you offer?',
      a: isEs
        ? 'Ofrecemos una garantía formal por escrito de 5 años en mano de obra para todos nuestros proyectos de pintura y recubrimientos industriales. Si ocurre alguna falla atribuible a la aplicación, responderemos de inmediato sin costo adicional.'
        : 'We offer a 5-year written workmanship warranty on all industrial painting projects. If issues arise due to our workmanship, we will make it right.',
    },
    {
      q: isEs
        ? '¿Cuentan con licencias y seguros al día?'
        : 'Are you licensed and insured?',
      a: isEs
        ? 'Totalmente. Estamos debidamente autorizados, afianzados y respaldados por una póliza integral de responsabilidad civil general de alto límite y compensación de trabajadores. Los certificados de seguro (COI) están disponibles de inmediato.'
        : 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers\' compensation coverage. Certificates of insurance are available upon request.',
    },
    {
      q: isEs
        ? '¿Tienen experiencia y certificación en trabajo en espacios confinados?'
        : 'Do you have experience with confined space entry?',
      a: isEs
        ? 'Sí. Nuestras cuadrillas cuentan con certificación oficial en ingreso seguro a espacios confinados. Cumplimos todos los protocolos OSHA, incluyendo monitoreo continuo de gases, ventilación forzada y personal de rescate en guardia permanente.'
        : 'Yes. Our crews are trained and certified for confined space entry. We follow all OSHA protocols, including atmospheric monitoring, ventilation, and rescue standby.',
    },
    {
      q: isEs
        ? '¿Pueden aplicar recubrimientos en instalaciones ocupadas?'
        : 'Can you apply coatings in occupied facilities?',
      a: isEs
        ? 'Sí. Disponemos de recubrimientos con bajo VOC, libres de solventes y sistemas 100% sólidos, además de utilizar extractores de aire con filtros y cortinas de contención hermética para proteger la salud de sus operarios.'
        : 'Yes. We use low-VOC and solvent-free coatings when required, and we employ ventilation and containment measures to protect your employees and operations.',
    },
    {
      q: isEs
        ? '¿Ofrecen programas de mantenimiento industrial continuo?'
        : 'Do you offer maintenance programs?',
      a: isEs
        ? 'Sí. Diseñamos planes de mantenimiento preventivo y retoque programado para que su planta industrial conserve su protección anticorrosiva y estética durante todo el año a costos presupuestados.'
        : 'Yes. We offer ongoing industrial maintenance painting programs to keep your facility protected year-round. Contact us to learn more.',
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
                {isEs ? 'Pintura Industrial' : 'Industrial Painting'}
              </li>
            </ol>
          </nav>

          <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
            {/* Eyebrow Badge Centered */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md shadow-lg">
              <span className="size-2 rounded-full bg-[#EF3340] animate-pulse" />
              <span className="text-white">PAINTING DALLAS • INDUSTRIAL SERVICES</span>
            </div>

            {/* Headline - Sized smaller & formatted on 2 lines with Line 1 in 1 single line */}
            <h1 className="text-base min-[420px]:text-lg sm:text-xl md:text-2xl lg:text-[27px] xl:text-[30px] font-black tracking-tight text-white leading-snug sm:leading-tight mb-5 max-w-5xl drop-shadow-[0_2px_18px_rgba(0,0,0,0.85)]">
              {isEs ? (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Pintura Industrial Profesional en Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Sistemas de Recubrimiento de Alto Rendimiento - Painting Dallas
                  </span>
                </>
              ) : (
                <>
                  <span className="block lg:whitespace-nowrap">
                    Professional Industrial Painting in Dallas
                  </span>
                  <span className="block mt-1 sm:mt-1.5 lg:whitespace-nowrap bg-gradient-to-r from-white via-slate-100 to-[#EF3340] bg-clip-text text-transparent">
                    Heavy-Duty Protective Coating Systems - Painting Dallas
                  </span>
                </>
              )}
            </h1>

            {/* Sub-headline Narrative Centered */}
            <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-3xl mb-6 drop-shadow-[0_1px_10px_rgba(0,0,0,0.7)] text-center">
              {isEs
                ? 'Recubrimientos de servicio pesado y sistemas de protección para bodegas, plantas de manufactura y complejos industriales. Diseñados para los entornos más exigentes de Texas.'
                : 'Heavy-duty coatings and protective systems for warehouses, manufacturing plants, and industrial facilities. Engineered for the toughest environments in Texas.'}
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
                <Factory className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Recubrimientos Pesados' : 'Heavy-Duty Industrial Systems'}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-slate-200">
                <HardHat className="size-4 text-[#EF3340] shrink-0" />
                <span className="font-semibold">{isEs ? 'Certificado OSHA y Espacios Confinados' : 'Confined Space & OSHA Certified'}</span>
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

      {/* ── SECTION 2: WHY INDUSTRIAL PAINTING IS DIFFERENT ("Built for the Toughest Environments") ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="size-3.5" />
              <span>{isEs ? 'DISEÑADO PARA CONDICIONES EXTREMAS' : 'BUILT FOR THE TOUGHEST ENVIRONMENTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? '¿Por Qué la Pintura Industrial es Completamente Diferente?'
                : 'Why Industrial Painting is Different'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'Las plantas industriales enfrentan condiciones que destruirían la pintura convencional en cuestión de meses: exposición a químicos agresivos, abrasión por tráfico pesado, calor extremo y humedad constante. Su inmueble demanda recubrimientos industriales de alto rendimiento.'
                : 'Industrial facilities face conditions that would destroy ordinary paint in months. From chemical exposure and abrasion to extreme temperatures and constant moisture, your facility demands industrial-grade coating systems engineered for performance.'}
            </p>
          </div>

          {/* Featured Visual Showcase Card */}
          <div className="max-w-5xl mx-auto mb-14">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <Image
                  src="/images/services/industrial-painting.jpg"
                  alt={isEs ? "Pintura y recubrimientos industriales en Dallas" : "Industrial painting and protective coatings in Dallas"}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-white pointer-events-none">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 text-xs sm:text-sm font-bold">
                    <Sparkles className="size-4 text-[#EF3340]" />
                    <span>{isEs ? 'Recubrimientos de Servicio Pesado' : 'Heavy-Duty Industrial Protective Systems'}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#EF3340]/90 backdrop-blur-md px-4 py-2 rounded-full text-xs sm:text-sm font-black uppercase tracking-wider text-white shadow-lg">
                    <ShieldCheck className="size-4" />
                    <span>{isEs ? 'Garantía de 5 Años' : '5-Year Workmanship Warranty'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 5 Technical Differences Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 max-w-7xl mx-auto mb-12">
            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <FlaskConical className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Recubrimientos Especializados' : 'Specialized Coatings'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Epóxicos, uretanos alifáticos y sistemas de alto rendimiento para ambientes severos.'
                    : 'Epoxies, urethanes, and high-performance systems designed specifically for harsh chemical environments.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? 'Resistencia Química' : 'Chemical Barrier'}
              </div>
            </div>

            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Wrench className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Perfilado de Superficie' : 'Surface Prep Expertise'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Perfilado y desengrase de acero y concreto bajo los rigurosos estándares SSPC/NACE.'
                    : 'Proper profiling and decontamination of steel, concrete, and specialized substrates per SSPC.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? 'Norma SSPC' : 'SSPC Adhesion Lock'}
              </div>
            </div>

            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <HardHat className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Cumplimiento de Seguridad' : 'Safety Compliance'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Normas OSHA, protocolos de espacios confinados, líneas de vida y protección respiratoria.'
                    : 'OSHA standards, certified confined space protocols, respirator PPE, and fall protection.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? 'Cero Accidentes' : 'OSHA Compliant'}
              </div>
            </div>

            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <Clock className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Mínimo Tiempo Inactivo' : 'Minimal Downtime'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Trabajos nocturnos y fines de semana adaptados a sus turnos de producción activa.'
                    : 'Working around active production shifts and plant maintenance shutdowns to keep operations running.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? 'Turnos Flexibles' : 'Zero Production Loss'}
              </div>
            </div>

            <div className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between">
              <div>
                <div className="size-11 rounded-xl bg-[#062F57] text-white flex items-center justify-center mb-4">
                  <FileText className="size-5 text-[#EF3340]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">
                  {isEs ? 'Conocimiento Regulatorio' : 'Regulatory Knowledge'}
                </h4>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {isEs
                    ? 'Control de límites de emisión de VOC, normativas ambientales EPA y certificaciones USDA.'
                    : 'Deep knowledge of regional VOC thresholds, EPA environmental rules, and industry guidelines.'}
                </p>
              </div>
              <div className="pt-3 mt-4 border-t border-slate-200 text-[11px] font-bold text-[#062F57]">
                {isEs ? 'Normativa EPA / USDA' : 'Full Compliance'}
              </div>
            </div>
          </div>

          {/* Commitment Banner */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-[#020F1D] via-[#062F57] to-[#020F1D] text-white p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 size-48 rounded-full bg-[#EF3340]/20 blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-6 text-center md:text-left justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-2">
                  <ShieldCheck className="size-3.5" />
                  <span>{isEs ? 'EL COMPROMISO INDUSTRIAL DE PAINTING DALLAS' : 'THE PAINTING DALLAS COMMITMENT'}</span>
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed max-w-2xl">
                  {isEs
                    ? 'En Painting Dallas nos especializamos en pintura industrial y recubrimientos protectores diseñados para extender la vida útil de sus activos, elevar los estándares de seguridad y mantener su planta 100% en regla.'
                    : 'At Painting Dallas, we specialize in industrial painting and protective coatings designed to extend the life of your assets, improve safety, and keep your facility compliant.'}
                </p>
              </div>
              <Link
                href="/free-estimate"
                className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#EF3340] hover:bg-[#D8222F] text-white font-bold text-xs sm:text-sm px-6 py-3.5 uppercase tracking-wider transition-all duration-200 shadow-lg hover:scale-105"
              >
                <span>{isEs ? 'Cotizar Planta' : 'Estimate Facility'}</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: OUR INDUSTRIAL PAINTING SERVICES (9 Solutions) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Layers className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'SOLUCIONES INTEGRALES DE RECUBRIMIENTOS' : 'COMPREHENSIVE INDUSTRIAL COATING SOLUTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Nuestros Servicios de Pintura y Recubrimientos Industriales'
                : 'Our Industrial Painting Services'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Cubrimos el espectro completo de pintura industrial adaptado a las necesidades de manufactura, logística y plantas de procesos en el Metroplex DFW.'
                : 'We provide a full spectrum of industrial painting services tailored to the unique needs of manufacturing, logistics, and processing facilities across the DFW Metroplex.'}
            </p>
          </div>

          {/* 9 Specialized Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {industrialServices.map((service) => {
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
                    <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2">
                      {isEs ? 'Ideal para:' : 'Perfect for:'}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {service.perfectFor.map((item, idx) => (
                        <span
                          key={idx}
                          className="text-[10.5px] font-semibold bg-slate-100 text-slate-800 px-2.5 py-0.5 rounded-md border border-slate-200/60"
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

      {/* ── SECTION 4: INDUSTRIAL COATINGS WE APPLY (10 Systems Matrix) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <FlaskConical className="size-3.5" />
              <span>{isEs ? 'SISTEMAS DE ALTO RENDIMIENTO' : 'HIGH-PERFORMANCE COATING SYSTEMS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Recubrimientos Industriales que Aplicamos' : 'Industrial Coatings We Apply'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Utilizamos únicamente recubrimientos de grado industrial de fabricantes líderes comprobados. Cada sistema se especifica según su ambiente químico, sustrato y exigencia operativa.'
                : 'We use only the highest-quality industrial coatings from trusted manufacturers. Our coating systems are selected based on your specific environment, substrate, and performance requirements.'}
            </p>
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#020F1D] text-white text-xs uppercase tracking-wider font-black">
                  <th className="py-4 px-6 w-1/4">{isEs ? 'Tipo de Recubrimiento' : 'Coating Type'}</th>
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Aplicación Óptima' : 'Best For'}</th>
                  <th className="py-4 px-6">{isEs ? 'Beneficios Clave' : 'Key Benefits'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-sm">
                {coatingsMatrix.map((item, idx) => (
                  <tr
                    key={idx}
                    className={`hover:bg-slate-50 transition-colors ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'
                    }`}
                  >
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <span className="size-2 rounded-full bg-[#EF3340]" />
                      <span>{item.coating}</span>
                    </td>
                    <td className="py-4 px-6 text-slate-600 leading-relaxed font-medium">
                      {item.bestFor}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 font-bold text-slate-800 bg-slate-100 px-3 py-1 rounded-full border border-slate-200 text-xs">
                        <Check className="size-3 text-[#EF3340]" />
                        <span>{item.benefits}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards View */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden max-w-2xl mx-auto">
            {coatingsMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-extrabold text-slate-900 text-base">{item.coating}</h4>
                </div>
                <p className="text-slate-600 text-xs mb-2">
                  <strong>{isEs ? 'Aplicación:' : 'Best For:'}</strong> {item.bestFor}
                </p>
                <div className="text-xs font-bold text-[#062F57] bg-slate-100 p-2 rounded-lg border border-slate-200/60">
                  {item.benefits}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 5: OUR PROVEN INDUSTRIAL PAINTING PROCESS (7 Steps) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <FileText className="size-3.5" />
              <span>{isEs ? 'MÉTODO RIGUROSO PARA PROYECTOS COMPLEJOS' : 'A STRUCTURED APPROACH FOR COMPLEX PROJECTS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Nuestro Proceso Comprobado de Pintura Industrial'
                : 'Our Proven Industrial Painting Process'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Seguimos un protocolo de 7 pasos para garantizar que cada proyecto industrial se complete con seguridad, dentro del cronograma y con los más altos estándares técnicos.'
                : 'We follow a rigorous 7-step process to ensure every project is completed safely, on time, and to the highest standard.'}
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

      {/* ── SECTION 6: SURFACE PREPARATION: THE KEY TO PERFORMANCE (SSPC Standards) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Wrench className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'EL 80% DEL ÉXITO EN RECUBRIMIENTOS' : 'WHY PREPARATION IS 80% OF THE JOB'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preparación de Superficies: La Clave del Rendimiento'
                : 'Surface Preparation: The Key to Coating Performance'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              {isEs
                ? 'En pintura industrial, la preparación lo es todo. Un recubrimiento aplicado sobre una superficie mal preparada fallará invariablemente, sin importar cuán costoso sea el producto. Por eso invertimos fuertemente en preparación profesional bajo normas SSPC.'
                : "In industrial painting, surface preparation is everything. A coating applied over a poorly prepared surface will fail—no matter how premium the product. That's why we invest heavily in proper preparation."}
            </p>
          </div>

          {/* 6 Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
            {prepCapabilities.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#062F57] text-white text-[10px] font-mono font-bold mb-3">
                    {item.standards}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-slate-200 text-xs font-bold text-emerald-700 flex items-center gap-1.5">
                  <CheckCircle2 className="size-4 shrink-0 text-emerald-600" />
                  <span>{isEs ? 'Norma de Control de Calidad' : 'Certified Standard'}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center p-5 rounded-xl bg-slate-900 text-white border border-slate-800">
            <p className="text-sm font-black uppercase tracking-widest text-[#EF3340]">
              {isEs ? 'NUNCA ESCATIMAMOS EN PREPARACIÓN. JAMÁS.' : 'WE NEVER CUT CORNERS ON PREP. EVER.'}
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: SAFETY & COMPLIANCE ("Safety First. Always.") ─── */}
      <section className="py-20 bg-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(6,47,87,0.4)_0%,transparent_60%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(239,51,64,0.15)_0%,transparent_60%)] pointer-events-none" />

        <div className="site-shell relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3 backdrop-blur-sm">
              <HardHat className="size-3.5" />
              <span>{isEs ? 'SEGURIDAD ANTE TODO. SIEMPRE.' : 'SAFETY FIRST. ALWAYS.'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-4">
              {isEs ? 'Seguridad y Cumplimiento Normativo' : 'Safety & Compliance'}
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'La pintura industrial conlleva riesgos intrínsecos: alturas, espacios confinados y materiales controlados. En Painting Dallas, la seguridad no es opcional: está arraigada en todo lo que hacemos.'
                : 'Industrial painting involves inherent risks—heights, confined spaces, hazardous materials, and heavy equipment. At Painting Dallas, safety is not optional. It’s embedded in everything we do.'}
            </p>
          </div>

          {/* 8 Safety Credentials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
            {safetyCredentials.map((cred, idx) => (
              <div
                key={idx}
                className="bg-white/[0.06] hover:bg-white/[0.1] border border-white/10 hover:border-[#EF3340]/50 rounded-2xl p-6 backdrop-blur-md transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="size-10 rounded-xl bg-[#062F57] text-[#EF3340] flex items-center justify-center border border-white/10 mb-3">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{cred.title}</h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{cred.desc}</p>
                </div>
                <div className="pt-3 mt-4 border-t border-white/10 text-[11px] font-bold text-emerald-400 flex items-center gap-1.5">
                  <Check className="size-3.5" />
                  <span>{isEs ? 'Protocolo Activo en Planta' : 'Verified Protocol'}</span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-400 max-w-2xl mx-auto">
            {isEs
              ? 'Llegamos a su planta con un Análisis de Riesgos en el Trabajo (JHA) y realizamos reuniones diarias de seguridad previas a cada turno.'
              : 'We arrive on site with a Job Hazard Analysis (JHA) and hold daily safety meetings to ensure every crew member goes home safe.'}
          </p>
        </div>
      </section>

      {/* ── SECTION 8: WHAT SETS PAINTING DALLAS APART ("The Painting Dallas Advantage") ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#062F57]/10 border border-[#062F57]/20 text-[#062F57] text-xs font-bold uppercase tracking-widest mb-3">
              <Award className="size-3.5 text-[#EF3340]" />
              <span>{isEs ? 'LA VENTAJA COMPETITIVA' : 'THE PAINTING DALLAS ADVANTAGE'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? '¿Por Qué Elegir Painting Dallas?' : 'What Sets Painting Dallas Apart?'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Cuando nos contrata para su proyecto industrial, obtiene mucho más que pintura: obtiene un socio estratégico comprometido con proteger sus activos y su operación.'
                : 'When you hire us for your industrial painting project, you get more than just coatings. You get a partner dedicated to protecting your assets and your operation.'}
            </p>
          </div>

          {/* 8 Advantage Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {advantageList.map((adv, idx) => {
              const AdvIcon = adv.icon;
              return (
                <div
                  key={idx}
                  className="bg-white hover:bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="size-12 rounded-xl bg-[#062F57] text-[#EF3340] flex items-center justify-center mb-4 shadow-sm">
                      <AdvIcon className="size-6" />
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{adv.title}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">{adv.desc}</p>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <CheckCircle2 className="size-3.5 shrink-0 text-emerald-600" />
                    <span>{isEs ? 'Garantía Estándar' : 'Standard on Every Job'}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 9: INDUSTRIES WE SERVE (10 Industrial Sectors) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Factory className="size-3.5" />
              <span>{isEs ? 'SECTORES INDUSTRIALES' : 'TRUSTED ACROSS DIVERSE INDUSTRIAL SECTORS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs ? 'Industrias que Atendemos' : 'Industries We Serve'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Experiencia comprobada en plantas químicas, manufactura pesada, alimentos, aeronáutica y centrales energéticas en Texas.'
                : 'Engineered protective coating systems designed for the unique operational realities of diverse industrial plants.'}
            </p>
          </div>

          {/* Clean Modern Industries Table */}
          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-800 text-xs uppercase tracking-wider font-black border-b border-slate-200">
                  <th className="py-4 px-6 w-1/3">{isEs ? 'Sector Industrial' : 'Industry'}</th>
                  <th className="py-4 px-6">{isEs ? 'Proyectos Típicos de Recubrimientos' : 'Common Projects'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-sm">
                {industrialSectors.map((ind, idx) => {
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

      {/* ── SECTION 10: SERVICE AREAS (5 Counties & 50-Mile Radius) ─── */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
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
                ? 'Brindamos servicios de pintura y recubrimientos industriales en un radio de 50 millas alrededor de Dallas, incluyendo:'
                : 'We provide industrial painting services within a 50-mile radius of Dallas, including:'}
            </p>
          </div>

          {/* 5 County Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
            {serviceCounties.map((item, idx) => (
              <div
                key={idx}
                className="bg-white hover:bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#EF3340]/40 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
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
                  <span>{isEs ? 'Cuadrillas Industriales Activas' : 'Industrial Crews Dispatched'}</span>
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
                    ? 'Llámenos al (469) 368-5885; lo más seguro es que sí tengamos cobertura para su planta industrial.'
                    : 'Give us a call at (469) 368-5885—we likely do. We cover all industrial zones across North Texas.'}
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

      {/* ── SECTION 11: FREQUENTLY ASKED QUESTIONS (Interactive FAQ Accordion) ─── */}
      <section className="py-20 bg-white border-b border-slate-200/80">
        <div className="site-shell max-w-4xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#EF3340]/10 border border-[#EF3340]/25 text-[#EF3340] text-xs font-bold uppercase tracking-widest mb-3">
              <Factory className="size-3.5" />
              <span>{isEs ? 'PREGUNTAS FRECUENTES' : 'COMMON QUESTIONS'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-4">
              {isEs
                ? 'Preguntas Frecuentes sobre Pintura Industrial'
                : 'Frequently Asked Questions'}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              {isEs
                ? 'Respuestas directas a las preguntas que los directores de planta e ingenieros de mantenimiento nos hacen con más frecuencia.'
                : 'Common questions plant managers, facility engineers, and operations directors ask us most.'}
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

      {/* ── SECTION 12: READY TO PROTECT YOUR INDUSTRIAL FACILITY? & TRUST BADGES ─── */}
      <section className="py-20 bg-gradient-to-b from-[#020F1D] via-[#062F57] to-[#020F1D] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(239,51,64,0.18)_0%,transparent_70%)] pointer-events-none" />

        <div className="site-shell relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#EF3340] mb-5 backdrop-blur-md">
            <Sparkles className="size-3.5" />
            <span className="text-white">
              {isEs ? 'EXTIENDA LA VIDA ÚTIL DE SUS ACTIVOS' : "LET'S EXTEND THE LIFE OF YOUR ASSETS"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white tracking-tight mb-6 drop-shadow-md">
            {isEs
              ? '¿Listo para Proteger su Instalación Industrial?'
              : 'Ready to Protect Your Industrial Facility?'}
          </h2>

          <p className="text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto mb-4">
            {isEs
              ? 'Ya sea que necesite recubrir un solo tanque de almacenamiento o repintar una planta de manufactura completa, Painting Dallas está listo para entregar resultados sobresalientes.'
              : "Whether you need a single tank coated or an entire facility repainted, Painting Dallas is ready to deliver."}
          </p>

          <p className="text-xs uppercase tracking-widest font-black text-[#EF3340] mb-10">
            {isEs
              ? 'Con la confianza de 180+ clientes comerciales e industriales en todo el Metroplex de Dallas-Fort Worth.'
              : 'Trusted by 180+ commercial and industrial clients across the Dallas-Fort Worth Metroplex.'}
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

          {/* Trust Badges Strip (9 Badges) */}
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
                <HardHat className="size-3.5 text-amber-400" />
                <span>OSHA-Compliant Safety</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <Wrench className="size-3.5 text-cyan-400" />
                <span>SSPC-Compliant Prep</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10">
                <HardHat className="size-3.5 text-sky-400" />
                <span>Confined Space Certified</span>
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
