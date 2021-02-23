/*Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".
*/

function mostrar()
{
    var numeroUno;
    var numeroDos;
    var numeroUnoPar;
    var numeroDosPar;
    var resultado;

    numeroUno = prompt ("Ingrese un número.");
    numeroUnoPar = parseInt (numeroUno);
    numeroDos = prompt ("Ingrese un número.");
    numeroDosPar = parseInt (numeroDos);

    if (numeroUno == numeroDos)
    {
        resultado = numeroUno + numeroDos;
    }
    else
    {
        if (numeroUnoPar > numeroDosPar) 
        {
            resultado = numeroUnoPar - numeroDosPar;
        }
        else
        {
            resultado = numeroUnoPar + numeroDosPar;
            
            if (resultado > 10) 
            {
                alert ("La suma es "+resultado+" y superó el 10.");
            }
        }
    }
    alert (resultado);
}
