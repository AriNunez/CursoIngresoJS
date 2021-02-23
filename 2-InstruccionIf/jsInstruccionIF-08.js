/*Al ingresar una edad menor a 18 años y un estado 
civil distinto a "Soltero", NO HACER NADA,pero si no es asi, 
y es soltero y no es menor, mostrar el siguiente mensaje: 
'Es soltero y no es menor.'
    Ariel Nuñez-Ejercicio 8
*/
function mostrar()
{
	var edad;
    var edadPar;
    var estado;

    edad = txtIdEdad.value;
    edadPar = parseInt (edad);
    estado = estadoCivil.value;

    if (edadPar>17 && estado == "Soltero")
    {
        alert ("Es soltero y no es menor.");
    }

}//FIN DE LA FUNCIÓN