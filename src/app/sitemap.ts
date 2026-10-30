import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paintingdallas.com';
  const currentDate = new Date().toISOString();

  const routes = [
    {
      path: '',
      priority: 1.0,
      changeFrequency: 'weekly' as const,
      images: [`${baseUrl}/images/hero.jpg`, `${baseUrl}/images/about.jpg`],
    },
    {
      path: '/commercial-interior-painting',
      priority: 0.95,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/interior.jpg`],
    },
    {
      path: '/commercial-exterior-painting',
      priority: 0.95,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/exterior.jpg`],
    },
    {
      path: '/commercial-building-painting',
      priority: 0.95,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/building.jpg`],
    },
    {
      path: '/industrial-painting',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/industrial.jpg`],
    },
    {
      path: '/property-facility-painting',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/facility.jpg`],
    },
    {
      path: '/commercial-painting-restoration',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/restoration.jpg`],
    },
    {
      path: '/pressure-washing-surface-preparation',
      priority: 0.85,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/surface_prep.jpg`],
    },
    {
      path: '/specialty-coatings',
      priority: 0.85,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/specialty.jpg`],
    },
    {
      path: '/projects',
      priority: 0.9,
      changeFrequency: 'weekly' as const,
      images: [`${baseUrl}/images/projects.jpg`],
    },
    {
      path: '/about',
      priority: 0.85,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/about.jpg`],
    },
    {
      path: '/reviews',
      priority: 0.85,
      changeFrequency: 'weekly' as const,
      images: [`${baseUrl}/images/hero.jpg`],
    },
    {
      path: '/free-estimate',
      priority: 0.95,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/hero.jpg`],
    },
    {
      path: '/contact',
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      images: [`${baseUrl}/images/hero.jpg`],
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    alternates: {
      languages: {
        'en-US': `${baseUrl}${route.path}`,
        'es-US': `${baseUrl}${route.path}`,
      },
    },
    images: route.images,
  }));
}
