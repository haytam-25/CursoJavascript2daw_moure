// Funciones avanzadas

// Ciudadanos de primera clase

const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet ("Haytam")

console.log("  ")
// Arrow functions avanzadas

// -Retorno implicito

const multiply = (a,b)=> a*b
console.log(multiply(2,3))


console.log("  ")
// -this lexico

const handler ={
    name: 'Haytam',
    greeting: function () {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting:() => {
        console.log(`Hola, ${this.name}`) // el this en arrow functions tiene otro contexto no el de la funcion 
    }
}

handler.greeting() 
handler.arrowGreeting()

console.log("  ")

// Parametros Rest (...)

function sum (...numbers){
    let result=0
    for(let number of numbers){
        result+=number
    }
    return result
}

console.log(sum(1,2,3,4,5))
console.log(sum(2026,5))

function juntar (...frase){
    let frasecompleta=""
    for(let palabra of frase){
        frasecompleta+= " "+palabra
    }
    return frasecompleta
}

console.log("  ")

// Operador spread (...)

const numbers =[1,2,3]
function sumWithSpread(a,b,c){
    return a+b+c
}

console.log(sumWithSpread(1,2,3)) // Sin spread
console.log(sumWithSpread(...numbers)) // Con spread.   aqui los ... desempaquetan el array , lo contrario del Rest 

console.log("  ")

// Closures 

function createCounter(){
    let counter=0
    return function cl(){
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const contador = createCounter() // se guarda el valor del counter 

contador() // y aqui accede directamente a la funcion de dentro "cl"
contador() // se ejecuta las veces que queramos pero guardando el contexto anterior 

const contador2= createCounter()

contador2()
contador2() // aqui se vuelve a empezar como antes

console.log("  ")

// Callbacks 

function procesamiento(datos,callback){
    const result = juntar(...datos)
    callback(result)
}

function procesarresultado(result){
    console.log(`La frase es${result}`)
}

procesamiento([`hola`,`soy`,`haytam`],procesarresultado)