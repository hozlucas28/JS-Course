/* --------------------------------- Clases --------------------------------- */

class Person {
	//Atributos privados.
	#name;
	#age;

	constructor(name, age) {
		this.#name = name;
		this.#age = age;
		this.#privateMethod();
	}

	#privateMethod() {
		//Método privado.
		console.log('SOY UN MÉTODO PRIVADO.');
	}

	set setName(name) {
		//Modificar atributo privado.
		this.#name = name;
	}

	set setAge(age) {
		this.#age = age;
	}

	get getName() {
		//Devolver atributo privado.
		return this.#name;
	}

	get getAge() {
		return this.#age;
	}
}

/* --------------------------- Procesos y Salidas --------------------------- */

const personOne = new Person('Lucas', 20);
console.log(`Nombre: ${personOne.getName}.\nEdad: ${personOne.getAge}.`);

personOne.setName = 'Nahuel';
personOne.setAge = 26;
console.log(`Nombre: ${personOne.getName}.\nEdad: ${personOne.getAge}.`);
