import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Commercial Painting Projects Dallas | Portfolio & Case Studies | Painting Dallas',
  description:
    'Explore our portfolio of completed commercial painting, industrial coatings, exterior restorations, and retail renovations across the Dallas-Fort Worth metroplex. 180+ completed projects, 5.0 Google rating.',
  keywords: [
    'Commercial Painting Projects Dallas',
    'Painting Dallas Portfolio',
    'Commercial Painting Case Studies DFW',
    'Office Painting Projects Dallas',
    'Industrial Warehouse Painting Texas',
    'Retail Center Painting Dallas',
    'Commercial Painting Contractor Photos Dallas',
    'Painting Dallas Completed Work',
  ],
  openGraph: {
    title: 'Commercial Painting Projects & Case Studies in Dallas | Painting Dallas',
    description:
      'Explore our commercial portfolio of office towers, retail centers, industrial plants, and historical restorations across the Dallas-Fort Worth Metroplex.',
    url: 'https://paintingdallas.com/projects',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://paintingdallas.com/projects',
  },
};

const projectsJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': 'https://paintingdallas.com/projects/#webpage',
      url: 'https://paintingdallas.com/projects',
      name: 'Commercial Painting Projects & Case Studies in Dallas',
      description:
        'Portfolio and architectural gallery of verified commercial and industrial painting projects completed by Painting Dallas.',
      isPartOf: {
        '@type': 'WebSite',
        '@id': 'https://paintingdallas.com/#website',
        name: 'Painting Dallas',
        url: 'https://paintingdallas.com',
      },
    },
    {
      '@type': 'PaintingContractor',
      '@id': 'https://paintingdallas.com/#organization',
      name: 'Painting Dallas',
      url: 'https://paintingdallas.com',
      telephone: '+1-469-368-5885',
      priceRange: '$$$',
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Dallas-Fort Worth Metroplex, Texas',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '180',
        bestRating: '5',
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
          name: 'Commercial Projects',
          item: 'https://paintingdallas.com/projects',
        },
      ],
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectsJsonLd) }}
      />
      {children}
    </>
  );
}
