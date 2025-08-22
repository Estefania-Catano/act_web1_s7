// Crea arrays de: 
// - Números desordenados - ordena ascendente y descendente 
// - Nombres de personas - ordena alfabéticamente 
// - Objetos con propiedad edad - ordena por edad - Usa reverse() para invertir el orden

const numeros = [5, 2, 9, 1, 5, 6];

numeros.sort((a,b) => a - b);
console.log('Números ordenados ascendente:', numeros);
numeros.reverse();
console.log('Números ordenados descendente:', numeros);

const nombres = ['Carlos', 'Ana', 'Pedro', 'Beatriz'];
nombres.sort();
console.log('Nombres ordenados alfabéticamente:', nombres);
nombres.reverse();
console.log('Nombres ordenados alfabéticamente inverso:', nombres);



