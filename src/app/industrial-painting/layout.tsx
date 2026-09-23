import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Industrial Painting Dallas | Painting Dallas',
  description:
    'Heavy-duty coatings and protective systems for warehouses, manufacturing plants, and industrial facilities across Dallas-Fort Worth. SSPC-compliant, OSHA-certified, 5-year warranty.',
  keywords: [
    'Industrial Painting Dallas',
    'Structural Steel Painting Dallas TX',
    'Industrial Epoxy Floor Coatings DFW',
    'Warehouse Painting Contractors Dallas',
    'Tank and Vessel Linings Dallas',
    'Manufacturing Facility Painting Dallas',
    'SSPC Industrial Painting Contractors',
  ],
  openGraph: {
    title: 'Professional Industrial Painting in Dallas | Painting Dallas',
    description:
      'Heavy-duty coatings and protective systems for warehouses, manufacturing plants, and industrial facilities. Engineered for the toughest environments in Texas.',
    url: 'https://paintingdallas.com/industrial-painting',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/industrial-painting',
  },
};

const industrialJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Industrial Painting & Protective Coating Services',
      serviceType: 'Industrial Painting',
      description:
        'Full spectrum heavy-duty industrial painting and protective coating services for warehouses, manufacturing facilities, chemical plants, and logistics hubs across the DFW Metroplex.',
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
        name: 'Industrial Painting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Structural Steel Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Warehouse & Distribution Center Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial Floor Coatings & Epoxy Systems',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Tank & Vessel Coating Linings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Confined Space & High-Access Painting',
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
          name: 'How long will my industrial painting project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on facility size, surface preparation requirements, and coating systems. Small projects may take a few days, while large-scale facility painting could take several weeks. We provide a detailed schedule in your proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work around our production schedule?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We understand that downtime costs money. We offer flexible scheduling, including nights, weekends, and phased work to keep your operation running.',
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
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all industrial painting projects. If issues arise due to our workmanship, we will make it right.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you licensed and insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers\' compensation coverage. Certificates of insurance are available upon request.',
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
          name: 'Can you apply coatings in occupied facilities?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We use low-VOC and solvent-free coatings when required, and we employ ventilation and containment measures to protect your employees and operations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer maintenance programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer ongoing industrial maintenance painting programs to keep your facility protected year-round. Contact us to learn more.',
          },
        },
      ],
    },
  ],
};

export default function IndustrialPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industrialJsonLd) }}
      />
      {children}
    </>
  );
}
