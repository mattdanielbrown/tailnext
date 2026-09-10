import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { buildMetadata } from '~/utils/metadata';

import { allLegals } from 'content-collections';

import Prose from '~/components/common/Prose';

const doc = allLegals.find((entry) => entry.slug === 'privacy');

export const metadata: Metadata = buildMetadata({
  title: doc?.title ?? 'Privacy',
  description: doc?.description,
  path: '/privacy',
});

const Page = () => {
  if (!doc) {
    notFound();
  }

  return <Prose code={doc.body} />;
};

export default Page;
