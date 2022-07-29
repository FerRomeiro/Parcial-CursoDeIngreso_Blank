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
  
		