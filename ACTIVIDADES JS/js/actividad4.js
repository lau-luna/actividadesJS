/*El usuario debe ingresar dos números y se mostrará el resultado a traves de carteles de: la suma, resta, multiplicacion
y division.*/

let num1 = parseInt(prompt('Ingrese el primer numero:'));
let num2 = parseInt(prompt('Ingrese el segundo numero:'));

let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = num1 / num2;


console.log(`La suma es: ${suma}`);
console.log(`La resta es: ${resta}`);
console.log(`La multiplicacion es: ${multiplicacion}`);
console.log(`La division es: ${division}`);