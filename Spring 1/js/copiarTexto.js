var botonCopiar = document.querySelector(".boton-copiar-encriptacion");

botonCopiar.addEventListener("click", function(){
    var texto = document.querySelector(".texto-convertido");
    
    var copiarTexto = document.createElement("textarea");

    copiarTexto.style.position = "fixed";
    copiarTexto.style.opacity = "0";
    copiarTexto.textContent = texto.value;

    document.body.appendChild(copiarTexto);
    copiarTexto.select();
    document.execCommand("copy");
    document.body.removeChild(copiarTexto);

    ocultarTexto();
    eliminarTextoUsuario();

    alert("Texto copiado");
});

function ocultarTexto() {
    
        var mostrarImagen = document.querySelector(".area-sin-texto"); 
        mostrarImagen.classList.remove("area-ocultar");
    
        var ocultarTexto = document.querySelector("#area-con-texto");
        ocultarTexto.classList.add("area-ocultar");
    
}

function eliminarTextoUsuario(){
    var texto = document.querySelector(".texto-usuario");
    texto.value = "";
}



