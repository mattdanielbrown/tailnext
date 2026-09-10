import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';
import storybook from 'eslint-plugin-storybook';

const config = [
  {
    // src/stories queda fuera hasta que Storybook vuelva; sus imports no resuelven.
    ignores: [
      '.next/**',
      'out/**',
      'node_modules/**',
      'next-env.d.ts',
      '.content-collections/**',
      'storybook-static/**',
    ],
  },
  ...nextCoreWebVitals,
  ...nextTypeScript,
  ...storybook.configs['flat/recommended'],
  {
    // Los archivos de configuración en la raíz son CommonJS por requisito de sus herramientas.
    files: ['*.js', '*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];

export default config;
