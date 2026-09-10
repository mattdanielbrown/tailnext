import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { allPosts } from 'content-collections';

import Prose from '~/components/common/Prose';

export const dynamicParams = false;

const findPost = (slug: string) => allPosts.find((post) => post.slug === slug && !post.draft);

export async function generateStaticParams() {
  return allPosts.filter((post) => !post.draft).map(({ slug }) => ({ slug }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await props.params;
  const post = findPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: new Date(post.publishDate).toISOString(),
      tags: post.tags,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function Page(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = findPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={new Date(post.publishDate).toISOString()}>{post.publishDate}</time> ~ {post.readingTime} min
            read
          </p>
          <h1 className="mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <Image
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 sm:rounded-md lg:max-w-6xl dark:bg-slate-700"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.title}
              loading="eager"
              priority
              width={900}
              height={480}
            />
          ) : (
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
              <div className="border-t dark:border-slate-700" />
            </div>
          )}
        </header>
        <Prose code={post.body} />
      </article>
    </section>
  );
}
