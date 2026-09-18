// Manejo de APIs

// -APIs REST ( HTTP + URLs + JSON )

// Metodos HTTP:
// -GET 
// -POST
// -PUT 'actualiza totalmente un recurso'
// -DELETE

// Codigos de respuesta HTTP:
// -200 OK
// -201 OKEY PERSONALIZADO
// -400 ERROR 
// -404 ERROR NO HA ENCONTRADO NADA NO SABE DONDE ESTA
// -500 ERROR DEL SERVIDOR PETICION DE CLIENTE BIEN BACKEND MAL

// Consumir una API

fetch("https://jsonplaceholder.typicode.com/posts")
.then(Response=>{
    // Transforma la respuesta en JSON
    return Response.json()
})
.then(data=>{
    // Procesa los datos
    console.log(data)
})
.catch(error =>{
    // Captura errores
    console.log("Error",error)
})

// Uso de Async/Await

async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Error",error)
    }
}

getPosts()

// Solicitud POST 

async function createPost() {
    const newPost={
        userId: 1,
        title: "Este es el titulo de mi post",
        body: "Este es el cuerpo de mi post"
    }

     try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Error",error)
    }
}
createPost()

// Manejo de errores 

fetch("https://jsonplaceholder.typicode.com/haytam")
.then(Response=>{
    if (!Response.ok) {
        throw Error(`Status HTTP: ${Response.status}`)
    }
    return Response.json()
})
.catch(error =>{
    console.log("Error",error)
})

// Metodos HTTP Adicionales
// -PATCH 'actualiza solo un trocito de un recurso en cambio put entero' 
// -OPTIONS

async function partialPostUpdate() {
     try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10",{
            method:"PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({title: "Este es el nuevo titulo de mi post"})
        })
        const data = await response.json()
        console.log(data)

    } catch (error) {
        console.log("Error",error)
    }
}

partialPostUpdate() // PATCH

// Autenticacion mediante API Key

async function tiempoen(city) {
    const apikey='71eeb53acee05f42453144685d1d4eca'
    const url =`https://api.openweathermap.org/data/2.5/weather?q${city}&appid=${apikey}`

    try {
        const response=await fetch(url)
        const data = await response.json()

        console.log(data)
    } catch (error) {
        console.log(error)
    }
}
tiempoen("Madrid")

// Otros metodos de Autenticacion y Autorizacion
// -Bearer Tokens 
// -JWT                son mas seguros ya que con el token se envian en la cabecera no como 
//                      la apikey de arriba que se envia en la url

