const routerCanciones = require('express').Router();

const {
    obtenerCanciones,
    crearCancion
} = require('../controllers/canciones.CRUD')

// Obtener todas las canciones
routerCanciones.get('/api/obtenerCanciones/:idPlayList', obtenerCanciones);
 
// Crear una cancion
routerCanciones.post('/api/crearCancion/:idPlayList', crearCancion);

module.exports = routerCanciones;