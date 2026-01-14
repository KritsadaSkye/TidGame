import Image from 'next/image'
import { useAuthRedirect } from '../getMe/useAuthRedirect';


export function HeaderRight() {
    const { pushLoginPage } = useAuthRedirect();

    return (
        <>
            <div className="w-[200px] flex gap-[15px] justify-start items-center pl-[60px]">

                <Image onClick={() => pushLoginPage("/login")} src="/images/user-logo.png" alt="User" className="cursor-pointer" width={32} height={32} />

                <Image onClick={() => pushLoginPage("/checkout")} src="/images/cart-logo.png" alt="Cart" className="cursor-pointer" width={32} height={32} />

                <div className="relative">
                    <Image src="/images/notification-logo.png" alt="Notification" width={32} height={32} />
                    <div className="absolute -top-1 -right-1 text-xs bg-red-500 px-2 py-0.5 rounded-full text-white">
                        2
                    </div>
                </div>
            </div>
        </>
    );
}