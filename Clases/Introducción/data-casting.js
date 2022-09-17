
/* --------------------------------------------------------------------------
    CONVERTIR TIPOS DE DATOS:
    • A texto => String(VARIABLE) ó toString(VARIABLE).
    • A números => Number(VARIABLE) ó parseInt(VARIABLE).
    • A decimal => Number(VARIABLE) ó parseFloat(VARIABLE).
-------------------------------------------------------------------------- */



/* ---------------------------- Texto --> Número ---------------------------- */
let stringToNumber = 'Hola Mundo';
console.log(typeof(stringToNumber)); //Salida N°1.

//stringToNumber = Number(stringToNumber); //Primer método.
stringToNumber = parseInt(stringToNumber); //Segundo método.
console.log(typeof(stringToNumber)); //Salida N°2.



/* ---------------------------- Número --> Texto ---------------------------- */
let numberToString = 15;
console.log(typeof(numberToString)); //Salida N°1.

//numberToString = String(numberToString); //Primer método.
numberToString = toString(numberToString); //Segundo método.
console.log(typeof(numberToString)); //Salida N°2.



/* ---------------------------- Texto --> Decimal --------------------------- */
let stringToFloat = 'Hola Mundo';
console.log(typeof(stringToFloat)); //Salida N°1.

//stringToFloat = Number(stringToFloat); //Primer método.
stringToFloat = parseFloat(stringToFloat); //Segundo método.
console.log(typeof(stringToFloat)); //Salida N°2.
