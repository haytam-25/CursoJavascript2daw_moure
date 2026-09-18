// Importacion modulos
import { add,PI,myVariable } from './28-export-modules.js';

console.log(add(5, 7)); // Esto funciona correctamente



// Propiedades

console.log(PI); // Esto funciona correctamente

console.log(myVariable); // Esto funciona correctamente


// Importacion de exportacion por defecto
import multiply from './28-export-modules.js';

console.log(multiply(3, 4)); 

// Importacion de clases
import { Persona } from './28-export-modules.js';

let persona = new Persona("Juan", 30);
persona.saludar();  


// Modulos de terceros

const os = require('os');

console.log(os.platform());