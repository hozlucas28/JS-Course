
/* -------------------------------- Variables ------------------------------- */
let firstNumber = 1, secondNumber = 1, quotient = 0, remainder = 0; //Define multiples variables.


/* -------------------------------- Entradas -------------------------------- */
firstNumber = Number(prompt('Ingrese un número entero')); //Recibe y convierte la primer entrada.
secondNumber = Number(prompt('Ingrese un número entero')); //Recibe y convierte la segunda entrada.


/* -------------------------------- Procesos -------------------------------- */
quotient = firstNumber / secondNumber;
remainder = firstNumber % secondNumber;


/* --------------------------------- Salidas -------------------------------- */
document.write('Resto: ', remainder, '<br>');
document.write('Cociente: ', quotient);