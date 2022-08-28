
/* -------------------------- Variables y Entradas -------------------------- */
let word = prompt('Ingrese una palabra:');



/* -------------------------------- Funciones ------------------------------- */

const isPalindrome = (word) => {
    let invertedWord = '';

    word = word.toLowerCase().replace(' ', '');
    invertedWord = word.split('').reverse().join('');
    return (word === invertedWord);
};



/* --------------------------------- Salidas -------------------------------- */

isPalindrome(word)? document.write('La palabra ', word, ' es palíndroma.') : document.write('La palabra ', word, ' no es palíndroma.');