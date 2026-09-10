import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <p className="text-sm font-semibold tracking-wider text-primary-600 uppercase dark:text-primary-400">404</p>
      <h1 className="mt-4 text-4xl font-bold tracking-tighter md:text-5xl">This page does not exist</h1>
      <p className="mt-4 text-lg text-gray-600 dark:text-slate-400">
        The page you are looking for may have been moved or removed.
      </p>
      <Link href="/" className="mt-8 btn btn-primary">
        Back to home
      </Link>
    </section>
  );
}
