/*
Clase 71 - DOM
Vídeo: https://youtu.be/iJvLAZ8MJ2E?t=23010
*/

// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página

const titulo=document.getElementById("title")

document.addEventListener("DOMContentLoaded",()=>{          // cuando toda la pagina ha cargado a nivel de elementos
    titulo.textContent = "¡Hola Mundo!"
})


// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL

const cuerpo = document.querySelector("body")
const imagen= document.createElement("img")

imagen.id="myImage"

imagen.src="/home/alumno/Escritorio/Casa/Curso_JAVASCRIPT/Intermediate/Screenshot_20260918_134319.png"

cuerpo.appendChild(imagen)



// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página

const divNuevo = document.createElement("div")
divNuevo.id="box"

cuerpo.appendChild(divNuevo)

document.addEventListener("DOMContentLoaded",()=>{          // cuando toda la pagina ha cargado a nivel de elementos
    divNuevo.className="resaltado"
})



// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul

const nuevoParrafo = document.createElement("p")

nuevoParrafo.id="paragraph"
nuevoParrafo.textContent="soy un parrafo azul"

nuevoParrafo.style.color="blue"

cuerpo.appendChild(nuevoParrafo)



// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const nuevoBoton=document.createElement("button")
nuevoBoton.id="botonli"
nuevoBoton.textContent="crear elemento"

cuerpo.appendChild(nuevoBoton)

function crearli(){
    const linuevo=document.createElement("li")
    linuevo.textContent="Nuevo elemento"
    

}

addEventListener




// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente