let boton_grid = document.getElementById("grilla_print"); // traigo el boton
let principal = document.getElementById("objects");

  // funcion que generará nuevos valores de monto aleatorios
 /* 
    function Imagenes (ruta, width, posicion, monto) {     // se crea clase con sus propiedades
    this.ruta = ruta;
    this.width = width;
    this.posicion = posicion;
    this.monto = function (){ let montos = Math.floor(Math.random()*(2000)+ 80); console.log(montos);};//MMETODO
 } 
    // OPC 1 CREAMOS LOS OBJETOS EN UN ARRAY 
    
    var espacio1 = new Imagenes("../src/imag/partes de ciudad/estacion_de_bus-removebg-preview.png",7,1,80);
    var espacio2 = new Imagenes("../src/imag/partes de ciudad/catedral-removebg-preview.png",7,2,70);
    var espacio3 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,3,90);
     var espacio4 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,4,90);
    var espacio5 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,5,90);
    var espacio6 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,6,90);
    var espacio7 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,7,90);
    var espacio8 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,8,90);
    var espacio9 = new Imagenes("../src/imag/partes de ciudad/edificio-removebg-preview.png",7,9,90); 
    var every_spaces = [espacio1, espacio2, espacio3,  espacio4, espacio5, espacio6, espacio7, espacio8, espacio9 ]; */
  
    
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