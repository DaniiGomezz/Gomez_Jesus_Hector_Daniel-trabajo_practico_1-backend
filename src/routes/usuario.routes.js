const routerUsuarios = require('express').Router();

const {
    obtenerlosUsuarios,
    crearUsuario
} = require('../controllers/usuario.CRUD')

// Obtener todos los usuarios
routerUsuarios.get('/api/Usuarios', obtenerlosUsuarios);
 
// Crear un usuario
routerUsuarios.post('/api/Usuario', crearUsuario);

module.exports = routerUsuarios;