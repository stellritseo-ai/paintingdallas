import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'About Us | Trusted Commercial Buildings Interior & Exterior Painting Services - Painting Dallas',
  description:
    'Protect your investment and enhance your property value. Painting Dallas provides trusted, premium commercial buildings interior and exterior painting services across Dallas, Texas.',
  keywords: [
    'Commercial Buildings Interior or Exterior Painting Services Contractor',
    'Commercial Buildings Painting Services',
    'Commercial Buildings Painters Specialists',
    'About Painting Dallas',
    'Painting Dallas About Us',
    'Professional Painting & Restoration Services Dallas',
  ],
  openGraph: {
    title:
      'About Painting Dallas | Commercial Buildings Painting Contractors',
    description:
      'Protect your investment and enhance property value. Expert commercial buildings painters specialists delivering superior results across Dallas, TX.',
    url: 'https://paintingdallas.com/about',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://paintingdallas.com/images/about.jpg',
        width: 1200,
        height: 630,
        alt: 'About Painting Dallas Commercial Painting Contractors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Painting Dallas | Commercial Painting Contractors',
    description:
      'Protect your investment and enhance property value with trusted commercial painting specialists in Dallas, TX.',
    images: ['https://paintingdallas.com/images/about.jpg'],
  },
  alternates: {
    canonical: 'https://paintingdallas.com/about',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://paintingdallas.com/about/#webpage',
      url: 'https://paintingdallas.com/about',
      name: 'About Painting Dallas | Commercial Painting Contractors',
      description:
        'Protect your investment and enhance property value. Painting Dallas provides trusted, premium commercial buildings interior and exterior painting services across Dallas, Texas.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://paintingdallas.com/#website',
        url: 'https://paintingdallas.com',
        name: 'Painting Dallas',
      },
      mainEntity: {
        '@type': 'ProfessionalService',
        name: 'Painting Dallas',
        alternateName: 'Commercial Buildings Interior & Exterior Painting Services',
        description:
          'Premier commercial buildings painting services contractor providing trusted interior and exterior painting, industrial coatings, and restoration across Dallas-Fort Worth.',
        url: 'https://paintingdallas.com/about',
        telephone: '+1-469-360-5805',
        email: 'support@paintingdallas.com',
        priceRange: '$$$',
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
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:00',
            closes: '18:00',
          },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://paintingdallas.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'About Us',
          item: 'https://paintingdallas.com/about',
        },
      ],
    },
  ],
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      {children}
    </>
  );
}
