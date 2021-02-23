/*Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje 
" ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".
*/

function mostrar()
{
    var nombreUno;
    var nombreDos;
    var pesoUno;
    var pesoDos;
    var sumaPeso;
    var promedioPeso;

    nombreUno = prompt ("Ingrese su nombre");
    nombreDos = prompt ("Ingrese el nombre de su pareja");
    pesoUno = prompt ("Ingrese su peso");
    pesoDos = prompt ("Ingrese el peso de su pareja");
    
    pesoUno = parseInt (pesoUno);
    pesoDos = parseInt (pesoDos);
    
    sumaPeso = pesoUno + pesoDos;
    promedioPeso = sumaPeso / 2;

    alert ("Ustedes se llaman "+nombreUno+" y "+nombreDos+", pesan "+pesoUno+" y "+pesoDos+
    ", que sumados son "+sumaPeso+" kilos y el promedio de peso es "+promedioPeso);
}
