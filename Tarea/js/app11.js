
function esPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

var numero = parseInt(prompt("Ingrese un numero"));

if (esPrimo(numero)) {
    alert(numero + " es primo.");
    console.log(numero + " es primo.");
} else {
    alert(numero + " no es primo.");
    console.log(numero + " no es primo.");
}
