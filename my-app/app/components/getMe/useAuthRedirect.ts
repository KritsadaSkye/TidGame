import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';

export function useAuthRedirect() {
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);
    const route = useRouter();

    const fetchUserId = async () => {
        try {
            const response = await axios.get('/api/me');
            setLoggedIn(response.data.ok);
        } catch (error) {
            setLoggedIn(false);
        }
    };

    useEffect(() => {
        fetchUserId();
    }, []);

    const pushLoginPage = (page: string) => {
        if (!loggedIn) {
            route.push('/login');
            return;
        } else if (loggedIn) {
            route.push(page);
        }
    }

    return { pushLoginPage, loggedIn };
}