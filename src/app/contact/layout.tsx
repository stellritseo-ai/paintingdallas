import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Contact Us | Commercial Painting & Restoration Services - Painting Dallas',
  description:
    'Let’s discuss your next commercial project. Contact Painting Dallas for premier commercial painting and restoration across the DFW Metroplex. Free quotes & 24/7 emergency response.',
  keywords: [
    'Contact Painting Dallas',
    'Commercial Painting Quote Dallas',
    'Commercial Painter Near Me Dallas',
    'Commercial Painting Contractors DFW',
    'Painting Dallas Phone Number',
    'Painting Dallas Office Location',
    'Emergency Commercial Painting Dallas',
  ],
  openGraph: {
    title: 'Contact Painting Dallas | Request a Free Commercial Estimate',
    description:
      'From high-rise offices to industrial warehouses, Painting Dallas delivers precision commercial painting across DFW. Get your free proposal today.',
    url: 'https://paintingdallas.com/contact',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/contact',
  },
};

const contactJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Painting Dallas',
    alternateName: 'Painting Dallas Commercial Painting Contractors',
    description:
      'Premier commercial painting and restoration contractor serving commercial properties, general contractors, and facility managers across the Dallas-Fort Worth Metroplex.',
    url: 'https://paintingdallas.com/contact',
    telephone: '+1-469-368-5885',
    email: 'info@paintingdallas.com',
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
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        description: 'By Appointment Only',
      },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-469-368-5885',
      contactType: 'customer service',
      areaServed: 'Dallas-Fort Worth Metroplex',
      availableLanguage: ['English', 'Spanish'],
    },
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
