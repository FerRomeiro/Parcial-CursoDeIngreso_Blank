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