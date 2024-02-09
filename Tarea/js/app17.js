let Cant1 = parseFloat(prompt("Ingrese la cantidad de pies "))
let Cant2 = parseFloat(prompt("Ingrese la cantidad de metros "))
let pul1= (Cant1*12);
let metro1= (pul1/39.3701)
let yard1= (pul1/36);
let mil1 = (metro1/1609.34)
let pul2= (Cant2*39.3701);
let pie2 = (pul2/12)
let yard2 = (pul2/36);
let mil2 = (yard2/1760);
let sumamilla= mil1 + mil2;
let sumayard = yard1 + yard2
let sumametro = Cant2 + metro1
let sumap = pul1 + pul2;
let sumapie = Cant1 + pie2
alert('La cantidad de '+Cant1+"Pies"+'\n Pulgadas : '+' '+pul1+''+'\n Metro: '+ metro1+'+"\n Yardas:'+yard1+'\n Millas: '+ mil1+''+'')
alert('La cantidad de '+Cant2+"Metros"+'\n Pulgadas : '+' '+pul2+''+'\n Pie: '+pie2+''+"\n Yardas: "+yard2+'\n Millas: '+ mil2+''+'')
alert ("suma de pulgadas:  "+sumap+'\n suma de pie:  '+sumap+'\nsuma metros: '+sumametro+'\n suma yardas: '+sumayard+'\n suma de mil: '+sumamilla)
console.log('La cantidad de '+Cant1+'\n Pulgadas : '+' '+pul1+''+'\n Metro :'+ metro1+''+'\n Millas :'+ mil1);
console.log('La cantidad de '+Cant2+"Metros"+'\n Pulgadas : '+' '+pul2+''+'\n Pie :'+pie2+''+'\n Millas :'+ mil2+''+'');
console.log("suma de pulgadas:  "+sumap+'\n suma de pie:  '+sumap+'\nsuma metros: '+sumametro+'\n suma yardas'+sumayard+'\n suma de mil: '+sumamilla);