import { useEffect, useState } from 'react';
import { getToken, getTokenExpiry, isLoggedIn } from '../auth';

// this useAuth() function reports whether a valid (non-expired) JWT is stored.
// It re-renders on its own the moment the token expires, so edit/delete/upload
// controls disappear without needing a page reload.
export function useAuth() {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);

    useEffect(() => {
        const token = getToken();
        if (!token) {
            setLoggedIn(false);
            return;
        }
        setLoggedIn(true);

        const expiry = getTokenExpiry(token);
        if (expiry === null) return;

        // setTimeout overflows above 2^31-1 ms, so cap the delay (it just re-checks earlier)
        const delay = Math.min(expiry - Date.now(), 2147483647);
        const timer = setTimeout(() => setLoggedIn(isLoggedIn()), Math.max(delay, 0));

        // keep tabs in sync when another tab logs in or out
        const onStorage = () => setLoggedIn(isLoggedIn());
        window.addEventListener('storage', onStorage);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('storage', onStorage);
        };
    }, [loggedIn]);

    return loggedIn;
}
