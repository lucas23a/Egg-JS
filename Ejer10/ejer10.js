/*Escribir una función flecha que reciba una palabra y la devuelva al revés. */

let hacerSuGracia = (valor) => {
    document.getElementById("texto_1").textContent = valor.split("").reverse().join("");
}

function aux() {
    var texto = document.getElementById("input_1").value
    hacerSuGracia(texto)
}
document.getElementById("input_1").onchange = aux;

//no pude invocar a "hacerSuGracia" directamente por funcion flecha, tuve que usar una funcion auxiliar
    