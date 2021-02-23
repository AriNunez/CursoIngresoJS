/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    //Declaraciones
    var datoLargo;
    var datoAncho;
    var datoLargoPar;
    var datoAnchoPar;
    var cantidadAlambre;
    var resultadoPerimetro;
    var resultadoPerimetroTotal;

    //Asignaciones
    datoLargo = txtIdLargo.value;
    datoAncho = txtIdAncho.value;
    cantidadAlambre = 3;

    //Transformaciones
    datoLargoPar = parseInt (datoLargo);
    datoAnchoPar = parseInt (datoAncho);

    //Operaciones
    resultadoPerimetro = (datoLargoPar + datoAnchoPar) * 2;
    resultadoPerimetroTotal = resultadoPerimetro * cantidadAlambre;

    //Mostrar
    alert ("El total de alambre que debe comprar es de " + resultadoPerimetroTotal);
}

function Circulo () 
{
    //Declaraciones
    var radioTerreno;
    var radioTerrenoPar;
    var pi;
    var cantidadAlambre;
    var resultadoPerimetro;
    var resultadoPerimetroTotal;

    //Asignaciones
    radioTerreno = txtIdRadio.value;
    pi = 3.14;
    cantidadAlambre = 3;

    //Transformaciones
    radioTerrenoPar = parseInt (radioTerreno);

    //Operaciones
    resultadoPerimetro = 2 * pi * radioTerrenoPar;
    resultadoPerimetroTotal = resultadoPerimetro * cantidadAlambre;

    //Mostrar
    alert ("La cantidad total de alambre que debe comprar es de " + resultadoPerimetroTotal);
}

function Materiales () 
{
    //Declaraciones
    var datoLargo;
    var datoAncho;
    var datoLargoPar;
    var datoAnchoPar;
    var resultadoÁrea;
    var cemento;
    var cal;
    var cementoTotal;
    var calTotal;
    var metrosCuadradosBase;

    //Asignaciones
    datoLargo = txtIdLargo.value;
    datoAncho = txtIdAncho.value;
    cemento = 2;
    cal = 3;
    metrosCuadradosBase= 1;

    //Transformaciones
    datoLargoPar = parseInt (datoLargo);
    datoAnchoPar = parseInt (datoAncho);

    //Operaciones
    resultadoÁrea = datoLargoPar * datoAnchoPar;
    cementoTotal = (resultadoÁrea * cemento) / metrosCuadradosBase;
    calTotal = (resultadoÁrea * cal) / metrosCuadradosBase;

    //Mostrar 
    alert ("El área del contrapiso a contruir es de "+resultadoÁrea+" metros cuadrados, y requerira de "+cementoTotal+" bolsas de cemento y "+calTotal+" bolsas de cal en total.");
       
}
  
