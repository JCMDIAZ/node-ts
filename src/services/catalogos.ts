import CatalogosModel from '../models/mysql/catalogos';

const getCatalogos = async () => {
    const resposeCatalogos = await CatalogosModel.findAll();
    return resposeCatalogos;
}

const getCatalogosByGrupo = async (grupo: string) => {
    const resposeCatalogos = await CatalogosModel.findAll({
        where: {
            grupo: grupo,
        },
    });
    return resposeCatalogos;
}

export { getCatalogos, getCatalogosByGrupo };