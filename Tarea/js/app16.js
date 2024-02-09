let atleta1 = parseFloat(prompt("Ingrese el tiempo del primer atleta, por ejemplo, 1.30 minutos: "));
let atleta2 = parseFloat(prompt("Ingrese el tiempo del segundo atleta, por ejemplo, 2.30 minutos: "));

function calcularTiempoAtleta1(tiempo) {
    let segundos = tiempo * 60;
    let minutos = (segundos / 60);
    let horas = (minutos / 60);
    return [segundos, minutos, horas];
}

function calcularTiempoAtleta2(tiempo) {
    let segundos = tiempo * 60;
    let minutos = (segundos / 60);
    let horas = (minutos / 60);
    return [segundos, minutos, horas];
}

let [segundosAtleta1, minutosAtleta1, horasAtleta1] = calcularTiempoAtleta1(atleta1);
let [segundosAtleta2, minutosAtleta2, horasAtleta2] = calcularTiempoAtleta2(atleta2);

alert('El tiempo del atleta 1 es:\nHoras: ' + horasAtleta1 + '\nMinutos: ' + minutosAtleta1 + '\nSegundos: ' + segundosAtleta1);
alert('El tiempo del atleta 2 es:\nHoras: ' + horasAtleta2 + '\nMinutos: ' + minutosAtleta2 + '\nSegundos: ' + segundosAtleta2);

console.log('El tiempo del atleta 1 es:\nHoras: ' + horasAtleta1  + '\nMinutos: ' + minutosAtleta1 + '\nSegundos: ' + segundosAtleta1);
console.log('El tiempo del atleta 2 es:\nHoras: ' + horasAtleta2  + '\nMinutos: ' + minutosAtleta2 + '\nSegundos: ' + segundosAtleta2);