import type { Metadata } from 'next';

import fs from 'fs';
import path from 'path';
import md from 'markdown-it';

export const metadata: Metadata = {
  title: 'Privacy',
};

const Page = () => {
  const filePath = path.join(process.cwd(), 'src/content/privacy/privacy.md');
  const fileContent = fs.readFileSync(filePath, 'utf8');

  return (
    <div
      className="container mx-auto prose prose-lg mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter dark:prose-headings:text-slate-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-md prose-img:shadow-lg"
      dangerouslySetInnerHTML={{
        __html: md({
          html: true,
        }).render(fileContent),
      }}
    />
  );
};

export default Page;
