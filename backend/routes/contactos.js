const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

// Ruta POST para añadir contacto
router.post('/', async (req, res) => {
  try {
    const { nombre, telefono, email } = req.body;
    const nuevoContacto = new Contacto({ nombre, telefono, email });
    await nuevoContacto.save();
    res.status(201).json({ mensaje: 'Contacto guardado exitosamente', contacto: nuevoContacto });
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al guardar contacto', error });
  }
});

module.exports = router;
