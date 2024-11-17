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

    //                                      Arreglo de objetos

    const estu1 = {
        nombre: 'Luis',
        apellido: 'Valladares',
        edad: 25,
    }
    const estu2 = {
        nombre: 'jose',
        apellido: 'perez',
        edad: 23,
    }
    const estu3 = {
        nombre: 'jorge',
        apellido: 'gomez',
        edad: 30,
    }
    const estudiantes = [estu1, estu2, estu3];
    console.log(estudiantes);
    console.log(estudiantes[1]);
    const arregloEstudiantes2 = [{
        nombre: 'Luis',
        apellido: 'Valladares',
        edad: 25,
    }, {
        nombre: 'jose',
        apellido: 'perez',
        edad: 23,
    }, {
        nombre: 'jorge',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'juan',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'jose',
        apellido: 'gomez',
        edad: 30,
    }, {
        nombre: 'carla',
        apellido: 'gomez',
        edad: 30,

    }];
    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);

    const estudiante = arregloEstudiantes2.pop(); //.pop() elimina el ultimo elemento del arreglo
    console.log(estudiante);
    console.log(arregloEstudiantes2);
    console.table(arregloEstudiantes2);


    //                                     Desestructuracion de arreglos
    // consiste en separar en partes los elementos de un arreglo

    const colores = ['rojo', 'azul', 'verde', 'amarillo', 'rosado'];
    const [p1, p2, p3, p4, p5] = colores;
    console.log(p1);
    console.log(p5);

    const [m1, m2, m3, m4, m5, m6] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(m1);
    console.log(m2);
    console.log(m5);
    console.log(m6);

    const [, mes2, , , mes5] = ['enero', 'febrero', 'marzo', 'abril', 'mayo'];
    console.log(mes2);
    console.log(mes5);

    //                                      Desestructuracion de objetos
    console.log('--------------------> Desestructuracion de objetos');
    const automovil = {
        marca: 'Toyota',
        modelo: 'Corolla',
        anio: 2021,
        color: 'rojo',
    }
    /*const { marca, modelo, anio, color } = automovil;
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
    */
    const automovil2 = {
        marca: 'Mazda',
        modelo: '3',
        anio: 2024,
        color: 'negro',
    }
    desestructuracion(automovil2);
    desestructuracion(automovil);

    const { nombreP, raza, estatura } = { nombreP: "Perro", raza: "pitbull", estatura: 126 }
    console.log(nombreP)
    console.log(raza)
    console.log(estatura)

    //                                              trabajo en clase
    //definir y desestructurar en una sola linea
    const { nombreE, presidente: { nombrePr, edadp }, deporte } = { nombreE: 'LDU', presidente: { nombrePr: 'Rodrigo', edadp: 58 }, deporte: "futbol" }
    console.log(nombrePr)
    
    //desestructurar en dos pasos 
    const universidad = {
        nombreU: 'UCE',
        rector : {
            nombreR: 'Juan',
            edadR: 50,
        },
        estudiantesU : 5000
    }

    const {nombreU,estudiantesU, rector}=universidad
    console.log(rector)
    const {nombreR,edadR}=rector
    console.log(nombreR)
}

const desestructuracion = ({ marca, modelo, anio, color }) => {
    console.log('metodo de Desestructuracion de objetos');
    console.log(marca);
    console.log(modelo);
    console.log(anio);
    console.log(color);
}
