// Crea un array de estudiantes con nombre, edad, notas (array de números).
// Usa map() para: 
// - Crear un nuevo array con solo los nombres 
// - Crear un array con el promedio de cada estudiante 
// - Agregar una propiedad estado ("Aprobado" si promedio >= 70, "Reprobado" si < 70)

const estudiantes = [
    { nombre: "Ana", edad: 20, notas: [50, 45, 40] },
    { nombre: "Luis", edad: 22, notas: [30, 25, 40] },
    { nombre: "Carlos", edad: 21, notas: [40, 45, 50] }, 
    { nombre: "Marta", edad: 23, notas: [20, 30, 15] },
    { nombre: "Sofía", edad: 19, notas: [45, 50, 40] }];

const nombres = estudiantes.map(estudiante => estudiante.nombre);
console.log("Nombres de los estudiantes:", nombres);

const promedios = estudiantes.map(estudiante => {
    const sumaNotas = estudiante.notas.reduce((total, nota) => total + nota, 0);
    const promedio = sumaNotas / estudiante.notas.length;
    const estado = promedio >= 70 ? "Aprobado" : "Reprobado";
    return { nombre: estudiante.nombre, promedio: promedio.toFixed(2), estado: estado };
});
console.log("Promedios de los estudiantes:", promedios);