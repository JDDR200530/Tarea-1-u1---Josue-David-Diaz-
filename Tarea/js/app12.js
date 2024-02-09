let Options = parseInt(prompt("Eliga una de las siguientes opciones \n 1) Sumar \n 2) Restar \n 3) Multiplicar \n 4) Dividir "))
 let number1,number2;
 switch (Options) {  
    case 1:
         number1 = parseFloat(prompt("Ingrese un numero"));
         number2 = parseFloat(prompt("Ingrese el segundo numero: "));

      let suma = number1 + number2;
      alert("La suma de los numero es: "+suma)
      console.log('La suma de los numeros es : ', suma);
        break;
    
    case 2:
         number1 = parseFloat(prompt("Ingrese un numero"));
         number2 = parseFloat(prompt("Ingrese el segundo numero: "));
        if (number2 < 0 || number1 < 0 || number2 > number1){
    alert("El numero que ingreso es invalido o es mayor que el primer numero \n refresque la pagina para volver intentarlo")
        }
        else{
     let resta = number1 - number2;
     alert("La resta de los numero es: "+resta)
    console.log('La resta de los numeros es : ', resta);
    }
    break;

    case 3: 
     number1 = parseFloat(prompt("Ingrese un numero"));
     number2 = parseFloat(prompt("Ingrese el segundo numero: "));
    let Multiplicacion = number1 * number2;
    alert("La multiplicacion de los numeros es igual a: "+Multiplicacion)
    console.log('La multiplicacion de los numeros es igual a: '+Multiplicacion);
    break;

    case 4 : 
     number1 = parseFloat(prompt("Ingrese un numero"));
     number2 = parseFloat(prompt("Ingrese el segundo numero: "));
    var Division = number1 / number2;
    alert("La division de los numeros es igual a: "+Division)
    console.log('La division de los numeros es igual a: '+Division);
    break;

    default:"Opcion no valida refresque la pagina "
        break;
}