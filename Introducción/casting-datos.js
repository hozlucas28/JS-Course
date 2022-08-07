// cSpell:disable
/* --------------------------------------------------------------------------
    CONVERTIR TIPOS DE DATOS:
    • A texto => String(VARIABLE) ó toString(VARIABLE).
    • A números => Number(VARIABLE) ó parseInt(VARIABLE).
    • A decimal => Number(VARIABLE) ó parseFloat(VARIABLE).
-------------------------------------------------------------------------- */


/* ---------------------------- Texto --> Número ---------------------------- */
let stringToNumberVar = 'Hola Mundo';
console.log(typeof(stringToNumberVar));

//stringToNumberVar = Number(stringToNumberVar); //Primer método.
stringToNumberVar = parseInt(stringToNumberVar); //Segundo método.
console.log(typeof(stringToNumberVar));


/* ---------------------------- Número --> Texto ---------------------------- */
let numberToStringVar = 15;
console.log(typeof(numberToStringVar));

//numberToStringVar = String(numberToStringVar); //Primer método.
numberToStringVar = toString(numberToStringVar); //Segundo método.
console.log(typeof(numberToStringVar));


/* ---------------------------- Texto --> Decimal --------------------------- */
let stringToFloatVar = 'Hola Mundo';
console.log(typeof(stringToFloatVar));

//stringToFloatVar = Number(stringToFloatVar); //Primer método.
stringToFloatVar = parseFloat(stringToFloatVar); //Segundo método.
console.log(typeof(stringToFloatVar));