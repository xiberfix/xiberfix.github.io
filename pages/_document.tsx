import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='utf-8' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
            </Head>
            <body className='debug-screens'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
