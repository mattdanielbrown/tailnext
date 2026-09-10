import type { MetadataRoute } from 'next';

import { SITE } from '~/config';

export default function robots(): MetadataRoute.Robots {
  const base = `${SITE.origin}${SITE.basePathname}`.replace(/\/$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${base}/sitemap.xml`,
  };
}
