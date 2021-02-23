
function mostrar()
{
    //Declaraciones
    var ancho;
    var largo;
    var perimetro;
    var anchoPar;
    var largoPar;
    
    //Asignaciones
    ancho = prompt ("Ingrese el ancho del rectangulo: ");
    largo = prompt("Ingrese el largo del rectangulo: ");
    
    //Transformaciones
    anchoPar = parseInt (ancho);
    largoPar = parseInt (largo);

    //Perimetro
    perimetro = (anchoPar + largoPar) * 2;

    //Mostrar
    alert ("El perimetro del rectangulo es "+perimetro);
}
