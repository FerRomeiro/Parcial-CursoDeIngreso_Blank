/*Ejercicio 3
ALUMNO: FERNANDO ROMERO MONTERO
DIV: J


Un aficionado a las cartas coleccionables desea organizar su coleccion, 
para esto necesita 
ingresar en un programa:
nombre, tipo (validar monstruo, arma, magica, trampa), rareza validar
 (comun, rara, rarisima,
legendaria), precio (validar entre 250$ y 5000$) y cantidad del mismo tipo de carta 
(no menor a 1), 
dejar ingresar hasta que el usuario quiera e informar lo siguiente:
A) de los distintos tipos de cartas, la cantidad total de cada tipo
B) el nombre de la carta mas repetida de cada tipo
C) de las cartas rarisimas y legendarias, la que mas precio tiene y su nombre
D) el valor de la coleccion entera
E) informar el porcentaje de cartas de cada tipo de rareza (ejemplo 25% de cartas comunes, 25% raras, 
25% rarisimas 25% legendarias)

*/

function mostrar(){

	let nombre;
	let tipo;
	let rareza;
	let precio;
	let cantidad;
	let respuesta=true;

	let  contadorMonstruos = 0;
	let contadorArmas = 0;
	let contadorMagicas = 0;
	let contadorTrampas = 0;

	let contador = 0;

	let precioMayorR = 0;
	let precioMayorL = 0;
	let nombreL;
	let nombreR;
	let banderaL = 0;
	let banderaR = 0;

	let valorColeccionEntera = 0;

	let contadorComun = 0;
	let contadorRara = 0;
	let contadorRarisima = 0;
	let contadorLegendaria = 0;
	let porcentajeTotal;
	let porcentajeC;
	let porcentajeL;
	let porcentajeRari;
	let porcentajeR;
	let mensaje;




	while(respuesta==true){
		  
		nombre=prompt('INGRESE NOMBRE');

		tipo=prompt('INGRESE TIPO');
		while(tipo!='monstruo' && tipo!='arma' && tipo!='magica' && tipo!='trampa'){
			 tipo=prompt('ERROR');
		}

		rareza=prompt('INGRESE RAREZA');
		while(rareza!='comun' && rareza!='rara' && rareza!='rarisima' && rareza!= 'legendaria'){
			  rareza=prompt('ERROR');
		}

		precio=prompt('INGRESE PRECIO');
		precio=parseInt(precio);

		while(precio<250 || precio>5000){
			  precio=prompt('ERROR');
			  precio=parseInt(precio);
		}

		cantidad=prompt('INGRESE CANTIDAD');
		cantidad=parseInt(cantidad);

		while(cantidad<1){
			cantidad=prompt('error');
			cantidad=parseInt(cantidad);
		}

		//A) de los distintos tipos de cartas, la cantidad total de cada tipo
		switch(tipo){
			case 'arma':
				contadorArmas =contadorArmas + 1;
				break;
			case 'magica':
				contadorMagicas = contadorMagicas + 1;
				break;
			case 'monstruo':
				contadorMonstruos = contadorMonstruos + 1;
				break;
			case 'trampa':
				contadorTrampas = contadorTrampas + 1;
				break;
		}





		//C) de las cartas rarisimas y legendarias, la que mas precio tiene y 
		//su nombre

		switch(rareza){
			case 'rarisima':
				if(banderaR == 0 || precio>precioMayorR){
			     precioMayorR = precio;
				 nombreR = nombre;
				 banderaR = 1;
				}
				 break;
		    case 'legendaria':
				if(banderaL == 0 || precio>precioMayorL){
				precioMayorL = precio;
				nombreL = nombre;
				banderaR = 1;
				}
				break;
		}
		
		if(precioMayorL>precioMayorR){
		   mensaje = ('la que mas precio tiene es ' + precioMayorL + ' y su noombre es ' + nombreL + '<br>')
		}
		else{
			if(precioMayorR>precioMayorL){
				mensaje= ('la que mas precio tiene es ' + precioMayorR + ' y su nombre es ' + nombreR + '<br>');
			}
		}


		//D) el valor de la coleccion entera
		if(precio>249 && precio<5000){
		   valorColeccionEntera = valorColeccionEntera + precio;
		}

		//E) informar el porcentaje de cartas de cada tipo de rarez
		// (ejemplo 25% de cartas comunes, 25% raras, 
        //25% rarisimas 25% legendarias)

		if(rareza=='comun'){
			contadorComun = contadorComun + 1;
		}
		else{
			if(rareza=='legendaria'){
			   contadorLegendaria = contadorLegendaria + 1;
			}
			else{
				if(rareza=='rara'){
				   contadorRara = contadorRara + 1;
				}
				else{
					if(rareza=='rarisima'){
						contadorRarisima = contadorRarisima + 1;
					}
				}
			}
		}

		






		respuesta=confirm('OTRA CARTA?');
	}

	porcentajeTotal = contadorLegendaria + contadorRara + contadorRarisima + contadorComun;
	porcentajeL = (contadorLegendaria*100)/porcentajeTotal;
	porcentajeR = (contadorRara*100)/porcentajeTotal;
	porcentajeRari=(contadorRarisima*100)/porcentajeTotal;
	porcentajeC=(contadorComun*100)/porcentajeTotal;

	document.write('CANTIDAD DE CADA TIPO>>  ARMAS: '+ contadorArmas + ' MONSTRUOS: ' + contadorMonstruos + ' MAGICA: ' + contadorMagicas + ' TRAMPA: ' + contadorTrampas + '<br>');
	document.write(mensaje);
	document.write
	document.write('EL VALOR DE LA COLECCION ENTERA ES ' + valorColeccionEntera + '<br>');
	document.write('EL PORCENTAJE TOTAL DE LAS CARTAS ES DE ' + porcentajeTotal + '% CON UN PORCENTAJES DE legendarias '+ porcentajeL + '% DE RARAS ' + porcentajeR + '% DE RARISIMAS ' + porcentajeRari + '% Y DE COMUN ' + porcentajeC +'%' + '<br>');
}









































/*Ejercicio 2

ALUMNO: FERNANDO ROMERO MONTERO
DIV J

Se pide gestionar los ingresos en pesos de un club de fútbol.
El equipo tiene ingresos por "ENTRADAS", "INDUMENTARIA", "ACCESORIOS".
Se solicita Tipo de Ingreso, ya mencionados anteriormente y Valor de Ingreso. 
(Puede NO EXISTIR ingresos en alguna de las categorías)

A) Ingreso BRUTO del club.
B) Ingreso NETO del club después de pagar un impuesto del 18% sobre el BRUTO.
C) Del total de ingresos se sabe que un 35% proviene de los socios, se compran dólares al costo de
$220c/u con ese monto, informar cuantos dolares se compraron.
D) Determinar si se recaudó más por INDUMENTARIA o ACCESORIOS. Informando la diferencia del mayor con el menor.
(Ej: Se recaudó $x más de ACCESORIOS)




*/
/*

function mostrar(){

	let tipoIngreso;
	let valorIngreso;

	let valorIngresoTotal = 0;

	let ingresoBruto;

	let dolaresComprados;
	let valorDelDolar = 220;

	let acumuladorAccesorios = 0;
	let acumuladorIndumentarias = 0;
	let diferencia;

	let respuesta=true;



	while(respuesta==true){

		tipoIngreso=prompt('INGRESE TIPO DE INGRESO');
		while(tipoIngreso!='entradas' && tipoIngreso!='indumentarias' && tipoIngreso!='accesorios'){
			  tipoIngreso=prompt('ERROR');
		}
		
		valorIngreso=prompt('INGRESE VALOR DEL INGRESO');
		valorIngreso=parseInt(valorIngreso);

		while(valorIngreso<0){
			  valorIngreso=prompt('error');
			  valorIngreso=parseInt(valorIngreso);
		}

		if(valorIngreso>0){
		   valorIngresoTotal = valorIngresoTotal + valorIngreso;
		}

		switch(tipoIngreso){
			    case 'accesorios':
			    acumuladorAccesorios = acumuladorAccesorios + valorIngreso;
				break;
			    case 'indumentarias':
				acumuladorIndumentarias = acumuladorIndumentarias + valorIngreso;
				break;


		}



		respuesta=confirm('OTRO INGRESO?');
	}

		if(acumuladorAccesorios>acumuladorIndumentarias){
		   diferencia=(acumuladorAccesorios-acumuladorIndumentarias);
		   mensaje = 'accesorios';

		}
		else{
			if(acumuladorIndumentarias>acumuladorAccesorios){
			   diferencia=(acumuladorIndumentarias-acumuladorAccesorios);
			   mensaje = 'indumentarias';
			}
		}




		ingresoBruto = (valorIngresoTotal*18)/100;
		
		dolaresComprados = ((valorIngresoTotal*35)/100)*valorDelDolar;

		document.write('EL INGRESO BRUTO ES ' + valorIngresoTotal + '<br>');
		document.write('VALOR INGRESO BRUTO DESPUES DEL 18% EN IMPUESTOS ' + ingresoBruto + '<br>');
		document.write('DOLARES COMPREADOS SON ' + dolaresComprados);
		document.write('SE RECAUDO ' + diferencia + '$' + 'mas de ' + mensaje + '<br>' );

}






*/














/*

ALUMNO: FERNANDO ROMERO  MONTERO
DIVISION: J
Ejercicio 1

Se pide cargar la ficha médica para 11 jugadores de fútbol.
Se solicita Nombre, Edad, Peso(ej: 60.5kg) y Altura(ej: 1.65mt).
A) Nombre del jugador más joven.
B) El peso del jugador más alto.
C) Promedio de altura del equipo.
D) Promedio de peso del equipo.
E) Cantidad de jugadores que superen el promedio de altura y de peso del equipo.
// E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.
*/
/*
function mostrar(){

	let nombre;
	let edad;
	let peso;
	let altura;
	let respuesta = 0;

	let nombreJugadorMasJoven;
	let jugadorMasJoven;
	let banderaJugadorMasJoven = 0;

	let jugadorMasAlto;
	let pesoJugadorMasAlto;
	let banderaJugadorMasAlto = 0;

	let promedioAlturaEquipo;
	let totalJugadores = 11;
	let acumuladorAlturas = 0;

	let promedioPesoEquipo;
	let acumuladorPeso = 0;

	let cantidadJugadoresSuperanAlturaP = 0;
	let cantidadJugadoresSuperanPesoP= 0;

	let cantidadJugadoresSuperanMetroS = 0;
	let cantidadJugadoresSuperanPeso= 0;




	while(respuesta < 11){

		nombre=prompt('ingrese nombre');

		edad=prompt('ingrese edad')
		edad=parseInt(edad);

		peso=prompt('ingrese peso');
		peso=parseFloat(peso);

		while(peso<0)
		     peso=('error');
			 peso=parseFloat(peso);

		altura=prompt('ingrese altura');
		altura=parseFloat(altura);

		while(altura<0){
			altura=prompt('error');
			altura=parseFloat(altura);
		}

		if(banderaJugadorMasJoven == 0 || edad<jugadorMasJoven ){
		   jugadorMasJoven = edad;
		   nombreJugadorMasJoven = nombre;
		   banderaJugadorMasJoven = 1;
		}

		if(banderaJugadorMasAlto == 0 || altura>jugadorMasAlto){
		   jugadorMasAlto = altura;
		   pesoJugadorMasAlto = peso;
		   banderaJugadorMasAlto = 1;
		}

		if(altura>0){
		   acumuladorAlturas = acumuladorAlturas + altura;
		}

		if(peso>0){
		   acumuladorPeso = acumuladorPeso + peso;
		}

// E) Cantidad de jugadores que superen 1.7 mt y pesen mas de 85 kg.

		if(altura>1.70 && peso>85){
			cantidadJugadoresSuperanMetroS = cantidadJugadoresSuperanMetroS + 1;
			cantidadJugadoresSuperanPeso = cantidadJugadoresSuperanPeso + 1;
		}


		respuesta = respuesta + 1;
	}

	promedioAlturaEquipo = (acumuladorAlturas/totalJugadores);

	promedioPesoEquipo = (acumuladorPeso/totalJugadores);

	if(altura>promedioAlturaEquipo){
	   cantidadJugadoresSuperanAlturaP = cantidadJugadoresSuperanAlturaP + 1;
	}

	if(peso>promedioPesoEquipo){
	   cantidadJugadoresSuperanPesoP = cantidadJugadoresSuperanPesoP + 1;
	}

	document.write('CANTIDAD DE JUGADORES QUE SUPERAN 1.7 SON ' + cantidadJugadoresSuperanMetroS + ' Y CANTIDAD DE JUGADORES QUE PESAN MAS 85 KG SON ' + cantidadJugadoresSuperanPeso + '<br>');

	document.write('NOMBRE DEL JUGADOR MAS JOVEN ES ' + nombreJugadorMasJoven + '<br>');
	document.write('EL PESO DEL JUGADOR MAS ALTO ES ' + pesoJugadorMasAlto + '<br>');
	document.write('PROMEDIO DE ALTURA DEL EQUIPO: ' + promedioAlturaEquipo + '<br');
	document.write('PROMEDIO DE PESO DEL EQUIPO: ' + promedioPesoEquipo + '<br');
	document.write('CANTIDAD DE JUGADORES QUE SUPERAN ' )
}


*/




























/*Ejercicio 2

Una librería que se especializa en venta de libros importados desea calcular 
ciertas métricas en base
a las ventas de sus productos.
Se ingresa de cada venta:
Título del libro
Género: (ciencia ficción – Drama – Terror)
Material del libro (rústica – tapa dura)
Importe (No pueden ser números negativos ni mayor a los 30000)
Se pide:
a) El libro más barato de drama con su importe.
b) Del libro más caro, el título.
c) Porcentaje de libros de cada género
d) La cantidad de libros que sean de ciencia ficción y cuesten menos de $700.
*/
/*
function mostrar(){	
	let genero;
	let materialLibro;
	let importe;
	let respuesta=true;
	let titulo;

	let libroMasBaratoDrama;
	let nombreDelLibroMasBarato;
	let banderaDrama = 0;

	let importeDelMasCaro;
	let banderaDelMasCaro = 0;
	let nombreLibroMasCaro;

	let cantidadLibroTotal = 0;
	let generoDrama = 0;
	let generoCienciaFiccion = 0;
	let generoTerror = 0;
	let porcentajeTerror;
	let porcentajeDrama;
	let porcentajeCienciaFiccion;

	let libroCficcionSetesientosP = 0;

	



	while(respuesta==true){

		titulo=prompt('INGRESE TITULO');

		genero=prompt('INGRESE GENERO');
		while(genero!='ciencia ficcion' && genero!='drama' && genero!='terror'){
			  genero=prompt('ERROR');
		}

		materialLibro=prompt('INGRESE MATERIAL');
		while(materialLibro!='rustico' && materialLibro!='tapa dura'){
			  materialLibro=prompt('ERROR');
		}

		importe=prompt('INGRESE IMPORTE');
		importe=parseInt(importe);
		while(importe<0 || importe>3000){
			  importe=prompt('ERROR');
			  importe=parseInt(importe);
		}

		respuesta=confirm('OTRO LIBRO?');

		if(genero=='drama' && importe<libroMasBaratoDrama || banderaDrama == 0){
		   libroMasBaratoDrama = importe;
		   nombreDelLibroMasBarato = titulo;
		   banderaDrama = 1;
		}
		
		if(banderaDelMasCaro == 0 || importe>importeDelMasCaro){
			nombreLibroMasCaro = titulo;
			importeDelMasCaro = importe;
			banderaDelMasCaro = 1;
		}

		switch(genero){
			case 'terror':
			      generoTerror = generoTerror + 1;
				break;
			case 'drama':
				  generoDrama = generoDrama + 1;
				break;
			case 'ciencia ficcion':
				  generoCienciaFiccion = generoCienciaFiccion + 1;
				  break;
		}	

		if(genero=='ciencia ficcion' && importe<700){
			libroCficcionSetesientosP = libroCficcionSetesientosP + 1; 	
		}

		


		
	}

	cantidadLibroTotal = generoDrama + generoTerror + generoCienciaFiccion;
	porcentajeCienciaFiccion = (generoCienciaFiccion*100)/cantidadLibroTotal;
	porcentajeDrama = (generoDrama*100)/cantidadLibroTotal;
	porcentajeTerror = (generoTerror*100)/cantidadLibroTotal;


	document.write('LIBRO MAS BARATO DE DRAMA ' + nombreDelLibroMasBarato + ' CON IMPORTE DE ' + libroMasBaratoDrama + '$' + '<br>');
	document.write('EL LIBRO MAS CARO ES ' + nombreLibroMasCaro + ' CON IMPORTE DE ' + importeDelMasCaro + '$' + '<br>' );
	document.write('PORCENTAJE DE CADA LIBRO ES DE TERROR ' + porcentajeTerror + '%' + ' DE CIENCIA FICCION ES ' + porcentajeCienciaFiccion + '%' + ' DE DRAMA ES ' + porcentajeDrama + '%' +'<br>');
	document.write('CANTIDAD DE LIBRO DE CIENCIA FICCION Y CUESTAN MENOS DE 700P ' + libroCficcionSetesientosP + '<br>' );

}



*/




























/*********************************************************************************** 
/*
Ejercicio 1

Ingresar el nombre de los 5 candidatos a presidente de CusCús,  
la edad de cada uno y la cantidad de votos (no menor a cero)  que sacó en las elecciones.
Informar: 
el candidato con más votos
el candidato con menos votos
el promedio de edades de los candidatos
total de votos emitidos.
*/
/************************************************************************************* */
/*
function mostrar()
{
	let nombre;
	let edad;
	let cantidadVotos;
	let respuesta = 0;

	let candidatoMasVotos = 0;
	let nombreCandidatoMasVotos;
	let nombreCandidatoMenosVotos;
	let candidatoMenosVotos = 0;
	let banderaMenosVotos = 0;
	let banderaMasVotos = 0;

	let promedioEdadTotal = 0;
	let cantidadVotosTotal = 0;




	while(respuesta<5){

		nombre=prompt('INGRESE NOMBRE CANDIDATO');

		edad=prompt('INGRESE EDAD');
		edad=parseInt(edad);

		cantidadVotos=prompt('INGRESE VOTOS');
		cantidadVotos=parseInt(cantidadVotos);
		while(cantidadVotos<1){
			  cantidadVotos=prompt('ERROR');
			  cantidadVotos=parseInt(cantidadVotos);
		}

		if(banderaMasVotos == 0 || cantidadVotos>candidatoMasVotos){
		   candidatoMasVotos = cantidadVotos;
		   nombreCandidatoMasVotos = nombre;
		   banderaMasVotos = 1;
		}

		if(banderaMenosVotos == 0 || cantidadVotos<candidatoMenosVotos){
		   candidatoMenosVotos = cantidadVotos;
		   nombreCandidatoMenosVotos = nombre;
		   banderaMenosVotos = 1;
		}

		if(edad>0){
		   promedioEdadTotal = promedioEdadTotal + edad;
		}

		if(cantidadVotos>0){
		   cantidadVotosTotal = cantidadVotosTotal + cantidadVotos;
		}



		respuesta= respuesta + 1;
	}
	cantidadVotosTotal = cantidadVotosTotal;
	document.write('LA CANTIDAD DE VOTOS TOTAL SON ' + cantidadVotosTotal + '<br>');

	promedioEdadTotal = promedioEdadTotal/5;
	document.write('PROMEDIO EDAD TOTAL ES ' + promedioEdadTotal + '<br>');

	document.write('EL CANDIDATO CON MAS VOTOS ES ' + nombreCandidatoMasVotos + ' CON VOTOS: ' + candidatoMasVotos + ' Y EL NOMBRE DEL CANDIDATO CON MENOS VOTOS ES ' + nombreCandidatoMenosVotos + ' CON VOTOS ' + candidatoMenosVotos +'<br>');



}
*/































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
/*
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
*/




