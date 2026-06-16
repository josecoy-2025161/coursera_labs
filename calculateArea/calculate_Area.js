let length;
let width;

function calculateArea() {
 length = parseFloat(document.getElementById('length').value);
 width = parseFloat(document.getElementById('width').value);

let area = length * width;
document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}

function calcularTotal() {
 com1 = parseFloat(document.getElementById('comestible1').value);
 com2 = parseFloat(document.getElementById('comestible2').value);
 com3 = parseFloat(document.getElementById('comestible3').value);

let totalCompra = com1 + com2 + com3;
document.getElementById('totalCompra').innerText = `El total de la compra es: $${totalCompra}`;
}

