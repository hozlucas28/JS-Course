
/* -------------------------------- Variables ------------------------------- */
let operation = 0;


/* -------------------------------- Funciones ------------------------------- */

function add(...arguments) { //El parametro indica 'infinitos' envios.
    let add = 0;

    for (let i of arguments) {
        add += i;
    };

    return add;
};


/* ------------------------------- Operaciones ------------------------------ */

operation = add(40, 50, 70, 82, 90);


/* --------------------------------- Salidas -------------------------------- */

console.log(`La suma es: ${operation}`);
