// Token handling in one place, so the login state can never outlive the JWT itself.
// The expiry is read from the token's own `exp` claim (set by `expiresIn` in server/index.js),
// so there is no second lifetime constant on the client that could drift out of sync.

const TOKEN_KEY = "token";

// Returns the expiry as a JS timestamp (ms), or null if the token is unreadable / has no expiry.
export const getTokenExpiry = (token: string): number | null => {
    try {
        const payload = token.split(".")[1];
        if (!payload) return null;
        const json = atob(payload.replace(/-/g, "+").replace(/_/g, "/")); // base64url -> base64
        const { exp } = JSON.parse(json);
        return typeof exp === "number" ? exp * 1000 : null;
    } catch {
        return null;
    }
};

export const clearToken = () => localStorage.removeItem(TOKEN_KEY);

export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);

// The only way to read the token: an expired (or malformed) one is dropped from
// localStorage and reported as absent, so the UI never shows logged-in controls for it.
export const getToken = (): string | null => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (!token) return null;

    const expiry = getTokenExpiry(token);
    if (expiry === null || expiry <= Date.now()) {
        clearToken();
        return null;
    }
    return token;
};

export const isLoggedIn = (): boolean => getToken() !== null;