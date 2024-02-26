import bcryptjs from 'bcryptjs';
import Admin from './admin.model.js';

export const adminPost = async (req, res) => {
    const { name, mail, password} = req.body;
    const admin = new Admin({name, mail, password});

    const salt = bcryptjs.genSaltSync();
    admin.password = bcryptjs.hashSync(password, salt);

    await admin.save();

    res.status(200).json({
        admin
    });
}