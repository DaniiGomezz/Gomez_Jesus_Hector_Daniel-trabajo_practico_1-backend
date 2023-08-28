const routerPlayList = require('express').Router();

const {
    obtenerPlayLists,
    obtenerPlayList,
    nuevaPlayList,
    actualizarPlayList,
    eliminarPlayList
} = require('../controllers/playlist.CRUD');
const playList = require('../models/playlist.models');

routerPlayList.get('/api/PlayLists/:id_usuario', obtenerPlayLists);

routerPlayList.get('/api/PlayList/:idPlayList', obtenerPlayList);
 
routerPlayList.post('/api/PlayList/:id_usuario', nuevaPlayList);
 
routerPlayList.put('/api/PlayList/:idPlayList', actualizarPlayList);

routerPlayList.delete('/api/PlayList/:idPlayList', eliminarPlayList);

module.exports = routerPlayList;