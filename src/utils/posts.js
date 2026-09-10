import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';

const BLOG_DIR = join(process.cwd(), 'src/content/blog');

const load = () => {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = Promise.all(
    files
      .filter((filename) => filename.endsWith('.md'))
      .map(async (filename) => {
        const slug = filename.replace('.md', '');
        return await findPostBySlug(slug);
      }),
  );

  return posts;
};

let _posts;

/** */
export const fetchPosts = async () => {
  _posts = _posts || load();

  return await _posts;
};

/** */
export const findLatestPosts = async ({ count } = {}) => {
  const _count = count || 4;
  const posts = await fetchPosts();

  return posts ? posts.slice(_count * -1) : [];
};

/** */
export const findPostBySlug = async (slug) => {
  if (!slug) return null;

  const file = join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;

  const { data: frontmatter, content } = matter(fs.readFileSync(file, 'utf-8'));
  return {
    slug,
    ...frontmatter,
    content,
  };
};
