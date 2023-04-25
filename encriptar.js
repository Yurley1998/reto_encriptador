let entrada = document.getElementById('mensaje');
let encriptar = document.getElementById('encriptar');
let desencriptar = document.getElementById('desencriptar');
let respuesta = document.getElementById('respuesta');
let bloqueError = document.getElementById('bloque-error');
let bloqueRespuesta = document.getElementById('bloque-respuesta');
let copiar = document.getElementById('copiar');

entrada.focus();

encriptar.addEventListener('click', function (e) {
    e.preventDefault();
    const mensaje = entrada.value;

    if (mensaje === "") {
        bloqueError.style.display = "flex";
        bloqueRespuesta.style.display = "none";
    } else {
        respuesta.value = encriptarTexto(mensaje);
        entrada.value = "";
        bloqueRespuesta.style.display = "flex";
        bloqueError.style.display = "none";
        entrada.focus();      

    }
})

desencriptar.addEventListener('click', function (e) {

    const mensaje = entrada.value;

    //if (mensaje == respuesta.value) {
        //bloqueRespuesta.style.display = "flex";
   // }

    if (mensaje === "") {
        bloqueError.style.display = "flex";
        bloqueRespuesta.style.display = "none";
    } else {
        respuesta.value = desencriptarTexto(mensaje);
        entrada.value = "";
        bloqueRespuesta.style.display = "flex";
        bloqueError.style.display = "none";  
        entrada.focus();      
    }
    

})

copiar.addEventListener('click', function(e) {    
    respuesta.select();
    document.execCommand('copy');
    respuesta.value = "";
    alert('copiado');
    entrada.focus();
})



function encriptarTexto(texto) {
    return texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
}

function desencriptarTexto(texto) {
    return texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
}

const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function normalizarTexto() {
    entrada.value = removeAccents(entrada.value).toLowerCase();
}

