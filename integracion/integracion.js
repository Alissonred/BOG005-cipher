let boton_eval = document.getElementById("eval");         // boton que evalua juego
 




 function evaluar_game() {  // funcion que evalua 
  let pos_ladron = parseInt (document.getElementById("entradaw").value);// posicion ladron (posicion en vector coins)
  let pos_detective = parseInt (document.getElementById("entrada2").value);// posicion detective (posicion en vector coins)

  let coins = [131, 151, 1646, 1649, 516, 656, 316, 161, 646, 943, 961, 522, 246, 153, 188]; // monto provisional
  let monto_ladr = coins[pos_ladron];

  let upperval= coins.sort(function(a, b){return b - a}); // ordena valores de montos
  let upperv = [upperval[0], upperval[1], upperval[2]]    // toma los 3 valors  mas
  //console.log(upperv);
  if (monto_ladr >= upperval[2])    // evalua si está dentro del rango (si sí, puede ganar ladron)
   { alert("gana oportunidad ladron");
     let distancia =  Math.abs(pos_detective - pos_ladron);
      console.log(distancia);
      if ( distancia <= 1 ||  distancia == 5) 
        {
            let p_ladron = 0;
            alert("pierde ladron");
            let p_detective = monto_ladr;
            alert("punto para dective: " + p_detective);
        }
        else 
        {
            alert("gana ladron");
            let p_ladron = monto_ladr;
            alert("pierde ladron");
            let p_detective = 0;
            alert("punto para ladron: " + p_ladron);
        }

   }
  else {
    alert("ladron pierde oportunidad");
  }
}

boton_eval.addEventListener("click", evaluar_game);// boton evalua juego 