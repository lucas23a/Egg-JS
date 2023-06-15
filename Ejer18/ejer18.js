/* A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

var valores = [true, 5, false, "hola", "adios", 2]

var strings = valores.filter(x => typeof (x) == "string")
var strings = Math.max(strings[0].length, strings[1].length) //spread operator (esparcir)
console.log(`palabra mas larga -> ${strings}`)

var boleanos = valores.filter(x => typeof (x) == "boolean")
console.log(`Boleanos true-> ${boleanos[0] || boleanos[1]}`);
console.log(`Boleanos false-> ${boleanos[0] && boleanos[1]}`);

var enteros = valores.filter(x => typeof (x) == "number")
console.log(`Numeros suma-> ${enteros[0] + enteros[1]}`);
console.log(`Numeros resta-> ${enteros[0] - enteros[1]}`);
console.log(`Numeros multiplicacion-> ${enteros[0] * enteros[1]}`);
console.log(`Numeros division-> ${enteros[0] / enteros[1]}`);
console.log(`Numeros elevado-> ${enteros[0] ** enteros[1]}`);