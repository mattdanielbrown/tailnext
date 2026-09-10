import type { MetadataRoute } from 'next';

import { SITE } from '~/config';
import { allPosts } from 'content-collections';

// Las rutas estáticas del sitio. Los posts se añaden aparte desde el contenido.
const STATIC_ROUTES = [
  { path: '', changeFrequency: 'monthly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/pricing', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/faqs', changeFrequency: 'yearly', priority: 0.5 },
  { path: '/privacy', changeFrequency: 'yearly', priority: 0.3 },
  { path: '/terms', changeFrequency: 'yearly', priority: 0.3 },
] as const;

const buildUrl = (path: string) => {
  const base = `${SITE.origin}${SITE.basePathname}`.replace(/\/$/, '');
  const url = `${base}${path}`;
  return SITE.trailingSlash && path !== '' ? `${url}/` : url;
};

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = allPosts.filter((post) => !post.draft);
  const now = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
      url: buildUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    ...posts.map((post) => ({
      url: buildUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.publishDate),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
      ...(post.image ? { images: [post.image] } : {}),
    })),
  ];
}
