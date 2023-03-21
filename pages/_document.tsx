import {Head, Html, Main, NextScript} from 'next/document'
import clsx from 'clsx'
import {IS_DEVELOPMENT} from '@common/constants'

export default function Document() {
    return (
        <Html lang='en'>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <body className={clsx(IS_DEVELOPMENT && 'debug-screens')}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
