
/* --------------------------------- Clases --------------------------------- */

//Método viejo.
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.showData = function() {
        console.log(`${this.name} ${this.age}`);
    };
}



/* --------------------------- Procesos y Salidas --------------------------- */

const personOne = new Person('Alex', 26);
const personTwo = new Person('Lucas', 20);


console.log(personOne.name);
console.log(personTwo.name);

personOne.showData();
personTwo.showData();