
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import Image from 'next/image'


export function HeaderRight() {
    const [me, setMe] = useState<boolean | null>(null);
    const route = useRouter();

    const fetchUserId = async () => {
        try {
            const response = await axios.get('/api/me');
            setMe(response.data.ok);
        } catch (error) {
            setMe(false);
        }
    };

    useEffect(() => {
        fetchUserId();
    }, []);

    const handleLogin = (page: string) => {
        if (!me) {
            route.push('/login');
            return;
        }
        route.push(page);
    }


    return (
        <>
            <div className="w-[200px] flex gap-[15px] justify-start items-center pl-[60px]">

                <Image onClick={() => handleLogin("/login")} src="/images/user-logo.png" alt="User" className="cursor-pointer" width={32} height={32} />

                <Image onClick={() => handleLogin("/checkout")} src="/images/cart-logo.png" alt="Cart" className="cursor-pointer" width={32} height={32} />

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