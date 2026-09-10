import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, type Options as MdxOptions } from '@content-collections/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

// Shiki resalta en build con dos temas; el CSS elige según la clase de <html>.
const prettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark' },
  keepBackground: false,
};

const mdxOptions: MdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
};

const posts = defineCollection({
  name: 'posts',
  directory: 'src/content/blog',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    excerpt: z.string().optional(),
    // Se valida que sea una fecha parseable: un typo aquí rompe el build en vez
    // de colarse hasta el sitemap como Invalid Date.
    publishDate: z.string().refine((v) => !Number.isNaN(Date.parse(v)), {
      message: 'publishDate debe ser una fecha parseable, p. ej. "Nov 02 2022"',
    }),
    image: z.string().url().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    content: z.string(),
  }),
  transform: async (doc, ctx) => {
    const body = await compileMDX(ctx, doc, mdxOptions);
    const slug = doc._meta.path;
    // ~200 palabras por minuto es la convención habitual para tiempo de lectura.
    const readingTime = Math.max(1, Math.round(doc.content.split(/\s+/).length / 200));

    return { ...doc, slug, body, readingTime };
  },
});

const legal = defineCollection({
  name: 'legal',
  directory: 'src/content/legal',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    content: z.string(),
  }),
  transform: async (doc, ctx) => {
    const body = await compileMDX(ctx, doc, mdxOptions);
    return { ...doc, slug: doc._meta.path, body };
  },
});

export default defineConfig({
  content: [posts, legal],
});
