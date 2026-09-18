// if, else if, else

// if(si)

    let age =37

    if(age==37){
        console.log("la edad es 37")
    }

// else (si no, pues)

    if(age==37){
        console.log("la edad es 37")
    }
    else{
        console.log("no lo es")
    }

// else if (si no , si)

    if(age==37){
        console.log("la edad es 37")
    }
    else if(age==18){
        console.log("y tiene 18 encima ")
    }
    else{
        console.log("no lo es")
    }

// OPERADOR TERNARIO

    const mensaje = age==15?"tiene 15": "no tiene 15"
    console.log(mensaje)

// SWITCH

    let dia =0
    let nombreDia=undefined

    switch(dia){
        case 0:
            nombreDia="lunes"
            break
        case 3 :
            nombreDia="domingo"
            break
        default:
            nombreDia="numero de dia incorrecto"
    }

    console.log(nombreDia)