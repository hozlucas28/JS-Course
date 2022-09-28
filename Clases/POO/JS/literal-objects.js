
/* ---------------------------- Objetos Literales --------------------------- */

const person = {
    //Atributos.
    name : 'Lucas',
    surname : 'Hoz',
    age : 20,

    //Métodos.
    nombreCompleto() {
        return `Nombre: ${this.name}.\nApellido: ${this.surname}.`;
    },

    //Objeto anidado.
    address : {
        country : 'Argentina',
        department : 'Domicilio Particular',
        streetNumber : 3096
    }
};



/* --------------------------------- Salidas -------------------------------- */

console.log(person.nombreCompleto());
console.log(`\nPais: ${person.address.country}.\nDepartamento: ${person.address.department}.\nNúmero de calle: ${person.address.streetNumber}.`);
