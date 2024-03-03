// Datos en memoria (simulando una base de datos)
let users = [
    { id: 1, username: 'Juan', email: 'juan@example.com', password:'password1' },
    { id: 2, username: 'María', email: 'maria@example.com', password:'password2' }
];

function createUser(newUser) {
    users.push(newUser);
}

function modifyUser(index, username, email, password) {
    users[index] = { ...users[index], username, email, password };
}

function removeUser(index) {
    users.splice(index, 1);
}

module.exports = {
    users,
    createUser,
    modifyUser,
    removeUser
}