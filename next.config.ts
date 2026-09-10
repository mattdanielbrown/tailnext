import { withContentCollections } from '@content-collections/next';
import type { NextConfig } from 'next';

// Ruta relativa a propósito: el archivo de configuración se carga fuera del
// contexto de `paths` del tsconfig, así que el alias ~ no resolvería aquí.
import { SITE } from './src/config';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  trailingSlash: SITE.trailingSlash,
  basePath: SITE.basePathname !== '/' ? SITE.basePathname : '',

  poweredByHeader: false,

  async headers() {
    // React en desarrollo usa eval() para reconstruir callstacks y otras ayudas de
    // depuración; en producción nunca lo hace. Se relaja solo en dev para no
    // debilitar la política del sitio desplegado.
    const isDev = process.env.NODE_ENV === 'development';
    const scriptSrc = isDev ? "script-src 'self' 'unsafe-inline' 'unsafe-eval'" : "script-src 'self' 'unsafe-inline'";

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          // Solo tiene efecto sobre HTTPS; en local el navegador la ignora.
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              // Next inyecta scripts en línea para hidratación y para el script de
              // tema de next-themes, que corre antes de pintar.
              scriptSrc,
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: blob: https://images.unsplash.com https://img.shields.io https://arthelokyo.com",
              "font-src 'self' data:",
              "connect-src 'self'",
              "frame-ancestors 'none'",
              "base-uri 'self'",
              "form-action 'self'",
              'upgrade-insecure-requests',
            ].join('; '),
          },
        ],
      },
    ];
  },
  images: {
    // Steps y Content piden quality={50}; en Next 16 el default es [75] y cualquier
    // otro valor devuelve HTTP 400, así que hay que declararlo.
    qualities: [50, 75],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

// withContentCollections debe envolver por fuera: ejecuta el builder al cargar
// la config y devuelve nextConfig intacto, sin tocar el bundler.
export default withContentCollections(nextConfig);
