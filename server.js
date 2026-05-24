const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos (imágenes, css, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal → redirige al dashboard
app.get('/', (req, res) => {
  res.redirect('/dashboard');
});

// Ruta: Dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'dashboard.html'));
});

// Ruta: Directorio de Pacientes
app.get('/patients', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'patients.html'));
});

// Ruta: Expedientes Médicos
app.get('/medical-records', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'medical-records.html'));
});

// Ruta: Agenda y Citas
app.get('/schedule', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pages', 'schedule.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`🐾 Paws & Cross corriendo en http://localhost:${PORT}`);
});
