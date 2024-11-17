const cambiarColor = (id, color) => {
    document.getElementById(id).style.color = color;
}

const cambiarTamanio = (id, tamano) => {
    document.getElementById(id).style.fontSize = tamano;
}

const cambiarTexto = (id, texto) => {
    document.getElementById(id).innerText = texto;
}
const agregarElemento = (id, elemento) => {
    document.getElementById(id).innerHTML += elemento;
}

const conceptosJS = () => {
    /*                                      TIPOS DE VARIABLES EN JS
    var: globales, ya no se usa mucho
    let: locales, solo en el bloque donde se declaran
    const : constantes, no se pueden reasignar
    */
    let nombre = "Luis";
    let edad = 25;
    let numero = 3.45;
    const PI = 3.1416;
    console.log(nombre, edad, numero, PI);
    /*                                       DECLARACION DE ARREGLOS*/
    const diasSemana = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'];
    console.log(diasSemana);
    console.log(diasSemana[0]);
    console.log(diasSemana[6]);
    console.log(diasSemana[7]);
    //dentro de js el consepto de nulo o de no existente es undefined
    diasSemana.push('Nuevo dia');  //agrega un elemento al final del arreglo
    console.log(diasSemana);

    diasSemana.unshift('Dias');//agrega un elemento al inicio del arreglo
    console.log(diasSemana);

    const numerosImpares = [1, 3, 5, 7, 9, 11]
    console.log(numerosImpares);

    const numerosPares = [2, 4, 6, 8, 10];
    console.log(numerosPares);

    const numeros = numerosImpares.concat(numerosPares);
    console.log(numeros);

    for (const dia of diasSemana) {
        console.log(dia);
        if (dia === 'Viernes') {
            console.log('Al fin es viernes');
        } else {
            console.log('No es viernes');
        }
    }

    //                                      Manejo de objetos
    const miEstudiante = {
        nombre: 'Luis',
        apellido: 'Valladares',
        edad: 25,
        genero: 'Masculino',
        ciudadNacimiento: 'Cayambe',
    }
    console.log(miEstudiante);
    console.log(miEstudiante.nombre);
    console.log(miEstudiante.edad);
    if (miEstudiante.edad === 25) {
        console.log('tiene 25');
    } else {
        console.log('No tiene 25');
    }
    miEstudiante.apellido = 'Teran';
    console.log(miEstudiante);

    //                                      Declaraciones de atributos con funciones
    const profesor = {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 35,
        direccion: {
            calle: 'Calle 1',
            numero: 123,
            ciudad: 'Quito',
        }
    }
    console.log(profesor);
    console.log(profesor.direccion);
    console.log(profesor.direccion.ciudad);
    profesor.direccion.calle = '10 de agosto';
    console.log(profesor.direccion);
    console.log(profesor.edad);
    console.log(profesor.estatura);

    if (profesor.edad === profesor.estatura) {
        console.log('Son iguales');
    } else {
        console.log('estos no son lo mismo');
    }
}