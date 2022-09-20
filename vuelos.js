const precioVuelos = (costoVuelo,pesoTotal,costoClase)=>{
  let numeroPasajeros = Number(document.getElementById("pasajeros").value);
  let ciudadOrigen = Number(document.getElementById("ciudad").value);
  let ciudadDestino = Number(document.getElementById("ciudadD").value);
  let pesoMaleta = Number(document.getElementById("peso").value);
  let claseSilla = Number(document.getElementById("clase").value);
  
 

 
  

  if (ciudadOrigen == 8 && ciudadDestino == 0) {
    costoVuelo = 80000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 1) {
    costoVuelo = 60000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 2) {
    costoVuelo = 120000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 3) {
    costoVuelo = 150000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 4) {
    costoVuelo = 145000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 5) {
    costoVuelo = 180000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 6) {
    costoVuelo = 90000 * numeroPasajeros;
  }
  if (ciudadOrigen == 8 && ciudadDestino == 7) {
    costoVuelo = 70000 * numeroPasajeros;
  }

  if (ciudadOrigen == 0 && ciudadDestino == 8) {
    costoVuelo = 80000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino == 1) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino == 2) {
    costoVuelo = 210000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino == 3) {
    costoVuelo = 150000 * numeroPasajeros;
  }
  if (ciudadOrigen ==0 && ciudadDestino == 4) {
    costoVuelo = 60000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino == 5) {
    costoVuelo = 160000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino == 6) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 0 && ciudadDestino ==7) {
    costoVuelo = 55000 * numeroPasajeros;
  }

  if (ciudadOrigen == 1 && ciudadDestino == 8) {
    costoVuelo = 60000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 0) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 2) {
    costoVuelo = 110000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 3) {
    costoVuelo = 160000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 4) {
    costoVuelo = 96000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 5) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 6) {
    costoVuelo = 70000 * numeroPasajeros;
  }
  if (ciudadOrigen == 1 && ciudadDestino == 7) {
    costoVuelo = 65000 * numeroPasajeros;
  }

  if (ciudadOrigen == 2 && ciudadDestino == 8) {
    costoVuelo = 120000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 0) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 1) {
    costoVuelo = 210000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 3) {
    costoVuelo = 120000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 4) {
    costoVuelo = 196000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 5) {
    costoVuelo = 115000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 6) {
    costoVuelo = 90000 * numeroPasajeros;
  }
  if (ciudadOrigen == 2 && ciudadDestino == 7) {
    costoVuelo = 95000 * numeroPasajeros;
  }

  if (ciudadOrigen == 3 && ciudadDestino == 8) {
    costoVuelo = 150000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 0) {
    costoVuelo = 150000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 1) {
    costoVuelo = 160000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 2) {
    costoVuelo = 120000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 4) {
    costoVuelo = 116000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 5) {
    costoVuelo = 145000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 6) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 3 && ciudadDestino == 7) {
    costoVuelo = 84000* numeroPasajeros;
  }

  if (ciudadOrigen == 4 && ciudadDestino == 8) {
    costoVuelo = 145000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 0) {
    costoVuelo = 60000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 1) {
    costoVuelo = 96000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 2) {
    costoVuelo = 196000* numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 3) {
    costoVuelo = 116000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 5) {
    costoVuelo = 85000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 6) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 4 && ciudadDestino == 7) {
    costoVuelo = 60000 * numeroPasajeros;
  }

  if (ciudadOrigen == 5 && ciudadDestino == 8) {
    costoVuelo = 180000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 0) {
    costoVuelo = 55000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 1) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 2) {
    costoVuelo = 115000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 3) {
    costoVuelo = 145000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 4) {
    costoVuelo = 85000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino == 6) {
    costoVuelo = 75000 * numeroPasajeros;
  }
  if (ciudadOrigen == 5 && ciudadDestino ==7) {
    costoVuelo = 100000 * numeroPasajeros;
  }

  if (ciudadOrigen == 6 && ciudadDestino == 8) {
    costoVuelo = 90000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 0) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 1) {
    costoVuelo = 65000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 2) {
    costoVuelo = 90000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 3) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 4) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 5) {
    costoVuelo = 75000 * numeroPasajeros;
  }
  if (ciudadOrigen == 6 && ciudadDestino == 7) {
    costoVuelo = 60000 * numeroPasajeros;
  }

  if (ciudadOrigen == 7 && ciudadDestino == 8) {
    costoVuelo = 70000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 0) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 1) {
    costoVuelo = 70000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 2) {
    costoVuelo = 95000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 3) {
    costoVuelo = 84000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 4) {
    costoVuelo = 60000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 5) {
    costoVuelo = 100000 * numeroPasajeros;
  }
  if (ciudadOrigen == 7 && ciudadDestino == 6) {
    costoVuelo = 100000 * numeroPasajeros;
  }

  if (pesoMaleta >= 50) {
    pesoTotal = pesoMaleta * 15000;
  } else {
    pesoTotal = 0;
  }

  if (claseSilla == 0) {
    costoClase = 20000 * numeroPasajeros;
  }
  if (claseSilla == 1) {
    costoClase = 40000 * numeroPasajeros;
  }
  if (claseSilla == 2) {
    costoClase = 0 * numeroPasajeros;
  }  
  let totalPagar = 0;

  totalPagar = costoVuelo + pesoTotal + costoClase;
  let factura = document.getElementById("factura");
  factura.innerHTML =
    "Factura" +
    "<br>" +
    " " +

    "numeros de pasajeros: " +
    numeroPasajeros +
    "<br>" +
    "peso de la maleta: " +
    pesoMaleta +    
    "<br>" +
    "precio del tiquete: " +
    costoVuelo +
    "<br>" +
    "precio adicional por maleta: " +
    pesoTotal +
    "<br>" +
    "precio de la clase: " +
    costoClase +
    "<br>" +
    "el total a pagar por el vuelo es: " +
    totalPagar;
};
