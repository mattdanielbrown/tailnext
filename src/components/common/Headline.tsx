import { HeadlineProps } from '~/shared/types';
import { twMerge } from 'tailwind-merge';

const Headline = ({ header, containerClass, titleClass, subtitleClass }: HeadlineProps) => {
  const { title, subtitle, tagline, position } = header;

  return (
    <div className="mb-4">
      {(title || subtitle || tagline) && (
        <div
          className={twMerge(
            `mx-auto mb-6 md:mb-12 ${
              position === 'left' ? 'ml-0 text-left' : position === 'right' ? 'mr-0 text-right' : 'text-center'
            }`,
            containerClass,
          )}
        >
          {tagline && (
            <p className="text-base font-semibold tracking-wide text-primary-600 uppercase dark:text-primary-200">
              {tagline}
            </p>
          )}
          {title && <h2 className={twMerge(`font-heading mb-4 font-bold tracking-tight`, titleClass)}>{title}</h2>}
          {subtitle && (
            <p
              className={twMerge(
                `mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400 ${
                  position === 'left' ? 'ml-0 text-left' : position === 'right' ? 'mr-0 text-right' : 'text-center'
                }`,
                subtitleClass,
              )}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Headline;
