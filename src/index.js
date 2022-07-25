import cipher from './cipher.js'; /// traer objeto cifrado donde están las funciones ppales

// traigo botones
var boton_codificar = document.getElementById("codificar"); // trae codificar
var boton_decodificar = document.getElementById("decodificar"); // trae codificar
var boton_denuevo = document.getElementById("again"); // trae codificar

////////////////////////////////////////////////////////////////////////////////////////////////////

function codificar1() {
  let string = document.getElementById("entradaw").value;  // lee entrada  /// lineas deben ir dentro de funcion
  let offset = parseInt (document.getElementById("clavew").value) ; //lee clave
  //alert(cipher.encode(offset,string));
  //console.log(cipher.encode(offset,string));
  document.getElementById("salida_etiq").textContent = cipher.encode(offset,string) ;/// con innerHtml tambien se puede
 }

 function decodificar1() {
  let string = document.getElementById("entradaw").value;  // lee entrada  /// lineas deben ir dentro de funcion
  let offset = parseInt (document.getElementById("clavew").value) ; //lee clave
  //alert(cipher.decode(offset,string));
  //console.log(cipher.decode(offset,string));
  document.getElementById("salida_etiq").textContent = cipher.decode(offset,string) ;/// ahí escriba ...con innerHtml tambien se puede
 }
 function refresh() {
  alert("¿Deseas volver a empezar? ");
  string= "";
  offset=null;
  document.getElementById("salida_etiq").textContent = "";
  //let resetear = document.getElementById("corp").value = " ";
  
 }
   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // asigno evento y funcion a botones
   boton_codificar.addEventListener("click", codificar1 ); // lee evento click de boton codificar
   boton_decodificar.addEventListener("click", decodificar1 );// lee evento click de boton decodificar
   boton_denuevo.addEventListener("click", refresh );// lee evento click refrescar
  
 
   