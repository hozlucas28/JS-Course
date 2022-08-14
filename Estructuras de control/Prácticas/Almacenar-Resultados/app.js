
/* -------------------------------- Variables ------------------------------- */
let number = 0, randomNumber = 0;
let pairNumbers = [], oddNumbers = [], numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];


/* --------------------------- Procesos y Salidas --------------------------- */

for (let i in numbers) {
    randomNumber = Math.round((Math.random()*100));
    number = randomNumber * numbers[i];

    if ((number % 2) === 0) {
        pairNumbers.push(number);
    } else {
        oddNumbers.push(number);
    };

    console.log(`${randomNumber} x ${numbers[i]} = ${number}`); //Primer salida.
};

//Segunda salida.
console.log(`
    - Números pares: ${pairNumbers}
    - Números impares: ${oddNumbers}
`);