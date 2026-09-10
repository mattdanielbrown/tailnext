const SITE = require('./src/config.js').SITE;

/** @type {import('next').NextConfig} */
module.exports = {
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
