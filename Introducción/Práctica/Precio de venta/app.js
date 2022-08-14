
/* -------------------------------- Variables ------------------------------- */
let saleValue = 0, salePrice = 0, IGV = 0;


/* --------------------------------- Entrada -------------------------------- */
saleValue = parseFloat(prompt('Ingrese el precio de venta'));


/* -------------------------------- Procesos -------------------------------- */
IGV = saleValue * 0.19;
salePrice = saleValue + IGV;


/* --------------------------------- Salidas -------------------------------- */
//Primer método de salida.
/*
document.write('IGV: ', IGV, '<br>');
document.write('Valor de venta: ', salePrice, '<br>');
document.write('Precio de venta: ', saleValue);
*/

//Segundo método de salida.
document.write(`IGV: ${IGV}<br>Valor de venta: ${salePrice}<br>Precio de venta: ${saleValue}`);