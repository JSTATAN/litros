function receta(){
    litros= prompt("litros de capuchino ");
var litros, Cafe,Azucar,Leche;

Cafe= litros*13;
Azucar= litros*10;    
Leche = litros*15;

document.write("se necesita para un capuchino lo siguente:<br>" + Cafe +" gramos de Cafe <br>"+ Azucar+" gramos de Azucar<br>"
+Leche+" litros de Leche <br>");

}

function costos(){

    litros = Number(prompt("litros de capuchino "));
var litros, Cafe, Azucar, Leche,total ;
Cafe= libras*2000;
Azucar = libras*2500;   
Leche =libras*4000;
total= Cafe+Azucar+Leche;
document.write("los costos para las litros de capuchino espumoso son: "+ total);}
