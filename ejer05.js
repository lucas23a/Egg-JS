/*Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división. */

var operacion= prompt(`Que operacion desea hacer con los numero 8 y 2
SUMAR : S
RESTAR: R
DIVISION: D
MULTIPLICACION: M`).toUpperCase(operacion);

if(operacion== "S"){
    let x = 8+2;
    console.log("La suma es igual a "+x);
}else if(operacion== "R"){
    let x= 8-2;
    console.log("LA resta es igual a "+x);
}else if(operacion== "D"){
    let x= 8/2;
    console.log("La division es igual a "+x);
}else if(operacion== "M"){
    let x= 8*2;
    console.log("La multiplicacion es igual a "+x);
}
    


