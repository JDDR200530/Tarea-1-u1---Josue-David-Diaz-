var opcion = parseFloat(prompt("Elija una de las siguientes opciones: \n 1) Multiplicacion \n 2) Division"))
switch(opcion){
    case 1:
           var number1 = parseFloat(prompt("Ingrese un numero"));
           var number2 = parseFloat(prompt("Ingrese el segundo numero: "));
           let Multiplicacion = number1 * number2;
           alert("La multiplicacion de los numeros es igual a: "+Multiplicacion)
           console.log('La multiplicacion de los numeros es igual a: '+Multiplicacion);
           break;
    case 2:
        var number1 = parseFloat(prompt("Ingrese un numero"));
        var number2 = parseFloat(prompt("Ingrese el segundo numero: "));
        var Division = number1 / number2;
        alert("La division de los numeros es igual a: "+Division)
        console.log('La division de los numeros es igual a: '+Division);
        break;

    default: alert("La opcion que ingreso no es validad refresque la pagina")

}
