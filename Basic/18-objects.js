// Objetos en JavaScript

// Sintaxis

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};

// Acceder a propiedades

// Notacion de punto
console.log(persona.nombre);

// Notacion de corchetes
console.log(persona["edad"]);

// Modificar propiedades

persona.ciudad = "Barcelona";
console.log(persona.ciudad);

persona["edad"] = "treinta y uno";
console.log(persona.edad);

console.log(typeof persona.edad); 

// eliminar propiedades

delete persona.ciudad;
console.log(persona.ciudad); // undefined

// Agregar propiedades

persona.profesion = "Ingeniero";
console.log(persona);

// Métodos

persona.saludar();

// Anidacion de objetos

let empresa = {
    nombre: "Tech Solutions",
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid"
    }
};

console.log(empresa);

console.log(empresa.direccion.calle);
console.log(empresa["direccion"]["numero"]);

// igualdad de objetos

let obj1 = { a: 1, b: 2 };
let obj2 = { a: 1, b: 2 };

console.log(obj1 === obj2); // false porque son referencias diferentes en memoria

console.log(obj1.a === obj2.a); // true porque los valores son iguales

// Iterar sobre propiedades de un objeto

for (let key in persona) {
    console.log(key + ": " + persona[key]);
}

// Funciones como objetos
 
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
}

let persona1 = new Persona("Ana", 25);
console.log(persona1);

console.log(typeof persona1);
console.log(typeof persona); // true

