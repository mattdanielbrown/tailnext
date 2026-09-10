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
