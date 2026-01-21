import { use, useEffect } from 'react';
import { useAuth } from './useAuth';
import { useRouter } from "next/navigation";

export default function useRedirect() {
    const { loggedIn } = useAuth();
    const route = useRouter();
    useEffect(() => {
        if (loggedIn === false) {
            route.push('/login');
        }

    }, [loggedIn, route]);

    const redirect = ({ path }: { path: string }) => {
        route.push(path);
    }

    return { redirect, loggedIn };
}