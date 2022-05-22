
function VerEdad(){
    console.log(document.getElementById("edad").value);
    }
    

const Bienvenido = ()=> {
    let usuario=prompt("Ingreaste a una calculadora de precios, ingresa tu nombre: ");
    while(usuario===""){
        usuario= prompt("Ingreaste a una calculadora de notas, ingresa tu nombre: ");
    }
    console.log("Hola "+ usuario);
};




function limpiar(){
    document.getElementById('miFormulario').reset();
}
function sumar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x+y;
}
function restar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x-y;
}
function multiplicar(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x*y;
}
function dividir(){
    let x= parseInt(document.getElementById('valor1').value);
    let y= parseInt(document.getElementById('valor2').value);
    
    document.getElementById('el-resultado').innerHTML=x/y;
}
function calcularPorcentaje (numero, porcentaje){
    return numero / 100* porcentaje;

}
function pesosDolares(valNum) {
    document.getElementById("inputDolares").value=valNum*1;
  }
  function dolaresPesos(valNum) {
    document.getElementById("inputPesos").value=valNum*180;
  }


const a=["COCO", "MARACUYA","ARANDANOS" ]
console.log(a);
console.log(a.length)
console.log(a [1])
const Nombre1={
    nombre : "Maximiliano",
    apellido: "Vega",
    edad: "35",
    soltero: false,
}



console.log(Nombre1);
console.log(Nombre1.nombre);
console.log(Nombre1.edad); 
console.log(Nombre1.apellido);
console.log(Nombre1.soltero);


 let NumerosPrimeros = ['Luis',"Tus compras son por trimestre:", '18', '15', '19'];
let NumerosSegundos = ['Juan', "Tus compras son por trimestre:",'15', '19', '17'];
let NumerosTerceros= ['Pedro',"Tus notas son por trimestre:", '10', '19', '18'];
let NumerosFinales = NumerosPrimeros.concat(NumerosSegundos).concat(NumerosTerceros);
console.log(NumerosFinales)



Bienvenido();

