const cipher = {


encode(offset, string){

let in_conv;
let salida = [];
let letra;

  
 for (var i = 0; i <= string.length-1; i++) {  /// tratar de usar for of, cuenta hasta leng-1 xq cuenta el 0 al get size
 let in_asci= string.charCodeAt(i); // get #asci de cada letra de string
    if (in_asci > 64 && in_asci < 91)  // evalua si mayusculas
    {
    in_conv = (in_asci - 65 + offset) %26 + 65; // conv a nuevo alf, en otro #
     }
   else if (in_asci > 96 && in_asci < 123) // evalua si minusculas
    {
    in_conv = (in_asci - 97 + offset) %26 + 97; 
    }
   else if (in_asci == 32 )     // evalua espacios
    {
    in_conv = in_asci; // mantiene espacio
    }
   else { // otro caso
     in_conv = in_asci;
   }
    letra= String.fromCharCode(in_conv); // get letra a partir numero
    salida.push (letra);// va llenando array en cd ciclo */
 }
 let ss = salida.join("");

  return ss;

},
 
decode(offset, string){

  let in_conv;
  let salida = [];
  let letra;
  
    
   for (var i = 0; i <= string.length-1; i++) {  /// tratar de usar for of, cuenta hasta leng-1 xq cuenta el 0 al get size
   let in_asci= string.charCodeAt(i); // get #asci de cada letra de string
      if (in_asci > 64 && in_asci < 91)  // evalua si mayusculas
      {
      in_conv = (in_asci - 65 - offset) %26 + 65; // conv a nuevo alf, en otro #
       }
     else if (in_asci > 96 && in_asci < 123) // evalua si minusculas
      {
      in_conv = (in_asci - 97 - offset) %26 + 97; 
      }
     else if (in_asci == 32 )     // evalua espacios
      {
      in_conv = in_asci; // mantiene espacio
      }
     else { // otro caso
       in_conv = in_asci;
     }
      letra= String.fromCharCode(in_conv); // get letra a partir numero
      salida.push (letra);// va llenando array en cd ciclo */
   }
   let ss = salida.join("");
  
   return ss;
  
  }


 

};
/// 
export default cipher;
