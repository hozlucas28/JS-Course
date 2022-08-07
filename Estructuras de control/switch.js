// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let vocalVar = 'e', messageToPrint = '';


/* ------------------------------- Operaciones ------------------------------ */

switch (vocalVar) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        messageToPrint = `${vocalVar} es vocal.`;
        break;

    default:
        messageToPrint = `${vocalVar} no es vocal.`;
}


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrint);