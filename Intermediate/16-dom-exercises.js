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

cuerpo.append(nuevoBoton)

function crearli(){
    const linuevo=document.createElement("li")
    linuevo.textContent="Nuevo elemento"

    if(!document.querySelector("ul")== null){
        const ulcreado= document.getElementById("list")
        ulcreado.appendChild(linuevo)
    }
    else{
        const nuevoUl = document.createElement("ul")
        nuevoUl.id="list"
        nuevoUl.textContent="LISTA DE ELEMENTOS"
        nuevoUl.appendChild(linuevo)
        cuerpo.appendChild(linuevo)
    }
}
nuevoBoton.addEventListener("click",crearli)



// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const parrafo2= document.createElement("p")
parrafo2.id="deleteParagraph"
parrafo2.textContent="NUEVO PARRAFO"
cuerpo.append(parrafo2)

const boton2=document.createElement("button")
boton2.id="botonborrar"
boton2.textContent="borrar parrafo"
cuerpo.append(boton2)

boton2.addEventListener("click",()=>{
    parrafo2.remove()
})

// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const div2= document.createElement("div")
div2.id="content"
div2.textContent="algo de texto"

cuerpo.appendChild(div2)

const nuevocontenido=document.createElement("h2")
nuevocontenido.textContent="Nuevo Contenido"
div2.innerHTML=""

div2.appendChild(nuevocontenido)

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic

const boton3 = document.createElement("button")
boton3.id="greetBtn"
boton3.textContent="TE DIGO"

cuerpo.appendChild(boton3)

boton3.addEventListener("click",()=>{
    alert("!Hola¡")  
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente