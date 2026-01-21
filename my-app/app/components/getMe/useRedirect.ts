import { useAuth } from './useAuth';
import { useRouter } from "next/navigation";

export default function useRedirect() {
    const { loggedIn } = useAuth();
    const route = useRouter();

    const redirect = ({ path }: { path: string }) => {
        if (loggedIn === null) return;
        route.push(loggedIn ? path : '/login');
    }

    return { redirect, loggedIn };
}