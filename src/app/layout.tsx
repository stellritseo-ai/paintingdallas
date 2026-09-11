import type { Metadata, Viewport } from 'next';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#062F57',
};

export const metadata: Metadata = {
  title: 'Painting Dallas | Commercial Painting & Restoration Contractors',
  description:
    'Premier commercial painting contractors in Dallas, TX. Specializing exclusively in commercial interior & exterior painting, industrial coatings, multi-story buildings, and facility maintenance within a 50-mile radius.',
  keywords: [
    'Commercial Painting Dallas',
    'Commercial Painters Dallas',
    'Commercial Painting Company Dallas',
    'Commercial Painting Contractors Dallas',
    'Commercial Exterior Painting Dallas',
    'Commercial Interior Painting Dallas',
    'Industrial Painting Dallas',
    'Commercial Building Painters Dallas',
    'Commercial Painting Services Dallas',
    'Commercial Property Painting Dallas',
    'Commercial Painting & Restoration Dallas',
  ],
  authors: [{ name: 'Painting Dallas' }],
  creator: 'Painting Dallas',
  publisher: 'Painting Dallas',
  openGraph: {
    title: 'Painting Dallas | Commercial Painting & Restoration Contractors',
    description:
      'For 10+ years, Painting Dallas has delivered dependable commercial painting and restoration services for businesses and facilities across the Dallas metroplex. 100% Commercial Only.',
    url: 'https://paintingdallas.com',
    siteName: 'Painting Dallas',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Painting Dallas',
  description:
    'Specialized commercial painting and restoration contractor serving corporate, industrial, retail, and institutional properties throughout a 50-mile radius of Dallas, TX.',
  url: 'https://paintingdallas.com',
  telephone: '+1-469-360-5805',
  email: 'info@paintingdallas.com',
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dallas',
    addressRegion: 'TX',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 32.7767,
    longitude: -96.797,
  },
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 32.7767,
      longitude: -96.797,
    },
    geoRadius: '80467', // 50 miles in meters
  },
  knowsLanguage: ['en', 'es'],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Commercial Painting Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Interior Painting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Exterior Painting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Building Painting',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Industrial Painting & Epoxy Floor Coatings',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Commercial Painting Restoration',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Pressure Washing & Surface Preparation',
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-[#17202A] antialiased selection:bg-[#062F57] selection:text-white" suppressHydrationWarning>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
