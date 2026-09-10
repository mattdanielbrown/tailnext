'use client';

import { useId } from 'react';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();
  // Varios acordeones pueden convivir en una página; useId evita que sus ids choquen.
  const baseId = useId();

  return (
    <>
      {items.map(({ title, description }, index) => {
        const isOpen = activeIndex === index;
        const headingId = `${baseId}-heading-${index}`;
        const panelId = `${baseId}-panel-${index}`;

        return (
          <div key={`accordion-${index}`} className="mx-auto max-w-3xl bg-transparent text-base text-gray-700">
            <div className={classCollapseItem}>
              <h2 id={headingId}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => handleSetIndex(index)}
                  className="flex w-full cursor-pointer justify-between text-left select-none"
                >
                  <span className="w-full pr-2 text-lg leading-6 font-medium text-gray-900 dark:text-slate-300">
                    {title}
                  </span>
                  {iconDown && iconUp ? (
                    isOpen ? (
                      iconUp
                    ) : (
                      iconDown
                    )
                  ) : isOpen ? (
                    <IconChevronUp className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                  ) : (
                    <IconChevronDown className="h-6 w-6 text-primary-600 dark:text-slate-200" />
                  )}
                </button>
              </h2>
              {isOpen && (
                <div className="mt-3" role="region" aria-labelledby={headingId} id={panelId}>
                  <p className="mt-2 text-gray-600 dark:text-slate-400">{description}</p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Collapse;
