var numero1 = 0;
var numero2 = 0;
var operacion = '';

function setarValor(valor){
    let valorActual = document.getElementById('id_pantalla').innerText = valor;
    console.log(valor);
    document.getElementById('id_pantalla').innerText = valor;
}
//funcion para concatenar valores no sumar solo concatenar
function setarValorConcatenado(valor){
    let valorActual = document.getElementById('id_pantalla').innerText;
    console.log("valor actual: "+valorActual);
    document.getElementById('id_pantalla').innerText = valorActual + valor;
}
//funcion para limpiar pantalla
function limpiarPantalla(valor){
    if(valor === 'C'){
        document.getElementById('id_pantalla').innerText = '0';
    }
}

//funcion para recibir valor de los botones Y MOSTRAR EN PANTALLA
function recibirValor(valor){
    let valorActual = document.getElementById('id_pantalla').innerText;
    if(valorActual === '0'){
        setarValor(valor);
    }else{
        setarValorConcatenado(valor);
        numero1=valorActual;
        console.log("numero1: "+numero1);
    }
}

//funcion para sumar
function sumar(){
    let valorActual = document.getElementById('id_pantalla').innerText;
    numero1 = valorActual;
    console.log("numero1: "+numero1);
    document.getElementById('id_pantalla').innerText = '0';
}
//recibir operacion
function recibirOperacion(valor){
    operacion = valor;
    console.log("operacion: "+operacion);
}