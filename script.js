
/*area de encriptado*/
function validarTexto() {
  let texto = document.getElementById("textoPorEncriptar").value;
  let regex = /^[A-Za-z\s]+$/; // solo letras mayusculas y minusculas
  if (regex.test(texto)) {
    encriptar();
  } else {
    alert("Por favor no utilice caracteres especiales ni acentos");
  }
}

/*nopos*/

function encriptar () {
  var frase = document.getElementById("textoPorEncriptar").value.toLowerCase();
  
 
  var textoPorEncriptar = frase.replace(/e/img, "enter");
    var textoPorEncriptar = textoPorEncriptar.replace(/o/img, "ober");
    var textoPorEncriptar = textoPorEncriptar.replace(/i/img, "imes");
    var textoPorEncriptar = textoPorEncriptar.replace(/a/img, "ai");
    var textoPorEncriptar = textoPorEncriptar.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textoPorEncriptar;

    
         document.getElementById("esconder").style.display = "none"
   
          
  
}


function desEncriptar () {
  var frase = document.getElementById("textoPorEncriptar").value.toLowerCase();
  
  var textoDesencriptado = frase.replace(/ufat/img, "u");
    textoDesencriptado = textoDesencriptado.replace(/ai/img, "a");
    textoDesencriptado = textoDesencriptado.replace(/imes/img, "i");
    textoDesencriptado = textoDesencriptado.replace(/ober/img, "o");
    textoDesencriptado = textoDesencriptado.replace(/enter/img, "e");

    document.getElementById("textoDesencriptado").innerHTML = textoDesencriptado;

    document.getElementById("esconder").style.display = "none"
} 


  
  function copiar() {

    var copyText = document.getElementById("textoDesencriptado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
   
    var divAlerta = document.getElementById('alerta-flotante');
    divAlerta.style.display = 'block';

    document.addEventListener('mousemove', function(e) {
      divAlerta.style.top = e.clientY + 'px';
      divAlerta.style.left = e.clientX + 'px';
    });

    setTimeout(function() {
      divAlerta.style.display = 'none';
    }, 2000);
  }


  
