import Head from 'next/head'

export default function Error404() {
    return (
        <>
            <Head>
                <title>Not Found</title>
            </Head>

            <div className='h-full w-full flex flex-col items-center justify-center'>
                <p>Not Found</p>
                <p>¯\_(ツ)_/¯</p>
            </div>
        </>
    )
}
