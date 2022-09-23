
/* -------------------------------- Cuadrado -------------------------------- */

function calculateSquareArea() {
    let sideValue = Number(document.getElementById('square-side-input').value),
        result = document.getElementById('answer-result');
    
    sideValue *= 2;
    result.innerHTML = `El área del cuadrado es: ${String(sideValue)} cm<sup>2</sup>`;
};


function calculateSquarePerimeter() {
    let sideValue = Number(document.getElementById('square-side-input').value),
        result = document.getElementById('answer-result');
    
    sideValue *= 4;
    result.innerHTML = `El perímetro del cuadrado es: ${String(sideValue)} cm`;
};



/* -------------------------------- Triangulo ------------------------------- */

function calculateTriangleArea() {
    let operation;
    let baseValue = Number(document.getElementById('triangle-base-input').value),
        heightValue = Number(document.getElementById('triangle-height-input').value),
        result = document.getElementById('answer-result');

    operation = (baseValue * heightValue) / 2;
    result.innerHTML = `El área del triangulo es: ${String(operation)} cm<sup>2</sup>`;
};


function calculateTrianglePerimeter() {
    let operation;
    let firstSideValue = Number(document.getElementById('triangle-first-side-input').value),
        secondSideValue = Number(document.getElementById('triangle-second-side-input').value),
        thirdSideValue = Number(document.getElementById('triangle-third-side-input').value),
        result = document.getElementById('answer-result');
        
    operation = firstSideValue + secondSideValue + thirdSideValue;
    result.innerHTML = `El perímetro del triangulo es: ${String(operation)} cm`;
};



/* --------------------------------- Circulo -------------------------------- */

function calculateDiameterArea() {
    let operation;
    let radiusValue = Number(document.getElementById('circle-radius-input').value),
        result = document.getElementById('answer-result');

    operation = radiusValue * 2;
    result.innerHTML = `El diametro del circulo es: ${String(operation)} cm`;
};


function calculateCircleArea() {
    let operation;
    let radiusValue = Number(document.getElementById('circle-radius-input').value),
        result = document.getElementById('answer-result');

    operation = Math.pow(radiusValue, 2);
    result.innerHTML = `El área del circulo es: ${String(operation)}π cm<sup>2</sup>`;
};


function calculateCirclePerimeter() {
    let operation;
    let radiusValue = Number(document.getElementById('circle-radius-input').value),
        result = document.getElementById('answer-result');

    operation = radiusValue * 2;
    result.innerHTML = `El perímetro del circulo es: ${String(operation)}π cm`;
};