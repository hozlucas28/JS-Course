/* -------------------------- Variables y Entradas -------------------------- */
let number = Number(prompt('Ingrese un número:'));

/* -------------------------------- Funciones ------------------------------- */

const isPrimeNumber = (number) => {
	let counter = 0;
	let numbers = [];

	for (let i = 1; i < number; i++) {
		numbers.push(i);
	}

	for (let i of numbers) {
		if (i === 1 || i === number) {
			continue;
		}
		if (number % i === 0) {
			counter++;
		}
	}

	return counter === 0;
};

/* --------------------------------- Salidas -------------------------------- */

isPrimeNumber(number)
	? document.write('El número ', number, ' es primo.')
	: document.write('El número ', number, ' no es primo.');
