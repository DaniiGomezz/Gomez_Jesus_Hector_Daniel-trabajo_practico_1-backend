const routerPlayList = require('express').Router();

const {
    obtenerPlayLists,
    obtenerPlayList,
    nuevaPlayList,
    actualizarPlayList,
    eliminarPlayList
} = require('../controllers/playlist.CRUD');
const playList = require('../models/playlist.models');

routerPlayList.get('/api/obtenerPlayLists/:id_usuario', obtenerPlayLists);

routerPlayList.get('/api/obtenerPlayList/:idPlayList', obtenerPlayList);
 
routerPlayList.post('/api/nuevaPlayList/:id_usuario', nuevaPlayList);
 
routerPlayList.put('/api/actualizarPlayList/:idPlayList', actualizarPlayList);

routerPlayList.delete('/api/eliminarPlayList/:idPlayList', eliminarPlayList);

module.exports = routerPlayList;