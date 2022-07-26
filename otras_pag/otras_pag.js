

//.....................pag 4 (para mapa).....................................................................................
let boton_grid = document.getElementById("grilla_print"); // traigo el boton
let principal = document.getElementById("objects");
// OPC 2 CREAMOS ARRAY CON ARRAYS QUE CONTENGAN PROP DE CU
    var lugares =new Array();
     lugares[0]= ["../src/imag/partes de ciudad/estacion_de_bus-removebg-preview.png", 1 ]
     lugares[1]= ["../src/imag/partes de ciudad/banco-removebg-preview.png", 2 ]
     lugares[2]= ["../src/imag/partes de ciudad/catedral-removebg-preview.png", 3 ]
     lugares[3]= ["../src/imag/partes de ciudad/edificio-removebg-preview.png", 4 ]
     lugares[4]= ["../src/imag/partes de ciudad/fabrica-removebg-preview.png", 4 ]
     lugares[5]= ["../src/imag/partes de ciudad/hospital-removebg-preview.png", 4 ]
     lugares[6]= ["../src/imag/partes de ciudad/hotel-removebg-preview.png", 4 ]
     lugares[7]= ["../src/imag/partes de ciudad/iglesia-removebg-preview.png", 4 ]
     lugares[8]= ["../src/imag/partes de ciudad/parque-removebg-preview.png", 4 ]
     lugares[9]= ["../src/imag/partes de ciudad/tienda_1-removebg-preview.png", 4 ]
     lugares[10]= ["../src/imag/partes de ciudad/vivienda-removebg-preview.png", 4 ]
     lugares[11]= ["../src/imag/partes de ciudad/estacion_de_bus-removebg-preview.png", 1 ]
     lugares[12]= ["../src/imag/partes de ciudad/hospital-removebg-preview.png", 4 ]
     lugares[13]= ["../src/imag/partes de ciudad/hotel-removebg-preview.png", 4 ]
     lugares[14]= ["../src/imag/partes de ciudad/iglesia-removebg-preview.png", 4 ]


function new_set () {       

        for (i=0;lugares.length;++i) {
            let montos = Math.floor(Math.random()*(2000)+ 80);
            lugares[i][1] = montos;
            console.log(lugares[i][1]);
            let creadiv = document.createElement("div") ;//// para crear etiquetas div
            let creaimag = document.createElement("img"); // para crear etiquetas imagen
            creadiv.setAttribute("class","foto");
            creaimag.setAttribute("class","imagenes");
            //lugares[i][1]+= lugares[i][1];
            creadiv.innerHTML=lugares[i][1];
            creaimag.setAttribute("src",lugares[i][0]); // asigna atributos a los elem creados
            principal.appendChild(creadiv); //agrega ese elemento al final
            principal.appendChild(creaimag); //agrega ese elemento al final
           // creaimag.innerHTML(every_spaces[i]);

        } 
    
}

boton_grid.addEventListener("click", new_set);// asigno evento al boton
//............................................................................................................................


//..............de index y cipher.............................................................................................
/* import cipher from './cipher.js'; /// traer objeto cifrado donde están las funciones ppales

// traigo botones
var boton_codificar = document.getElementById("codificar"); // trae codificar
var boton_decodificar = document.getElementById("decodificar"); // trae codificar


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

   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // asigno evento y funcion a botones
   boton_codificar.addEventListener("click", codificar1 ); // lee evento click de boton codificar
   boton_decodificar.addEventListener("click", decodificar1 );// lee evento click de boton decodificar


 */






/* var boton_adelante = document.getElementById("adelante"); 
var boton_atras = document.getElementById("atras"); 

function camb_adelante() {
    let ocultar_pag1= document.getElementById("pag1").style.display;  // inicializa en css mostrada
    let ocultar_pag2= document.getElementById("pag2").style.display;  // inicializa en css oculta
    let ocultar_pag3= document.getElementById("pag3").style.display;  // inicializa en css oculta
    let ocultar_pag4= document.getElementById("pag4").style.display;  // inicializa en css oculta
    let ocultar_pag5= document.getElementById("pag5").style.display;  // inicializa en css oculta
    let ocultar_pag6= document.getElementById("pag6").style.display;  // inicializa en css oculta

  if ( ocultar_pag1) {            //si pag1 es mostrada
    ocultar_pag1= !ocultar_pag1;  //oculta pag1
    ocultar_pag2 = !ocultar_pag2; //muestra pag2
    } 
  else if(ocultar_pag2){          //si pag2 es mostrada
    ocultar_pag2 = !ocultar_pag2; //oculta pag2
    ocultar_pag3 = !ocultar_pag3; //muestra pag3
    }
 else if(ocultar_pag3){           //si pag3 es mostrada
    ocultar_pag3 = !ocultar_pag3; // oculta pag3
    ocultar_pag4 = !ocultar_pag4; //muestra pag4
    }
else if(ocultar_pag4){            //si pag4 es mostrada
    ocultar_pag4 = !ocultar_pag4; //oculta pag4
    ocultar_pag5 = !ocultar_pag5; // muestra pag5
    }
else if(ocultar_pag5){                //si pag5 es mostrada
        ocultar_pag5 = !ocultar_pag5; //oculta pag5
        ocultar_pag6 = !ocultar_pag6; // muestra pag6
    }
}


function camb_atras() {
    let ocultar_pag1= document.getElementById("pag1").style.display;  // inicializa en css mostrada
    let ocultar_pag2= document.getElementById("pag2").style.display;  // inicializa en css oculta
    let ocultar_pag3= document.getElementById("pag3").style.display;  // inicializa en css oculta
    let ocultar_pag4= document.getElementById("pag4").style.display;  // inicializa en css oculta
    let ocultar_pag5= document.getElementById("pag5").style.display;  // inicializa en css oculta
    let ocultar_pag6= document.getElementById("pag6").style.display;  // inicializa en css oculta


  if(ocultar_pag2){               //si pag2 es mostrada
    ocultar_pag2 = !ocultar_pag2; //oculta pag2
    ocultar_pag1 = !ocultar_pag1; //muestra pag1
    }
 else if(ocultar_pag3){           //si pag3 es mostrada
    ocultar_pag3 = !ocultar_pag3; // oculta pag3
    ocultar_pag2 = !ocultar_pag2; //muestra pag2
    }
else if(ocultar_pag4){            //si pag4 es mostrada
    ocultar_pag4 = !ocultar_pag4; //oculta pag4
    ocultar_pag3 = !ocultar_pag3; // muestra pag3
    }
else if(ocultar_pag5){               //si pag5 es mostrada
        ocultar_pag5 = !ocultar_pag5; //oculta pag5
        ocultar_pag4 = !ocultar_pag4; // muestra pag6
    }
}


boton_adelante.addEventListener("click", camb_adelante ); // lee evento click de boton adelangte
boton_atras.addEventListener("click", camb_atras );// lee evento click de boton atras */