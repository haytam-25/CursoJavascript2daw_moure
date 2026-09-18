// Funciones

// Simple
function miFuncion() {
    console.log("Hola funcion");
}

miFuncion();

for(let i=0;i<5;i++){
    miFuncion();
}

// Con parámetros
function saludar(nombre) {
    console.log("Hola " + nombre);
}

saludar("Juan");
saludar("Maria");

// Funciones anónimas

const funcion1 = function(name) {
    console.log("Hola " + name);
}

funcion1("Pedro");

// Funciones flecha

const funcion2 = (name) => {
    console.log("Hola " + name);
}

funcion2("clove");

// Parametros 

function sumar(a, b) {
    return a + b;
}

console.log(sumar(2, 3));
console.log(sumar(5)); // NaN

// Parametros por defecto

function restar(a=0, b = 0) {
    return a - b;
}

console.log(restar(5, 3));
console.log(restar(5));
console.log(restar());

// Retorno de valores

function multiplicar(a, b) {
    return a * b;
}

let resultado = multiplicar(4, 5);
console.log(resultado);

// Funciones dentro de funciones

function externa() {
    console.log("Soy la función externa");

    function interna() {
        console.log("Soy la función interna");
    }

    interna();
}

externa();
// interna(); // Error: interna is not defined

// Funciones de orden superior

function operacion(multiplicar, a, b) {
     return multiplicar(a, b);
}

console.log(operacion(multiplicar, 3, 4)); 

// for each

miArray = [1, 2, 3, 4, 5];

miArray.forEach((elemento) => console.log(elemento));

miArray.forEach(function(elemento) {
    console.log(elemento);
});