const routerUsuarios = require('express').Router();
const {validarEsquema, validacion} = require('../middlewares/usuario-validator');
const {
    obtenerlosUsuarios,
    crearUsuario
} = require('../controllers/usuario.CRUD')

// Obtener todos los usuarios
routerUsuarios.get('/api/Usuarios', obtenerlosUsuarios);
 
// Crear un usuario
routerUsuarios.post('/api/Usuario',  validacion, validarEsquema, crearUsuario);

module.exports = routerUsuarios;