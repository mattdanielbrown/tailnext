import { IconChevronRight } from '@tabler/icons-react';
import { CallToActionProps, Item } from '~/shared/types';

const Card = ({ title, description, href, form }: Item) => (
  <div className="mb-6 card px-5 py-4">
    <div className="flex items-center justify-between">
      <div className="w-full">
        <h3 className="mb-3 text-xl font-bold text-gray-700 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-slate-400">{description}</p>
      </div>
      {href && (
        <div className="flex h-10 w-10 items-center justify-center">
          <IconChevronRight className="h-6 w-6 text-primary-600 dark:text-slate-200" />
        </div>
      )}
    </div>
    {form && (
      <div className="mt-2">
        <form className="rounded-md border border-gray-400 bg-white shadow-md">
          <div className="flex items-center">
            {form.icon && (
              <span className="rounded-tl-md rounded-bl-md border-r border-gray-400 px-2 py-2 rtl:rounded-tl-none rtl:rounded-tr-md rtl:rounded-br-md rtl:rounded-bl-none rtl:border-l dark:bg-[#3b3b3b]">
                <form.icon className="h-6 w-6 text-primary-600 dark:text-gray-400" />
              </span>
            )}
            <input
              type={form.input.type}
              name={form.input.name}
              autoComplete={form.input.autocomplete}
              placeholder={form.input.placeholder}
              className="w-full bg-transparent px-4 py-2 text-gray-900 placeholder:text-gray-500 dark:text-gray-300 dark:placeholder:text-gray-400"
            />
            <button
              type={form.btn.type}
              className="rounded-tr-md rounded-br-md border-l border-gray-400 bg-primary-600 px-4 py-2 text-white rtl:rounded-tl-md rtl:rounded-tr-none rtl:rounded-br-none rtl:rounded-bl-md rtl:border-r"
            >
              {form.btn.title}
            </button>
          </div>
        </form>
      </div>
    )}
  </div>
);

const CallToAction2 = ({ title, subtitle, items }: CallToActionProps) => (
  <section className="bg-primary-900 text-gray-200" id="callToActionTwo">
    <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:pt-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="mx-auto md:my-auto md:ml-0 md:pr-24 md:pb-6">
          <h2 className="mb-3 flex justify-center text-6xl font-bold md:justify-start">{title}</h2>
          <p className="text-center text-xl text-gray-200 md:text-left md:rtl:text-right dark:text-slate-300">
            {subtitle}
          </p>
        </div>
        <div className="relative -mb-6">
          {items &&
            items.map(({ title, description, href, form }, index) => (
              <div key={`call-to-action-item-${index}`}>
                {href ? (
                  <a
                    href={href}
                    className="w-full sm:mb-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    key={`item-cta-${index}`}
                  >
                    <Card title={title} description={description} href={href} form={form} />
                  </a>
                ) : (
                  <Card title={title} description={description} href={href} form={form} />
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  </section>
);

export default CallToAction2;
