/* -------------------------------- Funciones ------------------------------- */

function greet(name) {
	return `Hola ${name}, desde la función saludar.`;
}

function add(a = null, b = null) {
	//Argumentos con valores por defecto.
	if (a === null || b === null) {
		console.log(`Error! debes enviar dos números a la función. Posiblemente hayas obviado un argumento.`);
		return ''; //Detiene la ejecución de la función.
	}
	return a + b;
}

/* --------------------------------- Salidas -------------------------------- */

console.log(add());
console.log(add(5, 3));
console.log(greet('Lucas'));
