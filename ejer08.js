/*Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos. */

var suma =0;
var min=999999999999999999999999999999999999999999;
var max=0;
var cant=0;
do{
    var num= prompt("Ingrese un numero");
    cant++;
    console.log(cant);
    if(Number(num)== num){
        num= Number(num);
        if(num>max){
            max= num;
        }else if (num !=0 && num<min){
            min= num;
        }
        suma = suma + num;
    }
}while(num !=0);
cant= cant -1;
var promedio= suma / cant;

document.write("El promedio es de "+promedio);
document.write(" \n El maximo numero ingresado es "+max);
document.write(" \n El minimo numero ingresado es "+min);
document.write(" \n La cantidad de numero ingresado es "+cant);