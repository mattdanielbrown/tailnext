import { defineConfig } from 'vitest/config';
import { playwright } from '@vitest/browser-playwright';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import tailwindcss from '@tailwindcss/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    // Vite no lee `paths` del tsconfig: sin esto las 28 stories no resuelven `~/`.
    tsconfigPaths(),
    // El CSS del proyecto es Tailwind 4; Storybook lo compila por Vite, no por Next.
    tailwindcss(),
    storybookTest({ configDir: '.storybook' }),
  ],
  test: {
    name: 'storybook',
    browser: {
      enabled: true,
      headless: true,
      provider: playwright(),
      instances: [{ browser: 'chromium' }],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
});
