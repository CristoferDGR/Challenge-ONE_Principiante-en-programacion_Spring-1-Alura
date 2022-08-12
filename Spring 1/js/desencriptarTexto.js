var textA_textoDesencriptar = document.querySelector(".texto-usuario");

var botonDesencriptar = document.querySelector(".boton-desencriptar");
var areaTextoDesencriptado = document.querySelector(".texto-convertido");

botonDesencriptar.addEventListener("click", function() {

    if(textA_textoDesencriptar.value.length == 0){
        alert("No hay ningun valor escrito");
        return;
    }

    var textoDesencriptado = desencriptar(textA_textoDesencriptar.value);
    areaTextoDesencriptado.value = textoDesencriptado;
    ocultarImagenes();

});

function desencriptar(textoDesencriptar){
    let matrizCodigo = [["a","ai"],["e","enter"],["i","imes"],["o","ober"],["u","ufat"] ]
    textoDesencriptar = textoDesencriptar.toLowerCase();
    for(var i = 0; i < matrizCodigo.length; i++) {
        if(textoDesencriptar.includes(matrizCodigo[i][1])){
            textoDesencriptar = textoDesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);    
        }
    }
    return textoDesencriptar;
}
