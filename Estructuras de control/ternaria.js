// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let number = -12;
let vocal = 'h', messageToPrintOne = '', messageToPrintTwo = '';


/* ------------------------------- Operaciones ------------------------------ */

//Condición ternaria (simple).
messageToPrintOne = (number > 0) ? 'Es positivo.' : 'Es negativo.';

//Condición ternaria (compleja).
messageToPrintTwo = ((vocal === 'A') || (vocal === 'a')) ? `${vocal} es vocal.`
                    :((vocal === 'E') || (vocal === 'e')) ? `${vocal} es vocal.`
                    :((vocal === 'I') || (vocal === 'i')) ? `${vocal} es vocal.`
                    :((vocal === 'O') || (vocal === 'o')) ? `${vocal} es vocal.`
                    :((vocal === 'P') || (vocal === 'u')) ? `${vocal} es vocal.`
                    :`${vocal} no es vocal.`


/* --------------------------------- Salida --------------------------------- */

console.log(`${messageToPrintOne} | ${messageToPrintTwo}`);