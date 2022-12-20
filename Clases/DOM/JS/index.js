/* --------------------------------------------------------------------------
 * APUNTES:
 * 		   - <document>: selecciona todos los elementos del documento html.
 *         - <document.querySelector('XXX')>: selecciona el primer elemento encontrado en el documento.
 *         - <document.querySelectorAll('XXX')>: selecciona todos los elementos del documento.
 *         - <document.createElement('XXX')>: crea la etiqueta HTML.
 *         - <document.getElementById('XXX')>: selecciona al elemento que posee dicha ID.
 *         - <document.getElementsByClassName('XXX')>: selecciona los elementos con dicha clase.
 *         - <.innerText>: indica que se insertara un texto sin etiquetas HTML.
 *         - <.innerHTML>: indica que se insertara un texto con etiquetas HTML.
 *         - <.append(XXX)>: inserta un elemento dentro del apuntado.
 *         - <.classList.add('XXX')>: le asigna una clase al apuntado.
 *
 *
 * IMPORTANTE:
 *  			  - El <.> después de los <querySelector> indica el atributo
 *                  a modificar, excluyendo a los mencionados en los apuntes.
 *                - El <#> al comienzo de la etiqueta en un <document.querySelector>
 *                  indica que se trata de una ID.
 *                - El <.> al comienzo de la etiqueta en un <document.querySelector>
 *                  indica que se trata de una clase.
-------------------------------------------------------------------------- */

document; //Selecciona todos los elementos del documento.
document.querySelector('html').lang = 'en'; //Modifica dicho atributo de la etiqueta <html>.
document.querySelector('title').innerText = 'DOM desde JavaScript'; //Modifica el valor de <title> (sin HTML).
document.querySelector('header').innerHTML = '<h1>Titulo H1 desde JavaScript</h1>'; //Modifica el valor de <title> (con HTML).

/* -------------------------------- Variables ------------------------------- */
let allDivs = document.querySelectorAll('div');
let firstDiv = document.querySelector('div');

let boxes = document.querySelector('.boxes'); //Primer método.
document.getElementsByClassName('.boxes'); //Segundo método.

let firstBox = document.querySelector('#box-1'); //Primer método.
document.getElementById('box-1'); //Segundo método.

let button = document.createElement('button');
let secondBox = document.getElementById('box-2');

/* -------------------------------- Procesos -------------------------------- */

button.innerText = 'Botón 01';

button.classList.add('button');
secondBox.append(button);
