let Litros=parseFloat(prompt("Ingrese los litros cubicos que tiene el primer tanque") );
let Litros2=parseFloat(prompt("Ingrese los litros cubicos que tiene el segundo  tanque ") );
let Litros3= Litros + Litros2;
let metros = Litros3/1000;
let domestico = metros *0.75;
let riego = metros *0.25;
let domesticpie = domestico* 35.315;
let riego2 = riego * 35.315;

alert ("El total de litro es de: "+Litros3+"\n En metros cubicos es de: "+metros+"\nPara uso domestico se utiliza: "+domestico + " Metros cubicos "+ "\n Par uso de riego se utiliza: "+riego+"\nPara uso de domestico en pies es de: "+domesticpie+"\nPara uso de riego en pies es de: "+riego2)