/*Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring(). */

function hacerSuGracia() {
    var input = document.getElementById("input_1").value;
    var textoParaMostrar = input.split("").join(" ");
    console.log(textoParaMostrar);
    document.getElementById("texto_1").textContent = textoParaMostrar;
}


document.getElementById("input_1").onchange = hacerSuGracia;
