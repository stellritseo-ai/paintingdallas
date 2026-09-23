import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Get Your Free Commercial Painting Estimate | Painting Dallas',
  description:
    'Request a free, transparent commercial painting proposal delivered within 24 hours. No hidden fees. Serving office, industrial, healthcare, retail, and multi-family properties across DFW.',
  keywords: [
    'Free Commercial Painting Estimate Dallas',
    'Commercial Painting Quote DFW',
    'Commercial Painter Bid Dallas',
    'Commercial Exterior Painting Estimate',
    'Commercial Interior Painting Quote',
    'Painting Dallas Free Estimate',
    'DFW Painting Contractor Proposal',
  ],
  openGraph: {
    title: 'Request Your Free Commercial Painting Estimate | Painting Dallas',
    description:
      'Detailed, transparent proposal within 24 hours. 5.0 Google Rating | 180+ Commercial Projects Completed | Licensed & Insured.',
    url: 'https://paintingdallas.com/free-estimate',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/free-estimate',
  },
};

const freeEstimateJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Painting Free Estimate',
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
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'USD',
        description: 'Free, no-obligation commercial painting estimate delivered within 24 hours.',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the estimate really free?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We provide free, no-obligation estimates for all commercial projects within our service area. There is no cost and no pressure to hire us.',
          },
        },
        {
          '@type': 'Question',
          name: 'How long does it take to receive my estimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We respond to all inquiries within 24 business hours. After an on-site assessment, you will receive a detailed proposal within 48 hours.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do I need to be present for the on-site assessment?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is helpful but not required. If you cannot be there, please ensure we have access to the areas that need painting and a point of contact who can answer questions.',
          },
        },
        {
          '@type': 'Question',
          name: 'What information do you need from me to provide an accurate estimate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The more details you can provide, the better. Helpful information includes: square footage, number of floors, surface types, current condition, any specific coatings required, and your ideal timeline.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you offer emergency or after-hours estimates?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. For urgent restoration needs, we offer 24/7 emergency support. Call (469) 368-5885 and follow the prompts.',
          },
        },
        {
          '@type': 'Question',
          name: 'What types of commercial properties do you paint?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We service office buildings, warehouses, retail centers, medical facilities, multi-family properties, educational institutions, hospitality venues, and government buildings.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are you licensed and insured?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Absolutely. We are fully licensed, bonded, and insured. We carry comprehensive general liability and workers’ compensation coverage. Certificates of insurance are available upon request.',
          },
        },
      ],
    },
  ],
};

export default function FreeEstimateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(freeEstimateJsonLd) }}
      />
      {children}
    </>
  );
}
