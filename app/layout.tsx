import { Metadata, Viewport } from 'next';

import { SITE } from '~/config';

import JsonLd from '~/components/common/JsonLd';
import Providers from '~/components/atoms/Providers';
import Header from '~/components/widgets/Header';
import Announcement from '~/components/widgets/Announcement';
import Footer2 from '~/components/widgets/Footer2';

import { Inter as CustomFont } from 'next/font/google';
import '~/assets/styles/base.css';

const customFont = CustomFont({ subsets: ['latin'], variable: '--font-custom' });

export interface LayoutProps {
  children: React.ReactNode;
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  // Sin metadataBase, cualquier URL relativa de OG o canonical no resuelve.
  metadataBase: new URL(SITE.origin),
  title: {
    template: `%s — ${SITE.name}`,
    default: SITE.title,
  },
  description: SITE.description,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html
      lang="en"
      className={`motion-safe:scroll-smooth 2xl:text-[24px] ${customFont.variable} font-sans`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Organization',
                '@id': `${SITE.origin}/#organization`,
                name: SITE.name,
                url: SITE.origin,
              },
              {
                '@type': 'WebSite',
                '@id': `${SITE.origin}/#website`,
                name: SITE.name,
                description: SITE.description,
                url: SITE.origin,
                publisher: { '@id': `${SITE.origin}/#organization` },
              },
            ],
          }}
        />
        <Providers>
          <a
            href="#main"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-gray-900 focus:shadow-lg dark:focus:bg-slate-800 dark:focus:text-white"
          >
            Skip to content
          </a>
          <Announcement />
          <Header />
          <main id="main">{children}</main>
          <Footer2 />
        </Providers>
      </body>
    </html>
  );
}
