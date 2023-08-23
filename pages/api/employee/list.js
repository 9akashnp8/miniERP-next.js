// Internal Imports
import { API_URL } from '../../../lib/config';
import { refreshAccessToken } from '../../../lib/utils';

// 3rd party tools and libraries
import cookie from 'cookie';

// API
export default async(req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;
        const refresh = cookies.refresh ?? false;

        if (access == false) {
            console.log('access token gone')
            const newTokens = refreshAccessToken(refresh);

            res.setHeader('Set-Cookie', [
                cookie.serialize(
                    'access', newTokens.access, {
                        httpOnly: true,
                        secure: false, // move this to .env
                        maxAge: 60,
                        sameSite: 'strict',
                        path: '/api/'
                    }
                ),
                cookie.serialize(
                    'refresh', newTokens.refresh, {
                        httpOnly: true,
                        secure: false, // move this to .env
                        maxAge: 60 * 60 * 24,
                        sameSite: 'strict',
                        path: '/api/'
                    }
                )
            ]);
        }

        try {
            const apiRes = await fetch(`${API_URL}/employee/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${cookies.access}`
                }
            });

            const data = await apiRes.json();

            if (apiRes.status === 200) {
                return res.status(200).json({
                    employees: data
                })
            } else {
                return res.status(apiRes.status).json({
                    error: data.error
                })
            }
        } catch(error) {
            return res.status(500).json({
                error: `Something went wrong: ${error}`
            })
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed` 
        });
    }
}