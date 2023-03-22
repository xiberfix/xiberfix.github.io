import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypePrism from '@mapbox/rehype-prism'

// MDX plugin
const mdxConfig = {
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm, remarkFrontmatter, [remarkMdxFrontmatter, {name: 'meta'}], remarkMath],
        rehypePlugins: [rehypeKatex, rehypePrism],
    },
}

const withMDX = nextMDX(mdxConfig)

// Next.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
}

const config = withMDX(nextConfig)
export default config
