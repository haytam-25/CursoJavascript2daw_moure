// OPERADORES

// OPERADORES ARITMETICOS

console.log(6+6)
console.log(6-6)
console.log(6*6)
console.log(6/6)

console.log(6%6) // modulo
console.log(6**6) // exponente

// ++ incremento
// -- decremento


// Operadores de comparacion
    let a=6
    let b=8

    console.log(a<b)
    console.log(a>b)
    console.log(a==b)

    console.log(a==6) // igualdad por valor 
    console.log(a=="6") // igualdad por valor 

    console.log(a=!6) // distinto

    console.log(a==="6") // igualdad por identidad (por tipo de dato y valor)
    console.log(a===a)
    console.log(a===6)

    // cosas peculiares

    console.log(0==false) // true
    console.log(2== false) // false
    console.log(2==true) // true

    console.log(0=="")    // true
    console.log(0==" ")   // true
    console.log(0=="hsdkh") // false

    console.log(0==="") // false


    // valores vedaderos

        /*
        TODOS LOS NUMEROS POSITIVOS Y NEGATIVOS MENOS EL CERO
        TODAS LAS CADENAS DE TEXTO MENOS LAS VACIAS 
        EL BOOLEAN TRUE
        */

    // valores FALSOS

        /*
        0
        0n
        null
        undefined
        NaN
        El boolean false´
        Cadenas de texto vacias
        */

// OPERADORES LOGICOS

    // AND ( && )
    console.log(5>10 && 6>20)
    
    // or ( || )
    console.log(5>10 || 6>20)

    // not (!) 
    console.log(!(5>4)) // cambia el valor
    console.log(!false)

// OPERADOR TERENARIO

    const isRaining=false
    
    isRaining? console.log("si llueve"):console.log("no esta lloviendo")

