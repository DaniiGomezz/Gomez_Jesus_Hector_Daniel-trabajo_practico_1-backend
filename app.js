// Importamos las dependencias 
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
const Usuarios = require('./src/models/usuario.models');
const playList = require('./src/models/playlist.models');
const canciones = require('./src/models/canciones.models');


const { conexionBaseDatos } = require('./src/db/dbconnect');
conexionBaseDatos();

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}`))
