// Loops o bucles

// for 

for (let i = 0; i < 5; i++) {
    console.log(`hola ${i}`)
}

const numeros = [1, 2, 3, 4, 5]

for (let i = 0; i < numeros.length; i++) {
    console.log(`elemento: ${numeros[i]}`)
}

// while

let j = 0

while (j < 5) {
    console.log(`hola ${j}`)
    j++ // hay que incrementar la variable para que no sea un bucle infinitoº
}

// do while

let k = 0

do {
    console.log(`holaa ${k}`)
    k++
} while (k < 5)

// for of

miMapa = new Map([
    ["nombre", "haytam"],
    ["edad", 22],
    ["profesion", "programador"]
])

for(let valores of miMapa){
    console.log(valores)
}

let numeroas = [1, 2, 3, 4, 5]

for (let valor of numeroas) {
    console.log(`elemenko: ${valor}`)
}

myString = "hola"

for (let letra of myString) {
    console.log(`letra: ${letra}`)
}

// buenas practicas

// // break y continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break // rompe el bucle
    }
    else if (i === 3) {
        continue // salta a la siguiente iteracion
    }
    console.log(`hola ${i}`)
}