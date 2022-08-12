var textA_textoEncriptar = document.querySelector(".texto-usuario");

var botonEncriptar = document.querySelector(".boton-encriptar");
var areaTextoEncriptado = document.querySelector(".texto-convertido");

botonEncriptar.addEventListener("click", function() {

    if(textA_textoEncriptar.value.length == 0){
        alert("No hay ningun valor escrito");
        return;
    }

    var textoEncriptado = encriptar(textA_textoEncriptar.value);
    areaTextoEncriptado.value = textoEncriptado;
    ocultarImagenes();
});



function encriptar(textoEncriptar){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ]
    textoEncriptar = textoEncriptar.toLowerCase();
    for(let i = 0; i < matrizCodigo.length; i++) {
        if(textoEncriptar.includes(matrizCodigo[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);    
        }
    }
    return textoEncriptar;
}

function ocultarImagenes(){
    var ocultarImagen = document.querySelector(".area-sin-texto"); 
    ocultarImagen.classList.add("area-ocultar");

    var mostrarTexto = document.querySelector("#area-con-texto");
    mostrarTexto.classList.remove("area-ocultar");
}
