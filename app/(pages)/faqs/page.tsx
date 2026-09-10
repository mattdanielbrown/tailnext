import type { Metadata } from 'next';

import { buildMetadata } from '~/utils/metadata';

import CallToAction from '~/components/widgets/CallToAction';
import FAQs4 from '~/components/widgets/FAQs4';
import { heroFaqs, callToActionFaqs, faqs4Faqs } from '~/shared/data/pages/faqs.data';
import Hero from '~/components/widgets/Hero';

export const metadata: Metadata = buildMetadata({
  title: 'FAQs',
  description: 'Answers to the questions we get asked most often.',
  path: '/faqs',
});

const Page = () => {
  return (
    <>
      <Hero {...heroFaqs} />
      <FAQs4 {...faqs4Faqs} />
      <CallToAction {...callToActionFaqs} />
    </>
  );
};

export default Page;
