const precioVuelos = () => {
    let numeroPasajeros = Number(document.getElementById("pasajeros").value);
    let ciudadOrigen = document.getElementById("ciudad").value;
    let ciudadDestino = document.getElementById("ciudadD").value;
    let pesoMaleta = Number(document.getElementById("peso"));
    let claseSilla = document.getElementById("clase").value;
    let pesoTotal = 0;
    let costoVuelo = 0;
    let totalPagar =0;
    let costoClase = 0;

    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Cartago")
    {
        costoVuelo = 80.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Medellín")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Santa Marta")
    {
        costoVuelo = 120.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 150.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 145.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 180.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Bogotá" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 90.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Bogotá" && ciudadDestino == "Cali")
    {
        costoVuelo = 70.000 * numeroPasajeros;
    }

    if (ciudadOrigen == "Cartago" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 80.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Medellín")
    {
        costoVuelo =95.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Santa Marta")
    {
        costoVuelo = 210.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 150.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 160.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartago" && ciudadDestino == "Cali")
    {
        costoVuelo = 55.000 * numeroPasajeros;
    }

    if (ciudadOrigen == "Medellín" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Medellín" && ciudadDestino == "Cartago")
    {
        costoVuelo =95.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Medellín"&& ciudadDestino == "Santa Marta")
    {
        costoVuelo = 110.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Medellín" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 160.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Medellín" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 96.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Medellín" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Medellín" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 70.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Medellín" && ciudadDestino == "Cali")
    {
        costoVuelo = 65.000 * numeroPasajeros;
    }

    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 120.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Cartago")
    {
        costoVuelo =95.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Santa Marta" && ciudadDestino == "Santa Marta")
    {
        costoVuelo = 210.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 120.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 196.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 115.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 90.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Santa Marta" && ciudadDestino == "Cali")
    {
        costoVuelo = 95.000 * numeroPasajeros;
    }

    
    if (ciudadOrigen =="Cartagena" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 150.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartagena" && ciudadDestino == "Cartago")
    {
        costoVuelo =150.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Cartagena" && ciudadDestino == "Medellín")
    {
        costoVuelo = 160.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartagena"  && ciudadDestino == "Santa Marta" )
    {
        costoVuelo = 120.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Cartagena" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 116.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartagena" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 145.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartagena" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cartagena" && ciudadDestino == "Cali")
    {
        costoVuelo = 84.000 * numeroPasajeros;
    }
    
    if (ciudadOrigen =="Buenaventura"&& ciudadDestino == "Bogotá")
    {
        costoVuelo = 145.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Buenaventura" && ciudadDestino == "Cartago")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }
    if (ciudadOrigen ==  "Buenaventura" && ciudadDestino == "Medellín")
    {
        costoVuelo = 96.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Buenaventura"  && ciudadDestino == "Santa Marta" )
    {
        costoVuelo = 196.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Buenaventura" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 116.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Buenaventura" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 85.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Buenaventura" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 95.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Buenaventura" && ciudadDestino == "Cali")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }

    if (ciudadOrigen =="Nuquí" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 180.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Nuquí" && ciudadDestino == "Cartago")
    {
        costoVuelo = 55.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Nuquí" && ciudadDestino == "Medellín")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Nuquí"  && ciudadDestino == "Santa Marta" )
    {
        costoVuelo =115.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Nuquí" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 145.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Nuquí"&& ciudadDestino == "Buenaventura")
    {
        costoVuelo = 85.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Nuquí" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 75.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Nuquí" && ciudadDestino == "Cali")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }


    if (ciudadOrigen == "Barranquilla" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 90.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Barranquilla" && ciudadDestino == "Cartago")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Barranquilla" && ciudadDestino == "Medellín")
    {
        costoVuelo =65.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Barranquilla"  && ciudadDestino == "Santa Marta" )
    {
        costoVuelo = 90.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Barranquilla" && ciudadDestino == "Cartagena")
    {
        costoVuelo =  100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Barranquilla"&& ciudadDestino == "Buenaventura")
    {
        costoVuelo = 95.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Barranquilla" && ciudadDestino == "Nuquí")
    {
        costoVuelo = 75.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Barranquilla" && ciudadDestino == "Cali")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }


    if (ciudadOrigen == "Cali" && ciudadDestino == "Bogotá")
    {
        costoVuelo = 70.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cali" && ciudadDestino == "Cartago")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cali" && ciudadDestino == "Medellín")
    {
        costoVuelo = 70.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Cali"  && ciudadDestino == "Santa Marta" )
    {
        costoVuelo =  95.000* numeroPasajeros;
    }
    if (ciudadOrigen =="Cali" && ciudadDestino == "Cartagena")
    {
        costoVuelo = 84.000* numeroPasajeros;
    }
    if (ciudadOrigen == "Cali" && ciudadDestino == "Buenaventura")
    {
        costoVuelo = 60.000 * numeroPasajeros;
    }
    if (ciudadOrigen =="Cali" && ciudadDestino == "Nuquí")
    {
        costoVuelo =  100.000 * numeroPasajeros;
    }
    if (ciudadOrigen == "Cali" && ciudadDestino == "Barranquilla")
    {
        costoVuelo = 100.000 * numeroPasajeros;
    }
    

    if (pesoMaleta > 50)
    {
        pesoTotal = pesoMaleta * 15.000;
    }

    if (claseSilla == "ClasE Ejecutiva")
    {
        costoClase = 0 * numeroPasajeros; 
    }
    if (claseSilla == "ClasE Vip")
    {
        costoClase = 0 * numeroPasajeros; 
    }
    if (claseSilla == "ClasE Economica")
    {
        costoClase = 0 * numeroPasajeros; 
    }


    totalPagar = costoVuelo + pesoTotal + costoClase;

    return totalPagar;
}
