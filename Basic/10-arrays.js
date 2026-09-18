// array

// declaracion

let miArray = []
let miArray2 = new Array()

console.log(miArray)
console.log(miArray2)

miArray=[24]
miArray2 = new Array(2) // aqui damos 2 huecos

console.log(miArray)
console.log(miArray2)

miArray=[23, "haytam", true]
miArray2 = new Array ("jajaj", 23, false)

console.log(miArray)
console.log(miArray2)

miArray2= new Array(3)

miArray2[0]="haytaaam"
// miArray2[1]=212
miArray2[2]=false

console.log(miArray2)

miArray=[]
miArray[2]="haaaaa"
miArray[1]="papagayo"

console.log(miArray)

// metodos comunes

 miArray=[]

 // push y pop

 miArray.push("haytam")
 miArray.push(22)
 miArray.push("ayadin")  //  push lo va guardando

 console.log(miArray)

 miArray.pop()    // pop borra el ultimo y lo devuelve
 console.log(miArray)

// unshift y shift

console.log(miArray.shift()) // shift borra el primero y lo devuelve
console.log(miArray)

miArray.unshift("haytaam", "ayadion")
console.log(miArray)

// length
console.log(miArray.length)

// clear 

miArray=[] // para borrarlo

miArray.length=0
console.log(miArray) // tambien asi

//slice

miArray.push("haytam", "ayadin", 22, true)

let miNuevoArray = miArray.slice(1,3) // se coge del 1 (incluido) al 3 (que no se incluye)
console.log(miNuevoArray)

// splice

miArray.splice(1,3) // desde el la posicion 1 , borra los 3 siguientes

console.log(miArray)