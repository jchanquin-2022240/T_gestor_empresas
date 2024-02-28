import jwt from 'jsonwebtoken';

export const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(
            payload,
            process.env.SECRETORPRIVATEKEY,
            {
                expiresIn: '1h'
            },
            (e, token) => {

                e ? (console.log(e), reject('Token could not be generated')) : resolve(token);
            }
        )
    })
}