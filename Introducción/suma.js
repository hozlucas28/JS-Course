// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let firstNumberVar = prompt('Ingrese un número'); //Obtiene el valor ingresado en la página, mediante una alerta.
let secondNumberVar = prompt('Ingrese un número');

//Convertir "String" a "Number".
firstNumberVar = Number(firstNumberVar);
secondNumberVar = Number(secondNumberVar);


/* ------------------------------- Operaciones ------------------------------ */
let sumVar = firstNumberVar + secondNumberVar;


/* --------------------------------- Salidas -------------------------------- */
document.write('La suma es: ', sumVar);