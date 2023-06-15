/*Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura. */
objeto = {
    nombre: "Luis",
    edad: 34,
    apellido: "Advincula",
    muerto: false
}

function ejecutar() {
    var array = Object.keys(objeto)
    console.log(array);
    var array = Object.values(objeto)
    console.log(array);
}