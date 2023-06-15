/*Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript” */

function masLarga(){
var input = document.getElementById("input_01").value;
var palabrasArray = input.split(" ");
var palbraMasLarga="";
 palabrasArray.forEach(p => {
    if(p.length> palbraMasLarga.length){
        palbraMasLarga=p;
    }
});
document.getElementById("p01").textContent = palbraMasLarga;
}

document.getElementById("input_01").onchange = masLarga;