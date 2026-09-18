// Manejo de errores en JavaScript

let myObject 

console.log(myObject.name); // Esto generará un error porque myObject es undefined

// Excepcion

//Produce una excepcion
let myObject 
 // console.log(myObject.name); // Esto generará un error porque myObject es undefined

 // Captura de errores con try-catch
 
try {
    // codigo que puede generar un error
    console.log(myObject.name); // Esto generará un error porque myObject es undefined
    console.log("Este mensaje no se mostrará porque se produjo un error en la línea anterior");
} catch (error) {
    console.log("Se ha producido un error",error.message);
}

// Bloque finally

try {
    // codigo que puede generar un error
    console.log(myObject.name); // Esto generará un error porque myObject es undefined
} catch (error) {
    console.log("Se ha producido un error",error.message);
} finally {
    console.log("Este bloque se ejecuta siempre, haya o no un error");
}

// Lanzar errores con throw


function sumar(a, b) {
    if (a instanceof Number || b instanceof Number ) {
        console.log("Los parámetros deben ser números");
    }
    return a + b;

throw new Error("Este es un error personalizado"); // Esto generará un error con el mensaje especificado
}

try {
    console.log(sumar(2, 3));
    console.log(sumar(2, "3")); // Esto generará un error porque uno de los parámetros no es un número
} catch (error) {
    console.log("Se ha producido un error",error.message);
}

// Crear errores personalizados con clases

class CustomError extends Error {
    constructor(message, a, b) {
        super(message);
        this.a = a;
        this.b = b;
    }  
}

try {
    throw new CustomError("Este es un error personalizado", 2, 3);
} catch (error) {
    console.log("Se ha producido un error",error.message);
    console.log("Valor de a:", error.a);
    console.log("Valor de b:", error.b);
}