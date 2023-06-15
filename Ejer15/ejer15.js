/* Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

const PI= 3.141592653589793;

function area(){
    var radio= document.getElementById("input_num").value;
    if(radio>=0){
    var area = PI * Math.pow(radio, 2);
    document.getElementById("p_01").textContent = "El area del circulo es "+ area;
    }else{
        document.write("Ingrese un numero entero positivo")
    }
}

function perimetro(){
    var radio= document.getElementById("input_num").value;
    if(radio>=0){
        var perimetro = 2 * PI * radio;
        document.getElementById("p_02").textContent = "El perimetro del circulo es "+ perimetro;
        }else{
            document.getElementById("p_02").textContent= "Ingrese un numero entero positivo"
        }
}