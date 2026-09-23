import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Painting Restoration Dallas | Painting Dallas',
  description:
    'Expert commercial painting restoration, architectural repairs, and protective recoating in Dallas-Fort Worth. Stucco, masonry, metal, wood, lead-safe certified, 5-year warranty.',
  keywords: [
    'Commercial Painting Restoration Dallas',
    'Stucco Restoration Dallas TX',
    'Masonry Painting Restoration Dallas',
    'Commercial Wood Replacement Painting DFW',
    'Metal Rust Restoration Dallas',
    'Historic Commercial Building Restoration',
    'Commercial Water Damage Painting Dallas',
    'Lead-Safe Certified Commercial Painters Dallas',
  ],
  openGraph: {
    title: 'Professional Commercial Painting Restoration in Dallas | Painting Dallas',
    description:
      'Bring your weathered, damaged, or aging commercial property back to life. Expert surface restoration, repairs, and premium coatings backed by a 5-year warranty.',
    url: 'https://paintingdallas.com/commercial-painting-restoration',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/commercial-painting-restoration',
  },
};

const restorationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Painting Restoration Services',
      serviceType: 'Commercial Painting Restoration',
      description:
        'Full spectrum commercial painting restoration, architectural surface remediation, historic facade renewal, structural metal and masonry repairs, and weatherproofing coatings across the Dallas-Fort Worth Metroplex.',
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
        name: 'Commercial Restoration Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Stucco & EIFS Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Masonry & Brick Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Wood Siding & Trim Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Metal & Steel Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Drywall & Interior Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Concrete & Parking Structure Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Roof Restoration & Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Historic Building Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Water & Storm Damage Restoration',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mold & Mildew Remediation',
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
          name: 'How do I know if my property needs restoration or just repainting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'If you see cracks, peeling, rot, rust, or water damage, restoration is likely needed. A professional assessment will determine the extent of repairs required. We offer free assessments.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does commercial restoration take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on the extent of damage and the size of the property. Small restorations may take a few days, while larger projects could take several weeks. We provide a detailed schedule in your proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you work with my insurance company?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We have experience working with insurance companies on storm damage, water damage, and other covered restoration projects. We can provide documentation and estimates as needed.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer emergency restoration services?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer 24/7 emergency response for urgent restoration needs. Call (469) 368-5885 and follow the prompts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all commercial restoration projects. If issues arise due to our workmanship, we will make it right.',
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
          name: 'Do you handle lead-based paint removal?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We are lead-safe certified and follow all EPA and OSHA regulations for lead-based paint removal and disposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you restore historic buildings?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We have experience restoring historic commercial properties and understand the specialized knowledge required for older substrates and period-appropriate finishes.',
          },
        },
      ],
    },
  ],
};

export default function CommercialPaintingRestorationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restorationJsonLd) }}
      />
      {children}
    </>
  );
}
