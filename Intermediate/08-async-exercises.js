/*
Clase 45 - Asincronía
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=14558
*/

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".

function saludar (nombre, callback){
    callback(nombre)
    
}
function espera2segs (nombre){
    setTimeout(()=>{console.log(`Hola, ${nombre}`)},10000)
}

saludar("HAYTAM",espera2segs)

// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback){
    setTimeout(()=>{callback()},1000)
}
function task2(callback){
    setTimeout(()=>{callback()},1000)
    
}
function task3(callback){
    setTimeout(()=>{callback()},1000)
    
}

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function verificarnumero(numero){
    
    const promesa = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(numero%2 === 0){
            resolve("Numero par")
        }
        else{
            reject("Numero impar")
        }
        })
    })
    return promesa
}
verificarnumero(2).then(result=>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})

// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".


function firstTask(){
    const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Primera tarea completada")
            resolve()
        },1000)
        
    })
    return promesa
}

function secondTask(){
     const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Segunda tarea completada")
            resolve()
        },2000)
    })
    return promesa
}

function thirdTask(){
     const promesa= new Promise((resolve)=>{
        setTimeout(()=>{
            console.log("Tercera tarea completada")
            resolve()
        },1500)
        
    })
    return promesa
}

firstTask()
secondTask()
thirdTask()

// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function waitSeconds(ms){
    return new Promise(resolve => setTimeout(resolve,ms))
}

async function executeTasks(){

    await waitSeconds(1000)
    console.log("Primera tarea completada")

    await waitSeconds(2000)
    console.log("Segunda tarea completada")

    await waitSeconds(1500)
    console.log("Tercera tarea completada")    

}
executeTasks()



// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.


function getUser(id) {
    return new Promise((resolve,reject)=>{
        if(id>=5 || id<0){
            setTimeout(()=>{
           reject(`Usuario no encontrado`) 
        },2000)
        }
        else {
            setTimeout(()=>{
           resolve({ id: id, nombre: "Usuario " + id }) 
        },2000)
        }
    })
}

async function llamaruser(){

try {
    const user = await getUser(1)
    console.log(user)
} catch (error) {
        console.log(error)
}
}

llamaruser()


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")

// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes

let saldo=500

function checkBalance(){
    return new Promise((resolve) => {
         setTimeout(()=>{
            resolve(`Saldo disponible: ${saldo} $`)
    },1000)
    }) 
}

function withdrawMoney(amount){
    return new Promise((resolve,reject)=>{

        console.log(`Retirando ${amount}$`)
        if(amount<=saldo){
            setTimeout(()=>{
                resolve(`Operación exitosa, saldo restante: ${saldo-amount}$`)
                saldo-=amount
            },2000)
        }
        else{
            setTimeout(()=>{
                reject("ERROR INSUFICIENTE SALDO")
            },2000)
        }
    })
}

async function operacion(){
    
    const balance= await checkBalance()
    console.log(balance)

    try {
        const operacion1= await withdrawMoney(300)
        console.log(operacion1)
        const operacion2 = await withdrawMoney(300)
        console.log(operacion2)
    } catch (error) {
        console.log(error)
    }
    
}

operacion()


