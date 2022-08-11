// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let vocal = '10', messageToPrint = '';


/* ------------------------------- Operaciones ------------------------------ */

if ((vocal === 'A') || (vocal === 'a')) {
    messageToPrint = `${vocal} es vocal.`;
} else {
    if ((vocal === 'E') || (vocal === 'e')) {
        messageToPrint = `${vocal} es vocal.`;
    } else {
        if ((vocal === 'I') || (vocal === 'i')) {
            messageToPrint = `${vocal} es vocal.`;
        } else {
            if ((vocal === 'O') || (vocal === 'o')) {
                messageToPrint = `${vocal} es vocal.`;
            } else {
                if ((vocal === 'U') || (vocal === 'u')) {
                    messageToPrint = `${vocal} es vocal.`;
                } else {
                    messageToPrint = `${vocal} no es vocal.`;                
                };            
            };        
        };    
    };
};


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrint);