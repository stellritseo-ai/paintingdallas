import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Commercial Exterior Painting Dallas | Painting Dallas',
  description:
    'Protect your investment and enhance curb appeal with durable, weather-resistant commercial exterior coatings across Dallas-Fort Worth. 5-year warranty, licensed & insured.',
  keywords: [
    'Commercial Exterior Painting Dallas',
    'Commercial Building Painters Dallas',
    'DFW Exterior Painting Contractor',
    'Commercial Stucco Painting Dallas',
    'Warehouse Exterior Coatings Dallas TX',
    'Retail Building Exterior Painting DFW',
    'Commercial Elastomeric Coatings Dallas',
  ],
  openGraph: {
    title: 'Professional Commercial Exterior Painting in Dallas | Painting Dallas',
    description:
      'Protect your investment and enhance your curb appeal with durable, weather-resistant exterior coatings. Serving the DFW Metroplex with precision and professionalism.',
    url: 'https://paintingdallas.com/commercial-exterior-painting',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/commercial-exterior-painting',
  },
};

const exteriorJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Commercial Exterior Painting Services',
      serviceType: 'Commercial Exterior Painting',
      description:
        'Full spectrum commercial exterior painting services for office buildings, warehouses, retail centers, healthcare facilities, and multi-family communities across the DFW Metroplex.',
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
        name: 'Commercial Exterior Painting Solutions',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Office & Corporate Building Exterior Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Industrial & Warehouse Exterior Coatings',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Retail & Hospitality Exterior Painting',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Multi-Family & HOA Exterior Painting',
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
          name: 'How long will my exterior painting project take?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Project timelines vary based on square footage, surface preparation, and weather conditions. Most commercial exterior projects are completed within 1-3 weeks. We provide a detailed schedule in your proposal.',
          },
        },
        {
          '@type': 'Question',
          name: 'What is the best time of year to paint a commercial exterior in Texas?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The ideal window is spring and fall when temperatures are moderate and humidity is lower. However, we use premium coatings that can be applied in a wide range of conditions. We monitor weather closely and schedule accordingly.',
          },
        },
        {
          '@type': 'Question',
          name: 'How often should a commercial building be repainted?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It depends on the substrate, coating type, and exposure. Generally, commercial buildings in Texas should be repainted every 5-10 years. We can assess your property and recommend a maintenance schedule.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you pressure wash before painting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Pressure washing is a critical step in our preparation process. It removes dirt, mildew, chalk, and loose paint, ensuring proper adhesion of the new coating.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you repair damaged surfaces before painting?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We repair cracks, seal gaps, patch stucco, replace rotten wood, and address any underlying issues before painting. We believe in fixing problems, not hiding them.',
          },
        },
        {
          '@type': 'Question',
          name: 'What type of warranty do you offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer a 5-year written workmanship warranty on all commercial exterior painting projects. If issues arise due to our workmanship, we will make it right.',
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
          name: 'Can you work around our business hours?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. We understand that your business needs to operate. We offer flexible scheduling, including early morning, evening, and weekend work to minimize disruption.',
          },
        },
      ],
    },
  ],
};

export default function CommercialExteriorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(exteriorJsonLd) }}
      />
      {children}
    </>
  );
}
