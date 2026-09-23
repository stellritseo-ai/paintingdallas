import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Client Reviews & Testimonials | Validated by Texas Facility Leaders - Painting Dallas',
  description:
    'Read 180+ verified commercial facility reviews and testimonials for Painting Dallas. 5.0 Google Rating from property managers, general contractors, and business owners across DFW.',
  keywords: [
    'Painting Dallas Reviews',
    'Commercial Painting Testimonials Dallas',
    'Painting Dallas Google Reviews',
    'Commercial Painter Ratings Dallas',
    'Commercial Painting Contractors DFW Reviews',
    'Verified Commercial Reviews Painting Dallas',
    'Dallas Commercial Facility Painting Feedback',
  ],
  openGraph: {
    title: 'Client Reviews & Testimonials | Validated by Texas Facility Leaders - Painting Dallas',
    description:
      '5.0 Google Rating | 180+ Commercial Facility Reviews | 98% Customer Satisfaction across Dallas, Plano, Fort Worth, and the DFW Metroplex.',
    url: 'https://paintingdallas.com/reviews',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/reviews',
  },
};

const reviewsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemPage',
  mainEntity: {
    '@type': 'ProfessionalService',
    name: 'Painting Dallas',
    alternateName: 'Commercial Buildings Interior & Exterior Painting Services',
    description:
      'Premier commercial painting contractor providing trusted interior and exterior painting, industrial coatings, and restoration across Dallas-Fort Worth.',
    url: 'https://paintingdallas.com',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      worstRating: '1',
      ratingCount: '184',
      reviewCount: '184',
    },
    review: [
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Libby Isaacs',
          jobTitle: 'Property Manager',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Painting Dallas transformed our office space with minimal disruption to our daily operations.',
        reviewBody:
          'We needed our 20,000 sq. ft. corporate office repainted over a weekend to avoid any downtime. The team at Painting Dallas was professional, efficient, and incredibly clean. They finished ahead of schedule and the results exceeded our expectations.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Robin Swartz',
          jobTitle: 'Facility Director',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Their industrial painting team cleared our 85,000 sq. ft. warehouse in record time.',
        reviewBody:
          'Finding a crew that can handle large-scale industrial projects without cutting corners is difficult. Painting Dallas exceeded our expectations. They managed the surface preparation, safety protocols, and application flawlessly.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Timothy Wright',
          jobTitle: 'Commercial Real Estate Broker',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'A true team of experts in Texas. 10/10 would recommend.',
        reviewBody:
          'I have worked with many contractors over my 20 years in commercial real estate, and Painting Dallas is among the best. From the initial consultation to the final walkthrough, their attention to detail was impeccable.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Maria Rodriguez',
          jobTitle: 'Building Owner',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Their knowledge of masonry and restoration techniques is unmatched.',
        reviewBody:
          'We hired Painting Dallas to restore the exterior of our historic downtown building. Their team demonstrated incredible knowledge of masonry and surface preparation. They didn’t just paint over problems—they fixed the underlying issues.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'David Chen',
          jobTitle: 'Property Management Company',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Transparent pricing and excellent communication made this project stress-free.',
        reviewBody:
          'As a property management company, we need contractors who are reliable and transparent. Painting Dallas provided a detailed, line-item proposal with no hidden fees. The crew was background-checked, professional, and respectful of our residents.',
      },
      {
        '@type': 'Review',
        author: {
          '@type': 'Person',
          name: 'Dr. Sarah Mitchell',
          jobTitle: 'Medical Facility Director',
        },
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        name: 'Professional service, quality results, and they left the site spotless.',
        reviewBody:
          'We contracted Painting Dallas for a complete interior repaint of our medical facility. Given the sensitive nature of our environment, we needed a team that understood HIPAA compliance and infection control. They exceeded our expectations.',
      },
    ],
  },
};

export default function ReviewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewsJsonLd) }}
      />
      {children}
    </>
  );
}
