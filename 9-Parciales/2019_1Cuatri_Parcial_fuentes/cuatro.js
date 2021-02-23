/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
*/

function mostrar()
{
    var numeroUno;
    var numeroDos;
    var numeroUnoPar;
    var numeroDosPar;
    var resultado;

    numeroUno = prompt ("Ingrese unb número");
    numeroDos = prompt ("Ingrese un número");

    numeroUnoPar = parseInt (numeroUno);
    numeroDosPar = parseInt (numeroDos);

    if (numeroUno == numeroDos) 
    {
        resultado = numeroUno + numeroDos;
    }
    else
    {
        if (numeroUnoPar < numeroDosPar) 
        {
            resultado = numeroUnoPar + numeroDosPar;
        }
        else
        {
            resultado = numeroUnoPar - numeroDosPar;

            if (resultado > 10) 
            {
                alert ("La resta es "+resultado+" y superó el 10.");
            }
        }
    }

    alert (resultado);
}