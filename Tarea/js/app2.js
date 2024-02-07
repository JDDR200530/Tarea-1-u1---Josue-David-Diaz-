var number1 = parseFloat(prompt("Ingrese un numero"));
var number2 = parseFloat(prompt("Ingrese el segundo numero: "));
if (number2 < 0 || number1 < 0 || number2 > number1){
    alert("El numero que ingreso es invalido o es mayor que el primer numero \n refresque la pagina para volver intentarlo")
}
else{
    let resta = number1 - number2;
alert("La resta de los numero es: "+resta)
console.log('La resta de los numeros es : ', resta);
}


