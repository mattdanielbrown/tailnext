import { twMerge } from 'tailwind-merge';
import { WrapperTagProps } from '~/shared/types';
import Background from './Background';

const WidgetWrapper = ({ children, id, hasBackground, containerClass }: WrapperTagProps) => (
  <section className="not-prose relative scroll-mt-[72px]" id={id}>
    <Background hasBackground={hasBackground} />
    <div
      className={twMerge(
        'text-default relative mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16 lg:py-20',
        containerClass,
      )}
    >
      {children}
    </div>
  </section>
);

export default WidgetWrapper;
