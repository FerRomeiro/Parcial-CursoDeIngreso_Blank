/*Ejercicio 2
Una casa de computación debe realizar el ingreso de los datos de los productos que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.

Anioska Reyes ejercicio 2*/

function mostrar()
{
   let pregunta;
   let mensaje;
   let pcIngresada;
   let marcaIngresada;
   let modeloIngresado;
   let precioIngresado;
   let banderaMasBarato;
   let precioMasBarato;
   let contadorDesktopHp;
   let acumuladorPrecioAcer;
   let contadorAcer;
   let promedioPcAcer;
   let contadorDell;
   let contador;
   let porcentajeMarcaDell;
   let banderaMasCaroDell;
   let precioMasCaroDell;
   let modeloMasCaro;


   pregunta="si";
   banderaMasBarato="Inicio";
   contadorDesktopHp=0;
   acumuladorPrecioAcer=0;
   contadorAcer=0;
   contadorDell=0;
   contador=0;
   banderaMasCaroDell="Inicio";

   while(pregunta=="si")
  {
      pcIngresada=prompt("Ingrese la pc: DESKTOP / LAPTOP");
      while(pcIngresada!= "DESKTOP" && pcIngresada!= "LAPTOP")
      {
         pcIngresada=prompt("Erro, Ingrese la pc: DESKTOP / LAPTOP");
      }

      marcaIngresada=prompt("Ingrese la marca: “DELL”, “HP”, “ACER”");
      while(marcaIngresada!= "DELL" && marcaIngresada!= "HP" && marcaIngresada!= "ACER" )
      {
         marcaIngresada=prompt("Erro,Ingrese la marca: “DELL”, “HP”, “ACER”");
      }

      modeloIngresado=prompt("Ingrese el modelo");

      precioIngresado=prompt("Ingrese precio  mayor a 100000");
		precioIngresado=parseInt(precioIngresado);
		while(precioIngresado<100000 || Number.isNaN(precioIngresado))
		{
			precioIngresado=prompt("Error, Ingrese precio mayor a 100000");
			precioIngresado=parseInt(precioIngresado);
		}
      if(precioMasBarato>precioIngresado || banderaMasBarato=="Inicio")
      {
         precioMasBarato=precioIngresado;
         banderaMasBarato="Cierre";
      }
      switch(marcaIngresada)
      {
         case "HP":
            if(pcIngresada=="DESKTOP")
            {
               contadorDesktopHp++;
            }
         break;
         case "ACER":
            acumuladorPrecioAcer=acumuladorPrecioAcer+precioIngresado;
            contadorAcer++;
         break;

         case "DELL" :
            contadorDell++;
            if(pcIngresada=="DESKTOP")
            {
               if(precioMasCaroDell<precioIngresado ||banderaMasCaroDell=="Inicio")
               {
                  precioMasCaroDell=precioIngresado;
                  modeloMasCaro=modeloIngresado;
                  banderaMasCaroDell="Cierre";

               }
             }
         break;
      }
  

   contador++;
   pregunta=prompt("¿Quiere ingresar otra venta? si/no");
  }

  if(contadorAcer>0)
  {
   promedioPcAcer=acumuladorPrecioAcer/contadorAcer
  }

  porcentajeMarcaDell= contadorDell/contador;

  

  mensaje="a) El precio de la PC más barata." +precioMasBarato
   +"<br>"+"b) La cantidad total de PC marca HP del tipo DESKTOP."+contadorDesktopHp
   +"<br>"+"c) El promedio del precio de las PC marca ACER."+promedioPcAcer
   +"<br>"+"d) Porcentaje de computadoras de cada marca."+porcentajeMarcaDell
   +"<br>"+"e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara."+modeloMasCaro;


   document.write(mensaje);

}
















/******************************************************************************
Ejercicio 3

Parador Atalaya

Para la nueva sucursal de Atalaya a la vuelta de UTN Avellaneda,
 es necesario llevar un registro 
de la venta diaria de cafés, medialunas y churros.

Para eso, al momento de cada venta, se debe ingresar:

Nombre del cliente a retirar
Tipo (Café / Medialunas /Churros) 
Cantidad.

El precio por unidad de cada producto es:

Café $100.
Medialunas $60.
Churros $50.


Si compra 2 docenas de Medialunas o Churros tendrá un 30% de descuento.
Si compra 1 docena Medialunas o Churros tendrá un 20% de descuento.
Si compra 10 Medialunas o Churros tendrá un 10% de descuento.
Si compra 5 Medialunas o Churros o un café tendrá un 5% de descuento.

Informes:

a) Cuantas Medialunas se compraron durante toda la jornada.
b) Cuál fue el producto con más unidades vendidas.
c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.
e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.


*******************************************************************************/
function mostrar(){

	let respuesta=true;
	let nombre;
	let tipo;
	let cantidad;
	let descuento;
	let precioCafe = 100;
	let precioMedialuna = 60;
	let precioChurro = 50;
	let precioTotal;
	let precioTotalC;
	let precioTotalChu;
	let precioTotalM;

	let precioConDescuentoCafe;
	let precioConDescuentoChurros;
	let precioCondescuentoMedialuna;


	let contadorMedialunas = 0;

	let nombreProductoMasUnidadesVendidas;
	let cantidadConMasUnidades;
	let banderaMasUnidadesVendidas = 0;

	let nombreClienteMayorCantidadCompras;
	let tipoProductoConMasCompras;
	let mayorCantidadCompras;
	let banderaCantidadCompras = 0;

	let productoMenosVendido;
	let TipoproductoMenosVendidoPrecio;
	let banderaDelProductoMenosVendido = 0;
	


	while(respuesta==true){

		nombre=prompt('ingrese nombre');

		tipo=prompt('ingrese tipo');
		while(tipo!='medialunas' && tipo!='cafes' && tipo!='churros'){
			tipo=prompt('error');
		}

		cantidad=prompt('ingrese cantidad');
		cantidad=parseInt(cantidad);

		switch(tipo){
			case 'churros':
			case 'medialunas':
				  if(cantidad==24){
					descuento=30;
					
				  }
				  else{
					if(cantidad==12){
					   descuento=20;
					}
					else{
						if(cantidad==10){
							descuento=10;
						}
						else{
							if(cantidad==5){
								descuento=5;
							}
						}						
					}
				  } 
				break;
			case 'cafes':
				if(cantidad==1){
					descuento=5;
				}
				break;
		}

		//a) Cuantas Medialunas se compraron durante toda la jornada.
		if(tipo=='medialunas'){
			contadorMedialunas = contadorMedialunas + 1;
		}
		//b) Cuál fue el producto con más unidades vendidas.
		if(cantidad>cantidadConMasUnidades || banderaMasUnidadesVendidas == 0){
			cantidadConMasUnidades = cantidad;
			nombreProductoMasUnidadesVendidas = tipo;
			banderaMasUnidadesVendidas = 1;
		}
		//c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
		if(cantidad>mayorCantidadCompras || banderaCantidadCompras == 0){
			mayorCantidadCompras = cantidad;
			nombreClienteMayorCantidadCompras = nombre;
			tipoProductoConMasCompras = tipo;
			banderaCantidadCompras = 1;
		}
		//d) En caso de haber excedido el monto de $1300 sumarle un 20% de impuestos.

		
		//e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.
		if(cantidad<productoMenosVendido || banderaDelProductoMenosVendido == 0){
			productoMenosVendido=cantidad;
			TipoproductoMenosVendidoPrecio = tipo;
			banderaDelProductoMenosVendido = 1;
		}



		respuesta=confirm('OTRO CLIENTE?? ');
	}

	if(descuento>0){
	precioCondescuentoMedialuna=((cantidad*precioMedialuna)*descuento)/100;
	precioConDescuentoChurros=((cantidad*precioChurro)*descuento)/100;
	precioConDescuentoCafe=((cantidad*precioCafe)*descuento)/100;
	}else{
		precioTotalC=(precioCafe*cantidad);
		precioTotalChu=(precioCafe*cantidad);
		precioTotalM=(precioMedialuna*cantidad);
	}






	

	

}













































/******************************************************************************
 * ALUMNO: CARLOS FERNANDO ROMERO MONTERO
 * DIV: J
 * 
 * 
Ejercicio 2

Una casa de computación debe realizar el ingreso de los datos 
de los productos que tiene a la venta, de acuerdo al 
siguiente detalle:
PC (“DESKTOP” o “LAPTOP”)
Marca (“DELL”, “HP”, “ACER”)
Modelo
Precio (No puede ser menor a 100.000 pesos)
Informar:
a) El precio de la PC más barata.
b) La cantidad total de PC marca HP del tipo DESKTOP.
c) El promedio del precio de las PC marca ACER.
d) Porcentaje de computadoras de cada marca.
e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
Pedir datos por prompt y mostrar la información por document.write.


*******************************************************************************/
/*
function mostrar(){

	let pc;
	let marca;
	let modelo;
	let precio;
	let respuesta=true;

	let precioPcBarata;
	let banderaPcBarata = 0;

	let cantidadDesktopPc = 0;

	let promedioPrecioPcAcer;
	let acumuladorPrecioAcer = 0;
	let cantidadAcer = 0;

	let contadorDell = 0;
	let contadorHp = 0;
	let contadorAcer = 0;
	let porcentajeDell;
	let porcentajeHp;
	let porcentajeAcer;
	let totaldha;

	let precioMasCaraDmD;
	let banderaDmD = 0;
	let modeloMasCaraDmD;







	while(respuesta==true){
		pc=prompt('ingrese pc');
		while(pc!='desktop' && pc!='laptop'){
			pc=prompt('error');
		}

		marca=prompt('ingrese marca');
		while(marca!='dell' && marca!='hp' && marca!='acer'){
			marca=prompt('error');
		}

		modelo=prompt('ingrese modelo');

		precio=prompt('ingrese precio');
		precio=parseInt(precio);
		while(precio<100000){
			precio=prompt('error');
			precio=parseInt(precio);
		}





		//a) El precio de la PC más barata.

		if(precio<precioPcBarata || banderaPcBarata == 0){
			precioPcBarata=precio;
			banderaPcBarata= 1;
		}

		//b) La cantidad total de PC marca HP del tipo DESKTOP.

		if(pc=="desktop" && marca=='hp'){
			cantidadDesktopPc = cantidadDesktopPc + 1;
		}

		//c) El promedio del precio de las PC marca ACER.
		
		if(marca=='acer'){
			acumuladorPrecioAcer = acumuladorPrecioAcer + precio;
			cantidadAcer = cantidadAcer + 1;
		}

		//d) Porcentaje de computadoras de cada marca.

		switch(marca){
			case 'acer':
				contadorAcer = contadorAcer  + 1;
				break;
			case 'dell':
				contadorDell = contadorDell + 1;
				break;
			case 'hp':
				contadorHp = contadorHp + 1;
			break;
		}

		//e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
		if(pc=='desktop' && marca=='dell'){
			if(precio>precioMasCaraDmD || banderaDmD == 0){
				precioMasCaraDmD=precio;
				modeloMasCaraDmD = modelo;
				banderaDmD = 1;
			}
		}


		respuesta=confirm('otros datos ??? ');
	}



	promedioPrecioPcAcer = (acumuladorPrecioAcer/cantidadAcer);
	totaldha = (contadorAcer+contadorDell+contadorHp);
	porcentajeAcer=(contadorAcer*totaldha)/100;
	porcentajeDell=(contadorDell*totaldha)/100;
	porcentajeHp=(contadorHp*totaldha)/100;

	document.write('a) el precio de la pc mas barata es ' + precioPcBarata + ' b) cantidad pc marca hp y tipo deskopt ' + cantidadDesktopPc + ' c) promedio pc marca acer ' + promedioPrecioPcAcer + ' d) porcentajes de cada marca es HP: ' + porcentajeHp + ' DELL: ' + porcentajeDell + ' ACER: ' + porcentajeAcer + 'e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.' + modeloMasCaraDmD  + '<br>' );


}






*/



















/******************************************************************************
Ejercicio 1

De los 50 participantes del torneo de TETRIS, se deben ingresar 
los datos de acuerdo a lo siguiente:
Nombre
Genero (“F”, “M”, "X")
Edad (validar de manera coherente)
Score (validar de manera coherente)
Informar:
a) La cantidad de participantes mayores de edad.
b) El promedio de edad de todos los participantes femeninos.
c) El nombre del participante (cualquiera sea el genero) con mejor score.
Pedir datos por prompt y mostrar la información por document.write.



*******************************************************************************/
/*
function mostrar(){

		let contador = 0;
		let genero;
		let edad;
		let score;
		let nombre;

		let cantidadParticipantesMayoresEdad = 0;

		let promedioEdadParticipantesF;
		let cantidadParticipantesF = 0;
		let acumuladorEdadF = 0;

		let nombreMejorScore;
		let banderaScore = 0;
		let MejorScore;


	while(contador<50){

		nombre=prompt('ingrese nombre');


		genero=prompt('ingrese genero');
		while(genero!='m' && genero!='f' && genero!='x'){
			genero=prompt('error');
		}

		edad=prompt('ingrese edad');
		edad=parseInt(edad);
		while(edad<0 || edad>90){
			edad=prompt('error');
			edad=parseInt(edad);
		}

		score=prompt('ingrese scrore');
		score=parseInt(score);
		while(score<0){
			score=prompt('error');
			score=parseInt(score);
		}

	//a) La cantidad de participantes mayores de edad.
	if(edad>17){
		cantidadParticipantesMayoresEdad = cantidadParticipantesMayoresEdad+1;
	}

	//b) El promedio de edad de todos los participantes femeninos.

	if(genero=='f'){

		cantidadParticipantesF =cantidadParticipantesF +1
		acumuladorEdadF = acumuladorEdadF + edad;		
	}

	//c) El nombre del participante (cualquiera sea el genero) con mejor score.
    //Pedir datos por prompt y mostrar la información por document.write.
	
	if(score>MejorScore || banderaScore == 0){
		MejorScore=score;
		nombreMejorScore=nombre;
	}





		contador=contador+1;
	}

	
	promedioEdadParticipantesF = acumuladorEdadF/cantidadParticipantesF;
	


	document.write('a) cantidad de participantes mayores de edad ' + cantidadParticipantesMayoresEdad + ' b) promedio de edad participantes femeninos: ' + promedioEdadParticipantesF + ' c) mejor score es de ' + nombreMejorScore + '<br>');

	
}
























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








