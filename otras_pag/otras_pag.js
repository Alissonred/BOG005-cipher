var boton_adelante = document.getElementById("adelante"); 
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
boton_atras.addEventListener("click", camb_atras );// lee evento click de boton atras