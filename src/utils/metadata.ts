import type { Metadata } from 'next';

import { SITE } from '~/config';

export interface PageMetadataOptions {
  title?: string;
  description?: string;
  /** Ruta absoluta del sitio, p. ej. '/about'. La raíz es ''. */
  path?: string;
  image?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  tags?: string[];
}

/** URL canónica del sitio para una ruta, respetando basePathname y trailingSlash. */
export const siteUrl = (path = '') => {
  const base = `${SITE.origin}${SITE.basePathname}`.replace(/\/$/, '');
  const url = `${base}${path}`;
  return SITE.trailingSlash && path !== '' ? `${url}/` : url;
};

/**
 * Construye los metadatos de una página. Centraliza OpenGraph, Twitter y canonical
 * para que cada ruta declare solo lo suyo y no se olvide ninguno por el camino.
 */
export const buildMetadata = ({
  title,
  description = SITE.description,
  path = '',
  image,
  type = 'website',
  publishedTime,
  tags,
}: PageMetadataOptions = {}): Metadata => {
  const url = siteUrl(path);
  // El layout raíz define la plantilla '%s — TailNext'; para OpenGraph hay que
  // componer el título completo a mano, porque allí no se aplica.
  const fullTitle = title ? `${title} — ${SITE.name}` : SITE.title;
  const images = image ? [{ url: image, alt: title ?? SITE.name }] : undefined;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE.name,
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && tags ? { tags } : {}),
    },
    twitter: {
      card: image ? 'summary_large_image' : 'summary',
      title: fullTitle,
      description,
      ...(images ? { images } : {}),
    },
  };
};
