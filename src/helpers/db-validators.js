import Admin from '../admin/admin.model.js';
import Enterprise from '../enterprises/enterprise.model.js';

export const existsEmail = async (mail = '') => {
    const existeEmail = await Admin.findOne({mail});
    if (existeEmail) {
        throw new Error(`The email ${mail} was already registered`);
    }
}

export const existsNameEnterprise = async ( name = '') => {
    const existsName = await Enterprise.findOne({name});
    if (existsName) {
        throw new Error(`The name ${name} already exists in the database`);
    }
}

export const existsEnterpriseById = async ( id = '') => {
    const existsId = await Enterprise.findById(id);
    if (!existsId) {
        throw new Error(`Id: ${id} does not exist in the database`);
    }
}