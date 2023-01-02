/* -------------------------- Variables y Entradas -------------------------- */

let quotient = 0,
	remainder = 0;
let firstNumber = Number(prompt('Ingrese un número entero')),
	secondNumber = Number(prompt('Ingrese un número entero'));

/* -------------------------------- Procesos -------------------------------- */

quotient = firstNumber / secondNumber;
remainder = firstNumber % secondNumber;

/* ----------------------------- Modificaciones ----------------------------- */

document.write('Cociente: ', quotient);
document.write('Resto: ', remainder, '<br>');
