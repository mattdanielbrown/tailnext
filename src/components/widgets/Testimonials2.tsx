'use client';

import { TestimonialsProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemTestimonial from '../common/ItemTestimonial';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { useState } from 'react';

const Testimonials2 = ({ header, testimonials, isTestimonialUp, id, hasBackground = false }: TestimonialsProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const firstIndex = 0;
  const lastIndex = testimonials.length - 1;

  const handleGoToPrevious = (index: number) => {
    if (activeIndex > firstIndex) {
      setActiveIndex(index - 1);
    }
  };

  const handleGoToNext = (index: number) => {
    if (activeIndex < lastIndex) {
      setActiveIndex(index + 1);
    }
  };

  return (
    <WidgetWrapper id={id ? id : ''} hasBackground={hasBackground} containerClass="">
      {header && <Headline header={header} titleClass="text-2xl sm:text-3xl" />}
      <div className="card mx-auto flex max-w-6xl overflow-hidden">
        {testimonials.map(
          ({ name, job, testimonial, image }, index) =>
            testimonial && (
              <div
                key={`item-testimonial-${index}`}
                className="linear mx-auto inline-flex min-w-full max-w-6xl flex-col items-stretch justify-center transition-all duration-300"
                style={{ transform: `translate(-${activeIndex * 100}%)` }}
              >
                <ItemTestimonial
                  name={name}
                  job={job}
                  testimonial={testimonial}
                  isTestimonialUp={isTestimonialUp}
                  image={image}
                  containerClass="flex w-full h-full px-4 py-8 text-center lg:py-16 lg:px-6"
                  panelClass="w-full md:max-w-md lg:max-w-screen-sm mx-auto"
                  imageClass="w-6 h-6 rounded-full"
                  dataClass="mt-8 space-x-3 mx-auto"
                  nameJobClass="flex flex-row items-center divide-x-2 divide-gray-500 dark:divide-gray-700"
                  nameClass="pr-3 font-medium text-gray-900 dark:text-white"
                  jobClass="pl-3 text-sm font-light text-gray-500 dark:text-gray-400"
                  testimonialClass="text-2xl font-medium text-gray-900 dark:text-white"
                />
                <div className="mb-6 flex items-center justify-center p-4 md:absolute md:inset-0 md:mb-0 md:justify-between">
                  <button onClick={() => handleGoToPrevious(index)}>
                    <IconChevronLeft
                      className={`mr-4 h-12 w-12 ${
                        activeIndex === firstIndex
                          ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
                          : 'text-black dark:text-white'
                      }`}
                    />
                  </button>
                  <button onClick={() => handleGoToNext(index)}>
                    <IconChevronRight
                      className={`ml-4 h-12 w-12 ${
                        activeIndex === lastIndex
                          ? 'cursor-not-allowed text-gray-400 dark:text-gray-600'
                          : 'text-black dark:text-white'
                      }`}
                    />
                  </button>
                </div>
              </div>
            ),
        )}
      </div>
    </WidgetWrapper>
  );
};

export default Testimonials2;
