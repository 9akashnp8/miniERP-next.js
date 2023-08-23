import { API_URL } from "./config";

export async function refreshAccessToken(refresh) {
    const body = JSON.stringify({
        refresh
    });
    try {
        const apiRes = await fetch(`${API_URL}/token/refresh/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: body
        });

        const data = await apiRes.json();

        return data;

    } catch(error) {
        console.log(`Failed to Refresh token: ${error}`)
    }
}