let texto = prompt('Ingrese su primer nombre ');
let texto1 = prompt('Ingrese su segundo nombre ');
let texto2 = prompt('Ingrese su primer apellido ');
let texto3 = prompt('Ingrese su segundo apellido ');

function contarCaracteres(texto) {
    let contar = 0;
    for (let j = 0; j < texto.length; j++) {
      if (texto[j] !== ' ') {
        contar++;
      }
    }
    return contar;
  }

  function contarCaracteres1(texto1){
    let contar1 = 0;
    for(let j=0 ; j< texto1.length; j++){
        if(texto1[j] !== ''){
            contar1++;
        }
    }
    return contar1;
  }

    function contarCaracteres2(texto2){
        let contar2 = 0;
        for(let j=0; j< texto2.length; j++){
            if(texto2[j] !== ''){
                contar2++;
            }
                
            }
            return contar2;

            }
    
            function contarCaracteres3(texto3){
                let contar3 = 0;
            for(let j=0 ; j< texto3.length; j++){
                if(texto3[j] !== ''){
                    contar3++;
                }
            }
            return contar3;
            }

            console.log('Longitud del primer nombre: ' + contarCaracteres(texto));
            console.log('Longitud del segundo nombre: ' + contarCaracteres1(texto1));
            console.log('Longitud del primer apellido: ' + contarCaracteres2(texto2));
            console.log('Longitud del segundo apellido: ' + contarCaracteres3(texto3));
            
  