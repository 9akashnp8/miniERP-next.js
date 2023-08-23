import cookie from 'cookie';
import { API_URL } from '../../../lib/config';

export default async(req, res) => {
    if (req.method === 'GET') {
        const cookies = cookie.parse(req.headers.cookie ?? '');
        const access = cookies.access ?? false;

        if (access == false) { 
            return res.status(401).json({
                error: 'Unauthorized!'
            });
        }

        try {
            const apiRes = await fetch(`${API_URL}/laptop/`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${access}`
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