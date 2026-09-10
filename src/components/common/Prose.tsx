import { MDXContent } from '@content-collections/mdx/react';
import { twMerge } from 'tailwind-merge';

export interface ProseProps {
  /** Cuerpo MDX ya compilado por content-collections. */
  code: string;
  containerClass?: string;
}

// Las tres páginas de contenido repetían esta misma cadena de clases.
const PROSE_CLASSES =
  'container mx-auto prose prose-lg mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter dark:prose-headings:text-slate-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-md prose-img:shadow-lg';

const Prose = ({ code, containerClass }: ProseProps) => (
  <div className={twMerge(PROSE_CLASSES, containerClass)}>
    <MDXContent code={code} />
  </div>
);

export default Prose;
