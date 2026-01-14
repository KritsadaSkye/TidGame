"use client"

import Image from 'next/image'
import { useAuthRedirect } from '../getMe/useAuthRedirect';

import UserDropdown from './UserDropdown'

export function HeaderRight() {
    const { pushLoginPage } = useAuthRedirect();

    return (
        <div className="w-[200px] flex gap-[15px] justify-start items-center pl-[60px]">
            <UserDropdown />

            <Image onClick={() => pushLoginPage("/checkout")} src="/images/cart-logo1.png" alt="Cart" className="cursor-pointer" width={35} height={35} />

            <div className="relative">
                <Image src="/images/notification-logo.png" alt="Notification" width={32} height={32} />
                <div className="absolute -top-1 -right-1 text-xs bg-red-500 px-2 py-0.5 rounded-full text-white">2</div>
            </div>
        </div>
    )
}