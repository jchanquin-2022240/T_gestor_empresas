import jwt from 'jsonwebtoken';
import Admin from '../admin/admin.model';

export const validarJWT = async (req,res, next) => {
    const token = req.header("new-token");

    if (!token) {
        return res.status(401).json({
            msg: "No request token"
        });
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        const admin = await Admin.findById(uid);
        if (!admin) {
            return res.status(400).json({
                msg: "Admin does not exist in the database "
            });
        }

        if (!admin.status) {
            return res.status(401).json({
                msg: 'Invalid token - user with status:false'
            });
        }

        req.admin = admin;
        next();
    } catch (e) {
        console.log(e),
        res.status(400).json({
            msg: "Invalid Token"
        });
    }

}