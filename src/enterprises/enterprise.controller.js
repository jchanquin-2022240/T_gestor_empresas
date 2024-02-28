import { response } from 'express';
import Enterprise from './enterprise.model.js';

//agregar empresas
export const enterprisePost = async (req,res) => {
    const {name, impact, experience, category, partner} = req.body;
    const enterprise = new Enterprise({name, impact, experience, category, partner});

    await enterprise.save();

    res.status(200).json({
        enterprise
    });
}

export const enterpriseGet = async (req,res = response) => {
    const {limite, since, sortOrder} = req.query;
    const query = {status: true};


    /*if (yearsOfExperience) {
        query.yearsOfExperience = { $gte: Number(yearsOfExperience) };
    }*/

    let sortOptions = {};
    if (sortOrder === 'az' || sortOrder === 'za') {
        // Agregar opciones de clasificación según el parámetro sortOrder
        sortOptions.name = sortOrder === 'az' ? 1 : -1;
    }

    const [total, enterprise] = await Promise.all([
        Enterprise.countDocuments(query),
        Enterprise.find(query)
        .sort(sortOptions)
        .skip(Number(since))
        .limit(Number(limite))
    ]);

    res.status(200).json({
        total,
        enterprise
    })
}

