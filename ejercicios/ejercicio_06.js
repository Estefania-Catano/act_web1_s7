// Crea un array inicial [1, 2, 3, 4, 5] y demuestra: 
// - push() y pop() - agregar y quitar del final 
// - shift() y unshift() - agregar y quitar del inicio 
// - splice() - insertar elementos en posición específica 
// - slice() - extraer porción sin modificar original

const numeros = [1, 2, 3, 4, 5];

numeros.push(6); 
console.log('Agregar',numeros);

const ultimo = numeros.pop();
console.log('Quitar', numeros);

numeros.unshift(0);
console.log('Agregar al inicio', numeros);

const primero = numeros.shift();
console.log('Quitar al inicio',numeros);

const eliminados = numeros.splice(2,2);
console.log('Elimina',numeros);

numeros.splice(2, 0, 10, 11);
console.log('Insertar en posición 2', numeros);

const porcion = numeros.slice(1, 4);
console.log('Porción extraída:', porcion);
console.log('Array original sin modificar:', numeros);