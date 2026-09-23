import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Specialty Coatings Dallas | Painting Dallas',
  description:
    'High-performance protective coatings engineered for commercial and industrial facilities in Dallas-Fort Worth. Epoxy, polyurethane, intumescent fireproofing, chemical linings, 5-year warranty.',
  keywords: [
    'Specialty Coatings Dallas',
    'Commercial Epoxy Floor Coatings Dallas TX',
    'Intumescent Fireproofing Dallas',
    'Chemical Resistant Tank Linings DFW',
    'Industrial Polyurea Polyaspartic Coatings',
    'Anti-Microbial Facility Coatings Dallas',
    'High Temperature Ceramic Coatings Dallas',
    'SSPC Certified Coating Applicators Dallas',
  ],
  openGraph: {
    title: 'Professional Specialty Coatings in Dallas | Painting Dallas',
    description:
      'High-performance protective coatings engineered for the toughest environments. Extend asset life, improve safety, and reduce long-term maintenance costs.',
    url: 'https://paintingdallas.com/specialty-coatings',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/specialty-coatings',
  },
};

const specialtyJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Specialty & High-Performance Coatings Services',
      serviceType: 'Specialty Coatings Application',
      description:
        'Engineered high-performance specialty coatings for commercial and industrial assets across the DFW Metroplex. Epoxy floors, intumescent fireproofing, chemical linings, anti-microbial coatings, and high-temp systems.',
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
        name: 'Specialty Coating Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Epoxy Floor Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Polyurethane & Polyaspartic Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Intumescent Fireproofing Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Chemical-Resistant Linings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Anti-Microbial Facility Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High-Temperature Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Non-Skid & Safety Floor Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Elastomeric & Reflective Roof Coatings',
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
          name: 'How do I know which specialty coating is right for my facility?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on your environment, substrate, and performance requirements. We offer free assessments to recommend the correct coating system for your needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long do specialty coatings last?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'With proper preparation and application, specialty coatings can last 10-20+ years, depending on the environment and coating type. This is significantly longer than standard paint.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you apply coatings while my facility is operational?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work around your production schedule, including nights, weekends, and phased work. We also use low-VOC and solvent-free coatings when required.',
          },
        },
        {
          '@type': 'Question',
          name: 'What surface preparation standards do you follow?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We follow SSPC (Society for Protective Coatings) and NACE standards for surface preparation. The specific standard depends on the substrate and coating system specified.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer warranties on specialty coatings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer a 5-year written workmanship warranty on all specialty coating projects. Manufacturer warranties may also apply depending on the product.',
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
        {
          '@type': 'Question',
          name: 'Do you have experience with confined space entry?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our crews are trained and certified for confined space entry. We follow all OSHA protocols, including atmospheric monitoring, ventilation, and rescue standby.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you match existing coatings or colors?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can match existing coatings and colors using manufacturer color systems or custom matching.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer maintenance programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer ongoing maintenance programs for specialty coatings to ensure they continue to perform as designed. Contact us to learn more.',
          },
        },
      ],
    },
  ],
};

export default function SpecialtyCoatingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(specialtyJsonLd) }}
      />
      {children}
    </>
  );
}
