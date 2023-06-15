/* Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/
var matriz = [[3], [6], [9], [12], [15]]

function ejecutar() {
    document.getElementById("p_01").textContent = `Matriz: ${matriz}`
    console.log("matriz-> ", matriz);

    var vector = matriz.map((e) => Number(e) + 3);

    document.getElementById("p_02").textContent = `Vector: ${vector}`
    console.log("vector-> ", vector);

}