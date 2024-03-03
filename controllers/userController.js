const {users, createUser, modifyUser, removeUser} = require('../data/data');

// Funciones para ejecutar las operaciones CRUD

// Obtener todos los usuarios
function getUsers(req, res) {
    res.json(users);
}

// Obtener un usuario por su ID
function getUserById(req, res) {
    const id = parseInt(req.params.id);
    const user = users.find(user => user.id === id);
    if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
    res.status(200).json(user);
}

// Crear un nuevo usuario
function addUser(req, res) {
    const { username, email, password } = req.body;
    if (!username || !email) {
        return res.status(400).json({ message: 'Falta el nombre o el email del usuario' });
    }
    const id = users.length + 1;
    const newUser = { id, username, email, password };
    createUser(newUser);
    res.status(201).json(newUser);
}

// Actualizar un usuario
function updateUser(req, res) {
    const id = parseInt(req.params.id);
    const { username, email, password } = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
    modifyUser(userIndex, username, email, password);
    res.status(201).json(users[userIndex]);
}

// Eliminar un usuario
function deleteUser(req, res) {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) return res.status(404).json({ message: 'Usuario no encontrado' });
    removeUser(userIndex);
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
}

module.exports = {
    getUsers,
    getUserById,
    addUser,
    updateUser,
    deleteUser
}