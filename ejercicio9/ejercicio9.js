//inicio
//variables

var producto;
let valorProducto;
let iva
let suma=0;

//leer datos

producto = String(prompt('Ingresar Producto '));
valorProducto = Number(prompt('Ingresar Valor del producto '));
iva = Number(prompt('Ingresar Valor del iva '));
//operacion

iva = valorProducto*.19;
suma = valorProducto + iva;

//imprimir


alert(" El valor del producto es   " + valorProducto);
document.write(" El valor del producto es " + valorProducto);
console.log(" El valor del producto es " + valorProducto);

alert(" Valor Total mas iva  " + suma);
document.write(" Valor Total mas iva " + suma);
console.log(" Valor Total mas iva " + suma);

// Final
