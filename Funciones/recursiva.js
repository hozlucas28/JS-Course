//Las funciones recursivas se ejecutan a si misma varias veces.

function factorial(number) {
    console.log(number);
    if (number > 1) {
        number = number * factorial(number - 1);
    };

    return number;
};

console.log(factorial(3));