// Clases en JavaScript

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let persona1 = new Persona("ALBERTO", 30);
console.log(persona1)

console.log(typeof persona1);

// Valores por defecto

class defaultPersona {
    constructor(nombre = "sin nombre", edad = 0) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

let persona2 = new defaultPersona("juan");
console.log(persona2);


// Acceso a propiedades 

console.log(persona1.nombre);
console.log(persona1["edad"]);

persona1.nombre = "Carlos";
console.log(persona1.nombre);

// Funciones dentro de clases

class Persona2 {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log("Hola, mi nombre es " + this.nombre);
    }       
}    

let persona3 = new Persona2("Alberto", 30);
persona3.saludar();


// Propiedades privadas

class personaPrivada {
    #banco
    constructor(nombre, edad, banco)  {
        this.nombre = nombre;
        this.edad = edad;
        this.#banco = banco;
    }
    pay() {
        console.log("Pagando con el banco " + this.#banco);
    }
}

let persona4 = new personaPrivada("Alberto", 30, "iban123456789");
persona4.pay();

// persona4.#banco; // error, no se puede acceder a propiedades privadas desde fuera de la clase
persona4.banco= "iban987654321"  // crea otro atributo banco en el objeto persona4, pero no es el mismo que el atributo privado #banco

console.log(persona4);   


// GETTERS Y SETTERS

class GetSetPersona {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) {
        this.#name = name;
        this.#age = age;
        this.#alias = alias;
        this.#bank = bank;
    }
    get name() {
        return this.#name;
    }
    set bank(NEWbank) {
        this.#bank = NEWbank;
    }
}
persona5 = new GetSetPersona("Alberto", 30, "Alber", "iban123456789");
console.log(persona5.name); // accede al getter name y devuelve el valor de la propiedad privada #name

persona5.bank = "iban987654321"; // accede al setter bank y cambia el valor de la propiedad privada #bank


// HERENCIA

class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    sound() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {

    sound() {
        console.log("El perro ladra");
    }

    run() {
        console.log("El perro corre");
    }
}

let perro1= new Perro("firulais");

perro1.sound(); // accede al metodo sound de la clase padre Animal
perro1.run(); // accede al metodo run de la clase hija Perro

class fish extends Animal {
    constructor(nombre,size) {
        super(nombre);
        this.size = size;
    }
    swim() {
        console.log("El pez nada");
    }
}

let fish1 = new fish("Nemo", 10);

fish1.sound(); // accede al metodo sound de la clase padre Animal
fish1.swim(); // accede al metodo swim de la clase hija fish


// Metodos estaticos

class MathUtils {
    static sum(a, b) {
        return a + b;
    }
}

console.log(MathUtils.sum(2, 3)); // accede al metodo estatico sum de la clase MathUtils

