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
  },
  alternates: {
    canonical: 'https://paintingdallas.com/about',
  },
};

const aboutJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Painting Dallas',
    alternateName: 'Commercial Buildings Interior & Exterior Painting Services',
    description:
      'Premier commercial buildings painting services contractor providing trusted interior and exterior painting, industrial coatings, and restoration across Dallas-Fort Worth.',
    url: 'https://paintingdallas.com/about',
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
    ],
  },
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
