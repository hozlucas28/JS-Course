// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let firstNumberVar = 1, secondNumberVar = 1, quotientVar = 0, remainderVar = 0; //Define multiples variables.


/* -------------------------------- Entradas -------------------------------- */
firstNumberVar = Number(prompt('Ingrese un número entero')); //Recibe y convierte la primer entrada.
secondNumberVar = Number(prompt('Ingrese un número entero')); //Recibe y convierte la segunda entrada.


/* -------------------------------- Procesos -------------------------------- */
quotientVar = firstNumberVar / secondNumberVar;
remainderVar = firstNumberVar % secondNumberVar;


/* --------------------------------- Salidas -------------------------------- */
document.write('Resto: ', remainderVar, '<br>');
document.write('Cociente: ', quotientVar);