import cipher from './cipher.js'; /// traer objeto cifrado donde están las funciones ppales

// traigo botones
var boton_codificar = document.getElementById("codificar"); // trae codificar
var boton_decodificar = document.getElementById("decodificar"); // trae codificar
let boton_eval = document.getElementById("eval");         // boton que evalua juego
let boton_grid = document.getElementById("grilla_print"); // boton que genera mapa
let principal = document.getElementById("objects");       // div donde se hace el mapa

///////////////////////////////////////grilla/////////////////////////////////////////////////////
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

let coins= []
 function new_set () {       /// funcion  que genera grilla con valores aleat
  
  for (var i=0; i <= lugares.length -1 ; ++i) {      /// revisar la condicion
    //alert("entro for");
      let montos = Math.floor(Math.random()*(2000)+ 80);
      //console.log(montos);
      lugares[i][1] = montos; // buscar por que el error
      console.log(lugares[i][1]);
      
      let creadiv = document.createElement("div") ;//// para crear etiquetas div
      let creaimag = document.createElement("img"); // para crear etiquetas imagen
      creadiv.setAttribute("class","foto");
      creaimag.setAttribute("class","imagenes");
      creadiv.innerHTML=lugares[i][1];
      creaimag.setAttribute("src",lugares[i][0]); // asigna atributos a los elem creados
      principal.appendChild(creadiv); //agrega ese elemento al final
      principal.appendChild(creaimag); //agrega ese elemento al final
      let valores = lugares [i][1];
      //console.log(valores); 
      coins.push (valores);
      console.log(coins); 
  }
  //return coins;
 alert("fin for");
}  

///////////////////////////////////////code-decode////////////////////////////////////////////////////

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

///////////////////////////////////////////eval game///////////////////////////////////////////////////////////
function evaluar_game() {  // funcion que evalua el juego
  let pos_ladron = parseInt (document.getElementById("entradaw").value);// posicion ladron (posicion en vector coins)
  let pos_detective = parseInt (document.getElementById("entrada2").value);// posicion detective (posicion en vector coins)

  //let coins = [131, 151, 1646, 1649, 516, 656, 316, 161, 646, 943, 961, 522, 246, 153, 188]; // monto provisional
  let monto_ladr = coins[pos_ladron];

  let upperval= coins.sort(function(a, b){return b - a}); // ordena valores de montos
  let upperv = [upperval[0], upperval[1], upperval[2]]    // toma los 3 valors  mas
  //console.log(upperv);
  let distancia =  Math.abs(pos_detective - pos_ladron);
  console.log(distancia);
  if (monto_ladr >= upperval[2])    // evalua si está dentro del rango (si sí, puede ganar ladron)
   { //alert("gana oportunidad ladron");
     let distancia =  Math.abs(pos_detective - pos_ladron);
      console.log(distancia);
      if ( distancia <= 1 ||  distancia == 5) 
        {
            let p_ladron = 0;
            //alert("pierde ladron");
            let p_detective = monto_ladr;
            alert("punto para dective: " + p_detective);
            
        }
        else 
        {
            alert("gana ladron");
            let p_ladron = monto_ladr;
            let p_detective = 0;
            alert("punto para ladron: " + p_ladron);
        }
   }

  else {
    alert("ladron pierde oportunidad");
    if ( distancia <= 1 ||  distancia == 5) 
        {
            let p_ladron = 0;
            //alert("pierde ladron");
            let p_detective = monto_ladr;
            alert("punto para dective: " + p_detective);
        }
  }
  //document.getElementById("punt_ladron").textContent =  p_ladron;/// ahí escriba ...con innerHtml tambien se puede
  //document.getElementById("punt_detective").textContent = p_detective;/// ahí escriba ...con innerHtml tambien se puede
}

   /////////////////////////////////////////////////////////////////////////////////////////////////////////////
   // asigno evento y funcion a botones
   boton_codificar.addEventListener("click", codificar1 ); // lee evento click de boton codificar
   boton_decodificar.addEventListener("click", decodificar1 );// lee evento click de boton decodificar
   boton_eval.addEventListener("click", evaluar_game);// boton evalua juego 
   boton_grid.addEventListener("click", new_set);// asigno evento al boton que genera grilla
 
   