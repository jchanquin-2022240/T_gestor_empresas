
import bcryptjs from 'bcryptjs';
import Admin from '../admin/admin.model.js';

export const login = async (req, res) => {
    const {mail, password } = req.body;

    try {
        const admin = await Admin.findOne({mail});

        if (!admin) {
            return res.status(400).json({
                msg: "Incorrect credentials, Email does not exist in the database"
            });
        }

        const validatePassword = bcryptjs.compareSync(password, admin.password);
        if (!validatePassword) {
            return res.status(400).json({
                msg: "Password is incorrect"
            });
        }

        res.status(200).json({
            msg: 'successful login!!!',
            admin
        });

    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: "Comuniquese con el administrador"
        });
    }
}




