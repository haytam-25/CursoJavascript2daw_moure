// Programacion asincrona

// Codigo sincrono

console.log("Inicio")

for(let i=0; i<100; i++){}

console.log("Fin")

console.log("---")
// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecucion)
// 2. Web APIs (APIs del navegador) o Node.js: setTimeout()...
// 3. Task Queue (Cola de tareas) y Microtask queue

// Flujo del Event Loop:

// 1.Call Stack 
// 2.Operaciones asincronas -> Web APIs o Node.js
// 3.Operacion termina ->Lo coloca en Task Queue o Microtask Queue
// 4.Si Call Stack vacio -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5.El proceso se repite

// Codigo asincrono

// -Callbacks

console.log("Inicio")

setTimeout(()=>{
    console.log("Esto es una funcion asincrona y se ejecuta despues de 2 segs")
    console.log("---")
},2000)

console.log("Fin")

// -Problema: Callback Hell (ocurre cuando hay varios callbacks)

function step1 (callback){
    setTimeout(()=> {
        console.log("Paso 1 completado")
        callback()
    },1000)
}

function step2 (callback){
    setTimeout(()=> {
        console.log("Paso 2 completado")
        callback()
    },1000)
}

function step3 (callback){
    setTimeout(()=> {
        console.log("Paso 3 completado")
        callback()
    },1000)
}

step1(()=>{
    step2(()=>{
        step3(()=>{
            console.log("Todos los pasos completados")
        })
    })
})


// -Promesas 

 const promise = new Promise((resolve, reject)=> {
    setTimeout(()=>{
        const ok= true
        if(ok){
            resolve("Operacion exitosa")
        }
        else{
            reject("Es false")
        }
    },4000)
 })

 promise
        .then(result => {
            console.log(result)
        })
        .catch(error => {
            console.log(error)
        })

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}

function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => {
        console.log("Todos los pasos con promesa completados")
    })


// -Async/Await

function espera(ms) {
    return new Promise( resolve => setTimeout(resolve,ms))
}


async function process() {
    console.log("Inicio del proceso")
    
    await espera(6000)

    console.log("Fin del proceso")

    await espera(2000)
    console.log("esto se ejecuta despues de 2 segundos de la de encima mia")
}

process()