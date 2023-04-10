import Link from 'next/link'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {PropsWithChildren} from 'react'

export default function Menu() {
    return (
        <div className='flex h-10 flex-row gap-4'>
            {/* Start */}
            <div className='flex flex-1 flex-row items-center justify-start' />

            {/* Center */}
            <div
                className='
                    flex flex-row items-center justify-center px-3 rounded-full
                    shadow-lg ring-1
                    shadow-slate-800/10 ring-slate-900/10
                    dark:shadow-slate-200/10 dark:ring-slate-100/10'
            >
                <ActiveLink href='/posts'>Posts</ActiveLink>
                <ActiveLink href='/projects'>Projects</ActiveLink>
                <ActiveLink href='/about'>About</ActiveLink>
            </div>

            {/* End */}
            <div className='flex flex-1 flex-row items-center justify-end' />
        </div>
    )
}

interface ActiveLinkProps {
    href: string
}

function ActiveLink({href, children}: PropsWithChildren<ActiveLinkProps>) {
    const router = useRouter()
    const active = router.pathname.startsWith(href)

    return (
        <Link
            href={href}
            className={clsx(
                'text-sm px-3 py-2 hover:text-slate-700 hover:dark:text-slate-50',
                active ? 'text-slate-700 dark:text-slate-50' : 'text-slate-400 dark:text-slate-400',
            )}
        >
            {children}
        </Link>
    )
}
