import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Commercial Building Painting Dallas | Painting Dallas',
  description:
    'Complete painting solutions for office towers, industrial facilities, retail centers, and multi-building campuses across Dallas-Fort Worth. High-rise certified, 5-year warranty.',
  keywords: [
    'Commercial Building Painting Dallas',
    'Office Tower Painting Dallas',
    'Multi-Building Campus Painting DFW',
    'Commercial Property Repainting Dallas TX',
    'High-Rise Commercial Painters Dallas',
    'Commercial Facility Painting Contractors',
    'Commercial Parking Garage Painting Dallas',
  ],
  openGraph: {
    title: 'Professional Commercial Building Painting in Dallas | Painting Dallas',
    description:
      'Complete painting solutions for office towers, industrial facilities, retail centers, and multi-building campuses. One contractor. Every surface. Zero compromises.',
    url: 'https://paintingdallas.com/commercial-building-painting',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/commercial-building-painting',
  },
};

const buildingJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Building Painting Services',
      serviceType: 'Commercial Building Painting',
      description:
        'Complete turnkey painting solutions for commercial office towers, industrial campuses, multi-family communities, and mixed-use structures across the DFW Metroplex.',
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
        name: 'Commercial Building Painting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Building Exterior Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full Building Interior Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-Building Campus Projects',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'High-Rise & Difficult Access Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Parking Structures & Garages Coating',
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
          name: 'How long will my commercial building painting project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on building size, number of surfaces, and weather conditions. A single office building may take 1-2 weeks, while a multi-building campus could take several weeks to months. We provide a detailed schedule in your proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you paint our building while we remain open for business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We specialize in occupied building painting. We use phased scheduling, off-hours work, and careful protection of your space to minimize disruption to your tenants and operations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle both interior and exterior painting for entire buildings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We are a full-service contractor. We can handle your entire building—interior, exterior, roofing, parking structures, and common areas—under one contract, saving you time and coordination headaches.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all commercial building painting projects. If issues arise due to our workmanship, we will make it right.',
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
          name: 'Do you have experience with high-rise buildings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Our crews are certified in height safety and equipped to handle high-rise projects using lifts, scaffolding, and swing stages. We are fully OSHA-compliant.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work with our property management team?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We work with property managers, facility directors, and building engineers regularly. We understand the importance of clear communication, minimal disruption, and adherence to building rules and regulations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer maintenance programs?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer ongoing maintenance painting programs for property managers who want to keep their buildings in top condition year-round. Contact us to learn more.',
          },
        },
      ],
    },
  ],
};

export default function CommercialBuildingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildingJsonLd) }}
      />
      {children}
    </>
  );
}
