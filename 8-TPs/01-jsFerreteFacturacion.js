/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    //Declaraciones
    let precioProducto1;
    let precioProducto2;
    let precioProducto3;
    let precioProducto1Par;
    let precioProducto2Par;
    let precioProducto3Par;
    let resultadoSuma;

    //Asignaciones
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;

    //Transformación
    precioProducto1Par = parseInt (precioProducto1);
    precioProducto2Par = parseInt (precioProducto2);
    precioProducto3Par = parseInt (precioProducto3);

    //Suma
    resultadoSuma = precioProducto1Par + precioProducto2Par +precioProducto3Par;

    //Mostrar
    alert ("La suma de los 3 productos es: " + resultadoSuma);

}

function Promedio () 
{
	 //Declaraciones
     let precioProducto1;
     let precioProducto2;
     let precioProducto3;
     let precioProducto1Par;
     let precioProducto2Par;
     let precioProducto3Par;
     let resultadoPromedio;

     //Asignaciones
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;

    //Transformación
    precioProducto1Par = parseInt (precioProducto1);
    precioProducto2Par = parseInt (precioProducto2);
    precioProducto3Par = parseInt (precioProducto3);

    //Promedio
    resultadoPromedio = (precioProducto1Par + precioProducto2Par + precioProducto3Par) / 3;

    //Mostrar
    alert ("El promedio entre los 3 productos es: " + resultadoPromedio);
}

function PrecioFinal () 
{
	 //Declaraciones
     let precioProducto1;
     let precioProducto2;
     let precioProducto3;
     let precioProducto1Par;
     let precioProducto2Par;
     let precioProducto3Par;
     let resultadoSumaIVA;
     let IVA;

     //Asignaciones
    precioProducto1 = txtIdPrecioUno.value;
    precioProducto2 = txtIdPrecioDos.value;
    precioProducto3 = txtIdPrecioTres.value;
    IVA = 1.21;
    //Transformación
    precioProducto1Par = parseInt (precioProducto1);
    precioProducto2Par = parseInt (precioProducto2);
    precioProducto3Par = parseInt (precioProducto3);

    //Suma con IVA
    resultadoSumaIVA = (precioProducto1Par + precioProducto2Par + precioProducto3Par) * IVA;

    //Mostrar
    alert ("El resultado de la suma con IVA adicional es: " + resultadoSumaIVA);
}