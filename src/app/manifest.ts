import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Painting Dallas | Commercial Painting Contractors',
    short_name: 'Painting Dallas',
    description:
      'Premier commercial painting contractors in Dallas, TX. Specializing in commercial interior & exterior painting, industrial coatings, multi-story buildings, and facility maintenance.',
    start_url: '/',
    display: 'standalone',
    background_color: '#020F1D',
    theme_color: '#062F57',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        src: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
    ],
  };
}
