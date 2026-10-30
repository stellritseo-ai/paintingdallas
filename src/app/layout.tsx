import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import { Analytics } from '@vercel/analytics/next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#062F57',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://paintingdallas.com'),
  title: {
    default: 'Painting Dallas | Commercial Painting & Restoration Contractors Dallas TX',
    template: '%s | Painting Dallas',
  },
  description:
    'Premier commercial painting contractors in Dallas, TX. Specializing exclusively in commercial interior & exterior painting, industrial coatings, multi-story buildings, and facility maintenance within a 50-mile radius. Free estimates.',
  applicationName: 'Painting Dallas',
  authors: [{ name: 'Painting Dallas', url: 'https://paintingdallas.com' }],
  generator: 'Next.js',
  keywords: [
    // Top 15 Competitive High-Intent Keywords
    'Best Commercial Painters Dallas',
    'Commercial Painting Contractors Dallas TX',
    'Commercial Building Exterior Painting Dallas',
    'Office Space Painting Contractors Dallas',
    'Warehouse Painting Contractors Dallas TX',
    'Industrial Coating Contractors Dallas',
    'Commercial Epoxy Flooring Contractors Dallas',
    'Commercial Painting Companies in Dallas TX',
    'Commercial Property Repainting Services Dallas',
    'Commercial Facade Restoration Dallas TX',
    'High Rise Building Painters Dallas',
    'Commercial Facility Maintenance Painting DFW',
    'Retail Store Painting Contractors Dallas',
    'Industrial Tank & Steel Painting Dallas',
    'Commercial Painting Estimates Dallas TX',
    // High-Authority Regional & Commercial Modifiers
    'Top Rated Commercial Painters Dallas TX',
    'Commercial Painting Dallas',
    'Commercial Painters Dallas',
    'Commercial Painting Company Dallas',
    'Commercial Exterior Painting Dallas',
    'Commercial Interior Painting Dallas',
    'Industrial Painting Dallas TX',
    'Commercial Building Painters Dallas',
    'Commercial Painting Services Dallas',
    'Commercial Property Painting Dallas',
    'Commercial Painting & Restoration Dallas',
    'Commercial Painting Contractor Near Me Dallas',
    'Office Building Painting Dallas',
    'Commercial Epoxy Floor Coatings Dallas',
    'Commercial Pressure Washing Dallas',
    'Commercial Painting Dallas Fort Worth',
  ],
  referrer: 'origin-when-cross-origin',
  creator: 'Painting Dallas',
  publisher: 'Painting Dallas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://paintingdallas.com',
    languages: {
      'en-US': 'https://paintingdallas.com',
      'es-US': 'https://paintingdallas.com',
      'x-default': 'https://paintingdallas.com',
    },
  },
  openGraph: {
    title: 'Painting Dallas | Commercial Painting & Restoration Contractors Dallas TX',
    description:
      'For 10+ years, Painting Dallas has delivered dependable commercial painting and restoration services for businesses and facilities across the Dallas metroplex. 100% Commercial Only.',
    url: 'https://paintingdallas.com',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://paintingdallas.com/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Painting Dallas Commercial Painting & Restoration Contractors',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Painting Dallas | Commercial Painting Contractors Dallas TX',
    description:
      'Premier commercial painting and facility restoration contractors serving the Dallas-Fort Worth metroplex. 100% Commercial Only.',
    images: ['https://paintingdallas.com/images/hero.jpg'],
    creator: '@PaintingDallas',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  category: 'Commercial Painting Contractors',
  classification: 'Commercial Painting & Restoration Services',
  verification: {
    google: '7ZzNg0ona5zgBmf-Vx8-DJOKr-KKEC6yh0Xsxqo9wtg',
  },
  other: {
    'geo.region': 'US-TX',
    'geo.placename': 'Dallas',
    'geo.position': '32.7767;-96.7970',
    'ICBM': '32.7767, -96.7970',
    'rating': 'general',
    'revisit-after': '7 days',
  },
};

const jsonLdGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['PaintingService', 'ProfessionalService', 'HomeAndConstructionBusiness', 'LocalBusiness'],
      '@id': 'https://paintingdallas.com/#organization',
      name: 'Painting Dallas',
      legalName: 'Painting Dallas Commercial Painting & Restoration',
      alternateName: [
        'Painting Dallas Commercial Contractors',
        'Commercial Painting Dallas',
        'Painting Dallas TX',
      ],
      description:
        'Premier commercial painting contractors in Dallas, TX. Specializing exclusively in commercial interior & exterior painting, industrial coatings, multi-story buildings, and facility maintenance within a 50-mile radius.',
      url: 'https://paintingdallas.com',
      logo: 'https://paintingdallas.com/android-chrome-512x512.png',
      image: [
        'https://paintingdallas.com/images/hero.jpg',
        'https://paintingdallas.com/images/about.jpg',
        'https://paintingdallas.com/images/exterior.jpg',
        'https://paintingdallas.com/images/interior.jpg',
        'https://paintingdallas.com/images/building.jpg',
        'https://paintingdallas.com/images/facility.jpg',
      ],
      telephone: '+1-469-360-5805',
      email: 'support@paintingdallas.com',
      priceRange: '$$$',
      currenciesAccepted: 'USD',
      paymentAccepted: 'Cash, Credit Card, Check, Invoice, Wire Transfer',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '3017 Grand Ave',
        addressLocality: 'Dallas',
        addressRegion: 'TX',
        postalCode: '75215',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 32.7767,
        longitude: -96.797,
      },
      areaServed: [
        { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Fort Worth', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Plano', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Arlington', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Irving', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Frisco', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Garland', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Grand Prairie', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'McKinney', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Denton', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Mesquite', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Carrollton', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Richardson', containedInPlace: { '@type': 'State', name: 'Texas' } },
        { '@type': 'City', name: 'Lewisville', containedInPlace: { '@type': 'State', name: 'Texas' } },
        {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: 32.7767,
            longitude: -96.797,
          },
          geoRadius: '80467', // 50 miles in meters
        },
      ],
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '07:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday'],
          opens: '08:00',
          closes: '17:00',
        },
      ],
      knowsLanguage: ['en', 'es'],
      knowsAbout: [
        'Commercial Painting Contractors Dallas TX',
        'Best Commercial Painters Dallas',
        'Commercial Building Exterior Painting Dallas',
        'Office Space Painting Contractors Dallas',
        'Warehouse Painting Contractors Dallas TX',
        'Industrial Coating Contractors Dallas',
        'Commercial Epoxy Flooring Contractors Dallas',
        'Commercial Painting Companies in Dallas TX',
        'Commercial Property Repainting Services Dallas',
        'Commercial Facade Restoration Dallas TX',
        'High Rise Building Painters Dallas',
        'Commercial Facility Maintenance Painting DFW',
        'Retail Store Painting Contractors Dallas',
        'Industrial Tank & Steel Painting Dallas',
        'Commercial Painting Estimates Dallas TX',
      ],
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '184',
        reviewCount: '184',
      },
      sameAs: [
        'https://www.facebook.com',
        'https://nextdoor.com',
        'https://www.google.com/business',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Commercial Painting & Restoration Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Interior Painting',
              url: 'https://paintingdallas.com/commercial-interior-painting',
              description: 'Commercial interior painting for corporate offices, retail spaces, medical facilities, and warehouses with low-VOC coatings.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Exterior Painting',
              url: 'https://paintingdallas.com/commercial-exterior-painting',
              description: 'Durable, weather-resistant commercial exterior coatings and multi-story facade painting across Dallas-Fort Worth.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Building Painting',
              url: 'https://paintingdallas.com/commercial-building-painting',
              description: 'Turnkey painting solutions for office towers, corporate campuses, retail centers, and industrial complexes.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial Painting & Epoxy Floor Coatings',
              url: 'https://paintingdallas.com/industrial-painting',
              description: 'Heavy-duty protective coatings, structural steel painting, and high-performance industrial epoxy floor systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Property & Facility Painting',
              url: 'https://paintingdallas.com/property-facility-painting',
              description: 'Turnkey maintenance painting programs for property managers, facility directors, and commercial real estate portfolios.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Painting Restoration',
              url: 'https://paintingdallas.com/commercial-painting-restoration',
              description: 'Architectural surface restoration, historic facade repair, masonry sealing, and water damage renewal.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Specialty Coatings',
              url: 'https://paintingdallas.com/specialty-coatings',
              description: 'Intumescent fireproofing, antimicrobial coatings, chemical-resistant linings, and thermal barrier systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pressure Washing & Surface Preparation',
              url: 'https://paintingdallas.com/pressure-washing-surface-preparation',
              description: 'Commercial hot-water pressure washing up to 4,000 PSI, abrasive media blasting, and concrete surface profiling.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://paintingdallas.com/#website',
      url: 'https://paintingdallas.com',
      name: 'Painting Dallas',
      description: 'Commercial Painting & Restoration Contractors in Dallas-Fort Worth, Texas',
      publisher: {
        '@id': 'https://paintingdallas.com/#organization',
      },
      inLanguage: ['en-US', 'es-US'],
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://paintingdallas.com/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Do you only provide commercial painting in Dallas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, absolutely. Painting Dallas is 100% focused on commercial painting. We do not take on residential house painting. Our crews, equipment, safety standards, and coatings are specialized exclusively for businesses, facilities, retail, and commercial properties.',
          },
        },
        {
          '@type': 'Question',
          name: 'What areas do you serve in the Dallas-Fort Worth Metroplex?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We serve the entire Dallas-Fort Worth metroplex and surrounding cities within a 50-mile radius, including Dallas, Fort Worth, Plano, Irving, Arlington, Frisco, Carrollton, Garland, Richardson, Grand Prairie, McKinney, and Denton.',
          },
        },
        {
          '@type': 'Question',
          name: 'How far do you travel for commercial painting projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We operate across a 50-mile service radius in every direction from Dallas, allowing us to serve commercial properties, corporate parks, and industrial corridors throughout North Texas.',
          },
        },
        {
          '@type': 'Question',
          name: 'How many years of experience does Painting Dallas have?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Painting Dallas brings more than 10 years of commercial painting and surface restoration experience, serving corporate, industrial, and retail commercial clients with 180+ completed projects.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide interior and exterior commercial painting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide complete interior and exterior commercial painting solutions, including high-traffic interior office coatings, exterior weather-resistant elastomeric coatings, high-rise building facades, and specialized industrial coatings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you work with property managers and general contractors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. A major portion of our work is partnering with commercial property managers, facility management teams, corporate real estate owners, and general contractors on both one-off projects and scheduled property maintenance programs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you handle large multi-story or industrial commercial projects?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our team is equipped with high-reach boom lifts, scissor lifts, airless spray rigs, and scalable commercial crews capable of handling commercial properties of all sizes, from 5,000 sq ft up to multi-story buildings and 100,000+ sq ft industrial facilities.',
          },
        },
        {
          '@type': 'Question',
          name: 'How quickly can I receive a free commercial painting estimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We provide free, comprehensive commercial estimates and itemized proposals delivered within 24 business hours outlining the full scope of work, coating specifications, and project timeline.',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Google Site Verification */}
        <meta
          name="google-site-verification"
          content="7ZzNg0ona5zgBmf-Vx8-DJOKr-KKEC6yh0Xsxqo9wtg"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
        />
      </head>
      <body className="bg-white text-[#17202A] antialiased selection:bg-[#062F57] selection:text-white" suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  );
}
