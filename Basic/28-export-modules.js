// Exportacion de módulos en JavaScript

// FUNCIONES

export function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Esto funciona correctamente


// PROPIEDADES

export const PI = 3.14159;


export let myVariable = "Hola, soy una variable exportada";


// Exportación por defecto

export default function multiply(a, b) {
    return a * b;
} // la exportación por defecto permite exportar UNAA sola función, clase o valor por archivo.

// Clases

export class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}