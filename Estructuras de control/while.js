
/* -------------------------------- Variables ------------------------------- */
let i = 0, j = 0, z = 0, number = 2, counter = 0;
let text = 'JavaScript', students = ['Alex', 'Juan', 'Manuel', 'Alejandro'];



/* --------------------------- Procesos y Salidas --------------------------- */

while (counter <= 10) { //Verifica condición y ejecuta.
    console.log(`${number} x ${counter} = ${number * counter}`); //Primer salida.
    counter++;
};

while (i < text.length) {
    console.log(text[i]); //Segunda salida.
    i++;
};

while (j < students.length) {
    console.log(`hola ${students[j]}`); //Tercer salida.
    j++;
};

do { //Ejecuta y luego verifica.
    console.log(z); //Cuarta salida.
} while (z === 1);