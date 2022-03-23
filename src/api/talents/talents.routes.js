// Es el enrutamiento | EndPoints que nos da express
const TalentsRoutes = require('express').Router();

// Importación en ES5 - Métodos de controller
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./talents.controller');

// Traer todos los talentss en el endpoint /all
TalentsRoutes.get('/', getAll);
// Traer talents por id
TalentsRoutes.get('/:id', getOne);
// Crear un talents POST
TalentsRoutes.post('/', postOne);
// Modificar talents
TalentsRoutes.patch('/:id', patchOne);
// Delete talents
TalentsRoutes.delete('/:id', deleteOne);

module.exports = TalentsRoutes;