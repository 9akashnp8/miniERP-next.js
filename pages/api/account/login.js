import { API_URL } from '../../../lib/config';
import  cookie from 'cookie';


export default async (req, res) => {
    if (req.method === 'POST') {
        const {
            username,
            password
        } = req.body;

        const body = JSON.stringify({
            username,
            password
        });

        try {
            const apiRes = await fetch(`${API_URL}/token/`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: body
            });

            const data = await apiRes.json();

            if (apiRes.status == 200) {
                res.setHeader('Set-Cookie', [
                    cookie.serialize(
                        'access', data.access, {
                            httpOnly: true,
                            secure: false, // move this to .env
                            maxAge: 60 * 30,
                            sameSite: 'strict',
                            path: '/api/'
                        }
                    ),
                    cookie.serialize(
                        'refresh', data.refresh, {
                            httpOnly: true,
                            secure: false, // move this to .env
                            maxAge: 60 * 60 * 24,
                            sameSite: 'strict',
                            path: '/api/'
                        }
                    )
                ])
                return res.status(200).json({success: 'Logged in Successfuly!'});
            } else {
                return res.status(apiRes.status).json({error: 'Authentication Failed!'})
            };

        } catch(error) {
            return res.status(500).json({error: `Something went wrong: ${error}`})
        }
    } else {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({'error': `Method ${req.method} not allowed!`})
    }
}