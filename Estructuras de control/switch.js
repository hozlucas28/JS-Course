
/* -------------------------------- Variables ------------------------------- */
let vocal = 'e', messageToPrint = '';


/* ------------------------------- Operaciones ------------------------------ */

switch (vocal) {
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
        messageToPrint = `${vocal} es vocal.`;
        break;

    default:
        messageToPrint = `${vocal} no es vocal.`;
        break;
}


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrint);