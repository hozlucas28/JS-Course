// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let numberVar = -12, vocalVar = 'h', messageToPrintOne = '', messageToPrintTwo = '';


/* ------------------------------- Operaciones ------------------------------ */

//Condición ternaria (simple).
messageToPrintOne = (numberVar > 0) ? 'Es positivo.' : 'Es negativo.';

//Condición ternaria (compleja).
messageToPrintTwo = ((vocalVar === 'A') || (vocalVar === 'a')) ? `${vocalVar} es vocal.`
                    :((vocalVar === 'E') || (vocalVar === 'e')) ? `${vocalVar} es vocal.`
                    :((vocalVar === 'I') || (vocalVar === 'i')) ? `${vocalVar} es vocal.`
                    :((vocalVar === 'O') || (vocalVar === 'o')) ? `${vocalVar} es vocal.`
                    :((vocalVar === 'P') || (vocalVar === 'u')) ? `${vocalVar} es vocal.`
                    :`${vocalVar} no es vocal.`


/* --------------------------------- Salida --------------------------------- */

console.log(`${messageToPrintOne} | ${messageToPrintTwo}`);