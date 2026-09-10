import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { allPosts } from 'content-collections';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Articles and updates.',
};

export default function BlogIndex() {
  const posts = allPosts
    .filter((post) => !post.draft)
    .sort((a, b) => Date.parse(b.publishDate) - Date.parse(a.publishDate));

  return (
    <section className="mx-auto max-w-3xl px-6 py-12 sm:px-6 sm:py-16 lg:py-20">
      <header>
        <h1 className="mb-8 text-center text-4xl font-bold tracking-tighter md:mb-16 md:text-5xl">Blog</h1>
      </header>
      <div className="grid grid-cols-1 gap-6 p-4 md:p-0 lg:grid-cols-2">
        {posts.map(({ slug, title, image, publishDate, readingTime, tags }) => (
          <article
            key={slug}
            className="flex flex-col overflow-hidden rounded-xl border border-gray-200 shadow-lg dark:border-slate-700"
          >
            <Link href={`/blog/${slug}`}>
              {image && <Image width={650} height={340} alt={title} src={image} />}
              <div className="p-4">
                <h2 className="font-bold">{title}</h2>
                <p className="mt-2 text-sm text-gray-500 dark:text-slate-400">
                  <time dateTime={new Date(publishDate).toISOString()}>{publishDate}</time> ~ {readingTime} min read
                </p>
                {tags.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-slate-800 dark:text-slate-300"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
