
/* --------------------------------- Clases --------------------------------- */

class Math {
    static #PI = 3.141592;

    static get getPI() {
        return this.#PI;
    };

    static sum(a, b) {
        return a + b;
    };
};



/* --------------------------------- Salidas -------------------------------- */

console.log(Math.getPI);
console.log(Math.sum(10, 3));