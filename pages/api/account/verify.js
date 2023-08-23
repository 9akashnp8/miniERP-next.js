import { API_URL } from '../../../lib/config';
import cookie from 'cookie';

export default async(req, res) => {

    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false

        if (access === false) {
            return res.status(403).json({
                error: 'User forbbiden'
            });
        };

        const body = JSON.stringify({
            token: access
        });

        try {
            const apiRes = await fetch(`${API_URL}/token/verify/`, {
                method: 'POST',
                headers: {
                    'Allow': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: body
            });

            if (apiRes.status === 200) {
                return res.status(200).json({
                    success: 'Authenticated'
                });
            } else {
                return res.status(apiRes.status).json({
                    error: 'Failed to Authenticate'
                });
            }
        } catch(error) {
            return res.status(apiRes.status).json({
                error: `Something went wrong: ${error}`
            });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        return res.status(405).json({
            error: `Method ${req.method} Not Allowed!`
        })
    }
}