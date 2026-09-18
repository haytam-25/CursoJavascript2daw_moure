// Map

// declaracion

let miMapa= new Map()

console.log(miMapa)

// Inicializamos el mapa con valores

miMapa = new Map([
    ["nombre", "haytam"],
    ["edad", 22],
    ["profesion", "programador"]
])

console.log(miMapa)

// metodos comunes

// set 

miMapa.set("alias", "clove")

miMapa.set("edad", 23) // si la clave ya existe, se sobreescribe

console.log(miMapa)

// get

console.log(miMapa.get("nombre"))

console.log(miMapa.get("email")) // si no existe la clave, devuelve undefined   ç

// has

console.log(miMapa.has("nombre")) // true
console.log(miMapa.has("email")) // false

// delete

miMapa.delete("alias")
console.log(miMapa)


//keys

console.log(miMapa.keys())

// values

console.log(miMapa.values())

// size

console.log(miMapa.size)

// entries

console.log(miMapa.entries())

// forEach

miMapa.forEach((value, key) => {
    console.log(`clave: ${key}, valor: ${value}`)
})

// clear

miMapa.clear()
console.log(miMapa)

