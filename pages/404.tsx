import Head from 'next/head'
import Link from 'next/link'

export default function Error404() {
    return (<>
        <Head>
            <title>Not Found</title>
        </Head>

        <Link href='/'>Home</Link>
        <div>
            <p>Not Found</p>
            <p>¯\_(ツ)_/¯</p>
        </div>
    </>)
}
