const routerUsuarios = require('express').Router();

const {
    obtenerlosUsuarios,
    crearUsuario
} = require('../controllers/usuario.CRUD')

// Obtener todos los usuarios
routerUsuarios.get('/api/obtenerUsuarios', obtenerlosUsuarios);
 
// Crear un usuario
routerUsuarios.post('/api/crearUsuario', crearUsuario);

module.exports = routerUsuarios;