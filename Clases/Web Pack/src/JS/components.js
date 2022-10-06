
/* ------------------------------ Importaciones ----------------------------- */

import webpackLogo from '../img/webpack-logo.png';



/* -------------------------------- Funciones ------------------------------- */

export const greet = (name) => {
    const h1 = document.createElement('h1');
    const img = document.createElement('img');

    img.src = webpackLogo;
    h1.innerText = `Hola ${name}`;
    document.body.append(h1, img);
};