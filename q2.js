// 2.Faca um programa que dado uma quantidade de horas, minutos e segundos, imprima o total de segundos.

const prompt = require('prompt-sync')();

let hora = parseInt(prompt('Digite a quantidade de horas desejadas: '));
let minuto = parseInt(prompt('Digite a quantidade de minutos desejados: '));
let segundos = parseInt(prompt('Digite a quantidade de segundos desejados: '));

horseg = hora * 3600;
hormin = minuto * 60;
seg = horseg + hormin;

console.log(`Horas para segundos: ${horseg} segundos`);
console.log(`Minutos para segundos: ${hormin} segundos`);
console.log(`Quantidade total de segundos: ${seg} segundos`);


