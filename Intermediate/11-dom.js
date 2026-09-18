// Manajo del DOM ( Document Object Model )   *el dom es la parte de javascript que interviene con el html y css de una pagina *

// - Seleccion de elementos

// Metodos basicos (selector HTML)

const myElementById= document.getElementById("id") // devuelve el elemento como un boton con id "id"

const myElementsByClass = document.getElementsByClassName("class")

const myElementByTag = document.getElementsByTagName("tag")

// Metodos mas modernos (selector CSS)

document.querySelector(".paragraph") // hace una seleccion para encontrar el primer parrafo 

document.querySelectorAll(".paragraph") // todos los elementos 

// - Manipulacion de elementos

const title = document.getElementById("title")

title.textContent = "Hola javascript" // se le cambia el contenido de ese titulo

const container = document.querySelector(".container")
container.innerHTML="<p> Estoy cambiando el contenido html de este contenedor </p>"

// - Modificacion de atributos

const link = document.querySelector("a")
const url = link.getAttribute("href", "https://example.com")

// Comprobacion de atributos

const hasTarget = link.hasAttribute("target")

// Eliminacion de atributos

link.removeAttribute("target")

// - Interaccion con clases CSS

const box = document.querySelector(".box") // selecciona a el primer elemento con identificador css box

box.classList.add("selected")
box.classList.remove("selected")
box.classList.toggle("selected")  // toggle clicka en esa lista selected

const button = document.querySelector("button")
button.style.backgroundColor= "blue"
button.style.color= "white"
button.style.padding= "10px" //separqacion de los bordes 

// - Creacion y elimninacion de elementos

// Creacion

const newParagraph = document.createElement("p")
newParagraph.textContent = "Este es un nuevo parrafo creado desde JS"
newParagraph.style.padding= "8px"

container.appendChild(newParagraph)

const itemsList= document.querySelector("ul")
const newItem = document.createElement("li")

newItem.textContent="Nuevo elemento"

// Insertar en lugar y posicion concreto

const secondItem = itemsList.children[1]
itemsList.insertBefore(newItem,secondItem) // inserta antes del seconditem

itemsList.append(newItem) // inserta al final
itemsList.prepend(newItem) // inserta al principio

secondItem.before(newItem) // manera mas moderna para insertar antes de seconditem
secondItem.after(newItem)

// Eliminacion 

newParagraph.remove()

// Eliminacion tradicional

const parent = newParagraph.parentElement  // para acceder al padre del elemento newParagraph
parent.removeChild(newParagraph)  // manera mas antigua

// Elementos del DOM 

function showMSG(){
    alert("cLICK")
}
const sendButton = document.querySelector("button")
sendButton.addEventListener("click",showMSG) // addeventlistener escucha cuando hay un click y ejecuta la funcion de al lado

sendButton.addEventListener("click",()=>{
    alert("Clic con una arrow functyion") 
})

// Eventos comunes 

document.addEventListener("DOMContentLoaded",()=>{          // cuando toda la pagina ha cargado a nivel de elementos
    console.log("el dom esta completamente cargado")
})

sendButton.addEventListener("mouseenter", ()=>{          // cuando el raton pasa encima del boton
    sendButton.style.backgroundColor="green"
})

const form = document.querySelector("form")
form.addEventListener("submit",(event)=>{
    // Codigoo
})
