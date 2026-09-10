# Contributing

## Getting started

```bash
npm ci
npm run dev
```

Node 24 is the target; `.nvmrc` pins it and `engines` sets the floor at 20.9.

## Before opening a pull request

CI runs these, so run them locally first:

```bash
npm run lint
npm run typecheck
npm run prettier:check
npm test
npm run build
```

`npm test` runs every Storybook story as a browser test, including automated
accessibility checks. A story that fails an axe rule fails the build.

Commits follow [Conventional Commits](https://www.conventionalcommits.org);
`commitlint` enforces it through a git hook, and `lint-staged` formats staged
files on commit.

## Adding content

Blog posts live in `src/content/blog` as `.mdx`. Frontmatter is validated by a
Zod schema in `content-collections.ts`, so a malformed post fails the build with
a specific error rather than rendering wrong.

## Adding a component

Add a story alongside it in `src/stories`. Stories are the test suite, so a
component without one is untested.
