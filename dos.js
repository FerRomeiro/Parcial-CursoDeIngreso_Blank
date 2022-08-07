/*
Ramirez Mariano / division D

2. La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para 
la zona sur de GBA.
Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas 
planillas hay):
*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 1000000)

Al terminar de cargar las planillas se debe calcular el total 
de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas
 un importe mayor o igual a $50000 obtendra 
una comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.

Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones
*/
function mostrar (){


   let respuesta=true;
   let nombres;
   let importe;

   let comision;

   let importeTotalM = 0;
   let importeTotalJ=0;
   let importeTotalP=0;
   let cantidadVentasM=0;
   let cantidadVentasP=0;
   let cantidadVentasJ=0;
   let comisionJ;
   let comisionM;
   let comisionP;
   let mensaje;

   let nombreVendedorMasRecaudoComisiones;


  
   while(respuesta==true){

      nombres=prompt('ingrese nombre');
      while(nombres!='maria' && nombres!='juan' && nombres!='pedro'){
         nombres=prompt('error');
      }
      importe=prompt('ingrese importe');
      importe=parseFloat(importe);
      while(importe<0 || importe>1000000){
         importe=prompt('error');
         importe=parseFloat(importe);
      }



      //a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
      switch(nombres){
         case 'juan':
            importeTotalJ=importeTotalJ+importe;
            cantidadVentasJ=cantidadVentasJ+1;
            break;
         case 'maria':
            importeTotalM=importeTotalM+importe;
            cantidadVentasM=cantidadVentasM+1;
            break;
         case 'pedro':
            importeTotalP=importeTotalP+importe;
            cantidadVentasP=cantidadVentasP+1
      }
      respuesta=confirm('otra planilla?');
   }
      if(importeTotalJ>500000)
      {
         comision=10;
      }
      else
      {
         comision=5;  
      }
      if(importeTotalM>500000)
      {  
         comision=10;
      }
      else
      {
         comision=5;
      }
      if(importeTotalP<5000000)
      {
         comision=10;
      }
      else
      {
         comision=5;
      }

      comisionJ=(importeTotalJ*comision)/100;
      comisionM=(importeTotalM*comision)/100;
      comisionP=(importeTotalP*comision)/100;

      if(comisionJ>comisionM && comisionJ>comisionP){
         nombreVendedorMasRecaudoComisiones='Juan';
      }
      else
      {
         if(comisionM>comisionJ && comisionM>comisionP)
         {  
            nombreVendedorMasRecaudoComisiones='Maria';
         }
         else
         {
            if(comisionP>comisionJ && comisionP>comisionM)
            {  
               nombreVendedorMasRecaudoComisiones='Pedro';
            }
            else
            {
               nombreVendedorMasRecaudoComisiones='NINGUNO'
            }
         }
      }
      mensaje='a) IMPORTE TOTAL VENTAS JUAN: ' + importeTotalJ + ' CANTIDAD DE VENTAS JUAN: ' + cantidadVentasJ + '<br>'
      + 'COMISION DE JUAN: ' + comisionJ + ' IMPORTE TOTAL VENTAS MARIA: ' + importeTotalM + ' CANTIDAD VENTAS MARIA: ' + cantidadVentasM + '<br>' +
      ' COMISION DE MARIA: ' + comisionM + ' IMPORTE TOTAL VENTAS PEDRO: ' + importeTotalP + ' CANTIDAD VENTAS PEDRO: ' + cantidadVentasP + '<br>'+
      ' COMISION DE PEDRO: ' + comisionP + ' B) NOMRE DEL VENDEDOR CON MAS COMISIONES : ' + nombreVendedorMasRecaudoComisiones; 
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
/*
function mostrar(){



   let respuesta=true;
   let cafes;
   let medialunas;
   let churros;
   let precioCafe=100;
   let precioMedialuna=60;
   let precioChurro=50;
   let nombre;
   let tipo;
   let cantidad;
   let descuento;

   let contadorMedialunas = 0;

   let tipoConMasUnidadesVendidas;
   let cantidadConMasUnidadesVendidas;
   let BanderaConMasUnidades=0;
   
   let cantidadMasVendida;
   let nombreDelClienteMayorCantidad;
   let banderaMayorCantidadVendida=0;
   let tipoUnidadMasVendida;
   let acumuladorM=0;
   let acumuladorC=0;
   let acumuladorCh=0;

   let productoMenosVendido;

   let mensaje;
 


   while(respuesta==true){
      nombre=prompt('ingrese nombre');

      tipo=prompt('ingrese tipo');
      while(tipo!='cafes' && tipo!='medialunas' && tipo!='churros'){
         tipo=prompt('error');
      }

      cantidad=prompt('ingrese cantidad');
      cantidad=parseInt(cantidad);
      while(cantidad<0){
         cantidad=prompt('error');
         cantidad=parseInt(cantidad);
      }

      switch(tipo){
         case 'churros':
            acumuladorCh=acumuladorCh+cantidad;
         case 'medialunas':
            acumuladorM=acumuladorM+cantidad;
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
            acumuladorC=acumuladorC+cantidad;
            if(cantidad==5){
               descuento=5;
            }
            break;
      }

      //a) Cuantas Medialunas se compraron durante toda la jornada.
      /*
      if(tipo=='medialunas'){
         contadorMedialunas=contadorMedialunas+1;
      }
      */
      //b) Cuál fue el producto con más unidades vendidas.
/*
      if(cantidad>cantidadConMasUnidadesVendidas || BanderaConMasUnidades == 0 ){
         cantidadConMasUnidadesVendidas=cantidad;
         tipoConMasUnidadesVendidas=tipo;
         BanderaConMasUnidades=1;
      }
      
      //c) Nombre del cliente, y tipo de producto con mayor cantidad de compras
      if(cantidad>cantidadMasVendida || banderaMayorCantidadVendida == 0){
         cantidadMasVendida=cantidad;
         tipoUnidadMasVendida=tipo;
         nombreDelClienteMayorCantidad=nombre;
         banderaMayorCantidadVendida=1;
      }

      //e) Informar cuál fue el producto menos vendido para poder sacarlo de la venta.
      if(acumuladorC<acumuladorCh&&acumuladorC<acumuladorM){
         productoMenosVendido=tipo;
      }else{
         if(acumuladorCh<acumuladorC&&acumuladorCh<acumuladorM){
            productoMenosVendido=tipo;
         }else{
            if(acumuladorM<acumuladorC&&acumuladorM<acumuladorCh){
               productoMenosVendido=tipo;
            }
         }
      }

      respuesta=confirm('otro registro?');
   }

   



   // if(acumuladorC>acumuladorCh&&acumuladorC>acumuladorM){
   //    nombreConMasUnidadesVendidas=tipo;
   //    nombreDelCliente=nombre;
   // }
   // else{
   //    if(acumuladorCh>acumuladorC&&acumuladorCh>acumuladorM){
   //       nombreConMasUnidadesVendidas=tipo;
   //       nombreDelCliente=nombre;
   //    }else{
   //       if(acumuladorM>acumuladorCh&&acumuladorM>acumuladorC){
   //          nombreConMasUnidadesVendidas=tipo;
   //          nombreDelCliente=nombre;
   //       }
   //    }
   // }

   


/*
   mensaje='a)Cuantas Medialunas se compraron durante toda la jornada.' + acumuladorM
            +'<br>' + 'b)el producto con más unidades vendidas '+ tipoConMasUnidadesVendidas+
            '<br>'+'c) Nombre del cliente, y tipo de producto con mayor cantidad de compras ' + nombreDelClienteMayorCantidad + ' producto: ' + tipoUnidadMasVendida +
            '<br>'+'d) el producto menos vendido para poder sacarlo de la venta ' + productoMenosVendido;
   document.write(mensaje);

}



*/

















/*
/*Ejercicio 2
Una casa de computación debe realizar el ingreso de los datos de 
los productos que tiene a la venta, de acuerdo al 
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
*/
/*
PROBAR CON LOS PORCENTAJES EN 0 O PREGUNTAR 

function mostrar(){
   let respuesta=true;
   let pc;
   let marca;
   let modelo;
   let precio;

   let precioPcMasBarata;
   let banderaPcMasBarata = 0;

   let contadorPcMarcaHpTipoDesktop=0;

   let contadorPcMarcaAcer=0;
   let promedioPcMarcaAcer;
   let acumuladorPrecioMarcaAcer=0;

   let contadorMarcaAcer=0;
   let contadorMarcaDell=0;
   let contadorMarcaHp=0;
   let contadorTotal;
   let porcentajeDell;
   let porcentajeHp;
   let porcentajeAcer;

  
   let acumuladorDePrecios=0;

   let precioModeloMasCaro;
   let modeloMasCaroMarcaDell;
   let banderaModeloMasCaroDesktopMarcaDell = 0;


   
   while(respuesta==true){
      pc=prompt('ingrese pc');
      while(pc!='desktop' && pc!='laptop'){
         pc=prompt('error');
      }
      marca=prompt('ingrese marca');
      while(marca!='dell' && marca!='acer' && marca!='hp'){
         marca=prompt('error');
      }
      modelo=prompt('ingrese modelo');

      precio=prompt('ingrese precio');
      precio=parseFloat(precio);
      while(precio<100000){
         precio=prompt('error');
         precio=parseFloat(precio);
      }

      //a) El precio de la PC más barata.
      if(precio<precioPcMasBarata || banderaPcMasBarata ==0){
         precioPcMasBarata=precio;
         banderaPcMasBarata=1;
      }
      //b) La cantidad total de PC marca HP del tipo DESKTOP.
      if(pc=='desktop'){
         if(marca=='hp'){
            contadorPcMarcaHpTipoDesktop=contadorPcMarcaHpTipoDesktop+1;
         }
      }
      //c) El promedio del precio de las PC marca ACER.
      if(marca=='acer'){
         contadorPcMarcaAcer=contadorPcMarcaAcer+1;
         acumuladorPrecioMarcaAcer=acumuladorPrecioMarcaAcer+precio;
      }
      //d) Porcentaje de computadoras de cada marca.
      switch(marca){
         case 'acer':
            contadorMarcaAcer=contadorMarcaAcer+1;
            break;
         case 'dell':
            if(pc=='desktop'){
               if(precio>precioModeloMasCaro || banderaModeloMasCaroDesktopMarcaDell == 0){
                  precioModeloMasCaro=precio;
                  modeloMasCaroMarcaDell=modelo;
                  banderaModeloMasCaroDesktopMarcaDell =1;
               }
            }
            else{
               modeloMasCaroMarcaDell='no existe';
            }
            contadorMarcaDell=contadorMarcaDell+1;
            break;
         case 'hp':
            contadorMarcaHp=contadorMarcaHp+1;
            break;

      }
      //e) De las computadoras DESKTOP de marca DELL, el modelo de la mas cara.
      
      acumuladorDePrecios=acumuladorDePrecios+precio;
      respuesta=confirm('OTRO INGRESO DE DATOS ?');
   }

   if(contadorMarcaAcer>0){
   promedioPcMarcaAcer=acumuladorPrecioMarcaAcer/contadorPcMarcaAcer;
   }
   else{
      promedioPcMarcaAcer=0;
   }
   //CALCULADOR DE PORCENTAJE DE CADA MARCA:
   contadorTotal=contadorMarcaAcer+contadorMarcaDell+contadorMarcaHp;
   porcentajeAcer=(100*contadorMarcaAcer)/contadorTotal;
   porcentajeDell=(100*contadorMarcaDell)/contadorTotal;
   porcentajeHp=(100*contadorMarcaHp)/contadorTotal;
   


   document.write('a) precio de la pc mas barata es ' + precioPcMasBarata + ' b) cantidad total hp tipo desktop es ' + contadorPcMarcaHpTipoDesktop + ' c) promedio precio marca acer: '  + promedioPcMarcaAcer + ' d) porcentaje computadora cada marca ' + 'HP: ' + porcentajeHp + ' Dell: ' + porcentajeDell + ' Acer: ' + porcentajeAcer + ' d) de las computadoras marca Desktop y Dell el modelo de la mas cara es ' + modeloMasCaroMarcaDell + '<br>');


}

*/















/*
 Realizar el algoritmo que permita el ingreso 
 por prompt de las alturas en centimetros(validar entre 0 y 250) , 
 el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.
*/

//PREGUNTAR SI HACE FALTA PONER LA DIVISION POR 0

/*
function mostrar(){
   let contador=0;
   let altura;
   let sexo;

   let acumuladorAlturas=0;
   let promedioAlturas;

   let alturaMasBaja;
   let sexoAlturaMasBaja;

   let contadorMujeresSuperanElMetroNoventa=0;
   let MujeresAlturaMetroNoventa;



   while(contador<3){
      altura=prompt('ingrese altura');
      altura=parseInt(altura);
      while(altura<0 || altura>250){
         altura=prompt('error');
         altura=parseInt(altura);
      }
      sexo=prompt('ingrese sexo');
      while(sexo!='f' && sexo!='m'){
         sexo=prompt('error');
      }
      //a) El promedio de las alturas totales.
      acumuladorAlturas=acumuladorAlturas+altura;
      
      //b) La altura más baja y el sexo de esa persona.
      if(altura<alturaMasBaja || contador==0){
         alturaMasBaja=altura;
         sexoAlturaMasBaja=sexo;
      }
      //c) La cantidad de muheres que su altura supere los 190 centimetros.
      if(MujeresAlturaMetroNoventa>190 && sexo=='f'){
         contadorMujeresSuperanElMetroNoventa=contadorMujeresSuperanElMetroNoventa+1;
      }
      contador=contador+1;
   }

   promedioAlturas=acumuladorAlturas/3;

   document.write('a) promedio de alturas totales: ' + promedioAlturas + ' b) altura mas baja: ' + alturaMasBaja + ' sexo de esa persona: ' + sexoAlturaMasBaja + ' c) cantidad mujeres q superan el metro noventa '  + contadorMujeresSuperanElMetroNoventa + '<br>');
}



*/





















/*

1.    Se ingresan 5 importes, marca del producto 
y pais de origen (China, Uruguay o Paraguay).
Calcular y mostrar:
a.    Minimo importe con su pais 
b.    Maximo importe con su marca
c.    Promedio importe
d.    Cantidad de productos de China
e.    Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.

*/
// PREGUNTAR SI LA DIVISION POR 0 ESTA BIEN O ES CORRECTA
/*
function mostrar(){
    
    let marca;
    let pais;
    let contador = 0;
    let importe;

    let minimoImporte;
    let nombrePaisMinimoImporte;

    let maximoImporte;
    let marcaMaximoImporte;

    let acumuladorImportes=0;
    let promedioImportes;

    let contadorProductosChina=0;

    let maximoImporteEncontrado;
    let descuento=10;
    let descuentoMaximoImporteEncontrado;




    
    while(contador<3){
      marca=prompt('ingrese marca');

      pais=prompt('ingrese pais');
      while(pais!='china' && pais!='uruguay' && pais!='paraguay'){
         pais=prompt('error');
      }
      importe=prompt('ingrese importe');
      importe=parseInt(importe);
      while(importe<0){
         importe=prompt('error');
         importe=parseInt(importe);
      }
      //a.    Minimo importe con su pais 
      if(importe<minimoImporte || contador==0){
         minimoImporte=importe;
         nombrePaisMinimoImporte=pais;
      }
      //b.    Maximo importe con su marca
      if(importe>maximoImporte || contador==0){
         maximoImporte=importe;
         marcaMaximoImporte=marca;
      }
      //c.    Promedio importe
      acumuladorImportes=acumuladorImportes+importe;
      //d.    Cantidad de productos de China
      if(pais=='china'){
         contadorProductosChina=contadorProductosChina+1;
      }
      //e.    Sobre el maximo encontrado aplicar un descuento del 10% a dicho importe.
      if(importe>maximoImporteEncontrado || contador == 0){
         maximoImporteEncontrado=importe;
         
      }


      contador=contador+1;
    }
    if(importe>0){
    promedioImportes=acumuladorImportes/3;
    descuentoMaximoImporteEncontrado=maximoImporteEncontrado - ((maximoImporteEncontrado*descuento)/100);
    }
    else{
      importe=0;
      descuentoMaximoImporteEncontrado=0;
    }

    document.write('a) minimo importe con su pais: ' + minimoImporte + ' pais: ' + nombrePaisMinimoImporte + ' b) maximo importe con su marca ' + maximoImporte + ' su marca ' + marcaMaximoImporte + ' c) promedio importe es : ' + promedioImportes + ' d) cantidad de productos en china ' + contadorProductosChina + ' e) maximo importe encontrado es: ' + maximoImporteEncontrado + ' con descuento del 10% es ' + descuentoMaximoImporteEncontrado + '<br>');
}


*/



























/*3)Nos ingresan una cantidad indeterminada de ventas realizadas
por las distintas sucursales de una Mega Tienda Polirubro, 
validando los datos ingresados:

            nombre del cliente, 

            sucursal( “CABA”, “BS.AS.” o “INTERIOR”), 

            tipo(“GRANDE”,”MEDIANA”,“PEQUEÑA”),

            monto de venta en Pesos.

Informar:

a)El nombre del cliente al que se le vendió menos.

b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.

c)La sucursal con mas cantidad de ventas.

Pedir datos por prompt y mostrar por document.write */
/*
function mostrar(){
   let nombre;
   let sucursal; 54
   let tipo;
   let monto;
   let respuesta=true;

   let nombreClienteMenos;
   let montoMenor;
   let banderaMonto = 0;

   let montoSucursalPeque;
   let acumuladorMontoSpeque = 0;
   let promedioSucursalPeque;
   let banderaSucursalPeque = 0;
   let contadorSucursalPeque = 0;

   let contadorMontoBs = 0;
   let contadorMontoCaba = 0;
   let contadorMontoInterior = 0;
   let sucursalConMasVentas;


   while(respuesta==true){
      nombre=prompt('ingrese nombre');
      sucursal=prompt('ingrese sucursal');
      while(sucursal!='caba' && sucursal!='bs as' && sucursal!='interior'){
         sucursal=prompt('error');
      }
      tipo=prompt('ingrese tipo');
      while(tipo!='grande'  && tipo!='pequeña'  && tipo!='mediana'){
         tipo=prompt('error');
      }
      monto=prompt('ingrese monto');
      monto=parseInt(monto)
      while(monto<0){
         monto=prompt('error');
         monto=parseInt(monto);
      }
      //a)El nombre del cliente al que se le vendió menos.
      if(monto<montoMenor || banderaMonto==0){
         montoMenor=monto;
         nombreClienteMenos=nombre;
         banderaMonto=1;
      }
      //b)El promedio del monto de venta de las sucursales del tipo “PEQUEÑA”.
      if(tipo=='pequeña'){
       
           
            acumuladorMontoSpeque=acumuladorMontoSpeque+monto;
            contadorSucursalPeque=contadorSucursalPeque+1;
            
         
      }
      //c)La sucursal con mas cantidad de ventas.
      switch(sucursal){
         case 'bs as':
            contadorMontoBs=contadorMontoBs+monto;
            break;
         case 'caba':
            contadorMontoCaba=contadorMontoCaba+monto;
            break;
         case 'interior':
            contadorMontoInterior=contadorMontoInterior+monto;
            break;
      }



      respuesta=confirm('otro cliente?');
   }
   if(contadorMontoBs>contadorMontoInterior && contadorMontoBs>contadorMontoCaba){
      sucursalConMasVentas='BS AS'
      
   }
   else{
      if(contadorMontoCaba>contadorMontoBs && contadorMontoCaba>contadorMontoInterior){
         sucursalConMasVentas='CABA';
      }else{
         if(contadorMontoInterior>contadorMontoCaba && contadorMontoInterior>contadorMontoBs){
            sucursalConMasVentas='INTERIOR';
         }
      }
   }
      
         
      
   
   if(contadorSucursalPeque>0){
   promedioSucursalPeque=acumuladorMontoSpeque/contadorSucursalPeque;
   }
   else{
      promedioSucursalPeque=0;
   }
   document.write('a) el nombre del clientes al que se le vendio menos es ' + nombreClienteMenos + ' b) promedio de monto de la sucursal tipo pequeña es ' + promedioSucursalPeque + ' c) la sucursal con mas cantidad de ventas es ' + sucursalConMasVentas + '<br>');
}


*/
/*
buenas genteee
Como me pidieron ayer, les hice un ejercicio para que puedan seguir practicando, pero con una dificultad un poco especial... 🙂
Para el nuevo videojuego "surviving the UTN admission test" se ha solicitado desarrollar el sistema de estadísticas que nos mostrará información sobre los jugadores registrados en el juego.

Para ello por cada jugador, debemos ingresar:
Nombre del jugador,
Tipo de personaje("guerrero", "arquero" o "mago"),
Fuerza de ataque ( 1 a 10 inclusive ),
Resistencia a ataques (1 a 5 inclusive),
Tiene bonificación (si o no). Si tiene bonificación, el ataque y la resistencia se duplican.

Se nos pide mostrar:

a) Nombre y tipo de personaje del personaje más poderoso y el más débil con y sin bonificación.

b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.

c) Cuantos arqueros sin bonificación tienen fuerza de ataque menor a 3 pero resistencia mayor a 3.

d) Cual es el promedio de fuerza de ataque de todos los guerreros sin bonificación,
y cual de todos los magos con bonificación.

e) Que porcentaje del total de personajes ingresados representa cada tipo de personaje.

*/
/*
function mostrar()
{
   let respuesta = true;
   let tipo;
   let nombre;
   let fuerza;
   let resistencia;
   let bonificacion;

   let nombreDelMasPoderoso;
   let nombreDelMasDebil;
   let tipoDelMasPoderoso;
   let tipoDelMasDebil;
   let ataqueMasPoderoso;
   let ataqueMasDebil;
   let banderaPoderosa = 0;
   let banderaDebil = 0;

   let contadorGuerrero = 0;
   let contadorMago = 0;
   let contadorArquero = 0;
   let contadorArqueroR = 0;
   let contadorGuerreroR = 0;
   let contadorMagoR = 0;

   let promedioFuerza = 0;
   let promedioFuerzaTotal;
   let contadorGuerreroPFuerza = 0;
   let promedioFuerzaMago = 0;
   let contadorMagoFuerza = 0;
   let promedioFuerzaMagoT;

   let contadorArqueroT = 0;
   let contadorGuerreroT = 0;
   let contadorMagoT = 0;
   let cantidadTtotal;
   let porcentajeArquero;
   let porcentajeMago;
   let porcentajeGuerrero;



   while(respuesta==true){

      nombre=prompt('INGRESE NOMBRE');

      tipo=prompt('INGRESE TIPO');
      while(tipo!='guerrero' && tipo!='mago' && tipo!='arquero'){
            tipo=prompt('ERROR');
      }

      fuerza=prompt('INGRESE FUERZA');
      fuerza=parseInt(fuerza);
      while(fuerza<1 || fuerza>10){
            fuerza=prompt('ERROR');
      }

      resistencia=prompt('INGRESE RESISTENCIA');
      resistencia=parseInt(resistencia);
      while(resistencia<1 || resistencia>5){
            resistencia=prompt('ERROR');
            resistencia=parseInt(resistencia);
      }

      bonificacion=prompt('TIENE BONIFICACION?');
      while(bonificacion!='si' && bonificacion!='no'){
            bonificacion=prompt('ERROR');
      }

      //a) Nombre y tipo de personaje del personaje más poderoso 
      //y el más débil con y sin bonificación.

      if(banderaPoderosa == 0 || fuerza>ataqueMasPoderoso){
         ataqueMasPoderoso = fuerza;
         nombreDelMasPoderoso = nombre;
         tipoDelMasPoderoso = tipo;
         banderaPoderosa = 1;
      }

      if(banderaDebil == 0 || fuerza<ataqueMasDebil){
         ataqueMasDebil = fuerza;
         nombreDelMasDebil = nombre;
         tipoDelMasDebil = tipo;
         banderaDebil = 1;
      }

      // b) Cuantos personajes de cada tipo atacan por más de 5,y resisten por más de 3.

      if(fuerza>5 && tipo=='arquero'){
         contadorArquero = contadorArquero + 1;
      }                                                //UNIFICAR CON EL DE ABAJO
      else{
            if(fuerza>5 && tipo=='guerrero'){
               contadorGuerrero = contadorGuerrero + 1;
            }
            else{
                 if(fuerza>5 && tipo=='mago'){
                  contadorMago = contadorMago + 1;
                 }
            }
      }
         
         
      

      if(resistencia>3 && tipo=='arquero'){
         contadorArqueroR++;
      }
      else{
           if(resistencia>3 && tipo=='guerrero'){
              contadorGuerreroR++;
           }
           else{
                if(resistencia>3 && tipo=='mago'){
                   contadorMagoR++;
                }
           }
      } 
         
        
      //d) Cual es el promedio de fuerza de ataque de todos los guerreros
      //sin bonificación, y cual de todos los magos con bonificación.
      
      if(bonificacion='no' && tipo == 'guerrero'){
         promedioFuerza = promedioFuerza + fuerza;
         contadorGuerreroPFuerza = contadorGuerreroPFuerza + 1;
      }
      else{ // separar
           if(bonificacion=='si' && tipo == 'mago'){
              promedioFuerzaMago = promedioFuerzaMago + fuerza;
              contadorMagoFuerza = contadorMagoFuerza + 1;
           }
      }


      //e) Que porcentaje del total de personajes ingresados 
      //representa cada tipo de personaje.

      if(tipo=='guerrero'){
         contadorGuerreroT = contadorGuerreroT + 1;
      }
      else{
           if(tipo == 'arquero'){
              contadorArqueroT = contadorArqueroT + 1;
           }
           else{
                if(tipo=='mago'){
                   contadorMagoT = contadorMagoT + 1;
                }
           }
      }



      

      respuesta=confirm('OTRO JUGADOR??');
   }

   cantidadTtotal = contadorArqueroT + contadorGuerreroT + contadorMagoT;
   porcentajeArquero = (contadorArqueroT*100)/cantidadTtotal;
   porcentajeGuerrero = (contadorGuerreroT*100)/cantidadTtotal;
   porcentajeMago = (contadorMagoT*100)/cantidadTtotal;
   document.write('PORCENTAJE ARQUEROS ES ' + porcentajeArquero + '% PORCENTAJE GUERREROS ES ' + porcentajeGuerrero + '% PORCENTAJE DE MAGOS ES ' + porcentajeMago + '%' + '<br>');
   

   promedioFuerzaMagoT = promedioFuerzaMago/contadorMagoFuerza;
   document.write('PROMEDIO DE FUERZA DE TODOS LOS MAGOS CON BONI ES ' + promedioFuerzaMagoT + '<br>');
   
   promedioFuerzaTotal = promedioFuerza/contadorGuerreroPFuerza;
   document.write('PROMEDIO DE FUERZA DE TODOS LOS GUERREROS SIN BONI ES ' + promedioFuerzaTotal + '<br>');

   document.write('PERSONAJES QUE ATACAN POR MAS DE 5 DE CADA TIPO SON GUERRERO: ' + contadorGuerrero + ' MAGOS: ' + contadorMago + ' ARQUEROS: ' + contadorArquero + '<br>');
   document.write('PERSONAJES DE RESISTENCIA MAYOR A 3 SON GUERREROS ' + contadorGuerreroR + ' MAGOS: ' + contadorMagoR + ' ARQUEROS: ' + contadorArqueroR + '<br>');


   document.write('NOMBRE MAS PODEROSO ES ' + nombreDelMasPoderoso + ' EL TIPO MAS PODEROSO ES ' + tipoDelMasDebil + '<br>');
   document.write('NOMBRE DEL MAS DEBIL ES ' + nombreDelMasDebil + ' Y EL TIPO DEL MAS DEBIL ES ' + tipoDelMasDebil + '<br>');
}






























/*** ****************************************************************************
ALUMNO: FERNANDO ROMERO MONTERO
DIV: J
    

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
	let nombre;
    let sexo;
    let dni;
    let temperatura;
    let contador = 0;
    let porcentajeTotal = 100;
    let personasTotal = 5;
    let resultadoF;
    let resultadoM;
    let resultadoNB;
    let contadorF = 0;
    let contadorM = 0;
    let contadorNB = 0;
    let promedioTempMasculinos;
    let temperaturaMasculina = 0;
    let banderaFemenina = 0;
    let tempMasBajaF;
    let dniMenor;
    let banderaDni = 0;
    let sexoMenorDni;
    let nombreMenorDni;


    while(contador<5){

    nombre=prompt('INGRESE UN NOMBRE');
    
    sexo=prompt('INGRESE UN SEXO');
    sexo=sexo.toLowerCase();

    while(sexo != "f" && sexo != "m" && sexo != "nb"){
          sexo=prompt('ERROR, INGRESE NUEVAMENTE');
          sexo=sexo.toLowerCase();
    }

    dni=prompt('INGRESE EL DNI');
    dni=parseInt(dni);

    while(dni<1000000 || dni>10000000){
          dni=prompt('ERROR, INGRESE DNI NUEVAMENTE');
          dni=parseInt(dni);
    }

    temperatura=prompt('INGRESE LA TEMPERATURA');
    temperatura=parseInt(temperatura);

    while(temperatura<35 || temperatura>40){
          temperatura=prompt('ERROR, INGRESE TEMPERATURA ENTRE 35 Y 40');
          temperatura=parseInt(temperatura);
    }

    //CONTADOR DE SEXO y 1.	Porcentaje de personas por sexo Ej: [30% F, 40% M, 30% NB].
    if(sexo=="f"){
       contadorF = contadorF + 1;
    }
    else{
         if(sexo=="m"){
            contadorM = contadorM + 1;
         }
         else{
              if(sexo=="nb"){
                 contadorNB = contadorNB + 1;
              }
         }
    }

    // 2.	El promedio de temperatura de los masculinos.
    if(sexo=="m"){
       temperaturaMasculina = temperaturaMasculina + temperatura;
    }
    // 3.	El femenino con menor temperatura (si la hay).
    if(sexo == "f" && temperatura < tempMasBajaF || banderaFemenina == 0){
       tempMasBajaF = temperatura;

    }
    //4.	El sexo y nombre del menor de los DNI.
    if(dni<dniMenor || banderaDni == 0){
        dniMenor = dni;
        sexoMenorDni = sexo;
        nombreMenorDni = nombre;

    }
   
        contador= contador + 1;
    }

        promedioTempMasculinos = temperaturaMasculina/contadorM;

        resultadoF = (contadorF*personasTotal)/porcentajeTotal; 
        resultadoM = (contadorM*personasTotal)/porcentajeTotal;
        resultadoNB = (contadorNB*personasTotal)/porcentajeTotal;

    document.write('EL SEXO Y NOMBRE DEL MENOR DE LOS DNI ES ' + dniMenor + ' Y ' + nombreMenorDni + '<br>');
    document.write('PROMEDIO DE LA TEMP DE LOS MASCULINOS ES ' + promedioTempMasculinos + '<br>');
    document.write('LA TEMPERATURA MAS BAJA DEL SEXO F ES ' + tempMasBajaF + '<br>');    
    document.write('EL PORCENTAJE DE F ES ' + resultadoF + '%' + ' EL DE M ' + resultadoM + ' Y EL DE NB ' + resultadoNB + '<br>');
}
*/