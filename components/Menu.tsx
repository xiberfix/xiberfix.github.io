import Link from 'next/link'
import {useRouter} from 'next/router'
import clsx from 'clsx'
import {PropsWithChildren} from 'react'

export default function Menu() {
    return (
        <div className='flex flex-row gap-4 h-10'>
            {/* Start */}
            <div className='flex-1 flex flex-row items-center justify-start' />

            {/* Center */}
            <div
                className='
                    flex flex-row items-center justify-center px-3 rounded-full
                    shadow-lg shadow-slate-800/5 ring-1 ring-slate-900/5'
            >
                <ActiveLink href='/posts'>Posts</ActiveLink>
                <ActiveLink href='/projects'>Projects</ActiveLink>
                <ActiveLink href='/about'>About</ActiveLink>
            </div>

            {/* End */}
            <div className='flex-1 flex flex-row items-center justify-end' />
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
            className={clsx('text-sm px-3 py-2 hover:text-slate-700', active ? 'text-slate-700' : 'text-slate-400')}
        >
            {children}
        </Link>
    )
}
