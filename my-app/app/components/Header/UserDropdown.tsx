"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useAuthRedirect } from '../getMe/useAuthRedirect';

type Props = {
    avatarSrc?: string
}

export default function UserDropdown({ avatarSrc = '/images/user-logo1.png' }: Props) {
    const { pushLoginPage }: boolean = useAuthRedirect();
    const [open, setOpen] = useState(false)
    const ref = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const onDoc = (e: MouseEvent) => {
            if (!ref.current) return
            if (!ref.current.contains(e.target as Node)) setOpen(false)
        }
        document.addEventListener('click', onDoc)
        return () => document.removeEventListener('click', onDoc)
    }, [])

    if (pushLoginPage) {
        return (
            <div className="relative" ref={ref}>
                <Image
                    onClick={() => setOpen(v => !v)}
                    src={avatarSrc}
                    alt="User"
                    className="cursor-pointer rounded-full"
                    width={35}
                    height={35}
                />

                {open && (
                    <div className="absolute flex flex-col items-center right-0 mt-2 bg-white rounded shadow-lg text-sm text-gray-800 z-50">
                        <Link href="/login" className="py-6 w-30 hover:bg-gray-100 flex justify-center"><span>Logout</span></Link>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className="relative" ref={ref}>
            <Image
                onClick={() => setOpen(v => !v)}
                src={avatarSrc}
                alt="User"
                className="cursor-pointer rounded-full"
                width={35}
                height={35}
            />

            {open && (
                <div className="absolute flex flex-col items-center right-0 mt-2 bg-white rounded shadow-lg text-sm text-gray-800 z-50">
                    <Link href="/login" className="py-6 w-30 hover:bg-gray-100 flex justify-center"><span>เข้าสู่ระบบ</span></Link>
                    <Link href="/register" className="py-6 w-30 hover:bg-gray-100 flex justify-center"><span>สมัครสมาชิก</span></Link>
                </div>
            )}
        </div>
    )
}
