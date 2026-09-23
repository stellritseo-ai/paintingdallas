import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://paintingdallas.com';
  const currentDate = new Date().toISOString();

  const routes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/commercial-interior-painting', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/commercial-exterior-painting', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/commercial-building-painting', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/industrial-painting', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/property-facility-painting', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/commercial-painting-restoration', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/pressure-washing-surface-preparation', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/specialty-coatings', priority: 0.85, changeFrequency: 'monthly' as const },
    { path: '/projects', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/reviews', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/free-estimate', priority: 0.95, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.85, changeFrequency: 'monthly' as const },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: currentDate,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
