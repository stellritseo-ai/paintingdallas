export type Language = 'en' | 'es';

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  features: string[];
  fullScope: string;
  prepDetails: string;
  facilityTypes: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'office' | 'retail' | 'industrial' | 'building' | 'facility' | 'restoration';
  categoryLabel: string;
  location: string;
  scope: string;
  image: string;
  sqft: string;
  completionTime: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      commercialOnly: 'Commercial Focus',
      about: 'About',
      process: 'Process',
      work: 'Our Work',
      whyUs: 'Why Choose Us',
      faq: 'FAQ',
      serviceArea: 'Service Area',
      contact: 'Contact',
      getEstimate: 'GET A FREE ESTIMATE',
      callNow: 'CALL NOW',
      phone: '(469) 360-5805',
      commercialQuote: 'REQUEST A COMMERCIAL QUOTE',
    },
    hero: {
      eyebrow: 'COMMERCIAL PAINTING & RESTORATION',
      headlineStart: 'COMMERCIAL PAINTING',
      headlineAccent: 'BUILT FOR BUSINESS.',
      subheadline:
        'We provide professional interior and exterior painting services for residential and commercial properties across Dallas, Texas. Our skilled team focuses on quality finishes, reliable service, and transforming your space with precision and care.',
      ctaPrimary: 'GET A FREE ESTIMATE',
      ctaSecondary: 'REQUEST A COMMERCIAL QUOTE',
      badge1: '10+ YEARS EXPERIENCE',
      badge2: '50-MILE SERVICE RADIUS',
      badge3: 'ENGLISH & SPANISH CREWS',
      commercialOnlyPill: '100% COMMERCIAL ONLY — NO RESIDENTIAL WORK',
    },
    trustBar: [
      { stat: '10+', label: 'YEARS EXPERIENCE', detail: 'Proven Dallas contractor track record' },
      { stat: '50 MI', label: 'SERVICE AREA', detail: 'In every direction from Dallas, TX' },
      { stat: '100%', label: 'COMMERCIAL SPECIALISTS', detail: 'Offices, retail, industrial & facilities' },
      { stat: 'EN | ES', label: 'ENGLISH & SPANISH', detail: 'Bilingual supervision on every site' },
      { stat: 'A+', label: 'QUALITY CRAFTSMANSHIP', detail: 'Rigorous surface prep & coatings' },
    ],
    services: {
      tag: 'COMPREHENSIVE CAPABILITIES',
      title: 'PROFESSIONAL COMMERCIAL PAINTING SERVICES',
      subtitle:
        "From preparation to final finish, we provide complete commercial painting solutions designed around your property's needs, schedule, and appearance.",
      learnMore: 'Learn More',
      closeModal: 'Close',
      items: [
        {
          id: 'interior',
          number: '01',
          title: 'COMMERCIAL INTERIOR PAINTING',
          shortDesc:
            'Professional interior painting for offices, retail spaces, facilities, commercial buildings, and business environments.',
          image: '/images/interior.jpg',
          features: [
            'Zero & Low-VOC commercial interior coatings',
            'After-hours and weekend scheduling to avoid business disruption',
            'Full floor and fixture masking protection',
            'High-durability scuff-resistant architectural wall coatings',
          ],
          fullScope:
            'Complete interior coating solutions including drywall patch repair, commercial primer application, precision trim finishing, atrium ceilings, executive suites, conference rooms, and commercial tenant turnover.',
          prepDetails:
            'Meticulous dust containment, poly floor sheeting, seam sealing, and thorough surface vacuuming prior to finish coating.',
          facilityTypes: ['Corporate Headquarters', 'Medical Offices', 'Retail Showrooms', 'Financial Institutions'],
        },
        {
          id: 'exterior',
          number: '02',
          title: 'COMMERCIAL EXTERIOR PAINTING',
          shortDesc:
            'Durable exterior coatings and professional finishes designed to improve appearance and protect commercial properties.',
          image: '/images/exterior.jpg',
          features: [
            'Weather-resistant elastomeric architectural coatings',
            'Commercial boom and scissor lift operations',
            'High-adhesion primers for stucco, concrete, and metal',
            'UV-resistant commercial exterior color formulations',
          ],
          fullScope:
            'Exterior protection encompassing multi-story exterior envelopes, retail shopping center canopies, commercial parapets, and corporate plaza facades.',
          prepDetails:
            'High-pressure power washing, efflorescence neutralizer, concrete crack elastomeric caulk patching, and rusted metal priming.',
          facilityTypes: ['Shopping Centers', 'Office Parks', 'Commercial Plazas', 'Bank Branches'],
        },
        {
          id: 'building',
          number: '03',
          title: 'COMMERCIAL BUILDING PAINTING',
          shortDesc:
            'Complete painting solutions for large-scale commercial properties, corporate campuses, and multi-story structures.',
          image: '/images/building.jpg',
          features: [
            'Turnkey commercial project management',
            'Rigorous safety protocols and OSHA compliance',
            'Aerial swing stage and high-reach boom equipment',
            'Comprehensive multi-phase staging and scheduling',
          ],
          fullScope:
            'Full-scale architectural facade repainting, commercial glazing framework refinishing, high-rise structural exterior walls, and campus unified color palettes.',
          prepDetails:
            'Structural perimeter safety staging, complete pedestrian canopy walkways, surface degreasing, and industrial adhesion testing.',
          facilityTypes: ['Multi-Story Office Towers', 'Commercial Campuses', 'Hotels & Hospitality', 'Educational Institutions'],
        },
        {
          id: 'industrial',
          number: '04',
          title: 'INDUSTRIAL PAINTING',
          shortDesc:
            'Professional coatings and painting solutions for industrial environments, warehouses, and manufacturing facilities.',
          image: '/images/industrial.jpg',
          features: [
            'Heavy-duty industrial epoxy and urethane coatings',
            'Overhead structural steel truss spray painting',
            'Industrial high-gloss, chemical-resistant floor finishes',
            'OSHA safety yellow staging, striping, and demarcation',
          ],
          fullScope:
            'Heavy industrial interior and exterior coatings engineered for extreme duty cycles, forklift traffic, chemical exposure, and continuous logistics operations.',
          prepDetails:
            'Commercial shot blasting, degreasing, high-pressure washing, and mechanical profile grinding for maximum substrate bond.',
          facilityTypes: ['Logistics Warehouses', 'Manufacturing Plants', 'Distribution Centers', 'Cold Storage Facilities'],
        },
        {
          id: 'facility',
          number: '05',
          title: 'PROPERTY & FACILITY PAINTING',
          shortDesc:
            'Reliable painting services for ongoing property maintenance, facility improvements, and real estate asset management.',
          image: '/images/facility.jpg',
          features: [
            'Preferred contractor maintenance service plans',
            'Rapid tenant turnover and lease-ready turnaround',
            'Touch-up programs for high-traffic corridors',
            'Dedicated commercial project manager assigned to your property',
          ],
          fullScope:
            'Ongoing commercial property painting programs, common area refreshments, commercial stairwells, parkades, elevator lobbies, and exterior architectural fixtures.',
          prepDetails:
            'Fast-dry coating systems, scheduled section isolation, and odorless zero-VOC formulations for occupied properties.',
          facilityTypes: ['Commercial Property Management', 'Corporate Business Parks', 'Medical Centers', 'Mixed-Use Developments'],
        },
        {
          id: 'restoration',
          number: '06',
          title: 'COMMERCIAL PAINTING RESTORATION',
          shortDesc:
            'Surface preparation, architectural restoration, repainting, and finish renewal for weathered commercial structures.',
          image: '/images/restoration.jpg',
          features: [
            'Architectural masonry and brick facade restoration',
            'Historical commercial profile matching',
            'Lead-safe surface stabilization and paint removal',
            'Breathable silicate and elastomeric breathable coatings',
          ],
          fullScope:
            'Restoring weathered, damaged, or chalking exterior commercial surfaces to pristine appearance while creating an impervious barrier against Texas humidity and heat.',
          prepDetails:
            'Chemical stripping, substrate stabilization, tuckpointing repair integration, and deep penetrating primers.',
          facilityTypes: ['Historic Commercial Buildings', 'Repurposed Lofts', 'Urban Commercial Centers', 'Civic Facilities'],
        },
        {
          id: 'surface_prep',
          number: '07',
          title: 'PRESSURE WASHING & SURFACE PREPARATION',
          shortDesc:
            'Proper commercial preparation before painting to ensure maximum adhesion and long-lasting coating durability.',
          image: '/images/surface_prep.jpg',
          features: [
            'Industrial high-pressure washing up to 4,000 PSI',
            'Hot water degreasing for oil, grime, and atmospheric residue',
            'Mildew, mold, and algae eradication treatments',
            'Concrete joint sealing and elastomeric caulking',
          ],
          fullScope:
            'Every long-lasting commercial paint job depends entirely on surface preparation. We mechanically clean, etch, and stabilize substrates before a single drop of paint touches the surface.',
          prepDetails:
            'Containment of wash water, environment-friendly detergents, complete rinse cycles, and digital moisture meter verification before coating.',
          facilityTypes: ['Commercial Parking Garages', 'Industrial Concrete Enclosures', 'Retail Plazas', 'Dock Loading Bays'],
        },
        {
          id: 'specialty',
          number: '08',
          title: 'SPECIALTY COATINGS',
          shortDesc:
            'Professional high-performance coating solutions engineered based on your property’s specific operational requirements.',
          image: '/images/specialty.jpg',
          features: [
            'High-traffic commercial epoxy floor systems',
            'Electrostatic architectural metal coatings',
            'Anti-graffiti barrier coatings and sealers',
            'Fire-retardant and intumescent coating applications',
          ],
          fullScope:
            'Advanced commercial application techniques for substrates requiring specific chemical resistance, thermal resilience, antimicrobial performance, or architectural metal finishes.',
          prepDetails:
            'Diamond grinding, moisture barrier application, and precision multi-coat build-ups per manufacturer architectural specifications.',
          facilityTypes: ['Clean Rooms & Labs', 'Data Centers', 'High-Traffic Industrial Floors', 'Commercial Kitchens'],
        },
      ] as ServiceItem[],
    },
    commercialOnly: {
      badge: 'STRICT COMMERCIAL SPECIALIZATION',
      headline: 'COMMERCIAL PAINTING. NOT A SIDE SERVICE.',
      supporting:
        'Painting Dallas is focused exclusively on commercial painting. Our work is built around the demands of businesses, property managers, facility teams, contractors, and commercial properties.',
      comparisonTitle1: 'COMMERCIAL SPECIALISTS (PAINTING DALLAS)',
      comparisonTitle2: 'GENERAL / RESIDENTIAL PAINTERS',
      points: [
        {
          title: 'Commercial-Focused Expertise',
          us: '10+ years dedicated exclusively to commercial building codes, high-durability coatings, and commercial specifications.',
          others: 'Primarily residential crews attempting commercial jobs without commercial coating mastery.',
        },
        {
          title: 'Professional Project Planning',
          us: 'Rigorous milestone schedules, detailed scopes of work, submittals, and formal commercial project management.',
          others: 'Informal verbal estimates with shifting dates and poor commercial documentation.',
        },
        {
          title: 'Large-Scale Project Capability',
          us: 'High-reach aerial boom lifts, multi-person dedicated commercial crews, and scalable capacity for 100,000+ sq ft.',
          others: 'Limited manpower, basic step ladders, and inability to handle large commercial footprints.',
        },
        {
          title: 'Safety-Conscious Work & Compliance',
          us: 'Strict OSHA standards, certified aerial lift operators, comprehensive safety harnesses, and full jobsite safety plans.',
          others: 'Minimal commercial safety compliance and lack of formal jobsite safety protocols.',
        },
        {
          title: 'Reliable Scheduling (Night & Weekend)',
          us: 'Flexible off-hours, weekend, and night shifts scheduled specifically to avoid interrupting your daily business operations.',
          others: 'Only work standard 9–5 hours, disrupting employees, tenants, and commercial customers.',
        },
        {
          title: 'Quality Surface Preparation',
          us: 'Industrial power washing, diamond grinding, shot blasting, and elastomeric repair for decades-long adhesion.',
          others: 'Quick surface wiping with minimal prep leading to premature coating peeling.',
        },
        {
          title: 'Consistent Commercial Finishes',
          us: 'Commercial-grade high-solids epoxies, urethanes, and elastomeric coatings that withstand harsh commercial wear.',
          others: 'Standard consumer-grade latex paints that scuff, fade, and degrade rapidly in commercial settings.',
        },
        {
          title: 'Professional Communication',
          us: 'Dedicated bilingual project supervisor, clear progress reports, daily site walkouts, and responsive communication.',
          others: 'Unreliable communication, unanswered calls, and missing jobsite supervision.',
        },
      ],
    },
    transform: {
      eyebrow: 'BUILT ON INTEGRITY',
      headline: 'BUILD. PAINT. TRANSFORM. WITH CONFIDENCE.',
      body:
        'Every commercial property represents your business. We combine careful preparation, professional workmanship, quality materials, and dependable project management to deliver results that look professional and perform over time.',
      cta: 'START YOUR PROJECT',
      stats: [
        { value: '10+', label: 'Years Serving Dallas' },
        { value: '50 MI', label: 'Commercial Radius' },
        { value: '100%', label: 'Commercial Focus' },
      ],
    },
    whyChooseUs: {
      tag: 'OUR COMPETITIVE EDGE',
      headline: 'WHY CHOOSE PAINTING DALLAS?',
      subtitle:
        'We engineer our services to meet the strict demands of general contractors, property managers, and facility directors.',
      reasons: [
        {
          num: '01',
          title: '10+ YEARS OF EXPERIENCE',
          desc: 'More than a decade of experience delivering professional painting solutions across the Dallas commercial real estate landscape.',
        },
        {
          num: '02',
          title: 'COMMERCIAL ONLY',
          desc: 'Our focus is commercial painting—not residential work. Our equipment, crews, and coatings are calibrated solely for businesses.',
        },
        {
          num: '03',
          title: '50-MILE SERVICE AREA',
          desc: 'Serving commercial properties within approximately 50 miles in every direction from Dallas with dependable local dispatch.',
        },
        {
          num: '04',
          title: 'QUALITY WORKMANSHIP',
          desc: 'Detailed preparation and professional finishing standards that ensure superior adhesion, crisp lines, and longevity.',
        },
        {
          num: '05',
          title: 'RELIABLE SERVICE',
          desc: 'Clear communication, dependable scheduling, night/weekend shifts, and professional commercial project coordination.',
        },
        {
          num: '06',
          title: 'ENGLISH & SPANISH',
          desc: 'Clear communication with English- and Spanish-speaking clients, project superintendents, property managers, and crews.',
        },
      ],
    },
    about: {
      tag: 'COMPANY PROFILE',
      headline: 'ABOUT PAINTING DALLAS',
      subheading: 'PROFESSIONAL PAINTING & RESTORATION SERVICES',
      p1:
        'Painting Dallas provides dependable interior and exterior painting services for residential and commercial properties across Dallas, Texas. From detailed surface preparation to flawless finishing, our experienced team delivers high-quality, long-lasting results with professionalism, precision, and attention to detail.',
      p2:
        'We understand that commercial painting projects require more than simply applying paint. Proper preparation, coordination, communication, and attention to detail are essential to delivering a professional finished property.',
      p3:
        'Our goal is simple: Deliver commercial painting work that makes your property look professional, protects your investment, and gives your business a finish you can be proud of.',
      cta: 'REQUEST A COMMERCIAL QUOTE',
      keyMetrics: [
        { label: 'Commercial Experience', value: '10+ Years' },
        { label: 'Service Territory', value: '50-Mile Radius' },
        { label: 'Bilingual Supervision', value: 'English & Spanish' },
        { label: 'Project Focus', value: '100% Commercial' },
      ],
    },
    missionVision: {
      tag: 'OUR FOUNDATION',
      missionTitle: 'MISSION',
      missionText:
        'Our mission is to provide dependable commercial painting services with professional workmanship, clear communication, and attention to detail.',
      visionTitle: 'VISION',
      visionText:
        'Our vision is to become a trusted commercial painting partner for businesses and properties throughout the Dallas service area.',
      commitmentTitle: 'COMMITMENT',
      commitmentText:
        'We are committed to quality preparation, professional finishes, dependable service, and customer satisfaction on every project.',
    },
    process: {
      tag: 'PROVEN METHODOLOGY',
      headline: 'A BETTER COMMERCIAL PAINTING PROCESS',
      subtitle:
        'A structured 6-stage commercial workflow designed to eliminate surprises, respect your business schedule, and deliver immaculate finishes.',
      steps: [
        {
          num: '01',
          title: 'CONSULTATION',
          desc: 'Understand the property, scope, business goals, and timeline requirements.',
        },
        {
          num: '02',
          title: 'SITE ASSESSMENT',
          desc: 'Evaluate surfaces, existing conditions, preparation requirements, and safety access needs.',
        },
        {
          num: '03',
          title: 'PROJECT PLAN',
          desc: 'Develop a clear scope, schedule, materials plan, off-hours phasing, and project approach.',
        },
        {
          num: '04',
          PREPARATION: 'PREPARATION',
          title: 'PREPARATION',
          desc: 'Proper preparation is the foundation of a professional finish: pressure washing, masking, and priming.',
        },
        {
          num: '05',
          title: 'PAINT & RESTORE',
          desc: 'Professional painting and restoration work performed with meticulous attention to detail and safety.',
        },
        {
          num: '06',
          title: 'FINAL WALKTHROUGH',
          desc: 'Review the finished project with your team to make sure every square foot meets expectations.',
        },
      ],
    },
    projects: {
      tag: 'COMMERCIAL PORTFOLIO',
      headline: "COMMERCIAL PROJECTS WE'RE PROUD OF",
      subtitle:
        'Explore our recent commercial exterior, interior, industrial, and restoration projects completed across the Dallas metroplex.',
      all: 'All Projects',
      viewDetails: 'View Project Details',
      closeModal: 'Close',
      categories: {
        all: 'ALL',
        office: 'OFFICE',
        retail: 'RETAIL',
        industrial: 'INDUSTRIAL',
        building: 'COMMERCIAL BUILDINGS',
        facility: 'PROPERTY MAINTENANCE',
        restoration: 'RESTORATION',
      },
      items: [
        {
          id: 'p1',
          title: 'Corporate Office Atrium & Headquarters',
          category: 'office',
          categoryLabel: 'Office',
          location: 'Dallas, TX',
          scope: 'High-bay atrium coating, architectural navy accent walls, zero-VOC interior finishes',
          image: '/images/interior.jpg',
          sqft: '48,000 Sq. Ft.',
          completionTime: 'Completed on scheduled weekend off-hours',
        },
        {
          id: 'p2',
          title: 'North Dallas Retail Plaza & Canopies',
          category: 'retail',
          categoryLabel: 'Retail',
          location: 'Plano, TX',
          scope: 'Commercial exterior canopy coating, architectural parapets, storefront aluminum frames',
          image: '/images/exterior.jpg',
          sqft: '32,500 Sq. Ft.',
          completionTime: 'Zero retail store disruption',
        },
        {
          id: 'p3',
          title: 'Metroplex Distribution & Logistics Facility',
          category: 'industrial',
          categoryLabel: 'Industrial',
          location: 'Grand Prairie, TX',
          scope: 'Structural steel ceiling spray, heavy-duty epoxy floor coating, safety lane striping',
          image: '/images/industrial.jpg',
          sqft: '120,000 Sq. Ft.',
          completionTime: 'Phased industrial shutdown schedule',
        },
        {
          id: 'p4',
          title: 'Multi-Story Corporate Commercial Tower',
          category: 'building',
          categoryLabel: 'Commercial Buildings',
          location: 'Dallas, TX',
          scope: 'High-reach boom lift exterior painting, concrete spall patching, elastomeric sealants',
          image: '/images/building.jpg',
          sqft: '85,000 Sq. Ft.',
          completionTime: 'Executed with swing stages & boom lifts',
        },
        {
          id: 'p5',
          title: 'Commercial Business Center & Medical Plaza',
          category: 'facility',
          categoryLabel: 'Property Maintenance',
          location: 'Irving, TX',
          scope: 'Colonnade exterior repainting, common corridor refreshes, architectural metal coating',
          image: '/images/facility.jpg',
          sqft: '64,000 Sq. Ft.',
          completionTime: 'Ongoing property management contract',
        },
        {
          id: 'p6',
          title: 'Historic Commercial Heritage Facade Restoration',
          category: 'restoration',
          categoryLabel: 'Restoration',
          location: 'Downtown Dallas, TX',
          scope: 'Masonry stabilization, chemical cleaning, historic profile coating renewal',
          image: '/images/restoration.jpg',
          sqft: '28,000 Sq. Ft.',
          completionTime: 'Multi-tiered scaffolding restoration',
        },
      ] as ProjectItem[],
    },
    videoSection: {
      tag: 'CRAFTSMANSHIP IN ACTION',
      headline: 'FROM PREPARATION TO FINAL FINISH.',
      subtitle:
        'Watch how our commercial painting crews operate with precision, safety, and rigorous execution on every commercial property.',
      features: [
        'High-reach boom & scissor lift positioning',
        'Industrial masking & substrate surface prep',
        'Airless spray application & back-rolling',
        'Strict OSHA safety harness standards',
        'Multi-angle quality control inspection',
      ],
      cta: 'SEE OUR WORK',
    },
    testimonials: {
      tag: 'COMMERCIAL CLIENT REVIEWS',
      headline: 'WHAT OUR CLIENTS SAY',
      subtitle:
        'Hear from property managers, general contractors, and facility directors who rely on Painting Dallas for commercial excellence.',
      notice: 'Client feedback from verified commercial facility partnerships.',
      items: [
        {
          id: 't1',
          rating: 5,
          quote:
            'Painting Dallas handled the exterior repainting of our 4-story corporate office building in Dallas. Their crew operated seamlessly without disrupting our commercial tenants. The finish and preparation were second to none.',
          author: 'Commercial Property Manager',
          role: 'Director of Asset Management',
          company: 'Dallas Commercial Realty Trust',
        },
        {
          id: 't2',
          rating: 5,
          quote:
            'As a commercial general contractor, finding a reliable painting subcontractor who shows up on schedule with full equipment and bilingual foremen is rare. Painting Dallas delivers every time.',
          author: 'Commercial General Contractor',
          role: 'Senior Project Superintendent',
          company: 'DFW Commercial Construction',
        },
        {
          id: 't3',
          rating: 5,
          quote:
            'They coated over 80,000 square feet of warehouse structural steel and high-traffic epoxy floors for our logistics facility. Professional project planning and flawless execution.',
          author: 'Facility Operations Director',
          role: 'VP of Facility Operations',
          company: 'North Texas Logistics Hub',
        },
      ] as TestimonialItem[],
    },
    faq: {
      tag: 'FREQUENTLY ASKED QUESTIONS',
      headline: 'FREQUENTLY ASKED QUESTIONS',
      subtitle:
        'Clear, straightforward answers regarding our commercial painting services, capabilities, and service area.',
      items: [
        {
          id: 'faq1',
          question: 'Do you only provide commercial painting?',
          answer:
            'Yes, absolutely. Painting Dallas is 100% focused on commercial painting. We do not take on residential house painting. Our crews, equipment, safety standards, and coatings are specialized exclusively for businesses, facilities, retail, and commercial properties.',
        },
        {
          id: 'faq2',
          question: 'What areas do you serve?',
          answer:
            'We serve the entire Dallas-Fort Worth metroplex and surrounding cities, including Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Carrollton, Garland, Richardson, Grand Prairie, McKinney, and Denton.',
        },
        {
          id: 'faq3',
          question: 'How far do you travel?',
          answer:
            'We operate across a 50-mile service radius in every direction from Dallas, allowing us to serve commercial properties and corporate parks throughout North Texas.',
        },
        {
          id: 'faq4',
          question: 'How many years of experience do you have?',
          answer:
            'Painting Dallas brings more than 10 years of commercial painting and surface restoration experience, serving corporate, industrial, and retail commercial clients.',
        },
        {
          id: 'faq5',
          question: 'Do you provide interior and exterior commercial painting?',
          answer:
            'Yes. We provide complete interior and exterior commercial painting solutions, including high-traffic interior office coatings, exterior weather-resistant elastomeric coatings, high-rise building facades, and specialized industrial coatings.',
        },
        {
          id: 'faq6',
          question: 'Do you work with property managers and businesses?',
          answer:
            'Yes. A major portion of our work is partnering with commercial property managers, facility management teams, corporate real estate owners, and general contractors on both one-off projects and scheduled property maintenance programs.',
        },
        {
          id: 'faq7',
          question: 'Can you handle large commercial projects?',
          answer:
            'Yes. Our team is equipped with high-reach boom lifts, scissor lifts, airless spray rigs, and scalable commercial crews capable of handling commercial properties of all sizes, from 5,000 sq ft up to multi-story buildings and 100,000+ sq ft industrial facilities.',
        },
        {
          id: 'faq8',
          question: 'Do you provide estimates?',
          answer:
            'Yes. We provide free, comprehensive commercial estimates and detailed proposals outlining the full scope of work, recommended coating systems, preparation steps, and project schedule.',
        },
        {
          id: 'faq9',
          question: 'Do you offer restoration and surface preparation?',
          answer:
            'Yes. Thorough surface preparation is central to our work. We provide industrial pressure washing, concrete crack patching, efflorescence removal, mechanical grinding, elastomeric sealant application, and architectural masonry restoration.',
        },
        {
          id: 'faq10',
          question: 'Do you speak Spanish?',
          answer:
            'Yes. We are completely bilingual. Our management, superintendents, and crew foremen communicate fluently in both English and Spanish, ensuring clear collaboration with all property managers, general contractors, and on-site teams.',
        },
      ] as FAQItem[],
    },
    serviceArea: {
      tag: 'METROPLEX COVERAGE',
      headline: 'COMMERCIAL PAINTING ACROSS THE DALLAS AREA',
      subheadline:
        'Serving commercial properties within approximately 50 miles in every direction from Dallas.',
      radiusTitle: '50-MILE SERVICE RADIUS',
      radiusDesc: 'Prompt commercial dispatch throughout the entire Dallas-Fort Worth metroplex.',
      cities: [
        'Dallas',
        'Fort Worth',
        'Plano',
        'Irving',
        'Arlington',
        'Frisco',
        'Carrollton',
        'Garland',
        'Richardson',
        'Grand Prairie',
        'McKinney',
        'Denton',
      ],
      facilitiesTitle: 'Commercial Property Types Served:',
      facilities: [
        'Commercial Properties & Office Parks',
        'Corporate Headquarters & Business Centers',
        'Industrial Facilities & Warehouses',
        'Retail Centers & Shopping Plazas',
        'Medical & Healthcare Complexes',
        'Hospitality & Commercial Assets',
      ],
    },
    finalCta: {
      headline: 'READY TO TRANSFORM YOUR COMMERCIAL PROPERTY?',
      subheadline:
        "Let's discuss your next commercial painting project. Receive a detailed commercial scope of work and free estimate tailored to your schedule.",
      btnEstimate: 'GET A FREE ESTIMATE',
      btnCall: 'CALL NOW',
      bullets: [
        'Commercial Painting Specialists',
        '10+ Years Experience',
        '50-Mile Service Area',
        'English & Spanish',
      ],
    },
    contact: {
      tag: 'DIRECT ESTIMATE REQUEST',
      headline: "LET'S TALK ABOUT YOUR PROJECT.",
      subheadline:
        'Fill out the form below for a rapid response from a commercial painting specialist, or call us directly.',
      fields: {
        name: 'Full Name',
        company: 'Company / Organization',
        phone: 'Phone Number',
        email: 'Work Email',
        projectType: 'Project Type',
        projectTypePlaceholder: 'Select Commercial Project Type',
        projectTypes: [
          'Commercial Interior Painting',
          'Commercial Exterior Painting',
          'Commercial Building Painting',
          'Industrial / Warehouse Painting',
          'Property & Facility Maintenance',
          'Commercial Restoration',
          'Surface Prep / Pressure Washing',
          'Specialty Coatings',
        ],
        address: 'Property Address / City',
        sqft: 'Approximate Square Footage (Optional)',
        details: 'Project Details & Timeline',
        detailsPlaceholder:
          'Please describe the property, surface conditions, preferred work schedule (standard vs off-hours), and estimated timeline...',
        submit: 'REQUEST A COMMERCIAL QUOTE',
        submitting: 'Processing Request...',
      },
      directCall: 'Prefer to speak with an estimator immediately?',
      callAction: 'CALL NOW',
      successTitle: 'Commercial Quote Request Received',
      successMessage:
        'Thank you for reaching out. A Painting Dallas commercial estimator will review your project details and contact you within 1 business day.',
    },
    footer: {
      description:
        'Professional commercial painting and restoration services serving businesses, facilities, and commercial properties throughout the Dallas area.',
      quickLinks: 'Navigation',
      servicesTitle: 'Commercial Services',
      serviceAreaTitle: 'Service Area',
      serviceAreaText: 'Dallas, TX and surrounding areas within approximately 50 miles.',
      languagesTitle: 'Languages',
      languagesText: 'English & Español (Bilingual Supervision)',
      commercialPill: '100% COMMERCIAL ONLY — NO RESIDENTIAL WORK',
      cta: 'GET A FREE ESTIMATE',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: '© 2026 Painting Dallas. All Rights Reserved. Commercial Painting & Restoration Specialists.',
    },
    modal: {
      title: 'Request a Free Commercial Estimate',
      subtitle:
        'Fill out the commercial property details below. An experienced commercial estimator will contact you promptly.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      commercialOnly: 'Enfoque Comercial',
      about: 'Nosotros',
      process: 'Proceso',
      work: 'Proyectos',
      whyUs: 'Por Qué Elegirnos',
      faq: 'Preguntas',
      serviceArea: 'Área de Servicio',
      contact: 'Contacto',
      getEstimate: 'OBTENER PRESUPUESTO GRATIS',
      callNow: 'LLAMAR AHORA',
      phone: '(469) 360-5805',
      commercialQuote: 'SOLICITAR COTIZACIÓN COMERCIAL',
    },
    hero: {
      eyebrow: 'PINTURA Y RESTAURACIÓN COMERCIAL',
      headlineStart: 'PINTURA COMERCIAL',
      headlineAccent: 'HECHA PARA DURAR.',
      subheadline:
        'Ofrecemos servicios profesionales de pintura interior y exterior para propiedades residenciales y comerciales en todo Dallas, Texas. Nuestro equipo capacitado se enfoca en acabados de calidad, servicio confiable y en transformar su espacio con precisión y esmero.',
      ctaPrimary: 'OBTENER PRESUPUESTO GRATIS',
      ctaSecondary: 'SOLICITAR COTIZACIÓN COMERCIAL',
      badge1: '10+ AÑOS DE EXPERIENCIA',
      badge2: 'RADIO DE 50 MILLAS',
      badge3: 'EQUIPOS EN INGLÉS Y ESPAÑOL',
      commercialOnlyPill: '100% EXCLUSIVO COMERCIAL — SIN TRABAJOS RESIDENCIALES',
    },
    trustBar: [
      { stat: '10+', label: 'AÑOS DE EXPERIENCIA', detail: 'Trayectoria comprobada en Dallas' },
      { stat: '50 MI', label: 'ÁREA DE SERVICIO', detail: 'En todas las direcciones desde Dallas' },
      { stat: '100%', label: 'ESPECIALISTAS COMERCIALES', detail: 'Oficinas, comercio, naves e instalaciones' },
      { stat: 'EN | ES', label: 'INGLÉS Y ESPAÑOL', detail: 'Supervisión bilingüe en cada sitio' },
      { stat: 'A+', label: 'MÁXIMA CALIDAD', detail: 'Rigurosa preparación y recubrimientos' },
    ],
    services: {
      tag: 'CAPACIDADES COMPLETAS',
      title: 'SERVICIOS PROFESIONALES DE PINTURA COMERCIAL',
      subtitle:
        'Desde la preparación hasta el acabado final, brindamos soluciones integrales de pintura comercial diseñadas según las necesidades, horarios y apariencia de su propiedad.',
      learnMore: 'Más Información',
      closeModal: 'Cerrar',
      items: [
        {
          id: 'interior',
          number: '01',
          title: 'PINTURA INTERIOR COMERCIAL',
          shortDesc:
            'Pintura interior profesional para oficinas, espacios comerciales, instalaciones, edificios y entornos empresariales.',
          image: '/images/interior.jpg',
          features: [
            'Recubrimientos comerciales sin olor y bajo VOC',
            'Horarios nocturnos y fines de semana para evitar interrupciones',
            'Protección total de pisos y mobiliario con enmascarillado',
            'Pinturas arquitectónicas de alta resistencia al roce',
          ],
          fullScope:
            'Soluciones completas de interiores incluyendo reparación de tablaroca, aplicación de imprimadores comerciales, molduras de precisión, techos de atrios y suites ejecutivas.',
          prepDetails:
            'Contención meticulosa de polvo, lonas protectoras, sellado de juntas y aspirado completo antes del acabado final.',
          facilityTypes: ['Sedes Corporativas', 'Oficinas Médicas', 'Locales Comerciales', 'Bancos'],
        },
        {
          id: 'exterior',
          number: '02',
          title: 'PINTURA EXTERIOR COMERCIAL',
          shortDesc:
            'Recubrimientos exteriores duraderos y acabados profesionales diseñados para mejorar la apariencia y proteger propiedades comerciales.',
          image: '/images/exterior.jpg',
          features: [
            'Recubrimientos elastoméricos resistentes al clima',
            'Operación con plataformas elevadoras tipo pluma y tijera',
            'Imprimantes de alta adherencia para estuco, concreto y metal',
            'Fórmulas exteriores con protección UV para el calor de Texas',
          ],
          fullScope:
            'Protección exterior abarcando fachadas de edificios, marquesinas de centros comerciales, pretiles y plazas corporativas.',
          prepDetails:
            'Lavado a alta presión, neutralización de eflorescencias, sellado elastomérico de grietas e imprimación anticorrosiva en metales.',
          facilityTypes: ['Centros Comerciales', 'Parques de Oficinas', 'Plazas Comerciales', 'Sucursales Bancarias'],
        },
        {
          id: 'building',
          number: '03',
          title: 'PINTURA DE EDIFICIOS COMERCIALES',
          shortDesc:
            'Soluciones completas de pintura para propiedades comerciales a gran escala, complejos corporativos y estructuras de varios niveles.',
          image: '/images/building.jpg',
          features: [
            'Gestión integral de proyectos comerciales llave en mano',
            'Cumplimiento estricto de normativas de seguridad OSHA',
            'Equipos de andamios suspendidos y plataformas de largo alcance',
            'Planificación por etapas para minimizar molestias',
          ],
          fullScope:
            'Repintado de fachadas arquitectónicas, acabado de marcos metálicos, muros estructurales exteriores y paletas de color unificadas para campus corporativos.',
          prepDetails:
            'Delimitación de áreas de seguridad peatonal, desengrase de superficies y pruebas de adherencia industrial.',
          facilityTypes: ['Torres de Oficinas', 'Campus Corporativos', 'Hoteles y Hospitalidad', 'Instituciones Educativas'],
        },
        {
          id: 'industrial',
          number: '04',
          title: 'PINTURA INDUSTRIAL',
          shortDesc:
            'Recubrimientos y soluciones profesionales de pintura para entornos industriales, almacenes y plantas de manufactura.',
          image: '/images/industrial.jpg',
          features: [
            'Recubrimientos epóxicos y de uretano de alta resistencia',
            'Pintura por aspersión en estructuras y vigas de acero elevadas',
            'Pisos industriales epóxicos de alto brillo y resistencia química',
            'Demarcación y líneas de seguridad según normas OSHA',
          ],
          fullScope:
            'Recubrimientos para interiores y exteriores industriales diseñados para alto tráfico de montacargas, químicos y logística continua.',
          prepDetails:
            'Granallado comercial, desengrase, lavado a presión y desbaste mecánico para máxima adherencia del sustrato.',
          facilityTypes: ['Naves Logísticas', 'Plantas de Manufactura', 'Centros de Distribución', 'Almacenes Frigoríficos'],
        },
        {
          id: 'facility',
          number: '05',
          title: 'PINTURA DE PROPIEDADES E INSTALACIONES',
          shortDesc:
            'Servicios de pintura confiables para el mantenimiento continuo de propiedades, mejoras de instalaciones y gestión de activos.',
          image: '/images/facility.jpg',
          features: [
            'Programas de mantenimiento preventivo y correctivo',
            'Rotación rápida de inquilinos comerciales y entrega inmediata',
            'Retoque periódico de áreas y pasillos de alto tráfico',
            'Gerente de proyecto comercial dedicado asignado a su propiedad',
          ],
          fullScope:
            'Mantenimiento continuo de áreas comunes, escaleras comerciales, estacionamientos, vestíbulos de elevadores y elementos arquitectónicos exteriores.',
          prepDetails:
            'Pinturas de secado rápido y fórmulas sin olor de cero VOC para instalaciones ocupadas sin afectar el trabajo diario.',
          facilityTypes: ['Administración de Bienes Raíces', 'Parques Empresariales', 'Clínicas y Hospitales', 'Desarrollos Mixtos'],
        },
        {
          id: 'restoration',
          number: '06',
          title: 'RESTAURACIÓN DE PINTURA COMERCIAL',
          shortDesc:
            'Preparación de superficies, restauración arquitectónica, repintado y renovación de acabados en estructuras comerciales deterioradas.',
          image: '/images/restoration.jpg',
          features: [
            'Restauración de mampostería, cantera y ladrillo comercial',
            'Igualación de colores y perfiles arquitectónicos históricos',
            'Estabilización y remoción segura de pintura antigua',
            'Recubrimientos transpirables de silicato y elastómeros',
          ],
          fullScope:
            'Devolvemos a superficies comerciales desgastadas su apariencia impecable creando una barrera protectora contra la humedad y el sol de Texas.',
          prepDetails:
            'Decapado químico, consolidación de sustratos, reparación de juntas de mortero e imprimadores de penetración profunda.',
          facilityTypes: ['Edificios Comerciales Históricos', 'Lofts Reconvertidos', 'Centros Urbanos', 'Edificios Cívicos'],
        },
        {
          id: 'surface_prep',
          number: '07',
          title: 'LAVADO A PRESIÓN Y PREPARACIÓN DE SUPERFICIES',
          shortDesc:
            'Preparación profesional antes de pintar para garantizar una adherencia máxima y acabados duraderos.',
          image: '/images/surface_prep.jpg',
          features: [
            'Lavado industrial a alta presión de hasta 4,000 PSI',
            'Desengrase con agua caliente para grasas, hollín y suciedad',
            'Tratamiento y eliminación de hongos, moho y algas',
            'Sellado de juntas de dilatación y calafateo elastomérico',
          ],
          fullScope:
            'Un trabajo de pintura comercial duradero depende al 100% de la preparación. Limpiamos, perfilamos y estabilizamos mecánicamente el sustrato antes de aplicar pintura.',
          prepDetails:
            'Contención de aguas residuales, detergentes biodegradables, enjuague completo y verificación con higrómetros digitales.',
          facilityTypes: ['Estacionamientos Comerciales', 'Muros de Concreto Industrial', 'Plazas Comerciales', 'Muelles de Carga'],
        },
        {
          id: 'specialty',
          number: '08',
          title: 'RECUBRIMIENTOS ESPECIALES',
          shortDesc:
            'Soluciones de recubrimientos técnicos de alto rendimiento formuladas según las exigencias operativas de su propiedad.',
          image: '/images/specialty.jpg',
          features: [
            'Sistemas epóxicos para pisos comerciales de alto impacto',
            'Pintura electrostática para metales arquitectónicos',
            'Barreras protectoras antigrafiti y selladores de alto desempeño',
            'Recubrimientos intumescentes y retardantes de fuego',
          ],
          fullScope:
            'Técnicas avanzadas para áreas que requieren resistencia química, choque térmico, control antimicrobiano o acabado metálico arquitectónico.',
          prepDetails:
            'Desbaste con diamante, aplicación de barrera de vapor y capas múltiples según especificaciones del fabricante.',
          facilityTypes: ['Cuartos Limpios y Laboratorios', 'Centros de Datos', 'Pisos Industriales Pesados', 'Cocinas Comerciales'],
        },
      ] as ServiceItem[],
    },
    commercialOnly: {
      badge: 'ESPECIALIZACIÓN ESTRICTAMENTE COMERCIAL',
      headline: 'PINTURA COMERCIAL. NO UN SERVICIO SECUNDARIO.',
      supporting:
        'Painting Dallas se enfoca exclusivamente en la pintura comercial. Nuestro trabajo está diseñado en torno a las exigencias de empresas, administradores de propiedades, directores de mantenimiento y contratistas.',
      comparisonTitle1: 'ESPECIALISTAS COMERCIALES (PAINTING DALLAS)',
      comparisonTitle2: 'PINTORES GENERALES / RESIDENCIALES',
      points: [
        {
          title: 'Especialización Exclusivamente Comercial',
          us: 'Más de 10 años dedicados a normativas de edificios comerciales, pinturas industriales y especificaciones de ingeniería.',
          others: 'Cuadrillas residenciales que intentan obras comerciales sin conocimiento de recubrimientos industriales.',
        },
        {
          title: 'Planificación Profesional de Proyectos',
          us: 'Cronogramas estrictos, alcances detallados, fichas técnicas y gestión formal de proyectos comerciales.',
          others: 'Cotizaciones verbales informales con fechas imprecisas y falta de documentación formal.',
        },
        {
          title: 'Capacidad para Proyectos a Gran Escala',
          us: 'Plataformas elevadoras de largo alcance, cuadrillas dedicadas y capacidad para más de 100,000 pies cuadrados.',
          others: 'Personal limitado, escaleras básicas y nula capacidad para obras comerciales amplias.',
        },
        {
          title: 'Trabajo con Enfoque en Seguridad (OSHA)',
          us: 'Normas estrictas OSHA, operadores de plataformas certificados, arneses de seguridad y planes de seguridad laboral.',
          others: 'Mínimo cumplimiento de seguridad y falta de protocolos formales en el sitio.',
        },
        {
          title: 'Horarios Confiables (Noches y Fines de Semana)',
          us: 'Turnos nocturnos y de fin de semana para no interrumpir las operaciones y ventas de su negocio.',
          others: 'Solo trabajan de 9 a 5, interrumpiendo a clientes, inquilinos y empleados.',
        },
        {
          title: 'Preparación de Superficies de Primera Calidad',
          us: 'Lavado industrial, desbaste con diamante y sellado elastomérico para adherencia de larga duración.',
          others: 'Limpieza superficial rápida que provoca desprendimiento prematuro de la pintura.',
        },
        {
          title: 'Acabados Comerciales Consistentes',
          us: 'Epóxicos, poliuretanos y elastoméricos de alto rendimiento que resisten el uso comercial severo.',
          others: 'Pinturas de vinil domésticas que se rayan, decoloran y deterioran rápidamente.',
        },
        {
          title: 'Comunicación Profesional',
          us: 'Supervisores bilingües dedicados, reportes diarios de avance y respuesta ágil en todo momento.',
          others: 'Mala comunicación, llamadas sin responder y ausencia de supervisión en la obra.',
        },
      ],
    },
    transform: {
      eyebrow: 'CONSTRUIDO CON INTEGRIDAD',
      headline: 'CONSTRUIR. PINTAR. TRANSFORMAR. CON CONFIANZA.',
      body:
        'Cada propiedad comercial representa a su empresa. Combinamos preparación cuidadosa, mano de obra profesional, materiales de primera calidad y gestión confiable de proyectos para brindar resultados que impresionan y perduran.',
      cta: 'INICIAR PROYECTO',
      stats: [
        { value: '10+', label: 'Años en Dallas' },
        { value: '50 MI', label: 'Radio Comercial' },
        { value: '100%', label: 'Enfoque Comercial' },
      ],
    },
    whyChooseUs: {
      tag: 'NUESTRA VENTAJA COMPETITIVA',
      headline: '¿POR QUÉ ELEGIR PAINTING DALLAS?',
      subtitle:
        'Diseñamos nuestros servicios para satisfacer las estrictas exigencias de contratistas generales, administradores y directores de instalaciones.',
      reasons: [
        {
          num: '01',
          title: '10+ AÑOS DE EXPERIENCIA',
          desc: 'Más de una década de experiencia entregando soluciones de pintura profesional en el sector inmobiliario comercial de Dallas.',
        },
        {
          num: '02',
          title: 'SOLO COMERCIAL',
          desc: 'Nuestro enfoque es la pintura comercial, no el trabajo residencial. Nuestros equipos y pinturas están calibrados únicamente para empresas.',
        },
        {
          num: '03',
          title: 'ÁREA DE SERVICIO DE 50 MILLAS',
          desc: 'Atendemos propiedades comerciales en un radio aproximado de 50 millas en todas las direcciones desde Dallas.',
        },
        {
          num: '04',
          title: 'MANO DE OBRA DE CALIDAD',
          desc: 'Preparación minuciosa y estándares de acabado profesional que garantizan máxima adherencia, líneas perfectas y durabilidad.',
        },
        {
          num: '05',
          title: 'SERVICIO CONFIABLE',
          desc: 'Comunicación clara, cronogramas firmes, turnos nocturnos y coordinación profesional en cada etapa del proyecto.',
        },
        {
          num: '06',
          title: 'INGLÉS Y ESPAÑOL',
          desc: 'Comunicación fluida con clientes, administradores de propiedades, superintendentes y cuadrillas de habla inglesa e hispana.',
        },
      ],
    },
    about: {
      tag: 'PERFIL DE LA EMPRESA',
      headline: 'SOBRE PAINTING DALLAS',
      subheading: 'SERVICIOS PROFESIONALES DE PINTURA Y RESTAURACIÓN',
      p1:
        'Painting Dallas ofrece servicios confiables de pintura interior y exterior para propiedades residenciales y comerciales en todo Dallas, Texas. Desde una preparación detallada de la superficie hasta un acabado impecable, nuestro equipo experimentado brinda resultados duraderos de alta calidad con profesionalismo, precisión y atención a los detalles.',
      p2:
        'Entendemos que los proyectos de pintura comercial requieren mucho más que solo aplicar pintura. La preparación adecuada, la coordinación, la comunicación y la atención a los detalles son esenciales para entregar una propiedad con acabado profesional.',
      p3:
        'Nuestro objetivo es simple: Realizar trabajos de pintura comercial que hagan lucir profesional su propiedad, protejan su inversión y le brinden a su empresa un acabado del que pueda sentirse orgulloso.',
      cta: 'SOLICITAR COTIZACIÓN COMERCIAL',
      keyMetrics: [
        { label: 'Experiencia Comercial', value: '10+ Años' },
        { label: 'Territorio de Servicio', value: 'Radio de 50 Millas' },
        { label: 'Supervisión Bilingüe', value: 'Inglés y Español' },
        { label: 'Enfoque de Proyectos', value: '100% Comercial' },
      ],
    },
    missionVision: {
      tag: 'NUESTRA BASE',
      missionTitle: 'MISIÓN',
      missionText:
        'Nuestra misión es brindar servicios confiables de pintura comercial con mano de obra profesional, comunicación clara y atención a cada detalle.',
      visionTitle: 'VISIÓN',
      visionText:
        'Nuestra visión es convertirnos en el socio de confianza en pintura comercial para empresas y propiedades en toda el área de servicio de Dallas.',
      commitmentTitle: 'COMPROMISO',
      commitmentText:
        'Estamos comprometidos con la preparación de calidad, los acabados profesionales, el servicio puntual y la total satisfacción del cliente en cada proyecto.',
    },
    process: {
      tag: 'METODOLOGÍA COMPROBADA',
      headline: 'UN MEJOR PROCESO DE PINTURA COMERCIAL',
      subtitle:
        'Un flujo de trabajo comercial estructurado en 6 etapas para eliminar imprevistos, respetar los horarios de su negocio y brindar acabados impecables.',
      steps: [
        {
          num: '01',
          title: 'CONSULTA',
          desc: 'Comprender la propiedad, el alcance, los objetivos del negocio y los plazos requeridos.',
        },
        {
          num: '02',
          title: 'EVALUACIÓN DEL SITIO',
          desc: 'Evaluar superficies, condiciones existentes, necesidades de preparación y accesos seguros.',
        },
        {
          num: '03',
          title: 'PLAN DE PROYECTO',
          desc: 'Desarrollar alcance claro, cronograma, materiales, fases de trabajo y turnos fuera de horario.',
        },
        {
          num: '04',
          PREPARATION: 'PREPARACIÓN',
          title: 'PREPARACIÓN',
          desc: 'La preparación adecuada es la base de un acabado profesional: lavado a presión, enmascarado e imprimación.',
        },
        {
          num: '05',
          title: 'PINTURA Y RESTAURACIÓN',
          desc: 'Trabajo profesional de pintura y restauración ejecutado con meticulosa atención al detalle y seguridad.',
        },
        {
          num: '06',
          title: 'REVISIÓN FINAL',
          desc: 'Recorrido final junto a su equipo para asegurar que cada metro cuadrado supere las expectativas.',
        },
      ],
    },
    projects: {
      tag: 'PORTAFOLIO COMERCIAL',
      headline: 'PROYECTOS COMERCIALES DE LOS QUE ESTAMOS ORGULLOSOS',
      subtitle:
        'Explore nuestros proyectos recientes de pintura exterior, interior, industrial y restauración en el área metropolitana de Dallas.',
      all: 'Todos los Proyectos',
      viewDetails: 'Ver Detalles del Proyecto',
      closeModal: 'Cerrar',
      categories: {
        all: 'TODOS',
        office: 'OFICINAS',
        retail: 'COMERCIO',
        industrial: 'INDUSTRIAL',
        building: 'EDIFICIOS COMERCIALES',
        facility: 'MANTENIMIENTO',
        restoration: 'RESTAURACIÓN',
      },
      items: [
        {
          id: 'p1',
          title: 'Sede Corporativa y Atrio Principal',
          category: 'office',
          categoryLabel: 'Oficinas',
          location: 'Dallas, TX',
          scope: 'Pintura en atrio de gran altura, muros de acento azul marino y recubrimientos interiores sin VOC',
          image: '/images/interior.jpg',
          sqft: '48,000 Pies².',
          completionTime: 'Ejecutado durante fines de semana sin interrumpir labores',
        },
        {
          id: 'p2',
          title: 'Centro Comercial y Marquesinas en North Dallas',
          category: 'retail',
          categoryLabel: 'Comercio',
          location: 'Plano, TX',
          scope: 'Recubrimiento de marquesinas exteriores, pretiles y marcos arquitectónicos de aluminio',
          image: '/images/exterior.jpg',
          sqft: '32,500 Pies².',
          completionTime: 'Cero interrupción a las tiendas comerciales',
        },
        {
          id: 'p3',
          title: 'Centro de Distribución y Logística',
          category: 'industrial',
          categoryLabel: 'Industrial',
          location: 'Grand Prairie, TX',
          scope: 'Aspersión en estructura de acero, pisos epóxicos de uso rudo y líneas de seguridad',
          image: '/images/industrial.jpg',
          sqft: '120,000 Pies².',
          completionTime: 'Planificado en fases de parada operativa',
        },
        {
          id: 'p4',
          title: 'Torre Corporativa Comercial',
          category: 'building',
          categoryLabel: 'Edificios Comerciales',
          location: 'Dallas, TX',
          scope: 'Pintura exterior con plataforma telescópica, resane de concreto y selladores elastoméricos',
          image: '/images/building.jpg',
          sqft: '85,000 Pies².',
          completionTime: 'Ejecutado con canastillas suspendidas y plumas elevadoras',
        },
        {
          id: 'p5',
          title: 'Plaza Médica y Centro Empresarial',
          category: 'facility',
          categoryLabel: 'Mantenimiento',
          location: 'Irving, TX',
          scope: 'Repintado de columnata exterior, pasillos comunes y protecciones metálicas',
          image: '/images/facility.jpg',
          sqft: '64,000 Pies².',
          completionTime: 'Contrato de mantenimiento continuo de instalaciones',
        },
        {
          id: 'p6',
          title: 'Restauración de Fachada Histórica Comercial',
          category: 'restoration',
          categoryLabel: 'Restauración',
          location: 'Downtown Dallas, TX',
          scope: 'Consolidación de mampostería, limpieza química y renovación de pintura de perfil histórico',
          image: '/images/restoration.jpg',
          sqft: '28,000 Pies².',
          completionTime: 'Restauración con andamiaje modular por niveles',
        },
      ] as ProjectItem[],
    },
    videoSection: {
      tag: 'DESTREZA EN ACCIÓN',
      headline: 'DESDE LA PREPARACIÓN HASTA EL ACABADO FINAL.',
      subtitle:
        'Observe cómo nuestros equipos de pintura comercial operan con precisión, seguridad y rigurosa disciplina técnica.',
      features: [
        'Operación de plataformas de largo alcance y tijeras elevadoras',
        'Enmascarillado industrial y preparación de superficies',
        'Aplicación con aspersores airless y rodillo de acabado',
        'Estricto cumplimiento de arneses y normativas OSHA',
        'Inspección de control de calidad desde múltiples ángulos',
      ],
      cta: 'VER NUESTROS PROYECTOS',
    },
    testimonials: {
      tag: 'TESTIMONIOS DE CLIENTES COMERCIALES',
      headline: 'LO QUE DICEN NUESTROS CLIENTES',
      subtitle:
        'Comentarios de administradores de propiedades, contratistas generales y directores de instalaciones que confían en Painting Dallas.',
      notice: 'Comentarios de clientes de relaciones comerciales verificadas.',
      items: [
        {
          id: 't1',
          rating: 5,
          quote:
            'Painting Dallas realizó el repintado exterior de nuestro edificio corporativo de 4 pisos en Dallas. Su personal trabajó sin interrumpir a nuestros inquilinos comerciales. La preparación y el acabado fueron insuperables.',
          author: 'Administrador de Propiedades Comerciales',
          role: 'Director de Gestión de Activos',
          company: 'Fondo de Bienes Raíces Dallas',
        },
        {
          id: 't2',
          rating: 5,
          quote:
            'Como contratista general comercial, encontrar un subcontratista de pintura confiable que cumpla con el cronograma y cuente con supervisores bilingües es clave. Painting Dallas siempre cumple.',
          author: 'Contratista General Comercial',
          role: 'Superintendente Senior de Proyecto',
          company: 'Construcción Comercial DFW',
        },
        {
          id: 't3',
          rating: 5,
          quote:
            'Pintaron más de 80,000 pies cuadrados de estructura de acero y pisos epóxicos de alto tránsito para nuestro centro logístico. Excelente planificación y ejecución impecable.',
          author: 'Director de Operaciones de Instalaciones',
          role: 'Vicepresidente de Mantenimiento',
          company: 'Centro Logístico del Norte de Texas',
        },
      ] as TestimonialItem[],
    },
    faq: {
      tag: 'PREGUNTAS FRECUENTES',
      headline: 'PREGUNTAS FRECUENTES',
      subtitle:
        'Respuestas claras y directas sobre nuestros servicios, capacidades y radio de cobertura.',
      items: [
        {
          id: 'faq1',
          question: '¿Solo ofrecen pintura comercial?',
          answer:
            'Sí, absolutamente. Painting Dallas se dedica al 100% a la pintura comercial. No realizamos pintura de casas residenciales. Nuestro personal, equipos, normas de seguridad y recubrimientos están especializados exclusivamente para empresas, comercios y naves industriales.',
        },
        {
          id: 'faq2',
          question: '¿Qué áreas atienden?',
          answer:
            'Atendemos todo el área metropolitana de Dallas-Fort Worth y ciudades aledañas, incluidas Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Carrollton, Garland, Richardson, Grand Prairie, McKinney y Denton.',
        },
        {
          id: 'faq3',
          question: '¿Qué distancia recorren?',
          answer:
            'Operamos en un radio de aproximadamente 50 millas en todas las direcciones desde Dallas, lo que nos permite cubrir propiedades comerciales y parques industriales en todo el norte de Texas.',
        },
        {
          id: 'faq4',
          question: '¿Cuántos años de experiencia tienen?',
          answer:
            'Painting Dallas cuenta con más de 10 años de experiencia en pintura y restauración comercial de superficies para clientes corporativos, industriales y comerciales.',
        },
        {
          id: 'faq5',
          question: '¿Ofrecen pintura comercial interior y exterior?',
          answer:
            'Sí. Proporcionamos soluciones integrales de pintura interior y exterior comercial, incluyendo acabados para oficinas de alto tráfico, pinturas elastoméricas resistentes al clima, fachadas de gran altura y pisos industriales.',
        },
        {
          id: 'faq6',
          question: '¿Trabajan con administradores de propiedades y empresas?',
          answer:
            'Sí. Gran parte de nuestra actividad consiste en colaborar con administradores de inmuebles, empresas de mantenimiento, propietarios corporativos y contratistas generales tanto en proyectos únicos como en mantenimiento programado.',
        },
        {
          id: 'faq7',
          question: '¿Pueden manejar proyectos comerciales de gran escala?',
          answer:
            'Sí. Contamos con plataformas elevadoras tipo pluma, tijeras elevadoras, bombas airless industriales y cuadrillas escalables capaces de atender desde 5,000 pies cuadrados hasta edificios multinivel y naves de más de 100,000 pies cuadrados.',
        },
        {
          id: 'faq8',
          question: '¿Proporcionan presupuestos o cotizaciones?',
          answer:
            'Sí. Ofrecemos presupuestos gratuitos y propuestas comerciales detalladas que desglosan el alcance del trabajo, sistemas de recubrimiento recomendados, preparación de superficies y cronograma de ejecución.',
        },
        {
          id: 'faq9',
          question: '¿Ofrecen restauración y preparación de superficies?',
          answer:
            'Sí. La preparación meticulosa es fundamental en nuestro método. Realizamos lavado a presión industrial, resane de concreto, eliminación de eflorescencias, desbaste mecánico, sellado elastomérico y restauración de mampostería.',
        },
        {
          id: 'faq10',
          question: '¿Hablan español?',
          answer:
            'Sí. Somos un equipo totalmente bilingüe. Nuestros directores, superintendentes y encargados de cuadrilla se comunican con total fluidez tanto en inglés como en español para facilitar la coordinación en el sitio de trabajo.',
        },
      ] as FAQItem[],
    },
    serviceArea: {
      tag: 'COBERTURA EN EL METROPLEX',
      headline: 'PINTURA COMERCIAL EN TODA EL ÁREA DE DALLAS',
      subheadline:
        'Atendemos propiedades comerciales en un radio de aproximadamente 50 millas en todas las direcciones desde Dallas.',
      radiusTitle: 'RADIO DE SERVICIO DE 50 MILLAS',
      radiusDesc: 'Respuesta y despacho comercial ágil en todo el complejo metropolitano de Dallas-Fort Worth.',
      cities: [
        'Dallas',
        'Fort Worth',
        'Plano',
        'Irving',
        'Arlington',
        'Frisco',
        'Carrollton',
        'Garland',
        'Richardson',
        'Grand Prairie',
        'McKinney',
        'Denton',
      ],
      facilitiesTitle: 'Tipos de Inmuebles Comerciales que Atendemos:',
      facilities: [
        'Propiedades Comerciales y Parques de Oficinas',
        'Sedes Corporativas y Centros de Negocios',
        'Instalaciones Industriales y Almacenes',
        'Centros Comerciales y Tiendas Minoristas',
        'Complejos Médicos y de Salud',
        'Hoteles y Activos Inmobiliarios Comerciales',
      ],
    },
    finalCta: {
      headline: '¿LISTO PARA TRANSFORMAR SU PROPIEDAD COMERCIAL?',
      subheadline:
        'Hablemos sobre su próximo proyecto de pintura comercial. Obtenga un alcance técnico detallado y un presupuesto gratuito ajustado a su calendario.',
      btnEstimate: 'OBTENER PRESUPUESTO GRATIS',
      btnCall: 'LLAMAR AHORA',
      bullets: [
        'Especialistas en Pintura Comercial',
        '10+ Años de Experiencia',
        'Radio de Servicio de 50 Millas',
        'Inglés y Español',
      ],
    },
    contact: {
      tag: 'SOLICITUD DIRECTA DE COTIZACIÓN',
      headline: 'HABLEMOS SOBRE SU PROYECTO.',
      subheadline:
        'Complete el formulario a continuación para una respuesta rápida de un especialista comercial, o llámenos directamente.',
      fields: {
        name: 'Nombre Completo',
        company: 'Empresa / Organización',
        phone: 'Número de Teléfono',
        email: 'Correo Electrónico Laboral',
        projectType: 'Tipo de Proyecto',
        projectTypePlaceholder: 'Seleccione el Tipo de Proyecto Comercial',
        projectTypes: [
          'Pintura Interior Comercial',
          'Pintura Exterior Comercial',
          'Pintura de Edificios Comerciales',
          'Pintura Industrial y Naves',
          'Mantenimiento de Propiedades e Instalaciones',
          'Restauración Comercial',
          'Lavado a Presión y Preparación',
          'Recubrimientos Especiales',
        ],
        address: 'Dirección de la Propiedad / Ciudad',
        sqft: 'Metraje Aproximado en Pies² (Opcional)',
        details: 'Detalles del Proyecto y Plazos',
        detailsPlaceholder:
          'Por favor describa la propiedad, condiciones de la superficie, horarios preferidos (habitual vs nocturno) y plazo deseado...',
        submit: 'SOLICITAR COTIZACIÓN COMERCIAL',
        submitting: 'Enviando Solicitud...',
      },
      directCall: '¿Prefiere hablar con un estimador inmediatamente?',
      callAction: 'LLAMAR AHORA',
      successTitle: 'Solicitud de Cotización Recibida',
      successMessage:
        'Gracias por contactarnos. Un estimador comercial de Painting Dallas revisará los detalles de su proyecto y se comunicará con usted dentro de 1 día hábil.',
    },
    footer: {
      description:
        'Servicios profesionales de pintura y restauración comercial para empresas, instalaciones y propiedades en toda el área de Dallas.',
      quickLinks: 'Navegación',
      servicesTitle: 'Servicios Comerciales',
      serviceAreaTitle: 'Área de Servicio',
      serviceAreaText: 'Dallas, TX y áreas circunvecinas en un radio aproximado de 50 millas.',
      languagesTitle: 'Idiomas',
      languagesText: 'Inglés y Español (Supervisión Bilingüe)',
      commercialPill: '100% EXCLUSIVO COMERCIAL — SIN TRABAJOS RESIDENCIALES',
      cta: 'OBTENER PRESUPUESTO GRATIS',
      privacy: 'Aviso de Privacidad',
      terms: 'Términos y Condiciones',
      copyright: '© 2026 Painting Dallas. Todos los Derechos Reservados. Especialistas en Pintura y Restauración Comercial.',
    },
    modal: {
      title: 'Solicitar Presupuesto Comercial Gratuito',
      subtitle:
        'Ingrese los datos de su inmueble comercial. Un estimador experimentado se comunicará a la brevedad.',
    },
  },
};
