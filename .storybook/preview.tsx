import React from 'react';
import type { Preview, ReactRenderer } from '@storybook/nextjs-vite';
import { withThemeByClassName } from '@storybook/addon-themes';
import { INITIAL_VIEWPORTS } from 'storybook/viewport';

import '~/assets/styles/base.css';

const CUSTOM_VIEWPORTS = {
  SMALL: {
    name: 'Mobile View',
    styles: { width: '360px', height: '640px' },
    type: 'mobile',
  },
  MEDIUM: {
    name: 'Tablet View',
    styles: { width: '960px', height: '640px' },
    type: 'tablet',
  },
};

const preview: Preview = {
  parameters: {
    // argTypesRegex se eliminó en Storybook 8: los handlers se declaran ahora
    // explícitamente con fn() en cada story que los necesite.
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      options: {
        ...CUSTOM_VIEWPORTS,
        ...INITIAL_VIEWPORTS,
      },
    },
    backgrounds: { disable: true, grid: { disable: true } },
    a11y: {
      // Las violaciones fallan el test en lugar de quedarse en un aviso.
      test: 'error',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-white font-sans tracking-tight text-gray-900 antialiased dark:bg-slate-900 dark:text-slate-300">
        <Story />
      </div>
    ),
    withThemeByClassName<ReactRenderer>({
      themes: { light: '', dark: 'dark' },
      defaultTheme: 'light',
    }),
  ],
};

export default preview;
