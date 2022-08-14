
/* -------------------------------- Variable -------------------------------- */
let messageToPrintOne = [], messageToPrintTwo = ['Juan', 'Manuel', 'Hernesto', 'Marcos'];


/* ------------------------------- Operaciones ------------------------------ */

for (let i = 0; i <= 10; i++) {
    messageToPrintOne.push(i);
};


/* --------------------------------- Salidas -------------------------------- */

for (let i of messageToPrintOne) {
    console.log(messageToPrintOne[i]);
};

for (let i of messageToPrintTwo) {
    console.log(`Hola ${i}.`);
};