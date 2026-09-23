import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Property & Facility Painting Dallas | Painting Dallas',
  description:
    'Reliable painting maintenance for property managers, facility directors, and HOA boards across Dallas-Fort Worth. Fast unit turns, common area refreshes, and 5-year workmanship warranty.',
  keywords: [
    'Property Painting Dallas',
    'Facility Painting Dallas TX',
    'Commercial Property Maintenance Painting',
    'Apartment Unit Turn Painting Dallas',
    'HOA Painting Contractors Dallas',
    'Common Area Commercial Painting DFW',
    'Facility Director Painting Partner Dallas',
    'Commercial Property Managers Painting DFW',
  ],
  openGraph: {
    title: 'Professional Property & Facility Painting in Dallas | Painting Dallas',
    description:
      'Reliable painting maintenance for property managers, facility directors, and HOA boards. On-time. On-budget. Zero headaches.',
    url: 'https://paintingdallas.com/property-facility-painting',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/property-facility-painting',
  },
};

const facilityJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Property & Facility Painting Services',
      serviceType: 'Property and Facility Maintenance Painting',
      description:
        'Reliable painting maintenance for property managers, facility directors, and HOA boards across the DFW Metroplex. Unit turns, common areas, exterior preservation, and customized multi-property maintenance programs.',
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
        name: 'Property & Facility Painting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Unit Turns & Vacancy Prep',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Common Area Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Exterior Building Maintenance',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Interior Office & Tenant Space Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Amenity & Community Space Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Parking Structures & Garages',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Pressure Washing & Surface Cleaning',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Roof Coatings & Waterproofing',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Signage & Branding Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Fence & Gate Painting',
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
          name: 'How quickly can you complete a unit turn?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Unit turns are our specialty. Most standard units can be completed within 1-2 days, depending on the scope of work. We prioritize unit turns to help you minimize vacancy loss.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you paint occupied units and common areas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Absolutely. We specialize in occupied property painting. We work around tenant schedules, use low-VOC paints when needed, and take extra care to protect residents' belongings.",
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer volume discounts for multiple properties?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer competitive pricing for property management companies with multiple properties or ongoing maintenance needs. Contact us to discuss a custom program.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all property and facility painting projects. If issues arise due to our workmanship, we will make it right.',
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
          name: 'Can you work with our property management software?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We can integrate with your existing work order and property management systems to streamline communication and scheduling.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer emergency services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer 24/7 emergency response for urgent painting and restoration needs. Call (469) 368-5885 and follow the prompts.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide certificates of insurance?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We are fully licensed, bonded, and insured. We can provide certificates of insurance upon request.',
          },
        },
      ],
    },
  ],
};

export default function PropertyFacilityPaintingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(facilityJsonLd) }}
      />
      {children}
    </>
  );
}
