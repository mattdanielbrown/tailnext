import { beforeAll } from 'vitest';
import { setProjectAnnotations } from '@storybook/nextjs-vite';
import * as a11yAddonAnnotations from '@storybook/addon-a11y/preview';

import * as previewAnnotations from './preview';

// Sin las anotaciones del addon, el parámetro a11y.test del preview no tiene
// efecto en Vitest y las violaciones de axe pasarían desapercibidas.
const project = setProjectAnnotations([a11yAddonAnnotations, previewAnnotations]);

beforeAll(project.beforeAll);
