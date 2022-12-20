/* --------------------------------------------------------------------------
 * APUNTES:
 *          La función flecha sirve para reducir la sintaxis de las
 *          funciones que tienen un tamaño reducido. Siendo almacenadas
 *          en constantes.
 * 
 * 
 * IMPORTANTE:
 *             - XXX.
-------------------------------------------------------------------------- */

/* ------------------------- Constantes de Funciones ------------------------ */

const add = (a, b) => a + b; //Función flecha - Simple.

const greet = (text) => {
	//Función flecha - Compleja.
	console.log(`Hola Mundo, mi nombre es ${text}`);
	return '';
};

/* -------------------------------- Funciones ------------------------------- */

/*
function add(a, b) { //Mala práctica, se debe utilizar función flecha.
    return (a + b);    
};
*/

/* --------------------------------- Salidas -------------------------------- */

console.log(add(4, 65));
console.log(greet('Lucas'));
