//inicio
//variables

let GradosCentigrados;
let GradosFahrenheit;
let suma=0;

//leer datos

GradosCentigrados = Number(prompt('Ingresar Grados Centigrados '));
GradosFahrenheit = 1.8;


//operacion

suma = GradosCentigrados * GradosFahrenheit + 32;

//imprimir


alert(" La Temperatura en Grados Fahrenheit es   " + suma);
document.write(" La Temperatura en Grados Fahrenheit es  " + suma);
console.log(" La Temperatura en Grados Fahrenheit es " + suma);

// Final
