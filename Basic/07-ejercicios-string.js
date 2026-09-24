
// 1. Concatena dos cadenas de texto

const doscadenas= "hola"+"adios"

// 2. Muestra la longitud de una cadena de texto

let longitud= doscadenas.length
console.log(longitud)

// 3. Muestra el primer y último carácter de un string

console.log(doscadenas.at(0)," ", doscadenas.at(longitud-1))

// 4. Convierte a mayúsculas y minúsculas un string
 
console.log(doscadenas.toUpperCase())
console.log(doscadenas.toLowerCase())

// 5. Crea una cadena de texto en varias líneas

let variaslineas =`varias
lineas
aqui
`
console.log(variaslineas)
// 6. Interpola el valor de una variable en un string

let edad= 23
let frase= `tengo ${edad} años`

console.log(frase)

// 7. Reemplaza todos los espacios en blanco de un string por guiones

let fraseesoacios = "aqui hay muchos espacios "

console.log(fraseesoacios.replaceAll(" ","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta

console.log(fraseesoacios.includes("muchos"))

// 9. Comprueba si dos strings son iguales

console.log(fraseesoacios==frase)

// 10. Comprueba si dos strings tienen la misma longitud

console.log(frase.length==fraseesoacios.length)