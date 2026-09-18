// set 

// Declaracion

let miSet = new Set()

console.log(miSet)

//Inicializacion

miSet= new Set(["haytamn",2356,"jajaj",true])

console.log(miSet)

// metodos comunes

// add y delete

miSet.add("clove") // añade al final y ya

console.log(miSet)

miSet.delete("clove") // tienes que pasarle el valor del elemento que quieres borrar

console.log(miSet)

console.log(miSet.delete("jajaj")) // aparte devuelve si se ha borrado o no 

console.log(miSet)


// has 

console.log(miSet.has("haytamn")) // devuelve si hay eso

// size

console.log(miSet.size) // devuelve el tamaño

// Convertir un set a array

let miArray = Array.from(miSet)

console.log(miArray)


// SET no permite duplicados (arrays si)
 
miSet.add("haytamn")
miSet.add("haytamn")

console.log(miSet)

miSet.add("Haytamn") // tiene que ser identico para que no lo añada 
console.log(miSet)




