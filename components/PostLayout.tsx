import Head from 'next/head'
import {PropsWithChildren} from 'react'
import Layout from '@components/Layout'

interface PostMeta {
    title: string
    date: string
}

interface PostLayoutProps {
    meta: PostMeta
}

export default function PostLayout({meta, children}: PropsWithChildren<PostLayoutProps>) {
    const {title = '', date = ''} = meta

    return (
        <>
            <Head>
                <title>{title} | xiberfix.dev</title>
            </Head>
            <Layout>
                <h1 className='text-4xl font-bold text-slate-800 sm:text-5xl'>{title}</h1>
                <article className='my-10 prose prose-sm sm:prose-base sm:my-16'>{children}</article>
                <time className='text-sm text-slate-400 sm:text-base'>{DATE_FORMAT.format(new Date(date))}</time>
            </Layout>
        </>
    )
}

const DATE_FORMAT = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
})
