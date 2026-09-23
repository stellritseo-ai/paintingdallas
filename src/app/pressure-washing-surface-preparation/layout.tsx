import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pressure Washing & Surface Prep Dallas | Painting Dallas',
  description:
    'Commercial-grade pressure washing and technical surface preparation in Dallas-Fort Worth. Hot water up to 4,000 PSI, abrasive blasting, eco-friendly cleaning, 5-year warranty.',
  keywords: [
    'Pressure Washing Dallas',
    'Commercial Pressure Washing Dallas TX',
    'Surface Preparation Painting Dallas',
    'Industrial Sandblasting Dallas',
    'Building Facade Power Washing DFW',
    'Sidewalk and Parking Garage Cleaning Dallas',
    'Dumpster Pad Pressure Washing Dallas',
    'Concrete Acid Etching Surface Prep Dallas',
  ],
  openGraph: {
    title:
      'Professional Pressure Washing & Surface Preparation in Dallas | Painting Dallas',
    description:
      'The critical first step for a long-lasting finish. We clean, prep, and profile surfaces to ensure maximum coating adhesion and durability.',
    url: 'https://paintingdallas.com/pressure-washing-surface-preparation',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/pressure-washing-surface-preparation',
  },
};

const surfacePrepJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Pressure Washing & Surface Preparation Services',
      serviceType: 'Pressure Washing and Surface Preparation',
      description:
        'Professional commercial power washing, abrasive blasting, chemical stripping, concrete profiling, and surface remediation across the Dallas-Fort Worth Metroplex.',
      provider: {
        '@type': 'ProfessionalService',
        name: 'Painting Dallas',
        telephone: '+1-469-368-5885',
        email: 'info@paintingdallas.com',
        url: 'https://paintingdallas.com',
        address: {
          '@type': 'PostalAddress',
          streetAddress: '3017 Grand Ave',
          addressLocality: 'Dallas',
          addressRegion: 'TX',
          postalCode: '75215',
          addressCountry: 'US',
        },
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Dallas-Fort Worth Metroplex',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Pressure Washing & Surface Prep Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Building Exterior Pressure Washing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Sidewalk & Walkway Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Parking Lot & Garage Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Dumpster Pad Cleaning & Sanitization',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Drive-Thru & Menu Board Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Abrasive Blasting & Sandblasting Profiling',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Chemical Stripping & Coating Removal',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Graffiti Removal',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Commercial Roof Soft Washing',
            },
          },
        ],
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How often should commercial properties be pressure washed?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Most commercial properties benefit from pressure washing 1-2 times per year. High-traffic areas, restaurants, and properties in humid climates may need more frequent cleaning.',
          },
        },
        {
          '@type': 'Question',
          name: "What's the difference between pressure washing and soft washing?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Pressure washing uses high-pressure water to clean hard surfaces. Soft washing uses low pressure with specialized cleaning solutions for delicate surfaces like roofs, stucco, and wood.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will pressure washing damage my building?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'When done correctly, no. We assess each surface and use the appropriate pressure, temperature, and technique to clean without causing damage.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you use chemicals?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We use eco-friendly detergents and degreasers when needed to remove tough stains. We also offer chemical-free cleaning for sensitive areas.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do you handle wastewater runoff?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We contain and properly dispose of wastewater to comply with environmental regulations. We never allow runoff to enter storm drains.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does pressure washing take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on square footage and contamination levels. Most commercial projects are completed within 1-3 days.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer surface preparation as a standalone service?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer pressure washing and surface preparation as standalone services, though most clients combine them with painting for the best results.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all painting projects. If surface preparation issues arise due to our workmanship, we will make it right.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you licensed and insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers' compensation coverage. Certificates of insurance are available upon request.",
          },
        },
      ],
    },
  ],
};

export default function PressureWashingSurfacePrepLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(surfacePrepJsonLd) }}
      />
      {children}
    </>
  );
}
