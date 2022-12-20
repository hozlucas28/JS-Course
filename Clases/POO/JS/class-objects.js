/* --------------------------------- Clases --------------------------------- */

//Método nuevo.
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showData() {
		console.log(this.name, this.age);
	}
}

/* --------------------------- Procesos y Salidas --------------------------- */

const personOne = new Person('Lucas', 20);
const personTwo = new Person('Alex', 26);

personOne.showData();
personTwo.showData();
