// Crea un array de objetos que represente un inventario de productos. 
// Cada producto debe tener: id, nombre, precio, categoria, stock.
// Declara al menos 5 productos y muestra: - Todos los productos - 
// Total de productos en inventario - Valor total del inventario

const inventario = [
    { id: 1, nombre: "Manzana", precio: 0.50, categoria: "Fruta", stock: 100 },
    { id: 2, nombre: "Leche", precio: 1.20, categoria: "Lácteo", stock: 50 },
    { id: 3, nombre: "Pan", precio: 1.00, categoria: "Panadería", stock: 30 },
    { id: 4, nombre: "Huevos", precio: 2.50, categoria: "Lácteo", stock: 20 },
    { id: 5, nombre: "Arroz", precio: 0.80, categoria: "Cereal", stock: 200 }
];

console.log("Todos los productos en inventario:");
console.table(inventario);
console.log("Total de productos en inventario:", inventario.length);
const valorTotalInventario = inventario.reduce((total, producto) => total + (producto.precio * producto.stock), 0);
console.log("Valor total del inventario: $", valorTotalInventario.toFixed(2));
