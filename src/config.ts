export const SITE = {
  name: 'TailNext',

  // Sobrescribible por entorno para vistas previas y forks (ver .env.example).
  origin: process.env.NEXT_PUBLIC_SITE_ORIGIN ?? 'https://tailnext.vercel.app',
  basePathname: '/',
  trailingSlash: false,

  title: 'TailNext — Your website with Next.js + Tailwind CSS',
  description: 'TailNext is a free and ready to start template to make your website using Next.js and Tailwind CSS.',
} as const;
