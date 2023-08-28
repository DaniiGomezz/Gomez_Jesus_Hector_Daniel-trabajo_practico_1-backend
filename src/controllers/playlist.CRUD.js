const canciones = require('../models/canciones.models');
const playList = require('../models/playlist.models');
const Usuarios = require('../models/usuario.models');
const ctrlPlayList = {};

// Obtener todas las playlists
ctrlPlayList.obtenerPlayLists = async (req, res) => {
    const id_usuario=req.params.id_usuario;
    try {
        const playlists = await playList.findAll({
            where: {
                id_usuario: id_usuario
            },
            include:[
                {
                    model:canciones,
                    attributes:['nombreCancion']
                },
                {
                    model:Usuarios,
                    attributes:['usuario']
                }

            ]
        });

        return res.json(playlists);
    } catch (error) {
        console.log('Hubo un error al obtener las playlists', error);
        return res.status(500).json({
            message:'Hubo un problema para traer las playlists'
        })
    }
}

// Obtener una playlist a traves del identificador
ctrlPlayList.obtenerPlayList = async (req, res) => {
    try {
        const { idPlayList } = req.params;
        const playlist = await playList.findOne({
            where: {
                idPlayList
            },
            include:[
                {
                    model:canciones,
                    attributes:['nombreCancion']
                },
                {
                    model:Usuarios,
                    attributes:['usuario']
                }

            ]})
            
        return res.json(playlist);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:'hubo un error inesperado al traer la playlist'
        })
    }
}

// Crear una nueva playlist
ctrlPlayList.nuevaPlayList = async (req, res) => {
    const id_usuario = req.params.id_usuario; 
    const nombrePlaylist = req.body.nombrePlaylist; 

    console.log(id_usuario);

    try {
        const nuevaPlaylist = new playList({
            nombrePlaylist: nombrePlaylist,
            id_usuario: id_usuario
        });

        await nuevaPlaylist.save();

        return res.status(201).json({
            message: 'La playlist se creó exitosamente.'
        });
    } catch (error) {
        console.log('Error al crear la playlist', error);
        return res.status(500).json({
            message: "Hubo un problema al guardar la playlist."
        });
    }
}


// Actualizar una playlist 
ctrlPlayList.actualizarPlayList = async (req, res) => {
    try {
        const { idPlayList } = req.params;
        const playlist = await playList.findByPk(idPlayList);
        await playlist.update(req.body)
        return res.json({
            message:'La playlist se actualizo correctamente'
        });
    } catch (error) {
        console.log('Error al actualizar la playlist', error);
        return res.status(500).json({
            message :"Hubo un problema para actualizar la playlist",
        })
    }
}

// Eliminar una playlist de forma lógica
ctrlPlayList.eliminarPlayList = async (req, res) => {
    const { idPlayList } = req.params;
    try {
        const playlist = await playList.findByPk(idPlayList);
        await playlist.update({ estado: false });
        return res.json({
            message:"la playlist se elimnino correctamente"
        });
    } catch (error) {
        console.log('Error al eliminar la playlist', error);
        return res.status(500).json({
            message:"se prodeujo un problema al eliminar la playlist"
        })
    }
}

module.exports = ctrlPlayList;