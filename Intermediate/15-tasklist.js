
const boton = document.getElementById("button")
const list =document.getElementById("list")
const text =document.getElementById("text")

function crearTarea(){

    if(text.value === "" || text.value === " ") return

    const newElement = document.createElement("li")
    newElement.textContent =text.value

    newElement.addEventListener("click",()=>{
        newElement.remove()
    })

    newElement.addEventListener("click",()=>{
        newElement.remove
    })

    list.appendChild(newElement)
    text.value=""
}

boton.addEventListener("click",crearTarea)
text.addEventListener("keypress", (event)=>{
    if(event.key==="Enter"){
        crearTarea()
    }
})
