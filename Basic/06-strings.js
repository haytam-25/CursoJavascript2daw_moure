// Strings

// CONCATENACION
    let myName ="haytam"
    let saludo = "hola, "+myName+" el maravilloso!"

    console.log(saludo)
    console.log(typeof saludo)

// LONGITUD
    console.log(saludo.length)

// ACCESO A CARACTERES

    console.log(saludo[0])
    console.log(saludo.charAt(1))

// METODOS COMUNES

    console.log(saludo.toLowerCase())
    console.log(saludo.toUpperCase())

    console.log(saludo.indexOf("haytam"))

    console.log(saludo.includes("ayadin"))
    console.log(saludo.includes("haytam"))

    console.log(saludo.slice(0,4)) // como el substring

    console.log(saludo.replace("haytam","clove"))

// PLANTILLAS LITERALES

    const mensaje = `haytam
    @gmail.com`
    
    console.log(mensaje)

    console.log(`hola ${myName} tu email es ${mensaje}`)




