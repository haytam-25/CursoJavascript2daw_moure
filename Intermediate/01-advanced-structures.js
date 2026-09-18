// Estructuras avanzadas

// Arrays avanzados

// - Metodos funcionales

// forEach


let numbers=[1,2,3]

numbers.forEach(element => console.log(element))

// map

let doubled = numbers.map(element => element*2)
console.log(doubled)

// filter 

let evens = numbers.filter(element=> element%2 === 0)
console.log(evens)

//reduce

let sum = numbers.reduce((previo, actual) => previo+actual)
console.log(sum)