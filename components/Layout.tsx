import {PropsWithChildren} from 'react'
import Menu from '@components/Menu'

export default function Layout({children}: PropsWithChildren<{}>) {
    return (
        <>
            {/* Back */}
            <div className='fixed inset-0'>
                <div className='mx-auto h-full w-full max-w-4xl bg-white ring-1 ring-slate-200' />
            </div>
            {/* Front */}
            <div className='relative mx-auto h-full w-full max-w-4xl'>
                <div className='w-full max-w-prose mx-auto flex flex-col gap-10 p-3 pb-10 sm:gap-20 sm:p-6 sm:pb-20'>
                    <header>
                        <Menu />
                    </header>
                    <main>{children}</main>
                </div>
            </div>
        </>
    )
}
