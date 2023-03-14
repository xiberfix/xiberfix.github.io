import Head from 'next/head'

export default function Home() {
    return (<>
        <Head>
            <meta name='author' content='Michael Khryashchev'/>
            <meta name='description' content='Personal Site'/>

            <title>Michael Khryashchev</title>

            <meta property='og:title' content='Michael Khryashchev'/>
            <meta property='og:description' content='Personal Site'/>
            <meta property='og:type' content='website'/>
            <meta property='og:url' content='https://xiberfix.dev'/>
            <meta property='og:image' content=''/>
        </Head>

        <p>Hello!</p>
    </>)
}
