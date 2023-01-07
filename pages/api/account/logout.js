import cookie from 'cookie';

export default async (req, res) => {
    if (req.method == "POST") { // change erquality check to strict
        res.setHeader('Set-Cookie', [
            cookie.serialize(
                'access', '', {
                    httpOnly: true,
                    secure: false, // move this to .env
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/api/'
                }
            ),
            cookie.serialize(
                'refresh', '', {
                    httpOnly: true,
                    secure: false, // move this to .env
                    expires: new Date(0),
                    sameSite: 'strict',
                    path: '/api/'
                }
            )
        ]);

        return res.status(200).json({
            success: 'Logged Out Successfully!'
        })
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({
            error: `Method of ${req.method} Not Allowed!`
        })
    }
}