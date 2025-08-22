// Usando el inventario del ejercicio anterior, utiliza el método filter() para: - Mostrar 
// solo productos de la categoría "Electrónicos" - Mostrar productos con stock menor a 10 - 
// Mostrar productos con precio mayor a $500

const inventario = [
    { id: 1, nombre: "Manzana", precio: 0.50, categoria: "Fruta", stock: 100 },
    { id: 2, nombre: "Leche", precio: 1.20, categoria: "Lácteo", stock: 50 },
    { id: 3, nombre: "Pan", precio: 1.00, categoria: "Panadería", stock: 30 },
    { id: 4, nombre: "Huevos", precio: 2.50, categoria: "Lácteo", stock: 20 },
    { id: 5, nombre: "Arroz", precio: 0.80, categoria: "Cereal", stock: 200 }
];

// Filtrar productos de la categoría "Electrónicos"
const productosElectronicos = inventario.filter(producto => producto.categoria === "Electrónicos");
console.log("Productos de la categoría 'Electrónicos':", productosElectronicos);
// Filtrar productos con stock menor a 10
const productosStockBajo = inventario.filter(producto => producto.stock < 10);
console.log("Productos con stock menor a 10:", productosStockBajo);
// Filtrar productos con precio mayor a $500
const productosPrecioAlto = inventario.filter(producto => producto.precio > 500);
console.log("Productos con precio mayor a $500:", productosPrecioAlto);
