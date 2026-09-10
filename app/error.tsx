'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // En producción el mensaje se elide; el digest es lo que permite cruzarlo
    // con el log del servidor.
    console.error(error);
  }, [error]);

  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">Something went wrong</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">An unexpected error occurred. You can try again.</p>
      {error.digest && <p className="mt-2 text-sm text-gray-500 dark:text-slate-500">Reference: {error.digest}</p>}
      <button type="button" onClick={reset} className="mt-8 btn btn-primary">
        Try again
      </button>
    </section>
  );
}
