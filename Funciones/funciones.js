
let firstOperation = 0;
let message = ``;

function greet(name) {
    //console.log(`Hola ${name}, desde la función saludar.`);
    return `Hola ${name}, desde la función saludar.`;
};

function add(a = null, b = null) { //Parametros con valores por defecto.
    if ((a === null) || (b === null)) {
        console.log(`Erro! debes enviar dos números a la función.`);
        return ''; //Termina la función.
    };
    return (a + b);
};

message = greet('Lucas');
firstOperation = add(5, 3);
secondOperation = add();


console.log(message);
console.log(firstOperation);
console.log(secondOperation);
