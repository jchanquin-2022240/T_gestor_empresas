import { response } from 'express';
import Enterprise from './enterprise.model.js';
import ExcelJS from 'exceljs';

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

export const enterpriseGetByYears = async (req, res = response) => {
    const { limite, since, experience } = req.query;

    const query = {
        status: true,
        experience: Number(experience), // Asumiendo que `experience` es de tipo Number
    };

    const [total, enterprises] = await Promise.all([
        Enterprise.countDocuments(query),
        Enterprise.find(query)
            .skip(Number(since))
            .limit(Number(limite)),
    ]);

    res.status(200).json({
        total,
        enterprises,
    });
};

export const enterpriseGetByCategory = async (req, res = response) => {
    const { limite, since, category } = req.query;

    const query = {
        status: true,
    };

    // Agregar filtro por categoría si se proporciona
    if (category) {
        query.category = category;
    }

    const [total, enterprises] = await Promise.all([
        Enterprise.countDocuments(query),
        Enterprise.find(query)
            .skip(Number(since))
            .limit(Number(limite)),
    ]);

    res.status(200).json({
        total,
        enterprises,
    });
};

export const enterpriseGetExcelReport = async (req, res = response) => {
    try {
        const allEnterprises = await Enterprise.find(req.query);

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Enterprise');

        worksheet.columns = [
            { header: 'Name', key: 'name', width: 20 },
            { header: 'Impact', key: 'impact', width: 20 },
            { header: 'Experience', key: 'experience', width: 20 },
            { header: 'Category', key: 'category', width: 20 },
            { header: 'Partner', key: 'partner', width: 20 }
        ];

        allEnterprises.forEach(enterprise => worksheet.addRow({
            name: enterprise.name,
            impact: enterprise.impact,
            experience: enterprise.experience,
            category: enterprise.category,
            partner: enterprise.partner
        }));

        res.attachment('report_enterprise.xlsx');
        await workbook.xlsx.write(res);

        console.log('Report generated and sent successfully');
    } catch (e) {
        console.error('error when obtaining companies and generating report:', e);
        res.status(500).json({ e: 'Error server' });
    }
};
