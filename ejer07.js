/*Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial. */

let limite = 73;
var suma =0;
do{
    var num= prompt("Ingrese un numero");
    if(Number(num)== num){
        num= Number(num);
        suma = suma + num;
    }
    console.log(suma)
}while(suma<limite);

document.write("La suma total es "+ suma+", el limite era "+limite);