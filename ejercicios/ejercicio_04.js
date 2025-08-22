// Dado un array de ventas con producto, cantidad, precio, fecha:
// Usa reduce() para calcular: 
// - Total de ingresos 
// - Producto más vendido (por cantidad) 
// - Promedio de venta por transacción

const ventas = [
    { producto: "Laptop", cantidad: 2, precio: 1500, fecha: "2023-10-01" },
    { producto: "Teléfono", cantidad: 5, precio: 800, fecha : "2023-10-02" },
    { producto: "Tablet", cantidad: 3, precio: 600, fecha: "2023-10-03" },
    { producto: "Monitor", cantidad: 1, precio: 300, fecha: "2023-10-04" },
    { producto: "Teclado", cantidad: 4, precio: 50, fecha: "2023-10-05" }
];

const totalIngresos = ventas.reduce((total, venta) => total + (venta.cantidad * venta.precio), 0);
console.log("Total de ingresos: $", totalIngresos.toFixed(2));

const productoMasVendido = ventas.reduce((masVendido, venta) => {
    return (venta.cantidad > masVendido.cantidad) ? venta : masVendido;
}, ventas[0]);
console.log("Producto más vendido:", productoMasVendido.producto, "con", productoMasVendido.cantidad, "unidades");          

// Promedio de venta por transacción
const promedioVenta = totalIngresos / ventas.length;
console.log("Promedio de venta por transacción: $", promedioVenta.toFixed(2));