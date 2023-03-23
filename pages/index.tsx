import Head from 'next/head'
import Layout from '@components/Layout'

export default function Home() {
    return (
        <>
            <Head>
                <title>xiberfix.dev</title>
            </Head>
            <Layout>
                <p>Hello!</p>
            </Layout>
        </>
    )
}
