import { ImageResponse } from 'next/og';

import { allPosts } from 'content-collections';

import { SITE } from '~/config';

export const alt = 'Blog post';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export function generateImageMetadata() {
  return [{ id: 'og', size, alt, contentType }];
}

// En Next 16 params llega como Promise, también en los generadores de imagen.
export default async function PostOgImage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const post = allPosts.find((entry) => entry.slug === slug);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 80,
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)',
        color: 'white',
      }}
    >
      <div style={{ fontSize: 30, opacity: 0.75 }}>{SITE.name}</div>
      <div style={{ fontSize: 60, fontWeight: 700, lineHeight: 1.2 }}>{post?.title ?? 'Blog'}</div>
      <div style={{ fontSize: 26, opacity: 0.75 }}>
        {post ? `${post.publishDate} · ${post.readingTime} min read` : ''}
      </div>
    </div>,
    size,
  );
}
