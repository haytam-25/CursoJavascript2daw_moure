// Console

// log() - Muestra un mensaje en la consola
console.log("Hola mundo");

// error() - Muestra un mensaje de error en la consola
console.error("Esto es un mensaje de error");
console.error(new Error("wsto es un error"));

// warn() - Muestra un mensaje de advertencia en la consola
console.warn("Esto es un mensaje de advertencia");

// info() - Muestra un mensaje de información en la consola
console.info("Esto es un mensaje de información");

// table() - Muestra un array o un objeto en forma de tabla en la consola

let data = [
    { nombre: "Juan", edad: 30, ciudad: "Madrid" },
    { nombre: "María", edad: 25, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 35, ciudad: "Valencia" }
];

console.table(data);

// group() - Agrupa mensajes en la consola
console.group("Grupo de mensajes");
console.log("Mensaje 1");
console.log("Mensaje 2");
console.groupEnd();

// time() - Mide el tiempo que tarda en ejecutarse un bloque de código
console.time("Tiempo de ejecución");
for (let i = 0; i < 1000000; i++) {
    // Simulación de un proceso que tarda tiempo
}
console.timeEnd("Tiempo de ejecución");

// assert() - Muestra un mensaje de error si la condición es falsa
let x = 5;
console.assert(x > 10, "x no es mayor que 10"); // Esto generará un mensaje de error en la consola

// count() - Muestra el número de veces que se ha llamado a la función count()
console.count("Contador");
console.count("Contador");
console.count("Contador");

console.countReset("Contador"); // Reinicia el contador
console.count("Contador"); // Esto mostrará 1 nuevamente

// trace() - Muestra la pila de llamadas en la consola
function a() {
    b();
}

function b() {
    c();
}

function c() {
    console.trace("Seguimiento de llamadas");
}

a();


// clear() - Limpia la consola
// console.clear();
