import Admin from '../admin/admin.model.js';

export const existsEmail = async (mail = '') => {
    const existeEmail = await Admin.findOne({mail});
    if (existeEmail) {
        throw new Error(`The email ${mail} was already registered`);
    }
}

/*export const existsEmpresaById = async ( id = '') => {
    const existeEmpresa = await Empresa.findById(id);
    if (!existeEmpresa) {
        throw new Error(`El ID: ${id} No existe`);
    }
}*/