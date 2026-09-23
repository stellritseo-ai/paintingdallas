import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Commercial Interior Painting Dallas | Painting Dallas',
  description:
    'Professional commercial interior painting for offices, retail, healthcare, and industrial facilities across Dallas-Fort Worth. Low-VOC, 5-year warranty, zero downtime.',
  keywords: [
    'Commercial Interior Painting Dallas',
    'Commercial Office Painters Dallas',
    'Medical Facility Painting DFW',
    'Retail Interior Painting Dallas',
    'Industrial Interior Coatings DFW',
    'Low-VOC Commercial Painting Dallas',
    'Commercial Interior Painting Contractors Dallas TX',
  ],
  openGraph: {
    title: 'Professional Commercial Interior Painting in Dallas | Painting Dallas',
    description:
      'Transform your office, retail, or medical facility with precision interior painting. Minimal disruption. Maximum impact. Backed by a 5-year workmanship warranty.',
    url: 'https://paintingdallas.com/commercial-interior-painting',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/commercial-interior-painting',
  },
};

const interiorJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Interior Painting Services',
      serviceType: 'Commercial Interior Painting',
      description:
        'Full spectrum commercial interior painting solutions including drywall repair, low-VOC antimicrobial coatings, high-durability finishes, and after-hours scheduling across the DFW Metroplex.',
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
        name: 'Commercial Interior Painting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office & Corporate Space Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Medical & Healthcare Facility Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Retail & Restaurant Space Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial & Warehouse Interior Coatings',
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
          name: 'How long will my interior painting project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on square footage, surface preparation, and complexity. Most office projects are completed within 2-5 days. We provide a detailed schedule in your proposal and work to minimize disruption to your operations.',
          },
        },
        {
          '@type': 'Question',
          name: 'Can you paint after hours or on weekends?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We understand that many businesses cannot afford downtime. We offer flexible scheduling, including nights, weekends, and phased work to accommodate your needs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you use low-VOC or zero-VOC paints?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We offer a range of low-VOC and zero-VOC options that are safer for employees, tenants, and the environment. This is especially important for healthcare and educational facilities.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle drywall repair and preparation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Proper preparation is the key to a long-lasting finish. We repair drywall, patch holes, caulk gaps, sand surfaces, and prime as needed before painting.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are your crews background-checked?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. All of our painters are background-checked, uniformed, and professionally trained. We treat your property with the utmost respect.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all commercial interior painting projects. If issues arise due to our workmanship, we will make it right.',
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

export default function CommercialInteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(interiorJsonLd) }}
      />
      {children}
    </>
  );
}
