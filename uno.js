/******************************************************************************
ALUMNO: FERNANDO ROMERO MONTERO
DIV : J

3)

Nos ingresan una cantidad indeterminada de estadías de vacaciones, 
validando los datos ingresados:

A.	Nombre de la empresa.
B.	Lugar (Ushuaia, Merlo o Mendoza)
C.	Temporada (Otoño, Invierno, Verano o Primavera)
D.	Cantidad de personas que viajan (1 y 42)

Informar:
1.	El lugar mas elegido.
2.	El nombre de la empresa que lleva menos pasajeros.
3.	El promedio de personas por viaje que viajan en Primavera.

Pedir datos por prompt y mostrar por document write o alert.


*******************************************************************************/
function mostrar()
{
	let nombre;
	let lugar;
	let temporada;
	let cantidadPersonas;
	let respuesta = true;
	let contadorMendoza = 0;
	let contadorMerlo = 0;
	let contadorUshuaia = 0;
	let menosPasajeros;
	let banderaMenosPasajeros = 0;
	let nombreMenosPasajeros;
	let promedioPrimavera;
	let personasPrimavera = 0;
	let contadorPrimavera = 0;
	let elLugarMasElegido;

	while(respuesta == true){
		
		nombre=prompt('INGRESE EL NOMBRE DE LA EMPRESA');

		lugar=prompt('INGRESE EL LUGAR');
		while(lugar!="ushuaia" && lugar!="merlo" && lugar!= "mendoza"){
			  lugar=prompt('ERROR, INGRESE LUGAR');

		}

		temporada=prompt('INGRESE TEMPORADA');
		while(temporada!="otoño" && temporada!="invierno" && temporada!="primavera" && temporada!="verano"){
			  temporada=prompt('ERROR, INGRESE TEMPORADA');
		}

		cantidadPersonas=prompt('INGRESE CANTIDAD DE PERSONAS');
		cantidadPersonas=parseInt(cantidadPersonas);

		while(cantidadPersonas<1 || cantidadPersonas>42){
			  cantidadPersonas=prompt('ERROR, ENTRE 1 Y 42');
			  cantidadPersonas=parseInt(cantidadPersonas);
		}

//1.	El lugar mas elegido.
		switch(lugar){
			   case "ushuaia":
				contadorUshuaia = contadorUshuaia + 1;
				break;
			   case "merlo":
				contadorMerlo = contadorMerlo + 1;
				break;
			   case "mendoza":
				contadorMendoza = contadorMendoza + 1;
				break;
		}

		if(contadorUshuaia>contadorMerlo && contadorUshuaia>contadorMendoza){
		   elLugarMasElegido = lugar;
		}
		
		if(contadorMerlo>contadorUshuaia && contadorMerlo>contadorMendoza){
		   elLugarMasElegido = lugar;
		}
		
			if(contadorMendoza>contadorUshuaia && contadorMendoza>contadorMerlo){
				elLugarMasElegido = lugar;
			 }	
		
	    
		
		
	    
		

//2.	El nombre de la empresa que lleva menos pasajeros.
		if(cantidadPersonas<menosPasajeros || banderaMenosPasajeros == 0){
			menosPasajeros = cantidadPersonas;
			nombreMenosPasajeros = nombre;
			banderaMenosPasajeros = 1;
		}

//3.	El promedio de personas por viaje que viajan en Primavera.
		if(temporada=="primavera"){
		   personasPrimavera = personasPrimavera + cantidadPersonas;
		   contadorPrimavera = contadorPrimavera + 1;
		}



		respuesta=confirm('QUIERE INGRESAR A OTRA PERSONA ??');
	}
	


		promedioPrimavera = personasPrimavera/contadorPrimavera;

		document.write('EL LUGAR MAS ELEGIDO ES ' + elLugarMasElegido + '<br>');
		document.write('NOMBRE DE LA EMPRESA QUE LLEVA MENOS PASAJEROS ' + nombreMenosPasajeros + ' CON UN TOTAL DE ' + menosPasajeros + '<br>');
		document.write('PROMEDIO DE PERSONAS QUE VIAJAN EN PRIMAVERA ' + promedioPrimavera + ' PERSONAS' + '<br>');
}




