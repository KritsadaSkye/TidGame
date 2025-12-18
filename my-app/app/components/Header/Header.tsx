"use client"

import Image from 'next/image'
import Link from 'next/link'

export function Header() {
    return (
        <header className="fixed top-0 z-10 w-full bg-gradient-to-r from-purple-800 via-blue-600 to-blue-400 px-20 py-1 flex items-center justify-between sticky">

            <div className="w-[200px] flex-shrink-0">
                <Link href="/">
                    <Image
                        src="/image/TidGame-logo.png"
                        alt="TidGame Logo"
                        width={160}
                        height={80}
                        className="ml-20"
                        priority
                    />
                </Link>
            </div>

            <div className="flex-1 flex justify-center">
                <div className="relative w-[650px] bg-white rounded-full">
                    <Image
                        src="/image/search-logo.png"
                        alt="Search Logo"
                        width={25}
                        height={25}
                        className="absolute left-5 top-1/2 -translate-y-1/2"
                    />
                    <input
                        type="text"
                        placeholder="ค้นหาสินค้า"
                        className="w-full h-[40px] rounded-full pl-[55px] text-[16px] outline-none"
                    />
                </div>
            </div>

            <div className="w-[200px] flex gap-[15px] justify-start items-center pl-[60px]">
                <Link href="/">
                    <Image src="/image/user-logo.png" alt="User" width={32} height={32} />
                </Link>

                <Link href="/checkout">
                    <Image src="/image/cart-logo.png" alt="Cart" width={32} height={32} />
                </Link>

                <div className="relative">
                    <Image src="/image/notification-logo.png" alt="Notification" width={32} height={32} />
                    <div className="absolute -top-1 -right-1 text-xs bg-red-500 px-2 py-0.5 rounded-full text-white">
                        2
                    </div>
                </div>
            </div>
        </header>

    );
}