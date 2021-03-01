/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/

function NumerosPares()
    {
        var numeroIngresado;
        var acumuladorPares;
        var resultadoResto;

        acumuladorPares = 0;
        numeroIngresado = txtIdNumero.value;
        numeroIngresado = parseInt (numeroIngresado);

        do
        {
            
            resultadoResto = numeroIngresado % 2;
    
            if (resultadoResto == 0) 
            {
                acumuladorPares++;
            }
            numeroIngresado--;
        }while(numeroIngresado > 1);
        alert (acumuladorPares);
    }

/*function NumerosImpares()
    {
        var numeroIngresado;

        numeroIngresado = txtIdNumero.value;
        numeroIngresado = parseInt (numeroIngresado);
        alert (numeroIngresado)
    }

function NumerosDivisibles()
    {
        var numeroIngresado;

        numeroIngresado = txtIdNumero.value;
        numeroIngresado = parseInt (numeroIngresado);
        alert (numeroIngresado)
    }

function VerificarPrimo()
    {
        var numeroIngresado;

        numeroIngresado = txtIdNumero.value;
        numeroIngresado = parseInt (numeroIngresado);
        alert (numeroIngresado)
    }

function NumerosPrimos()
    {
        var numeroIngresado;

        numeroIngresado = txtIdNumero.value;
        numeroIngresado = parseInt (numeroIngresado);
        alert (numeroIngresado)
    }
*/
