/* --------------------------------- Clases --------------------------------- */

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	showData() {
		console.log(`Nombre: ${this.name}.\nEdad: ${this.age}.`);
	}
}

//Clase heredada.
class Employee extends Person {
	constructor(name, age, salary) {
		super(name, age); //Hereda el constructor de la clase padre.
		this.salary = salary;
	}

	showData() {
		super.showData(); //Hereda el método de la clase padre.
		console.log(`Sueldo: ${this.salary}.`);
	}
}

/* --------------------------- Procesos y Salidas --------------------------- */

const employeeOne = new Employee('Lucas', 20, 2250);
console.log(employeeOne);
employeeOne.showData();
