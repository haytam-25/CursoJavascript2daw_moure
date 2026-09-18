
miarray = [1, 2, 3, 4];

let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
};

let mivalor =miarray[0];

miarray.push(6);
console.log(miarray);

console.log(mivalor);

// Desestructuracion

// Sintaxis de desestructuracion de arrays

let myValue0, myValue1, myValue2;

[myValue0, myValue1, myValue2] = miarray;

console.log(myValue0);
console.log(myValue1);
console.log(myValue2);

// Sintaxis arrays con valores predeterminados

let myValue3, myValue4, myValue5, myValue6, myValue7, myValue8;

[myValue3 = 10, myValue4 = 20, myValue5 = 30, myValue6 = 40, myValue7 = 50, myValue8 = 60] = miarray;

console.log(myValue3);
console.log(myValue4);
console.log(myValue5);
console.log(myValue6);
console.log(myValue7);
console.log(myValue8);

// Ignorar elementos en la desestructuracion de arrays

let [, , myValue9] = miarray;

console.log(myValue9);


// Sintaxis de desestructuracion de objetos

let { nombre, edad, ciudad } = persona;

console.log(nombre);
console.log(edad);
console.log(ciudad);

// Sintaxis de desestructuracion de objetos con valores predeterminados

let { name2,age2,city2} = persona;

console.log(name2); // undefined porque no existe la propiedad name2 en el objeto persona
console.log(age2); // no existe la propiedad age2 en el objeto persona, por lo que se asigna undefined
console.log(city2);


// Sintaxis de desestructuracion con nombres de variables diferentes a los nombres de las propiedades del objeto

let { nombre: nombrePersona, edad: edadPersona, ciudad: ciudadPersona } = persona; // da igual el orden de las propiedades, lo importante es que los nombres de las propiedades coincidan con los del objeto

console.log(nombrePersona);
console.log(edadPersona);
console.log(ciudadPersona);

// Objetos anidados

let empresa = {
    nombre: "Tech Solutions",
    numero = 123456789,
    direccion: {
        calle: "Calle Mayor",
        numero: 123,
        ciudad: "Madrid"
    }
};

let {numero: numeroEmpresa, direccion: {  numero: numeroDireccion } } = empresa;

console.log(numeroEmpresa);
console.log(numeroDireccion);

// Propagacion

let miarray2 = [...miarray]; // copia de miarray en miarray2

let miarray3 = [...miarray2, 5, 6, 7];

console.log(miarray2);
console.log(miarray3);ç

// Combinacion de arrays

let miarray4 = [...miarray, ...miarray2];

console.log(miarray4);

// Sintaxis de propagacion en objetos

let persona2 = { ...persona, email: "juan@techsolutions.com" };

console.log(persona2);

let persona3 = { ...persona}; // copia de persona en persona3