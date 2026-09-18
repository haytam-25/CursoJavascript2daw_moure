// 1. Crea un array que almacene cinco animales |

let animales = new Array("gatoo","perro","jirafa","elefante","oso")

console.log(animales)


// 2. Afiade dos mas. Uno al principio y otro al final |

animales.push("leon")


animales.unshift("pato")
console.log(animales)


// 3. Elimina el que se encuentra en tercera posicion 

animales[2]=""

// 4. Crea un set que almacene cinco libros 

let libros =new Set(["harrypotter","teo"])

//5. Anade dos mas. Uno de ellos repetido 

libros.add("jsja")

libros.add("teo")

console.log(libros)

// 6. Elimina uno concreto a tu eleccion 

libros.delete("jsja")

// 7. Crea un mapa que asocie el nimero del mes a su nombre 

let meses = new Map([[1, "enero"], [2, "febrero"], [3, "marzo"], [4, "abril"], [5, "mayo"]])

// 8. Comprueba si el mes nimero 5 existe en el map e imprime su valor 

meses.has(5) ? console.log(meses.get(5)) : console.log("no existe")

// 9. Añade al mapa una clave con un array como que almacene los meses de verano 

let verano = ["junio", "julio", "agosto"]
meses.set("verano", verano)

console.log(meses)

// 10. Crea un Array, transférmalo a un Set y almacénalo en un Map 

let miArray = ["uno", "dos", "tres", "cuatro"]

let miSet = new Set(miArray)

let miMapa = new Map()

miMapa.set("miSet", miSet)

console.log(miMapa)


/*
Clase 28 - Ejercicios: Estructuras
Vídeo: https://youtu.be/1glVfFxj8a4?t=11451
*/

// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición

// 4. Crea un set que almacene cinco libros

// 5. Añade dos más. Uno de ellos repetido

// 6. Elimina uno concreto a tu elección

// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map