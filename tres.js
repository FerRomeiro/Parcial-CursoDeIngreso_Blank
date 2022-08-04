/*
ALUMNO: FERNANDO ROMERO MONTERO
DIV J

Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, verano)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/



function mostrar(){
	

	let notas;
	let sexo;
	let nombre;
	let respuesta = 0;
	let altura;
	let edad;
	let estacionAño;


	let notaTotales = 0;
	let promedioNotasTotales;

	let notaMasBaja;
	let nombreNotaMasBaja;
	let sexoNotaMasBaja;

	let cantidadVMayorSeis = 0;

	let nombrePrimerMujer;
	let banderaPrimerMujer = 0;
	let notaPrimerMujer;

	let cantidadAprobadosF = 0;
	let cantidadAprobadosM = 0;

	let sexoMasDesaproboM = 0;
	let sexoMasDesaproboF = 0;
	let mensaje;

	let promedioNotasAprobados;
	let acumuladorNotasAprobados = 0;
	let acumuladorAlumnosAprobados = 0;

	let promedioNotasMujeres;
	let acumuladorPromedioNotasMujeres = 0;
	let cantidadMujeresNotasPromedio = 0;

	let notaPersonaMasAlta;
	let nombrePersonaMasAlta;
	let banderaPersonaMasAlta;
	let personaMasAlta;

	let nombrePrimerVaronOtoño;
	let banderaPrimerVaronOtoño = 0;

	let alturaMasBaja;
	let nombreAlturaMasBaja;

	let estacionAñoOtoño = 0;
	let estacionAñoVerano = 0;
	let estacionAñoInvierno = 0;
	let estacionDelAñoMasNacieron;

	let sexoPrimerAprobado;
	let nombrePrimerAprobado;
	let edadPrimerAprobado;
	let alturaPrimerAprobado;
	let banderaPrimerAprobado = 0;




	

	while(respuesta<5){

		nombre=prompt('INGRESE NOMBRE');

		sexo=prompt('INGRESE SEXO');
		while(sexo!='f' && sexo!='m'){
			sexo=prompt('ERROR');
		}

		altura=prompt('INGRESE ALTURA');
		altura=parseInt(altura);

		edad=prompt('INGRESE EDAD');
		edad=parseInt(edad);

		estacionAño=prompt('INGRESE ESTACION DE AÑO QUE NACIO');
		while(estacionAño!='invierno' && estacionAño!='verano' && estacionAño!='otoño' ){
			estacionAño=prompt('ERROR');
		}

		notas=prompt('INGRESE NOTA');
		notas=parseInt(notas);
		while(notas<0 || notas>10){
			notas=prompt('error');
			notas=parseInt(notas);
		}

		//a) El promedio de las notas totales.
			
		notaTotales = notaTotales + notas;
			

		//b) La nota más baja , el nombre y  el sexo de esa persona.

		if(notas<notaMasBaja || respuesta == 0){
			notaMasBaja = notas;
			nombreNotaMasBaja = nombre;
			sexoNotaMasBaja = sexo;
		}

		//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if(notas>=6 && sexo=='m'){
		   cantidadVMayorSeis = cantidadVMayorSeis + 1;	
		}

		//d) la nota de la primer mujer ingresada y su nombre.
		if(sexo=='f' && banderaPrimerMujer==0){
		   notaPrimerMujer = notas;
		   nombrePrimerMujer = nombre;
		   banderaPrimerMujer = 1;
		}

		//e) cantidad de aprobados de cada sexo (mas de 5)

		if(sexo=='f' && notas>5)
			cantidadAprobadosF = cantidadAprobadosF + 1;
		else{
			if(sexo=='m' && notas>5){
			   cantidadAprobadosM = cantidadAprobadosM + 1;
			}
		}
		//f) el sexo que mas desaprobo
		if(sexo=='f' && notas<6){
		   sexoMasDesaproboF = sexoMasDesaproboF + 1;
		}
		else{
			if(sexo=='m' && notas<6){
			   sexoMasDesaproboM = sexoMasDesaproboM + 1;
			}
		}

		if(sexoMasDesaproboF>sexoMasDesaproboM){
		   mensaje='FEMENINO';
		}
		else{
			if(sexoMasDesaproboM>sexoMasDesaproboF){
			   mensaje='MASCULINO';
			}
		}

		//g) el promedio de notas de los aprobados
		if(notas>5){
		   acumuladorNotasAprobados = acumuladorNotasAprobados + notas;
		   acumuladorAlumnosAprobados = acumuladorAlumnosAprobados + 1;
		}
		//h) el promedio de notas de las mujeres 
		if(sexo=='f'){
		   acumuladorPromedioNotasMujeres = acumuladorPromedioNotasMujeres + notas;
		   cantidadMujeresNotasPromedio = cantidadMujeresNotasPromedio + 1;
		}
		//i) la nota y nombre de la persona mas alta
		if(altura>personaMasAlta || banderaPersonaMasAlta == 0){
		   notaPersonaMasAlta = notas;
		   nombrePersonaMasAlta = nombre;
		}
		//j) de los nacidos en otoño el primer varon nombre
		if(banderaPrimerVaronOtoño == 0 ){
			if(estacionAño=='otoño' && sexo=='m'){
		       nombrePrimerVaronOtoño = nombre;
		       banderaPrimerVaronOtoño = 1;
			}
		}

		//k) de los adolescente el nombre del mas bajo en altura
		if(altura<alturaMasBaja || respuesta == 0){
		   alturaMasBaja = altura;
		   nombreAlturaMasBaja = nombre;
		}
		//L) la estacion del año que mas alumnos nacieron
		switch(estacionAño){
			case 'invierno':
				estacionAñoInvierno = estacionAñoInvierno + 1;
				break;
			case 'otoño':
				estacionAñoOtoño = estacionAñoOtoño + 1;
			    break;
			case 'verano':
				estacionAñoVerano = estacionAñoVerano + 1;
				break;
		}
		/* // SIEMPRE AFUERA DEL BUCLE NUNCA ADENTRO PORQUE SINO PREGUNTAS CADA QUE ENTRE AL BUCLE Y NO TIENE SENTIDO CON PREGUNTAR UNA SOLA VEZ AL FINAL ES SUFICIENTE
		if(estacionAñoInvierno>estacionAñoOtoño && estacionAñoInvierno>estacionAñoVerano){
		   estacionDelAñoMasNacieron = 'NACIERON MAS EN INVIERNO';
		}
		else{
			if(estacionAñoVerano>estacionAñoInvierno && estacionAñoVerano>estacionAñoOtoño){
			   estacionDelAñoMasNacieron = 'NACIERON MAS EN VERANO';
			}
			else{
				if(estacionAñoOtoño>estacionAñoInvierno && estacionAñoOtoño>estacionAñoVerano){
				   estacionDelAñoMasNacieron = 'NACIERON MAS EN OTOÑO';
				}
			}
		}
		*/ 

		//M) el sexo , nombre, edad y altura del primer aprobado
		if(banderaPrimerAprobado == 0){
			if(notas>5){
			sexoPrimerAprobado = sexo;
			nombrePrimerAprobado = nombre;
			edadPrimerAprobado = edad;
			alturaPrimerAprobado = altura;
			banderaPrimerAprobado = 1;
			}
		}


		respuesta=respuesta+1;
	}
	
	if(estacionAñoInvierno>estacionAñoOtoño && estacionAñoInvierno>estacionAñoVerano){
		estacionDelAñoMasNacieron = 'INVIERNO';
	 }
	 else{
		 if(estacionAñoVerano>estacionAñoInvierno && estacionAñoVerano>estacionAñoOtoño){
			estacionDelAñoMasNacieron = 'VERANO';
		 }
		 else{
			 if(estacionAñoOtoño>estacionAñoInvierno && estacionAñoOtoño>estacionAñoVerano){
				estacionDelAñoMasNacieron = 'OTOÑO';
			 }
		 }
	 }

	
	promedioNotasAprobados = (acumuladorAlumnosAprobados/acumuladorAlumnosAprobados);
	if(cantidadMujeresNotasPromedio>0){
	promedioNotasMujeres = (acumuladorPromedioNotasMujeres/cantidadMujeresNotasPromedio);
	}
	notaTotales = (notaTotales/5);



	document.write('a) promedio notas totales ' + notaTotales + 'b) nota mas baja:' + notaMasBaja + ' nombre nota mas baja: ' + nombreNotaMasBaja + ' sexo nota mas baja: ' + sexoNotaMasBaja + ' c)La cantidad de varones que su nota haya sido mayor o igual a 6: ' + cantidadVMayorSeis + ' d) la nota de la primer mujer ingresada y su nombre: ' + notaPrimerMujer + ',' + nombrePrimerMujer + ' e) cantidad de aprobados de cada sexo (mas de 5) F ' + cantidadAprobadosF + ' cantidad aprobados M ' + cantidadAprobadosM + ' f) el sexo que mas desaprobo ' + mensaje + ' h) promedio notas mujeres '+ acumuladorPromedioNotasMujeres + ' i) la nota y nombre de la persona mas alta ' + notaPersonaMasAlta + ' , ' + nombrePersonaMasAlta + 'j) de los nacidos en otoño el primer varon nombre ' + nombrePrimerVaronOtoño + ' k) de los adolescente el nombre del mas bajo en altura ' + nombreAlturaMasBaja + ' L) la estacion del año que mas alumnos nacieron ' + estacionDelAñoMasNacieron + ' M) el sexo , nombre, edad y altura del primer aprobado ' + sexoPrimerAprobado + ' , ' + nombrePrimerAprobado + ' , ' + alturaPrimerAprobado + '<br>');
}











/******************************************************************************
ALUMNO: FERNANDO ROMERO MONTERO
DIV: J


2)

De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:

A.	Marca (Dia, Carrefour o GreatValue)
B.	Importe del producto (mayor a cero)
C.	Tipo (Despensa, Bebida, Limpieza)
Realizar/Informar:
1.	Si compra mas de 3 productos de despensa obtendrá un descuento del 5% sobre el total de la compra.
2.	Importe total de la compra.
3.	La marca del más caro de limpieza.
4.	La marca del mas barato de despensa.

Pedir datos por prompt y mostrar por document write o alert.


*******************************************************************************/

let marca;
let importe;
let tipo;
let respuesta = 'y';
let productos;
let descuento;
let importeTotal;
let importeTotalCompra;
let banderaLimpieza = 0;
let marcaDelMasCaro;
let banderaDespensa = 0;
let importeDelMasCaro;
let marcaDelMasBaratoDespensa;
let importeDelMasBaratoDespensa;
let contador = 0;

while(respuesta = 'y'){

while(contador>=0){

	marca=prompt('INGRESE MARCA');
	while(marca!="dia" && marca!="carrefour" && marca!="greatvalue"){
		  marca=prompt('ERROR, INGRESE MARCA');
	}
	importe=prompt('INGRESE IMPORTE');
	importe=parseInt(importe);
	while(importe<0){
		 importe=prompt('ERROR, INGRESE IMPORTE');
		 importe=parseInt(importe);
	}
	tipo=prompt('INGRESE TIPO');
	while(tipo!="despensa" && tipo!="bebida" && tipo!="limpieza"){
		  tipo=prompt('ERROR, INGRESE OTRO TIPO');	
	}

	//1.	Si compra mas de 3 productos de despensa obtendrá un descuento del 5% sobre el total de la compra.
	if(contador>2){
	   descuento = 5;
	}else{
	   descuento = 0;
	}

	//3.	La marca del más caro de limpieza.
	if(tipo=="limpieza" && importeDelMasCaro>importe || banderaLimpieza == 0){
		marcaDelMasCaro = marca;
		importeDelMasCaro = importe;
		banderaLimpieza = 1;
	}
	//4.	La marca del mas barato de despensa.
	if(tipo=="despensa" && importeDelMasBaratoDespensa<importe || banderaDespensa == 0){
		importeDelMasBaratoDespensa = importe;
		marcaDelMasBaratoDespensa = marca;
		banderaDespensa = 1;
	} 

	contador = contador + 1;


	}
}

		if(descuento>0){
       	importeTotal = (importe*descuento)/100;
		}else{
			importeTotal = importe;
		}
		document.write('LA MARCA DEL MAS BARATO DE DESPENSA ES ' + importeDelMasBaratoDespensa + ' CON UN IMPORTE DE ' + importeDelMasBaratoDespensa + '$' + '<br>');
		document.write('LA MARCE DEL MAS CARO ES ' + marcaDelMasCaro + ' CON UN IMPORTE DE ' + importeDelMasCaro + '$' + '<br>');
		document.write('EL IMPORTE TOTAL CON UN DESCUENTO DE ' + descuento + '% ES ' + importeTotal + '<br>');



		

/*
function mostrar()
{

	let contador = 0;
	let numero;
	let respuesta = true;
	let maximo;
	let bandera = "abajo";
	while(contador < 3)
	{
		
		numero = prompt("Ingresame un numero");
		numero = parseInt(numero);
		alert("Pedi el " + contador + " Numero" );

		if(numero > 0)
		{
			if(bandera == "abajo" || numero > maximo)
			{
				maximo = numero;
				bandera = "arriba";
			}

		}

		contador ++;
		// respuesta = confirm("Desea continuar ingresando?");
	}

	alert(maximo);

}
*/
/*

Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
/*
function mostrar()
{

	let numeroIngresado;
	let pregunta;
	let sumaNegativos;
	let sumaPositivos;
	let contadorPositivo;
	let contadorNegativo;
	let contadorDeCeros;
	let resto;
	let contadorDeNumerosPares;
	let promedioPositivos;
	let promedioNegativos;
	let diferencia;
	

	sumaNegativos = 0;
	sumaPositivos = 0;
	contadorNegativo = 0;
	contadorPositivo= 0;
	contadorDeCeros = 0;
	contadorDeNumerosPares = 0;
	

	pregunta = "si";
	
	while(pregunta == "si"){

		numeroIngresado = prompt("Ingrese un nro");
		numeroIngresado = parseInt(numeroIngresado);
		
		if(numeroIngresado < 0){

			sumaNegativos = numeroIngresado + sumaNegativos;
			contadorNegativo = contadorNegativo + 1;

		}
		else
		{
			if(numeroIngresado > 0)
			{
				sumaPositivos = numeroIngresado + sumaPositivos;
				contadorPositivo = contadorPositivo + 1;

			}
			else
			{
				contadorDeCeros = contadorDeCeros + 1;
			}
		}
		resto = numeroIngresado % 2;

		if(resto == 0)
		{
			contadorDeNumerosPares = contadorDeNumerosPares + 1;
		}
		
		pregunta = prompt("Desea seguir ingresando nros si/no");
	}
	if(contadorPositivo == 0)
	{
		document.write("No se puede promediar los postivos <br>");
	}
	else
	{
		promedioPositivos = sumaPositivos / contadorPositivo;
		document.write("El promedio de los positivos es: " + promedioPositivos + "<br>");
	}
	if(contadorNegativo == 0)
	{
		document.write("No se puede promediar los negativos <br>");
	}
	else
	{
		promedioNegativos = sumaNegativos / contadorNegativo;
		document.write("El promedio de los negativos es: " + promedioNegativos + "<br>");
	}
	diferencia = sumaPositivos - sumaNegativos;
	document.write("La diferencia entre positivos y negatisvos es: "+ diferencia + "<br>");

	
	

	/*document.write(contadorPositivo); 
	document.write(contadorNegativo);
	document.write(contadorDeCeros);*/

	/*

	/******************************************************************************
1)
De 5 personas que ingresan al hospital se deben tomar y validar los siguientes datos.

A.	Nombre.
B.	Sexo (F, M o NB).
C.	Dni (números de 7  a 10 digitos, sin ceros a la izquierda).
D.	Temperatura (Entre 35 y 40).
Informar:
1.	Porcentaje de personas por sexo Ej: [30% F, 40% M, 30% NB].
2.	El promedio de temperatura de los masculinos.
3.	El femenino con menor temperatura (si la hay).
4.	El sexo y nombre del menor de los DNI.


Pedir datos por prompt y mostrar por document write o alert.

*******************************************************************************/
/*
	function mostrar()
{
	let contadorPersonas;
	let nombre;
	let sexo;
	let DNI;
	let temperatura;
	let porcentajeHombres;
	let porcentajeMujeres;
	let porcentajeNB;
	let promedioTempM;
	let minTempF;
	let nombreMinTempF;
	let nombreMenorDNI;
	let sexoMenorDNI;
	let menorDNI;
	let mujeres;
	let hombres;
	let NB;
	let tempHombres;

	contadorPersonas = 0;
	mujeres = 0;
	hombres = 0;
	NB = 0;
	tempHombres = 0;

	while(contadorPersonas < 5)
	{
		nombre = prompt("Ingrese su nombre.");


		sexo = prompt("Ingrese su sexo: 'F' para femenino, 'M' para masculino y 'NB' para no binario.");
		sexo = sexo.toUpperCase();
		while(sexo != "M" && sexo != "F" && sexo != "NB")
		{
			sexo = prompt("Ingrese su sexo nuevamente: 'F' para femenino, 'M' para masculino y 'NB' para no binario.");
			sexo = sexo.toUpperCase();
		}

		DNI = prompt("Ingrese su DNI que debe tener 7 u 8 dígitos.");
		DNI = parseInt(DNI);
		while(DNI < 1000000 || DNI > 99999999)
		{
			DNI = prompt("Ingrese su DNI nuevamente: debe tener 7 u 8 dígitos.");
			DNI = parseInt(DNI);
		}

		temperatura = prompt("Ingrese su temperatura que debe ser entre 35° y 40°");
		temperatura = parseInt(temperatura);
		while(temperatura < 35 || temperatura > 40)
		{
			temperatura = prompt("Ingrese su temperatura nuevamente: debe ser entre 35° y 40°");
			temperatura = parseInt(temperatura);
		} 

		switch(sexo)
		{
			case "F":
				mujeres++;
				if(mujeres == 1 || temperatura < minTempF)
				{
					minTempF = temperatura;
					nombreMinTempF = nombre;
				}
			break;

			case "M":
				hombres++;
				tempHombres += temperatura;
			break;

			case "NB":
				NB++;
			break;
		}

		if(contadorPersonas == 0)
		{
			menorDNI = DNI;
			nombreMenorDNI = nombre;
			sexoMenorDNI = sexo;
		} else 
		{
			if (DNI < menorDNI)
			{
				menorDNI = DNI;
				nombreMenorDNI = nombre;
				sexoMenorDNI = sexo;
			}
		}

		contadorPersonas++;
	}

	porcentajeHombres = hombres / contadorPersonas * 100;
	porcentajeMujeres = mujeres / contadorPersonas * 100;
	porcentajeNB = NB / contadorPersonas * 100;

	if(hombres > 0)
	{
		promedioTempM = tempHombres / hombres;
	} else {
		document.write("El promedio de temperatura de los hombres es de " + promedioTempM + ". <br>");
	}

	document.write("Hay un " + porcentajeHombres + "% de hombres, un " + porcentajeMujeres + "% de mujeres y un " + porcentajeNB + "% de NB. <br>");
	document.write("La mujer con menor temperatura es " + nombreMinTempF + ". <br>");
	document.write("La persona con menor DNI es " + nombreMenorDNI + ".");

}*/

/******************************************************************************

2)

De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:

A.	Marca (Dia, Carrefour o GreatValue)
B.	Importe del producto (mayor a cero)
C.	Tipo (Despensa, Bebida, Limpieza)
Realizar/Informar:
1.	Si compra mas de 3 productos de despensa obtendrá un descuento del 5% sobre el total de la compra.
2.	Importe total de la compra.
3.	La marca del más caro de limpieza.
4.	La marca del mas barato de despensa.

Pedir datos por prompt y mostrar por document write o alert.


*******************************************************************************/
/*
function mostrar() {
	let marca;
	let importe;
	let tipo;
	let respuesta;
	let totalCompra;
	let importeADescontar;
	let contarDespensa;
	let marcaLimpiezaMasCaro;
	let importeLimpiezaMasCaro;
	let banderaLimpiezaMasCaro = true;
	let marcaDespensaMasBarato;
	let importeDespensaMasBarato;
  
	const DESCUENTO = 5;
  
	totalCompra = 0;
	contarDespensa = 0;
  
	do {
	  marca = prompt(
		"Ingrese la marca del producto (Dia, Carrefour o GreatValue)"
	  );
	  marca = marca.toUpperCase();
	  while (marca != "DIA" && marca != "CARREFOUR" && marca != "GREATVALUE") {
		marca = prompt(
		  "Re Ingrese la marca del producto (Dia, Carrefour o GreatValue)"
		);
		marca = marca.toUpperCase();
	  }
  
	  importe = prompt("Ingrese el importe (mayor a cero)");
	  importe = parseInt(importe);
	  while (importe < 1) {
		importe = prompt("Re Ingrese el importe (mayor a cero)");
		importe = parseInt(importe);
	  }
  
	  tipo = prompt("Ingrese la tipo del producto (Despensa, Bebida, Limpieza)");
	  tipo = tipo.toLowerCase();
	  while (tipo != "despensa" && tipo != "bebida" && tipo != "limpieza") {
		tipo = prompt(
		  "Re Ingrese la tipo del producto (Despensa, Bebida, Limpieza)"
		);
		tipo = tipo.toLowerCase();
	  }
  
	  totalCompra += importe;
	  // totalCompra =  totalCompra + importe;
  
	  switch (tipo) {
		case "despensa":
		  contarDespensa++;
		  // contarDespensa = contarDespensa + 1;
		  if (contarDespensa == 1 || importe < importeDespensaMasBarato) {
			importeDespensaMasBarato = importe;
			marcaDespensaMasBarato = marca;
		  }
		  break;
		case "limpieza":
		  if (
			banderaLimpiezaMasCaro == true ||
			importe > importeLimpiezaMasCaro
		  ) {
			importeLimpiezaMasCaro = importe;
			marcaLimpiezaMasCaro = marca;
			banderaLimpiezaMasCaro = false;
		  }
  
		  break;
	  }
  
	  respuesta = confirm("Desea seguir ingresando productos ?");
	} while (respuesta == true);
  
	if (contarDespensa > 3) {
	  importeADescontar = (totalCompra * DESCUENTO) / 100;
	  totalCompra = totalCompra - importeADescontar;
	  document.write("Obtuvo un descuento de " + importeADescontar + "<br>");
	}
  
	document.write("El total a pagar fue " + totalCompra + "<br>");
  
	if (marcaLimpiezaMasCaro != undefined) {
	  document.write(
		"La marca del mas caro de limpieza fue " + marcaLimpiezaMasCaro + "<br>"
	  );
	} else {
	  document.write("No hay prodcutos de Limpieza <br>");
	}
  
	if (marcaDespensaMasBarato != undefined) {
	  document.write(
		"La marca del mas barato de despensa fue " +
		  marcaDespensaMasBarato +
		  "<br>"
	  );
	} else {
	  document.write("No hay prodcutos de Despensa <br>");
	}
  }
  */
  /*
ALUMNO: FERNANDO ROMERO MONTERO
DIV J

Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, verano)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/

function mostrar(){
	let contador = 0;

	let nombre;
	let sexo;
	let nota;
	let acumuladorNotasTotales = 0;
	let promedioNotasTotales;


	while(contador<10){
		 
		
		nombre=prompt('ingrese nombre');
		
		sexo=prompt('ingrese sexo');
		while(sexo!='f' && sexo!='m'){
			sexo=prompt('error');

		}

		alert('EL ALUMNO ES ' + nombre + ' DE SEXO ' + sexo);
   		
		nota=prompt('ingrese nota');
		nota=parseInt(nota);

		while(nota>0 || nota<11){
			nota=prompt('error');
			nota=parseInt(nota);
		}




		contador= contador + 1;
	}

	acumuladorNotasTotales = acumuladorNotasTotales + nota;
	promedioNotasTotales = ()
}


/*
Una librería que se especializa en venta de libros
 importados desea calcular ciertas métricas en base
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

	let libroTitulo;
	let genero;
	let importe;
	let material;
	let respuesta = true;

	let libroMasBaratoDrama;
	let importeDelLibroMasBaratoDrama;
	let banderaDrama = 0;

	let libroMasCaro;
	let tituloLibroMasCaro;
	let banderaLibroMasCaro = 0;


	let cantadorLibroDrama= 0;
	let contadorLibroCiencia= 0;
	let contadoLibroTerror = 0;
	let porcentajes = 100;
	let porcentajeTerror;
	let porcentajeDrama;
	let procentajeCiencia;
	let importeTotal= 0;
	let contadorTotal;

	let libroCienciaMenosSete = 0;



	while(respuesta==true){

		libroTitulo=prompt('INGRESE LIBRO');

		genero=prompt('INGRESE GENERO');
		while(genero!='ciencia ficcion' && genero!='drama' && genero!='terror'){
			genero=prompt('ERROR');
		}

		material=prompt('INGRESE MATERIAL');
		while(material!='rustica' && material!='tapa dura'){
			material=prompt('ERROR');
		}

		importe=prompt('ingrese importe');
		importe=parseInt(importe);
		while(importe<0 || importe>3000){
			importe=prompt('error');
			importe=parseInt(importe);
		}

		if(importe<importeDelLibroMasBaratoDrama || banderaDrama == 0){
			importeDelLibroMasBaratoDrama = importe;
			libroMasBaratoDrama = libroTitulo;
			banderaDrama=1;
		}

		if(importe>libroMasCaro || banderaLibroMasCaro == 0){
			tituloLibroMasCaro = libroTitulo;
			libroMasCaro = importe;
			banderaDrama = 1;
		}

		switch(genero){
			case 'terror':
				contadoLibroTerror = contadoLibroTerror + 1;
				break;
			case 'ciencia ficcion':
				contadorLibroCiencia = contadorLibroCiencia + 1;
				break;
			case 'drama':
				cantadorLibroDrama = cantadorLibroDrama + 1;
				break;
		}

		if(importe<700 && genero == "ciencia ficcion"){
		   libroCienciaMenosSete = libroCienciaMenosSete + 1;
		}



		respuesta=confirm('OTRO DATO ?');
	}

	contadorTotal= contadoLibroTerror+cantadorLibroDrama+contadorLibroCiencia;
	porcentajeDrama = (cantadorLibroDrama*porcentajes)/contadorTotal;
	porcentajeTerror= (contadoLibroTerror*porcentajes)/contadorTotal;
	procentajeCiencia=(contadorLibroCiencia*porcentajes)/contadorTotal;


	document.write('A) libro mas barato drama:' + libroMasBaratoDrama + ' importe del libro: '+ importeDelLibroMasBaratoDrama + ' B)el libro mas caro es: ' + libroMasCaro + ' y si titulo es: ' + tituloLibroMasCaro + ' C)porcentajes de cada libro con su genero : Terror ' + porcentajeTerror + ' Drama: ' + porcentajeDrama + ' CienciaFiccion: ' + procentajeCiencia  + ' CANTIDAD DE LIBRO DE CIENCIA FICCION Y CUESTAN MENOS DE 700$ : ' + libroCienciaMenosSete + '<br>');


}

*/



























/*
ALUMNO: FERNANDO ROMERO MONTERO
DIV J

Realizar el algoritmo que permita 
el ingreso por prompt de las notas 
(validar entre 0 y 10) , 
el sexo (validar el sexo “f” o “m”) de 5 alumnos,
el nombre e informar por alert:
a) El promedio de las notas totales.
b) La nota más baja , el nombre y  el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
d) la nota de la primer mujer ingresada y su nombre.
e) cantidad de aprobados de cada sexo (mas de 5)
f) el sexo que mas desaprobo
g) el promedio de notas de los aprobados
h) el promedio de notas de las mujeres 
*/

/*
se pide la altura , 
la edad y 
la estacion del año en la que nacio(invierno,verano , otoño, verano)


i) la nota y nombre de la persona mas alta
j) de los nacidos en otoño el primer varon
k) de los adolescente el nombre del mas bajo en altura
L) la estacion del año que mas alumnos nacieron
M) el sexo , nombre, edad y altura del primer aprobado
*/


/*
function mostrar(){
	

	let notas;
	let sexo;
	let nombre;
	let respuesta = 0;
	let altura;
	let edad;
	let estacionAño;


	let notaTotales = 0;
	let promedioNotasTotales;

	let notaMasBaja;
	let nombreNotaMasBaja;
	let sexoNotaMasBaja;

	let cantidadVMayorSeis = 0;

	let nombrePrimerMujer;
	let banderaPrimerMujer = 0;
	let notaPrimerMujer;

	let cantidadAprobadosF = 0;
	let cantidadAprobadosM = 0;

	let sexoMasDesaproboM = 0;
	let sexoMasDesaproboF = 0;
	let mensaje;

	let promedioNotasAprobados;
	let acumuladorNotasAprobados = 0;
	let acumuladorAlumnosAprobados = 0;

	let promedioNotasMujeres;
	let acumuladorPromedioNotasMujeres = 0;
	let cantidadMujeresNotasPromedio = 0;

	let notaPersonaMasAlta;
	let nombrePersonaMasAlta;
	let banderaPersonaMasAlta;
	let personaMasAlta;

	let nombrePrimerVaronOtoño;
	let banderaPrimerVaronOtoño = 0;

	let alturaMasBaja;
	let nombreAlturaMasBaja;

	let estacionAñoOtoño = 0;
	let estacionAñoVerano = 0;
	let estacionAñoInvierno = 0;
	let estacionDelAñoMasNacieron;

	let sexoPrimerAprobado;
	let nombrePrimerAprobado;
	let edadPrimerAprobado;
	let alturaPrimerAprobado;
	let banderaPrimerAprobado = 0;




	

	while(respuesta<5){

		nombre=prompt('INGRESE NOMBRE');

		sexo=prompt('INGRESE SEXO');
		while(sexo!='f' && sexo!='m'){
			sexo=prompt('ERROR');
		}

		altura=prompt('INGRESE ALTURA');
		altura=parseInt(altura);

		edad=prompt('INGRESE EDAD');
		edad=parseInt(edad);

		estacionAño=prompt('INGRESE ESTACION DE AÑO QUE NACIO');
		while(estacionAño!='invierno' && estacionAño!='verano' && estacionAño!='otoño' ){
			estacionAño=prompt('ERROR');
		}

		notas=prompt('INGRESE NOTA');
		notas=parseInt(notas);
		while(notas<0 || notas>10){
			notas=prompt('error');
			notas=parseInt(notas);
		}

		//a) El promedio de las notas totales.
			if(notas<11){
			  notaTotales = notaTotales + notas;
			}

		//b) La nota más baja , el nombre y  el sexo de esa persona.

		if(notas<notaMasBaja || respuesta == 0){
			notaMasBaja = notas;
			nombreNotaMasBaja = nombre;
			sexoNotaMasBaja = sexo;
		}

		//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		if(notas>=6 && sexo=='m'){
		   cantidadVMayorSeis = cantidadVMayorSeis + 1;	
		}

		//d) la nota de la primer mujer ingresada y su nombre.
		if(sexo=='f' && banderaPrimerMujer==0){
		   notaPrimerMujer = notas;
		   nombrePrimerMujer = nombre;
		   banderaPrimerMujer = 1;
		}

		//e) cantidad de aprobados de cada sexo (mas de 5)

		if(sexo=='f' && notas>5)
			cantidadAprobadosF = cantidadAprobadosF + 1;
		else{
			if(sexo=='m' && notas>5){
			   cantidadAprobadosM = cantidadAprobadosM + 1;
			}
		}
		//f) el sexo que mas desaprobo
		if(sexo=='f' && notas<6){
		   sexoMasDesaproboF = sexoMasDesaproboF + 1;
		}
		else{
			if(sexo=='m' && notas<6){
			   sexoMasDesaproboM = sexoMasDesaproboM + 1;
			}
		}

		if(sexoMasDesaproboF>sexoMasDesaproboM){
		   mensaje='FEMENINO';
		}
		else{
			if(sexoMasDesaproboM>sexoMasDesaproboF){
			   mensaje='MASCULINO';
			}
		}

		//g) el promedio de notas de los aprobados
		if(notas>5){
		   acumuladorNotasAprobados = acumuladorNotasAprobados + notas;
		   acumuladorAlumnosAprobados = acumuladorAlumnosAprobados + 1;
		}
		//h) el promedio de notas de las mujeres 
		if(sexo=='f'){
		   acumuladorPromedioNotasMujeres = acumuladorPromedioNotasMujeres + notas;
		   cantidadMujeresNotasPromedio = cantidadMujeresNotasPromedio + 1;
		}
		//i) la nota y nombre de la persona mas alta
		if(altura>personaMasAlta || banderaPersonaMasAlta == 0){
		   notaPersonaMasAlta = notas;
		   nombrePersonaMasAlta = nombre;
		}
		//j) de los nacidos en otoño el primer varon nombre
		if(banderaPrimerVaronOtoño == 0 ){
			if(estacionAño=='otoño' && sexo=='m'){
		       nombrePrimerVaronOtoño = nombre;
		       banderaPrimerVaronOtoño = 1;
			}
		}

		//k) de los adolescente el nombre del mas bajo en altura
		if(altura<alturaMasBaja || respuesta == 0){
		   alturaMasBaja = altura;
		   nombreAlturaMasBaja = nombre;
		}
		//L) la estacion del año que mas alumnos nacieron
		switch(estacionAño){
			case 'invierno':
				estacionAñoInvierno = estacionAñoInvierno + 1;
				break;
			case 'otoño':
				estacionAñoOtoño = estacionAñoOtoño + 1;
			    break;
			case 'verano':
				estacionAñoVerano = estacionAñoVerano + 1;
				break;
		}
		/* // SIEMPRE AFUERA DEL BUCLE NUNCA ADENTRO PORQUE SINO PREGUNTAS CADA QUE ENTRE AL BUCLE Y NO TIENE SENTIDO CON PREGUNTAR UNA SOLA VEZ AL FINAL ES SUFICIENTE
		if(estacionAñoInvierno>estacionAñoOtoño && estacionAñoInvierno>estacionAñoVerano){
		   estacionDelAñoMasNacieron = 'NACIERON MAS EN INVIERNO';
		}
		else{
			if(estacionAñoVerano>estacionAñoInvierno && estacionAñoVerano>estacionAñoOtoño){
			   estacionDelAñoMasNacieron = 'NACIERON MAS EN VERANO';
			}
			else{
				if(estacionAñoOtoño>estacionAñoInvierno && estacionAñoOtoño>estacionAñoVerano){
				   estacionDelAñoMasNacieron = 'NACIERON MAS EN OTOÑO';
				}
			}
		}
		*/ 
/*
		//M) el sexo , nombre, edad y altura del primer aprobado
		if(banderaPrimerAprobado == 0){
			if(notas>5){
			sexoPrimerAprobado = sexo;
			nombrePrimerAprobado = nombre;
			edadPrimerAprobado = edad;
			alturaPrimerAprobado = altura;
			banderaPrimerAprobado = 1;
			}
		}


		respuesta=respuesta+1;
	}
	
	if(estacionAñoInvierno>estacionAñoOtoño && estacionAñoInvierno>estacionAñoVerano){
		estacionDelAñoMasNacieron = 'INVIERNO';
	 }
	 else{
		 if(estacionAñoVerano>estacionAñoInvierno && estacionAñoVerano>estacionAñoOtoño){
			estacionDelAñoMasNacieron = 'VERANO';
		 }
		 else{
			 if(estacionAñoOtoño>estacionAñoInvierno && estacionAñoOtoño>estacionAñoVerano){
				estacionDelAñoMasNacieron = 'OTOÑO';
			 }
		 }
	 }

	
	promedioNotasAprobados = (acumuladorAlumnosAprobados/acumuladorAlumnosAprobados);
	if(cantidadMujeresNotasPromedio>0){
	promedioNotasMujeres = (acumuladorPromedioNotasMujeres/cantidadMujeresNotasPromedio);
	}
	notaTotales = (notaTotales/5);



	document.write('a) promedio notas totales ' + notaTotales + 'b) nota mas baja:' + notaMasBaja + ' nombre nota mas baja: ' + nombreNotaMasBaja + ' sexo nota mas baja: ' + sexoNotaMasBaja + ' c)La cantidad de varones que su nota haya sido mayor o igual a 6: ' + cantidadVMayorSeis + ' d) la nota de la primer mujer ingresada y su nombre: ' + notaPrimerMujer + ',' + nombrePrimerMujer + ' e) cantidad de aprobados de cada sexo (mas de 5) F ' + cantidadAprobadosF + ' cantidad aprobados M ' + cantidadAprobadosM + ' f) el sexo que mas desaprobo ' + mensaje + ' h) promedio notas mujeres '+ acumuladorPromedioNotasMujeres + ' i) la nota y nombre de la persona mas alta ' + notaPersonaMasAlta + ' , ' + nombrePersonaMasAlta + 'j) de los nacidos en otoño el primer varon nombre ' + nombrePrimerVaronOtoño + ' k) de los adolescente el nombre del mas bajo en altura ' + nombreAlturaMasBaja + ' L) la estacion del año que mas alumnos nacieron ' + estacionDelAñoMasNacieron + ' M) el sexo , nombre, edad y altura del primer aprobado ' + sexoPrimerAprobado + ' , ' + nombrePrimerAprobado + ' , ' + alturaPrimerAprobado + '<br>');
}





*/
























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
/*
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

*/







































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

		