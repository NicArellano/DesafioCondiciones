//Desafio 1


const agregarBorde = () => {
    let imagen = document.querySelector("#boton-sekiro")
    let borde = "2px solid red"
     
    if(imagen.style.border == borde) {
        imagen.style.border = "0px" 
    } else {
        imagen.style.border = borde
    }

}

//Desafio 2

const verificarCantidad = () => {
    let gif1  = parseInt(document.querySelector("#input1").value)
    let gif2  = parseInt(document.querySelector("#input2").value)
    let gif3  = parseInt(document.querySelector("#input3").value)
    let mensaje = document.querySelector("#parrafo-stickers")
    let total = gif1 + gif2 + gif3 

    if(total > 10) {
        mensaje.innerHTML = "Llevas demasiados stickers"  
    } else { mensaje.innerHTML = "Llevas " + total  + " stickers"

    }
}





//Desafio 3

const ingresarPassword = () => {
    let select1 = document.querySelector("#primer").value
    let select2 = document.querySelector("#segundo").value
    let select3 = document.querySelector("#tercero").value
    let respuesta = document.querySelector("#parrafo-password")
    let password = select1 + select2 + select3
    let contraseña1 = 911
    let contraseña2 = 714

    if(password == contraseña1 ) {
        respuesta.innerHTML = "password 1 correcto"
    } else if (password == contraseña2)
     { respuesta.innerHTML = "password 2 correcto" 

    } else {
        respuesta.innerHTML = "password incorrecto"
    }


}

