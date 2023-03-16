import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

// MDX plugin
const mdxConfig = {
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [],
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
