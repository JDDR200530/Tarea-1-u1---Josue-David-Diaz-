let precio= (parseFloat(prompt("Ingrese el precio del producto")))
let iva = (parseFloat(prompt("Ingrese el porcentaje del IVA")))
let Miva = (precio * iva )/100
let precioF= precio + Miva
alert("El precio total del producto mas la iva es de: "+precioF)
console.log("El precio total del producto mas la iva es de: "+precioF); 


