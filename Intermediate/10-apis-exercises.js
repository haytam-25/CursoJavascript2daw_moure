/*
Clase 60 - APIs
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=18710
*/

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
.then(Response=>{
    return Response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/posts")
.then(response=>{

    if(!response.ok){
        throw new Error (`Error codigo HTTP ${response.status}`)
    }
    return response.json()
})
.then(data=>{
    console.log(data)
})
.catch(error=>{
    console.log(error)
})

// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function listaPublicacionesAsync() {

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        const data = await response.json()

        console.log(data)

    } catch (error) {
        throw new Error("No se pudo conseguir la lista")
    }
    
}

// listaPublicacionesAsync()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    
    const newPost={
        userId: "1",
        title: "TITULO",
        body: "Este es el body"
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",{
            method:"POST",
            headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify(newPost)
    })
        const data=await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

createPost()

// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function actualizarPost() {
    
    const postEnteroActualizado={
        userId: "10",
        id:100,
        title: "TITULO",
        body: "Este es el body actualizado mediante PUT"
        
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/100",{      // al lado de posts se dice el id de la publicacion que quieres actualizar
            method:"PUT",
            headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify(postEnteroActualizado)
    })
        const data=await response.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}

actualizarPost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function actualizarPostConPatch() {
    
    const postActualizado={
        body: "Este es el body mediante PATCH"
    }

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/2",{
            method:"PATCH",
            headers: {
            "Content-Type":"application/json"
            },
            body:JSON.stringify(postActualizado)
    })
        const data=await response.json()
        await console.log(data)

    } catch (error) {
        console.log(error)
    }
}

actualizarPostConPatch()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function borrarPost() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/12g2",{
            method:"DELETE"
    })
        if (!response.ok) {
            throw ErrorEvent ("NO SE PUDO BORRAR EL POST")
        }
        console.log("Post borrado correctamente")

    } catch (error) {
        console.log(error)
    }
}

borrarPost()


// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function weather(city) {
    const apikey= "71eeb53acee05f42453144685d1d4eca"

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`
    
    try {
        const response = await fetch(url)
        const data = await response.json()

        
             console.log(data)
        
    } catch (error) {
        console.log(error)
    }

}

weather("Madrid")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemon(pokemon) {
    const url= `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
            console.log(data)

        const responseSpecies= await fetch(data.species.url)
        const dataSpecies=await responseSpecies.json()
            console.log(`Especies: `, dataSpecies)

        const responseCadenaEvolutiva = await fetch(dataSpecies.evolution_chain.url)
        const cadEvolutiva = await responseCadenaEvolutiva.json()

            console.log("Cadena evolutiva: ",cadEvolutiva)
    } catch (error) {
        console.log(error)
    }
}
getPokemon("charizard")

// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API


