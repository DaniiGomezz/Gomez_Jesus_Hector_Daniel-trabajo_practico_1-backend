const { DataTypes, sequelize } = require('../db/dbconnect');
const canciones = require('./canciones.models');
const Usuarios = require('./usuario.models');

const playList = sequelize.define('playlist', {
    idPlayList: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombrePlaylist: {
        type: DataTypes.STRING(45),
        allowNull: false
    },

    id_usuario:{
        type: DataTypes.INTEGER,
        allowNull:true
    },
   
   
    estado: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
}, {
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    tableName: 'playlists'
})



playList.sync({ force: false })
.then(() => {
    console.log('la tabla playlist se creo correctamente ');
}).catch(err => {
    console.error('Error al crear tabla:', err);
});



playList.hasMany(canciones, { foreignKey: 'idPlayList' });
canciones.belongsTo(playList,{foreignKey: 'idPlayList'});

module.exports = playList;