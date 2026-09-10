import { twMerge } from 'tailwind-merge';

interface DividerLine {
  dividerLineClass?: string;
}

const DividerLine = ({ dividerLineClass }: DividerLine) => (
  <hr className={twMerge('my-4 border-gray-200 dark:border-gray-700', dividerLineClass)} />
);

export default DividerLine;
