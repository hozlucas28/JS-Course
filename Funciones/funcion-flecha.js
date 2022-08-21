
//La función flecha sirve para reducir la sintaxis de las
//funciones que resutan simples, de corto tamaño. Siendo
//almacenadas en constantes.

/*
function add(a, b) {
    return (a + b);    
};
*/

const add = (a, b) => (a + b); //Función flecha.
const greet = (text) => {
    console.log(`Hola Mundo, mi nombre es ${text}`);
    return '';
};

console.log(add(4 , 65));
console.log(greet('Lucas'));