
/*
* Sección de variables:

*/
const $button_encrypt = document.getElementById("encrypt_button");
const $button_decrypt = document.getElementById("decrypt_button");
const $button_copy = document.getElementById("copy_button");
const $input_text = document.getElementById("input");
const $answer_panel = document.getElementById("answer_panel");
const $error_panel = document.getElementById("error_panel");
const $answer_text = document.getElementById("answer_text");
const $error_text = document.getElementById("errot_text");
const $button_switch = document.getElementById("switch_button");


// palabras a encriptar
const dictionary = {
  "e": "enter",
  "i": "imes",
  "a": "ai",
  "o": "ober",
  "u": "ufat"
};


/*
* Sección de funciones:
 si no recibe parámetros, se dejan los paréntesis vacíos.
*/
function show(booleano) {
  

  if (booleano) {
    $answer_panel.style.display = "flex";
    $button_switch.style.display = "block";
    $error_panel.style.display = "none";
  } else {
   
    $answer_panel.style.display = "none";
    $button_switch.style.display = "none";
    $error_panel.style.display = "flex";
  }
}

function encrypt(text) {

  // pasar a minúsculas
  text = text.toLowerCase();

  // pasar a un array de caracteres
  var characters = text.split("");

  // revizar con el  diccionario
  var encryptedText = characters.map(function (letter) {
    return dictionary[letter] || letter;
  });

  // Unir de nuevo el array en una cadena
  encryptedText = encryptedText.join("");
  return encryptedText;
}

function decrypt(text) {

  // pasar a minúsculas
  var decryptedText = text.toLowerCase();

  // pasar cada palabra según el desafio
  decryptedText = decryptedText.replace(/ufat/g, "u");
  decryptedText = decryptedText.replace(/ober/g, "o");
  decryptedText = decryptedText.replace(/ai/g, "a");
  decryptedText = decryptedText.replace(/imes/g, "i");
  decryptedText = decryptedText.replace(/enter/g, "e");

  return decryptedText;
}

function showError(text) {

  // Escribir el texto de error y mostrar el elemento
  $error_text.innerHTML = text;
  $error_text.style.display = "block";
}
function hideError() {

  // Ocultar el elemento de error
  $error_text.style.display = "none";
}

$button_encrypt.addEventListener("click", function () 
{
  // Si no se ingresa texto mostrar error

  if ($input_text.value == "") {
    showError("No ingresaste ningún texto");
    show(false);
  } else {

    // Si se ingreso texto: encriptar el texto y mostrar el panel la respuesta
    hideError();
    $answer_text.innerHTML = encrypt($input_text.value);
    show(true);
  }

  
});
$button_decrypt.addEventListener("click", function () 
{
  // Si no se ingresa texto mostrar error
  if ($input_text.value == "") {
    show(false);
    showError("No ingresaste ningún texto");
  } else {
    // Si no está vacío, desencriptar el texto y mostrar el panel de respuesta
    hideError();
    $answer_text.innerHTML = decrypt($input_text.value);
    show(true);
  
  }

});

$button_copy.addEventListener("click", function () {
  
  // Copiar el texto de la respuesta

  navigator.clipboard.writeText($answer_text.innerHTML);
});
$button_switch.addEventListener("click", function () {
  var backup = $input_text.value;
// espero haya quedado bien :D
});