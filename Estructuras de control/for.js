// cSpell:disable
/* -------------------------------- Variable -------------------------------- */
let numberVar = 5, messageToPrintOne = [], messageToPrintTwo = ['Juan', 'Manuel', 'Hernesto', 'Marcos'];


/* ------------------------------- Operaciones ------------------------------ */

for (i = 0; i <= 10; i++) {
    messageToPrintOne.push(i);
};


/* --------------------------------- Salidas -------------------------------- */

for (i of messageToPrintOne) {
    console.log(messageToPrintOne[i]);
};

for (i of messageToPrintTwo) {
    console.log(`Hola ${i}.`);
};