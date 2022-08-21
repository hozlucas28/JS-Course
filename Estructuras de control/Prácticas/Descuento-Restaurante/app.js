
/* -------------------------------- Variables ------------------------------- */
let tax = 0, payment = 0, discount = 0, totalToPay = 0, paymentWithDiscount = 0;
let dataDiscount = '';


/* --------------------------------- Entrada -------------------------------- */

payment = parseFloat(prompt('Ingrese el monto a pagar'));


/* ------------------------------- Operaciones ------------------------------ */

switch (true) {
    case (payment <= 100):
        dataDiscount = '10%';
        discount = payment * 0.1;
        break;
    
    case ((payment > 100) && (payment <= 200)):
        dataDiscount = '20%';
        discount = payment * 0.2;
        break;

    default:
        dataDiscount = '30%';
        discount = payment * 0.3;
        break;
};

paymentWithDiscount = payment - discount;

tax = paymentWithDiscount * 0.19;
totalToPay = paymentWithDiscount + tax;


/* --------------------------------- Salidas -------------------------------- */

document.write(`
    Consumo: ${payment}<br>
    Impuesto: ${tax} | 19%<br>
    Descuento: ${discount} | ${dataDiscount}<br>
    Total a pagar: ${totalToPay}<br>
    Consumo con descuento: ${paymentWithDiscount}
`);