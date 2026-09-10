import { StatsProps } from '~/shared/types';
import { getSuffixNumber } from '~/utils/utils';
import WidgetWrapper from '../common/WidgetWrapper';

const Stats = ({ items, id, hasBackground = false }: StatsProps) => (
  <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
    <div className="grid grid-cols-2 md:grid-cols-4">
      {items.map(({ title, description }, index) => (
        <div
          key={`item-stat-${index}`}
          className="mb-12 text-center md:mb-0 md:border-r md:last:border-none dark:md:border-slate-500"
        >
          <div className="text-primary text-[2.6rem] font-bold lg:text-5xl xl:text-6xl dark:text-white">
            {getSuffixNumber(title as number)}
          </div>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base dark:text-slate-400">
            {description}
          </p>
        </div>
      ))}
    </div>
  </WidgetWrapper>
);

export default Stats;
