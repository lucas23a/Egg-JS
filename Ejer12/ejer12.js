/*Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato. */

function tipoDato() {
    var texto = document.getElementById("input01").value;
    document.getElementById("p01").textContent= `El tipo de dato es ${typeof texto}`;

}

document.getElementById("input_01").onchange = tipoDato;