import {Head, Html, Main, NextScript} from 'next/document'
import clsx from 'clsx'
import {IS_DEVELOPMENT} from '@common/constants'

export default function Document() {
    return (
        <Html lang='en' className='h-full'>
            <Head>
                <meta charSet='utf-8' />
            </Head>
            <body className={clsx('h-full bg-slate-50 dark:bg-black', IS_DEVELOPMENT && 'debug-screens')}>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}
