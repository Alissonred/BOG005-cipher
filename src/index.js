import cipher from './cipher.js'; /// traer objeto cifrado donde están las funciones ppales
//console.log(cipher);

// traigo botones
var boton_codificar = document.getElementById("codificar"); // trae codificar
var boton_decodificar = document.getElementById("decodificar"); // trae codificar
////////////////////////////////////////////////////////////////////////////////////////////////////

function codificar1() {
  let string = document.getElementById("entradaw").value;  // lee entrada  /// lineas deben ir dentro de funcion
  let offset = parseInt (document.getElementById("clavew").value) ; //lee clave
  alert(cipher.encode(offset,string));
  console.log(cipher.encode(offset,string));
  document.getElementById("salida_etiq").textContent = cipher.encode(offset,string) ;/// con innerHtml tambien se puede
 }



 function decodificar1() {
  let string = document.getElementById("entradaw").value;  // lee entrada  /// lineas deben ir dentro de funcion
  let offset = parseInt (document.getElementById("clavew").value) ; //lee clave
  alert(cipher.decode(offset,string));
  console.log(cipher.decode(offset,string));
  document.getElementById("salida_etiq").textContent = cipher.decode(offset,string) ;/// con innerHtml tambien se puede



  /*   ////LEER
let entrada = document.getElementById("entradaw").value;  // lee entrada
let of= document.getElementById("clavew").value ;          //lee clave
//console.log(of);
let off= parseInt(of);
let salida = [];
let in_conv;
let letra;

  
 for (var i = 0; i <= entrada.length-1; i++) {  /// tratar de usar for of, cuenta hasta leng-1 xq cuenta el 0 al get size
 let in_asci= entrada.charCodeAt(i); // get #asci de cada letra de entrada
    if (in_asci > 64 && in_asci < 91)  // evalua si mayusculas
    {
    in_conv = (in_asci - 65 - off) %26 + 65; // conv a nuevo alf, en otro #
     }
   else if (in_asci > 96 && in_asci < 123) // evalua si minusculas
    {
    in_conv = (in_asci - 97 - off) %26 + 97; 
    }
   else if (in_asci == 32 )     // evalua espacios
    {
    in_conv = in_asci; // mantiene espacio
    }
   else { // otro caso
     in_conv = in_asci;
   }
   
    letra= String.fromCharCode(in_conv); // get letra a partir numero
    salida.push (letra);// va llenando array en cd ciclo
 }
 
 //let mm = salida.toString(); // convierte en string (por si acaso)
 let ss = salida.join(""); //// pteeee
 //alert (ss);
 document.getElementById("salida_etiq").innerHTML = ss ; */
 }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // asigno evento y funcion a botones
   boton_codificar.addEventListener("click", codificar1 ); // lee evento click de boton codificar
   boton_decodificar.addEventListener("click", decodificar1 );
  
   
//event.preventDefault //
// if entre botones   
   