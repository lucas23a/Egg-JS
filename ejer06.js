/*Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”. */

var num= prompt("ingrese un numero entero");

if(num==0){
    alert("el 0 no es par ni impar");
}else{
    if(num%2==0){
        document.write("El numero " +num+ " es par");
    }else{
        document.write("El numero "+num+" es impar");
    }
}
