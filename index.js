'use strict';

/*
 * ARCHILLI, MATIAS
 */

// Ejemplo de la estructura de un disco:
// let disco = {
//     Nombre: 'El lado oscuro de la Programación',
//     Autor: 'Los Programadores Anónimos',
//     Codigo: 1,
//     Pistas: [
//         {
//             Nombre: 'Esa cajita loca llamada variablecita',
//             Duracion: 200,
//         },
//         {
//             Nombre: 'Nunca quise ser un NaN',
//             Duracion: 180,
//         },
//         {
//             Nombre: 'No quiero programar',
//             Duracion: 90,
//         },
//         {
//             Nombre: 'Bajo presión',
//             Duracion: 240,
//         },
//         {
//             Nombre: 'La odisea de las variables privadas',
//             Duracion: 120,
//         },
//         {
//             Nombre: 'Sr. Programador',
//             Duracion: 720,
//         },
//     ],
// };

// Discos:
let discos = [];
let contadorDiscos = 0;
let codigos = [];

// Función Cargar:
function Cargar () {
    let nuevoDisco = new disco();
    nuevoDisco.ingresarDatos(codigos);
    codigos.push(nuevoDisco.codigo);
    discos.push(nuevoDisco);
    contadorDiscos++;

    const divPrincipal = document.getElementById('info');

    divPrincipal.innerText = ""; 

    const divContador = document.createElement("div");
    const pContador = document.createElement("p");

    pContador.innerText = `Discos cargados: ${contadorDiscos}`;
    pContador.classList.add("menor180");

    divContador.append(pContador);
    divPrincipal.append(divContador);

};

// Función Mostrar:
const Mostrar = () => {

    console.log(codigos);

    //GUARDO EN UNA VARIABLE EL DIV DADO EN EL INDEX.HTML
    const divPrincipal = document.getElementById('info');

    //LIMPIAR EL DIV
    divPrincipal.innerText = ""; 
    
    for (const disco of discos) {
        divPrincipal.append(disco.mostrarDatos());
    }

    //document.getElementById('info').innerHTML = html; // <--- ahí es acá
};

const MostrarPorCodigo = () => { 
    let codigoElegido;
    do {
        codigoElegido = parseInt(prompt("Ingrese el codigo del disco"));
    } while (codigoElegido < 0 || codigoElegido > 999 || isNaN(codigoElegido));

    let arrayFiltrado;
    
    const divPrincipal = document.getElementById('info');
    divPrincipal.innerText = "";
    
    arrayFiltrado = discos.filter(function(disco) {
        return disco.codigo == codigoElegido;  
    })
    for (const disco of arrayFiltrado) {
        divPrincipal.append(disco.mostrarDatos());
    }
    console.log(arrayFiltrado);
    
}

const LimpiarPantalla = () => {
    //GUARDO EN UNA VARIABLE EL DIV DADO EN EL INDEX.HTML
    const divPrincipal = document.getElementById('info');

    //LIMPIAR EL DIV
    divPrincipal.innerText = ""; 

    const divContador = document.createElement("div");
    const pContador = document.createElement("p");

    pContador.innerText = `Discos cargados: ${contadorDiscos}`;
    pContador.classList.add("menor180");

    divContador.append(pContador);
    divPrincipal.append(divContador);
}

