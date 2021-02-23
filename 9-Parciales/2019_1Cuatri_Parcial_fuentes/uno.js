/*Bienvenidos.
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
    var largoIngresado;
    var perimetro;

    largoIngresado = prompt ("Ingrese el largo de un lado de un triángulo equilátero");
    largoIngresado = parseInt (largoIngresado);

    perimetro = largoIngresado * 3;

    alert ("El perimetro del triángulo equilátero es "+perimetro);
}



