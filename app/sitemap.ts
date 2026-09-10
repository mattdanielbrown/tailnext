import type { MetadataRoute } from 'next';

import { SITE } from '~/config';
import { fetchPosts } from '~/utils/posts';

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

// posts.js todavía es JavaScript sin tipos; F8 lo reemplaza por content-collections.
// Hasta entonces se declara aquí la forma mínima que necesita el sitemap.
type PostForSitemap = {
  slug: string;
  publishDate?: string;
  image?: string;
};

const buildUrl = (path: string) => {
  const base = `${SITE.origin}${SITE.basePathname}`.replace(/\/$/, '');
  const url = `${base}${path}`;
  return SITE.trailingSlash && path !== '' ? `${url}/` : url;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: PostForSitemap[] = await fetchPosts();
  const now = new Date();

  return [
    ...STATIC_ROUTES.map(({ path, changeFrequency, priority }) => ({
      url: buildUrl(path),
      lastModified: now,
      changeFrequency,
      priority,
    })),
    // Los posts cuelgan de la raíz, no de /blog: app/(blog)/[slug] es un segmento
    // dinámico de primer nivel dentro de un grupo de rutas.
    ...posts.map((post) => ({
      url: buildUrl(`/${post.slug}`),
      lastModified: post.publishDate ? new Date(post.publishDate) : now,
      changeFrequency: 'yearly' as const,
      priority: 0.7,
      ...(post.image ? { images: [post.image] } : {}),
    })),
  ];
}
