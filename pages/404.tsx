import Head from 'next/head'

export default function Error404() {
    return (<>
        <Head>
            <title>Not Found</title>
        </Head>

        <div className='flex h-full w-full flex-col items-center justify-center'>
            <p>Not Found</p>
            <p>¯\_(ツ)_/¯</p>
        </div>
    </>)
}
