
const canciones = require('../models/canciones.models');
const ctrlCanciones = {};

ctrlCanciones.obtenerCanciones = async (req, res) => {
    try {
        const Canciones = await canciones.findAll({
            where: {
                estado: true
            }
        });

        return res.json(Canciones);
    } catch (error) {
        console.log('Error al obtener las canciones', error);
        return res.status(500).json({
            message: 'Error al obtener a las canciones'
        })
    }
}

ctrlCanciones.crearCancion = async (req, res) => {
    const { nombreCancion } = req.body; 
    const { idPlayList } = req.params;

    try {
        const nuevaCancion = await canciones.create({
            nombreCancion, 
            idPlayList
        });

        return res.status(201).json({ message: '¡La canción fue creada correctamente!' });
    } catch (error) {
        console.log('Error al crear la canción', error);
        return res.status(500).json({ message: 'Error al crear canción' });
    }
}


module.exports = ctrlCanciones;