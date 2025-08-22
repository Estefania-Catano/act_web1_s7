// Crea un array de usuarios con id, nombre, email, activo.
// Implementa búsquedas usando: 
// - find() para buscar usuario por email -
//  findIndex() para obtener posición de usuario por id 
// - some() para verificar si hay usuarios inactivos 
// - every() para verificar si todos tienen email válido (contiene @)

const usuarios = [
    { id: 1, nombre: 'Alice', email: 'alice.pino@cesde.net', activo: true },
    { id: 2, nombre: 'Bob', email: 'bob.pino@cesde.net', activo: false },
    { id: 3, nombre: 'Charlie', email: 'charlie.pino@cesde.net', activo: true },
    { id: 4, nombre: 'Diana', email: 'diana.p',activo: true },
    { id: 5, nombre: 'Eve', email: 'eve.seneiorcesde.net', activo: true }
];

// Buscar usuario por email
const buscarPorEmail = (email) => {
    return usuarios.find(usuario => usuario.email === email);
}   

console.log('buscarPorEmail:', buscarPorEmail("charlie.pino@cesde.net"));


// Obtener posición de usuario por id
const obtenerPosicionPorId = (id) => {
    return usuarios.findIndex(usuario => usuario.id === id);
}
console.log('obtenerPosicionPorId:', obtenerPosicionPorId(3));

// Verificar si hay usuarios inactivos
const hayUsuariosInactivos = () => {
    return usuarios.some(usuario => !usuario.activo);
}   
console.log('hayUsuariosInactivos:', hayUsuariosInactivos());

// Verificar si todos tienen email válido   
const todosTienenEmailValido = () => {
    return usuarios.every(usuario => usuario.email.includes('@'));
}
console.log('todosTienenEmailValido:', todosTienenEmailValido());

