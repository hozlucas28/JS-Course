// cSpell:disable
/* --------------------------------------------------------------------------
    CONVERTIR TIPOS DE DATOS:
    • A texto => String(VARIABLE) ó toString(VARIABLE).
    • A números => Number(VARIABLE) ó parseInt(VARIABLE).
    • A decimal => Number(VARIABLE) ó parseFloat(VARIABLE).
-------------------------------------------------------------------------- */


/* ---------------------------- Texto --> Número ---------------------------- */
let stringToNumber = 'Hola Mundo';
console.log(typeof(stringToNumber));

//stringToNumber = Number(stringToNumber); //Primer método.
stringToNumber = parseInt(stringToNumber); //Segundo método.
console.log(typeof(stringToNumber));


/* ---------------------------- Número --> Texto ---------------------------- */
let numberToString = 15;
console.log(typeof(numberToString));

//numberToString = String(numberToString); //Primer método.
numberToString = toString(numberToString); //Segundo método.
console.log(typeof(numberToString));


/* ---------------------------- Texto --> Decimal --------------------------- */
let stringToFloat = 'Hola Mundo';
console.log(typeof(stringToFloat));

//stringToFloat = Number(stringToFloat); //Primer método.
stringToFloat = parseFloat(stringToFloat); //Segundo método.
console.log(typeof(stringToFloat));