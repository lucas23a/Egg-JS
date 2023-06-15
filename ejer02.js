/*Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
para calcular el área y el perímetro se utilizan las siguientes fórmulas:
area = PI * radio2
perimetro = 2 * PI * radio */

var radio = prompt ("ingrese el radio del circulo");
const PI= 3.141592653589793;
var area = PI * Math.pow(radio, 2);
var perimetro = 2 * PI * radio;
console.log("El area del circulo es: "+ area+ " y el perimetro es: "+perimetro);