function encriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
                        
    if (texto.legth != 0 ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto encriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/muñeco.png";
    } else {
        muñeco.src = "./img/muñeco.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encotrado";
        parrafo.textContent = "Ingresa el texto";
        alert("Debes ingresar algún texto");
    }
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muñeco = document.getElementById("muñeco");

    let textoCifrado = texto 
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");
    
    if (texto.legth != 0 ) {
        document.getElementById("texto").value = textoCifrado;
        tituloMensaje.textContent = "texto desencriptado con éxito";
        parrafo.textContent = "";
        muñeco.src = "./img/muñeco.jpg";
    } else {
        muñeco.src = "./img/muñeco.jpg";
        tituloMensaje.textContent = "Ningún mensaje fue encotrado";
        parrafo.textContent = "Ingresa el texto";
        alert("Debes ingresar algún texto");
    }
    

}