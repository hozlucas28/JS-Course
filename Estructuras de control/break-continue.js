
/* -------------------------------- Variables ------------------------------- */
let i = 0, j = 0;


/* -------------------------- Operaciones y Salidas ------------------------- */

while (i < 10) {
    i++;
    if (i === 5) {
        console.log('Bucle while terminado.');
        break; //Detiene el bucle.
    };
    console.log(i);
};

while (j < 10) {
    j++; 
    if (j === 5) {
        console.log('Salto a la siguiente iteración.');
        continue; //Pasa a la siguiente iteración.
    };
    console.log(j);
};