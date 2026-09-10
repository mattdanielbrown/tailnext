'use client';

import { useTheme } from 'next-themes';
import { IconSun, IconMoon } from '@tabler/icons-react';

const ToggleDarkMode = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const handleOnClick = () => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');

  return (
    <button
      type="button"
      onClick={handleOnClick}
      className="inline-block rounded-lg p-2.5 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      aria-label="Toggle Dark Mode"
    >
      {/*
        next-themes escribe la clase del tema en <html> antes de hidratar, así que el
        icono correcto lo decide CSS. Eso evita el estado `mounted`, que obligaba a
        pintar un hueco vacío en el primer render y provocaba un salto visible.
      */}
      <IconSun className="h-5 w-5 dark:hidden" />
      <IconMoon className="hidden h-5 w-5 dark:block" />
    </button>
  );
};

export default ToggleDarkMode;
