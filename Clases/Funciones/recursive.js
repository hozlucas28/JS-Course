
/* --------------------------------------------------------------------------
 * APUNTES:
 *          Las funciones recursivas se ejecutan a si mismas varias veces,
 *          podríamos interpretarlas como un <for>. Esta aplicación me 
 *          devuelve el factorial de la variable.
 * 
 * 
 * IMPORTANTE:
 *             - XXX.
-------------------------------------------------------------------------- */

/* -------------------------------- Variables ------------------------------- */
let number = 3;



/* -------------------------------- Funciones ------------------------------- */

function factorial(number) { 
    console.log(number);
    if (number > 1) {
        number = number * factorial(number - 1);
    };

    return number;
};



/* --------------------------------- Salidas -------------------------------- */

console.log(factorial(number));
