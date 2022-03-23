// Es el enrutamiento | EndPoints que nos da express
const GenerationRoutes = require('express').Router();

// Importación en ES5 - Métodos de controller
const {
    getAll,
    getOne,
    postOne,
    patchOne,
    deleteOne
} = require('./generations.controller');

// Traer todos los generations en el endpoint /all
GenerationRoutes.get('/', getAll);
// Traer generation por id
GenerationRoutes.get('/:id', getOne);
// Crear un generation POST
GenerationRoutes.post('/', postOne);
// Modificar generation
GenerationRoutes.patch('/:id', patchOne);
// Delete generation
GenerationRoutes.delete('/:id', deleteOne);

module.exports = GenerationRoutes;