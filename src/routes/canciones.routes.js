const routerCanciones = require('express').Router();

const {
    obtenerCanciones,
    crearCancion
} = require('../controllers/canciones.CRUD')

// Obtener todas las canciones
routerCanciones.get('/api/Canciones/:idPlayList', obtenerCanciones);
 
// Crear una cancion
routerCanciones.post('/api/Cancion/:idPlayList', crearCancion);

module.exports = routerCanciones;