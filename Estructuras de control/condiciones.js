// cSpell:disable
/* -------------------------------- Variables ------------------------------- */

let numberVar = -3, messageToPrintVar = '';


/* ------------------------------- Operaciones ------------------------------ */

if (numberVar !== 0) {
    if (numberVar > 0) {
        if ((numberVar % 2) === 0) {
            messageToPrintVar = `El número ${numberVar} es par positivo.`
        } else {
            messageToPrintVar = `El número ${numberVar} es impar positivo.`
        };
    } else {
        if ((numberVar % 2) === 0) {
            messageToPrintVar = `El número ${numberVar} es par negativo.`
        } else {
            messageToPrintVar = `El número ${numberVar} es impar negativo.`
        };
    }
} else {
    messageToPrintVar = `El número ${numberVar} es neutro.`
}


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrintVar);