# Security Policy

## Supported versions

Only the latest release of this template receives fixes.

## Reporting a vulnerability

Report vulnerabilities privately through
[GitHub Security Advisories](https://github.com/arthelokyo/tailnext/security/advisories/new)
rather than opening a public issue.

## Known issues

`@content-collections/mdx` pulls in `mdx-bundler`, which depends on
`remark-mdx-frontmatter` and `toml`. That chain currently reports 3 high and 2
moderate advisories with no fix available upstream. They affect the build-time
content pipeline, not the served site. The alternative is a markdown-only
pipeline through `unified` and `rehype`, which audits clean but cannot embed
React components in content.

Run `npm audit` for the current state.
