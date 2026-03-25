const express = require('express');
const path = require('path'); // 👈 IMPORTANTE
const app = express();

// Ruta principal (solo UNA)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Servidor
app.listen(3000, () => {
  console.log('Servidor interno corriendo en el puerto 3000');
});