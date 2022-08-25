
/* --------------------------------------------------------------------------
 * APUNTES:
 *          Las funciones recursivas se ejecutan a si mismas varias veces,
 *          podríamos interpretarlas como un <for>. Esta aplicación me 
 *          devuelve el factorial de la variable.
 *
 *            - <Array.toUpperCase()>: transforma a mayúsculas el String.
 *            - <Array.toLowerCase()>: transforma a minúsculas el String.
 *            - <Array.replace(BUSCAR LETRA, REMPLAZO)>: modifica la letra encontrada.
 *
 *            - <Array.reverse()>: invierte el orden de los elementos del Array,
 *                                 es decir, final --> principio.
 *
 *            - <Array.join(' ')>: convierte el Array en un String, según el argumento,
 *                                 con espacios entre los campos.
 *
 *            - <Array.split('PARAMETRO')>: convierte y separa las letras/palabras
 *                                          (según el parámetro) en campos de un Array.
 * 
 * 
 * IMPORTANTE:
 *             - XXX.
-------------------------------------------------------------------------- */



/* -------------------------------- Variables ------------------------------- */
let firstString = 'Java-Script', secondString = 'Hola Mundo de Java-Script';



/* --------------------------- Procesos y Salidas --------------------------- */

//Primer String.
firstString = firstString.replace('S', 's');
console.log(firstString); //Salida N°1.

firstString = firstString.toUpperCase();
console.log(firstString); //Salida N°2.

firstString = firstString.toLowerCase();
console.log(firstString); //Salida N°3.

firstString = firstString.split('');
console.log(firstString); //Salida N°4.


//Segundo String.
secondString = secondString.split(' ');
console.log(secondString); //Salida N°5.

secondString = secondString.reverse();
console.log(secondString); //Salida N°6.

secondString = secondString.join(' ');
console.log(secondString); //Salida N°8.
