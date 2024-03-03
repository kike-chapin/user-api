// index.js

const userController = require('./controllers/userController');
const {authenticateUser} = require('./service/authenticateUserService');

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Rutas protegidas con autenticación básica
app.use('/api/users', authenticateUser);


// Ruta para obtener todos los usuarios
app.get('/api/users', (req, res) => {
    userController.getUsers(req, res);
});

// Ruta para obtener un usuario por su ID
app.get('/api/users/:id', (req, res) => {
    userController.getUserById(req, res);
});

// Ruta para crear un nuevo usuario
app.post('/api/users', (req, res) => {
    userController.addUser(req, res);
});

// Ruta para actualizar un usuario
app.put('/api/users/:id', (req, res) => {
    userController.updateUser(req, res);
});

// Ruta para eliminar un usuario
app.delete('/api/users/:id', (req, res) => {
    userController.deleteUser(req, res);
});


// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto ${PORT}`);
});
