const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB conectado a mml-website'))
  .catch((error) => console.log(error));

// Rutas
const contactosRouter = require('./routes/contactos');
app.use('/api/contactos', contactosRouter);

// Inicia servidor
app.listen(5000, () => console.log('Servidor en puerto 5000'));
