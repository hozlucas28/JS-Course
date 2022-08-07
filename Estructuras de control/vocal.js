// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let vocalVar = '10', messageToPrintVar = '';


/* ------------------------------- Operaciones ------------------------------ */

if ((vocalVar === 'A') || (vocalVar === 'a')) {
    messageToPrintVar = `${vocalVar} es vocal.`;
} else {
    if ((vocalVar === 'E') || (vocalVar === 'e')) {
        messageToPrintVar = `${vocalVar} es vocal.`;
    } else {
        if ((vocalVar === 'I') || (vocalVar === 'i')) {
            messageToPrintVar = `${vocalVar} es vocal.`;
        } else {
            if ((vocalVar === 'O') || (vocalVar === 'o')) {
                messageToPrintVar = `${vocalVar} es vocal.`;
            } else {
                if ((vocalVar === 'U') || (vocalVar === 'u')) {
                    messageToPrintVar = `${vocalVar} es vocal.`;
                } else {
                    messageToPrintVar = `${vocalVar} no es vocal.`;                
                };            
            };        
        };    
    };
};


/* --------------------------------- Salida --------------------------------- */

console.log(messageToPrintVar);