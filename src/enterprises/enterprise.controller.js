import Enterprise from './enterprise.model.js';

export const enterprisePost = async (req,res) => {
    const {name, impact, experience, category, partner} = req.body;
    const enterprise = new Enterprise({name, impact, experience, category, partner});

    await enterprise.save();

    res.status(200).json({
        enterprise
    });
}