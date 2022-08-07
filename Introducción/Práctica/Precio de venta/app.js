// cSpell:disable
/* -------------------------------- Variables ------------------------------- */
let saleValueVar = 0, salePriceVar = 0, IGVVar = 0;


/* --------------------------------- Entrada -------------------------------- */
saleValueVar = parseFloat(prompt('Ingrese el precio de venta'));


/* -------------------------------- Procesos -------------------------------- */
IGVVar = saleValueVar * 0.19;
salePriceVar = saleValueVar + IGVVar;


/* --------------------------------- Salidas -------------------------------- */
//Primer método de salida.
/*
document.write('IGV: ', IGVVar, '<br>');
document.write('Valor de venta: ', salePriceVar, '<br>');
document.write('Precio de venta: ', saleValueVar);
*/

//Segundo método de salida.
document.write(`IGV: ${IGVVar}<br>Valor de venta: ${salePriceVar}<br>Precio de venta: ${saleValueVar}`);