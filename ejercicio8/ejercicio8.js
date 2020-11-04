//inicio
//variables

let nombre;
let horasTrabajadas;
let valorHora;
let suma=0;

//leer datos

nombre = String(prompt('Ingresar Nombre Empleado '));
horasTrabajadas = Number(prompt('Ingresar Horas Trabajadas '));
valorHora = Number(prompt('Ingresar Valor Hora '));


//operacion

suma = valorHora * horasTrabajadas;

//imprimir


alert(" al empleado   " + nombre);
document.write(" al empleado " + nombre);
console.log(" al empleado " + nombre);

alert(" Se le debe cancelar por sus servicios un total de $  " + suma);
document.write(" Se le debe cancelar por sus servicios un total de $ " + suma);
console.log("Se le debe cancelar por sus servicios un total de $ " + suma);

// Final
