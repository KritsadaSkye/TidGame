import axios from "axios";
import { useEffect, useState } from 'react';

export function useAuth() {
    const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

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

    return { loggedIn };
}