import md from 'markdown-it';
import Image from 'next/image';
import { notFound } from 'next/navigation';

import { findPostBySlug, fetchPosts } from '~/utils/posts';

export const dynamicParams = false;

const getFormattedDate = (date) => date;

export async function generateMetadata(props) {
  const params = await props.params;
  const post = await findPostBySlug(params.slug);
  if (!post) {
    return notFound();
  }
  return { title: post.title, description: post.description };
}

export async function generateStaticParams() {
  return (await fetchPosts()).map(({ slug }) => ({ slug }));
}

export default async function Page(props) {
  const params = await props.params;
  const post = await findPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  return (
    <section className="mx-auto py-8 sm:py-16 lg:py-20">
      <article>
        <header className={post.image ? 'text-center' : ''}>
          <p className="mx-auto max-w-3xl px-4 sm:px-6">
            <time dateTime={post.publishDate}>{getFormattedDate(post.publishDate)}</time> ~{' '}
            {/* {Math.ceil(post.readingTime)} min read */}
          </p>
          <h1 className="mx-auto mb-8 max-w-3xl px-4 text-4xl font-bold tracking-tighter sm:px-6 md:text-5xl">
            {post.title}
          </h1>
          {post.image ? (
            <Image
              src={post.image}
              className="mx-auto mt-4 mb-6 max-w-full bg-gray-400 sm:rounded-md lg:max-w-6xl dark:bg-slate-700"
              sizes="(max-width: 900px) 400px, 900px"
              alt={post.description}
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
        <div
          className="container mx-auto prose prose-lg mt-8 max-w-3xl px-6 sm:px-6 lg:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:tracking-tighter dark:prose-headings:text-slate-300 prose-a:text-primary-600 dark:prose-a:text-primary-400 prose-img:rounded-md prose-img:shadow-lg"
          dangerouslySetInnerHTML={{
            __html: md({
              html: true,
            }).render(post.content),
          }}
        />
      </article>
    </section>
  );
}
