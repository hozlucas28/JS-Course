/* -------------------------- Variables y Entradas -------------------------- */
let addition = 0;
let firstNumber = prompt('Ingrese un número'); //<prompt(STRING)> obtiene el valor ingresado, mediante la alerta.
let secondNumber = prompt('Ingrese un número');

/* -------------------------------- Procesos -------------------------------- */

//Convertir "String" a "Number".
firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

addition = firstNumber + secondNumber;

/* ----------------------------- Modificaciones ----------------------------- */

document.write('La suma es: ', addition);
