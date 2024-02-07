let texto = prompt("Ingrese un texto");

function contarCaracteres(texto) {
  let contar = 0;
  for (let j = 0; j < texto.length; j++) {
    if (texto[j] !== ' ') {
      contar++;
    }
  }
  return contar;
}

let contarCaracteresTexto = contarCaracteres(texto);

alert('El texto tiene: ' + contarCaracteresTexto + ' caracteres');
console.log('Texto: ' + texto.indexOf('texto'))