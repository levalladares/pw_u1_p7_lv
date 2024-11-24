var num1 = '';
var num2 = '';
var operacion = '';
var ingresandoNum2 = false;

//funcion setvalor: para mostrar en pantalla el valor de los botones
function setarValor(valor) {
    if (ingresandoNum2) {
        num2 += valor; // Concatenar el valor a num2
        document.getElementById('id_pantalla').innerText = num2;
        console.log("num2: " + num2);
    } else {
        num1 += valor; // Concatenar el valor a num1
        document.getElementById('id_pantalla').innerText = num1;
        console.log("num1: " + num1);
    }
}

//funcion para seleccionar la operacion
function seleccionarOperacion(op) {
    operacion = op;
    ingresandoNum2 = true;
    switch (op) {
        case '+':
            document.getElementById('id_pantalla').innerText = '+';
            break;
        case '-':
            document.getElementById('id_pantalla').innerText = '-';
            break;
        case 'X':
            document.getElementById('id_pantalla').innerText = 'x';
            break;
        case '%':
            document.getElementById('id_pantalla').innerText = '/';
            break;
        default:
            resultado = 'Error';
    }
    console.log("operacion: " + operacion);
}

//funcion para realizar la operacion
function calcular() {
    let resultado;
    switch (operacion) {
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case 'X':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;
        case '%':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            resultado = 'Error';
    }
    document.getElementById('id_pantalla').innerText = resultado;
    console.log("resultado: " + resultado);
}
function limpiar() {
    // Resetear valores
    num1 = '';
    num2 = '';
    operacion = '';
    ingresandoNum2 = false;
    document.getElementById('id_pantalla').innerText = '';
}
function borrar() {
    // Borrar el ultimo caracter
    if (ingresandoNum2) {
        num2 = num2.slice()
        document.getElementById('id_pantalla').innerText = num2;
    } else {
        num1 = num1.slice(0, -1);
        document.getElementById('id_pantalla').innerText = num1;
    }
}

