// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let number = -3;
let messageToPrint = '';


/* ------------------------------- Operaciones ------------------------------ */

if (number !== 0) {
    if (number > 0) {
        if ((number % 2) === 0) {
            messageToPrint = `El número ${number} es par positivo.`
        } else {
            messageToPrint = `El número ${number} es impar positivo.`
        };
    } else {
        if ((number % 2) === 0) {
            messageToPrint = `El número ${number} es par negativo.`
        } else {
            messageToPrint = `El número ${number} es impar negativo.`
        };
    }
} else {
    messageToPrint = `El número ${number} es neutro.`
}


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrint);