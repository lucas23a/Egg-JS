/*Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”. */

var letra = prompt("Responda con 'S' o 'N'").toUpperCase(letra);

if(letra === "N" || letra==="S"){
   console.log("CORRECTO");
}else{
   
    console.log("INCORRECTO");
}